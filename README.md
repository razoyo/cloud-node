# node-api-seed

This is a Node, Express application designed to manage API requests.  It doesn't have a database or anything, so it could be used to 'corral' API requests to other providers.

## Install
First of all, clone the repository, then:
```
npm install
```
You need to make an .env file in the root directory that looks like this:
```
NODE_ENV=development
PORT=3000
```
These are environment variables that will be used in the application.  NODE_ENV needs to be either 'development' or 'production', and PORT is the port you are using.

To run the application, you can do this:
```
npm run watch
```
or:
```
node server.js
```
After you get it running, provided PORT=3000, you can test the one sample route like this:
```
curl -X PUT "http://localhost:3000/api/barcode"
```
It should return '123456'.
