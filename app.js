const API_key = '8fb5c1cd07959398218d28af7cc52f81';
let aps = new XMLHttpRequest();
aps.open('GET', `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&language=pt-BR&page=1`);
aps.send();
aps.onload = filmesPopulares;

function filmesPopulares() {
  let conteudo = document.getElementById('conteudo');
  let tela = '<h2>POPULARES</h2>';
  let dado = JSON.parse(this.responseText);
  console.log(dado);
  dado.results.map(function (b) {
    let api3 = new XMLHttpRequest();
    api3.onload = () => {
      dadoapi3 = JSON.parse(api3.response);
      tela = tela + `
      <div class="box-filme">
      <img src="${'https://image.tmdb.org/t/p/w500' + b.poster_path}" alt="">
      <span class="title">${b.title}</span><br>
      <span class="credits">${b.release_date}</span> <br>
      <span class="text">${'Avaliação: ' + b.vote_average}</span> <br>
      <a href="https://www.imdb.com/title/${dadoapi3.imdb_id}/" target="_blank">Leia Mais</a>
  </div>`
  conteudo.innerHTML = tela;
    }
    api3.open('GET', `https://api.themoviedb.org/3/movie/${b.id}?api_key=8fb5c1cd07959398218d28af7cc52f81&language=pt-BR`)
    api3.send();
  })

}


function exibeFilmes() {
  let divTela = document.getElementById('conteudo');
  let texto = '';
  let dados = JSON.parse(this.responseText);
  console.log(dados)

  dados.results.map(function (a) {
    let api3 = new XMLHttpRequest();
    api3.onload = () => {
      dadoapi3 = JSON.parse(api3.response);
      texto = texto + `
      <div class="box-filme">
      <img src="${'https://image.tmdb.org/t/p/w500' + a.poster_path}" alt="">
      <span class="title">${a.title}</span><br>
      <span class="credits">${a.release_date}</span> <br>
      <span class="text">${'Avaliação: ' + a.vote_average}</span> <br>
      <a href="https://www.imdb.com/title/${dadoapi3.imdb_id}/" target="_blank">Leia Mais</a>
  </div>`
  divTela.innerHTML = texto;
    }
    api3.open('GET', `https://api.themoviedb.org/3/movie/${a.id}?api_key=8fb5c1cd07959398218d28af7cc52f81&language=pt-BR`)
    api3.send();
  })

}

function pesquisa() {

  let query = document.getElementById('Pesquisar').value;
  let xhr = new XMLHttpRequest();
  xhr.onload = exibeFilmes;
  xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=8fb5c1cd07959398218d28af7cc52f81&language=pt-BR&page=1&include_adult=false&query=${query}`);
  xhr.send()

}

document.getElementById('btn').addEventListener('click', pesquisa);










