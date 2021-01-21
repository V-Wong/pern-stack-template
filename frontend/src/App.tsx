import React, { useState, useEffect } from 'react';

import api from "./api/API";
import ProjectTitle from "./components/ProjectTitle";
import AuthContext from "./components/AuthContext";

function App() {
  const [user, setUser] = useState<any>({});
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const userLogin = await api.login();
        setUser(userLogin);
      } catch (e) {
        setError("Failed to authenticate user");
      };

      const projectData = await api.getAllProjects();
      setResult(projectData[0].title);
    })();
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <ProjectTitle text={result} />
      <div style={{ display: "flex", placeContent: "center" }}>
        {user?.name ?
          <p>User details: {user?.name}</p>
          : <a href={api.getLoginURL()}>Login</a>
        }
      </div>
    </AuthContext.Provider>
  );
};

export default App;
