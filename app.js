const express = require('express');

// Routers
const { recordsRouter } = require('./routes/records.routes');

// Utils
const { db } = require('./utils/database.util');

// Init express app
const app = express();

app.use(express.json());

// Endpoints
app.use('/api/v1/records', recordsRouter);

db.authenticate()
  .then(() => console.log('Db authenticate'))
  .catch((error) => console.log(error));

db.sync()
  .then(() => console.log('Db synced'))
  .catch((error) => console.log(error));

app.listen(4000, () => {
  console.log('Express app running!');
});
