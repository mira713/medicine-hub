import { Box, Grid, GridItem, Image, Flex, Text, Show } from "@chakra-ui/react";
import React from "react";
import Footer4 from "./Footer4";
import Footer5 from "./Footer5";

const Footer3 = () => {
  return (
    <Box
      bg="#fffcf8"
      h="max-content"
      borderY={{
        base: "none",
        sm: "none",
        md: "1px solid #bfbfbf",
        lg: "1px solid #bfbfbf",
      }}
      py={{ base: "2", sm: "2", md: "9", lg: "9" }}
    >
      <Box w="90%" m="auto">
        <Grid
          templateColumns={{
            base: "90%",
            sm: "90%",
            md: "30% 30% 30% ",
            lg: "17% 17% 13% 25% 18%",
          }}
          gap="8"
        >
          <Show above="sm">
            <GridItem w="100%">
              <Box>
                <Box my="4">
                  <Text as="b" fontsize="16px" color="#1A1A1A">
                    Know Us
                  </Text>
                </Box>
                <Box fontSize="14px" color="#666666">
                  <Box>
                    {" "}
                    <Text w="max-content" _hover={{ cursor: "pointer" }}>
                      About Us
                    </Text>{" "}
                  </Box>
                  <Box>
                    {" "}
                    <Text w="max-content" _hover={{ cursor: "pointer" }}>
                      Contact Us
                    </Text>{" "}
                  </Box>
                  <Box>
                    {" "}
                    <Text w="max-content" _hover={{ cursor: "pointer" }}>
                      Press Coverage
                    </Text>{" "}
                  </Box>
                  <Box>
                    {" "}
                    <Text w="max-content" _hover={{ cursor: "pointer" }}>
                      Careers
                    </Text>{" "}
                  </Box>
                  <Box>
                    {" "}
                    <Text w="max-content" _hover={{ cursor: "pointer" }}>
                      Business Partnership
                    </Text>{" "}
                  </Box>
                  <Box>
                    {" "}
                    <Text w="max-content" _hover={{ cursor: "pointer" }}>
                      Become a Health Partner
                    </Text>{" "}
                  </Box>
                  <Box>
                    {" "}
                    <Text w="max-content" _hover={{ cursor: "pointer" }}>
                      Corporate Governance
                    </Text>{" "}
                  </Box>
                </Box>
              </Box>
            </GridItem>

            <GridItem w="100%">
              <Box>
                <Box my="4">
                  <Text as="b" fontsize="16px" color="#1A1A1A">
                    Our Policies
                  </Text>
                </Box>
                <Box fontSize="14px" color="#666666">
                  <Box>
                    {" "}
                    <Text w="max-content" _hover={{ cursor: "pointer" }}>
                      Privacy Policy
                    </Text>{" "}
                  </Box>
                  <Box>
                    {" "}
                    <Text w="max-content" _hover={{ cursor: "pointer" }}>
                      Terms and Conditions
                    </Text>{" "}
                  </Box>
                  <Box>
                    {" "}
                    <Text w="max-content" _hover={{ cursor: "pointer" }}>
                      Editorial Policy
                    </Text>{" "}
                  </Box>
                  <Box>
                    {" "}
                    <Text w="max-content" _hover={{ cursor: "pointer" }}>
                      Return Policy
                    </Text>{" "}
                  </Box>
                  <Box>
                    {" "}
                    <Text w="max-content" _hover={{ cursor: "pointer" }}>
                      IP Policy
                    </Text>{" "}
                  </Box>
                  <Box>
                    {" "}
                    <Text w="max-content" _hover={{ cursor: "pointer" }}>
                      Grievance Redressal Policy
                    </Text>{" "}
                  </Box>
                </Box>
              </Box>
            </GridItem>

            <GridItem w="100%">
              <Box>
                <Box my="4">
                  <Text as="b" fontsize="16px" color="#1A1A1A">
                    Our Services
                  </Text>
                </Box>
                <Box fontSize="14px" color="#666666">
                  <Box>
                    {" "}
                    <Text w="max-content" _hover={{ cursor: "pointer" }}>
                      Order Medicines
                    </Text>{" "}
                  </Box>
                  <Box>
                    {" "}
                    <Text w="max-content" _hover={{ cursor: "pointer" }}>
                      Book Lab Tests
                    </Text>{" "}
                  </Box>
                  <Box>
                    {" "}
                    <Text w="max-content" _hover={{ cursor: "pointer" }}>
                      Consult a Doctor
                    </Text>{" "}
                  </Box>
                  <Box>
                    {" "}
                    <Text w="max-content" _hover={{ cursor: "pointer" }}>
                      Ayurveda Articles
                    </Text>{" "}
                  </Box>
                  <Box>
                    {" "}
                    <Text w="max-content" _hover={{ cursor: "pointer" }}>
                      Hindi Articles
                    </Text>{" "}
                  </Box>
                  <Box>
                    {" "}
                    <Text w="max-content" _hover={{ cursor: "pointer" }}>
                      Care Plan
                    </Text>{" "}
                  </Box>
                </Box>
              </Box>
            </GridItem>

            <GridItem w="100%">
              <Box>
                <Box my="4">
                  <Text as="b" fontsize="16px" color="#1A1A1A">
                    Connect
                  </Text>
                </Box>
                <Box fontSize="14px" color="#666666">
                  <Box>Social Links</Box>
                  <Box>
                    <Flex>
                      <Box px="1">
                        <Image
                          _hover={{ cursor: "pointer" }}
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAjVBMVEUAN8H///8ANcElOsH8/f4LQMQbTMgVR8YRRMUCOcEIPcOxuuUAJr4AIb4nVsoeT8iRndwALL+Cj9dIWsjGyeoAGrz19vzP0+/t7vgAE7wAMcDZ2/GqsOJneNErRcS6v+c2S8Xf4vRebM0AALowXs46U8d+idahqeBmcs9UZsyYo95xgtSOkdh2fdKIldkIl3kiAAAD3ElEQVR4nO2b23aiMBSGIYoSQW2qongCtHWm06nv/3iDipLDTkhQYC7yr9VeQf6PnZ2TK9txO5ZjAf5TgH4D0gXYbHf7XiPa77abKoAomJExQQ0pb3oWRCqAJI3XyGlQCMVpIgWIDnGj7gVDfIhggCwlADFC+CHHuf2JKh7Hjwdub8MIYZpBAIL/xdofTCe5bv8oDS5/Fw1L+bS8q0YYJCAUwQMg4vxz+8Hk4+NjQmnKMFASELy7RiADSSMB4BCy9p6uuxAAyvwmAIEceIAkZvxHU8Z9qu3uC+5UilCKExYgSumEQQMtdzHyPu2OC3fI30H3TigAAioAyOEjP9H6eP7bR1jun4cgYABmayr8+u5A5NE6HC/ii453LaDhuJ7RABvyeAb59XMek8XnzzlYZitGc2h2RWRDAWzH/Peznz6VB77sd0w+3zJupr9qSaAQjLcUwO4+ByBcb8jlPU7SBHKXApAdBbC/P4Gm8n4fqHIej99gdykA2lMAveIJNJiY5vwt6R1nKfWXAfRKgH4BgDxNd37I4XUm95cC9EUAs6Qvx/tirvDXB0B+LXeMyUnlbwBgvsxchXxJ+hsC5BlgvsxcZtrxL6W/PsCw3jKDRqvXAGDTZaZoaf1b7a8LgDx11nmge65FovbXBvAVkff4fqd0rOgB7S6Qph2XdXxDe/UY0AbAetsLoaHKFKAXezXAw1s65IB2HHgWWm1PX7O7wPOBADAaqvsdauQKAC2Dy/wYuH4IfE8EUE43Mvv8nANMQ30HNq0EUA94WMXOhu31o/odEADrJb0IEIgA5RbPBEA525gB/Amr34MAtDb0zQGYf3wTAIbuLwYwd38lgFPL/pURqGEuA3irFYF6wl0BoLDQEQA4xyEl8bevFwAg5/x+0wk4EyWnd0rfequhIUBPtJVpA/742SJAAmZEiwDw0tQiADwmWgT4BodBiwBf4PaoRQCv62F4lLTQHgC4yLQHsOoaYBl3DBDAW+T2ACS7k/YA/jazHOsD/GieDU0BlvNCmei5mVOCD8fP74gWhY7A2fB8XJSSnFMb3hPWOJzWVde7YgtgASyABbAAFsACWAALYAEsgAWwABbAAlgAC2ABLMBLANxuANwSYN8FAH2tdwf/ot4oAHOxWefej0xh0I849c8aAMzVbvi+m55QOhM0rG6OvdxOX+83JwBU/RZ7vZ8pcGhHXIEDW+LRgvgSD67IpXnxRS6ue3hiJJpLLPMRCp2a9QcKnVyo1Kwx/8wVAdojoP2Fcr9617lMJC/3c68FjzqTyBPuyoJHt/uSz4u6LXq9q8uy35ZlAToH+AfAwY6b2BVLMwAAAABJRU5ErkJggg=="
                          w="27px"
                          m="auto"
                          alt="footer_facbook_logo"
                        />
                      </Box>
                      <Box px="1">
                        <Image
                          _hover={{ cursor: "pointer" }}
                          src="data:image/jpeg;base64,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"
                          w="27px"
                          m="auto"
                          alt="footer_insta_logo"
                        />
                      </Box>
                      <Box px="1">
                        <Image
                          _hover={{ cursor: "pointer" }}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiRpTvWPSUBG774c6zXKNawugGJO7SJZo4QIQqJY2Z8lfFdPqU99xF2_DPk2Ppvf0ktPc&usqp=CAU"
                          w="27px"
                          m="auto"
                          alt="footer_twiter_logo"
                        />
                      </Box>
                      <Box px="1">
                        <Image
                          _hover={{ cursor: "pointer" }}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0BUaJPFAYR_VTuNR5yNXjDjP93sz4PGjAw&usqp=CAU"
                          w="27px"
                          m="auto"
                          alt="footer_youtube_logo"
                        />
                      </Box>
                      <Box px="1">
                        <Image
                          _hover={{ cursor: "pointer" }}
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
                          w="27px"
                          m="auto"
                          alt="footer_linkedin_logo"
                        />
                      </Box>
                      <Box px="1">
                        <Image
                          _hover={{ cursor: "pointer" }}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvc3KaUA3oUQrm_0sfC937gw1HKfnsBe1A84wM6X9ATCcO5s2tRWmSDZuKxvb1WlU4e0&usqp=CAU"
                          w="27px"
                          m="auto"
                          alt="footer_medium_logo"
                        />
                      </Box>
                    </Flex>
                  </Box>
                  <Box>Want daily dose of health?</Box>
                  <Box
                    w="max-content"
                    bg="tomato"
                    py="2"
                    px="4"
                    color="white"
                    borderRadius="4"
                    _hover={{ cursor: "pointer" }}
                  >
                    SIGN UP
                  </Box>
                </Box>
              </Box>
            </GridItem>
          </Show>

          <GridItem
            w="100%"
            textAlign={{ base: "center", sm: "center", md: "left", lg: "left" }}
          >
            <Box>
              <Box my="4">
                <Text as="b" fontSize="16px" color="#000000">
                  Download App
                </Text>
              </Box>
              <Box
                w={{ base: "50%", sm: "50%", md: "65%", lg: "70%" }}
                m={{ base: "auto", sm: "auto", md: "10px 0px", lg: "10px 0px" }}
                my="4"
                display={{ base: "block", sm: "block" }}
              >
                <Image
                  _hover={{ cursor: "pointer" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                  w="100%"
                  // m="auto"
                  alt="Google_play_logo"
                />
              </Box>
              <Box
                w={{ base: "50%", sm: "50%", md: "65%", lg: "70%" }}
                m={{ base: "auto", sm: "auto", md: "10px 0px", lg: "10px 0px" }}
                my="4"
                display={{ base: "block", sm: "block" }}
              >
                <Image
                  _hover={{ cursor: "pointer" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png"
                  w="100%"
                  // m="auto"
                  alt="App_store_logo"
                />
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer3;
