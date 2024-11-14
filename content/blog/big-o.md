---
external: false
title: "Grokking Algorithms: Big O Notation"
description:
    "In this blog post I'll be talking about the big O notation section of the first chapter from grokking algorithms"
date: 2024-11-12
img: "none"
imgalt: "no image"
---

![GIF](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWR1NWh5MTB3bnd3b2sybzhwMmJoMjJmc3A1M2YzMTRrZXVqNWNrZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xTiIzJSKB4l7xTouE8/giphy.gif)

Hello! In this blog post, I'll be talking about the Big O notation section from the first chapter of Grokking
Algorithms. The book makes it really easy to understand what Big O notation is and how it helps us determine the
efficiency of an algorithm.

## TL;DR

Algorithms go BRR, and binary search is super FAST!

(Insert Initial D song {% ntl href="https://www.youtube.com/watch?v=OFFBTXPR38Q&t=63s" %}YouTube song link{% /ntl %} )

![GIF](https://media.giphy.com/media/EKUuPwmQB5CpO/giphy.gif?cid=790b7611kd5vs3oianic2petchy61l4uml41arq2b7o6mmid&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## What is Big O Notation?

The book explains that "Big O notation is special notation that tells you how fast an algorithm is." The author also
mentions "runtime," which refers to how quickly an algorithm completes a task depending on the size of the input.

What is this special notation? The author gives an example of the notation as:

```
"Big O" -> O(n) <- "Number of Operations"
```

This tells you the number of operations an algorithm will take, and it's called "Big O" because you put an uppercase "O"
in front of the number of operations.

![GIF](https://media.giphy.com/media/tMPSeKEplOfK0/giphy.gif?cid=ecf05e4768ljjdds0r5r9tscn2uinc1crflg9kd69s92v9a6&ep=v1_gifs_related&rid=giphy.gif&ct=g)

Big O of n `O(n)`, where n is the number of elements, means there will be as many operations as there are elements. The
worst-case scenario is used when determining how long an algorithm will take.

## Algorithm Growth Rates

Let's say we are looking for a name in a list of 100 names, and we use the simple search algorithm, which has a runtime
of `O(n)` which is called linear time. The algorithm will look at each element until it finds the one we are looking
for. In the worst-case scenario, we could look through 99 names in the list.

Comparing this to binary search, which halves the list repeatedly while determining which half the name is in,
significantly reduces the time. The runtime for binary search is `O(log n)` which is called logarithmic.

Let's pretend each guess is 1ms. Simple search will take 100ms while binary search will take 7ms only having to guess 7
times. When the list of elements grows the times drastically change. Here's a comparison:

| # of Elements | Simple Search | Binary Search |
| ------------- | ------------- | ------------- |
| 100           | 100ms         | 7ms           |
| 10,000        | 10 seconds    | 14ms          |
| 1,000,000,000 | 11 days       | 30ms          |

Here's a list of the common runtimes the book talks about from fastest to slowest:

-   O(log n), also known as logarithmic time. Example: binary search.
-   O(n), also known as linear time. Example: simple search.
-   O(n \* log n). Example: a fast sorting algorithm, like quicksort.
-   O(n^2), or n to the power of 2. Example: a slow sorting algorithm, like selection sort.
-   O(n!). Example: a very slow algorithm, like the traveling salesperson problem.
