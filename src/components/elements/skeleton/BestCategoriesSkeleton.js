import React from "react";
import CatThumbAvatar from "../../../images/Cat_Thumb_Avatar.jpg";
import { styled } from "@mui/material/styles";
import { Card, CardMedia, Grid, Skeleton } from "@mui/material";

const StyleCard = styled(Card)(({ theme }) => ({
  maxWidth: "100%",
  position: "relative",
}));
const StyleCardMediaItemSkeleton = styled(Skeleton)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  margin: "0 auto",
  "& img": {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
    padding: 0,
    margin: "0 auto",
    maxWidth: "100%",
    "& img": {
      width: "100%",
    },
  },
}));
const StyleCardMedia = styled(CardMedia)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  border: "2px solid #000",
}));

function BestCategoriesSkeleton() {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        py: 4,
      }}
    >
      <Grid item md={3} sm={6}>
        <StyleCard elevation={0}>
          <StyleCardMediaItemSkeleton animation="pulse" variant="rectangular">
            <StyleCardMedia
              component="img"
              image={CatThumbAvatar}
              alt="Loading"
            />
          </StyleCardMediaItemSkeleton>
        </StyleCard>
      </Grid>
      <Grid item md={3} sm={6}>
        <StyleCard elevation={0}>
          <StyleCardMediaItemSkeleton animation="pulse" variant="rectangular">
            <StyleCardMedia
              component="img"
              image={CatThumbAvatar}
              alt="Loading"
            />
          </StyleCardMediaItemSkeleton>
        </StyleCard>
      </Grid>
      <Grid item md={3} sm={6}>
        <StyleCard elevation={0}>
          <StyleCardMediaItemSkeleton animation="pulse" variant="rectangular">
            <StyleCardMedia
              component="img"
              image={CatThumbAvatar}
              alt="Loading"
            />
          </StyleCardMediaItemSkeleton>
        </StyleCard>
      </Grid>
      <Grid item md={3} sm={6}>
        <StyleCard elevation={0}>
          <StyleCardMediaItemSkeleton animation="pulse" variant="rectangular">
            <StyleCardMedia
              component="img"
              image={CatThumbAvatar}
              alt="Loading"
            />
          </StyleCardMediaItemSkeleton>
        </StyleCard>
      </Grid>
      <Grid item md={3} sm={6}>
        <StyleCard elevation={0}>
          <StyleCardMediaItemSkeleton animation="pulse" variant="rectangular">
            <StyleCardMedia
              component="img"
              image={CatThumbAvatar}
              alt="Loading"
            />
          </StyleCardMediaItemSkeleton>
        </StyleCard>
      </Grid>
      <Grid item md={3} sm={6}>
        <StyleCard elevation={0}>
          <StyleCardMediaItemSkeleton animation="pulse" variant="rectangular">
            <StyleCardMedia
              component="img"
              image={CatThumbAvatar}
              alt="Loading"
            />
          </StyleCardMediaItemSkeleton>
        </StyleCard>
      </Grid>
      <Grid item md={3} sm={6}>
        <StyleCard elevation={0}>
          <StyleCardMediaItemSkeleton animation="pulse" variant="rectangular">
            <StyleCardMedia
              component="img"
              image={CatThumbAvatar}
              alt="Loading"
            />
          </StyleCardMediaItemSkeleton>
        </StyleCard>
      </Grid>
      <Grid item md={3} sm={6}>
        <StyleCard elevation={0}>
          <StyleCardMediaItemSkeleton animation="pulse" variant="rectangular">
            <StyleCardMedia
              component="img"
              image={CatThumbAvatar}
              alt="Loading"
            />
          </StyleCardMediaItemSkeleton>
        </StyleCard>
      </Grid>
    </Grid>
  )
}

export default BestCategoriesSkeleton
