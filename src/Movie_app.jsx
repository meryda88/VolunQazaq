import React, {useState} from 'react';
import './Movie_app.css'

function Movie_app() {
    const [movies, setMovies] = useState(() => JSON.parse(localStorage.getItem('movies')) || []);
    const [form, setForm] = useState({
      title: '',
      description: '',
      poster: '',
    });

const handleAddMovie = () => {
    if (form.title && form.description && form.poster) { 
      setMovies([...movies, { ...form, id: Date.now(), watched: false},
      ]);
    setMovies(newMovies);
    localStorage.setItem('movies', JSON.stringify(newMovies));
    setForm({title: '', description: '', poster: ''})
  }
};

const handleRemove = (id) => {
  setMovies(movies.filter((movie) => movie.id !==id));
};

const handleChange = (e) => {
  setForm({...form, [e.target.name]: e.target.value});
};

const handleToggleWathced = (id) => {
  setMovies(
    movies.map((map) =>
    movie.id === id 
    ? {...movie, watched: !movie.watched} : movie
    )
  );
};

  return (
    <div>
      <div className='movie-app'>
        <h1>Фильмы на заметку</h1>
        <input type="text" name='title' value={form.title} onChange={handleChange} placeholder = "Название"/>
        <input type="text" name='description' value={form.description} onChange={handleChange} placeholder = "Описание"/>
        <input name='poster' value={form.poster} onChange={handleChange} placeholder = "Постер фильма"/>
        <button className="btn-add" onClick={handleAddMovie}>Добавить фильм</button>
    </div>

    <div className="movie-list">
        {movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
                {movie.poster && <img src={movie.poster} alt="Poster" />}
                <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={movie.watched}
                  onChange={() => handleToggleWatched(movie.id)}
                  className="checkbox"
                />
                {movie.watched ? 'Просмотрен' : 'Не просмотрен'}
              </label>
                <button onClick={() => handleRemove(movie.id)}>Удалить</button>
            </div>
        ))}
    </div>
</div>
)}

  export default Movie_app;