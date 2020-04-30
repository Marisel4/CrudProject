const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const mail = document.getElementById("mail");
const age = document.getElementById("age");
const poste = document.getElementById("poste");
const telephone = document.getElementById("telephone");
const statut = document.getElementById("statut");
const pays = document.getElementById("pays");
const btn = document.getElementById("btn");
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");

const employees = [];

function ajouterBaliseErreur(name) {
  let span = document.createElement("span");
    span.classList.add('span');
    name.parentElement.appendChild(span);
    span = document.querySelector('.span');
    if(span.textContent === ""){
        span.textContent = "Erreur";
        span.classList.add('error');       
    }
}
btn.addEventListener("click", (event)=>{
    event.preventDefault();
    if (nom.value === "") {
        event.preventDefault();
        ajouterBaliseErreur(nom);
      } else if (prenom.value === "") {
        event.preventDefault();
        ajouterBaliseErreur(prenom);
      } else if (mail.value === "") {
        event.preventDefault();
        ajouterBaliseErreur(mail);
      } else if (poste.value === "") {
        event.preventDefault();
        ajouterBaliseErreur(poste);
      } else if (telephone.value === "") {
        event.preventDefault();
        ajouterBaliseErreur(telephone);
      } else if (statut.value === "") {
        event.preventDefault();
        ajouterBaliseErreur(statut);
      } else if (pays.value === "") {
        event.preventDefault();
        ajouterBaliseErreur(pays);
      } else {
        event.preventDefault();
        tbody.innerHTML = '';
       
        let donneeEmployes = {
            matricule: Math.round(Math.random() * 100),
            nom: nom.value,
            prenom: prenom.value,
            mail: mail.value,
            age: age.value,
            poste: poste.value,
            telephone: telephone.value,
            statut: statut.value,
            pays: pays.value,
        }
        employees.push(donneeEmployes);
    
        for(let employe of employees){
            const tr = document.createElement('tr');
            tbody.append(tr);
            for(employeLu in employe){
                let td = document.createElement('td');
                tr.append(td);
                td.append(employe[employeLu]);
            }
        }
        nom.value = "";
        prenom.value = "";
        mail.value = "";
        age.value = "";
        poste.value = "";
        telephone.value = "";
        statut.value = "";
        pays.value = "" ; 
      }
});


