import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./Store";
import { Provider } from "react-redux";

// 테마 적용
import {ThemeProvider } from '@mui/material/styles';
import {theme} from "./common/styles/AntTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
