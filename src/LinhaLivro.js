import React, { useState, useEffect } from 'react';

import ControleEditora from './controle/ControleEditora';

import { ControleLivro } from './controle/ControleLivros';

function LinhaLivro(props) {
    const nomeEditora = ControleEditora.getNomeEditora(props.livro.codEditora);

    return (
        <tr>
            <td>
                <button onClick={() => props.excluir(props.livro.codigo)}>Excluir</button>
            </td>
            <td>{props.livro.codigo}</td>
            <td>{props.livro.titulo}</td>
            <td>{props.livro.resumo}</td>
            <td>
                <ul>
                    {Array.isArray(props.livro.autores) && props.livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
            <td>{nomeEditora}</td>
        </tr>
    );
}

export default LinhaLivro;