# Steps to recreate issue

Run npm install
Run npm run start to start the express server

Run cypress open in another window and navigate to the issue-19644/include-body-on-redirect.spec.js test

The 'follows the 308 redirect' will fail.

To see chromes default behaviour run the express server and navigate to localhost:3000 and a scrip will post to the 308 and 307 routes to demonstrate.
