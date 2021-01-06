import React, { useState, useEffect } from 'react';

import Feature from "./components/feature/Feature";
import AuthContext from "./components/authContext/AuthContext";

function App() {
  const [user, setUser] = useState<any>({});
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/project");
      const result = await response.json();

      setResult(result[0].title);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/auth/login/success", {
          method: "GET",
          credentials: "include",
        });

        if (response.status !== 200)
          throw new Error("failed to authenticate user");

        const json = await response.json();
        setUser(json.user);
      } catch (e) {
        setError("Failed to authenticate user");
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <Feature text={result} />
      <div style={{ display: "flex", placeContent: "center" }}>
        {user?.name ?
          <p>User details: {user?.name}</p>
          : <a href="http://localhost:5000/auth/github">Login</a>
        }
      </div>
    </AuthContext.Provider>
  );
}

export default App;
