import "reflect-metadata";
import {createConnection, Connection, getConnectionOptions} from 'typeorm';

import Page from '@/entity/page';
import User from '@/entity/user';

export async function connect() {
  const options = await getConnectionOptions();
  return createConnection({
    ...options,
    entities: [Page, User]
  });
}

export function close(conn: Connection) {
  conn.close();
}
