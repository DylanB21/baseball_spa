/**
 *   AUTHOR: hbates@northmen.org
 *   VERSION: 1.0
 *   CREATED: 3.23.2015
 *   PROJECT: At Bat!
 */

"use strict";

/** @type {Array}.<string> */
var players = [];
var base = 0;

function prepScreen() {
	$("#fieldPositions").hide();
	$("#batting").hide();
	$("#nextBatting").hide();
	$("#gameInning").hide();
	$("#playerAbsent").show();

	for (var i = 0; i < players.length; i++) {
		var playerDiv = '<div class="small-9 column" id="player">' +
			'<h2>' + players[i][0] + players[i][1] + '</h2>' +
			'</div>' +
			'<div class="switch round large small-3 columns">' +
			'<input id="present type="checkbox"/>' +
			'<label for="present></label>' +
			'</div>';
		$('#playerAbsent').append(playerDiv);
	}
}

function determineHome() {
	$("#home").click(weField());
	$("#away").click(weBat());
}

function weBat() {
	$("#weAre").hide();
	$("#fieldPositions").hide();
	$("#playerAbsent").hide();
	$("#batting").show();
	$("#nextBatting").show();
	$("#gameInning").show();
}

function weField() {
	$("#weAre").hide();
	$("#playerAbsent").hide();
	$("#batting").hide();
	$("#nextBatting").hide();
	$("#fieldPositions").show();
	$("#gameInning").show();
}

function strikeBtnClick() {
	$("#strike").click(strike());
}

function strike() {
	var strikeout = 3;
	for (var i = 0; i < strikeout; i++);
}

function ballBtnClick() {
	("#ball").click(ball());
}

function ball() {
	var walk = 4;
	for (var i = 0; i < walk; i++) {
		if (i > walk) {
			base + 1;
		}
	}
}

function foulBtnClick() {
	("#foul").click(foul());
}

function outBtnClick() {
	("#out").click(out());
}

function runBtnClick() {
	("#run").click(run());
}

function baseBtnClick() {
	("#base").click(base());
}

function undoBtnClick() {
	("#undo").click(undo());
}

function setPlayersArray() {
	/** @type {Array.<string>} */
	var lines = [];
	$.ajax({
		url: 'data/Baseball.csv',
		contentType: "text/csv",
		async: false,
		success: function(text) {
			lines = text.split(/\n/);
			return;
		}
	});
	for (var i = 0; i < lines.length; i++) {
		players[i] = lines[i].split(",");
	}
}

window.onload = function() {
	setPlayersArray();
	prepScreen();
	determineHome();
	strikeBtnClick();
	ballBtnClick();
	foulBtnClick();
	outBtnClick();
	runBtnClick();
	baseBtnClick();
	undoBtnClick();
};