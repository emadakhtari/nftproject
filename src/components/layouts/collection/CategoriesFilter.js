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

function CategoriesFilter(props) {
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
  const handleClick = (event, newCategory) => {
    props.sendData({
      status: props.crStatus,
      price: props.price,
      category: newCategory,
    });
  };
  const { t } = useTranslation();

  return (
    <StyleFormControl>
      <StyleFormLabel id="category">{t("Categories")}</StyleFormLabel>
      <RadioGroup
        defaultValue="all"
        aria-labelledby="category"
        name="category"
        onChange={handleClick}
        value={props.category}
      >
        <StyleFormControlLabel
          value="all"
          control={<BpRadio />}
          labelPlacement="start"
          label={t("AllCategories")}
        />
        <StyleFormControlLabel
          value="1"
          control={<BpRadio />}
          labelPlacement="start"
          label="Cat 1"
        />
        <StyleFormControlLabel
          value="2"
          control={<BpRadio />}
          labelPlacement="start"
          label="Cat 2"
        />
        <StyleFormControlLabel
          value="3"
          control={<BpRadio />}
          labelPlacement="start"
          label="Cat 3"
        />
        <StyleFormControlLabel
          value="4"
          control={<BpRadio />}
          labelPlacement="start"
          label="Cat 4"
        />
        <StyleFormControlLabel
          value="5"
          control={<BpRadio />}
          labelPlacement="start"
          label="Cat 5"
        />
      </RadioGroup>
    </StyleFormControl>
  );
}

export default CategoriesFilter;
