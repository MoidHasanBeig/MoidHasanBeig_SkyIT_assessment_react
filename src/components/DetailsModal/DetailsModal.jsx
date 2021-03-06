import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import './DetailsModal.scss';

const DetailsModal = ({ visibleRight, setVisibleRight, selectedMovies }) => {
    return (
        <Sidebar className="details-modal" visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
            <div className="details-container">
                <div className="details-sub-container">
                    <div className="movie-title">{selectedMovies && selectedMovies.title}</div>
                    <div className="movie-director">Directed by {selectedMovies && selectedMovies.director}</div>
                    <div className="movie-cast">Cast:
                        {selectedMovies && selectedMovies.cast.map((name,i) => {
                            return <div key={i} className="cast-name pill"> {name}</div>
                        })}
                    </div>
                    <div className="movie-genre">Genre:
                        {selectedMovies && selectedMovies.genre.map((name,i) => {
                            return <div key={i} className="genre-name pill"> {name}</div>
                        })}
                    </div>
                    <div className="movie-plot">
                        Plot: <br/><div className="plot-text">{selectedMovies && selectedMovies.plot}</div>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}

export default DetailsModal;