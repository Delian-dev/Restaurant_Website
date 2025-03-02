document.addEventListener('DOMContentLoaded', function() { //functia se executa in momentul in care tot documentul html este incarcat
    let allReservations = '';

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('reservationData')) {
            let formData = JSON.parse(localStorage.getItem(key)); //transformam din nou valoarea in obiect
           
            if (formData) {
                let detailsHtml = `
                    <div class="reservation" id="${key}">
                        <p>Name: ${formData.name}</p>
                        <p>Email: ${formData.email}</p>
                        <p>Phone: ${formData.phone}</p>
                        <p>Number of Persons: ${formData.persons}</p>
                        <p>Day: ${formData.day}</p>
                        <p>Hour: ${formData.hour}</p>
                        <p>Area: ${formData.zone_selection}</p>
                        <p>Message: ${formData.message}</p>
                        <button onclick="deleteReservation('${key}')">Delete</button>
                    </div>
                `;
                allReservations += detailsHtml;
            }
        }
    }

    if (allReservations) {
        document.getElementById('reservation-details').innerHTML = allReservations;
    } else {
        document.getElementById('reservation-details').innerHTML = '<p>No reservations available</p>';
    }
});

function deleteReservation(key) {
    
    localStorage.removeItem(key); //eliminam din localStorage

   
    const reservationElement = document.getElementById(key); //stergem si elementul de pe pagina html
    if (reservationElement) {
        reservationElement.remove();
    }
}