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
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

document.querySelector('#track').addEventListener('mousemove', Tracker);
document.getElementById('afficher').addEventListener('click', Afficher);
document.getElementById('Rouge').addEventListener('mouseover', ImgOver);
document.getElementById('Rouge').addEventListener('mouseout', ImgOut);
document.querySelector('.dropbtn').addEventListener('click', toggleDropdown);