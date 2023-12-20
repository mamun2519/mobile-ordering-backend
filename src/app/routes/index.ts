import express from "express";

const router = express.Router();

// all module route is here
const AllModuleRoutes = [{ path: "/auth", router: AuthRouter }];

AllModuleRoutes.forEach((route) => router.use(route.path, route.router));

export const RootRoutes = router;
