import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  Stack,
  Link,
  Image,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box>
        <Heading fontSize={"lg"}>
          Stay Healthy with Medicine Hub: Your Favourite Online Pharmacy and
          Healthcare Platform
        </Heading>
        <Heading fontSize={"md"}>We Bring Care to Health.</Heading>
        <Text>
          Medicine Hub is India's leading digital healthcare platform. From
          doctor consultations on chat to online pharmacy and lab tests at home:
          we have it all covered for you. Having delivered over 25 million
          orders in 1000+ cities till date, we are on a mission to bring "care"
          to "health" to give you a flawless healthcare experience.
        </Text>
        <Heading fontSize={"md"}>
          Medicine Hub: Your Favourite Online Pharmacy!
        </Heading>
        <Text>
          Medicine Hub is India's leading online chemist with over 2 lakh
          medicines available at the best prices. We are your one-stop
          destination for other healthcare products as well, such as over the
          counter pharmaceuticals, healthcare devices and homeopathy and
          ayurveda medicines. With Medicine Hub, you can buy medicines online
          and get them delivered at your doorstep anywhere in India! But, is
          ordering medicines online a difficult process? Not at all! Simply
          search for the products you want to buy, add to cart and checkout. Now
          all you need to do is sit back as we get your order delivered to you.
          In case you need assistance, just give us a call and we will help you
          complete your order. And there is more! At Medicine Hub, you can buy
          health products and medicines online at best discounts. Now, isn't
          that easy? Why go all the way to the medicine store and wait in line,
          when you have Medicine Hub Pharmacy at your service.
        </Text>
      </Box>

      <Box style={{ textAlign: "center"}}>
        <Text fontSize={"2xl"} mt="50px">INDIA’S LARGEST HEALTHCARE PLATFORM</Text>
        <Box display={"flex"} justifyContent="center" gap={"50px"} mt="20px">
          <Box>
            <Heading as={"h5"} >260m+</Heading>
            <Text>Visitors</Text>
          </Box>
          <Box>
            <Heading as="h5">31m+</Heading>
            <Text>Orders Delivered</Text>
          </Box>
          <Box>
            <Heading as={"h5"}>1800+</Heading>
            <Text>Cities</Text>
          </Box>
        </Box>
      </Box>

      <Box display={"flex"} width={{base:"none", md:"50%"}} margin="auto" gap={"10px"} mt="30px">
        <Text>Get the link to download App</Text>
        <Input width={"400px"} type={"text"} placeholder="Enter Phone Number"></Input>
        <Button backgroundColor=" #ff6f61" color={"white"}>Send Link</Button>
      </Box>
      <Box
        as="footer"
        bg="white"
        color="black"
        p="4"
        w="full"
       
      >
        <Stack isInline spacing="24px" justifyContent="center" mt={"30px"}>
          <Stack spacing="8px" direction="column" align="center">
            <Text fontWeight="bold">About Us</Text>
            <Link href="#">Know Us</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Press Coverage</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Business Partnership</Link>
            <Link href="#">Become a Health Partner</Link>
            <Link href="#">Corporate Governance</Link>
          </Stack>
          <Stack spacing="8px" direction="column" align="center">
            <Text fontWeight="bold">Policies</Text>
            <Link href="#">Our Policies</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms and Conditions</Link>
            <Link href="#">Editorial Policy</Link>
            <Link href="#">Return Policy</Link>
            <Link href="#">IP Policy</Link>
            <Link href="#">Grievance Redressal Policy</Link>
            <Link href="#">Fake Jobs and Fraud Disclaimer</Link>
          </Stack>
          <Stack spacing="8px" direction="column" align="center">
            <Text fontWeight="bold">Our Services</Text>
            <Link href="#">Order Medicines</Link>
            <Link href="#">Book Lab Tests</Link>
            <Link href="#">Consult a Doctor</Link>
            <Link href="#">Ayurveda Articles</Link>
            <Link href="#">Hindi Articles</Link>
            <Link href="#">Care Plan</Link>
          </Stack>
          <Stack spacing="8px" direction="column" align="center">
            <Text fontWeight="bold">Connect</Text>
            <Text>Want daily dose of health?</Text>
            <Link href="#">SIGN UP</Link>
            <Link href="#">Download App</Link>
            <Link href="#">Social Links</Link>
          </Stack>

          <Stack spacing="8px" direction="column" align="center">
            <Text fontWeight="bold">Download App</Text>
            <img width={"150px"} src="https://w7.pngwing.com/pngs/52/715/png-transparent-google-play-logo-google-play-computer-icons-app-store-google-text-logo-sign.png" alt="" />
            <img width={"150px"} src="https://w7.pngwing.com/pngs/314/368/png-transparent-itunes-app-store-apple-logo-apple-text-rectangle-logo.png" alt="" />
          </Stack>
        </Stack>
      </Box>

      <Box
        display={"grid"}
        textAlign="center"
        gridTemplateColumns={"repeat(3,1fr)"}
        gap={{base:"none",md:"50px"}}
        width={{base:"none",md:"80%"}}
        margin={"auto"}
      >
        <Box style={{ textAlign: "center", padding: "40px" }}>
          <Image
            src="https://onemg.gumlet.io/secure-rebrand_x6f8yq.svg"
            alt=""
          />
          <Heading>Reliable</Heading>
          <Text>
            All products displayed on Medicine Hub are procured from verified
            and licensed pharmacies. All labs listed on the platform are
            accredited
          </Text>
        </Box>
        <Box style={{ textAlign: "center", padding: "40px" }}>
          <Image
            src="https://onemg.gumlet.io/reliable-rebrand_rcpof3.svg"
            alt=""
          />
          <Heading>Secure</Heading>
          <Text>
            Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and is
            Payment Card Industry Data Security Standard (PCI DSS) compliant
          </Text>
        </Box>
        <Box style={{ textAlign: "center", padding: "40px" }}>
          <Image
            src="https://onemg.gumlet.io/affordable-rebrand_ivgidq.svg"
            alt=""
          />
          <Heading>Affordable</Heading>
          <Text>
            Find affordable medicine substitutes, save up to 50% on health
            products, up to 80% off on lab tests and free doctor consultations.
          </Text>
        </Box>
      </Box>

      <Box>
        <Box display={"flex"} gap="100px" justifyContent={"center"}>
          <Image
            boxSize={"60px"}
            src="https://static.legitscript.com/seals/729605.png"
            alt=""
          />
          <Image
            boxSize={"60px"}
            src="https://onemg.gumlet.io/URS_ebgmxc.png"
            alt=""
          />
        </Box>

        <Heading as="h6" size="xs" textAlign={"center"}>
          India's only LegitScript and ISO/ IEC 27001 certified online
          healthcare platform
        </Heading>
      </Box>
      <Text style={{width:"80%",color:"gray",margin:"auto",textAlign:"center"}}>
        © 2023 Medicine Hub. All rights reserved. In compliance with Drugs and
        Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945, we don't
        process requests for Schedule X and other habit forming drugs.
      </Text>
    </>
  );
};

export default Footer;
