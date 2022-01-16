# Text api ii

This is a new api thats changes all program logic of the text-api(i)


## Requeriments

### Environment 

     Nodejs latest (17.3.1)

     npm latest (8.3.0)

### Modules

     bcrypt 5.0.1

     cors 2.8.5

     express 4.17.2

     jsonwebtoken 8.5.1

     mongoose 6.1.6

     fs

    Pd: fs is a module native of node, doesn't need instalation

## Install modules

     npm i 

## Routes

### User's routes

    . POST http://localhost:8000/api/users/register : Register an user. Needs four parameters from body request: a name(String), a last_name(String), an email(String) and a password(String). Returns a message.

    . POST http://localhost:8000/api/users/auth : Authentificates an user. Needs two parameters from body request: an email(String) and a password(String). Returns a token, a message and a user.

### Text notes routes

    . GET http://localhost:8000/api/text_notes : Gets all text notes of the user. Needs two parameters from header request: an authorization(that token) and an user(that user). Returns an object array that contains all user notes. 

    . POST http://localhost:8000/api/text_notes : Creates a text note. Needs two parameters from body request and one from header request: a title(String) and a user(String) from body request and an authorization(token) from header request. Returns a message.

    . DELETE http://localhost:8000/api/text_notes : Deletes a text note. Needs two parameters from header request: a file_name(String) and an authorization(token). Returns a message. 

    . GET http://localhost:8000/api/text_notes/read : Reads a text note. Needs two parameters from header request: a file_name(String) and an authorization(token). Returns the content of text note. 

    . POST http://localhost:8000/api/text_notes/write : Writes a text note. Needs two parameters from body request and one from header request: a content(String) and a user(String) form body request and an authorization(token) from header request. Returns a message.

