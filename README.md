# Chart The Stock Market

## Overview

A textbook trading app that allows students to search for books with the Google Books API and add them to their collection. Users can browse, search, and sort the student library and propose trades with other students. In app notification let's users know when a trade has been proposed. Trades can be accepted, declined, and canceled. Users can edit their personal settings and mark books as available / unavailable and view pending trades. Authentication done with JWTs and a hash / salt based encryption strategy.

A demo version of the app is located at https://book-trader.herokuapp.com/

![](demo.png)

## Install

The following must be installed to run the project:

* Node    
* NPM
* MongoDB  

And to install the application dependencies:

    $ npm install

## Run

To access the Google Books API, go to the Google Developer Console at https://console.developers.google.com/

Search for the Google Books API and then click Enable. Under Credentials, copy the API key and save as GOOGLE_KEY environment variable.

Create a secret key for the JWT_SECRET environment variable. This can be done with Node from the command line using the crypto library:

    node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"

Start up a local MongoDB instance or enter a database URI in the MONGO_URI environment variable.

To start the app:

    $ npm run start

Navigate to

    http://localhost:3000

## Test

To run the test suite, type the command:

    $ npm test

## Stack

| Front-End
|:---------   
| HTML5 / CSS3
| Javascript
| React
| React Router
| Babel
| Webpack

| Back-End
|:---------   
| Node.js
| Express
| MongoDB       
| Mongoose
| Redis

## License

MIT License
