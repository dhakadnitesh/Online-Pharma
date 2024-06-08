import { useState, useEffect, useRef } from "react";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import axios from "axios";
import "./Diabatese.css";
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
import Footer from "../Components/Footer";


export default function Diabetes() {
  let [Diabetes, setDiabetes] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);
  let [sortprice, setsortprice] = useState("");
  let [searchprice, setsearchprice] = useState("");
  let InputRef = useRef(null);
  let navigate = useNavigate()

  function handleBtn1(id){
    navigate(`/Diabetes/View/${id}`)
  }

  async function fetchDiabetesdata(sortprice, searchprice) {
    setLoading(true);
    try {
      let queryParams = {};
      if (sortprice) {
        queryParams._sort = "price";
        queryParams._order = sortprice;
      }
      if (searchprice) {
        queryParams.q = searchprice;
      }
      let res = await axios({
        method: "get",
        url: `http://localhost:3000/Diabetes?`,
        params: queryParams,
      });
      console.log(res?.data);
      setDiabetes(res?.data);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    InputRef.current.focus();

    fetchDiabetesdata(sortprice, searchprice);
  }, [sortprice, searchprice]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Input
      id="input"
        ref={InputRef}
        placeholder="Search By Price"
        width="30%"
        ml="60%"
        mt="40px"
        value={searchprice}
        onChange={function (e) {
          setsearchprice(e.target.value);
        }}
      />

      {/* Search By Price */}
      <Select

      id="select"
        placeholder="--Sort--By--Price--"
        width="30%"
        mt="-40px"
        ml="9%"
        value={sortprice}
        onChange={function (e) {
          setsortprice(e.target.value);
        }}
      >
        <option value="desc">High To Low</option>
        <option value="asc">Low To High</option>
      </Select>

      {/* sort by price */}

      <Container maxWidth="85%" mt="3%" id="container">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10}>
          {Diabetes.map((ele, index) => (
            <Card key={index} id="card1">
              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <img
                      src={ele.image}
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
                      Title : {ele.title}
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
                      Price : {ele.price}
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
              <CardFooter>
                <Button variant="solid" colorScheme="blue" size="sm" onClick={() => handleBtn1(ele.id)}>
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      <Footer/>
    </>

    
  );
}
