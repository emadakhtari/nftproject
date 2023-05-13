import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import { Box, Button, FormControl, FormLabel, Input } from "@mui/material";
import { useTranslation } from "react-i18next";

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.secondary.main,
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },

    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 1,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 1,
  },

  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 11,
    background: "unset",
    padding: 0,
    width: 30,
    height: 30,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: theme.palette.secondary.dark,
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  },
}));

const StyleButton = styled(Button)(() => ({
  borderRadius: 15,
  width: "100%",
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

const StyleFormControl = styled(FormControl)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(4),
}));

const StyleFormLabel = styled(FormLabel)(({ theme }) => ({
  color: theme.palette.text.dark,
  paddingBottom: theme.spacing(6),
}));

export default function PriceFilter(props) {
  const marks = [
    {
      value: 0,
      label: "0 ET",
    },
    {
      value: 5,
      label: "5 ET",
    },
    {
      value: 10,
      label: "10 ET",
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }

  const [value, setValue] = useState(props.price);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const buttonClickHandler = () => {
    props.sendData({
      price: value,
      status: props.crStatus,
      category: props.category,
    });
  };
  const { t } = useTranslation();
  return (
    <StyleFormControl>
      <StyleFormLabel id="price-radios">{t("Price")}</StyleFormLabel>
      <AirbnbSlider
        slots={{ thumb: AirbnbThumbComponent }}
        getAriaLabel={(index) =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
        marks={marks}
        min={0}
        max={10}
        step={0.01}
        getAriaValueText={valuetext}
        valueLabelFormat={valuetext}
        valueLabelDisplay="on"
        defaultValue={props.price}
        onChange={handleSliderChange}
      />
      <Box sx={{ display: "flex", width: "100%", pt: 2 }}>
        <StyleButton
          size="small"
          variant="contained"
          color="primary"
          onClick={buttonClickHandler}
        >
          {t("Filter")}
        </StyleButton>
      </Box>
      <Box sx={{ display: "flex", width: "100%", pt: 2 }}>
        <Input type="hidden" value={value} size="small" onChange={handleInputChange} />
      </Box>
    </StyleFormControl>
  );
}
