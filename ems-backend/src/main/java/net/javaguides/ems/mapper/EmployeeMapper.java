package net.javaguides.ems.mapper;
import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDto mapToEmployeeDto(Employee employee){
        //A DTO is a simple Java object that carries data between processes.
        //It is not tied to the database.
        //Often used to send data to the frontend (client) or receive limited input from requests

        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail(),
                employee.getDepartment().getId()

//        if (employee.getDepartment() != null) {
//            dto.setDepartmentId(employee.getDepartment().getId());
//        } else {
//            dto.setDepartmentId(null); // or handle as per business logic
//        }
        );
    }


    public static Employee mapToEmployee(EmployeeDto employeeDto){
        //This conversion is commonly done when we receive data from a frontend form or API request and want to:
        //1. Save it to the database, or
        //2.Update an existing JPA entity.

        Employee employee = new Employee();

        employee.setId(employeeDto.getId());
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());
        return employee;

    }

}
