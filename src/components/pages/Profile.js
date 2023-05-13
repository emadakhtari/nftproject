import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/system";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Avatar,
  Button,
  Badge,
  Paper,
  Grid,
  TextField,
  Skeleton,
  Snackbar,
  FormControl,
  InputLabel,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthService from "../../services/auth.service";

const StyleImageBox = styled(Box)(({ theme }) => ({
  objectFit: "cover",
  width: "100%",
  borderRadius: "15px 15px 0 0",
  display: "block",
  height: 145,
}));
const StyleImageBoxSkeleton = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  borderRadius: "15px 15px 0 0",
  display: "block",
  transform: "scale(1,1)",
  transformOrigin: "0 0",
  height: 145,
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  position: "relative",
  bottom: 40,

  "& .MuiBadge-badge": {
    backgroundColor: theme.palette.info.light,
    color: theme.palette.info.light,
    boxShadow: `0 0 0 2px ${theme.palette.secondary.light}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  border: "2px solid #44b700",
}));
const StyledAvatarSkeletonAvatar = styled(Skeleton)(({ theme }) => ({
  position: "relative",
  bottom: 40,
  width: 120,
  height: 120,
  border: "2px solid #44b700",
  "& .MuiAvatar-root": {
    height: "100%",
    width: "100%",
    "& svg": {
      height: "100%",
      width: "100%",
    },
  },
}));
const StyledBadgeBox = styled(Box)(({ theme }) => ({
  margin: "-25px 0px",
}));
const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.secondary.light,
}));
const StyledButtonBox = styled(Box)(({ theme }) => ({
  "& .active": {
    color: theme.palette.secondary.main,
  },
}));
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: "0 0 15px 15px",
}));
const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: 15,
}));
const StyleTopTitleTypography = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
}));
const StyledUploadGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  display: "block",
}));
const StyledUploadBannerGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  display: "unset",
  textAlign: "center",
}));
const StyledUploadAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  border: "2px solid #44b700",
}));
const StyledUploadAvatarHead = styled(Avatar)(({ theme }) => ({
  position: "relative",
  bottom: 40,
  width: 120,
  height: 120,
  border: "2px solid #44b700",
}));
const StyledUploadBanner = styled(Avatar)(({ theme }) => ({
  width: "100%",
  height: 120,
  border: "2px solid #44b700",
}));
const StyledSkeletonUploadBanner = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  height: 120,
  transform: "scale(1,1)",
  transformOrigin: "0 0",
  minWidth: "100%",
}));
const StyledUploadBannerHead = styled(Avatar)(({ theme }) => ({
  width: "100%",
  height: 145,
  borderRadius: "15px 15px 0 0",
}));
const StyledUploadBannerBox = styled(Avatar)(({ theme }) => ({
  width: "100%",
  height: 120,
  border: "2px solid #44b700",
}));
const StyledUploadBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%",
}));
const StyledUploadImgBox = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  border: "2px solid #44b700",
}));
const StyledUploadButton = styled(Button)(({ theme }) => ({
  display: "inline-block",
  textAlign: "center",
  borderRadius: 15,
}));
const StyledTextFieldGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
const StyledAvatarBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: "100%",
}));
const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(0, 0.5),
}));
const StyledLoadingButton = styled(LoadingButton)(({ theme }) => ({
  textAlign: "center",
  borderRadius: 15,
}));
const pages = ["Specifications"];
function Profile() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const avatarMaxSize = 100000;
  const [avatarFile, setAvatarFile] = useState("");
  const [openAvatarSize, setOpenAvatarSize] = useState(false);
  const [openAvatarType, setOpenAvatarType] = useState(false);

  const handleCloseAvatarSize = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAvatarSize(false);
  };
  const handleCloseAvatarType = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAvatarType(false);
  };

  function handleUploadAvatar(event) {
    setAvatarFile(event.target.files[0]);
    const isAvatarType =
      event.target.files[0].type === "image/jpeg" ||
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/avif" ||
      event.target.files[0].type === "image/webp" ||
      event.target.files[0].type === "image/svg+xml";
    if (event.target.files[0]["size"] > avatarMaxSize) {
      setOpenAvatarSize(true);
      setAvatarFile();
    }
    if (!isAvatarType) {
      setOpenAvatarType(true);
      setAvatarFile();
    }
  }
  // function handleResetAvatar() {
  //   setAvatarFile();
  // }

  const bannerMaxSize = 100000;
  const [bannerFile, setBannerFile] = useState("");
  const [openBannerSize, setOpenBannerSize] = useState(false);
  const [openBannerType, setOpenBannerType] = useState(false);

  const handleCloseBannerSize = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenBannerSize(false);
  };
  const handleCloseBannerType = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenBannerType(false);
  };
  function handleUploadBanner(event) {
    setBannerFile(event.target.files[0]);
    const isBannerType =
      event.target.files[0].type === "image/jpeg" ||
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/avif" ||
      event.target.files[0].type === "image/webp" ||
      event.target.files[0].type === "image/svg+xml";

    if (event.target.files[0]["size"] < bannerMaxSize) {
      setOpenBannerSize(true);
      setAvatarFile();
    }
    if (!isBannerType) {
      setOpenBannerType(true);
      setAvatarFile();
    }
  }
  // function handleResetBanner() {
  //   setBannerFile();
  // }

  const [avatarUp, setAvatarUp] = useState("");
  const [bannerUp, setBannerUp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [bio, setBio] = useState("");
  const [web, setWeb] = useState("");

  const { walletAddress } = useParams();
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);
  const [openError, setOpenError] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getItems = async () => {
    const user = AuthService.getCurrentUser();
    if (!user) {
      navigate("/");
    }
    axios.defaults.headers.common = {
      Authorization: "Bearer " + user.result.token,
    };

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await axios
        .post(
          process.env.REACT_APP_API_URL + "/api/profile",
          {
            walletAddress: walletAddress,
          },
          config
        )
        .then((resp) => {
          setItem(resp.data.result.ProfilePage);
          setAvatarUp(resp.data.result.ProfilePage.avatar);
          setBannerUp(resp.data.result.ProfilePage.background);
          setName(resp.data.result.ProfilePage.name);
          setEmail(resp.data.result.ProfilePage.email);
          setTwitter(resp.data.result.ProfilePage.twitter);
          setInstagram(resp.data.result.ProfilePage.instagram);
          setBio(resp.data.result.ProfilePage.bio);
          setWeb(resp.data.result.ProfilePage.site);
          setLoading(true);
          // console.log(resp.data.result);
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
  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [success, setSuccess] = useState("");
  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
  };

  const updatePost = (event) => {
    event.preventDefault();
    const user = AuthService.getCurrentUser();

    setLoading(false);
    axios.defaults.headers.common = {
      Authorization: "Bearer " + user.result.token,
    };
    const getData = async () => {
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      try {
        await axios
          .post(
            process.env.REACT_APP_API_URL + "/api/update-profile",
            {
              name: name,
              email: email,
              twitter: twitter,
              instagram: instagram,
              site: web,
              bio: bio,
              avatar: avatarFile,
              banner: bannerFile,
            },
            config
          )
          .then((response) => {
            setLoading(true);
            setOpenSuccess(true);
            setSuccess(response.data.message);
            console.log(response);
            // " مشخصات شما با موفقیت ویرایش شد";
          });
      } catch (err) {
        setLoading(true);
        if (err.response) {
          setOpenError(true);
          setError(err.response.data.message);
          // console.log(err.response.data.message);
        } else if (err.request) {
          setOpenError(true);
          setError(err.request.data.message);
          // console.log(err.message);
        } else {
          setOpenError(true);
          setError(err.message);
          //  console.log(err.message);
        }
      }
    };
    getData();
  };
  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };
  return (
    <Box
      component="main"
      sx={{
        paddingTop: 12,
      }}
    >
      {openSuccess && (
        <Snackbar
          open={openSuccess}
          autoHideDuration={12000}
          onClose={handleCloseSuccess}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <Alert
            onClose={handleCloseSuccess}
            severity="success"
            sx={{ width: "100%" }}
          >
            <Typography variant="body2" color="primary">
              {success}
            </Typography>
          </Alert>
        </Snackbar>
      )}
      {openAvatarSize && (
        <Snackbar
          open={openAvatarSize}
          autoHideDuration={6000}
          onClose={handleCloseAvatarSize}
        >
          <Alert
            onClose={handleCloseAvatarSize}
            severity="error"
            sx={{ width: "100%" }}
          >
            Uploaded profile image should not exceed 1 MB
          </Alert>
        </Snackbar>
      )}
      {openAvatarType && (
        <Snackbar
          open={openAvatarType}
          autoHideDuration={6000}
          onClose={handleCloseAvatarType}
        >
          <Alert
            onClose={handleCloseAvatarType}
            severity="error"
            sx={{ width: "100%" }}
          >
            You can only upload JPG/PNG/AVIF/WEBP/SVG file!
          </Alert>
        </Snackbar>
      )}

      {openBannerSize && (
        <Snackbar
          open={openBannerSize}
          autoHideDuration={6000}
          onClose={handleCloseBannerSize}
        >
          <Alert
            onClose={handleCloseBannerSize}
            severity="error"
            sx={{ width: "100%" }}
          >
            Uploaded Banner image should not exceed 1 MB
          </Alert>
        </Snackbar>
      )}
      {openBannerType && (
        <Snackbar
          open={openBannerType}
          autoHideDuration={6000}
          onClose={handleCloseBannerType}
        >
          <Alert
            onClose={handleCloseBannerType}
            severity="error"
            sx={{ width: "100%" }}
          >
            You can only upload JPG/PNG/AVIF/WEBP/SVG file!
          </Alert>
        </Snackbar>
      )}
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
        {loading ? (
          bannerFile ? (
            <StyleImageBox
              component="img"
              src={URL.createObjectURL(bannerFile)}
              alt={item.name}
            ></StyleImageBox>
          ) : bannerUp ? (
            <StyleImageBox
              component="img"
              src={bannerUp}
              alt={item.name}
            ></StyleImageBox>
          ) : (
            <StyledUploadBannerHead> </StyledUploadBannerHead>
          )
        ) : (
          <StyleImageBoxSkeleton />
        )}

        <StyledAppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page, index) => (
                    <StyledMenuItem key={index} onClick={handleCloseNavMenu}>
                      <Typography color="secondary" textAlign="center">
                        {page}
                      </Typography>
                    </StyledMenuItem>
                  ))}
                </Menu>
              </Box>
              <StyledButtonBox
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              >
                {pages.map((page, index) => (
                  <StyledButton
                    key={index}
                    onClick={handleCloseNavMenu}
                    className={`list-item ${
                      "Specifications" === page && "active"
                    }`}
                    sx={{ my: 2, display: "block" }}
                  >
                    {page}
                  </StyledButton>
                ))}
              </StyledButtonBox>

              <StyledBadgeBox sx={{ flexGrow: 0 }}>
                {loading ? (
                  avatarFile ? (
                    <>
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        badgeContent=""
                      >
                        <StyledAvatar
                          src={URL.createObjectURL(avatarFile)}
                          alt={item.name}
                        />
                      </StyledBadge>
                    </>
                  ) : avatarUp ? (
                    <>
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        badgeContent=""
                      >
                        <StyledAvatar src={avatarUp} alt={item.name} />
                      </StyledBadge>
                    </>
                  ) : (
                    <StyledUploadAvatarHead />
                  )
                ) : (
                  <StyledAvatarSkeletonAvatar
                    variant="circular"
                    animation="pulse"
                  >
                    <Avatar />
                  </StyledAvatarSkeletonAvatar>
                )}
              </StyledBadgeBox>
            </Toolbar>
          </Container>
        </StyledAppBar>
        <StyledPaper
          elevation={4}
          sx={{
            p: 2,
            mt: 4,
          }}
        >
          <StyleTopTitleTypography
            variant="h6"
            component="h6"
            color="text.primary"
          >
            Profile details
          </StyleTopTitleTypography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={updatePost}
          >
            <Grid container spacing={2}>
              <StyledUploadGrid item elevation={0} xs={12} sm={6} md={6}>
                <StyledAvatarBox>
                  {loading ? (
                    avatarFile ? (
                      <StyledUploadImgBox
                        src={URL.createObjectURL(avatarFile)}
                        alt={item.name}
                      />
                    ) : avatarUp ? (
                      <StyledUploadImgBox src={avatarUp} alt={item.name} />
                    ) : (
                      <StyledUploadAvatar />
                    )
                  ) : (
                    <Skeleton variant="circular" animation="pulse">
                      <StyledUploadAvatar />
                    </Skeleton>
                  )}
                </StyledAvatarBox>
                <StyledUploadBox>
                  {loading ? (
                    <StyledUploadButton
                      variant="contained"
                      component="label"
                      color="secondary"
                    >
                      Upload Avatar
                      <input
                        hidden
                        accept="image/*"
                        multiple
                        type="file"
                        name="avatar"
                        id="avatar"
                        onChange={handleUploadAvatar}
                      />
                    </StyledUploadButton>
                  ) : (
                    <StyledLoadingButton
                      variant="outlined"
                      color="secondary"
                      loading
                    >
                      Upload Avatar
                    </StyledLoadingButton>
                  )}
                </StyledUploadBox>
              </StyledUploadGrid>
              <StyledUploadBannerGrid item elevation={0} xs={12} sm={6} md={6}>
                {loading ? (
                  bannerFile ? (
                    <StyledUploadBannerBox
                      variant="rounded"
                      src={URL.createObjectURL(bannerFile)}
                      alt={item.name}
                    />
                  ) : bannerUp ? (
                    <StyledUploadBannerBox
                      variant="rounded"
                      src={bannerUp}
                      alt={item.name}
                    />
                  ) : (
                    <StyledUploadBanner variant="rounded"> </StyledUploadBanner>
                  )
                ) : (
                  <StyledSkeletonUploadBanner animation="pulse">
                    <StyledUploadBanner variant="rounded"> </StyledUploadBanner>
                  </StyledSkeletonUploadBanner>
                )}

                <StyledUploadBox>
                  {loading ? (
                    <>
                      <StyledUploadButton
                        variant="contained"
                        component="label"
                        color="secondary"
                      >
                        Upload Banner
                        <input
                          hidden
                          accept="image/*"
                          multiple
                          type="file"
                          name="banner"
                          id="banner"
                          onChange={handleUploadBanner}
                        />
                      </StyledUploadButton>
                    </>
                  ) : (
                    <StyledLoadingButton
                      variant="outlined"
                      color="secondary"
                      loading
                    >
                      Upload Banner
                    </StyledLoadingButton>
                  )}
                </StyledUploadBox>
              </StyledUploadBannerGrid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                mt: 2,
                mb: 2,
              }}
            >
              {loading ? (
                <>
                  <StyledTextFieldGrid item elevation={0} xs={12} sm={6} md={6}>
                    <StyledFormControl>
                      <StyledInputLabel htmlFor="name" shrink>
                        Name
                      </StyledInputLabel>
                      <TextField
                        id="name"
                        name="name"
                        size="small"
                        placeholder="Please enter Name"
                        fullWidth
                        autoComplete="off"
                        value={name || ""}
                        onChange={(e) => setName(e.target.value)}
                        variant="outlined"
                        color="secondary"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </StyledFormControl>
                  </StyledTextFieldGrid>
                  <StyledTextFieldGrid
                    item
                    elevation={0}
                    xs={12}
                    sm={6}
                    md={6}
                    sx={{
                      pt: 2,
                    }}
                  >
                    <StyledFormControl>
                      <StyledInputLabel htmlFor="email" shrink>
                        Email
                      </StyledInputLabel>
                      <TextField
                        id="email"
                        name="email"
                        size="small"
                        placeholder="Please enter Email"
                        fullWidth
                        autoComplete="off"
                        value={email || ""}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        color="secondary"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </StyledFormControl>
                  </StyledTextFieldGrid>
                </>
              ) : (
                <>
                  <StyledTextFieldGrid item elevation={0} xs={12} sm={6} md={6}>
                    <TextField
                      id="Name"
                      label="Name"
                      color="secondary"
                      size="small"
                      fullWidth
                      disabled
                    />
                  </StyledTextFieldGrid>
                  <StyledTextFieldGrid
                    item
                    elevation={0}
                    xs={12}
                    sm={6}
                    md={6}
                    sx={{
                      pt: 2,
                    }}
                  >
                    <TextField
                      id="email"
                      label="Email"
                      color="secondary"
                      size="small"
                      fullWidth
                      disabled
                    />
                  </StyledTextFieldGrid>
                </>
              )}
            </Grid>

            <Grid
              container
              spacing={2}
              sx={{
                mt: 2,
                mb: 2,
              }}
            >
              {loading ? (
                <>
                  <StyledTextFieldGrid item elevation={0} xs={12} sm={4} md={4}>
                    <StyledFormControl>
                      <StyledInputLabel htmlFor="twitter" shrink>
                        Twitter
                      </StyledInputLabel>
                      <TextField
                        id="twitter"
                        name="twitter"
                        size="small"
                        placeholder="Please enter Twitter"
                        fullWidth
                        autoComplete="off"
                        value={twitter || ""}
                        onChange={(e) => setTwitter(e.target.value)}
                        variant="outlined"
                        color="secondary"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </StyledFormControl>
                  </StyledTextFieldGrid>
                  <StyledTextFieldGrid item elevation={0} xs={12} sm={4} md={4}>
                    <StyledFormControl>
                      <StyledInputLabel htmlFor="instagram" shrink>
                        Instagram
                      </StyledInputLabel>
                      <TextField
                        id="instagram"
                        name="instagram"
                        size="small"
                        placeholder="Please enter Instagram"
                        fullWidth
                        autoComplete="off"
                        value={instagram || ""}
                        onChange={(e) => setInstagram(e.target.value)}
                        variant="outlined"
                        color="secondary"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </StyledFormControl>
                  </StyledTextFieldGrid>
                  <StyledTextFieldGrid item elevation={0} xs={12} sm={4} md={4}>
                    <StyledFormControl>
                      <StyledInputLabel htmlFor="web" shrink>
                        Web
                      </StyledInputLabel>
                      <TextField
                        id="web"
                        name="web"
                        size="small"
                        placeholder="Please enter Web"
                        fullWidth
                        autoComplete="off"
                        value={web || ""}
                        onChange={(e) => setWeb(e.target.value)}
                        variant="outlined"
                        color="secondary"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </StyledFormControl>
                  </StyledTextFieldGrid>
                </>
              ) : (
                <>
                  <StyledTextFieldGrid item elevation={0} xs={12} sm={4} md={4}>
                    <TextField
                      id="twitter"
                      label="Twitter"
                      color="secondary"
                      size="small"
                      fullWidth
                      disabled
                    />
                  </StyledTextFieldGrid>
                  <StyledTextFieldGrid item elevation={0} xs={12} sm={4} md={4}>
                    <TextField
                      id="instagram"
                      label="Instagram"
                      color="secondary"
                      size="small"
                      fullWidth
                      disabled
                    />
                  </StyledTextFieldGrid>
                  <StyledTextFieldGrid item elevation={0} xs={12} sm={4} md={4}>
                    <TextField
                      id="web"
                      label="Web"
                      color="secondary"
                      size="small"
                      fullWidth
                      disabled
                    />
                  </StyledTextFieldGrid>
                </>
              )}
            </Grid>

            <Grid
              container
              spacing={2}
              sx={{
                mt: 2,
                mb: 2,
                justifyContent: "center",
              }}
            >
              {loading ? (
                <>
                  <StyledTextFieldGrid
                    item
                    elevation={0}
                    xs={12}
                    sm={12}
                    md={8}
                  >
                    <StyledFormControl>
                      <StyledInputLabel htmlFor="bio" shrink>
                        Bio
                      </StyledInputLabel>
                      <TextField
                        id="bio"
                        name="bio"
                        size="small"
                        placeholder="Please enter Bio"
                        fullWidth
                        autoComplete="off"
                        value={bio || ""}
                        onChange={(e) => setBio(e.target.value)}
                        variant="outlined"
                        color="secondary"
                        multiline
                        rows={3}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </StyledFormControl>
                  </StyledTextFieldGrid>
                  <StyledTextFieldGrid
                    item
                    elevation={0}
                    xs={12}
                    sm={12}
                    md={8}
                  >
                    <TextField
                      id="walletAddress"
                      label="Wallet"
                      value={item.walletAddress}
                      color="secondary"
                      size="small"
                      fullWidth
                      disabled
                    />
                  </StyledTextFieldGrid>
                </>
              ) : (
                <>
                  <StyledTextFieldGrid
                    item
                    elevation={0}
                    xs={12}
                    sm={12}
                    md={8}
                  >
                    <TextField
                      id="bio"
                      label="Bio"
                      color="secondary"
                      multiline
                      rows={3}
                      size="small"
                      fullWidth
                      disabled
                    />
                  </StyledTextFieldGrid>
                  <StyledTextFieldGrid
                    item
                    elevation={0}
                    xs={12}
                    sm={12}
                    md={8}
                  >
                    <TextField
                      id="walletAddress"
                      label="Wallet"
                      value="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                      color="secondary"
                      size="small"
                      fullWidth
                      disabled
                    />
                  </StyledTextFieldGrid>
                </>
              )}
            </Grid>

            <Grid
              container
              spacing={2}
              sx={{
                mt: 2,
                mb: 2,
                justifyContent: "center",
              }}
            >
              <StyledTextFieldGrid item elevation={0} xs={12} sm={12} md={8}>
                {loading ? (
                  <StyledUploadButton
                    variant="contained"
                    color="secondary"
                    type="submit"
                    sx={{
                      width: "100%",
                    }}
                  >
                    Upadte
                  </StyledUploadButton>
                ) : (
                  <StyledLoadingButton
                    variant="outlined"
                    color="secondary"
                    loading
                    sx={{
                      width: "100%",
                    }}
                  >
                    Upadte
                  </StyledLoadingButton>
                )}
              </StyledTextFieldGrid>
            </Grid>
          </Box>
        </StyledPaper>
      </Container>
    </Box>
  );
}

export default Profile;
