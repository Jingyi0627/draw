var socket;

function setup() {
    createCanvas(400, 400);
    background(0);

    // Start a socket connection to the server
    // Some day we would run this server somewhere else
    // socket = io.connect('http://localhost:3000');
    socket = io();

    // We make a named event called 'mouse' and write an
    // anonymous callback function
    socket.on('mouse',
        // When we receive data
        function (data) {
            console.log("Got: " + data.x + " " + data.y);
            // Draw a blue circle
            fill(0, 0, 255);
            noStroke();
            ellipse(data.x, data.y, 20, 20);
        }
    );
}

function draw() {
    // Nothing
}
