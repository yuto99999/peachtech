import { Fragment } from "react";
import { Box } from "@mui/material";
import Heading from "../common/heading";
import { accordionContentData } from "../../const/accordion-contene-data";
import AccordionBar from "./accordion-bar";

const FAQArea = () => {
  return (
    <Box display="flex" flexDirection={"column"} alignItems={"center"} py={10}>
      <Heading title="よくある質問" />
      <Box width={"70%"} py={5}>
        {accordionContentData.map((data) => (
          <Fragment key={data.accordionTitle}>
            <AccordionBar
              accordionTitle={data.accordionTitle}
              description={data.description}
            />
          </Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default FAQArea;
