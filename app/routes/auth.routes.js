import { verifySignUp } from "../middleware";
import { signIn, signUp } from "../controllers/auth.controller";

const authRoutes = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    signUp
  );

  app.post("/api/auth/signin", signIn);
};

export default authRoutes;
