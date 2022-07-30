---
path: "/blogs/learning-dagger"
date: "2022-07-30T05:35:29.273Z"
title: "Learning Dagger"
description: "Notes for Dagger."
tags: ["blog", "dagger", "di"]
featuredimage: 
featuredimageAlt: ""
---

```toc
```

## `@Inject` annotation 
### 1. On constructor
Automatically obtains an instance of parameters and invokes the constructor.
### 2. On field
“If your class has `@Inject`-annotated fields but no `@Inject`-annotated constructor, Dagger will inject those fields if requested, but will not create new instances. Add a no-argument constructor with the `@Inject` annotation to indicate that Dagger may create instances as well.” - [Link](https://dagger.dev/dev-guide/#:~:text=If%20your%20class%20has%20%40Inject%2Dannotated%20fields%20but%20no%20%40Inject%2Dannotated%20constructor%2C%20Dagger%20will%20inject%20those%20fields%20if%20requested%2C%20but%20will%20not%20create%20new%20instances.%20Add%20a%20no%2Dargument%20constructor%20with%20the%20%40Inject%20annotation%20to%20indicate%20that%20Dagger%20may%20create%20instances%20as%20well.)

## `@Provides` annotation
Inject annotation will call the injected constructor to initialize the object. `@Provides` annotation enables customizable method to “provide” injected object.
```java
@Provides static Heater provideHeater() {
  return new ElectricHeater();
}
```

Whenever object Heater is requested, this provideHeader() will be called.

To create an alias of a type:
```java
@Provides static Heater provideHeater(ElectricHeater heater) {
  return heater;
}
```

## `@Binds` annotation
```java
@Binds Heater bindHeater(ElectricHeater impl);
```
Can also create an alias of one type.

## `@Module` annotation
All `@Binds` and `@Provides` are required to be put in a `@Module` annotated interface.
```java
@Module
interface HeaterModule {
  @Binds Heater bindHeater(ElectricHeater impl);
}
```

## `@Component` annotation
This annotation is used at Application level. By annotating an interface with `@Component` with defined modules, Dagger framework will create a concrete class named as “DaggerXXX” with builder().
```java
@Component(modules = DripCoffeeModule.class)
interface CoffeeShop {
  CoffeeMaker maker();
}
```

```java
CoffeeShop coffeeShop = DaggerCoffeeShop.builder()
    .dripCoffeeModule(new DripCoffeeModule())
    .build();
```

## `@Singleton` annotation
Can be used to annotate injectable classes or providers.

## `@Reusable` annotation
“That means that if you install a module with a @Reusable binding in a component, but only a subcomponent actually uses the binding, then only that subcomponent will cache the binding's object. If two subcomponents that do not share an ancestor each use the binding, each of them will cache its own object. If a component's ancestor has already cached the object, the subcomponent will reuse it.” – [Link](https://dagger.dev/dev-guide/#:~:text=That%20means%20that,will%20reuse%20it.)

## Lazy wrapper
`@Inject` or `@Provides` annotated type can be wrapped in Lazy defers instantiation until the first call to `get()` method.
```java
class GrindingCoffeeMaker {
  @Inject Lazy<Grinder> lazyGrinder;

  public void brew() {
    while (needsGrinding()) {
      // Grinder created once on first call to .get() and cached.
      lazyGrinder.get().grind();
    }
  }
}
```

## Provider wrapper
A Provider<T> invokes the binding logic for T each time .get() is called. If that binding logic is an @Inject constructor, a new instance will be created, but a @Provides method has no such guarantee. – [Link](https://dagger.dev/dev-guide/#:~:text=A%20Provider%3CT%3E%20invokes%20the%20binding%20logic%20for%20T%20each%20time%20.get()%20is%20called.%20If%20that%20binding%20logic%20is%20an%20%40Inject%20constructor%2C%20a%20new%20instance%20will%20be%20created%2C%20but%20a%20%40Provides%20method%20has%20no%20such%20guarantee.)

```java
class BigCoffeeMaker {
  @Inject Provider<Filter> filterProvider;

  public void brew(int numberOfPots) {
  ...
    for (int p = 0; p < numberOfPots; p++) {
      maker.addFilter(filterProvider.get()); //new filter every time.
      maker.addCoffee(...);
      maker.percolate();
      ...
    }
  }
}
```

## `@Qualifier` annotation
Can be used when object initialization cannot be determined only by its type. In Spring, `@Name` is used for “name” based wiring. In Dagger, you can annotate an annotation interface with `@Qualifer` to define your own wiring annotation.

```java
@Qualifier
@Documented
@Retention(RUNTIME)
public @interface Named {
  String value() default "";
}
```

```java
class ExpensiveCoffeeMaker {
  @Inject @Named("water") Heater waterHeater;
  @Inject @Named("hot plate") Heater hotPlateHeater;
  ...
}
```

```java
@Provides @Named("hot plate") static Heater provideHotPlateHeater() {
  return new ElectricHeater(70);
}

@Provides @Named("water") static Heater provideWaterHeater() {
  return new ElectricHeater(93);
}
```

## `@BindsOptionalOf` annotation
```java
@BindsOptionalOf abstract CoffeeCozy optionalCozy();
```

That means that @Inject constructors and members and @Provides methods can depend on an Optional<CoffeeCozy> object. If there is a binding for CoffeeCozy in the component, the Optional will be present; if there is no binding for CoffeeCozy, the Optional will be absent. – [Link](https://dagger.dev/dev-guide/#:~:text=That%20means%20that%20%40Inject%20constructors%20and%20members%20and%20%40Provides%20methods%20can%20depend%20on%20an%20Optional%3CCoffeeCozy%3E%20object.%20If%20there%20is%20a%20binding%20for%20CoffeeCozy%20in%20the%20component%2C%20the%20Optional%20will%20be%20present%3B%20if%20there%20is%20no%20binding%20for%20CoffeeCozy%2C%20the%20Optional%20will%20be%20absent.)

## `@BindsInstance` annotation
Marks a method on a component builder or a parameter on a component factory as binding an instance to some key within the component.

```java
@Component(modules = AppModule.class)
interface AppComponent {
  App app();

  @Component.Builder
  interface Builder {
    @BindsInstance Builder userName(@UserName String userName);
    AppComponent build();
  }
}
```

```java
public static void main(String[] args) {
  if (args.length > 1) { exit(1); }
  App app = DaggerAppComponent
      .builder()
      .userName(args[0])
      .build()
      .app();
  app.run();
}
```