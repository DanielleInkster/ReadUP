import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import React, {Component} from 'react';
import {Database} from '@nozbe/watermelondb';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import migrations from './src/models/migrations';
import {mySchema} from './src/models/schema';
import {dbModels} from './src/models/index.js';

const adapter = new SQLiteAdapter({
  dbName: 'ReadUp',
  schema: mySchema,
  migrations,
});

export const database = new Database({
  adapter,
  modelClasses: dbModels,
  actionsEnabled: true,
});

AppRegistry.registerComponent(appName, () => App);
