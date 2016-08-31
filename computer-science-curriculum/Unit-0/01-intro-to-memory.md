# Intro to Memory

### Objectives

* Define and describe the purpose of:
  - Heap
  - Stack
  - Threads
  - Garbage Collection

### What is Memory?
Memory refers to the "working space" a program has available to it to store values and do calculations on those values. When we store strings, arrays, numbers, or objects- these items are kept in a computer's *memory*. There are 4 major memory storage levels- in this article we are concerned with the first two.

1. **Internal Memory**  
This covers stuff like Processor Registers- the individual places that our processor stores small amounts of information in order to do calculations on them. It also covers things like the L0-L4 Caches, which are where larger pieces of information are stored in order to be broken down and operated upon. You can't load an entire array of a few thousand numbers into this kind of storage, it would be broken down and processed in pieces. We're abstracted away from dealing with this by our operating system, but in some lower-level languages (such as COBOL) we have some access to this kind of memory.  
2. **Main Memory**  
Main Memory is the level of abstraction most programmers spend time thinking about. This refers to **RAM** (Random Access Memory) which is sometimes called Volatile Memory because it does not retain the information stored when it's not powered. When your program runs, the variables and files it reads and data it's working with is stored in RAM. RAM is where the **Heap** lives.
3. **Online Mass Storage**  
Today, this might sound like we're referring to a service like Dropbox. In reality, we're actually talking about "removable media", such as hard disks. We're talking about stuff that the processor does not have direct access to because it's not built into the actual main logic board of the computer. Because Hard Disk Drives (**HDDs**) are connected to the main logic board by a cable, they're called Auxiliary Memory. This is a throwback to the days when most programs didn't require more than the working memory of the computer to run. Hard Disks are *Non-Volatile*, so they can keep the data stored on them even when they are not powered.
4. **Offline Bulk Storage**  
This actually does refer to services like Dropbox, but it also refers to databases hosted on another computer, or to a backup service. This kind of storage is not meant to be frequently read or written to, but is only accessed a few times in the course of running the program. You might be thinking, "but I access my database many times when I'm running a webserver", but you access your database several orders of magnitude fewer times than you access locally scoped variables and files from the hard drive. When we refer to something as "offline", what we mean is "we must leave our immediate physical location to access it".


##  Memory Management

JavaScript, Python, Ruby and PHP are all very high level languages. When we say "high level", what we mean is that many things that are manually managed in other languages have been abstracted, and so are handled for you. It's best to understand how these abstractions work, so that you understand what is automatically happening.

One of the biggest things that higher level languages (like JavaScript, Python or Ruby) abstract away is Memory Management. With a language like C or C++, you must manually _allocate_ and _deallocate_ memory as you use it. Memory Allocation really just means that you reserve some space in memory, telling the operating system to reserve that space for your program. Inside of the program, your program has to decide how much space to allocate for any given type of information, because a string is usually much larger than a number. All of these considerations go into managing memory, but in higher level languages these concerns are handled automatically, such as in the following javascript code:

```javascript
var num = 123
```
In the above JavaScript code, memory is allocated for a number.  But you do not have to write any extra code to make sure that memory exists; this is handled for you.  Additionally, when that memory is no longer needed, it will be automatically removed from your computer.  This process is known as __garbage collection__.

## Garbage Collection

In computer science, garbage collection (GC) is a form of automatic memory management. The garbage collector attempts to reclaim memory occupied by objects that are no longer in use by the program. Garbage collection was invented by John McCarthy around 1959.

