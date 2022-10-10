import * as React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

//import all components
import Main from "./components/main";
import Colors from "./components/colorGenerator/generatorTab";
import Colors2 from "./components/colorGenerator/generatorTab2";
import Colors3 from "./components/colorGenerator/generatorTab3";
import Colors4 from "./components/colorGenerator/generatorTab4";
import Colors5 from "./components/colorGenerator/generatorTab5";
import Navbar from "./components/navbar";
// import logo from "./logo.svg";
import "./App.css";

import { search } from "./routes/chiArtApi";
import Search from "./routes/search-art";
import SearchResults from "./routes/searchresults-art";
import { useState, useEffect } from "react";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [results, setResults] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Clear the results if the user gets rid of the search query
    if (!(query || query.length)) {
      setResults(null);
      return;
    }

    // Don't search for anything less than 3 characters
    if (query.length < 3) {
      return;
    }

    // Start a search
    setLoading(true);
    search(query, "id", "title", "image_id", "thumbnail")
      .then((searchResults) => {
        if (searchResults && searchResults.data) {
          setResults(searchResults.data);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <ApolloProvider client={client}>
      <div>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Main />
        </div>

        <div className="inspire-container">
          <div className="color-generator">
            <Colors />
            <Colors2 />
            <Colors3 />
            <Colors4 />
            <Colors5 />
          </div>

          <div className="art-Api">
            <Search query={query} onChange={(e) => setQuery(e.target.value)} />
            <SearchResults results={results} loading={loading} />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
