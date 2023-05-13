import React from "react";

import { styled } from "@mui/material/styles";
import NFTAvatar from "../../../images/NFT_Avatar.jpg";
import {
  CardMedia,
  Skeleton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

const StyleTableRow = styled(TableRow)(({ theme }) => ({
  border: 0,
}));
const StyleTableCell = styled(TableCell)(({ theme }) => ({
  border: 0,
}));
const StyleTableCellNft = styled(TableCell)(({ theme }) => ({
  border: 0,
  display: "flex",
  alignItems: "center",
}));
const SkeletonCardMediaItemSkeleton = styled(Skeleton)(({ theme }) => ({
  borderBottomRightRadius: theme.spacing(3),
  borderBottomLeftRadius: theme.spacing(3),
  marginBottom: "8px",
  marginRight: "8px",
}));
const SkeletonCardMediaItem = styled("div")(({ theme }) => ({
  margin: theme.spacing(1, 0),
}));
const StyleCardMediaItemSkeleton = styled(CardMedia)(({ theme }) => ({
  borderBottomRightRadius: theme.spacing(3),
  borderBottomLeftRadius: theme.spacing(3),
  width: "50px",
}));

function TopTrendRowSkeleton() {
  return (
    <>
      <StyleTableRow
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <StyleTableCell component="th" scope="row">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
        <StyleTableCellNft align="left">
          <SkeletonCardMediaItem>
            <SkeletonCardMediaItemSkeleton
              animation="pulse"
              variant="rectangular"
            >
              <StyleCardMediaItemSkeleton
                component="img"
                image={NFTAvatar}
                alt="Loading"
              />
            </SkeletonCardMediaItemSkeleton>
          </SkeletonCardMediaItem>

          <Typography
            variant="subtitle1"
            noWrap
            component="span"
            sx={{
              width: "100%",
            }}
          >
            <Skeleton animation="pulse" width="100%" />
          </Typography>
        </StyleTableCellNft>
        <StyleTableCell align="left">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
        <StyleTableCell align="left">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
      </StyleTableRow>
      <StyleTableRow
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <StyleTableCell component="th" scope="row">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
        <StyleTableCellNft align="left">
          <SkeletonCardMediaItem>
            <SkeletonCardMediaItemSkeleton
              animation="pulse"
              variant="rectangular"
            >
              <StyleCardMediaItemSkeleton
                component="img"
                image={NFTAvatar}
                alt="Loading"
              />
            </SkeletonCardMediaItemSkeleton>
          </SkeletonCardMediaItem>

          <Typography
            variant="subtitle1"
            noWrap
            component="span"
            sx={{
              width: "100%",
            }}
          >
            <Skeleton animation="pulse" width="100%" />
          </Typography>
        </StyleTableCellNft>
        <StyleTableCell align="left">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
        <StyleTableCell align="left">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
      </StyleTableRow>
      <StyleTableRow
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <StyleTableCell component="th" scope="row">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
        <StyleTableCellNft align="left">
          <SkeletonCardMediaItem>
            <SkeletonCardMediaItemSkeleton
              animation="pulse"
              variant="rectangular"
            >
              <StyleCardMediaItemSkeleton
                component="img"
                image={NFTAvatar}
                alt="Loading"
              />
            </SkeletonCardMediaItemSkeleton>
          </SkeletonCardMediaItem>

          <Typography
            variant="subtitle1"
            noWrap
            component="span"
            sx={{
              width: "100%",
            }}
          >
            <Skeleton animation="pulse" width="100%" />
          </Typography>
        </StyleTableCellNft>
        <StyleTableCell align="left">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
        <StyleTableCell align="left">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
      </StyleTableRow>
      <StyleTableRow
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <StyleTableCell component="th" scope="row">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
        <StyleTableCellNft align="left">
          <SkeletonCardMediaItem>
            <SkeletonCardMediaItemSkeleton
              animation="pulse"
              variant="rectangular"
            >
              <StyleCardMediaItemSkeleton
                component="img"
                image={NFTAvatar}
                alt="Loading"
              />
            </SkeletonCardMediaItemSkeleton>
          </SkeletonCardMediaItem>

          <Typography
            variant="subtitle1"
            noWrap
            component="span"
            sx={{
              width: "100%",
            }}
          >
            <Skeleton animation="pulse" width="100%" />
          </Typography>
        </StyleTableCellNft>
        <StyleTableCell align="left">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
        <StyleTableCell align="left">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
      </StyleTableRow>
      <StyleTableRow
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <StyleTableCell component="th" scope="row">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
        <StyleTableCellNft align="left">
          <SkeletonCardMediaItem>
            <SkeletonCardMediaItemSkeleton
              animation="pulse"
              variant="rectangular"
            >
              <StyleCardMediaItemSkeleton
                component="img"
                image={NFTAvatar}
                alt="Loading"
              />
            </SkeletonCardMediaItemSkeleton>
          </SkeletonCardMediaItem>

          <Typography
            variant="subtitle1"
            noWrap
            component="span"
            sx={{
              width: "100%",
            }}
          >
            <Skeleton animation="pulse" width="100%" />
          </Typography>
        </StyleTableCellNft>
        <StyleTableCell align="left">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
        <StyleTableCell align="left">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
      </StyleTableRow>
      <StyleTableRow
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <StyleTableCell component="th" scope="row">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
        <StyleTableCellNft align="left">
          <SkeletonCardMediaItem>
            <SkeletonCardMediaItemSkeleton
              animation="pulse"
              variant="rectangular"
            >
              <StyleCardMediaItemSkeleton
                component="img"
                image={NFTAvatar}
                alt="Loading"
              />
            </SkeletonCardMediaItemSkeleton>
          </SkeletonCardMediaItem>

          <Typography
            variant="subtitle1"
            noWrap
            component="span"
            sx={{
              width: "100%",
            }}
          >
            <Skeleton animation="pulse" width="100%" />
          </Typography>
        </StyleTableCellNft>
        <StyleTableCell align="left">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
        <StyleTableCell align="left">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
      </StyleTableRow>
      <StyleTableRow
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <StyleTableCell component="th" scope="row">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
        <StyleTableCellNft align="left">
          <SkeletonCardMediaItem>
            <SkeletonCardMediaItemSkeleton
              animation="pulse"
              variant="rectangular"
            >
              <StyleCardMediaItemSkeleton
                component="img"
                image={NFTAvatar}
                alt="Loading"
              />
            </SkeletonCardMediaItemSkeleton>
          </SkeletonCardMediaItem>

          <Typography
            variant="subtitle1"
            noWrap
            component="span"
            sx={{
              width: "100%",
            }}
          >
            <Skeleton animation="pulse" width="100%" />
          </Typography>
        </StyleTableCellNft>
        <StyleTableCell align="left">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
        <StyleTableCell align="left">
          <Skeleton animation="pulse" width="100%" />
        </StyleTableCell>
      </StyleTableRow>
    </>
  );
}

export default TopTrendRowSkeleton;
