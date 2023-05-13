import React from "react";
import {
  CardMedia,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { useNavigate } from "react-router-dom";
import TopTrendRowSkeleton from "../../skeleton/TopTrendRowSkeleton";
import TableHeadRow from "./TableHeadRow";
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast";

const StyleTableContainer = styled(TableContainer)(({ theme }) => ({
  background: "none",
}));

const StyleTableRow = styled(TableRow)(({ theme }) => ({
  border: 0,
  borderRadius: "20px",
  "& th:last-of-type ": {
    borderRadius: "20px 0 0 20px",
  },
  "& td:last-of-type": {
    borderRadius: "0 20px 20px 0",
  },
  "&:hover": {
    backgroundColor: alpha(theme.palette.secondary.main, 0.8),
    cursor: "pointer",
    "& .MuiTableCell-root": {
      color: theme.palette.primary.main,
    },
  },
}));
const StyleTableCell = styled(TableCell)(({ theme }) => ({
  border: 0,
}));
const StyleTableCellNft = styled(TableCell)(({ theme }) => ({
  border: 0,
  display: "flex",
  alignItems: "center",
}));

const StyleCardMediaItem = styled(CardMedia)(({ theme }) => ({
  borderBottomRightRadius: theme.spacing(3),
  borderBottomLeftRadius: theme.spacing(3),
  width: "50px",
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  marginRight: theme.spacing(1),
}));

function SecondSevenNft({
  categorySecondData,
  loadingOnChangeCat,
  loadingTopTrend,
  nftItemsTheSecondSeven,
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleRowClick = (row) => {
    if (row.token_id) {
      const el = document.getElementById("root");
      el.scrollIntoView({ behavior: "smooth" });
      navigate(`/NftItem/${row.nft_address}/${row.token_id}`);
    } else {
      toast.error(
        <Typography component="span">{t("tokenNotAvailable")}</Typography>,
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
  };
  return (
    <>
      <StyleTableContainer component={Paper} elevation={0}>
        <Table
          sx={{ minWidth: "100%" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableHeadRow
              loadingOnChangeCat={loadingOnChangeCat}
              loadingTopTrend={loadingTopTrend}
            />
          </TableHead>
          <TableBody>
            {loadingOnChangeCat ? (
              <TopTrendRowSkeleton />
            ) : loadingTopTrend ? (
              categorySecondData ? (
                categorySecondData.map((row) => (
                  <StyleTableRow
                    onClick={() => handleRowClick(row)}
                    key={row.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <StyleTableCell component="th" scope="row">
                      {row.id}
                    </StyleTableCell>
                    <StyleTableCellNft>
                      <StyleCardMediaItem
                        component="img"
                        image={row.thumb}
                        alt={row.title}
                      />
                      <Typography variant="subtitle1" noWrap component="span">
                        {row.title}
                      </Typography>
                    </StyleTableCellNft>
                    <StyleTableCell>{row.floor_price}</StyleTableCell>
                    <StyleTableCell>{row.volume}</StyleTableCell>
                  </StyleTableRow>
                ))
              ) : (
                nftItemsTheSecondSeven.map((row) => (
                  <StyleTableRow
                    onClick={() => handleRowClick(row)}
                    key={row.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <StyleTableCell component="th" scope="row">
                      {row.id}
                    </StyleTableCell>
                    <StyleTableCellNft>
                      <StyleCardMediaItem
                        component="img"
                        image={row.thumb}
                        alt={row.title}
                      />
                      <Typography variant="subtitle1" noWrap component="span">
                        {row.title}
                      </Typography>
                    </StyleTableCellNft>
                    <StyleTableCell>{row.floor_price}</StyleTableCell>
                    <StyleTableCell>{row.volume}</StyleTableCell>
                  </StyleTableRow>
                ))
              )
            ) : (
              <TopTrendRowSkeleton />
            )}
          </TableBody>
        </Table>
      </StyleTableContainer>
    </>
  );
}

export default SecondSevenNft;
