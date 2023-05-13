import React, { useState } from "react";
import {
  Divider,
  IconButton,
  Menu,
  Skeleton,
  Toolbar,
  Typography,
  Link,
  MenuItem,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Stack } from "@mui/system";
import axios from "axios";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const BoxDesktop = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const TypographyTrendingDesktop = styled(Typography)(({ theme }) => ({
  display: "flex",
  letterSpacing: ".1rem",
  color: "inherit",
  textDecoration: "none",
  flexGrow: 0,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const SkeletonDesktop = styled(Skeleton)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const DividerDesktop = styled(Divider)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const TypographyTopDesktop = styled(Typography)(({ theme }) => ({
  display: "flex",
  letterSpacing: ".1rem",
  color: "inherit",
  textDecoration: "none",
  flexGrow: 0,
  fontWeight: "bold",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const BoxMobile = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));
const MenuMobile = styled(Menu)(({ theme }) => ({
  display: "none",
  ".MuiPaper-root": {
    backgroundColor: theme.palette.background.default,
    borderRadius: 10,
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
const StyleLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
  },
}));
const StyleMenuItem = styled(MenuItem)(({ theme }) => ({
  margin: 8,
  borderRadius: 10,
  textDecoration: "none",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
}));
const SkeletonMobile = styled(Skeleton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));
const TypographyTrendingMobile = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(1),
  letterSpacing: ".1rem",
  color: "inherit",
  textDecoration: "none",
  flexGrow: 0,
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));
const DividerMobile = styled(Divider)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));
const StyleButton = styled(Button)(({ theme }) => ({
  display: "block",
  color: theme.palette.primary.contrastText,
  fontWeight: "bold",
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));
const StyleBoxMenu = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  justifyContent: "right",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const TypographyMobile = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  letterSpacing: ".1rem",
  color: "inherit",
  textDecoration: "none",
  flexGrow: 0,
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));
const SkeletonBoxMenu = styled(Skeleton)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
// const StyleSwiperButtons = styled("div")(({ theme }) => ({
//   marginLeft: theme.spacing(2),
//   "& .MuiButtonBase-root": {
//     paddingRight: theme.spacing(2),
//     paddingLeft: theme.spacing(2),
//   },
// }));
// const SkeletonButtons = styled(Skeleton)(({ theme }) => ({
//   width: "80.27px",
//   maxWidth: "80.27px",
//   height: "30.75px",
//   borderRadius: 15,
//   marginLeft: theme.spacing(2),
// }));
const TypographyMobMenuItem = styled(Typography)(({ theme }) => ({
  background: "none",
  border: "0",
}));
function CategoriesList({
  loading,
  categories,
  nftFirstSeven,
  nftSecondSeven,
  loadingOnChangeCat,
}) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [selected, setSelected] = useState(0);
  const active = { color: "#00b44b" };
  const inactive = {};
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event, e) => {
    setAnchorElNav(null);
    // console.log(event, event.currentTarget);
  };

  function handleChange(event) {
    const realIndex = event.target.value;
    setSelected(realIndex);
    // console.log(selected);
    loadingOnChangeCat(true);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "true",
      },
    };
    try {
      axios
        .post(
          process.env.REACT_APP_API_URL + "/api/topTrends",
          {
            category_id: realIndex,
          },
          config
        )
        .then((response) => {
          nftFirstSeven(
            response.data.result.ListOfTopTrendsNftItemsTheFirstSeven
          );
          nftSecondSeven(
            response.data.result.ListOfTopTrendsNftItemsTheSecondSeven
          );
          loadingOnChangeCat(false);
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
  }

  const { t } = useTranslation();

  return (
    <>
      <Toolbar disableGutters>
        <BoxDesktop>
          <>
            <TypographyTrendingDesktop
              variant="subtitle1"
              component="div"
              noWrap
            >
              {loading ? (
                t("Trending")
              ) : (
                <SkeletonDesktop width="75.37px" animation="pulse" />
              )}
            </TypographyTrendingDesktop>
            <DividerDesktop orientation="vertical" variant="middle" flexItem />
            <TypographyTopDesktop variant="subtitle1" noWrap component="span">
              {loading ? (
                t("Top")
              ) : (
                <SkeletonDesktop
                  width="32.95px"
                  animation="pulse"
                  variant="text"
                />
              )}
            </TypographyTopDesktop>
          </>
        </BoxDesktop>
        <BoxMobile>
          {loading ? (
            <>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <MenuMobile
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {categories.map((item, index) => (
                  <StyleLink key={item.id} onClick={handleCloseNavMenu}>
                    <StyleMenuItem>
                      <Stack direction="row" alignItems="center" gap={1}>
                        <TypographyMobMenuItem
                          textAlign="center"
                          sx={{ display: "block" }}
                          onClick={handleChange}
                          component="button"
                          value={item.id}
                          // eslint-disable-next-line
                          style={selected == item.id ? active : inactive}
                        >
                          {item.title}
                        </TypographyMobMenuItem>
                      </Stack>
                    </StyleMenuItem>
                  </StyleLink>
                ))}
                <StyleLink onClick={handleCloseNavMenu}>
                  <StyleMenuItem>
                    <Stack direction="row" alignItems="center" gap={1}>
                      <TypographyMobMenuItem
                        textAlign="center"
                        sx={{ display: "block" }}
                        component="button"
                        value={0}
                        onClick={handleChange}
                        // eslint-disable-next-line
                        style={selected == 0 ? active : inactive}
                      >
                        {t("All")}
                      </TypographyMobMenuItem>
                    </Stack>
                  </StyleMenuItem>
                </StyleLink>
              </MenuMobile>
            </>
          ) : (
            <SkeletonMobile
              animation="pulse"
              variant="rounded"
              width={24}
              height={24}
              sx={{ margin: "12px" }}
            />
          )}
        </BoxMobile>
        <BoxMobile>
          <TypographyTrendingMobile variant="subtitle1" noWrap component="span">
            {loading ? (
              t("Trending")
            ) : (
              <SkeletonMobile width="75.37px" animation="pulse" />
            )}
          </TypographyTrendingMobile>
          <DividerMobile orientation="vertical" variant="middle" flexItem />

          <TypographyMobile variant="subtitle1" noWrap component="span">
            {loading ? (
              t("Top")
            ) : (
              <SkeletonMobile width="32.95px" animation="pulse" />
            )}
          </TypographyMobile>
        </BoxMobile>
        {loading ? (
          <StyleBoxMenu>
            <StyleButton
              value={0}
              onClick={handleChange}
              // eslint-disable-next-line
              style={selected == 0 ? active : inactive}
            >
              {t("All")}
            </StyleButton>
            {categories.map((item, index) => (
              <StyleButton
                rel={item.id}
                key={item.id}
                value={item.id}
                onClick={handleChange}
                // eslint-disable-next-line
                style={selected == item.id ? active : inactive}
              >
                {item.title}
              </StyleButton>
            ))}
          </StyleBoxMenu>
        ) : (
          <SkeletonBoxMenu variant="rounded" animation="pulse" width="50%" />
        )}

        {/* <Box sx={{ flexGrow: 0 }}>
          {loading ? (
            <Tooltip title={t("viewAllNFT")}>
              <StyleSwiperButtons>
                <Buttons
                  text={t("viewAll")}
                  link="#"
                  size={"small"}
                  variant={"contained"}
                  color={"secondary"}
                />
              </StyleSwiperButtons>
            </Tooltip>
          ) : (
            <SkeletonButtons variant="rounded" animation="pulse" />
          )}
        </Box> */}
      </Toolbar>
    </>
  );
}

export default CategoriesList;
