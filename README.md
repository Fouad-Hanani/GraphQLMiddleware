# GraphQLMiddleware

A much simpler handling of **GraphQL Middlewares**.

# Installation

## via NPM

`npm i graphqlmiddleware`

## via Yarn

`yarn add graphqlmiddleware`

# Usage

## graphqlmiddleware(validationFuntion, errorMessage, resolverFunction)

validationFunction
: A function that has access to the context, returns a `boolean` and used to control the flow of execution.

errorMessage
: A string passed as a param when throwing an error if `validationFunction` return `false`

resolverFunction
: A function that is executed if `validationFunction` return `true`

```
const graphqlmiddleware = require('graphqlmiddleware');

const validationFunction = (context) => {...};
const errorMessage = "...";
const resolverFunction = (parent, args, context, info) => {...}

const QueryResolver = {
	login: graphqlmiddleware(validationFunction, errorMessage, resolverFunction),
}

module.exports = QueryResolver;
```
