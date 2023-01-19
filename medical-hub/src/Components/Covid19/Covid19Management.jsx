import { Box,  SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Covid19ManagementCard from "./Covid19ManagementCard";

const covidTest = [
  {
    headText: "COVID Antibody IgG (Quantitative) ",
    color: "#993859",
    bgColor: "#FBEAF0",
    testPara:
      "The Antibody Test detects any past occurrence of the infection by looking for COVID-19 antibodies",
    testDetail: [
      {
        text: "Think you contracted the coronavirus in the past and have already recovered",
      },
      {
        text: "Want to know if your body has encountered the infection and made antibodies against the coronavirus",
      },
      {
        text: "Have recovered from COVID-19 and want to help people who need plasma therapy",
      },
    ],
    testHead: "Who should take the test ?",
  },
  {
    headText: "Covid Home Care Essential",
    color: "#4B5E4C",
    bgColor: "#EFFFF5",
    testPara:
      "The COVID Home Care Essential package offers 33 tests (Includes CRP, CBC with NLR, ESR, BUN and more) that give important clues about the various health parameters.",
    testDetail: [
      {
        text: "Have been diagnosed with COVID-19 and need to understand how COVID-19 has impacted your health",
      },
      {
        text: "Are getting COVID-19 care at home and notice any worsening of the symptoms",
      },
      {
        text: "Have been advised by the doctor to check your biomarkers",
      },
    ],
    testHead: "This test is recommended if you:",
  },
  {
    headText: "COVID Home Care Complete",
    color: "#72582e",
    bgColor: "#fdedbe",
    testPara:
      "The COVID Home Care Complete package offers 41 tests (Includes D-Dimer, IL-6, HbA1c, Serum electrolytes, etc., in addition to CRP, CBC with NLR, ESR, and more) that give important clues about the various health parameters.",
    testDetail: [
      {
        text: "Have been diagnosed with COVID-19 and need to understand how COVID-19 has impacted your health",
      },
      {
        text: "Are getting COVID-19 care at home and notice any worsening of the symptoms",
      },
      {
        text: "Have been advised by the doctor to check your biomarkers",
      },
    ],
    testHead: "This test is recommended if you:",
  },
];

const Covid19Management = () => {
  return (
    <Box>
      <Box my="3rem">
        <Text
          textAlign={"left"}
          fontSize={"2.1vw"}
          fontWeight="700"
          color="#3b3b3b"
        >
          COVID Management & Home Care Tests
        </Text>
      </Box>
      <SimpleGrid columns={[1,3]}  spacing="30px">
        {covidTest.map((el,i) => (
          <Covid19ManagementCard
            key={i}
            headText={el.headText}
            testPara={el.testPara}
            testDetail={el.testDetail}
            testHead={el.testHead}
            color={el.color}
            bgColor={el.bgColor}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Covid19Management;
