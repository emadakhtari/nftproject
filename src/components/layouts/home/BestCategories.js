import React from "react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import { Typography, Grid, Skeleton } from "@mui/material";
// import Buttons from "../../elements/items/Buttons";
import CategoryItem from "../../elements/items/CategoryItem";
import BestCategoriesSkeleton from "../../elements/skeleton/BestCategoriesSkeleton";
import { useTranslation } from "react-i18next";

const StyleFullWidthContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
const StyleTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.darker,
  display: "flex",
}));
const BestCategoriesHeader = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));
// const BestCategoriesButton = styled("div")(({ theme }) => ({
//   display: "flex",
//   "& .MuiButtonBase-root": {
//     paddingRight: theme.spacing(2),
//     paddingLeft: theme.spacing(2),
//   },
// }));

// const SkeletonButtons = styled(Skeleton)(({ theme }) => ({
//   width: "80.27px",
//   maxWidth: "80.27px",
//   height: "30.75px",
//   borderRadius: 15,
// }));

function BestCategories({ bestCategories, loadingBestCategories }) {
  const { t } = useTranslation();

  return (
    <StyleFullWidthContainer
      sx={{
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <BestCategoriesHeader>
          {loadingBestCategories ? (
            <>
              <StyleTitle variant="subtitle1" textAlign="justify">
                {t("BestCategories")}
              </StyleTitle>
              {/* <BestCategoriesButton>
                <Buttons
                  text={"View All"}
                  link="http://test.com"
                  size={"small"}
                  variant={"contained"}
                  color={"secondary"}
                />
              </BestCategoriesButton> */}
            </>
          ) : (
            <>
              <StyleTitle
                variant="h3"
                textAlign="justify"
                display="block"
                sx={{ paddingBottom: "0", height: 28 }}
              >
                <Skeleton
                  display="block"
                  variant="text"
                  animation="pulse"
                  width={127}
                  sx={{ transformOrigin: "0 0", transform: "unset" }}
                ></Skeleton>
              </StyleTitle>
              {/* <BestCategoriesButton>
                <SkeletonButtons
                  variant="rounded"
                  animation="pulse"
                ></SkeletonButtons>
              </BestCategoriesButton> */}
            </>
          )}
        </BestCategoriesHeader>
        {loadingBestCategories ? (
          <>
            <Grid
              container
              spacing={4}
              sx={{
                py: 4,
              }}
            >
              {bestCategories.map((item, index) => (
                <Grid item md={3} sm={6} key={item.id}>
                  <CategoryItem
                    itemHref={`/Category/${item.id}`}
                    itemImage={item.thumb}
                    itemTitle={item.title}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <BestCategoriesSkeleton />
        )}
      </Container>
    </StyleFullWidthContainer>
  );
}

export default BestCategories;
