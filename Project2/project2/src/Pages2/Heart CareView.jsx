import { useParams, useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Diabatese.css"
import {
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Box,
  StackDivider,
  Button,
} from "@chakra-ui/react";

export default function HeartCareView() {
  let { id } = useParams();
  let [HeartCare, setHeartCare] = useState({});
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);
  let navigate = useNavigate();

  async function fetchHeartCareData(id) {
    setLoading(true);
    try {
      let res = await axios.get(`https://online-pharma-backend-server-1.onrender.com/HeartCare/${id}`);
      setHeartCare(res.data);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchHeartCareData(id);
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  let {  title, description, image, price } = HeartCare;

  function handleBtn2(id) {
    navigate(`/Card2/${id}`);
  }

  return (
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
  );
}
