# Book Management API

This is a simple book management API built with Node.js for managing book entries, user authentication, and filtering books by author or publication year.

## Installation

1. **Clone the Repository:**
git clone https://github.com/devender9695/Book_Management_API.git
cd book-management-api/   
npm install

Set Environment Variables:
Create a .env file in the root directory.
Add the following environment variables

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

Start the Server:
npm start

# API Endpoints
## User Authentication
POST /api/auth/register
Create a new user account.
Request Body: { "username": "your_username", "password": "your_password" }
POST /api/auth/login
Login and get a JWT token.
Request Body: { "username": "your_username", "password": "your_password" }
Book Operations
GET /api/books
Get all books.
POST /api/books
Create a new book.
Request Body: { "title": "Book Title", "author": "Author Name", "publicationYear": 2024 }
PUT /api/books/:id
Update a book by ID.
Request Params: Book ID (:id), Request Body: { "title": "Updated Book Title", "author": "Updated Author Name", "publicationYear": 2024 }
DELETE /api/books/:id
Delete a book by ID.
Request Params: Book ID (:id)

## Testing
You can test the API using tools like Postman or curl. Ensure that you have set up environment variables and have MongoDB running locally or use a cloud-based MongoDB service.
