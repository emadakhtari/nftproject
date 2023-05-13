import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
import AuthService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { uploadFileToIPFS, uploadJSONToIPFS } from "../../services/pinata";
import Marketplace from "../../Marketplace.json";
// import { useLocation } from "react-router";
import { toast } from "react-hot-toast";
import TimerIcon from "@mui/icons-material/Timer";
import ImageIcon from "@mui/icons-material/Image";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

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
const StyledAvatarBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
const StyledUploadAvatarHead = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  border: "2px solid #44b700",
}));
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  border: "2px solid #44b700",
}));
const StyledUploadBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%",
}));
const StyledUploadButton = styled(Button)(({ theme }) => ({
  display: "inline-block",
  textAlign: "center",
  borderRadius: 15,
}));
const StyledLoadingButton = styled(LoadingButton)(({ theme }) => ({
  textAlign: "center",
  borderRadius: 15,
}));
const StyledTextFieldGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: "100%",
  "&.Mui-focused": {
    color: theme.palette.primary.main,
  },
}));
const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(0, 0.5),
}));
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    "&.Mui-selected": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
  },
  "&:hover, &.Mui-focusVisible": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
  "&:hover, &.Mui-selected": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
  "&.Mui-active": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
  "&.Mui-selected": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
}));
const StyleNftFileErrorTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  paddingTop: theme.spacing(1),
}));

