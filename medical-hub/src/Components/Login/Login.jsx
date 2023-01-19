import React, { useRef, useState } from "react";
import {
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
  Box,
} from "@chakra-ui/react";
import { lightOrange } from "../../Colors/Color";
import { useDispatch, useSelector } from "react-redux";
import { coupon } from "../../Redux/action";

export default function Coupon() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const discount = useSelector((stroe) => stroe.couponDiscount);
  const ref = useRef(null);
  const [code, setCode] = useState({
    masai: false,
    tata: false,
    ma: false,
    input: false,
  });
  return (
    <div
      style={{
        display: "flex",
        cursor: "pointer",
        padding: "10px",
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
      }}
      onClick={onOpen}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", width: "50%" }}>
          <img
            src="https://res.cloudinary.com/du8msdgbj/image/upload/v1607414999/marketing/cvtnx1zh5we6atn3m7i0.svg"
            alt="coupon logo"
          />
          <h3>Apply Coupon</h3>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "50%",
          }}
        >
          <div
            style={{
              width: "25px",
              background: "#e2e2e2",
              textAlign: "center",
              borderRadius: "50%",
            }}
          >
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png"
              alt="coupon logo"
            />
          </div>
        </div>
      </div>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Apply Coupon</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex" border="1px solid black" borderRadius="10px">
              <Input
                ref={ref}
                outline="none"
                style={{ border: "none", borderStyle: "none", outline: "none" }}
                _focus={{ boxShadow: "none" }}
              />
              {code.input ? (
                <Button
                  color={lightOrange}
                  bg="white"
                  onClick={(e) => {
                    dispatch(coupon(0));
                    setCode({ ...code, input: false });
                  }}
                >
                  Cancle
                </Button>
              ) : (
                <Button
                  color={lightOrange}
                  bg="white"
                  onClick={() => {
                    dispatch(coupon(10));
                    setCode({ ...code, input: true });
                  }}
                >
                  Apply
                </Button>
              )}
            </Box>
            <Box marginTop="10px">COUPONS</Box>
            <Box>
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  gap="10px"
                  marginTop="10px"
                >
                  <img
                    style={{ marginLeft: "-10px" }}
                    class="CartCoupon__offer_icon___2-AD-"
                    src="https://www.masaischool.com/img/navbar/logo.svg"
                    alt=""
                  />
                  {code.masai ? (
                    <Button
                      color={lightOrange}
                      bg="white"
                      onClick={() => {
                        dispatch(coupon(0));
                        setCode({ ...code, masai: false });
                        ref.current.value = "";
                      }}
                    >
                      Cancle
                    </Button>
                  ) : (
                    <Button
                      color={lightOrange}
                      bg="white"
                      onClick={() => {
                        dispatch(coupon(10));
                        setCode({ ...code, masai: true });
                        ref.current.value = "MASAI";
                      }}
                    >
                      Apply
                    </Button>
                  )}
                </Box>
                <Box color="black">
                  Get flat 10% on your allopathy medicine order
                </Box>
                <Box fontSize="13px">
                  Coupon code :{" "}
                  <span>
                    <b>MASAI</b>
                  </span>
                  <br />
                  Validity :
                  <span>
                    <b>15th Oct 2022</b>
                  </span>
                </Box>
              </Box>
            </Box>
            <hr style={{ marginTop: "10px" }} />
            <Box>
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  gap="10px"
                  marginTop="10px"
                >
                  <img
                    style={{ marginLeft: "-5px" }}
                    class="CartCoupon__offer_icon___2-AD-"
                    src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Multi_coupon_logo/multi_coupon_logo.png"
                    alt=""
                  />
                  {code.tata ? (
                    <Button
                      color={lightOrange}
                      bg="white"
                      onClick={() => {
                        dispatch(coupon(0));
                        setCode({ ...code, tata: false });
                        ref.current.value = "";
                      }}
                    >
                      Cancle
                    </Button>
                  ) : (
                    <Button
                      color={lightOrange}
                      bg="white"
                      onClick={() => {
                        dispatch(coupon(25));
                        setCode({ ...code, tata: true });
                        ref.current.value = "1MGNEW";
                      }}
                    >
                      Apply
                    </Button>
                  )}
                </Box>
                <Box color="black">
                  Get flat 25% off + assured 1% NeuCoins on your allopathy
                  medicine order
                </Box>
                <Box fontSize="13px">
                  Coupon code :{" "}
                  <span>
                    <b>1MGNEW</b>
                  </span>
                  <br />
                  Validity :
                  <span>
                    <b>15th Oct 2022</b>
                  </span>
                </Box>
              </Box>
            </Box>
            <hr style={{ marginTop: "10px" }} />
            <Box>
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  gap="10px"
                  marginTop="10px"
                >
                  <img
                    style={{ marginLeft: "-10px" }}
                    class="CartCoupon__offer_icon___2-AD-"
                    src="https://www.masaischool.com/img/navbar/logo.svg"
                    alt=""
                  />
                  {code.ma ? (
                    <Button
                      color={lightOrange}
                      bg="white"
                      onClick={() => {
                        dispatch(coupon(0));
                        setCode({ ...code, ma: false });
                      }}
                    >
                      Cancle
                    </Button>
                  ) : (
                    <Button
                      color={lightOrange}
                      bg="white"
                      onClick={() => {
                        dispatch(coupon(10));
                        setCode({ ...code, ma: true });
                      }}
                    >
                      Apply
                    </Button>
                  )}
                </Box>
                <Box color="black">
                  Get flat 10% on your allopathy medicine order
                </Box>
                <Box fontSize="13px">
                  Coupon code :{" "}
                  <span>
                    <b>MASAI</b>
                  </span>
                  <br />
                  Validity :
                  <span>
                    <b>15th Oct 2022</b>
                  </span>
                </Box>
              </Box>
            </Box>
            <hr style={{ marginTop: "10px" }} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
