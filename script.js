function navegador(pagina) {
    let conteudo = document.getElementById("conteudo"); //pega o elemento onde o conteudo será exibido

    if (pagina === 'Sobre') { // se clicar em Sobre
      conteudo.innerHTML = `
        <h2>Sobre Mim</h2>
        <p>Me chamo Maiara. Gosto de tecnologia por isso estudo sobre. Acho interessante a forma como ela mudou o mundo e continua mudando a cada dia. Tenho 25 anos e sou do signo de cancêr. Moro na Cidade de São Paulo mas sou natural do Interior do Ceará. Gosto de gatos, frio e prefiro salgado que doce. Sei tocar guitarra e violão desde os meus 14 anos.</p>`;
    } else if (pagina === 'formacao') { // se clicar em Formatação
      conteudo.innerHTML = `
        <h2>Formação Educacional</h2>
        <p>Ensino médio completo. Estudante de ADS, cursando o 2º semestre. Falo português e estudo inglês</p>
        `;
    } else if (pagina === 'portifolio') { // se clicar em portifólio
      conteudo.innerHTML =`
        <h2>Portifólio</h2>
        <ul>
          <li>Infelizmente, ainda não criei nenhum projeto para apresentar.</li>
        </ul>
        `;
   } else if (pagina === 'contato') { // se clicar em contato
     conteudo.innerHTML = `
      <h2>Contato</h2>
      <form class="form-contato">
        <label for="email">Seu Email:
        </label>
      <input type="email" id="email" name="email" placeholder="Digite seu email" required>

      <label for="mensagem">Sua Mensagem:</label>
      <textarea id="mensagem" name="mensagem" rows="5" placeholder="Digite sua mensagem..." required></textarea>

      <button type="submit">Enviar</button>
    </form>

    <p id="mensagem-agradecendo">
    Obrigada pelo Contato!
    </p>
  `;
}
}
