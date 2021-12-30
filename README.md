# Book Store


# Usage
- Go to the provided api folder
- Edit `package.json` with:
```json
"scripts": {
    ...,
    "start-dev": "FRONT_HOST=* node ./bin/www"
  }
```
- run this in the folder
```
yarn
```
- `yarn start-dev` to start the mock server
- Clone this repository. 
- In the root folder run
```
npm install  
```
- `npm start` to run local server

# Tests
## Run tests
```
npm run test
```

## Coverage reports
```
npm start coverage
```
to generate coverage report
