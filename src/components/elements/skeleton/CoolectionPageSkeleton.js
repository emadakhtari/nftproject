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
import ThumbAvatar from "../../../images/Cat_Thumb_Avatar.jpg";

const StyleCard = styled(Card)(({ theme }) => ({
  background: "none",
  maxWidth: "100%",
  position: "relative",
}));
const SkeletonStyleCardMedia = styled(Skeleton)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  width: "100%",
  height: "100%",
  margin: "0",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: "0 auto",
  },
}));
const StyleCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "100%",
  borderRadius: 20,
  [theme.breakpoints.down("md")]: {
    margin: "0 auto",
    objectFit: "contain",
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
const StyleCardContent = styled(CardContent)(({ theme }) => ({
  paddingTop: 14,
}));
const StyleTitle = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  color: theme.palette.text.disabled,
}));
const SkeletonButtons = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  maxWidth: "100%",
  height: "30.75px",
  borderRadius: 15,
}));
function CoolectionPageSkeleton() {
  return (
    <>
      <Grid item elevation={0} xs={12} sm={6} md={4}>
        <StyleCard elevation={0}>
          <SkeletonStyleCardMedia variant="rounded" animation="pulse">
            <StyleCardMedia
              component="img"
              image={ThumbAvatar}
              alt="Live from space album cover"
            />
          </SkeletonStyleCardMedia>
          <StyleCardContent>
            <StyleTitle
              variant="h3"
              textAlign="justify"
              display="block"
              sx={{ paddingBottom: "0", height: 43 }}
            >
              <Skeleton
                display="block"
                variant="text"
                animation="pulse"
                width="100%"
                sx={{ transformOrigin: "0 0" }}
              ></Skeleton>
            </StyleTitle>
            <StyleCardMediaCreate
              sx={{
                pl: 1,
                pb: 1,
              }}
            >
              <StyleCreateByBox>
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
                <SkeletonStyleChip avatar={<Avatar />} />
              </StyleCreateByBox>
              <Box sx={{ display: "flex", width: "100%", paddingTop: "15px" }}>
                <SkeletonButtons
                  variant="rounded"
                  animation="pulse"
                ></SkeletonButtons>
              </Box>
            </StyleCardMediaCreate>
          </StyleCardContent>
        </StyleCard>
      </Grid>
      <Grid item elevation={0} xs={12} sm={6} md={4}>
        <StyleCard elevation={0}>
          <SkeletonStyleCardMedia variant="rounded" animation="pulse">
            <StyleCardMedia
              component="img"
              image={ThumbAvatar}
              alt="Live from space album cover"
            />
          </SkeletonStyleCardMedia>
          <StyleCardContent>
            <StyleTitle
              variant="h3"
              textAlign="justify"
              display="block"
              sx={{ paddingBottom: "0", height: 43 }}
            >
              <Skeleton
                display="block"
                variant="text"
                animation="pulse"
                width="100%"
                sx={{ transformOrigin: "0 0" }}
              ></Skeleton>
            </StyleTitle>
            <StyleCardMediaCreate
              sx={{
                pl: 1,
                pb: 1,
              }}
            >
              <StyleCreateByBox>
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
                <SkeletonStyleChip avatar={<Avatar />} />
              </StyleCreateByBox>
              <Box sx={{ display: "flex", width: "100%", paddingTop: "15px" }}>
                <SkeletonButtons
                  variant="rounded"
                  animation="pulse"
                ></SkeletonButtons>
              </Box>
            </StyleCardMediaCreate>
          </StyleCardContent>
        </StyleCard>
      </Grid>
      <Grid item elevation={0} xs={12} sm={6} md={4}>
        <StyleCard elevation={0}>
          <SkeletonStyleCardMedia variant="rounded" animation="pulse">
            <StyleCardMedia
              component="img"
              image={ThumbAvatar}
              alt="Live from space album cover"
            />
          </SkeletonStyleCardMedia>
          <StyleCardContent>
            <StyleTitle
              variant="h3"
              textAlign="justify"
              display="block"
              sx={{ paddingBottom: "0", height: 43 }}
            >
              <Skeleton
                display="block"
                variant="text"
                animation="pulse"
                width="100%"
                sx={{ transformOrigin: "0 0" }}
              ></Skeleton>
            </StyleTitle>
            <StyleCardMediaCreate
              sx={{
                pl: 1,
                pb: 1,
              }}
            >
              <StyleCreateByBox>
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
                <SkeletonStyleChip avatar={<Avatar />} />
              </StyleCreateByBox>
              <Box sx={{ display: "flex", width: "100%", paddingTop: "15px" }}>
                <SkeletonButtons
                  variant="rounded"
                  animation="pulse"
                ></SkeletonButtons>
              </Box>
            </StyleCardMediaCreate>
          </StyleCardContent>
        </StyleCard>
      </Grid>
      <Grid item elevation={0} xs={12} sm={6} md={4}>
        <StyleCard elevation={0}>
          <SkeletonStyleCardMedia variant="rounded" animation="pulse">
            <StyleCardMedia
              component="img"
              image={ThumbAvatar}
              alt="Live from space album cover"
            />
          </SkeletonStyleCardMedia>
          <StyleCardContent>
            <StyleTitle
              variant="h3"
              textAlign="justify"
              display="block"
              sx={{ paddingBottom: "0", height: 43 }}
            >
              <Skeleton
                display="block"
                variant="text"
                animation="pulse"
                width="100%"
                sx={{ transformOrigin: "0 0" }}
              ></Skeleton>
            </StyleTitle>
            <StyleCardMediaCreate
              sx={{
                pl: 1,
                pb: 1,
              }}
            >
              <StyleCreateByBox>
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
                <SkeletonStyleChip avatar={<Avatar />} />
              </StyleCreateByBox>
              <Box sx={{ display: "flex", width: "100%", paddingTop: "15px" }}>
                <SkeletonButtons
                  variant="rounded"
                  animation="pulse"
                ></SkeletonButtons>
              </Box>
            </StyleCardMediaCreate>
          </StyleCardContent>
        </StyleCard>
      </Grid>
      <Grid item elevation={0} xs={12} sm={6} md={4}>
        <StyleCard elevation={0}>
          <SkeletonStyleCardMedia variant="rounded" animation="pulse">
            <StyleCardMedia
              component="img"
              image={ThumbAvatar}
              alt="Live from space album cover"
            />
          </SkeletonStyleCardMedia>
          <StyleCardContent>
            <StyleTitle
              variant="h3"
              textAlign="justify"
              display="block"
              sx={{ paddingBottom: "0", height: 43 }}
            >
              <Skeleton
                display="block"
                variant="text"
                animation="pulse"
                width="100%"
                sx={{ transformOrigin: "0 0" }}
              ></Skeleton>
            </StyleTitle>
            <StyleCardMediaCreate
              sx={{
                pl: 1,
                pb: 1,
              }}
            >
              <StyleCreateByBox>
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
                <SkeletonStyleChip avatar={<Avatar />} />
              </StyleCreateByBox>
              <Box sx={{ display: "flex", width: "100%", paddingTop: "15px" }}>
                <SkeletonButtons
                  variant="rounded"
                  animation="pulse"
                ></SkeletonButtons>
              </Box>
            </StyleCardMediaCreate>
          </StyleCardContent>
        </StyleCard>
      </Grid>
      <Grid item elevation={0} xs={12} sm={6} md={4}>
        <StyleCard elevation={0}>
          <SkeletonStyleCardMedia variant="rounded" animation="pulse">
            <StyleCardMedia
              component="img"
              image={ThumbAvatar}
              alt="Live from space album cover"
            />
          </SkeletonStyleCardMedia>
          <StyleCardContent>
            <StyleTitle
              variant="h3"
              textAlign="justify"
              display="block"
              sx={{ paddingBottom: "0", height: 43 }}
            >
              <Skeleton
                display="block"
                variant="text"
                animation="pulse"
                width="100%"
                sx={{ transformOrigin: "0 0" }}
              ></Skeleton>
            </StyleTitle>
            <StyleCardMediaCreate
              sx={{
                pl: 1,
                pb: 1,
              }}
            >
              <StyleCreateByBox>
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
                <SkeletonStyleChip avatar={<Avatar />} />
              </StyleCreateByBox>
              <Box sx={{ display: "flex", width: "100%", paddingTop: "15px" }}>
                <SkeletonButtons
                  variant="rounded"
                  animation="pulse"
                ></SkeletonButtons>
              </Box>
            </StyleCardMediaCreate>
          </StyleCardContent>
        </StyleCard>
      </Grid>
    </>
  );
}

export default CoolectionPageSkeleton;
