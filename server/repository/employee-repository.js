const { resourceUsage } = require("process");
const { Employee } = require('../models/employee');

class EmployeeRepository {
    
    async createEmployee(data) {
        try {
            const newEmployee = new Employee({ ...data });
            const insertedEmployee = await newEmployee.save();
            return insertedEmployee;
        }
        catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async updateEmployee(empId, data) {
        try {
            await Employee.updateOne({ id: empId }, data);
            const updatedEmployee = await Employee.findOne({ id: empId });
            return updatedEmployee;
        }
        catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async deleteEmployee(empId) {
        try {
            const employee = await Employee.deleteOne({ id: empId });
            return employee;

        }
        catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getAllEmployees() {
        try {
            const employees = await Employee.find();
            return employees;
        }
        catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}

module.exports = EmployeeRepository;