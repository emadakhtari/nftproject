import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./components/pages/Home";
import Category from "./components/pages/Category";
import Header from "./components/layouts/Header";
import axios from "axios";
import Collection from "./components/pages/Collection";
import NftItem from "./components/pages/NftItem";
import Profile from "./components/pages/Profile";
import Web3 from "web3";
import AuthService from "./services/auth.service";
import AppAlerts from "./components/elements/alerts/AppAlerts";
import Create from "./components/pages/Create";
import { useTranslation } from "react-i18next";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import i18n from "./services/i18n";

// eslint-disable-next-line

function App() {
  const [progress, setProgress] = useState(100);
  const [categories, setCategories] = useState([]);
  const [homeError, setHomeError] = useState("");

  const [openEmail, setOpenEmail] = useState(false);
  const [noWalletError, setNoWalletError] = useState(false);
  const [openNonEthereumError, setOpenNonEthereumError] = useState(false);
  const [multipleError, setMultipleError] = useState(false);
  const [successLoggin, setSuccessLoggin] = useState(false);

  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [balance, setBalance] = useState(0);
  const [isConnecting, setIsConnecting] = useState(false);
  const [message, setMessage] = useState(false);
  const [errorMetaMask, setErrorMetaMask] = useState(null);
  const [appData, setAppData] = useState(null);

  // const [auth, setAuth] = useState(null);

  const onLogin = async (provider) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
      const accBalanceEth = web3.utils.fromWei(
        await web3.eth.getBalance(accounts[0]),
        "ether"
      );
      setBalance(Number(accBalanceEth).toFixed(6));
      setIsConnected(true);
    } else {
    }
  };

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
      setOpenNonEthereumError(true);
    }
  };

  async function onLoginHandler(event) {
    const provider = detectProvider();
    try {
      if (provider) {
        if (provider !== window.ethereum) {
          setMultipleError(true);
        } else {
        }
        setIsConnecting(true);
        await provider.request({
          method: "eth_requestAccounts",
        });
        setIsConnecting(false);
        setSuccessLoggin(true);
        AuthService.login(provider.selectedAddress).then(
          (res) => {
            localStorage.setItem("account", res.result.walletAddress);
            setCurrentUser(res);
            setprofileAccount(res.result.login);
            if (res.result.login.email !== null) {
              setOpenEmail(false);
            } else {
              setOpenEmail(true);
            }
            homeOnLoad();
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            setMessage(resMessage);
          }
        );
      } else {
      }
      setIsConnected(true);
      onLogin(provider);
    } catch (e) {
      console.log(e.message, "OOOOPS");
      setErrorMetaMask(e.message);
    }
  }

  useEffect(() => {
    const provider = detectProvider();
    if (provider !== undefined) {
      const onLogin2 = async (provider) => {
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        if (accounts.length === 0) {
        } else if (accounts[0] !== currentAccount) {
          setCurrentAccount(accounts[0]);
          const accBalanceEth = web3.utils.fromWei(
            await web3.eth.getBalance(accounts[0]),
            "ether"
          );
          setBalance(Number(accBalanceEth).toFixed(6));
          setIsConnected(true);
        }

        if (accounts[0]) {
          localStorage.setItem("account", currentAccount);
        } else {
          if (localStorage.getItem("account") !== null) {
            AuthService.logout(localStorage.getItem("account"));
            setCurrentUser(undefined);
          }
        }
      };
      onLogin2(provider);
    } else {
      setNoWalletError(true);
    }
  }, [currentAccount]);

  // async function onDisconnect () {
  //   setIsConnected(false);
  //   Web3.eth.currentProvider.disconnect()
  // }

  const [currentUser, setCurrentUser] = useState(undefined);
  const [profileAccount, setprofileAccount] = useState(null);

  async function homeOnLoad() {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "true",
      },
    };
    try {
      await axios
        .post(
          process.env.REACT_APP_API_URL + "/api/home",
          {
            homeAccount: localStorage.getItem("account"),
          },
          config
        )
        .then((response) => {
          setCategories(response.data.result.ListOfCategories);
          setAppData(response.data.result);
          // console.log(response.data.result);
          // if (response.result.profileSelect.email == null) {
          //   setOpenEmail(true);
          // }
        });
    } catch (err) {
      if (err.response) {
        setHomeError(err.message);
        console.error(err.message);
      } else if (err.request) {
        setHomeError(err.message);
        console.error(err.message);
      } else {
        setHomeError(err.message);
        console.error(err.message);
      }
    }
  }
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    // console.log(user);
    if (user) {
      setCurrentUser(user);
      async function appOnLoad() {
        axios.defaults.headers.common = {
          Authorization: "Bearer " + user.result.token,
        };

        try {
          await axios
            .post(process.env.REACT_APP_API_URL + "/api/app")
            .then((response) => {
              setprofileAccount(response.data.result.profileAccount);
              // console.log(response.data.result.profileAccount);
              // console.log(response.data.result.profileAccount);
            });
        } catch (err) {
          if (err.response) {
            setHomeError(err.message);
            // console.error(err.message);
          } else if (err.request) {
            setHomeError(err.message);
            // console.error(err.message);
          } else {
            setHomeError(err.message);
            // console.error(err.message);
          }
        }
      }
      appOnLoad();
    }
    homeOnLoad();
  }, []);

  const { t } = useTranslation();

  const theme = createTheme({
    direction: "ltr",
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 915,
        lg: 1200,
        xl: 1536,
        mobile: 0,
        tablet: 900,
        laptop: 1024,
        desktop: 1200,
      },
    },
    affected: {
      textAlign: 'right',
    },
    unaffected: {
      flip: false,
      textAlign: 'right',
    },
    palette: {
      status: {
        danger: "#FFA500",
      },
      background: {
        default: "#FFFFFF",
        paper: "#E6E6E6",
      },
      action: {
        normal: "#00B44B",
        active: "#00b44b",
        hover: "#00b44b",
        selected: "#00b44b",
        disabled: "#FFA500",
        focus: "#00b44b",
      },
      shape: {
        borderRadius: "50px",
      },
      mixins: {
        toolbar: {
          minHeight: "56",
        },
      },
      zIndex: {
        mobileStepper: "1000",
        fab: "1050",
        speedDial: "1050",
        appBar: "1100",
        drawer: "1200",
        modal: "1300",
        snackbar: "1400",
        tooltip: "1500",
      },
      primary: {
        light: "#E6E6E6",
        main: "#ffffff",
        dark: "#E6E6E6",
        darker: "#000",
        contrastText: "#808080",
      },
      secondary: {
        light: "#59e779",
        main: "#00b44b",
        dark: "#00831d",
        contrastText: "#ffffff",
      },
      error: {
        light: "#D32F2F",
        main: "#D32F2F",
        dark: "#D32F2F",
      },
      warning: {
        light: "#FFCCBC",
        main: "#FF5722",
        dark: "#E64A19",
      },
      info: {
        lighter: "#1976D2",
        light: "#063067",
        main: "#063067",
        dark: "#00073c",
      },
      success: {
        light: "#59e779",
        main: "#00b44b",
        dark: "#00831d",
      },
      text: {
        primary: "#808080",
        secondary: "#00B44B",
        disabled: "rgba(230, 230, 230, 1)",
        dark: "#000000",
      },

      components: {
        MuiTypography: {},
      },
    },
    components: {
      MuiSkeleton: {
        styleOverrides: {
          root: {
            backgroundColor: "#BDBDBD",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontFamily:
              t("lang") === "en"
                ? `"Roboto","Helvetica","Arial",sans-serif`
                : "iran-sans",
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontFamily:
              t("lang") === "en"
                ? `"Roboto","Helvetica","Arial",sans-serif`
                : "iran-sans",
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontFamily:
              t("lang") === "en"
                ? `"Roboto","Helvetica","Arial",sans-serif`
                : "iran-sans",
          },
        },
      },
      MuiSnackbarContent: {
        styleOverrides: {
          root: {},
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: "none",
          },
        },
      },

      MuiButtonBase: {
        styleOverrides: {
          root: {
            "& .Mui-focusVisible": {
              backgroundColor: "#ffffff",
              color: "#00b44b",
            },
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          message: {},
        },
      },
      MuiTypography: {
        defaultProps: {
          fontFamily:
            t("lang") === "en"
              ? `"Roboto","Helvetica","Arial",sans-serif`
              : "iran-sans",
        },
      },
    },
  });

  const cacheRtl = createCache({
    key: i18n.language === "en" ? `mui` : `muirtl`,
    stylisPlugins: i18n.language === "en" ? [prefixer] : [prefixer, rtlPlugin],
  });
  const [lng, setLng] = useState(0);
  const handleLangClick = num => {
    setLng(num);
  };
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <AppAlerts
            errorMetaMask={errorMetaMask}
            openEmail={openEmail}
            message={message}
            openNonEthereumError={openNonEthereumError}
            noWalletError={noWalletError}
            multipleError={multipleError}
            homeError={homeError}
            successLoggin={successLoggin}
          />
          <LoadingBar
            color="#00b44b"
            progress={progress}
            shadow={true}
            height={3}
            transitionTime={1000}
            loaderSpeed={1000}
            waitingTime={1500}
            onLoaderFinished={() => setProgress(0)}
            containerClassName="containerClassNameLoadingBar"
            className="classNameLoadingBar"
          />

          <Header
            categories={categories}
            isConnected={isConnected}
            currentAccount={currentAccount}
            // onDisconnect={onDisconnect}
            balance={balance}
            isConnecting={isConnecting}
            onLoginHandler={onLoginHandler}
            appData={appData}
            currentUser={currentUser}
            profileAccount={profileAccount}
            handleLangClick={handleLangClick}
          />
          <Routes>
            <Route path="/" exact="exact" element={<Home />} />
            <Route path="/Category/:id" exact="exact" element={<Category />} />
            <Route
              path="/Collection/:id"
              exact="exact"
              element={<Collection />}
            />
            <Route
              path="/NftItem/:nftAddress/:tokenId"
              element={<NftItem isConnected={isConnected} currentAccount={currentAccount} lng={lng} />}
            />

            <Route path="/Profile" exact="exact" element={<Profile />} />
            <Route path="/Create" exact="exact" element={<Create />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
