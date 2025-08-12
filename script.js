const song = [
    "I wanna da—, I wanna dance in the lights",
    "I wanna ro—, I wanna rock your body",
    "I wanna go, I wanna go for a ride",
    "Hop in the music and rock your body right",
    "",
    "Rock that body",
    "Come on, come on, rock that body (Rock yo' body)",
    "Rock that body",
    "Come on, come on, rock that body",
    "Rock that body",
    "Come on, come on, rock that body (Rock yo' body)",
    "Rock that body",
    "Come on, come on, rock that body",
];

const text = document.querySelector(".text");

text.textContent = "";

let delay = 0;

song.forEach((line) => {
	for (let index = 0; index < line.length; index++) {
		setTimeout(() => {
			text.textContent += line[index];
		}, delay);
		delay += 100;
	}

	setTimeout(() => {
		text.textContent = " ";
	}, delay);
	delay += 100;
});
