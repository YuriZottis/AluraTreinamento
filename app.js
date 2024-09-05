function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Exibe a seção no console para verificação
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada elemento do array 'data'
    for (let dado of data) {
      // Constrói o HTML para cada item do resultado da pesquisa
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.nome}</a>
          </h2>
          <p class="descricao-meta">${dado.codigo}</p>
        </div>
      `;
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }
