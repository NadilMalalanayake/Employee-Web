import { Button, Form, FormControl } from "react-bootstrap";
import "./Postuser.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Postuser = () => {
  const [formData, setformdata] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  const handleInputChange = (event) => {
    const {name, value} = event.target; //get forcontrol name and value
    setformdata({
      ...formData, //spread operator we will acess for data
      [name]: value,
    });
  };

  const navigate =useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();  //disable auto reloading page

    console.log(formData)
    try {
        const response= await fetch("http://localhost:8080/api/employee",{
            method:"POST",
            headers : {"Content-Type": "application/json"},
            body:JSON.stringify(formData)  //access the form data
        });

        const data = await response.json();
        console.log("Employee Created : ", data);
        navigate("/")
        
    } catch (error) {
        console.log("Error creating Employee :" , error.message)
    }   
  }

  return (
    <>
      <div className="center-form">
        <h1>Post new Employee </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="forBasicName">
            <FormControl
              type="text"
              name="name"
              placeholder="Enter UserName"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="forBasicName">
            <FormControl
              type="text"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="forBasicName">
            <FormControl
              type="text"
              name="phone"
              placeholder="Enter PhoneNumber"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="forBasicName">
            <FormControl
              type="text"
              name="department"
              placeholder="Enter Department"
              value={formData.department}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Post Employee
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Postuser;
