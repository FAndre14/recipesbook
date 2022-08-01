import { useState } from "react";
import SearchBar from './components/searchBar/SearchBar';
import RecipeList from './components/recipeList/RecipeList';
import './index.css';

const App = () => {
  const [userSearches, setUserSearches] = useState(null);
  const updateSearches = (value) => {
    setUserSearches(value);
  }

  return (
    <div>
      <SearchBar updateSearches={updateSearches} />
      <RecipeList userSearches={userSearches} />
    </div>
  )
}

export default App;