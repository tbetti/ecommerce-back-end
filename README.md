# E-Commerce Back-End
  ![licenseShield](https://img.shields.io/badge/license-MIT-yellow)
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  This application allows users to work with e-commerce data.  It allows users to view, create, modify, or delete products, categories, and tags about each.

  ## Installation
  Download the Develop file and open in your source code editor.  Open two new terminals connected to the Develop folder.  In one terminal, run npm install to ensure you have all the necessary packages installed.  In the other terminal, connect to mysql and run “source db/schema.sql” to create the database.  Switch back to the first terminal and run “node models/index.js” to create models or tables of the data.  After, run “npm run seed” to fill the models with data.  Once all this is complete, run “node server.js” to start the application.

  ## Usage
  Once the terminal says the application is running on port 3001, open Insomnia or another program that runs api routes.  To view all categories or to create a new category, run a GET or POST request at http://localhost:3001/api/categories.  You will need to post a JSON body with “category_name”.  To view, update, or delete individual categories, run a GET, PUT, or DEL request at http://localhost:3001/api/categories/:id.
  
  To view all products or to create a new product, run a GET or POST request at http://localhost:3001/api/products.  You will need to post a JSON body with the “product_name”, “price” (decimal), “stock” (integer), and “tagIds” (array of integers).  To view, update, or delete individual categories, run a GET, PUT, or DEL request at http://localhost:3001/api/products/:id. 
  
  To view all tags or to create a new tag, run a GET or POST request at http://localhost:3001/api/tags.  You will need to post a JSON body with “tag_name”.  To view, update, or delete individual categories, run a GET, PUT, or DEL request at http://localhost:3001/api/tags/:id.
  
   View [demo video](https://drive.google.com/file/d/1vgVW75Npa2oeC_jL97iNY3cCyi8fT4j6/view?usp=sharing).

  ## License
  This project is registered under the [MIT License](/LICENSE)

  ## Contributing
  * Tiana Bettinson
  
  ## Tests
  * N/A

  ## Questions
  * __GitHub:__ [github.com/tbetti](https://github.com/tbetti)
  * __Email:__ [tiana.bettinson@gmail.com](mailto:tiana.bettinson@gmail.com)
   
  
  _This README was created using the [README Generator](https://github.com/tbetti/readme-generator)_

