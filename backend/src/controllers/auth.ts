require("dotenv").config();
import express from "express";

function loginSuccess(req: express.Request, res: express.Response) {
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: (req as any).user,
      cookies: req.cookies
    });
  };
};

function loginFail(req: express.Request, res: express.Response) {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate."
  });
};

export { loginSuccess, loginFail };