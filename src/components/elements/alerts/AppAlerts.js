import React, { useEffect } from "react";
import { Link, Typography, Box } from "@mui/material";
import { toast } from "react-hot-toast";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useTranslation } from "react-i18next";

function AppAlerts({
  errorMetaMask,
  openEmail,
  message,
  openNonEthereumError,
  noWalletError,
  multipleError,
  homeError,
  successLoggin,
}) {
  const { t } = useTranslation();
  const thisFunction = function () {
    return "top-left";
  };
  let position = thisFunction();

  useEffect(() => {
    if (openEmail) {
      toast.error(
        <Typography component="span">
          {t("completeProfile")}
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
          {t("first")}
        </Typography>,
        {
          duration: 8000,
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
    }
    if (errorMetaMask) {
      toast.error(<Typography component="span">{errorMetaMask}</Typography>, {
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
    }
    if (message) {
      toast.error(<Typography component="span">{message}</Typography>, {
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
    }
    if (openNonEthereumError) {
      toast.error(
        <Typography component="span">{t("NonEthereum")}</Typography>,
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
    }
    if (noWalletError) {
      toast.error(
        <Box>
          <Typography color="warning.main" variant="subtitle1">
            {t("walletNotRecognized")}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {t("canDownload")}
            <Link
              color="secondary.light"
              target="_blank"
              href="https://metamask.io/download/"
              sx={{
                paddingLeft: "5px",
                paddingRight: "5px",
                fontWeight: "bold",
              }}
            >
              {t("link")}
            </Link>
          </Typography>
        </Box>,
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
    }
    if (multipleError) {
      toast.error(
        <Typography component="span">{t("NotWindowEthereum")}</Typography>,
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
    }
    if (homeError) {
      toast.error(<Typography component="span">{homeError}</Typography>, {
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
    }
    if (successLoggin) {
      toast.success(
        <Typography component="span">{t("successfullyLogged")}</Typography>,
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
    }
  }, [
    openEmail,
    errorMetaMask,
    message,
    openNonEthereumError,
    noWalletError,
    multipleError,
    homeError,
    successLoggin,
    position,
    t,
  ]);
}

export default AppAlerts;
