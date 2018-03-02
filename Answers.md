<!-- Answers to the Short Answer Essay Questions go here -->
Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

Middleware are functions, pieces of code that run before other functions in order to provide some particular functionality.  A session is a place to store data that you want access to across requests. Bcrypt is a hashing algorithm, typically used to encrypt passwords. JWT or JSON Web Token is a JSON object which gets encrypted formed of 3 parts, used to store information about the user right in the client.

What does bcrypt do in order to prevent attacks?

It generates an encryption key using the password, a salt, and a cost factor.

What are the three parts of the JSON Web Token?

	•	Header
	•	Payload
	•	Signature

