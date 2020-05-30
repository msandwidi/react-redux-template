import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const common = { black: "#000", white: "#fff" };
const background = { paper: "#fff", default: "#fafafa" };
const primary = {
  light: "rgba(170, 205, 230, 1)",
  main: "rgba(0, 105, 170, 1)",
  dark: "rgba(0, 77, 124, 1)",
  contrastText: "rgba(255, 255, 255, 1)"
};
const secondary = {
  light: "rgba(250, 201, 122, 1)",
  main: "rgba(255, 171, 0, 1)", //20,123,56
  dark: "rgba(209, 140, 0, 1)",
  contrastText: "rgba(255, 255, 255, 1)"
};
const tertiary = {
  light: "rgba(255,121,121, 1)",
  main: "rgba(255,92,92, 1)",
  dark: "rgba(209,76,76, 1)",
  contrastText: "rgba(255, 255, 255, 1)"
};
const text = {
  primary: "rgba(37,42,50, 1)",
  secondary: "rgba(107,114,123, 1)",
  disabled: "rgba(0, 0, 0, 0.38)",
  hint: "rgba(0, 0, 0, 0.38)"
};
const error = {
  light: "rgba(251, 124, 182, 1)",
  main: "rgba(236, 52, 115, 1)",
  dark: "rgba(233, 24, 96, 1)",
  contrastText: "rgba(255, 255, 255, 1)"
};
const headerTitle = {
  color: text.primary,
  fontWeight: "bold"
};

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    common,
    background,
    primary,
    secondary,
    tertiary,
    headerTitle,
    error,
    text
  },
  typography: {
    useNextVariants: true
  }
});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
