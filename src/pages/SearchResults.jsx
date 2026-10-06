import { useSearchParams } from 'react-router-dom';
import './SearchResults.css';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  return (
    <main className="search-results">
      <p className="search-results-label">Search results</p>
      <h1>{query}</h1>
      <p>
        Navigation solutions for <strong>{query}</strong> will appear here.
      </p>
    </main>
  );
}

export default SearchResults;
