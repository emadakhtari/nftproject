import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

function Buttons({ link, text, size, variant, color }) {
  const StyleButton = styled(Button)(() => ({
    borderRadius: 15,
    width: "100%",
  }));

  return (
    <StyleButton size={size} variant={variant} color={color} href={link}>
      {text}
    </StyleButton>
  );
}

export default Buttons;
