export default function Barrapesquisa(){
    return(
        <main>
            <input
        type="text"
        placeholder="Digite o nome de um personagem.."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
        </main>
    )
}