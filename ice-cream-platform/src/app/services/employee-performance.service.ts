export class EmployeePerformanceService {
    employeePerformance = {number_of_sales: 20, accumulated_value: 200}

    readEmployeePerformanceService(employeeName: string) {
        return this.employeePerformance;
    }
}