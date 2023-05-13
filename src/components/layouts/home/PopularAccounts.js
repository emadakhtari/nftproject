import React, { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import Buttons from "../../elements/items/Buttons";
import { styled } from "@mui/material/styles";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Navigation, Thumbs, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import PopularAccountsSkeleton from "../../elements/skeleton/PopularAccountsSkeleton";
import BestCollectionsSkeleton from "../../elements/skeleton/BestCollectionsSkeleton";
import BestNftsSkeleton from "../../elements/skeleton/BestNftsSkeleton";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import i18n from "../../../services/i18n";
import { useNavigate } from "react-router-dom";

const StyleTitle = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  color: theme.palette.primary.darker,
}));
const StyleTitleBestNft = styled(Typography)(({ theme }) => ({
  paddingBottom: 0,
  paddingTop: theme.spacing(1),
}));

const AvatarCarouselItems = styled(Avatar)(({ theme }) => ({
  width: "30%",
  height: "auto",
  verticalAlign: "middle",
  display: "block",
  margin: "0 auto",
}));

const StylePaper = styled(Paper)(({ theme }) => ({
  background: "none",
}));

const AvatarCarouselTmb = styled(Avatar)(({ theme }) => ({
  width: "100%",
  height: "auto",
  "& svg": {
    height: "100%",
    width: "100%",
  },
}));
const StyleCarouselName = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "100%",
  position: "relative",
  fontWeight: "bold",
  bottom: 10,
  margin: 0,
  padding: 0,
  [theme.breakpoints.down("md")]: {
    fontSize: 13,
  },
}));
const StyleVerifiedIcon = styled(VerifiedIcon)(({ theme }) => ({
  fontSize: 11,
  margin: theme.spacing(0, 0, 1, 0.5),
  color: "#3797EF",
}));
const StyleCarouselCollectionNum = styled(Typography)(({ theme }) => ({
  position: "relative",
  bottom: 18,
  margin: 0,
  padding: 0,
  color: theme.palette.primary.darker,
}));
const StyleCarouselItemsName = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "100%",
  margin: 0,
  padding: 0,
}));
const StyleVerifiedIconTmb = styled(VerifiedIcon)(({ theme }) => ({
  fontSize: 9,
  margin: theme.spacing(0, 0, 0.5, 0.5),
  color: "#3797EF",
}));
const StyleSwiperSlide = styled(SwiperSlide)(({ theme }) => ({
  textAlign: "center",
}));

const StyleSwiperThumbs = styled(Swiper)(({ theme }) => ({
  paddingTop: "30px",
  // "& .swiper-wrapper": {
  //   paddingBottom: "10px !important",
  // },
  "& .MuiPaper-root": {
    width: "98px",
    margin: "0 auto",
    textAlign: "center",
  },
}));
const StyleCardItem = styled(Card)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: theme.palette.background.default,
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

const StyleCard = styled(Card)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: {
    display: "block",
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
const StyleCardMediaTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  [theme.breakpoints.down("md")]: {
    textAlign: "justify",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    textAlign: "center",
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
const StyleChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    marginRight: 0,
  },
}));

const StyleGrid = styled(Grid)(({ theme }) => ({
  width: "100%",
}));
const StyleSwiperButtons = styled("div")(({ theme }) => ({
  margin: theme.spacing(3),
}));

