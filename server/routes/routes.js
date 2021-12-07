const express = require ('express');
const QuotesRouter = express.Router();
const {QuotesController} = require('./../controllers/quotesController');

QuotesRouter
    .get('/', QuotesController.loadIndex)

QuotesRouter
    .route('/quotes')
    .post(QuotesController.createQuote)
    .get (QuotesController.getQuotes)

module.exports={QuotesRouter};