const Router = require('express').Router();
var cors = require('cors')
const MyModel = require('./model'); // Assuming your model is exported in a file named myModel.js
Router.use(cors())


Router.get('', (req, res) => {
MyModel.find().then(documents => {
    console.log('All documents:', documents);
      res.json(documents); // Send the documents as JSON to the frontend
  })
  .catch(error => console.error('Error fetching documents:', error));

});


// Delete Route


module.exports = Router;