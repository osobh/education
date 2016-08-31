# Binary, ASCII, and UTF-8

Let's learn to count, and write like computers!

Computers only use the numbers zero and one. Everything that you see or hear on the computer, every interaction, string, click, scroll and computation is stored using just those two numbers! The zero and one, as it turns out, map very well to true and false, to on and off, to electrical current and no electrical current.

## Objectives
* Define Bits and Bytes
* Convert Decimal to Binary and Hexadecimal Numbers
* Describe UTF-8 and ASCII, including the differences between the two

Since the bits 1 and 0 aren't that useful, they are more often used in 8-bit chunks called bytes.  To see a bunch of random bytes, run this in node:

```js
const crypto = require('crypto')
let bytes = crypto.randomBytes(16)

for (var i = 0; i < bytes.byteLength; i++) {
  let binaryRepresentation = bytes[i].toString(2)
  console.log("0".repeat(8 - binaryRepresentation.length) + binaryRepresentation);
}
```

Numeric values can be represented in any base, though we are most familiar with decimal (using digits 0-9 to represent numbers). Binary represents numeric values with only zero and one.  

If you remember back to grade school a number like `116` was taught as follows:

<table>
  <tr>
    <td>Position</td>
    <td>ten thousands</td>
    <td>thousands</td>
    <td>hundreds</td>
    <td>tens</td>
    <td>ones</td>
  </tr>
  <tr>
    <td>Value</td>
    <td></td>
    <td></td>
    <td>1</td>
    <td>1</td>
    <td>6</td>
  </tr>
</table>

Well, what they didn't explain to you at the time is that this is teaching you decimal representations of numbers. The binary representation of this number looks like this:

<table>
  <tr>
    <td>Position</td>
    <td>one twenty-eights</td>
    <td>sixty-fours</td>
    <td>thirty-twos</td>
    <td>sixteens</td>
    <td>eights</td>
    <td>fours</td>
    <td>twos</td>
    <td>ones</td>
  </tr>
  <tr>
    <td>Value</td>
    <td></td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
  </tr>
</table>

This shows that each "place" in binary represents exactly twice as much value as the preceding place. In decimal each place represents ten times as much value as the preceding place.

