// Funzione per gestire la prenotazione
document.getElementById("form-prenotazione").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const servizio = document.getElementById("servizio").value;
    const data = document.getElementById("data").value;
    const orario = document.getElementById("orario").value;

    if (!nome || !servizio || !data || !orario) {
        alert("Per favore, completa tutti i campi.");
        return;
    }

    alert(`Prenotazione effettuata con successo per ${nome} per il servizio ${servizio} il ${data} alle ${orario}`);
});
document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Raccogli i dati del form
    const nome = document.getElementById('nome').value;
    const parrucchiere = document.getElementById('parrucchiere').value;
    const data = document.getElementById('data').value;
    const ora = document.getElementById('ora').value;

    // Crea un oggetto con i dati della prenotazione
    const prenotazione = {
        nome: nome,
        parrucchiere: parrucchiere,
        data: data,
        ora: ora
    };

    // Aggiungi la prenotazione all'array delle prenotazioni
    prenotazioni.push(prenotazione);

    // Salva l'array di prenotazioni nel localStorage
    localStorage.setItem('prenotazioni', JSON.stringify(prenotazioni));

    // Mostra di nuovo le prenotazioni
    mostraPrenotazioni();

    // Mostra il modale di conferma
    document.getElementById('modal-nome').textContent = nome;
    document.getElementById('modal-parrucchiere').textContent = parrucchiere;
    document.getElementById('modal-data').textContent = data;
    document.getElementById('modal-ora').textContent = ora;

    document.getElementById('modal-conferma').style.display = 'flex';

    // Resetta il modulo
    document.getElementById('booking-form').reset();
});

// Chiudi il modale
document.getElementById('chiudi-modal').addEventListener('click', function () {
    document.getElementById('modal-conferma').style.display = 'none';
});

// Funzione per il menu mobile
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}
// Funzione per aggiornare la tabella delle prenotazioni per ogni parrucchiere
function updatePrenotazioniTable(parrucchiere) {
    var tableBody = document.getElementById(parrucchiere + '-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Svuotiamo la tabella prima di aggiornarla

    prenotazioni[parrucchiere].forEach(function(prenotazione, index) {
        var row = tableBody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3); // Colonna per il pulsante Elimina

        cell1.textContent = prenotazione.nome;
        cell2.textContent = prenotazione.data;
        cell3.textContent = prenotazione.ora;

        // Aggiungi il pulsante Elimina
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Elimina';
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('data-index', index); // Memorizza l'indice della prenotazione
        deleteButton.addEventListener('click', function() {
            // Elimina la prenotazione dalla lista e aggiorna la tabella
            prenotazioni[parrucchiere].splice(index, 1);
            updatePrenotazioniTable(parrucchiere); // Rimuovi la prenotazione dalla tabella
        });

        cell4.appendChild(deleteButton);
    });
}
// Funzione per aggiornare la tabella delle prenotazioni per ogni parrucchiere
function updatePrenotazioniTable(parrucchiere) {
    var tableBody = document.getElementById(parrucchiere + '-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Svuotiamo la tabella prima di aggiornarla

    prenotazioni[parrucchiere].forEach(function(prenotazione, index) {
        var row = tableBody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3); // Colonna per il pulsante Elimina

        cell1.textContent = prenotazione.nome;
        cell2.textContent = prenotazione.data;
        cell3.textContent = prenotazione.ora;

        // Aggiungi il pulsante Elimina
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Elimina';
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('data-index', index); // Memorizza l'indice della prenotazione
        deleteButton.addEventListener('click', function() {
            // Elimina la prenotazione dalla lista e aggiorna la tabella
            prenotazioni[parrucchiere].splice(index, 1); // Rimuovi la prenotazione
            updatePrenotazioniTable(parrucchiere); // Rinfresca la tabella
        });

        cell4.appendChild(deleteButton); // Aggiungi il pulsante nella colonna
    });
}
function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
