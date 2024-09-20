function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero to minutes and seconds if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the time in HH:MM:SS format
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately on load
updateTime();
