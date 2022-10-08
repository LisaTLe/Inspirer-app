
import { artworkImageUrl } from "./chiArtApi";

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
   
   <div>
      {results.map((result) => (
        
        <div>

          <img src={artworkImageUrl(result.image_id, 250)} alt={result.thumbnail?.alt_text}>

          </img>

          <h1>{result.title} </h1>


        </div>

  
      ))}

   </div>
   
  
  );
}

export default SearchResults;