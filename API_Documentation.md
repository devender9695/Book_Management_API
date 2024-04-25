# Book Management API Documentation

## Authentication

### Register a User

- **URL:** `/api/auth/register`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "example_user",
    "password": "example_password"
  }
Success Response:
Code: 201 CREATED
Content:
{
  "message": "User registered successfully"
}
Login
URL: /api/auth/login
Method: POST
Request Body
{
  "username": "example_user",
  "password": "example_password"
}
Success Response:
Code: 200 OK

Content:
        {
  "token": "your_generated_jwt_token"
}

Book Operations
Get All Books
URL: /api/books
Method: GET
Success Response:
Code: 200 OK
Content: Array of book objects
Create a Book
URL: /api/books
Method: POST
Request Body

{
  "title": "Book Title",
  "author": "Author Name",
  "publicationYear": 2024
}
Success Response:
Code: 201 CREATED

{
  "message": "Book created successfully",
  "book": {
    "_id": "book_id",
    "title": "Book Title",
    "author": "Author Name",
    "publicationYear": 2024
  }
}


Update a Book
URL: /api/books/:id
Method: PUT
Request Params: Book ID (id)

Request Body:
    {
  "title": "Updated Book Title",
  "author": "Updated Author Name",
  "publicationYear": 2024
}


Success Response:
Code: 200 OK

Content:
    {
  "message": "Book updated successfully",
  "book": {
    "_id": "book_id",
    "title": "Updated Book Title",
    "author": "Updated Author Name",
    "publicationYear": 2024
  }
}
Delete a Book
URL: /api/books/:id
Method: DELETE
Request Params: Book ID (id)
Success Response
Code: 200 OK

Content:
    {
  "message": "Book deleted successfully",
  "book": {
    "_id": "book_id",
    "title": "Deleted Book Title",
    "author": "Deleted Author Name",
    "publicationYear": 2024
  }
}


ChatGPT
Sure, let's create an API_Documentation.md file for your book management API to document the API endpoints and their usage. You can follow this template and fill in the details based on your actual API endpoints and functionalities:

markdown
Copy code
# Book Management API Documentation

## Authentication

### Register a User

- **URL:** `/api/auth/register`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "example_user",
    "password": "example_password"
  }
Success Response:
Code: 201 CREATED
Content:
json
Copy code
{
  "message": "User registered successfully"
}
Login
URL: /api/auth/login
Method: POST
Request Body:
json
Copy code
{
  "username": "example_user",
  "password": "example_password"
}
Success Response:
Code: 200 OK
Content:
json
Copy code
{
  "token": "your_generated_jwt_token"
}
Book Operations
Get All Books
URL: /api/books
Method: GET
Success Response:
Code: 200 OK
Content: Array of book objects
Create a Book
URL: /api/books
Method: POST
Request Body:
json
Copy code
{
  "title": "Book Title",
  "author": "Author Name",
  "publicationYear": 2024
}
Success Response:
Code: 201 CREATED
Content:
json
Copy code
{
  "message": "Book created successfully",
  "book": {
    "_id": "book_id",
    "title": "Book Title",
    "author": "Author Name",
    "publicationYear": 2022
  }
}
Update a Book
URL: /api/books/:id
Method: PUT
Request Params: Book ID (id)
Request Body:
json
Copy code
{
  "title": "Updated Book Title",
  "author": "Updated Author Name",
  "publicationYear": 2024
}
Success Response:
Code: 200 OK
Content:
json
Copy code
{
  "message": "Book updated successfully",
  "book": {
    "_id": "book_id",
    "title": "Updated Book Title",
    "author": "Updated Author Name",
    "publicationYear": 2023
  }
}
Delete a Book
URL: /api/books/:id
Method: DELETE
Request Params: Book ID (id)
Success Response:
Code: 200 OK
Content:
json
Copy code
{
  "message": "Book deleted successfully",
  "book": {
    "_id": "book_id",
    "title": "Deleted Book Title",
    "author": "Deleted Author Name",
    "publicationYear": 2024
  }
}

Error Responses
Code: 400 BAD REQUEST
Content: { "error": "Invalid request data" }
Code: 401 UNAUTHORIZED
Content: { "error": "Unauthorized" }
Code: 403 FORBIDDEN
Content: { "error": "Forbidden" }
Code: 404 NOT FOUND
Content: { "error": "Resource not found" }

Code: 500 INTERNAL SERVER ERROR
Content: { "error": "Internal server error" }
