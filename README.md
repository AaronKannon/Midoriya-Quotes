# Midoriya-Quotes -  A ReactJS app

This project is a practice about a React class that teaches hooks and good standards in the market, like Unit tests, global env variables, react app structure, and more.

## To Use

Here below are the scripts that you can run:

### `npm start`

Runs the app in the development mode. With that script, you'll run the front-end project at all.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode. Here have five tests, divided by four test.js files.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `json-server -p 5000 --watch db.json`

This command runs the fake back-end API Json-server, using a JSON file to simulate a REST API. The `-p 5000` part is to prevent a conflict with the React port. To use this, you need to install [json-server](https://github.com/typicode/json-server).

### The .env file and porting to a real Back-end service

To change the address to a real API, you need to do some steps.
 * Change the `REACT_APP_API` variable to the correct address
 * If your back-end makes a single JSON return: 
    * Change the getQuote function to the commented one.
    * After that, change `response[0]` from the `quoteService.test.js` and `App.test.js` to `response` only.
    * Also you need to change the response variable at the same classes above, removing the `[]` brackets around, to change to a single JSON instead of an array.
 * If your back-end returns a list of all quotes, leave it as it is.