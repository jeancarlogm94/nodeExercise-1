// Models
const { Record } = require('../models/record.model');

const getAllRecords = async (req, res) => {
  try {
    const records = await Record.findAll();

    res.status(200).json({
      status: 'succes',
      records,
    });
  } catch (error) {
    console.log(error);
  }
};

const createRecord = async (req, res) => {
  try {
    const { employeeName, entranceTime, exitTime } = req.body;

    const newRecord = await Record.create({
      employeeName,
      entranceTime: new Date(),
      exitTime,
    });

    res.status(201).json({
      status: 'succes',
      newRecord,
    });
  } catch (error) {
    console.log(error);
  }
};

const getRecordById = async (req, res) => {
  const { id } = req.params;

  const record = await Record.findOne({ where: { id } });

  if (!record) {
    res.status(404).json({
      status: 'error',
      message: 'Record not found',
    });
  }

  res.status(200).json({
    status: 'succes',
    record,
  });
};

const upadateRecord = async (req, res) => {
  const { id } = req.params;
  const { exitTime, status } = req.body;

  const record = await Record.findOne({ where: { id } });

  if (!record) {
    res.status(404).json({
      status: 'error',
      message: 'Record not found',
    });
  } else if (status === 'out') {
    await record.update({ exitTime: new Date(), status });
    res.status(204).json({
      status: 'succes',
    });
  } else {
    await record.update({ status });
    res.status(204).json({
      status: 'succes',
    });
  }
};

const deleteRecord = async (req, res) => {
  const { id } = req.params;

  const record = await Record.findOne({ where: { id } });

  if (!record) {
    res.status(404).json({
      status: 'error',
      message: 'Record not found',
    });
  }

  await record.update({ status: 'deleted' });

  res.status(204).json({
    status: 'succes',
  });
};

module.exports = {
  getAllRecords,
  createRecord,
  getRecordById,
  upadateRecord,
  deleteRecord,
};
