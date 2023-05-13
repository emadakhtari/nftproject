import React from "react";
import { styled } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";

const StyleTitle = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  color: theme.palette.text.disabled,
}));
const StyleGrid = styled(Grid)(({ theme }) => ({
  width: "100%",
}));
const StyleCard = styled(Card)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));
const SkeletonTitle = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  height: "32.02px",
  transformOrigin: "0 0",
  borderRadius: "4px/6.7px",
  [theme.breakpoints.down("sm")]: {
    height: "21.34px",
  },
}));
const StyleCardMediaCreate = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(0.5),
  display: "flex",
  alignItems: "start",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
    textAlign: "center",
  },
}));
const StyleCreateByBox = styled(Box)(({ theme }) => ({
  display: "flex",
  paddingBottom: 2,
  [theme.breakpoints.down("sm")]: {
    flexFlow: "column",
    paddingLeft: 0,
    margin: "0 auto",
  },
}));
const StyleCreateBy = styled(Typography)(({ theme }) => ({
  lineHeight: "32px",
}));
const SkeletonCreated = styled(Skeleton)(({ theme }) => ({
  width: "79.62px",
  height: 53,
  transformOrigin: "0 0",
  [theme.breakpoints.down("sm")]: {
    width: "100px",
    height: 40,
    margin: "0 auto",
    position: "relative",
    top: 5,
  },
}));
const SkeletonStyleChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  marginLeft: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    margin: "0 auto",
    position: "relative",
    top: 2,
    width: 32,
  },
  "& .MuiChip-label": {
    paddingRight: 0,
  },
}));
const SkeletonButtons = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  maxWidth: "100%",
  height: "30.75px",
  borderRadius: 15,
}));
const SkeletonStyleCardMedia = styled(Skeleton)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  width: "85%",
  height: "100%",
  margin: "0",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: "0 auto",
  },
}));
const StyleCardMedia = styled(CardMedia)(({ theme }) => ({
  width: 170,
  height: 170,
  borderRadius: 10,
  [theme.breakpoints.down("md")]: {
    margin: "0 auto",
    objectFit: "contain",
  },
}));

function BestCollectionsSkeleton({ bestCollection }) {
  return (
    <>
      <StyleTitle
        variant="h3"
        textAlign="justify"
        display="block"
        sx={{ paddingBottom: "0", height: 45 }}
      >
        <Skeleton
          display="block"
          variant="text"
          animation="pulse"
          width={127}
          sx={{ transformOrigin: "0 0" }}
        ></Skeleton>
      </StyleTitle>
      <StyleGrid>
        <StyleCard
          elevation={0}
          sx={{
            background: "none",
          }}
        >
          <SkeletonStyleCardMedia variant="rounded" animation="pulse">
            <StyleCardMedia
              component="img"
              image={bestCollection.thumb}
              alt="Live from space album cover"
            />
          </SkeletonStyleCardMedia>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <CardContent>
              <SkeletonTitle
                variant="string"
                animation="pulse"
                height="32.02px"
              />
              <StyleCardMediaCreate
                sx={{
                  pl: 1,
                  pb: 1,
                }}
              >
                <StyleCreateByBox sx={{ width: "100%" }}>
                  <StyleCreateBy
                    variant="body2"
                    color="primary.dark"
                    component="p"
                    height={31}
                  >
                    <SkeletonCreated
                      display="block"
                      variant="text"
                      animation="pulse"
                    ></SkeletonCreated>
                  </StyleCreateBy>
                  <SkeletonStyleChip
                    avatar={<Avatar />}
                  />
                </StyleCreateByBox>
                <Box sx={{ display: "flex", width: "100%", pt: 2 }}>
                  <SkeletonButtons
                    variant="rounded"
                    animation="pulse"
                  ></SkeletonButtons>
                </Box>
              </StyleCardMediaCreate>
            </CardContent>
          </Box>
        </StyleCard>
      </StyleGrid>
    </>
  );
}

export default BestCollectionsSkeleton;