#### A small binary example:
The binary value `10`, translates to 2 in decimal ([base 10](https://en.wikipedia.org/wiki/Decimal) is how we think about numbers normally).  `10` represents 2 because the left most value is:
 1 * 2¹ and the 0 is equivalent to 0 * 2⁰. In other words: 10 (binary) = 1 * 2¹ + 0 * 2⁰ = 2 (base 10).

Now you should get the following joke:

> There are 10 types of people in the world, those who understand binary and those who don't.

Another example would be `101` = 1 * 2² + 0 * 2¹ + 1 * 2⁰ = 5 (base 10).

The chart below shows the binary value of 71, `01000111`:

<table>
<tr>
  <td>Position</td>
  <td>2⁷</td>
  <td>2⁶</td>
  <td>2⁵</td>
  <td>2⁴</td>
  <td>2³</td>
  <td>2²</td>
  <td>2¹</td>
  <td>2⁰</td>
</tr>
<tr>
  <td>Amount</td>
  <td>128</td>
  <td>64</td>
  <td>32</td>
  <td>16</td>
  <td>8</td>
  <td>4</td>
  <td>2</td>
  <td>1</td>
</tr>
<tr>
  <td>Binary</td>
  <td>0</td>
  <td>1</td>
  <td>0</td>
  <td>0</td>
  <td>0</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
</tr>
<tr>
  <td>Count</td>
  <td></td>
  <td>64</td>
  <td></td>
  <td></td>
  <td></td>
  <td>4</td>
  <td>2</td>
  <td>1</td>
</tr>
</table>

With this table in mind:

`01000111 = 64 + 4 + 2 + 1`

`01000111 = 71`

Here is another example

<table>
<tr>
  <td>Binary</td>
  <td>1</td>
  <td>1</td>
  <td>0</td>
  <td>1</td>
  <td>0</td>
  <td>1</td>
  <td>1</td>
  <td>1</td>
</tr>
<tr>
  <td>Count</td>
  <td>128</td>
  <td>64</td>
  <td></td>
  <td>16</td>
  <td></td>
  <td>4</td>
  <td>2</td>
  <td>1</td>
</tr>
</table>

`11010111 = 128 + 64 + 16 + 4 + 2 + 1`

`11010111 = 215`

### What about addition?

What is `10010101 + 11110010?`
<table>
<tr>
<td>Binary One</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>0</td>
<td>1</td>
<td>0</td>
<td>1</td>
</tr>

<tr>
<td>Binary Two</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>

<tr>
<td>Sum</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>2</td>
<td>0</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
</table>

We now take this sum and multiply the total binary amounts by their respective base 2 amount

<table>
<tr>
<td>Sum</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>2</td>
<td>0</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>

<tr>
  <td>Amount</td>
  <td>128</td>
  <td>64</td>
  <td>32</td>
  <td>16</td>
  <td>8</td>
  <td>4</td>
  <td>2</td>
  <td>1</td>
</tr>

<tr>
<tr>
  <td>Total</td>
  <td>128 * 2</td>
  <td>64 * 1</td>
  <td>32 * 1</td>
  <td>16 * 2</td>
  <td>8 * 0</td>
  <td>4 * 1</td>
  <td>2 * 1</td>
  <td>1 * 1</td>
</tr>
</table>


`10010101 + 11110010` =  `128* 2	 + 64 *1 + 	+  32 *1	+  16* 2	+  8 * 0	+  4 *1	+  2 * 1	 + 1 *1`

`10010101 + 11110010` = `256 + 64 + 32 + 32 + 4 +2 +1`

`10010101 + 11110010` = `391`

Try subtraction! It works too!

# Character Encoding

## ASCII

So computers are really good at processing numbers quickly, but a computer only really understands zeros and ones. What about letters? How do we translate binary into characters? In english we have 26 letters in the alphabet, so we assign these from 0 to 25 and give them binary values! But..that's not enough. What about uppercase letters? To account for these we need an additional 26... and what about special characters? There are 32 of those (you can count them if you don't believe me), and the space bar too.

So where do we start? Do we start from 0? Or 20? or 40? In the early 1960s this was a big issue. Different computer manufactures would use different encoding schemes which made communication extremely difficult. So the American National Standards Institute (ANSI) set out to develop a common scheme, and in 1963 they came out with [ASCII](https://en.wikipedia.org/wiki/ASCII), which was designed as a __7-bit encoding__ - each character is represented by a set of 7 0s or 1s so that we have 2^7 (or 128) possible characters. We go from `0000000` (0) to `1111111` (127) in this scheme.

- 26 - lowercase characters
- 26 - uppercase characters
- 10  - digit characters
- 32 -  punctuation characters
- 1 - space character

So we're at 95... what's left?

So back in days of ASCII development, teletype machines (typewriters used to send messages across a network) were very common. These machines had additional characters to control them (new line key, carriage return key, backspace key, etc.). These characters are called control characters and they make up the rest of the numbers.

Here is what an [ASCII table](http://www.asciitable.com/) looks like

![http://www.asciitable.com/index/asciifull.gif](http://upload.wikimedia.org/wikipedia/commons/d/dd/ASCII-Table.svg)

If you look at the table you can see the that capital letters always have a 0 in the 2^5 spot where lowercase letters always have 1 there. This was intentional and a smart way to distinguish easily between uppercase and lowercase letters

Take 10 minutes (or watch it at double speed and take 5 minutes) to watch the [Tom Scott video on Unicode](https://www.youtube.com/watch?v=MijmeoH9LT4).

**Nice history lesson, but why do I care about this?**

Believe it or not, we use this quite a bit. For example, this is exactly what the `codePointAt()` and `charCodeAt()` methods do in JavaScript! Try typing `"A".codePointAt(0);` in the chrome console and see what you get? Then look up the value in an ASCII table and you will see it corresponds to `01000001`. You can use `codePointAt()` to do manipulation with letters and strings which is very useful!

NOTE: `charCodeAt` is the old version of `codePointAt`, and doesn't work correctly with UTF8 characters, like emojis.

## UTF

Unfortunately, ASCII does not cover a large amount of special characters, so we use a character encoding called [UTF-8](https://en.wikipedia.org/wiki/UTF-8).

UTF-8 has become the dominant character encoding for the World Wide Web, accounting for [87%](http://w3techs.com/technologies/overview/character_encoding/all) of all Web pages as of writing.

Here is what a UTF table looks like - [http://www.utf8-chartable.de/](http://www.utf8-chartable.de/)

> For more, watch the [Tom Scott Video on UTF8](https://www.youtube.com/watch?v=qBex3IDaUbU&index=2&list=PLzH6n4zXuckqmf_xUcvU5caZVoctP2ehL).

## Seeing Binary in Terminal

Want to see the actual binary that the computer sees?  There are a few ways to do it:

**Using `xxd`**

A program ships with Macs called `xxd`.  Here's how to see the binary for "Hello, world" using `xxd` in Terminal:

```
echo "Hello, world" | xxd -b
```

You'll see this:

```
0000000: 01001000 01100101 01101100 01101100 01101111 00101100  Hello,
0000006: 00100000 01110111 01101111 01110010 01101100 01100100   world
000000c: 00001010                                               .
```

What's going on there?

- The first column is a hexidecimal representation of the position of the string
- The middle columns are the binary representations of each character (`01001000` => "H", `01100101` => "e" etc...)
- The last column shows the characters themselves in a human-readable format

How does it go from `01001000` to "H"?  

- Take a minute to calculate the base-10 version of `01001000`
- Now look that value up in the ASCII table above
- You should see that it's a capital "H"

### Seeing binary in JavaScript

Want to see the binary representation of a String in JavaScript?

**binary ⟼ decimal**

If you have a binary string such as `01001000`, JavaScript can convert that to a decimal like so:

```js
parseInt('01001000', 2) // => 72
```

**decimal ⟼ binary**

If you have a decimal, and you want to see what it is in binary, use `toString` with a base:

```js
(45).toString(2) // => '101101'
```

**binary ⟼ string**

If you have a binary string and want to see what UTF8 characters it represents you need to:

- convert it to a decimal (the code point)
- get the string at that code point

```js
String.fromCodePoint(parseInt('11111010010111110', 2))
```

**string ⟼ binary**

If you have a string and want to see what it's representation is in binary you need to:

- get the string's codePoint
- convert the codePoint to binary

```js
"💾".codePointAt().toString(2) // => '11111010010111110'
```

For more information see:

http://xahlee.info/js/js_unicode_code_point.html

## Seeing UTF-8 in action

Want to see the binary behind an emoji in the Terminal??

```
echo 😀 | xxd -b
```

Want to see the binary behind an emoji in JavaScript??

```js
"😀".codePointAt().toString(2)
```

## Exercise

Practice some basic binary math:

### Convert to Decimal, and Hexadecimal
- 10101010
- 1100110
- 11110010

### Addition
- 11111110 + 110011
- 100011 + 11111
- 11 + 110

### Subtraction
- 11000111 - 10000111
- 1110 - 11
- 10001 - 100

### Write a converter

After you've done the above manually, test yourself by writing a [binary-to-decimal converter](../Exercises/src/binary-encoding/binary.js).

## Stretch

- What's the largest binary number you can write with 5 bits? (What about _n_ bits?)
- Try multiplication/divison (*hint:* It's similar to multiplying decimals)

And if you _really_ want to stretch...  Implement `xxd` in Node!!  Write an app that reads in a file and prints output that matches `xxd`'s output.

Here are some things you'd want to know:

- The new `for...of` loop iterates through code points

  ```js
  const input = "😋😌😜"
  for(const c of input) {
    console.log(c.codePointAt().toString(2));
  }
  // will print 3 times
  ```

- To get the hexadecimal representation of the character position, use:

  ```js
  someNumber.toString(16)
  ```

- Make sure to pad your binary strings and hexadecimal strings into octets (8 characters) and don't use [leftpad](http://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code/) - write it yourself 🤔

## More resources

- http://monsur.hossa.in/2012/07/20/utf-8-in-javascript.html
- http://www.garlikov.com/Soc_Meth.html
