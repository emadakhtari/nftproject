import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Typography,
  Toolbar,
  Drawer,
  Divider,
  CssBaseline,
  Box,
  AppBar,
  Grid,
  Stack,
  Container,
} from "@mui/material";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import TuneIcon from "@mui/icons-material/Tune";
import SaleTypeFilter from "../layouts/collection/SaleTypeFilter";
import PriceFilter from "../layouts/collection/PriceFilter";
import CategoriesFilter from "../layouts/collection/CategoriesFilter";
import { useParams } from "react-router-dom";
import axios from "axios";
import NftItems from "../elements/items/NftItems";
import CoolectionPageSkeleton from "../elements/skeleton/CoolectionPageSkeleton";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import i18n from "../../services/i18n";

const drawerWidth = 240;

const StyledContainer = styled("div")(({ theme }) => ({
  paddingTop: 92,
}));
const StyleAppBarHeader = styled(AppBar)(({ theme }) => ({
  top: 92,
}));
const StyleDrawer = styled(Drawer)(({ theme }) => ({}));
const StyleBoxNav = styled(Box)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    top: "auto",
  },
}));
const StyleCollectionsTitle = styled("div")(({ theme }) => ({
  // marginLeft: theme.spacing(1),
}));
const StyleToolbarChevronIcon = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
}));
const DrawerTitle = styled("div")(({ theme }) => ({
  float: "flex",
}));
const StyleDropDownMenuIcon = styled("span")(({ theme }) => ({
  display: "flex",
  marginRight: theme.spacing(1),
}));

function Collection(props) {
  const { t } = useTranslation();
  const { id } = useParams();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [pages, setPages] = useState(1);
  const [obj, setObj] = useState([]);
  useEffect(() => {
    getItems(pages);
    setPages((pages) => pages + 1);
    // eslint-disable-next-line
  }, []);
  const Item = ({ children, reference }) => {
    return (
      <Grid ref={reference} item elevation={0} xs={12} sm={6} md={4}>
        {children}
      </Grid>
    );
  };
  const getItems = async (page) => {
    setIsLoading(true);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await axios
        .post(
          process.env.REACT_APP_API_URL + "/api/collection",
          {
            collection_id: id,
            _page: page,
            _limit: 6,
          },
          config
        )
        .then((resp) => {
          setItems([...items, ...resp.data.result.ListOfNftItems]);
          setObj(resp.data.result.countNftitem);
          setLoading(true);
          setIsLoading(false);
          // console.log(resp.data.result);
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
  const observer = useRef();
  const tPage = obj / 6;
  const TOTAL_PAGES = Math.round(tPage + 1);
  const lastItemRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          if (pages < TOTAL_PAGES) {
            getItems(pages);
            setPages((pages) => pages + 1);
          } else {
            setHasMore(false);
          }
        }
      });

      if (node) observer.current.observe(node);
    },
    // eslint-disable-next-line
    [isLoading, hasMore]
  );
  let userSettings = "";
  const [crStatus, setCrStatus] = useState("all");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState([0, 10]);

  const getPreferenceData = async (params, page) => {
    userSettings = { ...userSettings, ...params };
    setCrStatus(userSettings.status);
    setPrice(userSettings.price);
    setCategory(userSettings.category);
    console.log(userSettings);
    setIsLoading(true);
    setLoading(false);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "true",
      },
    };
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await axios
        .post(
          process.env.REACT_APP_API_URL + "/api/collection",
          {
            collection_id: id,
            _page: page,
            status: userSettings.status,
            price: userSettings.price,
            category: userSettings.category,
            _limit: 6,
          },
          config
        )
        .then((resp) => {
          setItems(resp.data.result.ListOfNftItems);
          setObj(resp.data.result.countNftitem);
          setLoading(true);
          setIsLoading(false);
          console.log(resp);
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
  const drawer = (
    <>
      <StyleToolbarChevronIcon>
        <DrawerTitle>
          <Stack direction="row" alignItems="center" gap={1}>
            <StyleDropDownMenuIcon>
              <TuneIcon />
            </StyleDropDownMenuIcon>
            <Typography textAlign="center" sx={{ display: "block" }}>
              {t("Filters")}
            </Typography>
          </Stack>
        </DrawerTitle>
      </StyleToolbarChevronIcon>
      <Divider />
      <Divider />
      <SaleTypeFilter
        crStatus={crStatus}
        price={price}
        category={category}
        sendData={getPreferenceData}
      />
      <Divider />
      <PriceFilter
        crStatus={crStatus}
        price={price}
        category={category}
        sendData={getPreferenceData}
      />
      <Divider />
      <CategoriesFilter
        crStatus={crStatus}
        price={price}
        category={category}
        sendData={getPreferenceData}
      />
    </>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <StyledContainer>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <StyleAppBarHeader
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <StyleCollectionsTitle>
              <Typography variant="h6">Collections</Typography>
              <Typography variant="caption">32 Items</Typography>
            </StyleCollectionsTitle>
          </Toolbar>
        </StyleAppBarHeader>
        <StyleBoxNav
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <StyleDrawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </StyleDrawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </StyleBoxNav>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Container
            maxWidth="lg"
            sx={{
              py: 1,
              minHeight: "100vh",
            }}
          >
            <Grid container spacing={8}>
              {loading ? (
                <>
                  {items.map((user, index) =>
                    index + 1 === items.length ? (
                      <Item reference={lastItemRef} key={index}>
                        <NftItems
                          itemHref={
                            `/NftItem/` + user.nft_address + `/` + user.token_id
                          }
                          itemImage={user.thumb}
                          itemTitle={user.title}
                          createdBy={user.CreatedBy}
                        />
                      </Item>
                    ) : (
                      <Item reference={lastItemRef} key={index}>
                        <NftItems
                          itemHref={
                            `/NftItem/` + user.nft_address + `/` + user.token_id
                          }
                          itemImage={user.thumb}
                          itemTitle={user.title}
                          description={user.description}
                          createdBy={user.CreatedBy}
                        />
                      </Item>
                    )
                  )}
                </>
              ) : (
                <CoolectionPageSkeleton />
              )}
            </Grid>
          </Container>
        </Box>
      </Box>
    </StyledContainer>
  );
}
Collection.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Collection;
