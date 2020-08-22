import {appSchema, tableSchema} from '@nozbe/watermelondb';

export const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'articles',
      columns: [
        {name: 'article_id', type: 'number'},
        {name: 'title', type: 'string'},
        {name: 'image', type: 'string'},
        {name: 'url', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'date_added', type: 'number'},
      ],
    }),
  ],
});
