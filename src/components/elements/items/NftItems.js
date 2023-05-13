import React from "react";
import { styled } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import Buttons from "./Buttons";

const StyleCard = styled(Card)(({ theme }) => ({
  background: "none",
  maxWidth: "100%",
  position: "relative",
}));
const StyleCardMedia = styled(CardMedia)(({ theme }) => ({
  borderRadius: 20,
}));
const StyleCardMediaCreate = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(0.5),
  display: "flex",
  alignItems: "start",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
    textAlign: "center",
  },
}));
const StyleCreateByBox = styled(Box)(({ theme }) => ({
  display: "flex",
  paddingBottom: 2,
  [theme.breakpoints.down("sm")]: {
    flexFlow: "column",
    paddingLeft: 0,
    margin: "0 auto",
  },
}));
const StyleCreateBy = styled(Typography)(({ theme }) => ({
  lineHeight: "32px",
}));
const StyleChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  marginLeft: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
  },
}));
function NftItems({ itemHref, itemImage, itemTitle, description, createdBy }) {
  return (
    <StyleCard elevation={0}>
      <StyleCardMedia component="img" image={itemImage} alt={itemTitle} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="secondary">
          {itemTitle}
        </Typography>
        <StyleCardMediaCreate
          sx={{
            pl: 1,
            pb: 1,
          }}
        >
          <StyleCreateByBox>
            <StyleCreateBy
              variant="body2"
              color="primary.contrastText"
              component="p"
            >
              Created By :
            </StyleCreateBy>
            <StyleChip
              avatar={<Avatar alt={createdBy} src={itemImage} />}
              label={createdBy}
            />
          </StyleCreateByBox>
          <Box sx={{ display: "flex", width: "100%", pt: 2 }}>
            <Buttons
              text={"View Nft"}
              link={itemHref}
              size={"small"}
              variant={"contained"}
              color={"secondary"}
            />
          </Box>
        </StyleCardMediaCreate>
      </CardContent>
    </StyleCard>
  );
}

export default NftItems;
