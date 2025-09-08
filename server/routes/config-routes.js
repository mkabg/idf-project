import postsRoutes from "./posts-routes.js"
function configRoutes(app) {
    app.use("posts", postsRoutes())
  app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
  });
}
