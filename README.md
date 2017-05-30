Explore Beaches
====

## DEMO
[http://miscreant-wash.surge.sh/](http://miscreant-wash.surge.sh/)

## Setup
```
git clone https://github.com/redcom/explore-beaches
cd explore-beaches && yarn   # install project dependencies
cd ./client && yarn         # install client dependencies
cd explore-beaches && yarn start         # start client and server in decelopment mode
```

## Commands
```
cd ./ && ./scripts/lintWorking  # run linting from root folder on client and server ( long running process)
cd client && yarn test      # run unit test using jest framework (corrently testing only the reducer for cartItems)
cd ./ && ./node_modules/.bin/flow-typed [install or update] to install or update flow type defition
cd ./ && ./scripts/flowWorking # run flow type check ( long running process )
```

## Architecture preview and project structure

**./server** folder contains source code of the server API. Find a usage for it.

**./client** folder contains the source code for the application

* I used ***styled-components*** for styling the components.
* I used ***react-redux**** for client side state management
* I separated the business logic and API side efects into **client/src/actions/UserActions.js** to handle user domain problems.
* API communication is done using helpers/apiUsers and helpers/apiImages
* The state signature of the application can be checked from **./client/src/store/CommonStoreTypes.js** This is also used for flow type check.

**./** root folder of the application contains scripts to execture the application in various stages

There are scripts for precommit hooks to prettier the javascript source code for server and client

## TODO/DONE
- [ ] add more logic for handling errors
- [ ] improve logic for navigation system
- [ ] implement caching mechanism using service workers present in latest version of create-react-app [making-a-progressive-web-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app)
- [x] The user should see a list of images fetched from the HeyBeach API.
- [x] A user should be able to register/login/logout inside the app.
- [x] Ensure the design interface is responsive and functional on mobile, desktop and/or tablets. Can be improved further.
- [x] Include the image title with each image. Visible on hover image
- [x] implement infinite scrolling. Can be optimized further
- [] Expand the image details when the user clicks on the image.





