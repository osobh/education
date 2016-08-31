### Crushing Candy Code

A local chain of candy stores has hired you to draw conclusions from their sales data. This is made difficult by the fact that each store keeps track of their own inventory sales in a slightly different manner. Use the data sets contained in data.js to complete the following exercises.

### Exercises

#### Let's practice reading values from the data
 - How would I access the value '4.63' from store1?
 - What about the cost of 'Dark Chocolate Crunchies' from store4?
 - Now get the sale dates for 'Banana Bunches' from store2.
 - What built-in array property would I use to determine how many sale dates there for store2's 'Banana Bunches'?
 - Use the same property to count the total number of 'Berry Bites' sold by store4.
 - Create a variable to store the name of a candy (such as `var candy = 'Caramel Twists'`). Use this variable to access the sale dates for that candy in store 2.
 - Update the previous candy name variable to a different candy. How did that change the sale date data ouput?

#### Now let's try updating some values:
 - Set a variable to equal the prices of the 'Mint Wafers' in store2. (Spoiler warning... `var mintWafersCost = store2['inventory prices']['Mint Wafers']`)
 - When you update your new variable, does the price in the store2 data change? Why?
 - Now set a variable equal to the Peanut Butter Buttered Peanuts sale dates in store2. (Spoiler... `var pbbpSaleDates = store2['sale dates']`)
 - Use the `Array.push()` method to add two sale dates to the pbbpSaleDates variable. Does the original store 2 data change? Why?
 - Use `Array.pop()` to remove one of the sale dates for store2's Caramel Twists.
 - Set a variable equal to Berry Bites data for store3 on January 7. (Spoiler... `var berryBitesData = store3[1]['inventory sold']['Berry Bites'])
 - Use your new variable to modify the quantity sold. Do you expect the store3 variable to have changed? Why?

#### Now let's loop over some of the data:
 - Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
 - With your previous loop, use it to count the total number of candies sold that day at store1. Where do you have to initialize the counter variable? Why?
 - Create a loop to iterate over the sale data from store3. Use this loop to create an array of dates contained in the sale data.
 - Iterate over the store2 sale dates for Caramel Twists. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
 - What problems did you have with the previous task? Were you able to easily increment the quantity sold data? Why?
 - Use `Object.keys()` to get an array of the dates that candies were sold at store1.
 - Objects don't have a built-in length property, but we can use the array of keys to determine the "length" of the object.
 - Iterate over the generated array of dates. Use each date to console.log the specific sale data for the day from store1.
 - Now, use the previous loop to calculate the total number of candies sold at store1. Where do you have to initialize the counter variable? Why?
 - Use the current loop to build an object with each candy as the key and the price as the value.
 - Within the same loop, create an object similar to `{'Mint Wafers': 12, 'Banana Bunches': 1}` where each candy is a key and the value is the quantity sold.
 - Did you have any trouble adding the quantities sold for each candy? Why? How did you work around this?
 - Now create a similar object as before, but with each date as the key and the total number of candies sold that day as the value.
 - Use `Object.keys()` to loop over the inventory sold for a specific day in store3. While iterating over the data, create an object containg each candy's name and price.
 - Using the same technique, iterate over store2's sale dates data. Which day had the most total number of sales? How did you calculate this?

#### After doing all of the above, see if you can do the following tasks:
 - Create an array of the candies sold by store1 on January 10th.
 - Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? (Each date represents 1 item sold.)
 - Can you do the following inside of another loop to determine the total amount that store4 made?
 - Determine how much money did store3 make on January 9th.
 - Calculate how much they made from selling Dark Chocolate Crunchies across all the days.
 - Create an object containing the amounts that store2 made by selling each type of candy.

#### Questions to consider:
 - Which store had the easiest data to access? Why? Did it depend on the task?
 - How can the order of keys in a nested object make a specific task easier or harder?
 - Can you think of a better way to store the data in order to keep track of the inventory sold?

#### Stretch Goals: (these are hard!)
 - For each store, create two objects. The first one will use the candy names as the keys and the value will be another object containing the sale price and the quantities sold. The second object will use the dates as the main key and each value will be an object with key-value pairs of each candy name and the money made selling that candy.
 - Using the ideal data structure that you laid out before as a pattern, create functions to create new store data arrays from the existing data. This is called 'normalizing' the data - you are making it all consistent to ease future tasks.
 - Build onto the previous functions by combining the data from the four separate stores so that you have a single set of data. Make sure that you don't lose any details from the initial data.
 - After creating a function to combine the data, create two additional functions, `getInventoryCountSold()` and `getGrossProfit()` which respectively get the total numbers of items sold and the total dollars from sales. Each item can optionally take a type of candy to return the numbers about that candy. If there's no argument passed, it should return the total numbers for all candy types. For example, `getInventoryCountSold('Banana Bunches')` should return 12.
