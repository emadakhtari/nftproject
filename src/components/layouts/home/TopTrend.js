import React, { useState, useEffect } from "react";
import { AppBar, Grid } from "@mui/material";
import CategoriesList from "../../elements/home/topTrend/CategoriesList";
import FirstSevenNft from "../../elements/home/topTrend/FirstSevenNft";
import SecondSevenNft from "../../elements/home/topTrend/SecondSevenNft";


function TopTrend({
  categories,
  loadingTopTrend,
  nftItemsTheFirstSeven,
  nftItemsTheSecondSeven,
}) {
  const [firstSevenCategory, setFirstSevenCategory] = useState(null);
  const [secondSevenCategory, setSecondSevenCategory] = useState(null);
  const [categoryFirstData, setCategoryFirstData] = useState(null);
  const [categorySecondData, setCategorySecondData] = useState(null);
  const [loadingOnChangeCatData, setLoadingOnChangeCatData] = useState();
  const [loadingOnChangeCat, setLoadingOnChangeCat] = useState(null);
  const nftFirstSeven = (childData) => {
    setFirstSevenCategory(childData);
  };
  const nftSecondSeven = (childData) => {
    setSecondSevenCategory(childData);
  };
  const loadingOnChange = (child) => {
    setLoadingOnChangeCatData(child);
  };
  useEffect(() => {
    setCategoryFirstData(firstSevenCategory);
    setCategorySecondData(secondSevenCategory);
    setLoadingOnChangeCat(loadingOnChangeCatData);
  }, [firstSevenCategory, secondSevenCategory, loadingOnChangeCatData]);

  return (
    <>
      <AppBar position="static" elevation={0}>
        <CategoriesList
          categories={categories}
          loading={loadingTopTrend}
          nftFirstSeven={nftFirstSeven}
          nftSecondSeven={nftSecondSeven}
          loadingOnChangeCat={loadingOnChange}
        />
      </AppBar>
      <Grid sx={{ paddingBottom: 5 }} container spacing={2}>
        <Grid item xs={12} md={6}>
          <FirstSevenNft
            categoryFirstData={categoryFirstData}
            loadingOnChangeCat={loadingOnChangeCat}
            loadingTopTrend={loadingTopTrend}
            nftItemsTheFirstSeven={nftItemsTheFirstSeven}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SecondSevenNft
            categorySecondData={categorySecondData}
            loadingOnChangeCat={loadingOnChangeCat}
            loadingTopTrend={loadingTopTrend}
            nftItemsTheSecondSeven={nftItemsTheSecondSeven}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default TopTrend;
