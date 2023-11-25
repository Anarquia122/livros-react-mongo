import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ControleLivro from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';
import './cadastroLivro.css'

const controle = new ControleLivro();

function LivroDados() {
    const controleEditora = new ControleEditora();

    const opcoes = controleEditora.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome,
    }));

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);
    const [autores, setAutores] = useState('');

    const navigate = useNavigate();

    const salvarLivro = () => {
        const livro = {
            codigo: "",
            titulo,
            resumo,
            codEditora,
            autores: autores.split(",").map((autor) => autor.trim()),
        };

        ControleLivro.incluirLivro(livro).then(() => {
            navigate("/");
        })
    };

    return (
        <main>
            <div className='principal'>
                <form>
                    <h1>Adicionar Livro</h1>
                    <label>Título:</label>
                    <div className='form-group'>
                        <input type='text' value={titulo}
                            onChange={(e) => setTitulo(e.target.value)} />
                    </div>
                    <label>Resumo:</label>
                    <div className='form-group'>
                        <textarea value={resumo} onChange={(e) => setResumo(e.target.value)} />
                    </div>
                    <label>Editora:</label>
                    <div className='form-group'>
                        <select value={codEditora} onChange={(e) => setCodEditora(e.target.value)}>
                            {opcoes.map((opcao) => (
                                <option key={opcao.value} value={opcao.value}>
                                    {opcao.text}
                                </option>
                            ))}
                        </select>
                    </div>
                    <label>Autores (separados por vírgula):</label>
                    <div className='form-group'>
                        <input type='text' value={autores} onChange={(e) => setAutores(e.target.value)} />
                    </div>
                    <button className='salvar' type='button' onClick={salvarLivro}>Salvar Dados</button>
                </form>
            </div>
        </main>
    )
}

export default LivroDados;