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