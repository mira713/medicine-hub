import React,{useState,useRef } from 'react'
import emailjs from '@emailjs/browser';
import {Box,Flex,Text,Divider,Heading,Input,Button,Image,SimpleGrid, useToast } from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const datass=[
  {
      id:1,
      img:"https://onemg.gumlet.io/marketing/liinlnkozof8mdtelot2.png",
     title:"General Physian "
  },
{
  id:2,
  img:"https://onemg.gumlet.io/marketing/fcqsjqyummdc0wv8eepm.png",
  title:"Skin and Hair"
},
  {
      id:3,
      img:"https://onemg.gumlet.io/marketing/zsreblulpofk1bqqi0vp.png",
      title:"sexologist"
  },

  {
      id:4,
      img:"https://onemg.gumlet.io/marketing/y7x2wylau943va6dcxyr.png",
      title:"gynaecologist"
  },
  {
    id:5,
    img:"https://onemg.gumlet.io/marketing/tesj5p15sruirjuy9jix.png",
    title:"Bone and Joint"
},
{
  id:6,
  img:"https://onemg.gumlet.io/marketing/ll4mli8zbol6ovededr6.png",
  title:"ENT specialist"
},
{
  id:7,
  img:"https://onemg.gumlet.io/marketing/ahdy9o2zqjq8gi4v4hes.png",
  title:"pathologist"

},
{
id:8,
img:"https://onemg.gumlet.io/marketing/mops8f1it8faurfk5cqo.png",
title:"dietician"
},
{
  id:9,
  img:"https://onemg.gumlet.io/marketing/ew6o5oyhll6fftiaf7nb.png",
  title:"psycologist"
},

{
  id:10,
  img:"https://onemg.gumlet.io/marketing/ttaqvdla22lbpswd7gbg.png",
  title:"Dentist"
},
{
id:11,
img:"https://onemg.gumlet.io/marketing/soqnrdcslnvvakd6yxpa.png",
title:"psychiatrist"
},
{
id:12,
img:"https://onemg.gumlet.io/marketing/nmln0dvwqgqfyx3lpruf.png",
title:"Neorolist"
}
]

const d =[
  {
    id:1,
    title:""
  }
]
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#ff6f61" , marginTop:"-5rem",zIndex:"10"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#ff6f61",marginTop:"-5rem" ,zIndex:"10"}}
      onClick={onClick}
    />
  );
}

const Consult = () => {
let [mes, setMes] = useState('');
const form = useRef();
const toast = useToast()

let onChange=(e)=>{
  setMes(e.target.value)
}
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_n4ys4b3', 'template_04wzh47', form.current, 'hsInv32YWaPjiMsSl')
    .then((result) => {
        console.log(result.text);
        toast({
          title: 'query taken',
          description: "thanks for choosing us, we are proccessing your query",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })      
    }, (error) => {
        console.log(error.text);
    });
};
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 2,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};
  return (
    <>
    <br/>
   <Flex gap="20px" marginLeft={"20px"}>
     <Box textAlign={"left"} letterSpacing={"1px"} >
      <Heading fontSize={30} >Consult with Doctors across 22+ Specialities,over </Heading><Divider/>
      <Heading size="lg" color="#941c4d">Chat, Video & Voice calls.</Heading><Divider/><br/>
      <Text fontSize={20} color={"grey"}>Skip the struggle of booking appointments.
        Consult a doctor at your ease</Text><Divider/><br/><br/>
        
        <form onSubmit={sendEmail} ref={form} >
                <Input className="user" placeholder="Type Your Problem" name="message"/>
                <Button className="button" value="send" type="submit" bg={"#ff6f61"} color="white" mt={"20px"}>send</Button>
        </form>
        <br/><br/>
        < Image src="http://onemg.gumlet.io/marketing/ea05db01-99cf-4efc-bed1-04b3b2086d11.png" width="100%"/>

      
     </Box>
     <Box>
     <video loop autoPlay muted>
        <source src="https://onemg.gumlet.io/eConsult-final_ro63yx.webm" type="video/webm"/>
        
      </video>
     </Box>
   </Flex>
   <br/><br/><br/>

   <Box  shadow={"lg"} color="#212121" bg={"#f0f1f2"} h={['0vh',"20vh","30vh","38vh"]} overflow="hidden">
    <Text fontSize={30} color={"grey"}>Chat with our specialist doctors</Text><br/>
   <Slider {...settings} >
        {
            datass.map((item)=>(
              <div key={item.id}>
        <Image 
        src={item.img} alt="head" h={["10vh","10vh","20vh"]}/>
        <Text fontSize={["0px", "9px", "15px"]}>{item.title}</Text>
              </div>
            ))
        }
    </Slider>
    </Box><br/><br/><br/>
    <Box marginTop={['-17vh',"10vh"]} p={"20px"}>
      <Heading color="grey" fontSize={["20px","16px","17px","25px"]} overflow="hidden">How Online Doctor Consultation Works?</Heading>
      <SimpleGrid columns={2} spacing={10} p={"40px"} >
        <Image src='https://www.1mg.com/images/How_it_Works_1.svg' alt="1" h="45vh"/>
        <Flex  margin="auto" textAlign={"left"}>
          <Heading color="grey">01</Heading>
          <Box>
          <Text fontSize={25}>Start a session</Text>
          <Text>Select the type of category you would like to consult with the doctor.</Text>
          </Box>
        </Flex>

        <Flex  margin="auto" textAlign={"left"}>
          <Heading color="grey">02</Heading>
          <Box>
          <Text fontSize={25}>Start a session</Text>
          <Text>Type in your concern and attach prescription, lab reports if any. Help doctor understand your case better.</Text>
          </Box>
        </Flex>
        <Image src='https://www.1mg.com/images/How_it_Works_2.svg' alt="2" h="45vh"marginLeft={["430%","20%"]}/>

        <Image src='https://www.1mg.com/images/How_it_works_3.svg' alt="3" h="45vh"/>
        <Flex  margin="auto" textAlign={"left"}>
          <Heading color="grey">03</Heading>
          <Box>
          <Text fontSize={25}>Start a session</Text>
          <Text>A doctor is auto-assigned to you that best matches your concern. You will get a diagnosis and treatment for your condition.</Text>
          </Box>
        </Flex>

        <Flex  margin="auto" textAlign={"left"}>
          <Heading color="grey">04</Heading>
          <Box>
          <Text fontSize={25}>Start a session</Text>
          <Text>Still, need more clarity? You can follow up with the doctor even after your chat window closes.</Text>
          </Box>
        </Flex>
        <Image src='https://www.1mg.com/images/How_it_Works_4.svg' alt="4" h="45vh" marginLeft={["430%","20%"]} />
      </SimpleGrid>
    </Box>
    <Box>

    </Box>
   </>
  )
}

export default Consult

