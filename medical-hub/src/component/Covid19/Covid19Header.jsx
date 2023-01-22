import React from 'react'
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import Covid19Banner from './Covid19Banner'
import Covid19Essential from './Covid19Essential'
import Covid19Management from './Covid19Management'
import { BannerData } from './Covid19BannerData'
import Covid19ReUsableBanner from './Covid19ReUsableBanner'
import Covid19HelpNumber from './Covid19HelpNumber'
// import Upperfooter from "../Fotter/Upperfooter";
// import Footer from "../Fotter/Fotter";
const Covid19Header = () => {
  return (
    <>
      <Box bgColor={'#FDF0DF'}>
        <HStack p="3rem">
          <VStack w="60%" px="2">
            <Text
              textAlign={'left'}
              fontSize={'35px'}
              color="#3b3b3b"
              fontWeight={'600'}
            >
              Combating Coronavirus in India
            </Text>
            <Text fontSize={'16px'} color="#767676">
              As we are staring at a potential rise of coronavirus in India,
              testing, tracing and treating is the ideal way of curbing this
              spread. Testing on time helps provide early treatment which, in
              turn, prevents the spread to your loved ones and others around
              you.
            </Text>
            <Box p="0.1rem" my="1" bgColor={'#212529'} w="80%"></Box>
            <Box>
              <Text
                fontSize={'16px'}
                fontWeight="500"
                lineHeight={'23px'}
                color="#767676"
              >
                Experiencing COVID-like symptoms? To book a COVID-19 test at
                home, call on
              </Text>
            </Box>
            <Box fontSize={'35px'} color="#3b3b3b" fontWeight={'600'}>
              <a href="tel:18002122353">1800-212-2353 </a>
            </Box>
          </VStack>
          <VStack w="50%">
            <Image
              src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/img-head.png"
              borderRadius={'2xl'}
            />
          </VStack>
        </HStack>
      </Box>
      <Box display={'flex'} flexDir="column" my="2rem" mx="5rem">
        <Covid19Banner />

        <Covid19Essential />
        <Covid19Management />
        <Box>
          {BannerData.map((el, i) => {
            return (
              <Covid19ReUsableBanner
                key={i}
                ImgSrc={el.ImgSrc}
                headerText={el.headerText}
                Paragraph={el.Paragraph}
                btnText={el.btnText}
                fontSize={el.fontSize}
                paraFontSize={el.paraFontSize}
              />
            )
          })}
        </Box>
        <Covid19HelpNumber />
        <Box>
          <Covid19ReUsableBanner
            ImgSrc={
              'https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/consult-doc.png'
            }
            headerText={'Think you have fever, cold or cough?'}
            Paragraph={'Talk to our experts online'}
            btnText={'CONSULT NOW'}
            fontSize={'2.2vw'}
            paraFontSize={'1.8vw'}
          />
        </Box>
      </Box>
    </>
  )
}

export default Covid19Header
