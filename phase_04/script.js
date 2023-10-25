// Simulated real-time data for demonstration purposes.
function simulateData() {
    const temperature = (Math.random() * 30 + 10).toFixed(2);
    const humidity = (Math.random() * 70 + 30).toFixed(2);
    return { temperature, humidity };
}

function updateData() {
    const data = simulateData();
    document.getElementById("temperature").textContent = data.temperature;
    document.getElementById("humidity").textContent = data.humidity;
}

// Fetch and update data every 5 seconds.
setInterval(updateData, 5000);

// Call updateData immediately on page load.
updateData();
// Simulated real-time data for demonstration purposes.
