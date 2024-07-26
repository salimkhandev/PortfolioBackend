const deleteRouter = require('express').Router();
var cors = require('cors')
const MyModel = require('./model'); // Assuming your model is exported in a file named myModel.js
deleteRouter.use(cors())


deleteRouter.delete('/all', (req, res) => {
  MyModel.deleteMany({})
    .then(result => {
      console.log('All documents deleted:', result.deletedCount);
      res.status(200).json({ message: 'All documents deleted', deletedCount: result.deletedCount });
    })
    .catch(err => {
      console.error('Error deleting all documents:', err);
      res.status(500).json({ message: 'Error deleting all documents', error: err });
    });
});

deleteRouter.delete('/', (req, res) => {
    const { id } = req.query; // Extract parameters from the request URL


    // Log the parameters to the console
    console.log('ID to be deleted:', id);

    res.status(200).json({ message: 'Data logged to console', data: { id } });
    MyModel.findByIdAndDelete(id)
  .then(deletedUser => {
    console.log('User deleted:', deletedUser);
  })
  .catch(err => {
    console.error('Error deleting user:', err);
  })
});




module.exports = deleteRouter;