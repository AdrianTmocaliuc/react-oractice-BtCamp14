import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistTutorsStore } from "redux/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistTutorsStore}>
      <App />
    </PersistGate>
  </Provider>
);

// ReactDOM.render(
//   <React.StrictMode>
//     Provider
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
