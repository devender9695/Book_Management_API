# Book Management API Documentation

## Authentication

### Register a User

- **URL:** `/api/auth/register`
- **Method:** `POST`
- **Description:** Register a new user account.
- **Request Body:**

  {
    "username": "your_username",
    "password": "your_password"
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
Description: Login and obtain a JWT token.
Request Body:

{
  "username": "your_username",
  "password": "your_password"
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
Description: Retrieve all books.
Success Response:
Code: 200 OK
Content: Array of book objects
Create a Book
URL: /api/books
Method: POST
Description: Create a new book entry.
Request Body:

{
  "title": "Book Title",
  "author": "Author Name",
  "publicationYear": 2024
}
Success Response:
Code: 201 CREATED
Content:

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
Description: Update an existing book by ID.
Request Params: Book ID (:id)
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
Description: Delete a book by ID.
Request Params: Book ID (:id)
Success Response:
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
