import { artworkImageUrl } from "./chiArtApi";
import "./API.css";

function SearchResults({ results, loading }) {
  if (loading) {
    return (
      <div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (!(results && results.length)) {
    return null;
  }

  return (
    <div className="results-container">
      {results.map((result) => (
        <div className="results-box">
          <img
            className="img-result"
            src={artworkImageUrl(result.image_id, 250)}
            alt={result.thumbnail?.alt_text}
          ></img>

          <h1>{result.title} </h1>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
