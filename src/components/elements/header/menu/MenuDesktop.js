import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, IconButton, Typography } from "@mui/material";

import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import MenuItems from "./MenuItems";
import CloseIcon from "@mui/icons-material/Close";
import { toast, Toaster, ToastBar } from "react-hot-toast";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// const CascadingContextExplore = createContext({
//   parentExploreState: null,
//   rootExploreState: null,
// });

const StyleButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  "&:hover": {
    color: theme.palette.text.secondary,
  },
  "&[aria-controls='exploreMenu']": {
    color: theme.palette.text.secondary,
  },
}));

const MenuDesktop = ({ categories, currentUser, profileAccount }) => {
  const { t } = useTranslation();
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

  const handleNotProfileComplate = () => {
    toast.error(
      <Typography component="span">
        {t("accessProfile")}
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
          {t("PROFILE")}
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

  const [isMouse, toggleMouse] = React.useState(false);
  const toggleMouseMenu = () => {
    toggleMouse(!isMouse);
    // toggleMouse(true);
  };
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  // console.log(localStorage.getItem("user"));
  return (
    <>
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

        <motion.div
          onMouseEnter={toggleMouseMenu}
          onMouseLeave={toggleMouseMenu}
        >
          <StyleButton>{t("EXPLORE")}</StyleButton>
          {isMouse && (
            <motion.div
              className="sub-menu"
              initial="exit"
              animate={isMouse ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              {categories.map((menu) => (
                <MenuItems
                  key={menu.id}
                  id={menu.id}
                  title={menu.title}
                  link={`/Category/${menu.id}`}
                  icon={menu.icon}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </>
      <>
        {localStorage.getItem("user") ? (
          profileAccount ? (
            profileAccount.email ? (
              <StyleButton href="/Create" sx={{ boxShadow: 0 }}>
                {t("CREATE")}
              </StyleButton>
            ) : (
              <StyleButton
                onClick={handleNotProfileComplate}
                sx={{ boxShadow: 0 }}
              >
                {t("CREATE")}
              </StyleButton>
            )
          ) : (
            <StyleButton
              onClick={handleNotProfileComplate}
              sx={{ boxShadow: 0 }}
            >
              {t("CREATE")}
            </StyleButton>
          )
        ) : (
          <StyleButton onClick={handleNotConnect} sx={{ boxShadow: 0 }}>
            {t("CREATE")}
          </StyleButton>
        )}
      </>
    </>
  );
};

export default MenuDesktop;
