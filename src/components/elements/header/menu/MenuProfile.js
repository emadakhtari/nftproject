import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuItems from "./MenuItems";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CloseIcon from "@mui/icons-material/Close";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { toast, Toaster, ToastBar } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const StyleButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  boxShadow: "0 0 0 0 rgb(0 0 0 / 20%)",
  direction: "ltr",
  ".MuiButtonGroup-grouped": {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 15,
    color: theme.palette.primary.main,
    borderColor: `${theme.palette.primary.main} !important`,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.primary,
    },
  },
}));

const StyleMenu = styled(Menu)(({ theme }) => ({
  ".MuiPaper-root": {
    backgroundColor: theme.palette.background.default,
    borderRadius: 10,
  },
}));
const ProfileMenuItem = styled("div")(({ theme }) => ({
  ".MuiTypography-root": {
    display: "block",
    margin: 5,
  },
}));

function MenuProfile({
  isConnected,
  currentAccount,
  // onDisconnect,
  balance,
  isConnecting,
  onLoginHandler,
  appData,
  profileAccount,
}) {
  const { t } = useTranslation();
  // Profile
  const menuItems = [
    {
      id: 1,
      title: t("Profile"),
      link: "/Profile",
      icon: "../../../images/svg/allnfts-light.svg",
    },
    // {
    //   id: 2,
    //   title: "Favorites",
    //   link: "#",
    //   icon: "../../../images/svg/allnfts-light.svg",
    // },
    // {
    //   id: 3,
    //   title: "Watchlist",
    //   link: "#",
    //   icon: "../../../images/svg/allnfts-light.svg",
    // },
    // {
    //   id: 4,
    //   title: "My Collection",
    //   icon: "../../../images/svg/allnfts-light.svg",
    // },
    // {
    //   id: 5,
    //   title: "Settings",
    //   link: "#",
    //   icon: "../../../images/svg/allnfts-light.svg",
    // },
  ];

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // React.useEffect(() => {
  //   console.log(appData.profileSelect.avatar);
  // });

  if (profileAccount != null) {
    // console.log(profileAccount.name);
    const str = profileAccount.name;
    const words = str.split(" ");
    var firstName = words[0];
    var lastName = words[1];
    if (words[1]) {
      var intials = firstName.charAt(0) + lastName.charAt(0);
    } else {
      // eslint-disable-next-line
      var intials = profileAccount.name;
    }
  }

  const handleNotConnect = () => {
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
  };

  return (
    <>
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
      <Box sx={{ flexGrow: 0 }}>
        <StyleButtonGroup variant="contained" aria-label="split button">
          {isConnected && (
            <>
              <Tooltip title={t("OpenProfile")}>
                <Button
                  size="small"
                  aria-label={t("OpenProfile")}
                  aria-haspopup="menu"
                  onClick={handleOpenUserMenu}
                >
                  <PersonOutlineIcon />
                </Button>
              </Tooltip>
            </>
          )}
          {!isConnected && (
            <>
              <Button
                size="small"
                aria-label={t("OpenProfile")}
                aria-haspopup="menu"
                onClick={handleNotConnect}
              >
                <PersonOutlineIcon />
              </Button>
              <Button onClick={onLoginHandler}>
                <Typography variant="caption">{t("LinkWallet")}</Typography>
              </Button>
            </>
          )}
          {isConnected && (
            <Tooltip title={`${balance} ETH`}>
              <Button
              //  onClick={onDisconnect}
              >
                <Typography variant="caption">
                  {currentAccount &&
                    `${currentAccount.slice(0, 6)}...${currentAccount.slice(
                      currentAccount.length - 4,
                      currentAccount.length
                    )}`}
                </Typography>
              </Button>
            </Tooltip>
          )}
        </StyleButtonGroup>
      </Box>
      {isConnected && (
        <StyleMenu
          sx={{ mt: "5px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <ListItem component="div" disablePadding>
            <ListItem sx={{ height: 56 }}>
              {profileAccount && (
                <ListItemText
                  primary={profileAccount.name}
                  primaryTypographyProps={{
                    color: "secondary",
                    fontWeight: "small",
                    variant: "subtitle2",
                    textAlign: "center",
                  }}
                  // secondary={word_2}
                  // secondaryTypographyProps={{
                  //   color: "text",
                  //   fontWeight: "small",
                  //   variant: "subtitle2",
                  //   textAlign: "center",
                  // }}
                />
              )}
            </ListItem>
            <ListItemAvatar>
              {profileAccount &&
                (profileAccount.avatar ? (
                  <Avatar
                    src={profileAccount.avatar}
                    alt={profileAccount.name}
                  />
                ) : (
                  <Avatar>{intials}</Avatar>
                ))}
            </ListItemAvatar>
          </ListItem>
          <Divider />
          <ProfileMenuItem>
            {menuItems.map((setting) => (
              <MenuItems
                key={setting.id}
                id={setting.id}
                title={setting.title}
                link={setting.link}
                icon={setting.icon}
              />
            ))}
          </ProfileMenuItem>
        </StyleMenu>
      )}
    </>
  );
}

export default MenuProfile;