function Create() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const [collecions, setCollecions] = useState([]);
  const [formParams, updateFormParams] = useState({
    name: "",
    description: "",
    price: "",
  });
  const getItems = async () => {
    // console.log(window);
    const user = AuthService.getCurrentUser();
    if (!user) {
      const el = document.getElementById("root");
      el.scrollIntoView({ behavior: "smooth" });
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
        .post(process.env.REACT_APP_API_URL + "/api/create", config)
        .then((resp) => {
          setLoading(true);
          setCollecions(resp.data.result.ListOfCollecions);
          setProfile(resp.data.result.Profile);
          // console.log(resp.data.result);
          if (!resp.data.result.Profile.email) {
            navigate("/");
          }
        });
    } catch (err) {
      if (err.response) {
        toast.error(
          <Typography component="span">
            Error during File Upload , {err.message}
          </Typography>,
          {
            duration: 8000,
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
        setTimeout(function () {
          navigate("/");
        }, 5000);
        // console.error(err.message);
      } else if (err.request) {
        toast.error(
          <Typography component="span">
            Error during File Upload , {err.message}
          </Typography>,
          {
            duration: 8000,
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
        setTimeout(function () {
          navigate("/");
        }, 5000);
        // console.error(err.message);
      } else {
        toast.error(
          <Typography component="span">
            Error during File Upload , {err.message}
          </Typography>,
          {
            duration: 8000,
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
        setTimeout(function () {
          navigate("/");
        }, 5000);
        // console.error(err.message);
      }
    }
  };
  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);
  const [collect, setCollect] = useState("");
  const handleChangeCollect = (event) => {
    setCollect(event.target.value);
  };
  const [nftFile, setNftFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const ethers = require("ethers");
  // const location = useLocation();

  async function OnChangeFile(e) {
    var file = e.target.files[0];
    setLoading(false);
    // console.log(file);
    try {
      const response = await uploadFileToIPFS(file);
      if (response.success === true) {
        setFileURL(response.pinataURL);
        setNftFile(file);
        setLoading(true);
        toast.success(
          <Typography component="span">
            Your file has been successfully uploaded
          </Typography>,
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
              <ImageIcon
                sx={{
                  color: "#00b44b",
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
        // console.log("Upload image to Pinata:", response.pinataURL);
      }
    } catch (e) {
      console.log(e);
      toast.error(
        <Typography component="span">Error during File Upload ,</Typography>,
        {
          duration: 8000,
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
  }
  async function uploadMetadataToIPFS() {
    const { name, description, price } = formParams;
    //Make sure that none of the fields are empty
    if (!name || !description || !price || !fileURL) return;
    const nftJSON = {
      name,
      description,
      price,
      image: fileURL,
    };
    try {
      //upload the metadata JSON to IPFS
      const response = await uploadJSONToIPFS(nftJSON);
      if (response.success === true) {
        // console.log("Uploaded JSON to Pinata: ", response);
        return response.pinataURL;
      }
    } catch (e) {
      toast.error(
        <Typography component="span">
          error uploading JSON metadata: {e}
        </Typography>,
        {
          duration: 8000,
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
      // console.log("error uploading JSON metadata:", e);
    }
  }
  const [nameError, setNameError] = useState(false);
  const [nameErrorMsg, setNameErrorMsg] = useState("");

  const [priceError, setPriceError] = useState(false);
  const [priceErrorMsg, setPriceErrorMsg] = useState("");

  const [descriptionError, setDescriptionError] = useState(false);
  const [descriptionErrorMsg, setDescriptionErrorMsg] = useState("");

  const [nftFileError, setNftFileError] = useState(false);
  const [nftFileErrorMsg, setNftFileErrorMsg] = useState("");

  const [collectError, setCollectError] = useState(false);
  const [collectErrorMsg, setCollectErrorMsg] = useState("");

  async function listNFT(e) {
    e.preventDefault();

    var pricePattern = new RegExp(/^(\d+(\.\d+)?)$/);

    if (formParams.name === "") {
      setNameError(true);
      setNameErrorMsg("You must enter a Title.");
    } else {
      if (formParams.name.length >= 25) {
        setNameError(true);
        setNameErrorMsg(
          "The title field should not be more than 25 characters"
        );
      } else {
        setNameError(false);
        setNameErrorMsg("");
      }
    }

    if (formParams.price === "") {
      setPriceError(true);
      setPriceErrorMsg("You must enter a Price.");
    } else {
      if (!pricePattern.test(formParams.price)) {
        setPriceError(true);
        setPriceErrorMsg("The Price field must be a number.");
      } else {
        setPriceError(false);
        setPriceErrorMsg("");
      }
    }

    if (formParams.description === "") {
      setDescriptionError(true);
      setDescriptionErrorMsg("You must enter a Description.");
    } else {
      setDescriptionError(false);
      setDescriptionErrorMsg("");
    }

    if (nftFile === null) {
      setNftFileError(true);
      setNftFileErrorMsg("Please enter the image file");
    } else {
      setNftFileError(false);
      setNftFileErrorMsg("");
    }

    if (collect === "") {
      setCollectError(true);
      setCollectErrorMsg("Please select a collection");
    } else {
      setCollectError(false);
      setCollectErrorMsg("");
    }
    setLoading(false);
    if (
      formParams.name === "" ||
      formParams.price === "" ||
      formParams.description === "" ||
      nftFile === null ||
      collect === ""
    ) {
      setLoading(true);
      return false;
    } else {
      if (!pricePattern.test(formParams.price)) {
        setLoading(true);
        return false;
      }
      if (formParams.name.length >= 25) {
        setLoading(true);
        return false;
      }
    }
    try {
      const metadataURL = await uploadMetadataToIPFS();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      toast.success(
        <Typography component="span">
          Please wait ... uploading (up to 5 mins)
        </Typography>,
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
            <TimerIcon
              sx={{
                color: "#00b44b",
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

      let contract = new ethers.Contract(
        Marketplace.address,
        Marketplace.abi,
        signer
      );

      //massage the params to be sent to the create NFT request
      const price = ethers.utils.parseUnits(formParams.price, "ether");
      let listingPrice = await contract.getListPrice();
      listingPrice = listingPrice.toString();

      //actually create the NFT
      let transaction = await contract.createToken(metadataURL, price, {
        value: listingPrice,
      });

      let tx = await transaction.wait();
      let event = tx.events[0];
      let value = event.args[2];
      let tokenId = value.toNumber(); //we need to convert it a number
      const user = AuthService.getCurrentUser();

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
              process.env.REACT_APP_API_URL + "/api/create-nft",
              {
                title: formParams.name,
                description: formParams.description,
                image: nftFile,
                walletAddress: profile.walletAddress,
                price: formParams.price,
                nft_address: transaction.to,
                token_id: tokenId,
                collection_id: collect,
              },
              config
            )
            .then((response) => {
              toast.success("Your file has been successfully uploaded", {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              // console.log(response);
              // console.log(transaction);
              // console.log(metadataURL);
              setLoading(false);
              updateFormParams({
                name: "",
                description: "",
                price: "",
                walletAddress: "",
                nftFile: null,
                collect: "",
              });
              setTimeout(function () {
                window.location.reload();
              }, 5000);
            });
        } catch (err) {
          setLoading(true);
          // console.log(err);
          if (err.response.data.errors) {
            if (err.response.data.errors.collection_id) {
              err.response.data.errors.collection_id.map((item) =>
                toast.error(item, {
                  position: "top-left",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                })
              );
            }

            if (err.response.data.errors.description) {
              err.response.data.errors.description.map((item) =>
                toast.error(item, {
                  position: "top-left",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                })
              );
            }

            if (err.response.data.errors.image) {
              err.response.data.errors.image.map((item) =>
                toast.error(item, {
                  position: "top-left",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                })
              );
            }

            if (err.response.data.errors.nft_address) {
              err.response.data.errors.nft_address.map((item) =>
                toast.error(item, {
                  position: "top-left",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                })
              );
            }

            if (err.response.data.errors.price) {
              err.response.data.errors.price.map((item) =>
                toast.error(item, {
                  position: "top-left",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                })
              );
            }
            if (err.response.data.errors.title) {
              err.response.data.errors.title.map((item) =>
                toast.error(item, {
                  position: "top-left",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                })
              );
            }
            if (err.response.data.errors.token_id) {
              err.response.data.errors.token_id.map((item) =>
                toast.error(item, {
                  position: "top-left",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                })
              );
            }
          } else {
            toast.error(err.message, {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        }
      };
      getData();
    } catch (e) {
      toast.error(<Typography component="span">Upload Error: {e}</Typography>, {
        duration: 8000,
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
      });
    }
  }

  return (
    <Box
      component="main"
      sx={{
        paddingTop: 6,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          py: 8,
          minHeight: "100vh",
        }}
      >
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
            Create NFT
          </StyleTopTitleTypography>
          <Box component="form" noValidate autoComplete="off">
            {/* enctype="multipart/form-data" */}
            <Grid container spacing={2}>
              <StyledUploadGrid item elevation={0} md={12}>
                <StyledAvatarBox>
                  {fileURL ? (
                    <StyledAvatar variant="rounded" src={fileURL} alt="NFT" />
                  ) : (
                    <StyledUploadAvatarHead variant="rounded">
                      NFT
                    </StyledUploadAvatarHead>
                  )}
                </StyledAvatarBox>
                <StyledUploadBox>
                  {loading ? (
                    <StyledUploadButton
                      variant="contained"
                      component="label"
                      color="secondary"
                    >
                      Upload Your NFT
                      <input
                        hidden
                        accept="image/*"
                        multiple
                        type="file"
                        name="nft"
                        id="nft"
                        onChange={OnChangeFile}
                      />
                    </StyledUploadButton>
                  ) : (
                    <StyledLoadingButton
                      variant="outlined"
                      color="secondary"
                      loading
                    >
                      Upload Your NFT
                    </StyledLoadingButton>
                  )}
                </StyledUploadBox>

                {nftFileError && (
                  <>
                    <StyleNftFileErrorTypography
                      align="center"
                      variant="body1"
                      component="h6"
                      color="text.primary"
                    >
                      {nftFileErrorMsg}
                    </StyleNftFileErrorTypography>
                  </>
                )}
              </StyledUploadGrid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                mt: 2,
                mb: 2,
              }}
            >
              <StyledTextFieldGrid item elevation={0} xs={12} sm={6} md={6}>
                <StyledFormControl>
                  {loading ? (
                    nameError ? (
                      <>
                        <StyledInputLabel htmlFor="name" shrink error>
                          Title
                        </StyledInputLabel>
                        <TextField
                          error
                          helperText={nameErrorMsg}
                          id="name"
                          name="name"
                          size="small"
                          placeholder="Please enter Name"
                          fullWidth
                          autoComplete="off"
                          variant="outlined"
                          color="secondary"
                          defaultValue=""
                          onChange={(e) =>
                            updateFormParams({
                              ...formParams,
                              name: e.target.value,
                            })
                          }
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <StyledInputLabel htmlFor="name" shrink>
                          Title
                        </StyledInputLabel>
                        <TextField
                          id="name"
                          name="name"
                          size="small"
                          fullWidth
                          autoComplete="off"
                          variant="outlined"
                          color="secondary"
                          onChange={(e) =>
                            updateFormParams({
                              ...formParams,
                              name: e.target.value,
                            })
                          }
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </>
                    )
                  ) : (
                    <>
                      <StyledInputLabel htmlFor="name" shrink>
                        Title
                      </StyledInputLabel>
                      <TextField
                        id="name"
                        name="name"
                        size="small"
                        placeholder="Please enter Name"
                        fullWidth
                        autoComplete="off"
                        variant="outlined"
                        color="secondary"
                        disabled
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </>
                  )}
                </StyledFormControl>
              </StyledTextFieldGrid>
              <StyledTextFieldGrid item elevation={0} xs={12} sm={6} md={6}>
                <StyledFormControl>
                  {loading ? (
                    priceError ? (
                      <>
                        <StyledInputLabel htmlFor="price" shrink error>
                          Price (in ETH)
                        </StyledInputLabel>
                        <TextField
                          error
                          helperText={priceErrorMsg}
                          id="price"
                          name="price"
                          size="small"
                          placeholder="Please enter Price"
                          fullWidth
                          autoComplete="off"
                          variant="outlined"
                          color="secondary"
                          onChange={(e) =>
                            updateFormParams({
                              ...formParams,
                              price: e.target.value,
                            })
                          }
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <StyledInputLabel
                          htmlFor="price"
                          shrink
                          color="secondary"
                        >
                          Price (in ETH)
                        </StyledInputLabel>
                        <TextField
                          id="price"
                          name="price"
                          size="small"
                          placeholder="Please enter Price"
                          fullWidth
                          autoComplete="off"
                          variant="outlined"
                          color="secondary"
                          onChange={(e) =>
                            updateFormParams({
                              ...formParams,
                              price: e.target.value,
                            })
                          }
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                ETH
                              </InputAdornment>
                            ),
                          }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </>
                    )
                  ) : (
                    <>
                      <StyledInputLabel
                        htmlFor="price"
                        shrink
                        color="secondary"
                      >
                        Price (in ETH)
                      </StyledInputLabel>
                      <TextField
                        id="price"
                        name="price"
                        size="small"
                        placeholder="Please enter Price"
                        fullWidth
                        autoComplete="off"
                        variant="outlined"
                        color="secondary"
                        disabled
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">ETH</InputAdornment>
                          ),
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </>
                  )}
                </StyledFormControl>
              </StyledTextFieldGrid>
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
                <StyledFormControl>
                  {loading ? (
                    collectError ? (
                      <>
                        <StyledInputLabel htmlFor="collection" shrink error>
                          Collection
                        </StyledInputLabel>
                        <Select
                          error
                          labelId="demo-simple-select-outlined-label"
                          id="collection"
                          name="collection"
                          size="small"
                          variant="outlined"
                          value={collect}
                          color="secondary"
                          onChange={handleChangeCollect}
                        >
                          <StyledMenuItem selected value="">
                            not selected
                          </StyledMenuItem>
                          {collecions.map((item, index) => (
                            <StyledMenuItem key={index} value={item.id}>
                              {item.title}
                            </StyledMenuItem>
                          ))}
                        </Select>
                        <FormHelperText error>{collectErrorMsg}</FormHelperText>
                      </>
                    ) : (
                      <>
                        <StyledInputLabel
                          htmlFor="collection"
                          shrink
                          color="secondary"
                        >
                          Collection
                        </StyledInputLabel>

                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="collection"
                          name="collection"
                          size="small"
                          variant="outlined"
                          value={collect}
                          color="secondary"
                          onChange={handleChangeCollect}
                        >
                          <StyledMenuItem selected value="">
                            not selected
                          </StyledMenuItem>
                          {collecions.map((item, index) => (
                            <StyledMenuItem key={index} value={item.id}>
                              {item.title}
                            </StyledMenuItem>
                          ))}
                        </Select>
                      </>
                    )
                  ) : (
                    <>
                      <StyledInputLabel
                        htmlFor="collection"
                        shrink
                        color="secondary"
                      >
                        Collection
                      </StyledInputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="collection"
                        name="collection"
                        size="small"
                        variant="outlined"
                        color="secondary"
                        value=""
                        disabled
                      >
                        <StyledMenuItem selected value="">
                          not selected
                        </StyledMenuItem>
                      </Select>
                    </>
                  )}
                </StyledFormControl>
              </StyledTextFieldGrid>
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
                <StyledFormControl>
                  {loading ? (
                    descriptionError ? (
                      <>
                        <StyledInputLabel htmlFor="description" shrink error>
                          NFT Description
                        </StyledInputLabel>
                        <TextField
                          error
                          helperText={descriptionErrorMsg}
                          id="description"
                          name="description"
                          size="small"
                          placeholder="Please enter Description"
                          fullWidth
                          autoComplete="off"
                          variant="outlined"
                          color="secondary"
                          multiline
                          rows={3}
                          onChange={(e) =>
                            updateFormParams({
                              ...formParams,
                              description: e.target.value,
                            })
                          }
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <StyledInputLabel htmlFor="description" shrink>
                          NFT Description
                        </StyledInputLabel>
                        <TextField
                          id="description"
                          name="description"
                          size="small"
                          placeholder="Please enter Description"
                          fullWidth
                          autoComplete="off"
                          variant="outlined"
                          color="secondary"
                          multiline
                          rows={3}
                          onChange={(e) =>
                            updateFormParams({
                              ...formParams,
                              description: e.target.value,
                            })
                          }
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </>
                    )
                  ) : (
                    <>
                      <StyledInputLabel htmlFor="description" shrink>
                        NFT Description
                      </StyledInputLabel>
                      <TextField
                        id="description"
                        name="description"
                        size="small"
                        placeholder="Please enter Description"
                        fullWidth
                        autoComplete="off"
                        variant="outlined"
                        color="secondary"
                        multiline
                        rows={3}
                        disabled
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </>
                  )}
                </StyledFormControl>
              </StyledTextFieldGrid>
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
                    onClick={listNFT}
                    sx={{
                      width: "100%",
                    }}
                  >
                    Create NFT
                  </StyledUploadButton>
                ) : (
                  <StyledLoadingButton
                    variant="outlined"
                    color="secondary"
                    loading
                    disabled
                    sx={{
                      width: "100%",
                    }}
                  >
                    Create NFT
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

export default Create;
