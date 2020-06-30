# Words

## Technologies

I chose to use Node.js and Express.js for the server, the reason is that this is my safe place and the most recent languages I use.

## Getting Started

1. Clone this repository using HTTP:

   `git clone https://github.com/linoyzaga/words.git`

2. Go to the repository library:

   `cd words`

3. Install packages:

   `yarn install`

4. Strat the server

   `node app.js`

That's it, you are all set!

## Avaliable Endpoints

1. Counter endpoint

   POST `/counter`

   Options for data could be:

   - String - Limit up to 500 chars.
   - File path
   - URL

   Request example:
   `{ "data": "Hi! My name is (what?), my name is (who?), my name is Slim Shady" }`

2. Statistics endpoint

   GET `/statistics/:word`

   Request example for the word 'my': `http://localhost:3000/statistics/my`

## Project Structure

Breaking down the basic structure and the configurations

```
src/
  api
    index.js              // words router
  config
    index.js              // config initalaztions
  controllers
    words.controller.js   // words controller
  data
    file.csv              // an example file
    staticticsCache.js    // simulate DB cache
  helpers
    responses.js          // api reponses wrapper
  loaders
    express.js            // express initalaztions
    index.js              // init all loaders to app
  middlewares
    errors.js             // error middleware fot the api
    validations.js        // validation middleware for the api
  services
    readers
      fileReader.js       // file type async reader
      index.js            // start point for all reader
      ReaderManager.js    // ReaderManager class for init the current reader function
      stringReader.js     // string type reader
      urlReader.js        // url type async reader
    words.services.js     // BI logic
  validations
    words.js              // joi schema for words modal
.env                      // environment variables
.gitignore                // github's default node gitignore with customizations
app.js                    // server's strart point
package.json              // common dev deps and workspace-wide scripts
README.md                 // workspace-wide information. shown in github
```

---

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/linoyzaga/words.git)
