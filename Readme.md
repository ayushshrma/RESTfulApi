CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Requirements
 * Installation
 * Structure
 * Testing 
 * Contact

 ## Introduction

 In this project, I have created a RESTful CRUD API that allows user to create, read, update, and delete movies. The API is implemented using Node.js, Express, and MongoDB.I have used the Mongoose ORM to create the database schema.
 
 I have start by building the API using the RESTful design pattern. The API is implemented using the following HTTP methods: PUT, GET, POST, and DELETE.
 Building the movies model and different routes for handling all the CRUD operations. 
 
 Finally, I have test my REST APIs using Postman. 

 ## Requirements

 * Node.js
 * Express
 * MongoDB
 * Mongoose
 * Postman
 * MongoDB Atlas

 ## Installation

 1. Clone the repository
 2. Install the dependencies using npm
 3. Start the server using the command "node index.js"
 4. Access the API using the following URL: http://localhost:8080/api/movies.
 5. Test the API using Postman.

 ## Structure

 The project is structured as follows:

 * **index.js**: Contains the server code.
 * **models**: Contains the movie model.
 * **routes**: Contains the routes for handling the CRUD operations.
 * **test**: Contains the test code.
 * **config**: Contains the configuration files.
 * **controllers**: Contains the controllers for handling the API requests.
 * **images**: Contains the images for postman api tests.

 ## Testing

 The project is tested using Postman.

## Creating a new movie using POST /api/movies API.
 
 <img  height="250" width="475" alt="" src="https://raw.githubusercontent.com/ayushshrma/RESTfulapi /master/images/postman/create_movie.gif" />

## Reading all the movies using GET /api/movies API.
 
 <img  height="250" width="475" alt="" src="https://raw.githubusercontent.com/ayushshrma/RESTfulapi /master/images/postman/read_movies.gif" />
 
## Reading a movie using GET /api/movies/{id} API.
  
  <img  height="250" width="475" alt="" src="https://raw.githubusercontent.com/ayushshrma/RESTfulapi /master/images/postman/read_moviebyid.gif" />

## Updating a movie using PUT /api/movies/{id} API.
  
   <img  height="250" width="475" alt="" src="https://raw.githubusercontent.com/ayushshrma/RESTfulapi /master/images/postman/update_movie.gif" />

## Deleting a movie using DELETE /api/movies/{id} API.
 
   <img  height="250" width="475" alt="" src="https://raw.githubusercontent.com/ayushshrma/RESTfulapi /master/images/postman/delete_movie.gif" />
 
## Contact
  E-mail: [sharmaayush20999@gmail.com](mailto:sharmaayush20999@gmail.com)
  Websites: [http://ayushshrma.github.io](http://ayushshrma.github.io)
  Linkedin: [https://www.linkedin.com/in/ayushsharmaa](https://www.linkedin.com/in/ayushsharmaa)





