import React from "react";
import { styled } from "@mui/material/styles";
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Container } from "@mui/system";
import { useTranslation } from "react-i18next";

const StyleFooter = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));
const StyleGrid = styled(Grid)(({ theme }) => ({
  alignItems: "end",
}));
const TypographyContainer = styled("div")(({ theme }) => ({}));
const Logo = styled("div")(({ theme }) => ({
  padding: theme.spacing(3, 1, 3, 0),
  display: { xs: "none", md: "flex" },
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
}));
const StyleMenuBottomContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
}));
const StyleMenuBottom = styled("div")(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(0, 2),
}));

const StyleListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(0),
}));
const StyleListItemTextHead = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 900,
}));
const StyleListItemText = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.primary.contrastText,
  },
}));
const StyleListItemHead = styled(ListItem)(({ theme }) => ({
  "& .MuiTypography-root": {
    fontWeight: 900,
    fontSize: "1rem",
  },
}));
const StyleListItem = styled(ListItem)(({ theme }) => ({
  "& .MuiTypography-root": {
    fontSize: "0.875rem",
  },
}));

function Footer() {
  const { t } = useTranslation();

  return (
    <StyleFooter
      sx={{
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <StyleGrid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Logo>
              <img src="/images/Nftcup-logo-Footer.png" alt={t("appTitle")} />
            </Logo>
          </Grid>
          <Grid item xs={12} md={3}>
            <TypographyContainer>
              <Typography variant="subtitle2" gutterBottom color="primary">
                {t("PrivacyPolicy")}
              </Typography>
              <Typography variant="subtitle2" gutterBottom color="primary">
                {t("TermsOfService")}
              </Typography>
            </TypographyContainer>
          </Grid>
          <Grid item xs={12} md={9}>
            <StyleMenuBottomContainer>
              <StyleMenuBottom>
                <nav>
                  <List>
                    <StyleListItemHead disablePadding>
                      <StyleListItemTextHead
                        component="span"
                        primary={t("Learn")}
                      />
                    </StyleListItemHead>
                    <StyleListItem disablePadding>
                      <StyleListItemButton component="a" href="#">
                        <StyleListItemText primary={t("Create")} />
                      </StyleListItemButton>
                    </StyleListItem>
                    <StyleListItem disablePadding>
                      <StyleListItemButton component="a" href="#">
                        <StyleListItemText primary={t("Collect")} />
                      </StyleListItemButton>
                    </StyleListItem>
                    <StyleListItem disablePadding>
                      <StyleListItemButton component="a" href="#">
                        <StyleListItemText primary={t("Sell")} />
                      </StyleListItemButton>
                    </StyleListItem>
                  </List>
                </nav>
              </StyleMenuBottom>
              <StyleMenuBottom>
                <nav>
                  <List>
                    <StyleListItemHead disablePadding>
                      <StyleListItemTextHead
                        component="span"
                        primary={t("Company")}
                      />
                    </StyleListItemHead>
                    <StyleListItem disablePadding>
                      <StyleListItemButton component="a" href="#">
                        <StyleListItemText primary={t("Careers")} />
                      </StyleListItemButton>
                    </StyleListItem>
                    <StyleListItem disablePadding>
                      <StyleListItemButton component="a" href="#">
                        <StyleListItemText primary={t("HelpCenter")} />
                      </StyleListItemButton>
                    </StyleListItem>
                    <StyleListItem disablePadding>
                      <StyleListItemButton component="a" href="#">
                        <StyleListItemText primary={t("Subscribe")} />
                      </StyleListItemButton>
                    </StyleListItem>
                  </List>
                </nav>
              </StyleMenuBottom>
              <StyleMenuBottom>
                <nav>
                  <List>
                    <StyleListItemHead disablePadding>
                      <StyleListItemTextHead
                        component="span"
                        primary={t("Connect")}
                      />
                    </StyleListItemHead>
                    <StyleListItem disablePadding>
                      <StyleListItemButton component="a" href="#">
                        <StyleListItemText primary={t("Twitter")} />
                      </StyleListItemButton>
                    </StyleListItem>
                    <StyleListItem disablePadding>
                      <StyleListItemButton component="a" href="#">
                        <StyleListItemText primary={t("Instagram")} />
                      </StyleListItemButton>
                    </StyleListItem>
                    <StyleListItem disablePadding>
                      <StyleListItemButton component="a" href="#">
                        <StyleListItemText primary={t("Facebook")} />
                      </StyleListItemButton>
                    </StyleListItem>
                  </List>
                </nav>
              </StyleMenuBottom>
            </StyleMenuBottomContainer>
          </Grid>
        </StyleGrid>
      </Container>
    </StyleFooter>
  );
}

export default Footer;
