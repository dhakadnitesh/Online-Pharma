import { useParams,useNavigate } from "react-router-dom"
import "./Diabatese.css"


import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import {
    SimpleGrid,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Text,
    Stack,
    Box,
    StackDivider,
    Heading,
    Container,
    Select,
    Input,
    
    Button,
  
  } from "@chakra-ui/react";



export default function DiabateseView(){
    let {id} = useParams()
    let navigate = useNavigate();
    let [Diabetes, setDiabetes] = useState({});
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);

  function handleBtn2(id){
    navigate(`/Card/${id}`)
  }

  async function fetchDiabetesdata(id) {
    setLoading(true);
    console.log(id)
    try {
      
      let res = await axios({
        method: "get",
        url: `https://online-pharma-backend-server-1.onrender.com/Diabetes/${id}`,
        
      });
    //   console.log(res?.data);
      setDiabetes(res?.data);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {

    fetchDiabetesdata(id);
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  let {title,description,image,price} = Diabetes
  console.log(Diabetes)

    return(
        <> 
        {/* <Container  mt="20px"> */}
         <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10} m="30px">
            <Card  id="card1">
              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <img
                      src={image}
                      alt="logo"
                      style={{ width: "55%" }}
                      id="img1"
                    />
                  </Box>
                  <Box>
                    <Text
                      pt="2"
                      fontSize="md"
                      fontFamily="serif"
                      fontWeight="600"
                    >
                      Title : {title}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      pt="2"
                      fontSize="md"
                    //   fontFamily="serif"
                      fontWeight="600"
                      id="description"
                    >
                      Description : {description}
                    </Text>
                  </Box>
                  <Box>
                    {/* <Heading size='xs' textTransform='uppercase'>
                   Price
                 </Heading> */}

                    <Text
                      pt="2"
                      fontSize="sm"
                      color="green"
                      fontFamily="cursive"
                    >
                      Price : {price}
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
              <CardFooter>
                <Button variant="solid" colorScheme="blue" size="sm" onClick={() => handleBtn2(id)}>
                  Add To Card
                </Button>
              </CardFooter>
            </Card>
          
        </SimpleGrid>
        {/* </Container> */}
     


        
        </>
    )
}