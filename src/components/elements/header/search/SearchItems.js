import React from "react";
import {
  Box,
  CardMedia,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const StyleSearchList = styled(List)(({ theme }) => ({
  paddingBottom: 0,
  "& .MuiListSubheader-root": {
    color: theme.palette.primary.contrastText,
    borderTopRightRadius: theme.spacing(1),
    borderTopLeftRadius: theme.spacing(1),
  },
}));

const StyleCardMediaItem = styled(CardMedia)(({ theme }) => ({
  borderBottomRightRadius: theme.spacing(3),
  borderBottomLeftRadius: theme.spacing(3),
  width: 25,
  margin: theme.spacing(1, 0),
}));

const StyleListItemButton = styled(ListItemButton)(({ theme }) => ({
  margin: "4px",
  paddingTop: 0,
  paddingBottom: 0,
  borderRadius: 8,
  "&:hover": {
    "& .MuiTypography-string": {
      color: theme.palette.primary.dark,
    },
    "& .MuiTypography-body2": {
      color: theme.palette.primary.main,
    },
  },
}));
const StyleListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 40,
}));
const StyleListItemText = styled(ListItemText)(({ theme }) => ({
  "& .MuiListItemText-secondary": {
    display: "flex",
    justifyContent: "space-between",
  },
  "& .MuiListItemText-primary": {
    color: theme.palette.text.dark,
  },
}));

const StyleCallectionMediaSearch = styled(CardMedia)(({ theme }) => ({
  width: 25,
  height: 25,
  borderRadius: 10,
  margin: theme.spacing(1, 0),
}));
const StyleSearchBox = styled(Box)(({ theme }) => ({
  maxHeight: 300,
  overflow: "auto",
}));

function SearchItems({ collections, nftItems }) {
  const { t } = useTranslation();

  return (
    <StyleSearchBox>
      {nftItems.length > 0 && (
        <StyleSearchList
          sx={{ width: "100%" }}
          subheader={<ListSubheader>{t("Items")}</ListSubheader>}
        >
          {nftItems.map((item, index) => (
            <StyleListItemButton
              alignItems="flex-start"
              key={index}
              href={`/NftItem/` + item.nft_address + `/` + item.token_id}
            >
              <StyleListItemIcon>
                <StyleCardMediaItem
                  component="img"
                  image={item.thumb}
                  alt={item.title}
                />
              </StyleListItemIcon>
              <StyleListItemText
                sx={{
                  display: "inline",
                  textAlign: "justify",
                }}
                primary={item.collection_title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{
                        display: "inline",
                        textAlign: "justify",
                      }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="string"
                      color="text.secondary"
                    >
                      {item.volume + " ETH"}
                    </Typography>
                  </React.Fragment>
                }
              />
            </StyleListItemButton>
          ))}
          <Divider variant="center" component="li" />
        </StyleSearchList>
      )}
      {collections.length > 0 && (
        <StyleSearchList
          sx={{ width: "100%" }}
          subheader={<ListSubheader>{t("Collections")}</ListSubheader>}
        >
          {collections.map((item, index) => (
            <StyleListItemButton
              alignItems="flex-start"
              key={index}
              href={`/Collection/` + item.id}
            >
              <StyleListItemIcon>
                <StyleCallectionMediaSearch
                  component="img"
                  image={item.thumb}
                  alt={item.title}
                />
              </StyleListItemIcon>
              <StyleListItemText
                sx={{
                  display: "inline",
                  textAlign: "justify",
                }}
                primary={item.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{
                        display: "inline",
                        textAlign: "justify",
                      }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.items + " Items"}
                    </Typography>
                  </React.Fragment>
                }
              />
            </StyleListItemButton>
          ))}
        </StyleSearchList>
      )}
      {!collections.length && !nftItems.length && (
        <>
          <Typography
            variant="subtitle1"
            component="p"
            mt={2}
            mb={2}
            align="center"
            color="primary.contrastText"
            noWrap
          >
            No items found
          </Typography>
        </>
      )}
    </StyleSearchBox>
  );
}

export default SearchItems;
