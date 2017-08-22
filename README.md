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
MAGENTO_URL=https://www.example.com
MAGENTO_USERNAME=username
MAGENTO_PASSWORD=password
```
These are environment variables that will be used in the application.  NODE_ENV needs to be either 'development' or 'production', and PORT is the port you are using. SOCKET_PORT is the port that the socket listens to.  The magento variables are the base URL, username, and password for the Magento2 install.

To run the application, you can do this:
```
npm run watch
```
or:
```
node server.js
```
