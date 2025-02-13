import React from 'react';
import AccordionMUI from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  title: String,
  children?: React.ReactNode
};

export default function Accordion(props: Props) {
  return (
    <>
      <AccordionMUI defaultExpanded>
        <AccordionSummary
          sx={{
            backgroundColor: "#152b42",
            color: "white",
            fontWeight: "bold",
          }}
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        >
          <Typography component="span">{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          {props.children}
        </AccordionDetails>
      </AccordionMUI>
    </>
  );
}
