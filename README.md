# cloud-node

This is the API to communicate with Magento and manage the socket.io stuff.

## Install
First of all, clone the repository, then:
```
npm install
```
You need to make an .env file in the root directory that looks like this:
```
NODE_ENV=development
PORT=3000
SOCKET_PORT=4200
```
These are environment variables that will be used in the application.  NODE_ENV needs to be either 'development' or 'production', and PORT is the port you are using. SOCKET_PORT is the port that the socket listens to.

To run the application, you can do this:
```
npm run watch
```
or:
```
node server.js
```
