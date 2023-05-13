import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PopularAccounts from "../layouts/home/PopularAccounts";
import Slideshow from "../layouts/home/Slideshow";
import TopTrend from "../layouts/home/TopTrend";
import BestCategories from "../layouts/home/BestCategories";
import Footer from "../layouts/Footer";

const StyleGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  position: "relative",
}));
const StyleDivider = styled("span")(({ theme }) => ({
  position: "absolute",
  display: "flex",
  width: 1,
  height: "80%",
  backgroundColor: theme.palette.primary.dark,
  top: "4rem",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
function Home() {
  const [popularAccountsItems, setPopularAccountsItems] = useState([]);
  const [bestCollection, setBestCollection] = useState([]);
  const [bestNftItems, setBestNftItems] = useState([]);
  const [slideShowImage, setSlideShowImage] = useState([]);
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [trendsNftItemsTheFirstSeven, setTrendsNftItemsTheFirstSeven] =
    useState([]);
  const [trendsNftItemsTheSecondSeven, setTrendsNftItemsTheSecondSeven] =
    useState([]);
  const [bestCategories, setBestCategories] = useState([]);

  const [loading, setLoading] = useState(false);
  // ListOfCategories



  useEffect(() => {
    async function homeOnLoad() {
      const config = {
        headers: {
          "content-type": "multipart/form-data",
          "Access-Control-Allow-Origin": "true",
        },
      };
      try {
        await axios
          .post(process.env.REACT_APP_API_URL + "/api/home", config)
          .then((response) => {
            // console.log(response.data.result);
            setPopularAccountsItems(response.data.result.ListOfPopularAccounts);
            setBestCollection(response.data.result.BestCollection);
            setBestNftItems(response.data.result.ListOfBestNftItems);
            setSlideShowImage(response.data.result.SlideShowImage);
            setEvents(response.data.result.ListOfEvents);
            setCategories(response.data.result.ListOfCategories);
            setTrendsNftItemsTheFirstSeven(
              response.data.result.ListOfTopTrendsNftItemsTheFirstSeven
            );
            setTrendsNftItemsTheSecondSeven(
              response.data.result.ListOfTopTrendsNftItemsTheSecondSeven
            );
            setBestCategories(response.data.result.ListOfBestCategories);

            setLoading(true);
          });
      } catch (err) {
        if (err.response) {
          // setHomeError(err.message);
          // console.error(err.message);
        } else if (err.request) {
          // setHomeError(err.message);
          // console.error(err.message);
        } else {
          // setHomeError(err.message);
          // console.error(err.message);
        }
      }
    }
    homeOnLoad();
  }, []);

  return (
    <>
      <Box
        component="main"
        sx={{
          paddingTop: 12,
        }}
      >
        <Box
          sx={{
            paddingTop: 4,
          }}
        >
          <Container maxWidth="lg">
            <StyleGrid container spacing={4}>
              <StyleDivider />
              <PopularAccounts
                popularAccountsItems={popularAccountsItems}
                bestCollection={bestCollection}
                bestNftItems={bestNftItems}
                loading={loading}
              />
            </StyleGrid>
          </Container>
          <Slideshow
            slideShowImage={slideShowImage}
            events={events}
            loadingSlideshow={loading}
          />
          <Container maxWidth="lg">
            <TopTrend
              categories={categories}
              nftItemsTheFirstSeven={trendsNftItemsTheFirstSeven}
              nftItemsTheSecondSeven={trendsNftItemsTheSecondSeven}
              loadingTopTrend={loading}
            />
          </Container>
          <BestCategories
            bestCategories={bestCategories}
            loadingBestCategories={loading}
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Home;
