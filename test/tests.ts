/* tslint:disable */
// ensure support for fetch and promise
import 'es6-promise';
import 'isomorphic-fetch';

process.env.NODE_ENV = 'test';

declare function require(name: string): any;
require('source-map-support').install();

console.warn = (message: string) => {
  throw new Error(`==> Error in test: Tried to print warning with message:
${message}`);
};

import './writeToStore';
import './readFromStore';
import './roundtrip';
import './diffAgainstStore';
import './networkInterface';
import './QueryManager';
import './client';
import './store';
import './queryTransform';
import './getFromAST';
import './directives';
import './batching';
import './scheduler';
import './mutationResults';
import './optimistic';
import './fetchMore';
import './scopeQuery';
import './errors';
import './mockNetworkInterface';
import './graphqlSubscriptions';
import './batchedNetworkInterface';
import './ObservableQuery';
