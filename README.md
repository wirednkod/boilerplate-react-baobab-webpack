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

For dev purposes open 2 different terminals.
On first terminal execute the following:
```
  webpack           # only once in order to create the bundles - hotreload will take care of rest.
  webpack -w        # this will force webpack to watch changes for client side
```

On second terminal run:
```
  npm run dev       # this will start the server in dev mode with hot reload for server side changes
```