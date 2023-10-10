onst express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Store data in a JSON file (for simplicity)
const dataFilePath = 'data.json';

app.post('/api/saveData', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required fields.' });
  }

  // Read existing data from the file (if any)
  let data = [];
  try {
    const jsonData = fs.readFileSync(dataFilePath, 'utf8');
    data = JSON.parse(jsonData);
  } catch (err) {
    // If the file doesn't exist or is empty, data will remain an empty array
  }

  // Add the new data to the array
  data.push({ name, email });

  // Write the updated data back to the file
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');

  res.json({ message: 'Data saved successfully!' });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});