const express = require('express');
const cors = require('cors');
const { Client } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const dbConfig = {
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "12345678",
  database: "demo_database"
};

const client = new Client(dbConfig);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

client.connect(); // connect to the database

app.post('/api/saveData', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required fields.' });
  }

  const query = {
    text: 'INSERT INTO "user" (name, email) VALUES($1, $2) RETURNING *',
    values: [name, email],
  };

  client.query(query)
    // if (err) {
    //   console.error('Error saving data:', err);
    //   res.status(500).json({ error: 'Failed to save data.' });
    // } else {
    //   res.json({ message: 'Data saved successfully!', savedData: result.rows[0] });
    // }

 });

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
