# emrekarakayakatanaproject

INSTALLIATION
- Install VsCode as IDE to work on
- Then download and install Nodejs
- Then install Cypress on VsCode
    -  Create Empty Project Folder to desired location
    -  Open this folder in VsCode
    -  Create package.json by using "npm init" command on the Terminal of VsCode
    -  Install Cypress by using "npm install cypress --save-dev" command
    -  After this installiation open Cypress window by using "npx cypress open" command
    -  Along with the cypress window opening, it also creates a Cypress folder in the project directory and the Cypress folder will have subfolders like integration, fixtures, plugins, and support. 
    -  Create folders for tests ( I creted separate folder for pages to be tested and another folder for initial tests )
- Install typescript to VsCode by using "npm install -g typescript" command
- Create tsconfig.json file inside the project and fill inside with this : 
- {
  "compilerOptions": {
   "target": "es5",
   "lib": ["es5", "dom"],
   "types": ["cypress", "cypress-xpath"]
 },
 "include": ["**/*.ts"]
}


TEST PREPARATION
- Create a folder for the scripts you will use for the pages to be tested and the elements that make up the structure of these pages.
- Create a seperate folder for tests


TESTS
- Page objects
    - Customer-Card-Page : Includes customer card page elements
    - Customers-page : Includes scstomer page last line elements of the table
    - Katana-login-page : Includes login page elements
    - Plus-sign : Includes the elements on clicking plus sign that used in tests
    - Sales-order-page : Includes sales order page table, last line customer name field
- Tests
    - createCustomerCheck : Login with valid credentials then typing strings to the related fields(first name, last name, email, phone and comment) then checking if given fields on customer card page equals to this newly created customer on customers page
    - createCustomerPageCheck : Login with valid credentials then checking and seeing existance of all fields in customer card page
    - customerDisplayNameCheck : Login with valid credentials then checking if display name label has right color and includes first name and last name fields
    - headerNameCheck : Login with valid credentials then checking if header name field is equals to first name and last name combined(display name)
    - invalidLogin : Trying to login with invalid credentilas and see error message
    - salesOrderCheck : Login with valid credentials then creating a customer with related fields, after creating a new customer, trying to create a sale for that customer and see correct information on sales order page 
