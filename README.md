# BasicServer

A basic server, created without express.js, written in ES6.

## How to:

1. Simply require HTTP; it comes with node.

2. Require PORT and declare the port through which you wish to launch your server. (PORT also comes with node.) It best to do so somewhere in the 3000s or 80000, as some ports are off limits. A simple Google search will provide a comprehensive list.

3. Create a function, it can be named anything, to handle the requests and responses.

4. Within the function, send a string to the client when the user visits the PORT url.

5. Create the SERVER using the HTTP package and pass the generic funciton through it.

6. Start the SERVER so it can begin listening for client requests.

7. Server-side, console.log the server when it starts.

8. In your terminal, run: node whateverYouNamedYourFile.js.

# Also:

# Two Servers:

An app that has two servers, without useing ExpressJS.

## How to:

It's pretty simple; it just requires a little more code.

1. Require HTTP

2. Declare two PORTs, each with a different port number; otherwise, the app'll blow up in your face.

3. Create two functions to handle requests and responses.

4. Create two servers, passing one of the functions through each.

5. Start both of the servers.

6. Console.log each to see that they are running.

7. Run: node whateverTheFileIsCalled.js
