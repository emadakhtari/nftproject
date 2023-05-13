import React, { useEffect } from "react";
// import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Container, Link } from "@mui/material";
import Menu from "../elements/header/AppBar";

import MenuProfile from "../elements/header/menu/MenuProfile";
import cookies from "js-cookie";
import i18next from "i18next";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box } from "@mui/system";

import i18n from "../../services/i18n";

const StyleLink = styled(Link)(({ theme }) => ({
  padding: theme.spacing(3, 1, 3, 0),
  display: { xs: "none", md: "flex" },
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  ...theme.mixins.toolbar,
  zIndex: 1101,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  flexGrow: 0.5,
  justifyContent: "center",
  display: "flex",
  direction: "ltr",
}));

function Header({
  categories,
  isConnected,
  currentAccount,
  // onDisconnect,
  balance,
  isConnecting,
  onLoginHandler,
  appData,
  currentUser,
  profileAccount,
  handleLangClick,
}) {
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "uk",
    },
    {
      code: "ar",
      name: "العربية",
      dir: "rtl",
      country_code: "uae",
    },
  ];

  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const [alignment, setAlignment] = React.useState(
    currentLanguage.country_code
  );

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.documentElement.lang = i18n.t("lang");
    document.title = i18n.t("appTitle");
    const el = document.getElementById("root");
    el.scrollIntoView({ behavior: "smooth" });
    if (i18n.t("lang") === "ar") {
      document.body.style.fontFamily = "iran-sans";
    }
  }, [currentLanguage]);
  function handleLangSet(lngSelect) {
    if (lngSelect === "ar") {
      document.body.style.fontFamily = "iran-sans";
    } else {
      document.body.style.fontFamily = `"Roboto","Helvetica","Arial",sans-serif`;
    }
  }

  return (
    <StyledAppBar>
      <Container>
        <Toolbar disableGutters>
          <StyleLink href="/">
            <img src="/images/Nftcup_Logo.png" alt={i18n.t("appTitle")} />
          </StyleLink>
          <StyledBox sx={{}}>
            <ToggleButtonGroup
              color="secondary"
              value={alignment}
              exclusive
              variant="contained"
              onChange={(event, newAlignment) => {
                setAlignment(newAlignment);
                handleLangClick(newAlignment);
                handleLangSet(newAlignment);
              }}
              aria-label="Platform"
              size="small"
            >
              {languages.map(({ code, name, country_code }) => (
                <ToggleButton
                  key={country_code}
                  onClick={() => {
                    i18next.changeLanguage(code);
                  }}
                  value={code}
                  sx={{
                    fontFamily:
                      code === "en"
                        ? `"Roboto","Helvetica","Arial",sans-serif`
                        : "iran-sans",
                  }}
                >
                  {name}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </StyledBox>
          <Menu
            categories={categories}
            currentUser={currentUser}
            profileAccount={profileAccount}
          />
          <MenuProfile
            isConnected={isConnected}
            currentAccount={currentAccount}
            // onDisconnect={onDisconnect}
            balance={balance}
            isConnecting={isConnecting}
            onLoginHandler={onLoginHandler}
            appData={appData}
            profileAccount={profileAccount}
          />
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Header;
