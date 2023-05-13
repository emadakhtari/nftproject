import "./dropDownAnim.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ExploreIcon from "@mui/icons-material/Explore";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import {
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchHeader from "../search/SearchBar";
import CloseIcon from "@mui/icons-material/Close";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { toast, Toaster, ToastBar } from "react-hot-toast";
function MenuMobile({ categories, currentUser, profileAccoun }) {
  return (
    <Navbar>
      <NavItem categories={categories} icon={<MenuIcon />}></NavItem>
    </Navbar>
  );
}
const StyleNavbarNav = styled(List)(({ theme }) => ({
  margin: 0,
  padding: 0,
  maxWidth: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-end",
}));
function Navbar(props) {
  return (
    <nav aria-label="main mailbox folders">
      <StyleNavbarNav>{props.children}</StyleNavbarNav>
    </nav>
  );
}

function NavItem(props) {
  console.log(props);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const { onClickOutside } = props;
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  const StyleItem = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
  }));
  const StyleMenuItem = styled(Link)(({ theme }) => ({
    height: 50,
    display: "flex",
    alignItems: "center",
    borderRadius: theme.spacing(1),
    transition: "background 500ms",
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
    gap: theme.spacing(1),
    textDecoration: "none",
    cursor: "pointer",
    "& img": {
      width: 24,
      height: 24,
    },
    "&:hover": {
      backgroundColor: theme.palette.text.secondary,
      color: theme.palette.primary.main,
      "& span": {
        color: theme.palette.primary.main,
      },
    },
  }));
  const StyleIconLeft = styled("span")(({ theme }) => ({
    display: "flex",
    color: theme.palette.text.secondary,
  }));
  const StyleIconRight = styled("span")(({ theme }) => ({
    display: "flex",
    position: "absolute",
    right: theme.spacing(2),
    color: theme.palette.text.secondary,
  }));
  function DropdownItem(props) {
    return (
      <StyleItem>
        <StyleMenuItem
          href={props.link}
          onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        >
          <StyleIconLeft>{props.leftIcon}</StyleIconLeft>
          {props.children}
          <StyleIconRight>{props.rightIcon}</StyleIconRight>
        </StyleMenuItem>
      </StyleItem>
    );
  }
  function DropdownItemCat(props) {
    return (
      <StyleItem>
        <StyleMenuItem
          href={props.link}
          onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        >
          <StyleIconLeft>
            <img src={props.leftIcon} alt={props.children} />
          </StyleIconLeft>
          {props.children}
          <StyleIconRight>{props.rightIcon}</StyleIconRight>
        </StyleMenuItem>
      </StyleItem>
    );
  }

  const StyleIconButton = styled(Link)(({ theme }) => ({
    width: "40px",
    height: "40px",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "50%",
    padding: 5,
    margin: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "filter 300ms",
    "& svg": {
      fill: theme.palette.primary.main,
      width: 20,
      height: 20,
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      cursor: "pointer",
    },
  }));
  const StyleMobileSearch = styled("div")(({ theme }) => ({
    padding: theme.spacing(2, 2, 1, 2),
  }));

  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const handleShowMenu = () => {
    if (window.innerWidth <= 768) {
      setShowMenuMobile(true);
    } else {
      setShowMenuMobile(false);
    }
  };

  window.addEventListener("resize", handleShowMenu);
  useEffect(() => {
    handleShowMenu();
  }, []);

  const handleNotConnect = () => {
    toast.error(
      <Typography component="span">
        To access this section, first connect to your
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
          WALLET
        </Box>
        . Thanks
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
  };
  const handleNotProfileComplate = () => {
    toast.error(
      <Typography component="span">
        To access this section, first complete your
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
          PROFILE
        </Box>
        . Thanks
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
  };


  return (
    <ListItem>
      <Toaster>
          {(t) => (
            <ToastBar toast={t}>
              {({ icon, message }) => (
                <>
                  {icon}
                  {message}
                  {t.type !== "loading" && (
                    <IconButton
                      aria-label="close"
                      onClick={() => toast.dismiss(t.id)}
                      color="primary"
                    >
                      <CloseIcon />
                    </IconButton>
                  )}
                </>
              )}
            </ToastBar>
          )}
        </Toaster>

      <StyleIconButton to="#" onClick={() => setOpen(!open)}>
        {props.icon}
      </StyleIconButton>
      {open && (
        <div
          style={{
            height: menuHeight,
            position: "absolute",
            top: 58,
            width: 300,
            transform: "translateX(-45%)",
            boxShadow:
              "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
            backgroundColor: "#fff",
            borderRadius: 8,
            padding: 0,
            overflow: "hidden",
            transition: "height 500ms ease",
            zIndex: 10,
          }}
          ref={dropdownRef}
        >
          <CSSTransition
            in={activeMenu === "main"}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
            onEnter={calcHeight}
          >
            <div style={{ width: "100%" }}>
              {showMenuMobile && (
                <StyleMobileSearch>
                  <SearchHeader />
                </StyleMobileSearch>
              )}
              {localStorage.getItem("user") ? (
                props.profileAccount ? (
                  props.profileAccount.email ? (
                    <DropdownItem leftIcon={<AddBoxIcon />}>
                      CREATE
                    </DropdownItem>
                  ) : (
                    <DropdownItem
                      onClick={handleNotProfileComplate}
                      leftIcon={<AddBoxIcon />}
                    >
                      CREATE
                    </DropdownItem>
                  )
                ) : (
                  <DropdownItem
                    onClick={handleNotProfileComplate}
                    leftIcon={<AddBoxIcon />}
                  >
                    CREATE
                  </DropdownItem>
                )
              ) : (
                <DropdownItem
                  onClick={handleNotConnect}
                  leftIcon={<AddBoxIcon />}
                >
                  CREATE
                </DropdownItem>
              )}

              <DropdownItem
                leftIcon={<ExploreIcon />}
                rightIcon={<KeyboardDoubleArrowRightIcon />}
                goToMenu="explore"
              >
                EXPLORE
              </DropdownItem>
            </div>
          </CSSTransition>
          <CSSTransition
            in={activeMenu === "explore"}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}
          >
            <div style={{ width: "100%" }}>
              <DropdownItem
                goToMenu="main"
                leftIcon={<KeyboardDoubleArrowLeftIcon />}
              >
                <Typography variant="h6">Main</Typography>
              </DropdownItem>
              {props.categories.map((menu) => (
                <DropdownItemCat
                  key={menu.id}
                  link={`/Category/${menu.id}`}
                  leftIcon={menu.icon}
                >
                  {menu.title}
                </DropdownItemCat>
                // <MenuItems
                //   key={menu.id}
                //   id={menu.id}
                //   title={menu.title}
                //   link={menu.link}
                //   icon={menu.icon}
                // />
              ))}
            </div>
          </CSSTransition>
        </div>
      )}
    </ListItem>
  );
}

export default MenuMobile;
