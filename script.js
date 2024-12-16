document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };
}

function updateTime() {
    const now = new Date();
    const offset = 5.5 * 60; // GMT+5:30 in minutes
    const localTime = new Date(now.getTime() + (offset * 60 * 1000));
    let hours = localTime.getUTCHours();
    const minutes = localTime.getUTCMinutes().toString().padStart(2, '0');

    let emoji;
    if (hours >= 2 && hours < 8) {
        emoji = '💤';
    } else if (hours >= 8 && hours < 17) {
        emoji = '⌨️';
    } else if (hours >= 17 && hours < 21) {
        emoji = '🍿';
    } else if (hours >= 21 || hours < 2) {
        emoji = '👨‍💻';
    } else {
        emoji = '🌙';
    }

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedTime = `${hours.toString().padStart(2, '')}:${minutes} ${ampm}`;

    document.getElementById("local-time").textContent = `${emoji} ${formattedTime}`;
}

setInterval(updateTime, 1000);
updateTime();