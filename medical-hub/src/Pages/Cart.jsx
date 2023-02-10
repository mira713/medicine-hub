import { Box, Radio, Text, Image, Select, Button, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


import { ChevronDownIcon, AddIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { cartData } from "../redux/ProductAction"

import axios from "axios";
import CartCarousel from "./CartCarousel";

const Cart = () => {
  const Toast=useToast();
  const cart_Data = useSelector((state) => state.cart);
  console.log(cart_Data, "cartData");

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);

  var bag = 0;
  for (var i = 0; i < cart_Data.length; i++) {
    console.log(cart_Data[i].price);
    bag = bag + cart_Data[i].salePrice * cart_Data[i].qty;
    //  count++ ;
    console.log(bag, "bag");
  }

  if (bag > 175) {
    var discountedPrice = bag - 75;
    localStorage.setItem("Price", JSON.stringify(bag));
    localStorage.setItem("DiscountPrice", JSON.stringify(discountedPrice));
  } else {
    discountedPrice = bag;
  }

  useEffect(() => {
    dispatch(cartData());
  }, [dispatch]);

  const handleSelect = (quantity) => {
    setQty(quantity);
  };

  const handleChange = (id) => {
    console.log(id);

    var increase = {
      qty: qty,
    };
    axios
      .patch(
        `https://link-ten-zeta.vercel.app/cart/${id}`,
        increase
      )
      .then((res) => {
        console.log(res.data);
        dispatch(cartData());
      })
      .catch((e) => {
        console.log(e);
        dispatch(cartData());
      });
  };

  const handleDelete = (el) => {
    axios
      .delete(`https://link-ten-zeta.vercel.app/cart/${el.id}`)
      .then((res) => {
        // console.log(res);
        dispatch(cartData());
        Toast({
          title: "Succesfull",
          description: "Item Removed from Cart Successfully",
          position: "top",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch(cartData());
        Toast({
          title: "Succesfull",
          description: "Item Removed from Cart Successfully",
          position: "top",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      });
  };
  return (
    <>
    
      <Box height={"auto"} bg={"#F3F7FB"}>
        <Box flexWrap="wrap" p={5} width={"80%"} m={"auto"} height={"auto"} display={{base:"none",md:"grid"}}>
          <Text>Order Summary</Text>

          <Box display={"flex"}>
            <Box ml={-10} >
              <CartCarousel/>
            </Box>
            <Box mt={8} p={5} rounded={"md"} bg={"white"} width={325}>
              <Text color={"#7096C0"} fontSize={"sm"}>
                APPLY PROMOCODE / NMS SUPERCASH
              </Text>
              <Box p={2} display={"flex"} justifyContent={"space-around"}>
                <Radio mr={5} mt={-10} />
                <br></br>
                <Text color={"#7096C0"} fontSize={"sm"}>
                  Apply Promo Code <br></br>
                  <Text>
                    Get flat discount! Vouchers applicable in payment options.
                  </Text>{" "}
                </Text>
                <ChevronDownIcon />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          display={"grid"}
          gridTemplateColumns={{base:"repeat (2,1fr)",md:"repeat(1,1fr)"}}
          gap={8}
          mt={5}
         
         
          height={"auto"}
        >
          <Box bg={"white"} p={0} rounded={5} height={"auto"}  >
            <Text p={5} pb={0} fontSize={"lg"} color={"grey"} mb={0}>
              PRODUCTS
            </Text>
            {console.log(cart_Data, "vvv")}
            {cart_Data.map((el) => (
              <Box
                key={el.id}
                fontSize={"md"}
                display={"flex"}
                height={190}
                lineHeight={6}
                borderBottom={"1px solid grey"}
                p={3}
              >
                <Box>
                  <Image height={"50%"} mr={10} src={el.imageUrl} alt="" />
                </Box>
                <Box>
                  <Text fontSize={"md"} fontWeight={500}>
                    {el.title}
                  </Text>
                  <Text fontSize={"small"} color={"green"}>
                    Only 6 Left In Stock
                  </Text>
                  <Text fontSize={"small"} as={"i"}>
                    Mfr:{el.seller}
                  </Text>
                  <Box display={"flex"} gap={80}>
                    <Text
                      fontSize={"md"}
                      color={"#EF4290"}
                      fontWeight={500}
                      pt={2}
                    >
                       RS.{Number(el.salePrice) * el.qty}.00
                    </Text>
                    <Select
                      height={8}
                      mb={6}
                      width={40}
                      onChange={(e) => handleSelect(e.target.value)}
                      onClick={() => handleChange(el.id)}
                      placeholder="QTY:1"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </Select>
                  </Box>
                  <Box display={"flex"}>
                    <Box pr={2} borderRight={"1px solid grey"}>
                      <Text> Delivery between Nov 11 6PM-Nov 18 10PM </Text>
                    </Box>
                    <Box>
                      <Button
                        onClick={() => handleDelete(el)}
                        bg={"#F6F6F7"}
                        mr={0}
                        ml={3}
                        size={"sm"}
                      >
                        REMOVE
                      </Button>
                      <Button bg={"#F6F6F7"} ml={5} size={"sm"}>
                        SAVE FOR LATER
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}

            <Box
              color={"teal"}
              justifyContent={"space-between"}
              display={"flex"}
              p={4}
            >
              <Text fontSize={"md"} fontWeight={500}>
                ADD MORE ITEMS
              </Text>
              <Link to="/">
                {" "}
                <AddIcon />
              </Link>
            </Box>
          </Box>

          <Box
            bg={"white"}
            rounded={"md"}
            p={5}
            pr={8}
           
            height={300}
           
          >
            <Text mb={1} color={"grey"} fontSize={"lg"}>
              PAYMENT DETAILS
            </Text>
            <Box
              fontSize={"md"}
              mt={3}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Text> MRP Total</Text>
              <Text>Rs,{bag}</Text>
            </Box>
            <Box
              fontSize={"sm"}
              mt={3}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Text> Medicine Hub Discount</Text>
              <Text>-Rs,75.00</Text>
            </Box>
            <Box
              fontSize={"md"}
              fontWeight={500}
              mt={3}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Text>Total Amount*</Text>
              <Text>Rs,{discountedPrice}</Text>
            </Box>
            <Box
              bg={"#F3F8EC"}
              p={2}
              fontWeight={500}
              fontSize={"smaller"}
              mt={3}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Text pl={4} color={"green"}>
                TOTAL SAVINGS Rs.75
              </Text>
            </Box>

            <Box
              p={2}
              fontWeight={500}
              mt={3}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Box>
                <Text fontSize={"md"}>TOTAL AMOUNT</Text>
                <Text fontSize={"larger"}>Rs,{discountedPrice}</Text>
              </Box>
              <Box>
                <Link to="/checkout/payment-information">
                  {" "}
                  <Button size={"lg"}>PROCEED</Button>{" "}
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
