# E-Commerce Backend 

This project utilizes Express.js API to create a backend for an e-commerce platform, integrating Sequelize for communication with a MySQL database. The backend facilitates the management of products, categories, and tags linked to the products.

## Features 

- Implementation of a RESTful API to handle e-commerce entities such as products, categories, and tags.
- Full CRUD functionality for each entity, enabling creation, retrieval, updating, and deletion of products, categories, and tags.
- Integration of Sequelize ORM for efficient database management.
- Establishment of a secure connection to the MySQL database through the use of environment variables.

## Technologies Used 

- Node.js
- Express.js
- MySQL
- Sequelize 

### Prerequisites

- Node.js
- MySQL
- npm (Node Package Manager)

### Installation

-Clone the repository:
-npm install
-npm run seed
-node sever.js

## Usage 

The API is accessible at http://localhost:3001/api/ and provides the following endpoints:

1. /api/products for managing products through CRUD operations.
2. /api/categories for managing categories through CRUD operations.
3. /api/tags for managing tags through CRUD operations.

To test the API endpoints, you can use tools like Insomnia or Postman.e a tool like Insomnia or Postman to test the API endpoints.


## License 
N/A
