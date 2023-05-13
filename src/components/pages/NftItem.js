import React, { useState, useEffect } from "react";
import { getDefaultProvider, Contract } from "ethers";
import { NftProvider, useNft } from "use-nft";
import { useParams } from "react-router-dom";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  // Rating,
  Skeleton,
  Typography,
} from "@mui/material";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/material/styles";
import Footer from "../layouts/Footer";
import axios from "axios";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { Stack } from "@mui/system";
import NFTAvatar from "../../images/NFT_Avatar.jpg";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import StoreIcon from "@mui/icons-material/Store";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Web3 from "web3";
import AuthService from "../../services/auth.service";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
// import Buttons from "../elements/items/Buttons";
import { toast } from "react-hot-toast";
import MarketplaceJSON from "../../Marketplace.json";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StyleGrid = styled(Grid)(({ theme }) => ({
  position: "relative",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(4),
}));
const StyleImageBox = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  borderRadius: 20,
}));
// const StyleTopTitleTypography = styled(Typography)(({ theme }) => ({}));
const StyleCreateByBox = styled(Box)(({ theme }) => ({
  display: "flex",
  paddingBottom: theme.spacing(2),
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
  marginLeft: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
  },
}));
const StylePriceTotalBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));
const StylePriceBox = styled(Box)(({ theme }) => ({
  display: "flex",
  paddingTop: theme.spacing(1),
}));

const StylePrice = styled(Typography)(({ theme }) => ({
  lineHeight: "32px",
  paddingRight: theme.spacing(1),
}));
// const StyleStarStack = styled(Stack)(({ theme }) => ({
//   paddingLeft: theme.spacing(1),
//   justifyContent: "center",
// }));
const StyleFavoriteButton = styled(Button)(({ theme }) => ({
  borderRadius: 15,
}));
const StyleDescriptionBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));
const StylePriceHistory = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  display: "flex",
}));
const StylePriceHistoryTotal = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(3),
  background: theme.palette.primary.dark,
  borderRadius: 20,
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
// const SkeletonButtons = styled(Skeleton)(({ theme }) => ({
//   borderRadius: 15,
// }));
const StyleSkeletonPriceHistory = styled(Skeleton)(({ theme }) => ({
  transformOrigin: "0 0",
  borderRadius: 20,
  transform: "scale(1, 1)",
}));

const ethersConfig = {
  ethers: { Contract },
  provider: getDefaultProvider(
    "https://eth-goerli.g.alchemy.com/v2/gBNqApSf67JvaeS0iWOs2HSA19dhTAc5"
  ),
};
const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));
// console.log(ethersConfig);
export default function NftItems({ lng }) {
  return (
    <>
      <NftProvider fetcher={["ethers", ethersConfig]}>
        <Nft lng={lng} />
      </NftProvider>
    </>
  );
}
// const express = require("express");

