---
path: "/readings/effective-java-chapter-3"
date: "2022-07-19T01:52:37.281Z"
title: "Effective Java: CP3 - Methods Common to All Objects (10-14)"
description: "When and how to override the nonfinal Object methods."
tags: ["readings","effective java"]
featuredimage: 
featuredimageAlt: ""
---

```toc
```

## Item 10: Obey the general contract when overriding equals
### The easiest way...
> The easiest way to avoid problems is not to override the equals method, in which case each instance of the class is equal only to itself. This is the right thing to do if any of the following conditions apply:

1. Each instance of the class is inherently unique.
2. There is no need for the class to provide a "logical equality" test.
3. A superclass has already overridden equals, and the superclass behavior is appropriate for this class.
4. The class is private or package-private, and you are certain that its equals method will never be invoked.

> When a class is value class, overriding the equal method is appropriate. Few contracts you must adhere.

1. Reflexive `x.equals(x)` must be `true`;
2. Symmetric: `x.equals(y)` $\iff$ `y.equals(x)`
3. Transitive: `x.equals(y)` and `y.equals(z)` $\implies$ `x.equals(z)`
4. Consistent: if `x.equals(y)` returns `true`, then any times of invocation will return the same value
5. For any non-null reference value x, `x.equals(null)` must return `false`
6. Liskov Substitution principle: any important property of a type should also hold for all its subtypes so that any method written for the type should work equally well on its subtypes. Basically, a subclass is still a superclass and must ack like as one.

## Item 11: Always override hashcode when you override equals
> You must override hasCode in every class that overrides equals.

## Item 12: Always override toString
> Providing a good `toString` implementation makes your class much more pleasant to use and makes systems using the class easier to debug.

## Item 13: Override clone judiciously
> In practice, a class implementing Cloneable is expected to provide a properly functioning public clone method.

> immutable classes should never provide a clone method. Because it's encouraging wasteful copying.

## Item 14: Consider implementing Comparable
> `compareTo` is declared in `Comparable` interface. It is required when sorting is needed for this class.

Use comparator for comparing:
```java
private static final Comparator<PhoneNumber> COMPARATOR = 
        comparingInt((PhoneNumber pn) -> pn.areaCode)
            .thenComparingInt(pn -> pn.prefix)
            .thenComparingInt(pn -> pn.lineNum);

public int compareTo(PhoneNumber pn) {
    return COMPARATOR.compare(this, pn);
}
```