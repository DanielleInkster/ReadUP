import React, {Component} from 'react';
import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import {mySchema} from './src/models/schema';
import {dbModels} from './src/models/index.js';

const adapter = new SQLiteAdapter({
  dbName: 'ReadUp',
  schema: mySchema,
});

const database = new Database({
  adapter,
  modelClasses: dbModels,
  actionsEnabled: true,
});

const DbContext = React.createContext('DEFAULT');

export default class DbProvider extends Component {
  render() {
    return (
      <DbContext.Provider value={database}>
        {this.props.children}
      </DbContext.Provider>
    );
  }
}

export {DbContext, DbProvider};
