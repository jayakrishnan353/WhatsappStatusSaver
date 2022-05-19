const ExecuteQuery = (sql, params = []) =>
  new Promise((resolve, reject) => {
    db.transaction((trans) => {
      trans.executeSql(
        sql,
        params,
        (trans, results) => {
          resolve(results);
        },
        (error) => {
          reject(error);
        },
      );
    });
  });

// Create Table
export const CreateTable = async () => {
  let Table = await ExecuteQuery(
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, client_id VARCHAR(16), user_name VARCHAR(16), password VARCHAR(16))',
    [],
  );
  console.log('CREATE TABLE', Table);

  InsertQuery();
};

export const InsertQuery = async () => {
  let Data = [
    { id: 1, client_id: 'react', user_name: 'manimaran', password: '123456' },
    { id: 2, client_id: 'react', user_name: 'rathish', password: '12345678' },
    { id: 3, client_id: 'android', user_name: 'marvel', password: '123456' },
    { id: 4, client_id: 'android', user_name: 'john', password: '87654321' },
  ];
  let query = 'INSERT INTO users (id, client_id, user_name, password) VALUES';
  for (let i = 0; i < Data.length; ++i) {
    query =
      query +
      "('" +
      Data[i].id + //id
      "','" +
      Data[i].client_id +
      "','" +
      Data[i].user_name +
      "','" +
      Data[i].password +
      "')";
    if (i != Data.length - 1) {
      query = query + ',';
    }
  }
  query = query + ';';
  try {
    let multipleInsert = await ExecuteQuery(query, []);
    console.log('InsertQuery', multipleInsert);
  } catch (e) {
    console.log('INSERT ERROR', e);
  }
};

export const SelectQuery = async (
  client_id: String,
  userName: String,
  password: String,
) => {
  try {
    return new Promise(async (resolve, reject) => {
      let selectQuery = await ExecuteQuery(
        `SELECT * FROM users WHERE client_id = '${client_id}' AND user_name = '${userName}' AND password = '${password}'`,
        [],
      );
      console.log('selectQuery', selectQuery);
      var rows = selectQuery.rows;
      if (rows.length > 0) {
        var item = rows.item(0);
        console.log(item);
        resolve({ item });
      } else {
        reject('User Not Found');
      }
    });
  } catch (Err) {
    console.log(Err);
  }
};
