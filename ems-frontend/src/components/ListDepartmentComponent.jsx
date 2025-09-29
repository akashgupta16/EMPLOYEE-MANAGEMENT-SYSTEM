import React, { useEffect, useState } from "react";
import { deleteDepartment, getAllDepartments } from "../services/DepartmentService";
import { Link, useNavigate } from "react-router-dom";

const ListDepartmentComponent = () => {
  // let dummyData = [
  //   {
  //     id: 1,
  //     departmentName: "R&D",
  //     departmentDescription: "Research and Developement",
  //   },

  //   {
  //     id: 2,
  //     departmentName: "Finance",
  //     departmentDescription: "Finance Developement",
  //   },

  //   {
  //     id: 3,
  //     departmentName: "R&D",
  //     departmentDescription: "Research and Developement Department",
  //   },
  // ];

  const [departments, setDepartments] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    listOfDepartments();
  }, []);

  function listOfDepartments(){
    getAllDepartments()
      .then((response) => {
        console.log(response.data);
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function updateDepartment(id) {
    navigator(`/edit-department/${id}`);
  }

  function removeDepartment(id)
  {
    deleteDepartment(id).then((response)=>{
      console.log(response.data);
      listOfDepartments();
    }).catch(error=>{
      console.error(error);
    })
    navigator('/departments')
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Departments</h2>
      <Link to="/add-department" className="btn btn-primary mb-2" on>
        Add Department
      </Link>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Department Id</th>
            <th>Department Name</th>
            <th>Department Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.departmentName}</td>
              <td>{department.departmentDescription}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateDepartment(department.id)}
                >
                  Update
                </button>

                <button
                  className="btn btn-danger" style={{marginLeft:"10px"}}
                  onClick={() => removeDepartment(department.id)}
                >
                  Delete 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListDepartmentComponent;
