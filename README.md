Story Creator
=========

Story Creator is a multi-page full-stack application which allows users to read and create stories, share contributions and upvote other users' contributions. 

## Tech Stack

- Front-end: jQuery, EJS, SCSS
- Back-end: Node, Express, PostgreSQL

## Project Setup

1. Clone your copy of the repo to your dev machine
2. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
3. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
4. Install dependencies: `npm i`
5. Fix to binaries for sass: `npm rebuild node-sass`
6. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x

## Screenshots

Home Page:
!["HomePage"](https://github.com/davidRamalho/story-creator/blob/master/docs/screenshots/HomePage.png?raw=true)

User Page:
!["User Page"](https://github.com/davidRamalho/story-creator/blob/master/docs/screenshots/UserPage.png?raw=true)
