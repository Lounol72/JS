function ImgOver() {
    document.body.style.backgroundColor = 'red';
    document.getElementsByClassName('maclasse')[0].style.color = 'black';
    console.log('over');
}

function ImgOut() {
    document.body.style.backgroundColor = 'white';
    document.getElementsByClassName('maclasse')[0].style.color = 'red';
}

function Afficher() {
    let elements = document.getElementsByTagName('div');
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.display === 'block') {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'block';
        }
    }
    let but = document.getElementById('afficher');
    if (but.textContent === 'Afficher') {
        but.textContent = 'Cacher';
        but.style.backgroundColor = 'blue';
    } else {
        but.textContent = 'Afficher';
        but.style.backgroundColor = 'white';
    }
}

function Tracker(event)
{
    let zone = document.querySelector('#track');
    let cursor = document.querySelector('#cursor');

    cursor.style.top = event.clientY  - 4 + 'px';
    cursor.style.left = event.clientX - 4 + 'px';
}

function toggleDropdown() {
    let dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}

function validateField(field, regex, errorMessage) {
    if (!regex.test(field.value)) {
        field.setCustomValidity(errorMessage);
        return false;
    } else {
        field.setCustomValidity('');
        return true;
    }
}

function Submit(event) {
    event.preventDefault();
    const fields = [
        { id: 'nom', regex: /^[A-Za-z]{2,}$/, errorMessage: 'Le nom n\'est pas valide' },
        { id: 'prenom', regex: /^[A-Za-z]{2,}$/, errorMessage: 'Le prénom n\'est pas valide' },
        { id: 'adresse', regex: /^.{2,}$/, errorMessage: 'L\'adresse doit contenir au moins 2 caractères' },
        { id: 'mdp', regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[$?!&#@])[A-Za-z\d$?!&#@]{8}$/, errorMessage: 'Le mot de passe n\'est pas valide' },
        { id: 'numTel', regex: /^\d{10}$/, errorMessage: 'Le numéro de téléphone doit contenir exactement 10 chiffres' }

        
    ];

    let valid = fields.every(field => {
        const element = document.getElementById(field.id);
        return validateField(element, field.regex, field.errorMessage);
    });

    if (valid) {
        alert('Formulaire soumis avec succès');
        event.target.submit();
    }
}

document.querySelector('#track').addEventListener('mousemove', Tracker);
document.getElementById('afficher').addEventListener('click', Afficher);
document.getElementById('Rouge').addEventListener('mouseover', ImgOver);
document.getElementById('Rouge').addEventListener('mouseout', ImgOut);
document.querySelector('.dropbtn').addEventListener('click', toggleDropdown);
document.querySelector('form').addEventListener('submit', Submit);