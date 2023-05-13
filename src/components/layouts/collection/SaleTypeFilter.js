import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useTranslation } from "react-i18next";

function SaleTypeFilter(props) {
  const { t } = useTranslation();
  const theme = useTheme();
  const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: theme.palette.primary.light,
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))",
    ".Mui-focusVisible &": {
      outline: `2px auto ${theme.palette.secondary.dark}`,
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: theme.palette.secondary.light,
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: theme.palette.secondary.light,
    },
  }));

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: theme.palette.secondary.main,
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: theme.palette.secondary.light,
    },
  });
  const StyleFormLabel = styled(FormLabel)({
    color: theme.palette.text.dark,
    paddingBottom: theme.spacing(1),
    "&.Mui-focused": {
      color: theme.palette.text.dark,
    }
  });
  const StyleFormControl = styled(FormControl)({
    width: "100%",
    padding: theme.spacing(4),
  });
  const StyleFormControlLabel = styled(FormControlLabel)({
    justifyContent: "space-between",
    marginLeft: 0,
    "& .MuiFormControlLabel-label": {
      fontSize: 14,
    },
  });

  function BpRadio(props) {
    return (
      <Radio
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    );
  }
  const handleClick = (event, newStatus) => {
    props.sendData({
      status: newStatus,
      price: props.price,
      category: props.category,
    });
  };
  return (
    <StyleFormControl>
      <StyleFormLabel id="Status">{t("SaleType")}</StyleFormLabel>
      <RadioGroup
        onChange={handleClick}
        value={props.crStatus}
        aria-labelledby="Status"
        name="Status"
      >
        <StyleFormControlLabel
          value="all"
          control={<BpRadio />}
          labelPlacement="start"
          label={t("viewAll")}
        />
        <StyleFormControlLabel
          value="new"
          control={<BpRadio />}
          labelPlacement="start"
          label={t("New")}
        />
        <StyleFormControlLabel
          value="buy_now"
          control={<BpRadio />}
          labelPlacement="start"
          label={t("ByNow")}
        />
        <StyleFormControlLabel
          value="has_offers"
          control={<BpRadio />}
          labelPlacement="start"
          label={t("Discount")}
        />
      </RadioGroup>
    </StyleFormControl>
  );
}

export default SaleTypeFilter;
