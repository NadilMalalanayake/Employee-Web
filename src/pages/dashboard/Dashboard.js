
import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]); //to store employees
  const navigate=useNavigate();

  useEffect(() => {
    //to call apis
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/employees");   //Get ALL employess
        const data = await response.json();

        setEmployees(data);
      } catch (error) {
        console.log("Error fetching Employees :", error.message);
      }
    };

    fetchEmployees();
  }, []); //array run only one time



  const handleDelete = async (employeeId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/employee/${employeeId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {              //auto delete data without refreshing
        setEmployees((prevemployees)=>
          prevemployees.filter((employee)=> employee.id !== employeeId)
        )
      }

      console.log(`Employee with ID ${employeeId} deleted succsusfully`);
    } catch (error) {
      console.log("Error deleting Employee", error.message);
    }
  };


  const hadleUpdate = (employeeId) =>{
    navigate(`employee/${employeeId}`);
  }

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className="text-center">Employees</h1>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Department</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.department}</td>
                    <td>
                      <Button variant="outline-secondary" onClick={() => hadleUpdate(employee.id)}>Update</Button>{"--"}
                      <Button variant="outline-danger" onClick={() => handleDelete(employee.id)}>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
