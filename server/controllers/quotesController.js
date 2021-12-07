const {QuoteModel} = require( './../models/quoteModel' );

const QuotesController = {

    loadIndex: function (request, response){
        response.render ('index');
    },
    
    getQuotes: function (request, response){
        QuoteModel
            .getQuotes()
            .then (data  => {
                if (data.length == 0){
                    throw new Error("There are no quotes to show");
                }
                response.render ('quotes', {quote:data});
            })
            .catch( error => {
                request.flash('start', error.message);
                    response.redirect('/app');
            });
    },
    
    createQuote: function (request, response){
        const author= request.body.name;
        const quote= request.body.qoute;
        const created_at= new Date();
        
        const newQuote = {
            author,
            quote,
            created_at
        };
        
        QuoteModel
            .createQuote(newQuote)
            .then( result => {
                response.redirect('/app/quotes');
            })
            .catch( err => {
                request.flash( 'fail', 'Something goes wrong!' );
                response.redirect( '/app' );
                console.log(err);
            });
    }
}
module.exports={QuotesController};