function Nft({ lng }) {
  const { t } = useTranslation();
  const [currentAccount, setCurrentAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const detectProvider = () => {
    let provider;
    if (window.ethereum.selectedAddress) {
      setIsConnected(true);
    } else {
    }

    if (window.ethereum) {
      if (window.ethereum.selectedAddress) {
        setIsConnected(true);
      } else {
      }
      provider = window.ethereum;
      return provider;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
      return provider;
    } else {
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    const provider = detectProvider();
    if (provider !== undefined) {
      const onLogin2 = async (provider) => {
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        // console.log(accounts);
        if (accounts.length === 0) {
          toast.error(
            <Typography component="span">
              {t("accessWalletMsg")}
              <Box
                component="span"
                color="warning.main"
                fontWeight="bold"
                display="inline"
                sx={{
                  paddingRight: "2px",
                  paddingLeft: "2px",
                }}
              >
                {t("WALLET")}
              </Box>
              . {t("Thanks")}
            </Typography>,
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
          const el = document.getElementById("root");
          el.scrollIntoView({ behavior: "smooth" });
          navigate("/");
        } else if (accounts[0] !== currentAccount) {
          setCurrentAccount(accounts[0]);
          setIsConnected(true);
        }

        if (accounts[0]) {
        } else {
          if (localStorage.getItem("account") !== null) {
            AuthService.logout(localStorage.getItem("account"));
          }
        }
      };
      onLogin2(provider);
      // console.log(currentAccount);
    } else {
    }
  }, [currentAccount, navigate, t]);
  const param = useParams();
  const { loading, error, nft } = useNft(param.nftAddress, param.tokenId);
  const [data, updateData] = useState({});
  // const [dataFetched, updateDataFetched] = useState(false);

  // console.log(nft);
  const [loadings, setLoadings] = useState(false);
  const [item, setItem] = useState([]);
  const getItems = async () => {
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
          process.env.REACT_APP_API_URL + "/api/nftItem",
          {
            nft_address: param.nftAddress,
            token_id: param.tokenId,
          },
          config
        )
        .then((resp) => {
          setItem(resp.data.result.NftItemPage);
          // setLoadings(true);
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

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);

  var tokenId = param.tokenId;
  async function buyNFT(tokenId) {
    try {
      const ethers = require("ethers");
      //After adding your Hardhat network to your metamask, this code will get providers and signers
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      //Pull the deployed contract instance
      let contract = new ethers.Contract(
        MarketplaceJSON.address,
        MarketplaceJSON.abi,
        signer
      );
      const salePrice = ethers.utils.parseUnits(nft.rawData.price, "ether");
      // console.log(salePrice);
      toast(
        <Typography component="span">
          Buying the NFT... Please Wait
          <Box
            component="span"
            color="secondary.light"
            fontWeight="bold"
            display="inline"
            sx={{
              paddingRight: "2px",
              paddingLeft: "2px",
            }}
          >
            (Upto 5 mins)
          </Box>
        </Typography>,
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
            <StoreIcon
              sx={{
                color: "#B3E5FC",
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
      //run the executeSale function
      let transaction = await contract.executeSale(param.tokenId, {
        value: salePrice,
      });
      setLoadings(true);
      toast.success(
        <Typography component="span">{t("successfullyBoughtNFT")}</Typography>,
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
            <DoneAllIcon
              sx={{
                color: "#00b44b",
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
      await transaction.wait();

      setLoadings(false);
    } catch (e) {
      // console.log(e);
      toast.error(e.message, {
        duration: 40004000,
        position: "top-left",
        containerClassName: "ontainerClassName",
        containerStyle: {},
        style: {
          background: "#808080",
          color: "#E6E6E6",
        },
        className: "toastClassName",
        icon: (
          <RemoveShoppingCartIcon
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
    }
  }
  // nft.loading is true during load.
  // if (loading) return <>Loading…</>;

  // nft.error is an Error instance in case of error.
  // if (error || !nft) return <>Error.</>;
  //  console.log(nft.metadataUrl);
  // if(!dataFetched)
  //         getNFTData(tokenId);

  useEffect(() => {
    if (nft) {
      async function getNFTData(tokenId) {
        const ethers = require("ethers");
        //After adding your Hardhat network to your metamask, this code will get providers and signers
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        //Pull the deployed contract instance
        let contract = new ethers.Contract(
          MarketplaceJSON.address,
          MarketplaceJSON.abi,
          signer
        );
        //create an NFT Token
        const listedToken = await contract.getListedTokenForId(tokenId);
        let item = {
          price: nft.price,
          tokenId: tokenId,
          seller: listedToken.seller,
          owner: listedToken.owner,
          image: nft.image,
          name: nft.name,
          description: nft.description,
        };
        setLoadings(true);
        updateData(item);
        // updateDataFetched(true);
      }
      if (isConnected) {
        getNFTData(tokenId);
      }

      // console.log(item);
      // console.log(nft);
      // console.log(data);'
    }
  }, [nft, tokenId, data, item, isConnected]);

  const data2 = [
    {
      name: "27 Dec 2022",
      ETH: 4000,
      amt: 2400,
    },
    {
      name: "28 Dec 2022",
      ETH: 3000,
      amt: 2210,
    },
    {
      name: "29 Dec 2022",
      ETH: 2000,
      amt: 2290,
    },
    {
      name: "30 Dec 2022",
      ETH: 2780,
      amt: 2000,
    },
    {
      name: "31 Dec 2022",
      ETH: 1890,
      amt: 2181,
    },
    {
      name: "01 Jan 2023",
      ETH: 2390,
      amt: 2500,
    },
    {
      name: "02 Jan 2023",
      ETH: 3490,
      amt: 2100,
    },
  ];

  return (
    <section>
      <>
        {error && <></>}
        {loading && <></>}
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
                <Grid item xs={12} md={4}>
                  {/* NFTAvatar */}
                  {loadings ? (
                    <StyleImageBox
                      component="img"
                      alt={item.title}
                      src={item.thumb}
                    />
                  ) : (
                    <StyleImageBox
                      component="img"
                      alt={item.title}
                      src={NFTAvatar}
                    />
                  )}
                </Grid>
                <Grid item xs={12} md={8}>
                  <Grid container spacing={2} columns={20}>
                    <Grid item xs={4}>
                      <Item>
                        {loadings ? (
                          <>
                            <StyleCreateByBox>
                              <StyleCreateBy
                                variant="body2"
                                color="primary.contrastText"
                                component="p"
                              >
                                {t("createdBy")} :
                              </StyleCreateBy>
                            </StyleCreateByBox>
                          </>
                        ) : (
                          <>
                            {/* <Skeleton variant="text" width={120} height={24} /> */}
                            <StyleCreateByBox sx={{ width: "100%" }}>
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
                            </StyleCreateByBox>
                          </>
                        )}
                      </Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                        {loadings ? (
                          <>
                            <StyleCreateByBox>
                              <StyleChip
                                avatar={
                                  <Avatar alt={item.title} src={item.thumb} />
                                }
                                label={item.CreatedBy}
                              />
                            </StyleCreateByBox>
                          </>
                        ) : (
                          <>
                            <StyleCreateByBox sx={{ width: "100%" }}>
                              <SkeletonStyleChip avatar={<Avatar />} />
                            </StyleCreateByBox>
                          </>
                        )}
                      </Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                        {loadings ? (
                          <>
                            <StyleCreateByBox>
                              <StyleCreateBy
                                variant="body2"
                                color="primary.contrastText"
                                component="p"
                              >
                                {t("WalletAddress")} :
                              </StyleCreateBy>
                            </StyleCreateByBox>
                          </>
                        ) : (
                          <>
                            <StyleCreateByBox sx={{ width: "100%" }}>
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
                            </StyleCreateByBox>
                          </>
                        )}
                      </Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                        {loadings ? (
                          <>
                            <StyleCreateByBox>
                              <StyleChip label={item.nft_address} />
                            </StyleCreateByBox>
                          </>
                        ) : (
                          <>
                            <StyleCreateByBox sx={{ width: "100%" }}>
                              <SkeletonStyleChip avatar={<Avatar />} />
                            </StyleCreateByBox>
                          </>
                        )}
                      </Item>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2} columns={20}>
                    <Grid item xs={4}>
                      <Item>
                        {loadings ? (
                          <>
                            <StyleCreateByBox>
                              <StyleCreateBy
                                variant="body2"
                                color="primary.contrastText"
                                component="p"
                              >
                                {t("Owner")} :
                              </StyleCreateBy>
                            </StyleCreateByBox>
                          </>
                        ) : (
                          <>
                            {/* <Skeleton variant="text" width={120} height={24} /> */}
                            <StyleCreateByBox sx={{ width: "100%" }}>
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
                            </StyleCreateByBox>
                          </>
                        )}
                      </Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                        {loadings ? (
                          <>
                            <StyleCreateByBox>
                              <StyleChip label={data.owner} />
                            </StyleCreateByBox>
                          </>
                        ) : (
                          <>
                            <StyleCreateByBox sx={{ width: "100%" }}>
                              <SkeletonStyleChip avatar={<Avatar />} />
                            </StyleCreateByBox>
                          </>
                        )}
                      </Item>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}></Grid>
                  </Grid>

                  <Grid container spacing={2} columns={20}>
                    <Grid item xs={4}>
                      <Item>
                        {loadings ? (
                          <>
                            <StyleCreateByBox>
                              <StyleCreateBy
                                variant="body2"
                                color="primary.contrastText"
                                component="p"
                              >
                                {t("Seller")} :
                              </StyleCreateBy>
                            </StyleCreateByBox>
                          </>
                        ) : (
                          <>
                            {/* <Skeleton variant="text" width={120} height={24} /> */}
                            <StyleCreateByBox sx={{ width: "100%" }}>
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
                            </StyleCreateByBox>
                          </>
                        )}
                      </Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                        {loadings ? (
                          <>
                            <StyleCreateByBox>
                              <StyleChip label={data.seller} />
                            </StyleCreateByBox>
                          </>
                        ) : (
                          <>
                            <StyleCreateByBox sx={{ width: "100%" }}>
                              <SkeletonStyleChip avatar={<Avatar />} />
                            </StyleCreateByBox>
                          </>
                        )}
                      </Item>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}></Grid>
                  </Grid>

                  <Divider />
                  <StylePriceTotalBox>
                    {loadings ? (
                      <>
                        <Typography
                          variant="subtitle1"
                          component="span"
                          color="primary.contrastText"
                        >
                          {t("currentPrice")}
                        </Typography>
                        <StylePriceBox>
                          <StylePrice
                            variant="body2"
                            color="secondary"
                            component="p"
                          >
                            {item.volume} ET
                          </StylePrice>
                          <Divider orientation="vertical" flexItem />
                          {/* <StyleStarStack spacing={1}>
                            <Rating
                              name="half-rating"
                              defaultValue={2.5}
                              precision={0.5}
                            />
                          </StyleStarStack> */}
                        </StylePriceBox>
                      </>
                    ) : (
                      <>
                        <Skeleton variant="text" width={120} height={28} />
                        <StylePriceBox>
                          <Skeleton variant="text" width={300} height={32} />
                        </StylePriceBox>
                      </>
                    )}
                  </StylePriceTotalBox>
                  <Stack direction="row" spacing={2}>
                    {loadings ? (
                      <>
                        {/* <StyleFavoriteButton
                          variant="contained"
                          color="secondary"
                          endIcon={<FavoriteIcon color="error" />}
                        >
                          <Typography
                            variant="subtitle1"
                            component="span"
                            color="primary.dark"
                            sx={{ paddingRight: 1 }}
                          >
                            21
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            component="span"
                            color="primary"
                          >
                            interested
                          </Typography>
                        </StyleFavoriteButton> */}
                      </>
                    ) : (
                      <>
                        {/* <SkeletonButtons
                          variant="rounded"
                          animation="pulse"
                          height={40}
                          width={154}
                        >
                          <Buttons
                            text={"View NFT"}
                            size={"large"}
                            variant={"contained"}
                            color={"secondary"}
                          />
                        </SkeletonButtons> */}
                      </>
                    )}
                  </Stack>
                  <StyleDescriptionBox>
                    {loadings ? (
                      <Typography variant="body1" color="text.dark">
                        {item.description}
                      </Typography>
                    ) : (
                      <>
                        <Skeleton variant="text" height={36} />
                        <Skeleton variant="text" height={36} width={"50%"} />
                      </>
                    )}
                  </StyleDescriptionBox>
                  {isConnected &&
                    (currentAccount !== data.owner &&
                    currentAccount !== data.seller ? (
                      loadings ? (
                        <StyleFavoriteButton
                          variant="contained"
                          color="secondary"
                          onClick={() => buyNFT(tokenId)}
                        >
                          {t("BuyThisNFT")}
                        </StyleFavoriteButton>
                      ) : (
                        <></>
                      )
                    ) : loadings ? (
                      <Alert variant="outlined" severity="info">
                        {t("YouOwnerNft")}
                      </Alert>
                    ) : (
                      <></>
                    ))}

                  {!isConnected && (
                    <Alert variant="outlined" severity="warning">
                      {t("PleaseConnectYourWallet")}
                    </Alert>
                  )}
                </Grid>
              </StyleGrid>
              <StyleGrid container spacing={4}>
                {loadings ? (
                  <>
                    <StylePriceHistoryTotal>
                      <Grid item xs={12} md={12}>
                        <StylePriceHistory
                          variant="contained"
                          color="secondary"
                        >
                          <Typography
                            variant="subtitle1"
                            component="span"
                            color="text.dark"
                            sx={{ paddingRight: 1 }}
                          >
                            {t("PriceHistory")}
                          </Typography>
                          <ShowChartIcon />
                        </StylePriceHistory>

                        <div
                          style={{
                            width: "100%",
                            height: 150,
                            direction: "ltr",
                          }}
                        >
                          <ResponsiveContainer>
                            <AreaChart
                              flip={false}
                              key={lng}
                              width={730}
                              height={250}
                              data={data2}
                              margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                              }}
                            >
                              <defs>
                                <linearGradient
                                  id="colorUv"
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="1"
                                >
                                  <stop
                                    offset="5%"
                                    stopColor="#00b44b"
                                    stopOpacity={0.8}
                                  />
                                  <stop
                                    offset="95%"
                                    stopColor="#00b44b"
                                    stopOpacity={0}
                                  />
                                </linearGradient>
                              </defs>
                              <XAxis dataKey="name" />
                              <YAxis />
                              <CartesianGrid strokeDasharray="3 3" />

                              <Area
                                type="monotone"
                                dataKey="ETH"
                                stroke="#00b44b"
                                fillOpacity={1}
                                fill="url(#colorUv)"
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </Grid>
                    </StylePriceHistoryTotal>
                  </>
                ) : (
                  <>
                    <StyleSkeletonPriceHistory
                      variant="text"
                      height={258}
                      width={"100%"}
                    />
                  </>
                )}
              </StyleGrid>
            </Container>
          </Box>
        </Box>
        <Footer />
      </>
    </section>
  );
}
