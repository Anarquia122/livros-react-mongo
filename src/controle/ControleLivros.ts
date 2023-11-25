import Livro from "../modelo/Livro";

interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

class ControleLivro {
  private static baseURL = "http://localhost:3132/livros"

  static async obterLivros(): Promise<Livro[]> {
    try {
      const response = await fetch(ControleLivro.baseURL);
      const livros: Livro[] = await response.json();
      return livros;
    } catch (error) {
      console.error('Erro ao obter livros: ', error);
      throw error;
    }
  }

  static async excluirLivro(codigo: string): Promise<boolean> {
    try {
        const response = await fetch(`${ControleLivro.baseURL}/${codigo}`, { method: 'DELETE' });
        const result = await response.json();
        return result.ok;
    } catch (error) {
        console.error('Erro ao excluir livro: ', error);
        throw error;
    }
  }

  static async incluirLivro(livro: Livro): Promise<boolean> {
    try {
      const response = await fetch(ControleLivro.baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(livro),
      });
      const result = await response.json();
      return result.ok;
    } catch (error) {
      console.error('Erro ao incluir livro: ', error);
      throw error;
    }
  }

}

export default ControleLivro;
