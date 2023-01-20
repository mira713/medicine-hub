import {
  Stack,
  Link,
  Box,
  Text,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

const CAT_ITEMS = [
  {
    label: "Health Resource Center",
    children: [
      {
        label: "All Diseases",
        subLabel: [],
        href: "/medicine",
      },
      {
        label: "All Medicines",
        subLabel: [],
        href: "medicine",
      },
      {
        label: "Medicines by Therapeutic Class",
        subLabel: [],
        href: "/medicine",
      },
    ],
  },
  {
    label: "Vitamin & Nutrition",
    children: [
      {
        label: "Vitamins & Supplements",
        subLabel: [
          "Multi Vitamins",
          "Vitamins A-Z",
          "Minerals-Supplement",
          "Vitamin B-12 & B-Complex",
        ],
        href: "/medicine",
      },
      {
        label: "Nutritional Drinks",
        subLabel: [
          "Adult Daily Nutrition",
          "Kids Nutrition(2-15yrs",
          "Women Nutrition",
        ],
        href: "/medicine",
      },
      {
        label: "Health Food & Drinks",
        subLabel: [
          "Green Tea & Herbal Tea",
          "Apple Cider Vinegar",
          "Healthy Snacks",
        ],
        href: "/medicine",
      },
    ],
  },
  {
    label: "Diabetes",
    children: [
      {
        label: "Diabetes Monitoring",
        subLabel: [
          "Blood Glucose Monitors",
          "Test Strips & Lancets",
          "Syringes & Pens",
        ],
        href: "/medicine",
      },
     
      {
        label: "Diabetic Medicines",
        subLabel: ["Vitamins, Minerals & Antioxidants", "Homeopathy Medicines"],
        href: "/medicine",
      },
    ],
  },
  {
    label: "Healthcare Devices",
    children: [
      {
        label: "Top brands in Healthcare Devices",
        subLabel: [
          "Dr. Morepen Devices",
          "Accu-chek",
          "OneTouch",
          "Omron",
        ],
        href: "/medicine",
      },
      {
        label: "Masks (N95, Surgical and more)",
        subLabel: [
          "Face Shield",
          "Kids Nutrition(2-15yrs",
          "Women Nutrition",
        ],
        href: "/medicine",
      },
    ],
  },
  
  {
    label: "Personal Care",
    children: [
      {
        label: "Sexual Wellness",
        subLabel: [
          "Condoms",
          "Lubricants & Massage Gels",
          "Personal body massagers",
          "Men Performance Enhancers",
          "Sexual Health Supplements"
        ],
        href: "/medicine",
      },
      {
        label: "Skin Care",
        subLabel: [
          "Body Lotions",
          "Kids Nutrition(2-15yrs",
          "Women Nutrition",
        ],
        href: "/medicine",
      },
    ],
  },
  {
    label: "Health Conditions",
    children: [
      {
        label: "Ear Care",
        subLabel: [
          "Hearing Aid Devices",
          "Stomach Care",
          "Minerals-Supplement",
          "Bone, Joint & Muscle Care",
        ],
        href: "/medicine",
      },
      {
        label: "Pain Relief",
        subLabel: [
          "Heating Aids",
          "Omnigel products",
          
        ],
        href: "/medicine",
      },
    ],
  },
  {
    label: "Ayurveda Products",
    children: [
      {
        label: "Ayurveda Top Brands",
        subLabel: [
          "Dabar",
          "Sri Sri Tattva",
          "Minerals-Supplement",
          "Bone, Joint & Muscle Care",
        ],
        href: "/medicine",
      },
      {
        label: "Pain Relief",
        subLabel: [
          "Heating Aids",
          "Omnigel products",
          
        ],
        href: "/medicine",
      },
    ],
  },
  {
    label: "Homeopathy",
    children: [
      {
        label: "Homeopathy Popular Categories",
        subLabel: [
          "Multi Vitamins",
          "Vitamins A-Z",
          "Minerals-Supplement",
          "Vitamin B-12 & B-Complex",
        ],
        href: "/medicine",
      },
      {
        label: "Nutritional Drinks",
        subLabel: [
          "Adult Daily Nutrition",
          "Kids Nutrition(2-15yrs",
          "Women Nutrition",
        ],
        href: "/medicine",
      },
    ],
  },
  {
    label: "Featured",
    children: [
      {
        label: "Winter Care",
        subLabel: [
          "Body & Skin care",
          "Vitamins A-Z",
          "Minerals-Supplement",
          "Vitamin B-12 & B-Complex",
        ],
        href: "/medicine",
      },
      {
        label: "Deals of the Day",
        subLabel: [
          "Adult Daily Nutrition",
          "Kids Nutrition(2-15yrs",
          "Women Nutrition",
        ],
        href: "/medicine",
      },
    ],
  },
  {
    label: "Covid Essentials",
    children: [
      {
        label: "Covid-19 Self test kits",
        subLabel: [
          "Covid-19 Self test kits",
          "Vitamins A-Z",
          "Minerals-Supplement",
          "Vitamin B-12 & B-Complex",
        ],
        href: "/medicine",
      },
      {
        label: "Sanitizers & Handwash Products",
        subLabel: [
          "Support Your Immunity",
          "Masks"
        ],
        href: "/medicine",
      },
    ],
  },

];

function Category() {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("#ff6f61", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Box
      fontFamily={"Clear Sans"}
      shadow={"sm"}
      display={{ base: "none", md: "block" }}
      py="10px"
    >
      <Stack direction={"row"} spacing={4} justify="center">
        {CAT_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"md"}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  maxW={"min-content"}
                >
                  {navItem.children.map((child, i) => (
                    <SimpleGrid column={2} key={i}>
                      <DesktopSubNav {...child} />
                    </SimpleGrid>
                  ))}
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Flex fontSize="14px">
      <Box width={"max-content"}>
        <Link
          href={href}
          role={"group"}
          display={"block"}
          p={2}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            color: "#ff6f61",
          }}
          textAlign="left"
        >
          <Text transition={"all .3s ease"} fontWeight="700">
            {label}
          </Text>
        </Link>
        {subLabel.length
          ? subLabel.map((sl, i) => (
              <Link
                href={href}
                role={"group"}
                display={"block"}
                p={2}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  color: "#ff6f61",
                }}
                textAlign="left"
                key={i}
              >
                <Text fontSize={"sm"}>{sl}</Text>
              </Link>
            ))
          : null}
      </Box>
    </Flex>
  );
};

export default Category;
