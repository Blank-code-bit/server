import { createConnections } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      createConnections({
        type: 'postgres',
        host: '	tiny.db.elephantsql.com',
        port: 5432,
        username: 'fxuxojtu',
        password: 'EdXbQ-VygQrBzElx8bHkQ5G_W2cm8Xyy',
        database: 'fxuxojtu',
      });
    },
  },
];
