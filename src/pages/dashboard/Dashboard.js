import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]); //to stor employees

  useEffect(() => {
    //to call apis
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/employees");
        const data = await response.json();

        setEmployees(data);
      } catch (error) {
        console.log("Error fetching Employees :", error.message);
      }
    };

    fetchEmployees();
  }, []); //array run only one time

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
                {employees.map((employee)=>(
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.department}</td>
                    <td>
                      <Button variant="outline-secondary">Update</Button>
                      <Button variant="outline-danger">Delete</Button>
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
