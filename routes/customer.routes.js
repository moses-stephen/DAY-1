module.exports = function(appsample) {

    var customers = require('../controllers/customer.controller.js');

    // Create a new Customer
    appsample.post('/api/customers', customers.create);

    // Retrieve all Customer
    appsample.get('/api/customers', customers.findAll);

    // Retrieve a single Customer by Id
    appsample.get('/api/customers/:id', customers.findOne);

    // Update a Customer with Id
    appsample.put('/api/customers/:id', customers.update);

    // Delete a Customer with Id
    appsample.delete('/api/customers/:id', customers.delete);
}