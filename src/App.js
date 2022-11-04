import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { Movies } from "./components/Movies";

const allMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: "1994",
    genre: "Drama",
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    plot: "Two imprisoned"
  },
  {
    id: 2,
    title: "The Godfather",
    year: "1972",
    genre: "Crime, Drama",
    director: "Francis Ford Coppola",
    actors: "Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  },
  {
    id: 3,
    title: "The Godfather: Part II",
    year: "1974",
    genre: "Crime, Drama",
    director: "Francis Ford Coppola",
    actors: "Al Pacino, Robert Duvall, Diane Keaton, Robert De Niro",
    plot: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: "2008",
    genre: "Action, Crime, Drama",
    director: "Christopher Nolan",
    actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
  },
  {
    id: 5,
    title: "The Lord of the Rings",
    year: "2003",
    genre: "Adventure, Drama, Fantasy",
    director: "Peter Jackson",
    actors: "Elijah Wood, Viggo Mortensen, Ian McKellen, Orlando Bloom",
    plot: "Gandalf and Aragorn lead the World of",
  },
];

function App() {
  return (
    <>
      <h1 className="text-center mt-10 text-5xl text-white font-semibold">
        MovieInfo
      </h1>
      <SearchBar />
      <Movies allMovies={allMovies} />
    </>
  );
}

export default App;
