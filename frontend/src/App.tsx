import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import api from "./api/API";
import AuthContext from "./components/AuthContext";

import Home from "./pages/Home";

import { Person } from "../../types";

function App() {
  const [user, setUser] = useState<any>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const userLogin = await api.login();
        setUser(userLogin);
      } catch (e) {
        setError("Failed to authenticate user");
      };
    })();
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
