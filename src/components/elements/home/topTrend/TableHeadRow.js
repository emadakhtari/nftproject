import React from "react";
import { styled } from "@mui/material/styles";
import { Skeleton, TableCell, TableRow } from "@mui/material";
import { useTranslation } from "react-i18next";

const StyleTableRow = styled(TableRow)(({ theme }) => ({
  border: 0,
}));
const StyleTableHeadTableCell = styled(TableCell)(({ theme }) => ({
  border: 0,
  fontSize: 11,
}));

function TableHeadRow({ loadingOnChangeCat, loadingTopTrend }) {
  const { t } = useTranslation();

  return (
    <>
      <StyleTableRow>
        <StyleTableHeadTableCell width={84}>
          {loadingOnChangeCat ? (
            <Skeleton animation="pulse" width="100%" />
          ) : loadingTopTrend ? (
            t("RANK")
          ) : (
            <Skeleton animation="pulse" width="100%" />
          )}
        </StyleTableHeadTableCell>
        <StyleTableHeadTableCell>
          {loadingOnChangeCat ? (
            <Skeleton animation="pulse" width="100%" />
          ) : loadingTopTrend ? (
            "NFT"
          ) : (
            <Skeleton animation="pulse" width="100%" />
          )}
        </StyleTableHeadTableCell>
        <StyleTableHeadTableCell>
          {loadingOnChangeCat ? (
            <Skeleton animation="pulse" width="100%" />
          ) : loadingTopTrend ? (
            t("FLOORPRICE")
          ) : (
            <Skeleton animation="pulse" width="100%" />
          )}
        </StyleTableHeadTableCell>
        <StyleTableHeadTableCell>
          {loadingOnChangeCat ? (
            <Skeleton animation="pulse" width="100%" />
          ) : loadingTopTrend ? (
            t("VOLUME")
          ) : (
            <Skeleton animation="pulse" width="100%" />
          )}
        </StyleTableHeadTableCell>
      </StyleTableRow>
    </>
  );
}

export default TableHeadRow;
