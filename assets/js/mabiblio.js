let N = 20;
let notes = Array(N);

function CreerNotes()
{
    for (let i = 0; i < N ; i++)
    {
        notes[i] = Math.floor(Math.random() * 21);
    }
}

function PlusDix()
{
    for (let i = 0; i < N ; i++){
        if (notes [i] >= 10) console.log(notes[i]);
    }
}

function Moyenne()
{
    let somme = 0;
    for (let i = 0; i < N ; i++){
        somme += notes[i];
    }
    somme /= N;
    document.querySelector('#Moyenne').textContent = "Moyenne : " + somme;
}

function estPresent(x)
{
    let text = x;
    for (let i = 0; i < N ; i++){
        if ( notes[i] == x){
            text = x + " est présent";
            return text;
        }
    }
    text += " n'est pas présent";
    return text;
}

CreerNotes();
PlusDix();
Moyenne();
document.querySelector('#present').textContent = estPresent(0);
document.querySelector('#notes').textContent = notes;