function CalculGain(){
    //On vérifie les inputs

    //On récupère les donnés dans le html
    let myForm = document.getElementById("formCalculGain");
    //On le transforme en objet FormData
    let formObj = new FormData(myForm);

    // On récupère les inputs du formulaire
    let tauxHoraire = formObj.get('TH');
    let tauxJournalier = formObj.get('TJM');
    let extras = formObj.get('Extras');

    let qtetauxHoraire = formObj.get('QteTH');
    let qtetauxJournalier = formObj.get('QteTJM');
    let qteextras = formObj.get('QteExtras');

    let charges = formObj.get('charges');

    //On commence le calcul
    let gainHeure = tauxHoraire * qtetauxHoraire;
    
    let gainJour = tauxJournalier * qtetauxJournalier;

    let gainExtras = extras * qteextras;

    let totalBrut = gainHeure + gainJour + gainExtras;

    //total - charges%
    let chargesADeduire = (totalBrut * (charges/100));
    let totalNet = totalBrut - chargesADeduire;

    document.getElementById("resultatBrut").innerText = totalBrut.toFixed(2)+ "€";
    document.getElementById("resultatDifference").innerText = chargesADeduire.toFixed(2)+ "€";
    document.getElementById("resultatNet").innerText = totalNet.toFixed(2)+ "€";

}

let btn = document.getElementById("buttonValidation");
btn.addEventListener('click', CalculGain);

let mesInputs = document.querySelectorAll('#formCalculGain input.form-control');
mesInputs.forEach(monInput => {
    monInput.addEventListener('keyup', CalculGain);
    monInput.addEventListener('change', CalculGain);
});