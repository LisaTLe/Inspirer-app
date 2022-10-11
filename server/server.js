// const express = require("express");
// const { ApolloServer } = require("apollo-server-express");
// const path = require("path");
// const { authMiddleware } = require("./utils/auth");

// const { typeDefs, resolvers } = require("./schemas");
// const db = require("./config/connection");

// const PORT = process.env.PORT || 3001;
// const app = express();

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// const startApolloServer = async (typeDefs, resolvers) => {
//   await server.start();
//   server.applyMiddleware({ app });

//   db.once("open", () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(
//         `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
//       );
//     });
//   });
// };

// startApolloServer(typeDefs, resolvers);

require("dotenv").config();
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./schemas/resolvers");

// const db = require("./config/connection");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

const MONGODB =
  "mongodb+srv://Lisa_Le:Lisaatlas123@cluster0.qcr1pg5.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: process.env.PORT || 4000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
