import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./services/authproviders";
import AppRouter from "./services/routes";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
