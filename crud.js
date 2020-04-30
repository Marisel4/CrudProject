const btn = document.getElementById('btn');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const mail = document.getElementById('mail');
const age = document.getElementById('age');
const poste = document.getElementById('poste');
const telephone = document.getElementById('telephone');
const statut = document.getElementById('statut');
const pays = document.getElementById('pays');

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');

const employees = [];

btn.addEventListener('click', ajouterEmploye);gi
function ajouterEmploye(){
    tbody.innerHTML= '';
    event.preventDefault();
    let objectEmploye = {
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
    employees.push(objectEmploye);
    for(let employe of employees){
        const tr = document.createElement('tr');
        tbody.append(tr);
        for(employeLu in employe){
            let td = document.createElement('td');
            tr.append(td);
            td.append(employe[employeLu]);
        }
    }
}
