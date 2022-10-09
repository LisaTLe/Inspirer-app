import "./artAPI.css";

function Search({ query, onChange }) {
  return (
    <div>
      <input
        className="search-bar"
        type="search"
        placeholder="Enter search term, for example: cats"
        value={query}
        onChange={onChange}
      />
    </div>
  );
}

export default Search;
