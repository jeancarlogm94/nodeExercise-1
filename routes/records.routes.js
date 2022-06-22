const express = require('express');

// Controllers

const {
  getAllRecords,
  createRecord,
  getRecordById,
  upadateRecord,
  deleteRecord,
} = require('../controllers/records.controller');

const recordsRouter = express.Router();

recordsRouter.get('/', getAllRecords);

recordsRouter.post('/', createRecord);

recordsRouter.get('/:id', getRecordById);

recordsRouter.patch('/:id', upadateRecord);

recordsRouter.delete('/:id', deleteRecord);

module.exports = { recordsRouter };
