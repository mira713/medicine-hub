
import { Box, Button, ButtonGroup, Card, CardFooter, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
//import "react-multi-carousel/lib/styles.css";
//   const AyurAllProducts = [
//     {
//       id: 1,
//       link: "https://www.1mg.com/otc/baidyanath-kamini-vidrawan-ras-keshar-yukta-tablet-otc560948",
//       img: "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/b35d350fc98f4ad9aeb11c58a97eac9a/dabur-chyawanprash-awaleha.jpg",
//       name: "Dabur Chyawanprash Awaleha",
//       qty: "bottle of 10 gm Tablet",
//       strikePrice: "795",
//       discount: "35% off",
//       price: "608",
//     },
//     {
//       id: 2,
//       link: "https://www.1mg.com/otc/baidyanath-kamini-vidrawan-ras-keshar-yukta-tablet-otc560948",
//       img: "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/wb4ndsavl7ixslwyohbi/vicks-vaporub.jpg",
//       name: "Vicks Vaporub",
//       qty: "1 Bottle of 50 Balm",
//       strikePrice: "155",
//       discount: "15% off",
//       price: "145",
//     },
//     {
//       id: 3,
//       link: "https://www.1mg.com/otc/baidyanath-kamini-vidrawan-ras-keshar-yukta-tablet-otc560948",
//       img: "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/b7kf9x8oa9s8bzmgmaig/saffola-immuniveda-chyawanprash-avaleha-immunity-booster.jpg",
//       name: "Saffola Immuniveda Chyawanprash Avaleha Immunity Booster",
//       qty: "1 Jar of 1 kg Paste",
//       strikePrice: "350",
//       discount: "30% off",
//       price: "245",
//     },
//     {
//       id: 4,
//       link: "https://www.1mg.com/otc/baidyanath-kamini-vidrawan-ras-keshar-yukta-tablet-otc560948",
//       img: "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/asqryelbmu85zqqovpdu/zandu-ortho-vedic-knee-joint-pain-oil.jpg",
//       name: "Zandu Ortho Vedic Knee & Joint Pain Oil ",
//       qty: "1 Bottle of 120 ml Oil",
//       strikePrice: "295",
//       discount: "48% off",
//       price: "162",
//     },

//     {
//       id: 3,
//       link: "https://www.1mg.com/otc/baidyanath-kamini-vidrawan-ras-keshar-yukta-tablet-otc560948",
//       img: "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/cropped/kgbk3tvgjvcgjmqws6cp/boroline-cream.jpg",
//       name: "Boroline Cream",
//       qty: "1 Tube of20 gm Cream",
//       strikePrice: "43",
//       discount: "1% off",
//       price: "42",
//     },
//     {
//       id: 4,
//       link: "https://www.1mg.com/otc/baidyanath-kamini-vidrawan-ras-keshar-yukta-tablet-otc560948",
//       img: "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/7e74ed0f-a621-44e8-8169-3900f01fb0db/tata-1mg-tejasya-cough-relief-syrup.jpeg",
//       name: "Tata 1mg Tejasya Cough Relief Syrup",
//       qty: "1 Bottle of100 ml Syrup",
//       strikePrice: "125",
//       discount: "29% off",
//       price: "89",
//     },

//     {
//       id: 5,
//       link: "https://www.1mg.com/otc/baidyanath-kamini-vidrawan-ras-keshar-yukta-tablet-otc560948",
//       img: "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/fal2s18shncavuwm1o9t/himalaya-wellness-pure-herbs-guduchi-immunity-wellness-tablet.jpg",
//       name: "Himalaya Wellness Pure Herbs Guduchi Immunity Wellness Tablet",
//       qty: "1 Bottle of 60 tablets",
//       strikePrice: "200",
//       discount: "18% off",
//       price: "168",
//     },

//     {
//       id: 6,
//       link: "https://www.1mg.com/otc/baidyanath-kamini-vidrawan-ras-keshar-yukta-tablet-otc560948",
//       img: "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/vqdzvamefo5xsbjwst8h/dr.-morepen-chyawanprash.jpg",
//       name: "Dr. Morepen Chyawanprash",
//       qty: "1 Jar of500 gm Paste",
//       strikePrice: "168",
//       discount: "15% off",
//       price: "139",
//     },
//     {
//       id: 7,
//       link: "https://www.1mg.com/otc/baidyanath-kamini-vidrawan-ras-keshar-yukta-tablet-otc560948",
//       img: "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/uwlk64zu2xcqfrsh2kam/dabur-kesarprash-kesar-moti-revitalizer.jpg",
//       name: "Dabur Kesarprash Kesar & Moti Revitalizer",
//       qty: "1 Bottle of 500 creame",
//       strikePrice: "365",
//       discount: "48% off",
//       price: "265",
//     },
//     {
//       id: 1,
//       link: "https://www.1mg.com/otc/baidyanath-kamini-vidrawan-ras-keshar-yukta-tablet-otc560948",
//       img: "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/b35d350fc98f4ad9aeb11c58a97eac9a/dabur-chyawanprash-awaleha.jpg",
//       name: "Dabur Chyawanprash Awaleha",
//       qty: "bottle of 10 gm Tablet",
//       strikePrice: "795",
//       discount: "35% off",
//       price: "608",
//     },
//     {
//       id: 2,
//       link: "https://www.1mg.com/otc/baidyanath-kamini-vidrawan-ras-keshar-yukta-tablet-otc560948",
//       img: "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/wb4ndsavl7ixslwyohbi/vicks-vaporub.jpg",
//       name: "Vicks Vaporub",
//       qty: "1 Bottle of 50 Balm",
//       strikePrice: "155",
//       discount: "15% off",
//       price: "145",
//     },
//     {
//       id: 3,
//       link: "https://www.1mg.com/otc/baidyanath-kamini-vidrawan-ras-keshar-yukta-tablet-otc560948",
//       img: "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/b7kf9x8oa9s8bzmgmaig/saffola-immuniveda-chyawanprash-avaleha-immunity-booster.jpg",
//       name: "Saffola Immuniveda Chyawanprash Avaleha Immunity Booster",
//       qty: "1 Jar of 1 kg Paste",
//       strikePrice: "350",
//       discount: "30% off",
//       price: "245",
//     },
//     {
//       id: 4,
//       link: "https://www.1mg.com/otc/baidyanath-kamini-vidrawan-ras-keshar-yukta-tablet-otc560948",
//       img: "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/asqryelbmu85zqqovpdu/zandu-ortho-vedic-knee-joint-pain-oil.jpg",
//       name: "Zandu Ortho Vedic Knee & Joint Pain Oil ",
//       qty: "1 Bottle of 120 ml Oil",
//       strikePrice: "295",
//       discount: "48% off",
//       price: "162",
//     },

//     {
//       id: 3,
//       link: "https://www.1mg.com/otc/baidyanath-kamini-vidrawan-ras-keshar-yukta-tablet-otc560948",
//       img: "https://onemg.gumlet.io/images/c_fit,w_150,f_auto,q_auto,h_150/cropped/kgbk3tvgjvcgjmqws6cp/boroline-cream.jpg",
//       name: "Boroline Cream",
//       qty: "1 Tube of20 gm Cream",
//       strikePrice: "43",
//       discount: "1% off",
//       price: "42",
//     },
//     {
//       id: 11,
//       link: "https://www.1mg.com/otc/baidyanath-kamini-vidrawan-ras-keshar-yukta-tablet-otc560948",
//       img: "https://onemg.gumlet.io/images/f_auto,c_fit,q_auto,w_150,h_150/cropped/m7ywndnc6att5k6bc8cs/himalaya-liv.-52-ds-tablet.jpg",
//       name: "Himalaya Liv. 52 DS Tablet",
//       qty: "1 Bottle of 500 creame",
//       strikePrice: "845",
//       discount: "48% off",
//       price: "425",
//     },
//   ];
// const AyurvedaAllPro = () => {
//     const responsive = {
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 6,
//             slidesToSlide: 3, 
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 3,
//             slidesToSlide: 2, 
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 1,
//             slidesToSlide: 1, 
//         },
//     };

//     return (
//       <Box
//         bg="white"
//         p="1rem"
//         height="400px"
//         width={"1200px"}
//         border="1x solid green"
//       >
//         <Grid templateColumns="repeat(4, 1fr)" gap={1} margin={"auto"}>
//           {AyurAllProducts?.map((e, i) => (
//             <Box
//               h={"370px"}
//               w={"250px"}
//               // border="solid red 1px"
//               p="0.5rem"
//               key={i}
//               textAlign="left"
//               borderRadius="5px"
//               ml={"1rem"}
//               _hover={{
//                 boxShadow:
//                   "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
//               }}
//               cursor="pointer"
//             >
//               <Image
//                 h={"40%"}
//                 w={"auto"}
//                 m="auto"
//                 marginBottom={"3px"}
//                 src={e.img}
//               />
//               <Box>
//                 <Text fontSize={"16px"} marginTop={"4px"}>
//                   {e.name}
//                 </Text>
//                 <Text fontSize={"13px"} marginTop={"4px"}>
//                   {e.qty}
//                 </Text>
//                 <Text>
//                   MRP{" "}
//                   <span style={{ textDecoration: "line-through" }}>
//                     ₹{e.strikePrice}
//                   </span>
//                   <span
//                     style={{
//                       color: "green",
//                       marginLeft: "1rem",
//                     }}
//                   >
//                     {e.discount}
//                   </span>
//                 </Text>
//                 <Text fontWeight={"600"} marginTop={"4px"}>
//                   ₹ {e.price}
//                 </Text>
//               </Box>
//               <Card>
//                 <CardFooter>
//                   <ButtonGroup spacing="2">
//                     <Button variant="solid" colorScheme="purple">
//                       Add to cart
//                     </Button>
//                   </ButtonGroup>
//                 </CardFooter>
//               </Card>
//             </Box>
//           ))}
//         </Grid>
//       </Box>
//     );
// };

//export default AyurvedaAllPro;






