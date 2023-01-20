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
    label: "Health Resources Center",
    children: [
      {
        label: "All disease",
        subLabel: [],
        href: "category/disease",
      },
      {
        label: "All Medicines",
        subLabel: [],
        href: "category/medicine",
      },
      {
        label: "Medicines by Therapeutic Class",
        subLabel: [],
        href: "#",
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
        href: "#",
      },
      {
        label: "Nutritional Drinks",
        subLabel: [
          "Adult Daily Nutrition",
          "Kids Nutrition(2-15yrs",
          "Women Nutrition",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Diabetes",
    children: [
      {
        label: "Vitamins & Supplements",
        subLabel: [
          "Multi Vitamins",
          "Vitamins A-Z",
          "Minerals-Supplement",
          "Vitamin B-12 & B-Complex",
        ],
        href: "#",
      },
      {
        label: "Nutritional Drinks",
        subLabel: [
          "Adult Daily Nutrition",
          "Kids Nutrition(2-15yrs",
          "Women Nutrition",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Ayurveda Products",
    children: [
      {
        label: "Vitamins & Supplements",
        subLabel: [
          "Multi Vitamins",
          "Vitamins A-Z",
          "Minerals-Supplement",
          "Vitamin B-12 & B-Complex",
        ],
        href: "#",
      },
      {
        label: "Nutritional Drinks",
        subLabel: [
          "Adult Daily Nutrition",
          "Kids Nutrition(2-15yrs",
          "Women Nutrition",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Homeopathy",
    children: [
      {
        label: "Vitamins & Supplements",
        subLabel: [
          "Multi Vitamins",
          "Vitamins A-Z",
          "Minerals-Supplement",
          "Vitamin B-12 & B-Complex",
        ],
        href: "#",
      },
      {
        label: "Nutritional Drinks",
        subLabel: [
          "Adult Daily Nutrition",
          "Kids Nutrition(2-15yrs",
          "Women Nutrition",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Featured",
    children: [
      {
        label: "Vitamins & Supplements",
        subLabel: [
          "Multi Vitamins",
          "Vitamins A-Z",
          "Minerals-Supplement",
          "Vitamin B-12 & B-Complex",
        ],
        href: "#",
      },
      {
        label: "Nutritional Drinks",
        subLabel: [
          "Adult Daily Nutrition",
          "Kids Nutrition(2-15yrs",
          "Women Nutrition",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "HealthCare Devices",
    children: [
      {
        label: "Vitamins & Supplements",
        subLabel: [
          "Multi Vitamins",
          "Vitamins A-Z",
          "Minerals-Supplement",
          "Vitamin B-12 & B-Complex",
        ],
        href: "#",
      },
      {
        label: "Nutritional Drinks",
        subLabel: [
          "Adult Daily Nutrition",
          "Kids Nutrition(2-15yrs",
          "Women Nutrition",
        ],
        href: "#",
      },
    ],
  },

  {
    label: "Personal Care",
    children: [
      {
        label: "Vitamins & Supplements",
        subLabel: [
          "Multi Vitamins",
          "Vitamins A-Z",
          "Minerals-Supplement",
          "Vitamin B-12 & B-Complex",
        ],
        href: "#",
      },
      {
        label: "Nutritional Drinks",
        subLabel: [
          "Adult Daily Nutrition",
          "Kids Nutrition(2-15yrs",
          "Women Nutrition",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Health Conditions",
    children: [
      {
        label: "Vitamins & Supplements",
        subLabel: [
          "Multi Vitamins",
          "Vitamins A-Z",
          "Minerals-Supplement",
          "Vitamin B-12 & B-Complex",
        ],
        href: "#",
      },
      {
        label: "Nutritional Drinks",
        subLabel: [
          "Adult Daily Nutrition",
          "Kids Nutrition(2-15yrs",
          "Women Nutrition",
        ],
        href: "#",
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
                  fontSize={"sm"}
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
