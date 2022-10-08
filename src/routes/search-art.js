
function Search({ query, onChange }) {
    return (

      <input type="search" placeholder="Enter search term, for example: cats"  value={query} onChange={onChange} />

    );
    }
  
  export default Search;