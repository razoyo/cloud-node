# cloud-node

This is the API to communicate with Magento and manage the socket.io stuff on the web app side of the Magic Mirror project. To run this successfully, you'll need to run this application on your local environment and the Magic Mirror application at the same time.

## Install
First of all, clone the repository, then:
```
npm install
```
 We've included a .env file that will communicate with a working Magento store, you will need to replace the USERNAME and PASSWORD with the information provided at the NodeSchool Meetup.
 
<table>
  <tbody>
    <tr>
      <td colspan="2">Environment Variables</td>
    <tr>
      <th align="center">Variable</th>
      <th align="center">Definition</th>
    </tr>
    <tr>
      <td align="left">
			  NODE_ENV	
      </td>
      <td align="left">
				A string. This will be either `development` or `production`
      </td>
		</tr>
		<tr>
      <td align="left">
			  PORT	
      </td>
      <td align="left">
				A number. This is what port the http routes will be listened to, as in POST url:PORT/route
      </td>
		</tr>
		<tr>
      <td align="left">
				SOCKET_PORT
      </td>
      <td align="left">
				A number. This is the port for the socket.
      </td>
		</tr>
		<tr>
      <td align="left">
        MAGENTO_URL
      </td>
      <td align="left">
				A string. This is the base URL for Magento2.
      </td>
		</tr>
		<tr>
      <td align="left">
        MAGENTO_MEDIA_URL
      </td>
      <td align="left">
				A string. This is the base URL for Magento2 images.  GET 'V1/store/storeConfigs' will get a 'base_media_url' that can be used--without the final '/'.
      </td>
		</tr>
		<tr>
      <td align="left">
        MAGENTO_USERNAME
      </td>
      <td align="left">
				A string. This is the admin username for Magento.
      </td>
		</tr>
		<tr>
      <td align="left">
        MAGENTO_PASSWORD
      </td>
      <td align="left">
				A string. This is the password for the Magento install.  Redacted.
      </td>
		</tr>
		<tr>
      <td align="left">
				PICTURE_PATH
      </td>
      <td align="left">
				A string.  This is the base directory where the pictures will be put.
      </td>
		</tr>
  </tbody>
</table>

These are environment variables that will be used in the application.  NODE_ENV needs to be either 'development' or 'production', and PORT is the port you are using. SOCKET_PORT is the port that the socket listens to.  The magento variables are the base URL, username, and password for the Magento2 install.

To run the application, you can do this:
```
npm run watch
```
or:
```
node server.js
```