const StyleSwiper = styled(Swiper)(({ theme }) => ({
  width: "80%",

  "& .swiper-button-next": {
    backgroundImage: "url(../../../images/icon/arro_r.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
    backgroundPosition: "center",
    width: 8,
  },
  "& .swiper-button-prev": {
    backgroundImage: "url(../../../images/icon/arro_l.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
    backgroundPosition: "center",
    width: 8,
  },

  "& .swiper-button-next:after": {
    content: "none",
  },
  "& .swiper-button-prev:after": {
    content: "none",
  },
}));
const StyleBox = styled(Box)(({ theme }) => ({
  padding: 0,
  position: "relative",
}));
const ButtonsClick = styled("div")(({ theme }) => ({}));
function PopularAccounts({
  popularAccountsItems,
  bestCollection,
  bestNftItems,
  loading,
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [bestCollectionOnChange, setBestCollectionOnChange] = useState();
  const [bestNftItemsOnChange, setBestNftItemsOnChange] = useState();
  const [loadingOnChange, setLoadingOnChange] = useState(false);
  const onSlideChange = (swiperCore) => {
    setLoadingOnChange(true);
    const { realIndex } = swiperCore;
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "true",
      },
    };
    try {
      axios
        .post(
          process.env.REACT_APP_API_URL + "/api/bestCollections",
          {
            collection_id: realIndex,
          },
          config
        )
        .then((response) => {
          // console.log(response.data.result);
          setBestCollectionOnChange(response.data.result.BestCollectionSelect);
          setBestNftItemsOnChange(response.data.result.ListOfNftItems);
          setLoadingOnChange(false);
        });
    } catch (err) {
      if (err.response) {
        toast.error(<Typography component="span">{err.message}</Typography>, {
          duration: 4000,
          position: "top-left",
          gutter: 800,
          containerClassName: "ontainerClassName",
          containerStyle: {},
          style: {
            background: "#808080",
            color: "#E6E6E6",
          },
          className: "toastClassName",
          icon: (
            <ReportGmailerrorredIcon
              sx={{
                color: "#FF5722",
              }}
            />
          ),
          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
        // console.error(err.message);
      } else if (err.request) {
        toast.error(<Typography component="span">{err.message}</Typography>, {
          duration: 4000,
          position: "top-left",
          gutter: 800,
          containerClassName: "ontainerClassName",
          containerStyle: {},
          style: {
            background: "#808080",
            color: "#E6E6E6",
          },
          className: "toastClassName",
          icon: (
            <ReportGmailerrorredIcon
              sx={{
                color: "#FF5722",
              }}
            />
          ),
          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
        // console.error(err.message);
      } else {
        toast.error(<Typography component="span">{err.message}</Typography>, {
          duration: 4000,
          position: "top-left",
          gutter: 800,
          containerClassName: "ontainerClassName",
          containerStyle: {},
          style: {
            background: "#808080",
            color: "#E6E6E6",
          },
          className: "toastClassName",
          icon: (
            <ReportGmailerrorredIcon
              sx={{
                color: "#FF5722",
              }}
            />
          ),
          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
        // console.error(err.message);
      }
    }
  };
  const { t } = useTranslation();

  const handleClick = () => {
    console.log("s");
    toast.error(
      <Typography component="span">{t("unavailablePage")}</Typography>,
      {
        duration: 4000,
        position: "top-left",
        gutter: 800,
        containerClassName: "ontainerClassName",
        containerStyle: {},
        style: {
          background: "#808080",
          color: "#E6E6E6",
        },
        className: "toastClassName",
        icon: (
          <ReportGmailerrorredIcon
            sx={{
              color: "#FF5722",
            }}
          />
        ),
        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      }
    );
  };
  const navigate = useNavigate();
  const handleNftItemClick = (row) => {
    if (row.token_id) {
      const el = document.getElementById("root");
      el.scrollIntoView({ behavior: "smooth" });
      navigate(`/NftItem/${row.nft_address}/${row.token_id}`);
    } else {
      toast.error(
        <Typography component="span">{t("tokenNotAvailable")}</Typography>,
        {
          duration: 4000,
          position: "top-left",
          gutter: 800,
          containerClassName: "ontainerClassName",
          containerStyle: {},
          style: {
            background: "#808080",
            color: "#E6E6E6",
          },
          className: "toastClassName",
          icon: (
            <ReportGmailerrorredIcon
              sx={{
                color: "#FF5722",
              }}
            />
          ),
          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        }
      );
    }
  };

  return (
    <>
      <Grid item md={6} width="100%">
        <StyleBox
          sx={{
            "& .swiper-button-prev": {
              left:
                i18n.language === "en" ? `10px !important` : `auto !important`,
              right:
                i18n.language === "en" ? `auto !important` : `10px !important`,
            },
            "& .swiper-button-next": {
              left:
                i18n.language === "en" ? `auto !important` : `10px !important`,
              right:
                i18n.language === "en" ? `10px !important` : `auto !important`,
            },
          }}
        >
          {loading ? (
            <>
              <StyleTitle
                variant="subtitle1"
                textAlign="justify"
                display="block"
              >
                {t("popularAccounts")}
              </StyleTitle>

              <StyleSwiper
                modules={[Navigation, Thumbs, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={false}
                loop={false}
                effect="fade"
                // pagination={{ clickable: true }}
                // onSwiper={onSlideChange}
                onSlideChange={onSlideChange}
                thumbs={{ swiper: thumbsSwiper }}
                sx={{
                  p: 0,
                  position: "relative",
                  // direction: "ltr",
                }}
              >
                {popularAccountsItems.map((item, index) => (
                  <StyleSwiperSlide
                    key={item.name}
                    className="slider-item"
                    rel={item.name}
                    virtualIndex={item.id}
                  >
                    <AvatarCarouselItems alt={item.name} src={item.avatar} />
                    <StyleCarouselName variant="h6" color="secondary">
                      {item.name}
                      <StyleVerifiedIcon />
                    </StyleCarouselName>
                    <StyleCarouselCollectionNum
                      variant="caption"
                      textAlign="center"
                      display="block"
                      gutterBottom
                    >
                      +{item.collectionCount} {t("Collections")}
                    </StyleCarouselCollectionNum>
                  </StyleSwiperSlide>
                ))}
              </StyleSwiper>

              <StyleSwiperThumbs
                modules={[Navigation, Thumbs]}
                watchSlidesProgress
                slidesPerView={3}
                onSwiper={setThumbsSwiper}
              >
                {popularAccountsItems.map((item, index) => {
                  return (
                    <SwiperSlide
                      key={item.id}
                      rel={item.id}
                      loop={false}
                      virtualIndex={item.id}
                    >
                      <StylePaper elevation={0}>
                        <AvatarCarouselTmb alt={item.name} src={item.avatar} />
                        <StyleCarouselItemsName
                          variant="caption"
                          textAlign="center"
                          color="secondary"
                          display="inline-block"
                          gutterBottom
                        >
                          {item.name.length > 13
                            ? item.name.substring(0, 13 - 3) + "..."
                            : item.name}
                          <StyleVerifiedIconTmb />
                        </StyleCarouselItemsName>
                      </StylePaper>
                    </SwiperSlide>
                  );
                })}
              </StyleSwiperThumbs>
              <StyleSwiperButtons onClick={handleClick}>
                <Buttons
                  text={t("viewAllAccounts")}
                  size={"small"}
                  variant={"contained"}
                  color={"secondary"}
                />
              </StyleSwiperButtons>
            </>
          ) : (
            <PopularAccountsSkeleton />
          )}
        </StyleBox>
      </Grid>
      <Grid item md={6} width="100%">
        <Box sx={{ p: 0 }}>
          <Grid container>
            {loadingOnChange ? (
              <BestCollectionsSkeleton bestCollection={bestCollection} />
            ) : loading ? (
              bestCollectionOnChange ? (
                <>
                  <StyleTitle
                    variant="subtitle1"
                    textAlign="justify"
                    display="block"
                  >
                    {t("bestCollections")}
                  </StyleTitle>
                  <StyleGrid>
                    <StyleCard elevation={0}>
                      <StyleCardMedia
                        component="img"
                        image={bestCollectionOnChange.thumb}
                        alt={bestCollectionOnChange.title}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        <CardContent>
                          <StyleCardMediaTitle
                            color="text.secondary"
                            component="div"
                            variant="h5"
                          >
                            {bestCollectionOnChange.title}
                          </StyleCardMediaTitle>
                          <StyleCardMediaCreate
                            sx={{
                              pl: 1,
                              pb: 1,
                            }}
                          >
                            <StyleCreateByBox>
                              <StyleCreateBy
                                variant="body2"
                                color="primary.contrastText"
                                component="p"
                              >
                                {t("createdBy")} :
                              </StyleCreateBy>
                              <StyleChip
                                avatar={
                                  <Avatar
                                    alt={bestCollectionOnChange.CreatedBy}
                                    src={bestCollectionOnChange.thumb}
                                  />
                                }
                                label={bestCollectionOnChange.CreatedBy}
                              />
                            </StyleCreateByBox>

                            <Box sx={{ display: "flex", width: "100%", pt: 2 }}>
                              <Buttons
                                text={t("viewCollection")}
                                link={
                                  `/Collection/` + bestCollectionOnChange.id
                                }
                                size={"small"}
                                variant={"contained"}
                                color={"secondary"}
                              />
                            </Box>
                          </StyleCardMediaCreate>
                        </CardContent>
                      </Box>
                    </StyleCard>
                  </StyleGrid>
                </>
              ) : (
                <>
                  <StyleTitle
                    variant="subtitle1"
                    textAlign="justify"
                    display="block"
                  >
                    {t("bestCollections")}
                  </StyleTitle>
                  <StyleGrid>
                    <StyleCard elevation={0}>
                      <StyleCardMedia
                        component="img"
                        image={bestCollection.thumb}
                        alt={t("appTitle")}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        <CardContent>
                          <StyleCardMediaTitle
                            color="text.secondary"
                            component="div"
                            variant="h5"
                          >
                            {bestCollection.title}
                          </StyleCardMediaTitle>

                          <StyleCardMediaCreate
                            sx={{
                              pl: 1,
                              pb: 1,
                            }}
                          >
                            <StyleCreateByBox>
                              <StyleCreateBy
                                variant="body2"
                                color="primary.contrastText"
                                component="p"
                              >
                                {t("createdBy")} :
                              </StyleCreateBy>
                              <StyleChip
                                avatar={
                                  <Avatar
                                    alt={bestCollection.CreatedBy}
                                    src={bestCollection.thumb}
                                  />
                                }
                                label={bestCollection.CreatedBy}
                              />
                            </StyleCreateByBox>

                            <Box sx={{ display: "flex", width: "100%", pt: 2 }}>
                              <Buttons
                                text={t("viewCollection")}
                                link={`/Collection/` + bestCollection.id}
                                size={"small"}
                                variant={"contained"}
                                color={"secondary"}
                              />
                            </Box>
                          </StyleCardMediaCreate>
                        </CardContent>
                      </Box>
                    </StyleCard>
                  </StyleGrid>
                </>
              )
            ) : (
              <BestCollectionsSkeleton bestCollection={bestCollection} />
            )}
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: 0 }}>
            {loadingOnChange ? (
              <BestNftsSkeleton />
            ) : loading ? (
              bestNftItemsOnChange ? (
                <>
                  <Grid item xs={12} md={12}>
                    <StyleTitleBestNft
                      variant="subtitle1"
                      textAlign="justify"
                      display="block"
                    >
                      {t("bestNFT")}
                    </StyleTitleBestNft>
                  </Grid>

                  {bestNftItemsOnChange.map((item) => (
                    <Grid item xs={12} md={4} key={item.id}>
                      <StyleCardItem elevation={0}>
                        <StyleCardMediaItem
                          component="img"
                          image={item.thumb}
                          alt={item.title}
                        />
                        <CardContent>
                          <ButtonsClick
                            onClick={() => handleNftItemClick(item)}
                          >
                            <Buttons
                              text={t("viewNFT")}
                              size={"small"}
                              variant={"contained"}
                              color={"secondary"}
                            />
                          </ButtonsClick>
                        </CardContent>
                      </StyleCardItem>
                    </Grid>
                  ))}
                </>
              ) : (
                <>
                  <Grid item xs={12} md={12}>
                    <StyleTitleBestNft
                      variant="subtitle1"
                      textAlign="justify"
                      display="block"
                    >
                      {t("bestNFT")}
                    </StyleTitleBestNft>
                  </Grid>
                  {bestNftItems.map((item) => (
                    <Grid item xs={12} md={4} key={item.id}>
                      <StyleCardItem elevation={0}>
                        <StyleCardMediaItem
                          component="img"
                          image={item.thumb}
                          alt={item.title}
                        />
                        <CardContent>
                          <ButtonsClick
                            onClick={() => handleNftItemClick(item)}
                          >
                            <Buttons
                              text={t("viewNFT")}
                              size={"small"}
                              variant={"contained"}
                              color={"secondary"}
                            />
                          </ButtonsClick>
                        </CardContent>
                      </StyleCardItem>
                    </Grid>
                  ))}
                </>
              )
            ) : (
              <BestNftsSkeleton />
            )}
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default PopularAccounts;
