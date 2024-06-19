import { Button, Form, FormControl } from "react-bootstrap";
import "./UpdateUser.css";
import { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
const {id} = useParams();
const navigate=useNavigate();

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


    //call the backend API s
    useEffect(()=>{
        const fetchEmployees = async () =>{
            try {
                const response=await fetch(`http://localhost:8080/api/employee/${id}`);
                const data=await response.json(); //get json from the request
                setformdata(data); //add these data to the form
            } catch (error) {
                console.log("Error fetching User :",error.message)
            }
        }

        fetchEmployees();
    }, [id])

    const handleSubmit = async (e) =>{
      e.preventDefault();

      try {

        const response=await fetch(`http://localhost:8080/api/employee/${id}`,{
          method:"PATCH",
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify(formData),  //details of employee   

        })

        const data =await response.json();  //get data from response
        console.log("user updated :",data)

        navigate("/")  //naviagte to dashboard
      } catch (error) {
         console.error("error updating user :", error.message)
      }

    }



  return (<>
<div className="center-form">
        <h1>Update Employee </h1>
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
            Update Employee
          </Button>
        </Form>
      </div>

  </>
  );
};

export default UpdateUser;
