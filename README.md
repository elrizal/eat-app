# Drink a smoothie app
## What is this?
A basic full-stack developed site to add, delete and "drink" each item by putting it into another list.

## Debugging
Currently, the user is able to delete items if a smoothie is available to drink, but not add
them. The app works locally, but cannot be properly deployed to Heroku. 
Debugging in progress. 

## Required Packages
- method-override
- bodyParser
- express
- express-handlebars
- mysql

## Directories
- config
    - connection.js
    - orm.js
- controllers
    - burgers_controller.js
- db
    - schema.sql
    - seeds.sql
- models
    - burger.js
- node_modules
- package.json
-  public
    - assets
    - css
        - style.css
    - img
    - test.html
- server.js
- views
    - index.handlebars
    - layouts
        - main.handlebars
