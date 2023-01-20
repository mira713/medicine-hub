import { Box, Grid, GridItem, Image, Flex, Text, Show } from "@chakra-ui/react";
import React from "react";

const Footer4 = () => {
  return (
    <Show above="lg">
      <Box bg="#fffcf8" h="max-content">
        <Box w="90%" m="auto" py="3">
          <hr />
        </Box>
        <Box w="90%" m="auto">
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={4}
            justifyContent="center"
          >
            <GridItem>
              <Box>
                <Flex m="auto">
                  <Box alignItems="center" display="block" m="auto" mx="5">
                    <Image
                      w="300px"
                      src="https://www.24buyonline.in/wp-content/uploads/2022/05/reliable-rebrand_rcpof3-1-1.png"
                      alt="footer_lock"
                    />
                  </Box>
                  <Box>
                    <Box>
                      <Text as="b" fontSize="3xl">
                        Reliable
                      </Text>
                    </Box>
                    <Box>
                      <Text fontSize="xs">
                        All products displayed on Tata 1mg are procured from
                        verified and licensed pharmacies. All labs listed on the
                        platform are accredited
                      </Text>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </GridItem>

            <GridItem>
              <Box>
                <Flex m="auto">
                  <Box alignItems="center" display="block" m="auto" mx="5">
                    <Image
                      w="300px"
                      src="https://www.24buyonline.in/wp-content/uploads/2022/05/secure-rebrand_x6f8yq.png"
                      alt="footer_secure"
                    />
                  </Box>
                  <Box>
                    <Box>
                      <Text as="b" fontSize="3xl">
                        Secure
                      </Text>
                    </Box>
                    <Box>
                      <Text fontSize="xs">
                        All products displayed on Tata 1mg are procured from
                        verified and licensed pharmacies. All labs listed on the
                        platform are accredited
                      </Text>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </GridItem>

            <GridItem>
              <Box>
                <Flex m="auto">
                  <Box alignItems="center" display="block" m="auto" mx="5">
                    <Image
                      w="300px"
                      src="https://www.24buyonline.in/wp-content/uploads/2022/05/affordable-rebrand_ivgidq.png"
                      alt="footer_wallet"
                    />
                  </Box>
                  <Box>
                    <Box>
                      <Text as="b" fontSize="3xl">
                        Affordable
                      </Text>
                    </Box>
                    <Box>
                      <Text fontSize="xs">
                        All products displayed on Tata 1mg are procured from
                        verified and licensed pharmacies. All labs listed on the
                        platform are accredited
                      </Text>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </Box>
        <Box w="90%" m="auto" py="3">
          <hr />
        </Box>
      </Box>
    </Show>
  );
};

export default Footer4;
