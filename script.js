// function updateClock() {
//     const now = new Date();
//     const seconds = now.getSeconds();
//     const minutes = now.getMinutes();
//     const hours = now.getHours();

//     const secondDegrees = ((seconds / 60) * 360) + 90;
//     const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
//     const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

//     document.getElementById('second').style.transform = `rotate(${secondDegrees}deg)`;
//     document.getElementById('minute').style.transform = `rotate(${minuteDegrees}deg)`;
//     document.getElementById('hour').style.transform = `rotate(${hourDegrees}deg)`;
// }

// setInterval(updateClock, 1000);
// updateClock(); // Initial call to set the clock immediately

// =========ANALOG CLOCK END============


// =========DIGITAL CLOCK START============
// function updateClock() {
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');

//     const timeString = `${hours}:${minutes}:${seconds}`;
//     document.getElementById('clock').textContent = timeString;
// }

// setInterval(updateClock, 1000);
// updateClock(); // Initial call to set the clock immediately


function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Convert to 12-hour format
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 0 to 12

    const timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${period}`;
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock immediately
