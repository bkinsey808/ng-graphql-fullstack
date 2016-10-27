import * as express from 'express';
import * as bodyParser from 'body-parser';
import { apolloExpress, graphiqlExpress } from 'graphql-server';
import { Schema } from '../schema/schema';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as fs from 'fs';
import * as path from 'path';

// Default port or given one.
export const GRAPHQL_ROUTE = '/graphql';
export const GRAPHIQL_ROUTE = '/graphiql';

const PORT = 3000;

const app = express();

// security
app.use(helmet());

// setup the logger
const logPath = path.relative(process.cwd(), 'access.log');
const accessLogStream = fs.createWriteStream(logPath, {flags: 'a'})
const context = {
  hello: 'Default hello'
};
app.use(morgan('combined', {
  stream: accessLogStream
}));
app.use(GRAPHQL_ROUTE, bodyParser.json(), apolloExpress({
  context,
  schema: Schema,
}));
app.use(GRAPHIQL_ROUTE, graphiqlExpress({
  endpointURL: GRAPHQL_ROUTE,
}));

app.listen(PORT, () => console.log( // eslint-disable-line no-console
  `API Server is now running on http://localhost:${PORT}`
));
