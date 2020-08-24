import React, {Component} from 'react';
import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import migrations from '../models/migrations';
import {mySchema} from '../models/schema';
import {dbModels} from '../models/index.js';

const adapter = new SQLiteAdapter({
  dbName: 'ReadUp',
  schema: mySchema,
  migrations,
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