import { useSearchParams } from 'react-router-dom';

function Search() {
  const [searchParams] = useSearchParams();
  const term = searchParams.get('term');
  
  return <h1>Search Term: {term}</h1>;
}

export default Search;
