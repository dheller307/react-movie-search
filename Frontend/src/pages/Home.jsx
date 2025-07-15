import MovieCard from "../components/MovieCard";
import {useState} from "react";
import "../css/Home.css"

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
    setSearchQuery("")
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) =>
          (<MovieCard movie={movie} key={movie.id} />)
        )}
      </div>
    </div>
  );
}

export default Home;
