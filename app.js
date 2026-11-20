import {createElement, injectElements, renewTag} from "./functions/dom.js";

const wrapper = document.querySelector('#controle')



/*function etape2() {
    const labelSaisie:HTMLElement=createElement(tagName'label',attributes:{for:'saisie'});
    const Saisie:HTMLElement=createElement(tagName'label',attributes:{for:'saisie'});

}
*/

function CalculEtape2(){
    const nombreDeTasses = document.querySelector('#saisie').value * 1
}

function start() {

    const etapes = [
        {title:"Commence à faire le café", duree:5000},
        {title:"Mouds les grains de café",duree:1000},
        {title:"Fait chauffer l'eau",duree:5000},
        {title:"Infuse les grains de café moulus",duree:4000},
        {title:"Verse le café dans une tasse",duree:2000},
        {title:"Ajoute un peu de lait dans la tasse",duree:1000},
        {title:"Le café est terminé.",duree:1000},
    ]
    const laListe = renewTag('ul');
    wrapper.append(laListe)

    injectElements(etapes, laListe)

}

document.querySelector('#start').addEventListener('click', start)