Garbage collection is often portrayed as the opposite of manual memory management, which requires the programmer to specify which objects to deallocate and return to the memory system. However, many systems use a combination of approaches, including other techniques such as [stack allocation](https://en.wikipedia.org/wiki/Stack-based_memory_allocation),  [region inference](https://en.wikipedia.org/wiki/Region-based_memory_management) or [automatic reference counting](https://en.wikipedia.org/wiki/Automatic_Reference_Counting). Like other memory management techniques, garbage collection may take a significant proportion of total processing time in a program and can thus have significant influence on performance.

Garbage Collection works by looking through memory for objects that are "reachable" through all of the current stack frames. Local variables in the current execution context, parent contexts, global variables like `window` or `global` and anything allocated in the global stack frame. Anything in memory that doesn't have a way for you to refer back to it (such as through a variable, or in a property, or as a parameter) gets deallocated, and then that memory space can be used by other programs. This process runs approximately every 16ms, and it takes up some of the time and processing resources that your program would normally be using to execute statements.

### Optional Exercise:
[Read this article on JavaScript Memory Profiling](https://developers.google.com/web/tools/chrome-devtools/profile/memory-problems/memory-diagnosis). Take a look at your Q1 and Q2 projects and see if you can see any major memory leaks with this tool.

* Using the Memory Profiler, try to find at least one memory leak.
* Write up where the memory leak is occurring, and give an example that can be replicated
* File it as an issue on your Q1 or Q2 project

Note that filing a memory leak issue on your own project shows that you're able to find memory leaks, even if you can't fix them yet. If you're able to fix it, turn the find and the fix into a blog post. This shows very deep knowledge of how JavaScript works, and will really impress potential employers!

#### More on Garbage Collection

- [Garbage Collection in Node.js](https://strongloop.com/strongblog/node-js-performance-garbage-collection/)

- [How does memory management work in JavaScript?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management).  

- [Here's a great video on performance in Javascript, that dives into memory management (advanced).](https://www.youtube.com/watch?v=VhpdsjBUS3g)

## Threads

In computer science, a thread of execution is the smallest sequence of programmed instructions that can be managed independently by a scheduler (typically as part of an operating system). The implementation of threads and processes differs from one operating system to another, but in most cases, a thread is a component of a process. Multiple threads can exist within the same process and share resources such as memory, while different processes do not share these resources - this is known as [multi-threading](https://en.wikipedia.org/wiki/Multithreading_%28computer_architecture%29).

Languages like JavaScript, Python and Ruby don't start off as multithreaded processes, but there are libraries and frameworks to help support that. Objective-C and Swift rely heavily on multithreading for performance reasons.

> If you want to learn more about this, check out this [video](https://www.youtube.com/watch?v=3YD66bHehhQ&list=PLhQjrBD2T380dhmG9KMjsOQogweyjEeVQ&index=48).

## Stack & Heap

Two of the most essential concepts in memory management are the __Stack__ and the __Heap__.

### Stack

The [stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) is the memory set aside as scratch space for a thread of execution.

For example, when a function is called, a block is reserved on the top of the stack for local variables and some bookkeeping data. When that function returns, the block becomes unused and can be used the next time a function is called. The stack is always reserved in a LIFO (last in first out) order; the most recently reserved block is always the next block to be freed. This makes it really simple to keep track of the stack; freeing a block from the stack is nothing more than adjusting one pointer.

### Heap

The [heap](https://en.wikipedia.org/wiki/Heap_(data_structure)) is memory set aside for dynamic allocation. Unlike the stack, there's no enforced pattern to the allocation and deallocation of blocks from the heap; you can allocate a block at any time and free it at any time. This makes it much more complex to keep track of which parts of the heap are allocated or free at any given time; there are many custom heap allocators available to tune heap performance for different usage patterns.

![stack and heap](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/116/stacknheap.png)

> Read [more](http://stackoverflow.com/questions/79923/what-and-where-are-the-stack-and-heap) on StackOverflow.
>
> Read about [whether Javascript allocates memory in the heap or the stack for your variable](http://stackoverflow.com/questions/5326300/garbage-collection-with-node-js/5328761#5328761)


## Pause and Reflect

In your own words, write down the following:

1. What are the 4 levels of memory? Where are they located?

2. If I declare a variable, such as `var x = 5`, where is that stored? What about `var arr = [3,5,6,73,56]`?

3. If I connect to a database on another computer, what level of memory is that?

4. When does the garbage collector run?

5. What kinds of objects get deallocated by the garbage collector?


## Writing Time!
Consider completing the exercise in the Garbage Collection example above. Using the [JavaScript Memory Profiler](https://developer.chrome.com/devtools/docs/javascript-memory-profiling) is something that more advanced developers use to ensure their applications are performing and aren't leaking memory. It's a process you might get to take part in, and showing you're able to will be an asset in getting hired. Take the time to reflect and write on this critical concept, and try to explain it to yourself as you were before you knew about Garbage Collection.
