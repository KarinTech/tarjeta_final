const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

// Set up snowflake array
const snowflakes = [];

// Set up max number of snowflakes
const maxSnowflakes = 100;

// Set up snowflake object
function Snowflake(x, y, radius, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
}

// Function to generate snowflakes
function generateSnowflakes() {
    for (let i = 0; i < maxSnowflakes; i++) {
        // Generate random x and y coordinates
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        
        // Generate random radius and speed
        const radius = Math.random() * 3 + 1;
        const speed = Math.random() * 1 + 0.5;

        // Push new snowflake to array
        snowflakes.push(new Snowflake(x, y, radius, speed));
    }
}