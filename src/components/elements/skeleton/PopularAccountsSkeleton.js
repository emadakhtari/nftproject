import React from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Paper, Skeleton, Typography } from "@mui/material";

const StyleTitle = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  color: theme.palette.text.disabled,
}));
const SkeletonAvatarCarouselItems = styled(Skeleton)(({ theme }) => ({
  width: "30%",
  height: "auto",
  verticalAlign: "middle",
  display: "block",
  margin: "0 auto",
  "& .MuiAvatar-root": {
    height: "100%",
    width: "100%",
    "& svg": {
      height: "100%",
      width: "100%",
    },
  },
}));
const AvatarCarouselItems = styled(Avatar)(({ theme }) => ({
  width: "30%",
  height: "auto",
  verticalAlign: "middle",
  display: "block",
  margin: "0 auto",
}));
const SkeletonCarouselName = styled(Skeleton)(({ theme }) => ({
  margin: "0 auto",
}));
const StyleGridContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  paddingTop: 58,
}));
const StyleGridSkeleton = styled("div")(({ theme }) => ({
  width: 96,
}));
const StylePaper = styled(Paper)(({ theme }) => ({
  background: "none",
}));
const SkeletonAvatarCarouselTmb = styled(Skeleton)(({ theme }) => ({
  width: "96px",
  height: "auto",
  margin: "0 auto",
}));
const AvatarCarouselTmb = styled(Avatar)(({ theme }) => ({
  width: "100%",
  height: "auto",
  "& svg": {
    height: "100%",
    width: "100%",
  },
}));
const StyleSwiperButtons = styled("div")(({ theme }) => ({
  padding: theme.spacing(3),
}));
const SkeletonButtons = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  maxWidth: "100%",
  height: "30.75px",
  borderRadius: 15,
}));

function PopularAccountsSkeleton() {
  return (
    <>
      <StyleTitle
        variant="h3"
        textAlign="justify"
        display="block"
        sx={{ paddingBottom: "0", height: 47 }}
      >
        <Skeleton
          display="block"
          variant="text"
          animation="pulse"
          width={127}
          sx={{ transformOrigin: "0 0" }}
        ></Skeleton>
      </StyleTitle>
      <SkeletonAvatarCarouselItems variant="circular" animation="pulse">
        <AvatarCarouselItems />
      </SkeletonAvatarCarouselItems>
      <SkeletonCarouselName animation="pulse" width="20%" />
      <StyleGridContainer>
        <StyleGridSkeleton>
          <StylePaper elevation={0}>
            <SkeletonAvatarCarouselTmb variant="circular" animation="pulse">
              <AvatarCarouselTmb />
            </SkeletonAvatarCarouselTmb>
            <Skeleton animation="pulse" />
          </StylePaper>
        </StyleGridSkeleton>
        <StyleGridSkeleton>
          <StylePaper elevation={0}>
            <SkeletonAvatarCarouselTmb variant="circular" animation="pulse">
              <AvatarCarouselTmb />
            </SkeletonAvatarCarouselTmb>
            <Skeleton animation="pulse" />
          </StylePaper>
        </StyleGridSkeleton>
        <StyleGridSkeleton>
          <StylePaper elevation={0}>
            <SkeletonAvatarCarouselTmb variant="circular" animation="pulse">
              <AvatarCarouselTmb />
            </SkeletonAvatarCarouselTmb>
            <Skeleton animation="pulse" />
          </StylePaper>
        </StyleGridSkeleton>
      </StyleGridContainer>
      <StyleSwiperButtons>
        <SkeletonButtons variant="rounded" animation="pulse"></SkeletonButtons>
      </StyleSwiperButtons>
    </>
  );
}

export default PopularAccountsSkeleton;
