---
path: "/blogs/firestore-learning"
date: "2022-06-01T02:49:48.575Z"
title: "MyManual: Firestore"
tags: ["blog", "mymanual", "firebase", "firestore"]
description: "Learning notes on Firestore"
featuredimage: 
featuredimageAlt: 
---

```toc
```

## Document-Dollection Model
1. **Document** is similar to json dictionary, it contains one or multiple **fields** like below:
```
Document
brid_type: "swallow"
airspeed: 42.733
coconut_capacity: 0.62
isNative: false
icon: <binary data>
vector: {
    x: 36.4255
    y: 25.1442,
    z: 18.8816
}
distances_traveled: [42, 39, 12, 42]
```
2. *Collection* is a collection of documents. It can ONLY contain documents.
3. Document can be only < 1MB size.
4. Document cannot contain another do cument. It can contain **sub-collection** but not other document directly.
5. The root of a Firestore tree can only contain collections


## Query Fundamentals
![picture 57](images/1088f546f7610c493b736096fc47fd1f989476143839d3e0df84599bed1678d5.png)  
1. To navigate in your database, we are will do something like: `firestore.collection(...).document(...).collection(...).document(...)`. Or, we can also access the data by providing a path to that document like this: `firestore.document("/users/user_123/workouts/workout_abc/history/05182017")`
2. In Firebase, query is **shallow** by default. If you grab a parent level document, sub collection will be grabbed.


## Query Rules
1. Firestore will index your fields with a "type". Indexing means the DB will 
![picture 59](images/d69814208d57dfcc4d996ed12242df5d796d4688893b6da929e53d4c24b18465.png)

2. Idealy, query should only happen in one collections. For example we have a tree like this: [Restaurants] -> [Reviews]:
    * We can query for one restaurant, what are the reviews which have more than 4 stars;
    * Query spam among several collections is called Collection Group Query. For example, if we want to get all reviews higher than 4 stars amoung all restaurants, we need to define:
        * Colleciton ID: "reviews"; Field path: "rating"; Index Scope: "Collection group"
        * This will tell the DB to index the rating fields of every documents in any collection with ID of "reviews"
        * The number of this kinds of CGQ is limited - 200
        * This will index all the collections with the same name. So if there are some unrelated collections of Reviews, they will also be indexed.
3. Firestore does not support "query in one collection then use the queried information to make another query". For example, we cannot query user document in users collections and then join the reviews from that user.
4. Fields can only be queried by using ">", "<", "==". (Because they are sorted.) The idea of Firestore querying is, it will only do query by a. finding one point in the sorted index(using binary search); b. grab adjacent items of that point. For example, "or" and "not" queries are not supported.
5. We can join two fields in one collection, for example, we can do "query all restaurants **city=='SF' and cuisine=='Japanese'**". This is done by doing "zig-zag" querying.
    ![picture 65](images/8c56796cf1fb4bd8eeeddce02aaa194e6ef268f9d5ef3b5e412bdb4834258af9.png)
    * Above Zig-zag query makes sense when the query is "equal and equal". For "**less and equal**" type of query, it's tricky, because the zig-zag only works when the ID is sorted, but for "less-than" query, ID is not sorted.
    ![picture 66](images/a470972d8c16bbbfd7d93b2b5c774cea2065b9b96cfd5b508d7000e9930ab63b.png)  
    * for this kind of query pattern, we can create `composite indexes` for this type of query - `zuocode_rating`:
    ```json
    {
        restaurants:[{
                name: "BurgerThyme!"
                address: {
                    addr_1: "123 Fake Street"
                    city: "San Francisco"
                    state: "CA"
                    zip: "94045"
                }
                cuisine: "Burgers"
                avg_rating: 4.76
                zipcode_rating: "94045_4.76"
            }]
    }
    ```
    * Firestore can do this for us **automatically**. We can manually use Firestore UI to create this composite index or, we can run the query and Firestore will detect this kind of query and generate link for us to create them.
    * With this technic, we can do "equal\equal\equal\...\equal\less_than(more_than)" query.
6. Array in Firestore does not support 'insertAt(idx, el)', 'deleteAt(idx, el)', 'retrieve(idx)'
    * ![picture 63](images/a8efbb759341969c0e18eaf4ca7b1f2ddde16e6f99ab2b0a5f566557a0d5ef01.png)  
    * For above collections, we can make query like: `collection("dickens_books").where("keywords", "array-contains", "drama")`
    * This can be done because behind the scene, Firestore is converting the keywords list to a map: `keywords: ["orphan", "crime", "London", "thieves"]` -> `keywords: {"orphan": true, "crime": true, "London": true, "thieves": true}`

## Data Structuring
1. Do not make document too big (size[1mb max] and fields[20,000 fields]):
    * Document has limits
    * Document cannot be retrieved (and controlled by security rule) partially
2. And, do NOT make document too small (fragmented)
    * data retrieving is shallow
    * you are billed by the number of reads and writes you perform
    * Do not pre-maturely optimize the data structure in order to reduce billing
    * Queries find documents in single collection
3. Put data in the same document if they are always displayed together
4. Put data in collection if **you are going to search for individual piece of the data or if you are expecting it to have rome to grow**
5. As an exmaple of restaurants database, let's say we store "reviews" as a sub-collection under restaurant document. And in our app, we are going to display one restaurant with several (not all) reviews. For this use case, what we can do is create a field inside of restaurant document for "**review_preview**" and store latest (or some other order) reviews. We have Cloud Function to keep this in sync.
6. For "flag" style data, we can either store a map of key->`true` or, we can store them in a list. But, according to the video, the approach of list will not allow you to do 2 attributes query. List is friendly for security rules, like "who is allowed to edit the restaurant".
    ```json
    {
        name: "some restaurant"
        cuisine: "French"
        rating: 4.92
        attributes: {
            takes_reservations: true
            romantic: true
            kid_friendly: false
        }
        editors: [userID_2852, userID_4582]
        // or, better solution for this editor list, so we can do security rule as:
        // allow write if: restaurant.roles[userId] = "editor"
        roles: {
            userId_2852: "editor"
            userId_4571: "editor"
            userId_8123: "owner"
        }
        // however, this approach might leak some information for security reason, a better option is to store this kind of information outside of this collection
        // or, we can have a sub-collection called "private data" and only contain this kinds of secrity data
    }
    ```

## Security Rules
