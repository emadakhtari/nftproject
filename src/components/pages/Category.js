import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Alert, Container, Grid, Snackbar } from "@mui/material";
import CategoryPageSkeleton from "../elements/skeleton/CategoryPageSkeleton";
import CategoryItem from "../elements/items/CategoryItem";
import { Box } from "@mui/system";

const Categories = () => {
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    getItems(pages);
    setPages((pages) => pages + 1);
    // eslint-disable-next-line
  }, []);

  const { id } = useParams();
  const Item = ({ children, reference }) => {
    return (
      <Grid ref={reference} item elevation={0} xs={12} sm={6} md={3}>
        {children}
      </Grid>
    );
  };
  const [openError, setOpenError] = useState(false);
  const [error, setError] = useState("");
  const getItems = async (page) => {
    setIsLoading(true);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "true",
      },
    };
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await axios
        .post(
          process.env.REACT_APP_API_URL + "/api/category",
          {
            category_id: id,
            _page: page,
            _limit: 8,
          },
          config
        )
        .then((resp) => {
          setItems([...items, ...resp.data.result.ListOfCollections]);
          setObj(resp.data.result.countCollection);
          setLoading(true);
          setIsLoading(false);
        });
    } catch (err) {
      if (err.response) {
        setOpenError(true);
        setError(err.message);
        // console.error(err.message);
      } else if (err.request) {
        setOpenError(true);
        setError(err.message);
        // console.error(err.message);
      } else {
        setOpenError(true);
        setError(err.message);
        // console.error(err.message);
      }
    }
  };
  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };
  const [obj, setObj] = useState([]);
  const observer = useRef();
  const tPage = obj / 6;
  const TOTAL_PAGES = Math.round(tPage + 1);
  const lastItemRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          if (pages < TOTAL_PAGES) {
            getItems(pages);
            setPages((pages) => pages + 1);
          } else {
            setHasMore(false);
          }
        }
      });

      if (node) observer.current.observe(node);
    },
    // eslint-disable-next-line
    [isLoading, hasMore]
  );

  return (
    <Box
      component="main"
      sx={{
        paddingTop: 12,
      }}
    >
      {openError && (
          <Snackbar
            open={openError}
            autoHideDuration={6000}
            onClose={handleCloseError}
          >
            <Alert
              onClose={handleCloseError}
              severity="error"
              sx={{ width: "100%" }}
            >
              {error}
            </Alert>
          </Snackbar>
        )}
      <Container
        maxWidth="lg"
        sx={{
          py: 8,
          minHeight: "100vh",
        }}
      >
        <Grid container spacing={8}>
          {loading ? (
            <>
              {items.map((user, index) =>
                index + 1 === items.length ? (
                  <Item reference={lastItemRef} key={index}>
                    <CategoryItem
                      itemHref={`/Collection/${user.id}`}
                      itemImage={user.thumb}
                      itemTitle={user.title}
                    />
                  </Item>
                ) : (
                  <Item reference={lastItemRef} key={index}>
                    <CategoryItem
                      itemHref={`/Collection/3`}
                      // itemHref={`/Collection/${user.id}`}
                      itemImage={user.thumb}
                      itemTitle={user.title}
                    />
                  </Item>
                )
              )}
            </>
          ) : (
            <CategoryPageSkeleton />
          )}
        </Grid>
      </Container>
    </Box>
  );
};
export default Categories;

