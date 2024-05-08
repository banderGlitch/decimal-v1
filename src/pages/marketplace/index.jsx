import AttachMoneyTwoToneIcon from "@mui/icons-material/AttachMoneyTwoTone";
import FunctionsIcon from "@mui/icons-material/Functions";
import HourglassBottomTwoToneIcon from "@mui/icons-material/HourglassBottomTwoTone";
import React from "react";
import { useNavigate } from "react-router-dom";

import IntentCards from "../../components/Card/AddIntentCard";
import AppCard from "../../components/Card/AppCard";

import "./style.css";
import { Grid } from "@mui/material";

export default function MarketPlace() {
  const navigate = useNavigate();

  const handleNavigate = ({ params }) => {
    console.log("params", params);
    navigate(`/create?=${params}`);
  };

  const appCardsData = [
    {
      handleNavigate: handleNavigate, // Assuming handleNavigate is defined elsewhere
      appName: "VRF",
      description: "Function that generates random number",
      AppIcon: FunctionsIcon,
      Apps: "1",
    },
    {
      appName: "Finance",
      description: "Displays finances information",
      AppIcon: AttachMoneyTwoToneIcon,
      Apps: "1",
    },
    {
      appName: "Coming Soon",
      description: "Coming Soon",
      AppIcon: HourglassBottomTwoToneIcon,
      Apps: "Coming Soon",
    },
    {
      appName: "Coming Soon",
      description: "Coming Soon",
      AppIcon: HourglassBottomTwoToneIcon,
      Apps: "Coming Soon",
    },
    {
      appName: "Coming Soon",
      description: "Coming Soon",
      AppIcon: HourglassBottomTwoToneIcon,
      Apps: "Coming Soon",
    },
    {
      appName: "Coming Soon",
      description: "Coming Soon",
      AppIcon: HourglassBottomTwoToneIcon,
      Apps: "Coming Soon",
    },
    {
      appName: "Coming Soon",
      description: "Coming Soon",
      AppIcon: HourglassBottomTwoToneIcon,
      Apps: "Coming Soon",
    },
  ];

  return (
    <>
      <div className="Marketplacestyle" style={{paddingTop: "100px"}}>
        <Grid
          container
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={2}
        >
          <Grid item md={3}>
            <IntentCards />
          </Grid>
          {appCardsData.map((appCard, index) => (
            <Grid item md={3}>
              <AppCard key={index} {...appCard} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
