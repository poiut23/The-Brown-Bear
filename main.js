var main = function () {

    const h2 = document.querySelector('h2');
    console.log(h2);
    h2.innerHTML = "man eats bears";

    let Bbutton = document.getElementById('Bbutton');
    if (Bbutton) {
        Bbutton.onclick = function () {
            let newButton = document.createElement('button');
            newButton.textContent = 'Click Me'; // Set button text
            Bbutton.appendChild(newButton); // Append the new button to the existing element
        };
    } else {
        console.error("Element with ID 'Bbutton' not found.");
    }

};

$(document).ready(main);