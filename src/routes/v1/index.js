const express = require("express");
const router = express.Router();

const config = require("../../config/config");
const authRoute = require("./auth.routes");
const userRoute = require("./user.routes");
const docsRoute = require("./docs.routes");
const feedbackRoute = require("./feedback.routes");
const productRoute = require("./product.routes");
const notificationRoute = require("./notifications.routes");
const categoriesRoute = require("./categories.routes");
const reviewRoute = require("./review.routes");
const orderRoute = require("./order.routes");



const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/categories",
    route: categoriesRoute,
  },
  {
    path: "/products",
    route: productRoute,
  },
  {
    path: "/orders",
    route: orderRoute,
  },
  {
    path: "/reviews",
    route: reviewRoute,
  },
  {
    path: "/feedback",
    route: feedbackRoute,
  },
  {
    path: "/notifications",
    route: notificationRoute,
  }









  // {
  //   path: "/analysis-history",
  //   route: analysisHistoryRoute,
  // },
  // {
  //   path: "/checkout",
  //   route: webhookRoute,
  // }

];

const devRoutes = [
  // routes available only in development mode
  {
    path: "/docs",
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === "development") {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
