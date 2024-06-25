import { useState } from 'react'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacters = () => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results || []);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <main>
      <h1>Digite o nome de um personagem de Rick and Morty</h1>
      <p>e descubra um pouco sobre seu personagem..</p>
      <input className='nomeperso'
        type="text"
        placeholder="Digite um personagem..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={fetchCharacters} className='botaoperso'>Pesquisa</button>
      {loading && <p>Carregando...</p>}
      {error && <p>Error: {error.message}</p>}
      {characters.map(character => (
        <div key={character.id} className="divperso">
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <p>{character.gender}</p>          
          <p>{character.species}</p>
          <p>{character.status}</p>
        </div>
      ))}
    </main>
  );
}

export default App;