import {
    Box,
    Button,
    Flex,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightElement,
    Select,
    Text,
  } from "@chakra-ui/react";
  import React, {useState} from "react";
  import { FaSearch, FaSearchLocation } from "react-icons/fa";
  import {Link, useNavigate} from "react-router-dom"
  
  function SearchNav() {
    let navigate = useNavigate()
    let [lett,setLet] = useState('')
    let onChange=(e)=>{
       
       setLet(e.target.value)
    }
  function findItem(){
    console.log(lett)
    localStorage.setItem("searched", lett)
    navigate('/searched')
    
  } 
    return (
      <Box fontFamily={"Clear-Sans"} shadow={"sm"} bg="#fff">
        <Flex justify={"space-around"} minH={"40px"} py="10px" align={"center"}>
          <Flex
            gap={2}
            width={{ base: "100%", md: "60%" }}
            flexDir={{ base: "column", md: "row" }}
            align={"center"}
          >
            <InputGroup size={"sm"} width={{ base: "90%", md: "30%" }}>
              <InputLeftAddon children={<FaSearchLocation color="gray.300" />} />
              <Select bg={"#f1f4f6"}>
                <option value="Bhopal">Bhopal</option>
                <option value="Bihar">Bihar</option>
                <option value="Jaipur">Jaipur</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="pune">Pune</option>
              </Select>
            </InputGroup>
            <InputGroup size={"sm"} width={{ base: "90%", md: "60%" }}>
              <Input
                placeholder="Search for Medicines and Health Products"
                bg={"#f1f4f6"} onChange={(e)=>{onChange(e)}}
              />
              <InputRightElement
                children={<FaSearch color="green.500" />}
                pointerEvents={"auto"}
                cursor="pointer"
              />
            </InputGroup>
            
            <Button bg={"#ff6f61"} color={"white"} onClick={findItem}>Search</Button>
           
          </Flex>
  
          <Flex gap={2} align="center" display={{ base: "none", md: "flex" }}>
            <Text fontSize={"14px"}>QUICK BUY! Get 25% off on medicines*</Text>
            <Button
              px="30px"
              bg={"#ff6f61"}
              color="#fff"
              borderRadius={"5px"}
              fontSize={"16px"}
              fontWeight="300"
              _hover={{}}
              py="0px"
            ><Link to={"/cart"}>  Quick Order</Link>
            
            </Button>
          </Flex>
        </Flex>
      </Box>
    );
  }
  
  export default SearchNav;
  