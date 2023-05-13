import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import MenuDesktop from "./menu/MenuDesktop";
import MenuMobile from "./menu/MenuMobile";
import SearchBar from "./search/SearchBar";
const MenuContents = styled("div")(({ theme }) => ({
  padding: theme.spacing(0),
  display: "flex",
  flexGrow: 1,
  justifyContent: "space-evenly",
  justifyItems: "center",
}));

function AppBar({ categories, currentUser, profileAccount }) {
  const [showMenuDesktop, setShowMenuDesktop] = useState(false);
  const [showMenuTablet, setShowMenuTablet] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const handleShowMenu = () => {
    if (window.innerWidth <= 1024) {
      setShowMenuDesktop(false);
      setShowMenuTablet(true);
      setShowMenuMobile(true);
    } else {
      setShowMenuDesktop(true);
      setShowMenuTablet(false);
      setShowMenuMobile(false);
    }
    if (window.innerWidth <= 768) {
      setShowMenuMobile(false);
    } else {
      setShowMenuMobile(true);
    }
  };
  window.addEventListener("resize", handleShowMenu);
  useEffect(() => {
    handleShowMenu();
  }, []);
  return (
    <>
      {showMenuMobile && <SearchBar />}
      <MenuContents>
        {showMenuDesktop && (
          <MenuDesktop
            categories={categories}
            currentUser={currentUser}
            profileAccount={profileAccount}
          />
        )}
        {showMenuTablet && (
          <MenuMobile
            categories={categories}
            currentUser={currentUser}
            profileAccount={profileAccount}
          />
        )}
      </MenuContents>
    </>
  );
}

export default AppBar;
