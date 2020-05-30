import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./Components/App";
import { configureStore } from "./store";
//import { fetchUser, fetchNotifications } from "./store/actions/";

if (process.env.NODE_ENV !== "production") {
  //const { whyDidYouUpdate } = require("why-did-you-update");
  //whyDidYouUpdate(React);
}

const store = configureStore();
//store.dispatch(fetchUser()); //initial fetch
//store.dispatch(fetchNotifications()); //fetch notifications

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./Components/App", () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root")
    );
  });
}
