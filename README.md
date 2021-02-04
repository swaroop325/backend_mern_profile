# Backend module of MERN App

Backend module for frontend module

## Tech details:
Hosted in heroku

### [LIVE API URL ➫](https://mern-swaroop325.herokuapp.com/)
### Project Structure

    ├── Procfile	# heroku file
    ├── .env	    # Env variables are stored her for local setup
    |
    └── src		           	     
        ├── controllers 	     # api response 
    	├── middlewares 	     # middleware files
        ├── models 	             # schema files  			 
    	├── routes 	             # api routes
        └── server.js      		 # main filer where the server is written

### Dependencies:

```
node dependancies
```

- [bcrypt]
- [cors]
- [datauri]
- [express]
- [express-validator]
- [jsonwebtoken]
- [mongoose]
- [passport]
- [passport-jwt]