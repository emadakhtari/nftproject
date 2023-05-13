import * as React from "react";
import { styled } from "@mui/material/styles";
import { Typography, MenuItem, Stack, Link } from "@mui/material";

const StyleMenuItem = styled(MenuItem)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  minWidth: 150,
  borderRadius: 10,
  textDecoration: "none",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
}));

const StyleDropDownMenuIcon = styled("span")(({ theme }) => ({
  margin: theme.spacing(0, 1),
  display: "flex",
  "& img": {
    with: 24,
    height: 24,
    display: "block",
  },
}));
const StyleLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  "&:hover": {
    textDecoration: "none",
  },
}));

function MenuItems({ title, icon, link }) {
  return (
    <StyleLink href={link}>
      <StyleMenuItem>
        <Stack direction="row" alignItems="center" gap={1}>
          <StyleDropDownMenuIcon>
            <img src={icon} alt={title} />
          </StyleDropDownMenuIcon>
          <Typography textAlign="center" sx={{ display: "block" }}>
            {title}
          </Typography>
        </Stack>
      </StyleMenuItem>
    </StyleLink>
  );
}

export default MenuItems;
