import React from "react";
import { styled } from "@mui/material/styles";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Box,
  Paper,
  Typography,
  Container,
  Skeleton,
  CardMedia,
} from "@mui/material";
import Buttons from "../../elements/items/Buttons";
import { useTranslation } from "react-i18next";

import { EffectFade, Navigation, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const StyleFullWidthContainer = styled(Container)(({ theme }) => ({
  padding: "0 !important",
  "& .swiper": {
    width: "100%",
    height: 700,
  },
}));

const SwiperSlidePaper = styled(Paper)(({ theme }) => ({
  background: "none",
  position: "relative",
  backgroundColor: "grey.800",
  color: "#fff",
  margin: 0,
  padding: 0,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
}));
const SwiperSlideBox = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(7),
  height: 700,
}));
const StyleSwiperButtonsContent = styled("div")(({ theme }) => ({
  textAlign: "right",
}));
const StyleSwiperButtons = styled("div")(({ theme }) => ({
  display: "inline-block",
  "& .MuiButtonBase-root": {
    padding: theme.spacing(0.5, 5),
  },
}));
const StyleSwiperDetailContent = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "50%",
  bottom: theme.spacing(7),
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
const StyleSwiperTitleTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
}));
const StyleSwiperDeatilTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "normal",
}));
const StyleSwiperMoreButtons = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  float: "right",
  padding: theme.spacing(0),
  "& .MuiButtonBase-root": {
    padding: theme.spacing(0.5, 5),
  },
}));
const StyleCardMediaItem = styled(CardMedia)(({ theme }) => ({
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
}));
const StyleSwiperSlide = styled(SwiperSlide)(({ theme }) => ({
  position: "relative",
}));

function Slideshow({ slideShowImage, events, loadingSlideshow }) {
  const { t } = useTranslation();
  return (
    <>
      {loadingSlideshow ? (
        <>
          <StyleFullWidthContainer maxWidth={false}>
            <>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
              >
                {events.map((item) => (
                  <StyleSwiperSlide key={item.id}>
                    <StyleCardMediaItem
                      component="img"
                      image={slideShowImage.image}
                      alt={item.title}
                    />
                    <Container maxWidth="lg">
                      <SwiperSlidePaper>
                        <SwiperSlideBox>
                          <Typography
                            component="h1"
                            variant="subtitle2"
                            color="inherit"
                            gutterBottom
                          >
                            {t("EVENTS")}
                          </Typography>
                          <StyleSwiperButtonsContent>
                            <StyleSwiperButtons>
                              <Buttons
                                text={t("viewAll")}
                                link="#"
                                size={"small"}
                                variant={"contained"}
                                color={"secondary"}
                              />
                            </StyleSwiperButtons>
                          </StyleSwiperButtonsContent>
                          <StyleSwiperDetailContent>
                            <StyleSwiperTitleTypography
                              variant="h2"
                              color="inherit"
                              paragraph
                            >
                              {item.title}
                            </StyleSwiperTitleTypography>
                            <StyleSwiperDeatilTypography
                              variant="h4"
                              color="inherit"
                              paragraph
                            >
                              {item.description}
                            </StyleSwiperDeatilTypography>
                            <StyleSwiperMoreButtons>
                              <Buttons
                                text={t("More")}
                                link="#"
                                size={"small"}
                                variant={"contained"}
                                color={"primary"}
                              />
                            </StyleSwiperMoreButtons>
                          </StyleSwiperDetailContent>
                        </SwiperSlideBox>
                      </SwiperSlidePaper>
                    </Container>
                  </StyleSwiperSlide>
                ))}
                {/* <SwiperSlide>
                  <img src={slideShowImage.image} alt="1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slideShowImage.image} alt="1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slideShowImage.image} alt="1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slideShowImage.image} alt="1" />
                </SwiperSlide> */}
              </Swiper>
            </>
          </StyleFullWidthContainer>
        </>
      ) : (
        <>
          <Skeleton
            variant="rectangular"
            width="100%"
            animation="pulse"
            height="700px"
          >
            <div />
          </Skeleton>
        </>
      )}
    </>
  );
}

export default Slideshow;
