import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

//Global Styles
import GlobalStyle from "./assets/styles/GlobalStyle";

//Navigations
import Navigations from "./Navigations";

//store
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Navigations />
      </Router>
    </Provider>
  );
}

export default App;
