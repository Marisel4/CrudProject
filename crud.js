const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const mail = document.querySelector("#mail");
const age = document.querySelector("#age");
const poste = document.querySelector("#poste");
const telephone = document.querySelector("#telephone");
const statut = document.querySelector("#statut");
const pays = document.querySelector("#pays");

const btn = document.querySelector("#btn");
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");

let selectedRow = null;

function onFormSubmit() {
      let formData = lireLesDonnees();
      if (selectedRow == null){
          insertNewRecord(formData);
          nom.value = "";
          prenom.value = "";
          mail.value = "";
          age.value = "";
          poste.value = "";
          telephone.value = "";
          statut.value = "";
          pays.value = "";
          selectRow = null;
      }else{
         modifierEnregistrement(formData);
         nom.value = "";
         prenom.value = "";
         mail.value = "";
         age.value = "";
         poste.value = "";
         telephone.value = "";
         statut.value = "";
         pays.value = "";
         selectRow = null;
      }
}

function ajouterBaliseError(name) {
  let span = document.createElement("span");
    span.classList.add('span');
    name.parentElement.appendChild(span);
    span = document.querySelector('.span');
    if(span.textContent === ""){
        span.textContent = "Erreur";
        span.classList.add('error');       
    }
}
function lireLesDonnees() {
  let formData = {};
  formData["matricule"] = Math.round(Math.random() * 100);;
  formData["nom"] = nom.value;
  formData["prenom"] = prenom.value;
  formData["mail"] = mail.value;
  formData["age"] = age.value;
  formData["poste"] = poste.value;
  formData["telephone"] = telephone.value;
  formData["statut"] = statut.value;
  formData["pays"] = pays.value;
  return formData;
}
function insertNewRecord(data){
  if (nom.value === "") {
    ajouterBaliseError(nom);
  } else if (prenom.value === "") {    
    ajouterBaliseError(prenom);
  } else if (mail.value === "") {    
    ajouterBaliseError(mail);
  } else if (poste.value === "") {     
    ajouterBaliseError(poste);
  } else if (telephone.value === "") {     
    ajouterBaliseError(telephone);
  } else if (statut.value === "") {     
    ajouterBaliseError(statut);
  } else if (pays.value === "") {     
    ajouterBaliseError(pays);
  } else {
    let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.matricule;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nom;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.prenom;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.mail;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.age;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.poste;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.telephone;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.statut;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.pays;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = `<a onClick="enregistrementAediter(this)" class="btn btn-primary">Edit</a>
                       <a onClick="supprimerEnregistrement(this)" class="btn btn-danger">Delete</a>`;
  }
}
function enregistrementAediter(td) {
  btn.textContent = "Modifier";
  selectedRow = td.parentElement.parentElement;
  nom.value = selectedRow.cells[1].innerHTML;
  prenom.value = selectedRow.cells[2].innerHTML;
  mail.value = selectedRow.cells[3].innerHTML;
  age.value = selectedRow.cells[4].innerHTML;
  poste.value = selectedRow.cells[5].innerHTML;
  telephone.value = selectedRow.cells[6].innerHTML;
  statut.value = selectedRow.cells[7].innerHTML;
  pays.value = selectedRow.cells[8].innerHTML;
}
function modifierEnregistrement(formData) {
  if (nom.value === "") {
    ajouterBaliseError(nom);
  } else if (prenom.value === "") {    
    ajouterBaliseError(prenom);
  } else if (mail.value === "") {    
    ajouterBaliseError(mail);
  } else if (poste.value === "") {     
    ajouterBaliseError(poste);
  } else if (telephone.value === "") {     
    ajouterBaliseError(telephone);
  } else if (statut.value === "") {     
    ajouterBaliseError(statut);
  } else if (pays.value === "") {     
    ajouterBaliseError(pays);
  } else {
    selectedRow.cells[1].innerHTML = formData.nom;
    selectedRow.cells[2].innerHTML = formData.prenom;
    selectedRow.cells[3].innerHTML = formData.mail;
    selectedRow.cells[4].innerHTML = formData.age;
    selectedRow.cells[5].innerHTML = formData.poste;
    selectedRow.cells[6].innerHTML = formData.telephone;
    selectedRow.cells[7].innerHTML = formData.statut;
    selectedRow.cells[8].innerHTML = formData.pays;
  }  
}

function supprimerEnregistrement(td) {
  if (confirm('Supprimer ?')) {
      row = td.parentElement.parentElement;
      document.getElementById("employeeList").deleteRow(row.rowIndex);
      nom.value = "";
      prenom.value = "";
      mail.value = "";
      age.value = "";
      poste.value = "";
      telephone.value = "";
      statut.value = "";
      pays.value = "";
      selectRow = null;
  }
}

