import  ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";
import { useEffect } from "react";
import { useState } from "react";
import './Tabela.css'

//const controle = new ControleLivro();

const controleEditora = new ControleEditora();

function LinhaLivro(props) {
    const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

    return (
        <tr>
            <td className="titulo">
                {props.livro.titulo}
                <button className="excluir" onClick={() => props.excluir(props.livro._id)}>Excluir</button>
            </td>
            <td>{props.livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                    {Array.isArray(props.livro.autores) && props.livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
}

function LivroLista() {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        ControleLivro.obterLivros().then((livrosObtidos) => {
            setLivros(livrosObtidos);
            setCarregado(true);
        });
    }, [carregado]);

    const excluir = (codigo) => {
        console.log('Código a ser excluído: ', codigo);

        ControleLivro.excluirLivro(codigo).then(() => {
            setCarregado(false);
        });
    };

    return (
        <main>
            <div>
            <h1>Catálogo de Livros</h1>
            {carregado ? (
                <table>
                <thead>
                    <tr className="cabeca">
                        <th>Titulo</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autor(es)</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
                    ))}
                </tbody>
            </table>
            ) : (
                <p>Carregando...</p>
            )}
            </div>
        </main>
    );
}

export default LivroLista;
