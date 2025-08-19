const song = [
    "I wanna da—, I wanna dance in the lights",
    "I wanna ro—, I wanna rock your body",
    "I wanna go, I wanna go for a ride",
    "Hop in the music and rock your body",
    "Rock that body",
    "Come on, come on, rock that body (Rock yo' body)",
    "Rock that body",
    "Come on, come on, rock that body",
    "Rock that body",
    "Come on, come on, rock that body (Rock yo' body)",
    "Rock that body",
    "Come on, come on, rock that body",
];

const speed = [ 
    90, 90, 90, 90, 55, 55, 55, 55, 55, 55, 55, 55
];

const text = document.querySelector(".text");

text.textContent = "";

let totalDelay = 0;

song.forEach((line, lineIdx) => {
    const lineSpeed = speed[lineIdx] || 100;
    for (let index = 0; index < line.length; index++) {
        setTimeout(() => {
            text.textContent += line[index];
        }, totalDelay);
        totalDelay += lineSpeed;
    }

    setTimeout(() => {
        text.textContent = "";
    }, totalDelay);
    totalDelay += 300; // pause between lines
});
