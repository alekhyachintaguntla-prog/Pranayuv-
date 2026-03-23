let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

function bookAppointment() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;

    // 🔴 Count appointments for SAME doctor on SAME date
    let doctorCount = appointments.filter(a => 
        a.doctor === doctor && a.date === date
    ).length;

    if (doctorCount >= 15) {
        alert("No vacancies! This doctor already has 15 appointments on this date.");
        return;
    }

    // (Optional) Limit per person (max 2 per day)
    let userCount = appointments.filter(a => 
        a.name === name && a.date === date
    ).length;

    if (userCount >= 2) {
        alert("You can only book 2 appointments per day!");
        return;
    }

    // ✅ Save appointment
    appointments.push({ name, age, doctor, date });
    localStorage.setItem("appointments", JSON.stringify(appointments));

    alert("Appointment Booked Successfully!");

    displayAppointments();

    document.getElementById("form").reset();
}