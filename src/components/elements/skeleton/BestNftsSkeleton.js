import React from "react";
import { styled } from "@mui/material/styles";
import NFTAvatar from "../../../images/NFT_Avatar.jpg";
import Buttons from "../../elements/items/Buttons";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";

const StyleCardItemSkeleton = styled(Card)(({ theme }) => ({
  padding: "1px 8px 8px 8px",
  backgroundColor: theme.palette.background.default,
}));
const StyleCardMediaItemSkeleton = styled(Skeleton)(({ theme }) => ({
  borderBottomRightRadius: theme.spacing(3),
  borderBottomLeftRadius: theme.spacing(3),
  width: "85%",
  margin: "0 auto",
  "& img": {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
    width: "50%",
    padding: 0,
    margin: "0 auto",
    maxWidth: "100%",
    "& img": {
      width: "100%",
    },
  },
}));
const StyleCardMediaItem = styled(CardMedia)(({ theme }) => ({
  borderBottomRightRadius: theme.spacing(3),
  borderBottomLeftRadius: theme.spacing(3),
  width: "85%",
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
}));
const SkeletonButtons = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  maxWidth: "100%",
  height: "30.75px",
  borderRadius: 15,
}));
const StyleTitleBestNft = styled(Typography)(({ theme }) => ({
  paddingBottom: 0,
  paddingTop: theme.spacing(1),
}));

function BestNftsSkeleton() {
  return (
    <>
      <Grid item xs={12} md={12}>
        <StyleTitleBestNft
          variant="h3"
          textAlign="justify"
          display="block"
          sx={{ paddingBottom: "0", height: 42 }}
        >
          <Skeleton
            display="block"
            variant="text"
            animation="pulse"
            width={235}
            sx={{ transformOrigin: "0 0" }}
          ></Skeleton>
        </StyleTitleBestNft>
      </Grid>
      <Grid item xs={12} md={4}>
        <StyleCardItemSkeleton elevation={0}>
          <StyleCardMediaItemSkeleton animation="pulse" variant="rectangular">
            <StyleCardMediaItem
              component="img"
              image={NFTAvatar}
              alt="Loading"
            />
          </StyleCardMediaItemSkeleton>

          <CardContent>
            <SkeletonButtons variant="rounded" animation="pulse">
              <Buttons
                text={"View NFT"}
                size={"small"}
                variant={"contained"}
                color={"secondary"}
              />
            </SkeletonButtons>
          </CardContent>
        </StyleCardItemSkeleton>
      </Grid>
      <Grid item xs={12} md={4}>
        <StyleCardItemSkeleton elevation={0}>
          <StyleCardMediaItemSkeleton animation="pulse" variant="rectangular">
            <StyleCardMediaItem
              component="img"
              image={NFTAvatar}
              alt="Loading"
            />
          </StyleCardMediaItemSkeleton>

          <CardContent>
            <SkeletonButtons variant="rounded" animation="pulse">
              <Buttons
                text={"View NFT"}
                size={"small"}
                variant={"contained"}
                color={"secondary"}
              />
            </SkeletonButtons>
          </CardContent>
        </StyleCardItemSkeleton>
      </Grid>
      <Grid item xs={12} md={4}>
        <StyleCardItemSkeleton elevation={0}>
          <StyleCardMediaItemSkeleton animation="pulse" variant="rectangular">
            <StyleCardMediaItem
              component="img"
              image={NFTAvatar}
              alt="Loading"
            />
          </StyleCardMediaItemSkeleton>

          <CardContent>
            <SkeletonButtons variant="rounded" animation="pulse">
              <Buttons
                text={"View NFT"}
                size={"small"}
                variant={"contained"}
                color={"secondary"}
              />
            </SkeletonButtons>
          </CardContent>
        </StyleCardItemSkeleton>
      </Grid>
    </>
  );
}

export default BestNftsSkeleton;
