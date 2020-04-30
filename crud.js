const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const email = document.querySelector("#email");
const poste = document.querySelector("#poste");
const estMarie = document.querySelector("#estMarie");
const pays = document.querySelector("#pays");
const numeroTelephone = document.querySelector('#numeroTelephone');

const tbody = document.querySelector('tbody');
const btn = document.querySelector('#btn');
const form = document.querySelector('#form');

toutLesEmployes();
function toutLesEmployes(){
  axios({
    method:'get',
    url: 'http://167.71.45.243:4000/api/employes?api_key=nljygze',
  })
  .then((response)=>{
    for(let employe of response.data){
      afficherSupprimerModifier(employe);
    }
  })
  .catch((error)=>{
    console.log(error);
  })
}
function afficherSupprimerModifier(employe){
  let tr = `
  <tr>
    <td>${employe._id}</td>
    <td>${employe.nom}</td>
    <td>${employe.prenom}</td>
    <td>${employe.email}</td>
    <td>${employe.poste}</td>
    <td>${employe.numeroTelephone}</td>
    <td>${employe.estMarie ? "OUI" : "NOM"}</td>
    <td>${employe.pays}</td>
    <td>
      <button class="btn btn-primary" id="edit-${
        employe._id
      }">Edit</button>
      <button class="btn btn-danger" id="delete-${
        employe._id
      }">Delete</button>
    </td>
  </tr>
  `;
  tbody.insertAdjacentHTML("beforeend", tr);

  const detete = document.getElementById(`delete-${employe._id}`);
  const modifier = document.getElementById(`edit-${employe._id}`);
  
  //delete employe
  detete.addEventListener("click", (event) => {
    event.preventDefault();
    tbody.innerHTML = "";
    const confirmation = confirm("Tu es sur de supprimer cette enregistrement");
    if (confirmation){
      supprimerEmploye(employe)
    }
  });

  //set employer values for update
  modifier.addEventListener("click", (event) => {
  event.preventDefault();
  btn.textContent = "Modifier";
  preRemplirChamps(employe);
  });
 
}

  //ajouter et supprimer 
  btn.addEventListener('click',(event)=>{
    event.preventDefault();
    tbody.innerHTML = "";
    event.preventDefault();
    if(validerFormulaire(form)){
      if(btn.textContent === "Modifier"){
        event.preventDefault();
        modifierEmploye(document.querySelector('#_id').value);
      }else{
        addEmploye();
      }
    }
  });

 function addEmploye(){
    axios({
      method:'post',
      url: 'http://167.71.45.243:4000/api/employes?api_key=nljygze',
      data: {
        nom: nom.value,
        prenom: prenom.value,
        estMarie: estMarie.value,
        pays: pays.value,
        email: email.value,
        poste: poste.value,
        numeroTelephone: numeroTelephone.value
      }
    })
    .then((response)=>{
      tbody.innerHTML = " ";
      alert("L'employé ajouté avec succèss");
      toutLesEmployes();
      nom.value = "";
      prenom.value = "";
      email.value = "";
      poste.value = "";
      estMarie.value = "";
      pays.value = "";
      numeroTelephone.value = "";
    })
    .catch((error)=>{
      alert('Une erreur est survenue');
      console.log(error.response);
    })
 }

 function supprimerEmploye(employe){
  axios
  .delete(
    `http://167.71.45.243:4000/api/employes/${employe._id}?api_key=nljygze`
  )
  .then((res) => {
    console.log(res.data);
    alert('Suppression reussit avec succes');
    toutLesEmployes();
  })
  .catch((err) => {
    console.error(err);
    alert('Echec de supprimer');
  });
 }

 function preRemplirChamps(employe){
  _id.value = employe._id;
  nom.value = employe.nom;
  prenom.value = employe.prenom;
  email.value = employe.email;
  estMarie.value = employe.estMarie;
  poste.value = employe.poste;
  pays.value = employe.pays;
  numeroTelephone.value = employe.numeroTelephone;
 }
 
 //modifier
function modifierEmploye(employeId){
  axios({
    method:'put',
    url: `http://167.71.45.243:4000/api/employes/${employeId}?api_key=nljygze`,
    data: {
      nom: nom.value,
      prenom: prenom.value,
      estMarie: estMarie.value,
      pays: pays.value,
      email: email.value,
      poste: poste.value,
      numeroTelephone: numeroTelephone.value
    }
  })
  .then((response)=>{
    alert("Modification reussit");
    toutLesEmployes();
      nom.value = "";
      prenom.value = "";
      email.value = "";
      poste.value = "";
      estMarie.value = "";
      pays.value = "";
      numeroTelephone.value = "";
      btn.textContent = "Ajouter"
  })
  .catch((error)=>{
    alert('Echec de modification');
    console.log(error.response);
  })
}

function validerFormulaire(form) {
  let error;
  for (let input of form) {
    if (input.required) {
      error = document.getElementById(`${input.name}Error`);
      if (input.value === "") {
        error.textContent = `Le "${input.name}" est obligatoire`;
         return toutLesEmployes();
      } else {
        error.textContent = "";
      }
    }
  }
  return error.textContent === "" ? true : false;
}

