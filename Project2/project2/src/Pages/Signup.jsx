import { useState } from "react";
import { Input, Button, VStack, Container, Heading } from "@chakra-ui/react";
import axios from "axios";
import Error from "../Components/Error";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  let [user, setUser] = useState({ name: "", password: "" });
//   let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);
  let navigate = useNavigate()

  let handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    console.log(user);

    try {
      let res = await axios({
        method: "post",
        url: `https://online-pharma-backend-server-1.onrender.com/Users`,
        data: user, 
      });

      if (res.status === 201) {
        localStorage.setItem('isAuthenticated', 'true');
        alert("Signup Successful");
        navigate("/login"); 
      }

      setError(false);
    } catch (error) {
      setError(true);
    }
  };

 

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Heading as="h3" size="lg" textAlign="center" mt="30px">
        Sign<span style={{ color: "red" }}>up</span>
      </Heading>
      <Container
        maxW="md"
        mt="35px"
        p="20px"
        borderRadius="10px"
        boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
      >
        <VStack spacing={4} mt="30px">
          <Input
            placeholder="Enter The Name..."
            width="70%"
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
          />
          <Input
            placeholder="Enter The Password..."
            width="70%"
            name="password"
            type="password"
            onChange={(e) => handleChange(e)}
          />
          <Button colorScheme="blue" size="md" onClick={handleSignup}>
            Signup
          </Button>
        </VStack>
      </Container>
    </>
  );
}
