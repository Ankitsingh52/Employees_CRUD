const { EmployeeRepository } = require('../repository/index');

class EmployeeService {
    constructor() {
        this.employeeRepository = new EmployeeRepository();
    }

    async createEmployee(employee) {
        try {
            const Employee = await this.employeeRepository.createEmployee(employee);
            return Employee;
        }
        catch (error) {
            console.log("Something went wrong at service layer");
            throw error;
        }
    }

    async deleteEmployee(empId) {
        try {
            const response = await this.employeeRepository.deleteEmployee(empId);
            return response;
        }
        catch (error) {
            console.log("Something went wrong at service layer");
            throw error;
        }
    }

    async updateEmployee(empId, data) {
        try {
            const Employee = await this.employeeRepository.updateEmployee(empId, data);
            return Employee;
        }
        catch (error) {
            console.log("Something went wrong at service layer");
            throw error;
        }
    }

    async getAllEmployees(){
         try {
            const employees = await this.employeeRepository.getAllEmployees();
            return employees;
        }
        catch (error) {
            console.log("Something went wrong at service layer");
            throw error;
        }
    }
}

module.exports = EmployeeService;