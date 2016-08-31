# Challenge 3 - Form validation

## Task

You are going to build your first client-side validation! The user should be able to input a password and as the user types (on keypress), the length of the password should be checked. If the user submits the form with an empty password, an error message should be appended to the page that says "please enter a password". If the length of the password is under 6 characters, an additional error message should be appended to the page that says "Your password must be longer than 6 characters"

## Getting Started

1. Create a form with an input for a password (make sure the input type is not "text")
2. As the user types, check to see the length of the password and show/hide an error message depending on the length.
3. When the user submits the form, make sure that a password exists and that it is longer than 6 characters.
4. If the user has successfully submitted the form, fade out the form and fadeIn a message saying "Thank you for signing up!"


### Some jQuery methods you might use (not a complete list)

1. on()
2. preventDefault()
3. append()
4. show()
5. hide()
6. text()
7. fadeOut()
8. fadeIn()
