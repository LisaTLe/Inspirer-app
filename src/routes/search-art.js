
function Search({ query, onChange }) {
    return (
      <div>
        <input type="search" placeholder="Enter search term, for example: cats"  value={query} onChange={onChange} />
        
      </div>

    );
    }
  
  export default Search;