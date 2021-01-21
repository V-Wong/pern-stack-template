class API {
  private async get(url: string) {
    const data = await fetch(url);
    const json = await data.json();
    return json;
  };

  private async post(url: string, body: any) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    return res;
  };

  public getLoginURL() {
    return "/api/auth/github";
  };

  public async login() {
    const res = await fetch("/api/auth/login/success", {
      method: "GET",
      credentials: "include",
    });

    if (res.status !== 200)
      throw new Error("failed to authenticate user");

    const json = await res.json();
    return json.user;
  };

  public getAllProjects() {
    return this.get("/api/project");
  };
};

export default new API();