import React, { useState, useEffect, useContext } from "react";

import api from "../api/API";
import AuthContext from "../components/AuthContext";

import ProjectTitle from "../components/ProjectTitle";

function Home() {
  const user = useContext(AuthContext);
  const [result, setResult] = useState("");

  useEffect(() => {
    (async () => {
      const projectData = await api.getAllProjects();
      setResult(projectData[0].title);
    })();
  }, []);

  return (
    <>
      <ProjectTitle text={result} />
      <div style={{ display: "flex", placeContent: "center" }}>
        {user?.name ?
          <p>User details: {user?.name}</p>
          : <a href={api.getLoginURL()}>Login</a>
        }
      </div>
    </>
  );
};

export default Home;