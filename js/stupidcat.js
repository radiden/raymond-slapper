var slapcount = 0;
var slapcountlast = 0;
var slap = new Audio("audio/slap.mp3");

slap.volume = 0.2;

function updatescore() {	
	var scorediv = document.getElementById("slapcount");
	scorediv.innerHTML = `<strong>slap count: ${slapcount}</strong>`; 
}

function stupidcat() {
	funnyslap();
	slapcount++;
	slap.play();
	updatescore();
	slapcountlast = slapcount;
	checkforfunnysecret(slapcount, slapcountlast);
}

function checkforfunnysecret(slapcount, slapcountlast) {
	var amusingsecretdiv = document.getElementById("stupidcismalecat");
	if (slapcount != slapcountlast++) {
		amusingsecretdiv.innerHTML = `dirty cheater.`
	}
	if (slapcount == 100) {
		amusingsecretdiv.innerHTML = `wow, you really do hate raymond. good.`
	}
	else if (slapcount == 200) {
		amusingsecretdiv.innerHTML = `raymond is dead now you may stop`
	}
	else if (slapcount == 201) {
		amusingsecretdiv.innerHTML = `haha just kidding`
	}
	else if (slapcount == 1000) {
		amusingsecretdiv.innerHTML = `i think this is not healthy please stop`
	}
}

function funnyslap() {
	var unfunnycat = document.getElementById("stupidcat");
	unfunnycat.src = "img/stupidcatslapped.png";
	setTimeout(() => { unfunnycat.src = "img/stupidcat.png"; }, 100);
}
