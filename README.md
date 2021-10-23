# financial-times-tech-test
[![Build Status](https://app.travis-ci.com/omguhh/financial-times.svg?branch=master)](https://app.travis-ci.com/omguhh/financial-times)

View the final product here: https://yas-financial-times.herokuapp.com/

## ⌛ The task:

Build a server-rendered site that displays headlines from The Financial Times. You may use our
Developer APIs to achieve this. Additionally, provide a search box for users to search for headlines
containing specific words (i.e. searching for "brexit" should return a list of brexit-related headlines).

Optionally, the project could:
- ✅ Be responsive
- ✅ Be accessible
- ✅ Have pagination
- ✅ Not be reliant on client-side frameworks (i.e. Angular, React) or libraries like jQuery
- ✅ Built using Javascript and node.js
- ✅ Uses Origami Components
- ✅ Progressively enhanced
- ✅ Deployed on Heroku
- ✅ Have a similar look and feel as ft.com
- ✅ Perform well over 3G networks
- ❌ Work offline

## 🚀 Local setup:

- clone this repository
- make sure you have `node` & it is version `14+`
- run `npm install` to install dependencies
- you will need to create an `.env` file that contains the following information

```
   ROOT_URL=https://api.ft.com
   API_KEY=<YOUR API KEY>
```

- run `npm start` to start the server
- You can now access the project on localhost:3000

You should see request logs in the terminal. To run tests, you can run `npm test`

## 🚀 Deployment:

All PRs trigger a build on travis that check tests. If a test fails, merging is blocked until it's resolved.
On merge, the latest commit on master is deployed on Heroku.

## 💡 Improvements & ideas:

- **Testing**<br/>
  I didn't really focus much on testing, I wrote some minimal tests using Jest that test basic interaction and functionality but I would have liked to integrate better end to end tests using Cypress.
- **Work offline**<br/>
  I wasn't sure what I could make work offline here, since search is very contextual. Maybe I could've shown a banner on top of the page to indicate that a user has lost connection?
- **Caching**<br/>
  To minimize requests to the endpoint, we can cache responses on REDIS for recurring searches.
- **Websockets**<br/>
  I wanted to added websockets here (ambition!) - so if a new search result for the keyword the user was searching popped in, we can alert them about it. Even if it wasn't in the requirements, it would've been fun to implement (though, not sure about the use case for it..)
- **Fix the footer**<br/>
  OMG. It bothered me that it wasn't stuck to the bottom. I would have liked to fix this before submiting. 😆

## 📝 Notes:

I've never used Heroku, ExpressJS or Orgami before so this was a fun experience for me 😆 . I spent a day and a half working on this and cleaning it up.

Thanks for this 🚀
