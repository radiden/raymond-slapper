if (!localStorage["slapcount"]) {
	localStorage["slapcount"] = 0;
}
if (localStorage["cheater"]) {
	localStorage.removeItem("cheater");
}
slapcountint = parseInt(localStorage["slapcount"]);
var slapcountlast = 0;
var slap = new Audio("audio/slap.mp3");

function updatescore() {
	var scorediv = document.getElementById("slapcount");
	scorediv.innerHTML = `<strong>slap count: ${localStorage["slapcount"]}</strong>`; 
	checkforfunnysecret(slapcountint);
}

let touches = {};

function maybestupidcat(e) {
	const stupid = document.querySelector("#stupidcat");
	/** @type {TouchEvent} */
	let touchEvent = e;

	for (let i=0; i < touchEvent.touches.length; i++) {
		let touch = touchEvent.touches[i];
		let over = stupid == document.elementFromPoint(touch.clientX, touch.clientY);
		if (touches[i] === undefined) {
			touches[i] = over;
		}

		if (over != touches[i]) {
			if (over) {
				stupidcat();
			}

			touches[i] = over;
		}

	}
}

function cleartouches() {
	touches = {};
}
function stupidcat() {
	funnyslap();
	slapcountint++;
	slapcountlast = slapcountint;
	var thisSlap = slap.cloneNode(true);
	thisSlap.volume = 0.2;
	thisSlap.play();
	localStorage["slapcount"] = slapcountint;
	updatescore();
}

function checkforfunnysecret(slapcount) {
	var amusingsecretdiv = document.getElementById("stupidcismalecat");
	if (slapcount >= 110000) {
		amusingsecretdiv.innerHTML = `there is nothing after this line. if you'd like to contribute though, dm me on twitter @rai_nyaa`;
	}
	else if (slapcount >= 101000) {
		amusingsecretdiv.innerHTML = `grumm cute`;
	}
	else if (slapcount >= 100000) {
		amusingsecretdiv.innerHTML = `Raymond has been sent to hell, this is merely a figment if your imagination at this point. Will you continue?`;
	}
	else if (slapcount >= 50000) {
		amusingsecretdiv.innerHTML = `epstein didn't kill himself`;
	}
	else if (slapcount >= 25000) {
		amusingsecretdiv.innerHTML = `im concerned`;
	}
	else if (slapcount >= 20000) {
		amusingsecretdiv.innerHTML = `don't you have anything better to do`;
	}
	else if (slapcount >= 15100) {
		amusingsecretdiv.innerHTML = `or have you?`;
	}
	else if (slapcount >= 15000) {
		amusingsecretdiv.innerHTML = `nothing happens after this one. you won.`;
	}
	else if (slapcount >= 12000) {
		amusingsecretdiv.innerHTML = `seriously stop`;
	}
	else if (slapcount >= 11000) {
		amusingsecretdiv.innerHTML = `no seriously stop`;
	}
	else if (slapcount >= 10000) {
		amusingsecretdiv.innerHTML = `please stop`;
	}
	else if (slapcount === 8008) {
		amusingsecretdiv.innerHTML = `haha boob number`;
	}
	else if (slapcount >= 5000) {
		amusingsecretdiv.innerHTML = `shoutouts to simpleflips`;
	}
	else if (slapcount >= 2000) {
		amusingsecretdiv.innerHTML = `i am actually impressed`;
	}
	else if (slapcount === 1337) {
		amusingsecretdiv.innerHTML = `l33t`;
	}
	else if (slapcount >= 1000) {
		amusingsecretdiv.innerHTML = `i think this is not healthy please stop`;
	}
	else if (slapcount === 420) {
		amusingsecretdiv.innerHTML = `funny weed number`;
	}
	else if (slapcount >= 202) {
		amusingsecretdiv.innerHTML = `slap cat`;
	}
	else if (slapcount === 201) {
		amusingsecretdiv.innerHTML = `haha just kidding`;
	}
	else if (slapcount === 200) {
		amusingsecretdiv.innerHTML = `raymond is dead now you may stop`;
	}
	else if (slapcount >= 100) {
		amusingsecretdiv.innerHTML = `wow, you really do hate raymond. good.`;
	}
	else if (slapcount === 69) {
		amusingsecretdiv.innerHTML = `haha sex number`;	
	}
	else if (slapcount >= 5) {
		amusingsecretdiv.innerHTML = `slapping spree`;
	}
	else if (slapcount === 4) {
		amusingsecretdiv.innerHTML = `quadruple slap`;
	}
	else if (slapcount === 3) {
		amusingsecretdiv.innerHTML = `triple slap`;
	}
	else if (slapcount === 2) {
		amusingsecretdiv.innerHTML = `double slap`;	
	}
}

function funnyslap() {
	var unfunnycat = document.getElementById("stupidcat");
	unfunnycat.src = "img/stupidcatslapped.png";
	setTimeout(() => { unfunnycat.src = "img/stupidcat.png"; }, 100);
}
