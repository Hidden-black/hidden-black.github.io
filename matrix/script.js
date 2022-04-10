var root = {
    wavecolor: {
        r: 0,
        g: 255,
        b: 93
    },
    rainbowSpeed: 0,
    rainbow: false,
    matrixspeed: 50
};

var c = document.getElementById("c");
var ctx = c.getContext("2d");

var hueFw = false;
var hue = -0.01;

c.height = window.innerHeight;
c.width = window.innerWidth;

var konkani = "=アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレワヰヱヲンヺ・ーヽヿ0123456789"
var characters = konkani.split("");
var font_size = 14;
var columns = c.width / font_size;
var gradient = ctx.createLinearGradient(0, 10, 0, 200);

var drops = [];

for (var x = 0; x < columns; x++)
    drops[x] = 1;

function draw() {

    ctx.fillStyle = "rgba(0,0,0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#BBB";
    ctx.font = font_size + "px arial";


    for (var i = 0; i < drops.length; i++) {

        ctx.fillStyle = "rgba(10,10,10, 1)";
        ctx.fillRect(i * font_size, drops[i] * font_size, font_size, font_size);
        var text = characters[Math.floor(Math.random() * characters.length)];

        if (root.rainbow) {
            hue += (hueFw) ? 0.01 : -0.01;
            var rr = Math.floor(127 * Math.sin(root.rainbowSpeed * hue + 0) + 128);
            var rg = Math.floor(127 * Math.sin(root.rainbowSpeed * hue + 2) + 128);
            var rb = Math.floor(127 * Math.sin(root.rainbowSpeed * hue + 4) + 128);
            ctx.fillStyle = 'rgba(' + rr + ',' + rg + ',' + rb + ')';
            ctx.fillRect =
        } else {
            ctx.fillStyle = 'rgba(' + root.wavecolor.r + ',' + root.wavecolor.g + ',' + root.wavecolor.b + ')';
        }

        ctx.fillText(text, i * font_size, drops[i] * font_size);
        drops[i]++;
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
    }
}

// Make a function to add numbers
function add(a, b) {
    return a + b;
}



window.onresize = () => {
    location.reload();
}

setInterval(draw, root.matrixspeed);