import { useState } from 'react';
import { useStoreContext } from '../context/context.jsx';
import HeaderSection from './components/HeaderSection.jsx';
import FooterSection from './components/FooterSection.jsx';
import "./SettingsView.css";

function SettingsView() {
    const { firstName, setFirst, lastName, setLast, email, selectedGenres, setSelected } = useStoreContext();
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        firstName,
        lastName,
        genres: [...selectedGenres]
    });

    const genresList = [
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

    const handleSave = () => {
        setFirst(formData.firstName);
        setLast(formData.lastName);
        setSelected(formData.genres);
        setEditMode(false);
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleGenreChange = (genre) => {
        setFormData(prev => {
            const exists = prev.genres.some(g => g.id === genre.id);
            return {
                ...prev,
                genres: exists
                    ? prev.genres.filter(g => g.id !== genre.id)
                    : [...prev.genres, genre]
            };
        });
    };

    const toggleEditMode = () => {
        if (editMode) {
            setFormData({
                firstName,
                lastName,
                genres: [...selectedGenres]
            });
        }
        setEditMode(!editMode);
    };

    return (
        <div className="settings-container">
            <HeaderSection />
            <div className="settings-content">
                <h1 className="settings-title">Account Settings</h1>
                <div className="settings-card">
                    <div className="settings-field">
                        <label className="settings-label">First Name</label>
                        {editMode ? (
                            <input
                                type="text"
                                className="settings-input"
                                value={formData.firstName}
                                onChange={(e) => handleChange('firstName', e.target.value)}
                            />
                        ) : (
                            <div className="settings-value">{firstName}</div>
                        )}
                    </div>

                    <div className="settings-field">
                        <label className="settings-label">Last Name</label>
                        {editMode ? (
                            <input
                                type="text"
                                className="settings-input"
                                value={formData.lastName}
                                onChange={(e) => handleChange('lastName', e.target.value)}
                            />
                        ) : (
                            <div className="settings-value">{lastName}</div>
                        )}
                    </div>

                    <div className="settings-field">
                        <label className="settings-label">Email</label>
                        <div className="settings-value">{email}</div>
                    </div>

                    <div className="settings-field">
                        <label className="settings-label">Favorite Genres</label>
                        <div className="genre-grid">
                            {genresList.map((genre) => (
                                <label key={genre.id} className="genre-item">
                                    <input
                                        type="checkbox"
                                        checked={formData.genres.some(g => g.id === genre.id)}
                                        onChange={() => handleGenreChange(genre)}
                                        disabled={!editMode}
                                        className="genre-checkbox"
                                    />
                                    <span className="genre-label">{genre.genre}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="settings-actions">
                        <button
                            onClick={toggleEditMode}
                            className={`action-button ${editMode ? 'cancel-button' : 'edit-button'}`}
                        >
                            {editMode ? 'Cancel' : 'Edit Profile'}
                        </button>
                        {editMode && (
                            <button
                                onClick={handleSave}
                                className="action-button save-button"
                            >
                                Save Changes
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <FooterSection />
        </div>
    );
}

export default SettingsView;