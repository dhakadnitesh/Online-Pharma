import { useState, useEffect } from "react";
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

let HeartCareUser = ({ ele }) => {
  const navigate = useNavigate();

  function handleBtn1(id) {
    navigate(`/Heart/Care/View/${id}`);
  }
  return (
    <>
      <Card id="card1">
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
              <Text pt="2" fontSize="md" fontFamily="serif" fontWeight="600">
                Title : {ele.title}
              </Text>
            </Box>
            <Box>
              {/* <Heading size='xs' textTransform='uppercase'>
                   Price
                 </Heading> */}

              <Text pt="2" fontSize="sm" color="green" fontFamily="cursive">
                Price : {ele.price}
              </Text>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button
            variant="solid"
            colorScheme="blue"
            size="sm"
            onClick={() => handleBtn1(ele.id)}
          >
            View Details
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default function HeartCare() {
  let [HeartCare, setHeartCare] = useState([]);
  let [loading, setloading] = useState(false);
  let [error, seterror] = useState(false);
  let [sortprice, setsortprice] = useState("");
  let [searchprice, setsearchprice] = useState("");

  async function HeartCareData(sortprice, searchprice) {
    setloading(true);
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
        url: `http://localhost:3000/HeartCare`,
        params: queryParams,
      });
      console.log(res?.data);
      setHeartCare(res?.data);
      setloading(false);
      seterror(false);
    } catch (error) {
      seterror(true);
      setloading(false);
    }
  }

  useEffect(() => {
    HeartCareData(sortprice, searchprice);
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
          {HeartCare.map((ele, i) => (
            <HeartCareUser ele={ele} key={i} />
          ))}
        </SimpleGrid>
      </Container>

      <Footer/>
    </>
  );
}
