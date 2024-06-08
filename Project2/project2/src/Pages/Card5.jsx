import { useParams,useNavigate } from "react-router-dom"
import "./Card.css"
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
    HStack,
    
    Button,
  
  } from "@chakra-ui/react";




export  default function CardPage5(){
    let navigate = useNavigate();
    let [Medicinal, setMedicinal] = useState({});
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);
  let {id} = useParams()


  async function Medicinaldata(id){
    setLoading(true)
    
    try {

        let res = await axios({
            method:"get",
            url:`http://localhost:3000/KidneyCare/${id}`
            
        })

        setLoading(false)
        setMedicinal(res?.data)
        setError(false)
        
    } catch (error) {
        setError(true)
        setLoading(false)
        
    }
  }

  useEffect(()=>{
    Medicinaldata(id)

  },[id])

  if(loading){
    return <Loading/>
  }
  if(error){
    return <Error/>
  }

    let {title,description,image,price} = Medicinal
  console.log(Medicinal)
    return(
        <>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10} m="30px">
            <Card  id="card1" >
              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <img
                      src={image}
                      alt="logo"
                      style={{ width: "35%" }}
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
              {/* <CardFooter> */}
                <HStack>
                <Button variant="outline" colorScheme="red" size="sm"  >
                   Payment
                </Button>
                <Button variant="outline" colorScheme="red" size="sm"  onClick={function(){navigate("/")}}  >
                  Remove From Card
                </Button>
                </HStack>
              {/* </CardFooter> */}
            </Card>
          
        </SimpleGrid>
        {/* </Container> */}
     


        
        
        
        
        </>
    )
}