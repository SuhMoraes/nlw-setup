const form = document.querySelector('#form-habits');// Criamos uma variável para armazenar o form
const nlwSetup = new NLWSetup(form); // Criamos um novo objeto passando o form, que foi criado no HTML.
const button = document.querySelector('header button');

button.addEventListener('click',addHabits);
form.addEventListener('change', save);

function addHabits(){
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
  const dayExists = nlwSetup.dayExists(today);
  
  if (dayExists) {
    alert("🚨 Dia já incluso");
    return
  }
    nlwSetup.addDay(today);
    nlwSetup.alert("✅ Dia adicionado com sucesso");
}

function save() {
  window.localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
}
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};

nlwSetup.setData(data); //adicionando os dados dentro do nlwSetup
nlwSetup.load();// Carregamento dos dados 