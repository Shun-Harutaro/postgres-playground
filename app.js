const pg = require('pg');

const connectionString = 'postgres://olsxdddyisabhx:48576a45d983498f452ca26108a47b5f4f96e577a796914c151ddfe50a321caf@ec2-18-210-51-239.compute-1.amazonaws.com/d7tjceoonb2s94?ssl=true';

console.log(`接続開始 : ${connectionString}`);
const pool = new pg.Pool({
  connectionString,
  ssl: true
});

// SELECT してみる
pool.query('SELECT * FROM test_table')
  .then((result) => {
    console.log('Success', result);
    // 結果データの表示
    if(result.rows) {
      result.rows.forEach((row, index) => {
        console.log(index + 1, row);
      });
    }
  })
  .catch((error) => {
    console.log('Failure', error);
  })
  .then(() => {
    console.log('切断');
    pool.end();
  });
