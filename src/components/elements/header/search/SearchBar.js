import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { Box, IconButton, InputAdornment, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LoadingButton from "@mui/lab/LoadingButton";
import SearchItems from "./SearchItems";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import axios from "axios";
import { useTranslation } from "react-i18next";

const StyleSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 15,
  backgroundColor: alpha(theme.palette.primary.light, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.light, 1),
  },
  marginLeft: 0,
  marginRight: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("padding"),
    width: "100%",
  },
}));

const StyleSearchResponse = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.light, 1),
  borderRadius: 8,
  marginTop: theme.spacing(1),
  position: "absolute",
  width: "100%",
  right: "0",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: `calc(100% - ${theme.spacing(1)})`,
  },
}));

const StyleLoadingButton = styled(LoadingButton)(({ theme }) => ({
  width: "100%",
  height: 39,
  "& .MuiCircularProgress-root": {
    color: theme.palette.secondary.main,
  },
}));

const StyleSearchIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.error.light,
}));

function SearchBar() {
  const [showCloseSearch, setShowCloseSearch] = useState(false);
  const handleClickShowCloseSearch = (e) => {
    setShowCloseSearch(false);
    setSearchInput("");
    setNftItems(null);
    setCollections(null);
  };

  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [nftItems, setNftItems] = useState(null);
  const [collections, setCollections] = useState(null);

  function searchOnChange(event) {
    if (event.target.value) {
      setShowCloseSearch(true);
    } else {
      setShowCloseSearch(false);
    }

    // console.log(event.target.value);
    if (event.target.value.length > 2) {
      setLoading(true);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
          "Access-Control-Allow-Origin": "true",
        },
      };
      try {
        axios
          .post(
            process.env.REACT_APP_API_URL + "/api/searchBar",
            {
              search: event.target.value,
            },
            config
          )
          .then((response) => {
            setLoading(false);
            setNftItems(response.data.result.ListOfNftItems);
            setCollections(response.data.result.ListOfCollections);
            // console.log(response.data.result.ListOfCollections);
            // console.log(response.data.result);
          });
      } catch (err) {
        setLoading(false);
        if (err.response) {
          console.error(err.message);
        } else if (err.request) {
          console.error(err.request);
        } else {
          console.error(err);
        }
      }
    } else {
      setNftItems(null);
      setCollections(null);
      setLoading(false);
    }
    setSearchInput(event.target.value);
  }

  const { t } = useTranslation();

  // console.log(t("lang"));
  // console.log(i18n);
  return (
    <>
      <Box sx={{ flexGrow: 1, position: "relative" }}>
        <StyleSearch>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            sx={{
              "& .MuiInputBase-input": {
                padding: "8px",
                paddingLeft: `calc(1em + 32px)`,
              },
            }}
            placeholder={t("searchInput")}
            inputProps={{ "aria-label": "search" }}
            endAdornment={
              <InputAdornment position="start">
                {showCloseSearch && (
                  <StyleSearchIconButton
                    aria-label="toggle CloseSearch visibility"
                    onClick={handleClickShowCloseSearch}
                    edge="end"
                  >
                    <HighlightOffIcon />
                  </StyleSearchIconButton>
                )}
              </InputAdornment>
            }
            onChange={searchOnChange}
            value={searchInput}
          />
        </StyleSearch>
        {loading ? (
          <StyleSearchResponse>
            <StyleLoadingButton loading />
          </StyleSearchResponse>
        ) : collections || nftItems ? (
          <StyleSearchResponse>
            <SearchItems collections={collections} nftItems={nftItems} />
          </StyleSearchResponse>
        ) : null}
      </Box>
    </>
  );
}

export default SearchBar;
