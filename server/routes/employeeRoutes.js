const { Router } = require("express");
const router = Router({ strict: true });
const credential  = require('../controllers/user_credential');
const employeeController = require('../controllers/employee-controller');

//Creating Employee
router.post('/employee', employeeController.create);

//Reading Employees
router.get('/employee', employeeController.getAll);

//Updating Employees
router.put('/employee/:id', employeeController.update);

//Deleting Employees
router.delete('/employee/:id', employeeController.destroy);

//Handling UserLogin
router.post('/user/register', credential.create);
router.post('/user/login', credential.get);



module.exports = router;