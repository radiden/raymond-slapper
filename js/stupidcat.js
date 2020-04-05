if (typeof localStorage["slapcount"] === "undefined") {
	localStorage["slapcount"] = 0;
}
slapcountint = parseInt(localStorage["slapcount"]);
var slapcountlast = 0;
var slap = new Audio("audio/slap.mp3");

slap.volume = 0.2;

function updatescore() {
	var scorediv = document.getElementById("slapcount");
	scorediv.innerHTML = `<strong>slap count: ${localStorage["slapcount"]}</strong>`; 
	checkforfunnysecret(slapcountint);
}

function stupidcat() {
	funnyslap();
	slapcountint++;
	slap.play();
	slapcountlast = slapcountint;
	localStorage["slapcount"] = slapcountint;
	updatescore();
	checkforhax(slapcountlast);
}

function checkforhax(slapcountlast) {
	var amusingsecretdiv = document.getElementById("stupidcismalecat");
	if (slapcountint != slapcountlast++) {
		amusingsecretdiv.innerHTML = `dirty cheater.`;
	}
}

function checkforfunnysecret(slapcount) {
	var amusingsecretdiv = document.getElementById("stupidcismalecat");	
	if (slapcount >= 10000) {
		amusingsecretdiv.innerHTML = `please stop`;
	}
	else if (slapcount >= 2000) {
		amusingsecretdiv.innerHTML = `i am actually impressed`;
	}
	else if (slapcount >= 1000) {
		amusingsecretdiv.innerHTML = `i think this is not healthy please stop`;
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
}

function funnyslap() {
	var unfunnycat = document.getElementById("stupidcat");
	unfunnycat.src = "img/stupidcatslapped.png";
	setTimeout(() => { unfunnycat.src = "img/stupidcat.png"; }, 100);
}
