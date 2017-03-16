# boilerplate-react-baobab-webpack
Boilerplate including react, es6, babel (w latest), webpack, baobab

### Install nodemon globally for server side changes watching
```
npm i nodemon -g
```

### Install rest of dependencies
```
npm i
```

For clean start of project:
```
npm run clean 
```

For developing on the server side which:
a) Starts the server with watch and on changes server restarts, applying the changes.
b) Starts the client with watch but when changing something on react, you must refresh the browser to see it.
```
npm run start
```

For developing on the client/react side which:
a) Starts the server with watch and client with watch. When changing something on react, browser and server refresh automatically.
```
npm run start:client
```