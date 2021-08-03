module.exports = function(appsample) {

    var marksdb = require('../controllers/student.controller.js');

    // Create a new student
    appsample.post('/api/marksdb', marksdb.create);

    // Retrieve all students
    appsample.get('/api/marksdb', marksdb.findAll);

    // Retrieve a single student by Id
    appsample.get('/api/marksdb/:id', marksdb.findOne);

    // Update a student with Id
    appsample.put('/api/marksdb/:id', marksdb.update);

    // Delete a student with Id
    appsample.delete('/api/marksdb/:id', marksdb.delete);
}