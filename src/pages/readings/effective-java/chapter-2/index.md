---
path: "/readings/effective-java-chapter-2"
date: "2022-07-14T02:17:02.697Z"
title: "Effective Java: CP2 - Creating and Destroying Objects (1-9)"
description: "This chapter concerns creating and destroying objects: when and how to create them, when and how to avoid creating them, how to ensure they are destroyed in a timely manner, and how to manage any cleanup actions that must precede their destruction."
tags: ["readings","effective java"]
featuredimage: 
featuredimageAlt: ""
---

```toc
```

## Item 1: Consider static factory methods instead of constructors
### Apart From...
...public constructor,
```java
public class Boolean {
    private boolean value;

    public Boolean(boolean b) {
        this.value = b
    }
    
    // ...
}
```

### Also Consider...
...public static factory method.
```java
public class Boolean {
    private boolean value;

    public static Boolean valueOf(boolean b) {
        return b ? Boolean.TRUE : Boolean.FALSE;
    }
}
```

### Advantages of static factory methods...
1. ...unlike constructors, they have names. It improves readability when class has many ways of creation. Constructor does not have name and requires overload. Ex. `BigInteger(int, int, Random)` V.S. `BigInteger.probablePrime(int, int, Random)`. 
2. ...are not required to create a new object each time they're invoded. Take the `Boolean` example as above. This pattern supports singleton creation.
3. ...can return an object of any subtype(of an interface) of their return type. Ex. `java.util.Collections` is an noninstantiable class providing 45 static factory methods to create java collections. This Collections Framework API is much smaller than it would have been had it exported 45 separate public classes.
    * As of Java 8, interface can contain static methods. So there is little reason to provide noninstantiable class for an interface.
4. ...the class of the returned object can vary from call to call as a function of the input parameters.
5. ...the class of the returned object need not exist when the class containing the method is written. This can decouple the clients from the implementations.

### Limitations of static factory methods...
1. ...is that classes without public or protected constructors cannot be subclassed.
2. ...is hard for programmers to find. They do not stand out in API documentation in the way that constructors do.

## Item 2: Consider a builder when faced with many constructor parameters
### Don't...
... long list of constructors parameters.
```java
public class NutritionFacts {
    private final int servingSize; // required
    private final int servins;  // required
    private final int calories;  // optional
    // ...

    public NutritionFacts(int servingSize, int servings) {
        this(servingSize, servings, 0);
    }

    public NutritionFacts(int servingSize, int servings, int calories) {
        this.servingSize = servingSize;
        this.servings = servings;
        this.calories = calories;
        // ...
    }
}
```

### Do...
```java
public class NutritionFacts {
    private final int servingSize;
    private final int servings;
    private final int calories;

    public static class Builder {
        // required
        private final int servingSize;
        private final int servings;

        // optional
        private int calories = 0;

        public Builder(int servingSize, int servings) {
            this.servingSize = servingSize;
            this.servings = servings;
        }

        public Builder calories(int val) {
            this.calories = val;
            return this;
        }

        public NutritionFacts build() {
            return new NutritionFacts(this);
        }
    }

    private NutritionFacts(Builder builder) {
        this.servingSize = builder.servingSize;
        this.servings = builder.servings;
        this.calories = builder.calories;
    }
}
```

### Advantages of builder pattern...
1. ...class is immutable. 
2. ...builder can be chained. Easy to write. Easy to read.
3. ...is well suited to class hierarchies. Abstract classes have abstract builders; concrete classes have concrete builders. Find example on {E.J. p.14}.

### Trade off: Disadvantages of builder pattern...
1. ...extra cost for the builder creation.
2. ...more verbose than constructor. Trade off the pros and cons.

## Item 3: Enforce the singleton property with a private constructor or an enum type
> Making a class a singleton can make it difficult to test its clients because it's impossible to substitue a mock implementation for a singleton unless it implements an interface that serves as its type.

### First way of singleton...
...with public static final field:
```java
public class Singleton {
    public static final Singleton INSTANCE = new Singleton();
    private Singleton() {/*...*/}

    public void publicMethod() { /*...*/}
}
```

### Second way of singleton...
...with static factory
```java
public class Singleton {
    priavte static final Singleton INSTANCE = new Singleton();
    private Singleton() {/*...*/}
    
    public static Singleton getInstance() { return INSTANCE; }

    public void publicMethod() { /*...*/ }
}
```

### Pros and Cons
* Pros of public static final field:
    * the API makes it clear that the class is a singleton
    * it's simple
* Pros of static factory:
    * flexibility to change your mind about whether the class is a singleton without changing its API. Ex. it could be modified to return a separate instance for eah thread that invokes it.
    * possible to write generic singleton factory (item 30)
    * `Singleton.getInstance()` can be used as a supplier - `Supplier<Singleton>`

### Serialization - Enum singleton
Add `readResolve` method to preserve singleton property. More to {E.J. p.18}.
```java
public enum Singleton {
    INSTANCE;

    public void publicMethod() { /*...*/ }
}
```
* similar to public static final field, but more consice
* provides the serialization machinery for free

## Item 4: Enforece noninstantiability with a private constructor
> To write a class that is just a grouping of **static** methods and **static** fields (utility class), we want to enforce noninstantiability.

### Don't...
```java
public abstract class UtilityClass {
    // static methods, fields
}
```
**It does not work.** Because the abstract class can be subclassed and the subclass instantiated. And misleads user to think this class was designed for inheritance.

### Do...
```java
public class UtilityClass {
    // Suppress default constructor for noninstantiability
    private UtilityClass() {
        throw new AssertionError();
    }
}
```

## Item 5: Prefer dependency injection to hardwiring resources
### Do...
```java
public class ClientClass {
    private final DependencyClass dependency;

    public ClientClass(DependencyClass dependency) {
        this.dependency = dependency;
    }

    // ...
}
```

### Advantages of DI...
1. ...preserves immutability, multiple clients can share dependent objects.
2. ...improves flexibility and testability

### Inject factory
```java
Mosaic create(Supplier<? extends Tile> tileFactory) {/*...*/}
```

## Item 6: Avoid creating unnecessary objects
### Don't...
```java
String s = new String("some string");
```

### Do...
```java
String s = "some string";
```

### Why?
In a big loop, the first way will create lots of unnecessary objects. The second way can reuse the same object.

**When an object is immutable, it is obvious it can be reused safely, but there are other situations where it is far less obvious, even counterintuitive.**

### Autoboxing: Long - long
> Autoboxing blurs but does not erase the distinction between primitive and boxed primitive types.
```java
// Super slow! Because everytime do sum += i, am unnecessary Long object is created.
private static long sum() {
    Long sum = 0L;
    for (long i = 0; i <= Integer.MAX_VALUE; i++)
        sum += i;
    
    return sum;
}
```
**Prefer primitives to boxed primitives, and watch out for unintentional autoboxing.**