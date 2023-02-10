import { Box, Button,  useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartData } from "../redux/ProductAction";
// import { Alert } from "./Alert";

// keep the add to cart component here
const AddCart = (mydata) => {
  const Toast = useToast();
  const [flag, setFlag] = useState(false);
  const [count, setCount] = React.useState(1);
  const dispatch = useDispatch();

  const handleIncrement = (value) => {
    setCount(Number(count + value));
  };

  const handleDecrement = (value) => {
    count > 1 ? setCount(count - value) : setFlag(false);
  };
  // console.log(finallyPost)
  const handleSave = async (mydata) => {
    console.log(mydata, "ab");
    var finallyPost = {
      id: mydata.prodData.id,
      imageUrl: mydata.prodData.src,
      title: mydata.prodData.title,
      seller: mydata.prodData.category,
      brand: mydata.prodData.packsize,
      salePrice: mydata.prodData.price,
      strikeOfPrice: "mydata.prodData.strike-price",
      qty: mydata.prodData.qty,
     
    };
    axios.post("https://link-ten-zeta.vercel.app/cart", finallyPost);
    Toast({
      title: "Succesfull",
      description: "Item Added to Cart Successfully",
      position: "top",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    setFlag(true);

    dispatch(cartData(finallyPost));
    

  };

  return (
    <>
      <Box>
        {flag ? (
          <Box>
            <Button
              width={10}
              height={10}
              mt={2}
              mr={5}
              rounded={"50%"}
              onClick={() => handleDecrement(1)}
            >
              {" "}
              -{" "}
            </Button>
            <b style={{ marginTop: "20px" }}>{count}</b>
            <Button
              width={10}
              height={10}
              mt={2}
              ml={5}
              rounded={"50%"}
              onClick={() => handleIncrement(1)}
            >
              {" "}
              +{" "}
            </Button>
          </Box>
        ) : (
          <Button
            color={"white"}
            bg={"#24AEB1"}
            onClick={() => handleSave(mydata)}
            mt={2}
            width={180}
          >
            ADD TO CART
          </Button>
        )}
      </Box>
    </>
  );
};
export default AddCart;
