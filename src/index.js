import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import styled, { keyframes } from "styled-components";
import App from "./App";
import i18n from "./services/i18n";
import { I18nextProvider } from "react-i18next";

document.body.style.margin = "0";
var loaderTextTansform = keyframes`
    0% { content: "Loading"; }
    25% { content: "Loading."; }
    50% { content: "Loading.."; }
    75% { content: "Loading..."; }
`;
var loaderTansform = keyframes`
    15% { transform: translateX(0); }
    45% { transform: translateX(230px); }
    65% { transform: translateX(230px); }
    95% { transform: translateX(0); }
`;
const StyleLoaderContainer = styled("div")(() => ({
  backgroundColor: "#E6E6E6",
  height: " 100vh",
  width: "100vw",
}));
const StyleLoader = styled("div")(() => ({
  height: 20,
  width: 250,
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto",
}));

const StyleLoaderDot = styled.div`
  animation-name: ${loaderTansform};
  animation-timing-function: ease-in-out;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background-color: black;
  position: absolute;
  border: 2px solid white;
  &:first-child {
    background-color: #8cc759;
    animation-delay: 0.5s;
  }
  &:nth-child(2) {
    background-color: #8c6daf;
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    background-color: #ef5d74;
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    background-color: #f9a74b;
    animation-delay: 0.2s;
  }
  &:nth-child(5) {
    background-color: #60beeb;
    animation-delay: 0.1s;
  }
  &:nth-child(6) {
    background-color: #fbef5a;
    animation-delay: 0;
  }
`;
const StyleLoaderText = styled.div`
  position: absolute;
  top: 200%;
  left: 0;
  right: 0;
  width: 4rem;
  margin: auto;
  font-family: iran-sans;
  &:after {
    content: "Loading";
    font-weight: bold;
    animation-name: ${loaderTextTansform};
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
`;

const loadingMarkup = (
  <StyleLoaderContainer>
    <StyleLoader>
      <StyleLoaderDot />
      <StyleLoaderDot />
      <StyleLoaderDot />
      <StyleLoaderDot />
      <StyleLoaderDot />
      <StyleLoaderDot />
      <StyleLoaderText />
    </StyleLoader>
  </StyleLoaderContainer>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={loadingMarkup}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Suspense>
);
