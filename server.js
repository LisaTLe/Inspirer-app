const express = require("express");
const path = require("path");
const routes = require("./routes");
const db = require("./config/connection");

const { ApolloServer } = require("apollo-server-express");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  //resolvers and typedefs go here once created
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(routes);

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer();
