const { EmployeeService } = require('../services/index');

const employeeService = new EmployeeService();

const create = async (req, res) => {
    try {
        const employee = await employeeService.createEmployee(req.body);
        res.status(201).json({
            data: employee,
            success: true,
            message: 'Successfully Added a Employee',
            err: {}
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to Add an Employee',
            err: error
        });
    }

}

const destroy = async (req, res) => {
    try {
        const response = await employeeService.deleteEmployee(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Successfully deleted an employee',
            err: {}
        });

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the employee',
            err: error
        });
    }

}


const update = async (req, res) => {
    try {
        const response = await employeeService.updateEmployee(req.params.id, req.body);
        res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated the employee',
            err: {}
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the employee',
            err: error
        });
    }
};

const getAll = async (req, res) => {
    try {
        const employees = await employeeService.getAllEmployees();
        if (employees.length) {
            res.status(200).json({
                data: employees,
                success: true,
                message: 'Successfully fetched all employees',
                err: {}
            });
        }
        else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'employee does not Exist',
                err: {}
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch employees',
            err: error
        });
    }
};

module.exports = {
    create,
    destroy,
    update,
    getAll
}
