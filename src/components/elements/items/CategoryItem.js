import React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const StyleCard = styled(Card)(({ theme }) => ({
  background: "none",
  maxWidth: "100%",
  position: "relative",
}));
const StyleCardActionArea = styled(CardActionArea)(({ theme }) => ({
  "&:hover": {
    opacity: "0.8",
  },
}));
const StyleCardMedia = styled(CardMedia)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  border: "2px solid #000",
}));
const StyleCardContent = styled(CardContent)(({ theme }) => ({
  background: theme.palette.primary.main,
  width: "90%",
  position: "absolute",
  right: 0,
  bottom: 0,
  margin: "5%",
  padding: theme.spacing(1),
  borderRadius: 10,
  textAlign: "center",
}));
const StyleCardContentTypography = styled(Typography)(({ theme }) => ({
  display: "inline",
  padding: theme.spacing(0.5, 1),
}));
function CategoryItem({ itemHref, itemImage, itemTitle }) {
  return (
    <StyleCard elevation={0}>
      <StyleCardActionArea href={itemHref}>
        <StyleCardMedia
          component="img"
          height="100%"
          image={itemImage}
          alt={itemTitle}
        />
        <StyleCardContent>
          <StyleCardContentTypography
            variant="h5"
            component="span"
            color="secondary"
          >
            {itemTitle}
          </StyleCardContentTypography>
        </StyleCardContent>
      </StyleCardActionArea>
    </StyleCard>
  );
}

export default CategoryItem;
