document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reservation-form').addEventListener('submit', function(event) {
        event.preventDefault();

        let formData = { //obiect - campurile primes valorile din inputuri
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            persons: document.getElementById('persons').value,
            day: document.getElementById('day').value,
            hour: document.getElementById('hour').value,
            zone_selection: document.getElementById('zone-selection').value,
            message: document.getElementById('message').value
        };

        //salvam rezervarea in localStorage
        const reservationKey = 'reservationData' + localStorage.length;
        localStorage.setItem(reservationKey, JSON.stringify(formData)); //valoarea trebuie sa fie sub forma de string

        // Redirectionez la pagina de rezervari
        window.location.href = 'reservations.html';
    });
});