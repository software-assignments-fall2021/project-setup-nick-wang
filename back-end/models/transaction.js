const mongoose = require('mongoose');

const transactionsSchema = new mongoose.Schema({
    name: String,
    date: String,
    amount: Number,
    type: String
  });

module.exports = mongoose.model('transactions', transactionsSchema);