import {useParams} from "react-router-dom"
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import { useState, useEffect } from "react";
import axios from "axios";
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
  import { useNavigate } from "react-router-dom";
  import "./Diabatese.css";

export default function LiverCareView(){

    let {id} = useParams()
    let [loading,setloading] = useState(false)
    let [error,seterror] = useState(false)
    let [LiverCare,setLiverCare] = useState({})
    let  navigate = useNavigate()

    async function LiverCareData(id){
        setloading(true)
        try {
            let res = await axios({
                method:"get",
                url:`http://localhost:3000/LiverCare/${id}`
            })
            setLiverCare(res?.data)
            seterror(false)
            setloading(false)
        } catch (error) {
            setloading(false)
            seterror(true)
            
        }

    }

    useEffect(()=>{
        LiverCareData(id)
    },[id])

    if(loading){
        return <Loading/>
    }

    if(error){
        return <Error/>
    }





let {title,description,image,price} = LiverCare
console.log(LiverCare)

function handleBtn2(id){
    navigate(`/Card4/${id}`)
}
    return (
        <>

<SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10} m="30px">
      <Card id="card1">
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <img src={image} alt="logo" style={{ width: "55%" }} id="img1" />
            </Box>
            <Box>
              <Text pt="2" fontSize="md" fontFamily="serif" fontWeight="600">
                Title: {title}
              </Text>
            </Box>
            <Box>
              <Text pt="2" fontSize="md" fontWeight="600" id="description">
                Description: {description}
              </Text>
            </Box>
            <Box>
              <Text pt="2" fontSize="sm" color="green" fontFamily="cursive">
                Price: {price}
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
  




        
        
        
        
        
        </>
    )
}