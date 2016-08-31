# Advanced Problems

1. Create a function that takes a `string`. This string might be really long, or really short.  
Output each letter next to the number of times that letter appears, using a pipe for each time a letter appears. 
Here's an example of what should happen:  
```javascript
letterCount("cool stuff")
> lettercount: 
> c : |
> f : ||
> l : |
> o : ||
> s : |
> t : |
> u : |
```

2.  Given a function with an arbitrary number of arguments, the first of which is always an operator, perform the operation sequentially on each numerical argument that comes after.

Here's an example of what should happen:  
```javascript
prefixNotation("+", 1, 3, 5)

> 9 // 1 + 3 + 5

prefixNotation("-", 20, 10, 1)

> 9 // 20 - 10 - 1

prefixNotation("/", 20, 4, 2)

> 2 // 20 / 5 / 2 

```
