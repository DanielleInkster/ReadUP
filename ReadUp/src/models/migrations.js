import {
  schemaMigrations,
  createTable,
} from '@nozbe/watermelondb/Schema/migrations';

export default schemaMigrations({
  migrations: [
    // {
    //   // ⚠️ Set this to a number one larger than the current schema version
    //   toVersion: 2,
    //   steps: [
    //     // See "Migrations API" for more details
    //     createTable({
    //       name: 'articles',
    //       columns: [
    //         {name: 'title', type: 'string'},
    //         {name: 'image', type: 'string'},
    //         {name: 'url', type: 'string'},
    //         {name: 'description', type: 'string'},
    //         {name: 'date_added', type: 'number'},
    //       ],
    //     }),
    //   ],
    // },
  ],
});
