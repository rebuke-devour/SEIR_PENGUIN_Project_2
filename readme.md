# Project 2
#### KeyMaster

# Project Summary

- As we continue to create Online Personas online, password management continues to be bear to keep in mind. This application works to mitigate this painpoint by storing and encrypting your passwords on your device.

# User Stories

## User Persona(s)
 This approach follows the "Four Perspectives" method by Lene Nielsen outlined in interaction-design.org.

 This is designed toward the the "Goal-Oriented" Persona, and is defined as follows: "...by its personal, practical, and company-oriented goals as well as by the relationship with the product to be designed, the emotions of the persona when using the product, and the goals of the persona in using the product (hence Goal-Directed)." 

Thus, the desired outcome for this application is to provide the user with secure storage of their password information, and will provide simple intiutive UI with the functions and features outlined below...

## Functions & Features
- Basic CRUD Functionality; User should be able to Create, Read, Update and Delete their stored information.

- Vault Storage: The ability to store and encrypt passwords,(Working to include notes as well).

## Value Propesition

- For those who are concerned with the security of their login information, this application provides Secure Password storage with encryption.

## Acceptance Criteria
To meet Minimum Viable Product, this application will provide: 
- Detailed README
- Full CRUD functionality to its data model.
- Follow RESTful conventions 
- Responsive Styling
- Use of the following: Modal, Carousel, and/or sandwhich menu (using jQuery or Plain vanillaJS)

- This Application will be deployed to Heroku

## Intent & Desired Outcome
- A full functioning application that provides the user with a secure password storage solution.

# Challenges

- detail roadblocks : TBD

## List of Technologies
Mongoose, Express, LiquidJS, NodeJS and BcryptJS 
( Ive seen many that use React as well, will use if viable )

## Models

List here any models in your app and their properties:

passwordSchema({
   { acctName: String, required: true},
   { password: String, required: true},
})

## Route Table

List your routes in a table

| url | method | action |
|-----|--------|--------|
|/keymaster | GET | get all passwords (index)|
|/keymaster/:id | GET | getindividual pw(show)| 
|/keymaster/:id/edit | GET | Show (edit) form |
|/keymaster/new | GET | Show (new) password form|
|/keymaster | POST | Input password, redirect home|
|/keymaster/:id | PUT | Update PW, redirect home |
|/keymaster/:id | DELETE |Delete pw ,redirect home|
