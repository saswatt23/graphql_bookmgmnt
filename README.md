# Book Management Application(BACKEND)
+ This is a book management application designed to help users organize and manage their book collections. 
It provides features such as adding, updating, and deleting books,
user authentication, role-based access control, and integration with external services like cloud storage and email.
# Features
+ User Authentication: Users can sign up, log in, and reset their passwords.
+ Role-based Access Control: Different user roles (e.g., admin, manager, user) have different levels of access to application functionalities.
+ Book Management: Users can add new books, update existing ones, and delete books from their collections.
+ Cloud Storage Integration: Books and other files can be uploaded to and stored in a cloud storage service (e.g., AWS S3, Cloudinary).
+ Email Notifications: Users receive email notifications for actions such as password reset requests.
+ GraphQL API: The application exposes a GraphQL API for interacting with its functionalities.
# Technologies Used:
+ Node.js: JavaScript runtime environment
+ Express.js: Web application framework for Node.js
+ MongoDB: NoSQL database for storing book and user data
+ GraphQL: Query language for APIs used to build the application's API layer
+ Apollo Server Express: GraphQL server integration with Express.js
+ JWT (JSON Web Tokens): Used for user authentication and authorization
+ Cloudinary: Cloud-based image and video management service for storing book cover images
+ AWS SDK: Software development kit for accessing AWS services such as S3 for cloud storage
+ Nodemailer: Module for sending emails from Node.js applications
+ bcryptjs: Library for hashing passwords before storing in the database
+ dotenv: Module for loading environment variables from a .env file into process.env
+ Mongoose: MongoDB object modeling tool for Node.js
+ Multer: Middleware for handling multipart/form-data, primarily used for file uploads
+ Cloudinary: Cloud-based image and video management service for storing book cover images
# Installation
### Clone the repository:

### Copy code
[https://github.com/saswatt23/graphql_bookmgmnt/tree/main](url)

# Install dependencies:
### Copy code

![Capture](https://github.com/saswatt23/graphql_bookmgmnt/assets/133504202/01e975d5-3fd5-44f1-aa64-2a3af434a2bd)

## Set up environment variables:

### Create a *.env* file in the root directory and add the following environment variables##:

## Copy code
![Capture1](https://github.com/saswatt23/graphql_bookmgmnt/assets/133504202/245277e5-d18e-41d5-bc12-232e8850cc46)
### Replace <username>, <password>, <cloudinary_cloud_name>, <cloudinary_app_key>, <cloudinary_app_secret>, <smtp_user>, <smtp_password>, <aws_access_key_id>, and <aws_secret_access_key> with your actual values.
## Usage
+ Start the server:
## Copy code
`npm start`
Access the application at [http://localhost:4000.](url)

# API Reference
### The application's GraphQL API provides the following operations:

+ query { books { id, title, author } }: Get a list of all books.
+ mutation { addBook(title: "Book Title", author: "Author Name") { id, title, author } }: Add a new book.
+ mutation { updateBook(id: "<book_id>", title: "New Title") { id, title, author } }: Update an existing book.
+ mutation { deleteBook(id: "<book_id>") { id, title, author } }: Delete a book.
### For more details, refer to the GraphQL schema and resolver files.

# Contributing
### Contributions are welcome! Please fork the repository and submit a pull request with your changes.

# License
### This project is licensed under the `#000000` MIT License.
