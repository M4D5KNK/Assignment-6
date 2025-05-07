import { Outlet } from "react-router-dom";
import HeaderSection from '../views/components/HeaderSection.jsx'
import Genres from "../views/components/Genres";
import FoooterSection from "../views/components/FooterSection";
import "./MoviesView.css";

function MoviesView() {
    const genres = [
        { genre: "Action", id: 28 },
        { genre: "Adventure", id: 12 },
        { genre: "Animation", id: 16 },
        { genre: "Crime", id: 80 },
        { genre: "Family", id: 10751 },
        { genre: "History", id: 36 },
        { genre: "Fantasy", id: 14 },
        { genre: "Horror", id: 27 },
        { genre: "Sci-Fi", id: 878 },
        { genre: "Mystery", id: 9648 },
    ];

    return (
        <div className="app-container">
            <HeaderSection />
            <div className="genre-container">
                <div className="genre-list">
                    <Genres genresList={genres} />
                </div>
                <div className="genre-movies">
                    <Outlet />
                </div>
            </div>
            <FoooterSection />
        </div>

    );
}

export default MoviesView;