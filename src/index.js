import { GA4React } from "ga-4-react";
import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_API);

const ga4react = new GA4React(
  process.env.REACT_APP_GOOGLE_ANALYTICS_API,
  5000 /* timeout, optional, defaults is 5000 */
  //options /* { nonce: ['first-script-is-async','second-script'] } */
);
ga4react.initialize().then(
  (ga4) => {
    console.log("worked");
    ga4.pageview("path");
    ga4.gtag("event", "pageview", "path"); // or your custom gtag event
  },
  (err) => {
    console.error(err);
  }
);

ReactDOM.render(<App />, document.getElementById("blog-app"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
