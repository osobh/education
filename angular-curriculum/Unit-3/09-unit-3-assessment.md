# Unit 3 Assessment - Reddit Clone, The Final Chapter

Congratulations - you've come to the end of Unit 3! By now you should have an strong understanding of how to build and structure MEAN stack applications and how to add authentication and authorization to a single page application. To put these skills to the test, let's refactor our reddit clone from Unit 1 to have the following.

#### Required

**Backend**

- You will need to store users, posts and comments in a SQL database
- Users should have at least a username and password (which should be hashed using bcrypt).
- All of your API routes should be handled by express 

**Front End**

- This should be a single page application and angular should handle the routing of all views. 
- You should be using `services` to manage business logic, keep your controllers as skinny as possible.
- You should be using `$resource` to manage (at least most) of your API calls 
- When your HTML starts to get bloated, think about writing some custom directives to clean up your code

**Authentication and Authorization**

- Users do not need to log in to view posts and comments
- Users **must** log in to create / update posts and comments
- Users should be able to see other users posts and comments
- Users should **only** be able to edit and delete their own posts and comments

#### Bonus

- Create admin functionality where an admin has full CRUD over users, posts and comments
- Style the application!
- Add Social Auth using satelizer or Auth0 (or try it on your own!) 
