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