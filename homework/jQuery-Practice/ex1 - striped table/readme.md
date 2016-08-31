# Challenge 1 - Striped Table 

## Task

You are going to build a table and a form where the user can type in a color and when the form is submitted, the background color of the even rows of the table will change.

## Getting Started 

1. Build a table with three columns and five rows. 
2. The first row should consist of table heading (`th` tags)
3. The table should be built using symantically correct tags including 
thead, tbody and tfoot.
4. Build a form that allows the user to input some text. Give that form a label of "Change the background color for even rows". Use `<label for="">` to properly build your forms.
6. Add a submit button with the text "Change!"
1. If the user has submitted a valid color, use a css selector along with the val() and css() methods to capture the input value and change the background color for the even rows.
2. Make sure that the first row of the table (the row with `th` tags) does not change color! Your selector should only target `td` tags.

Remember the proper way to build a table (using symantically correct tags like thead, tbody and tfoot)
2. Use odd/even or n-th child selectors


### jQuery methods you may be using 

1. css()
2. on()
3. val()

## Bonus

1. Add two other input fields with the labels ("change odd property") and ("change odd value")
2. When the user submits the form, use the val() and css() methods to capture input values and change the css properties for the odd rows
