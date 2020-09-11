/*
Copyright (c) 2011 Sam Phippen <samphippen@googlemail.com>
 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
--> 

*/

/*
Source code modified by @SangDang to remove some lines and fix the links bug.
(Sometimes links don't work in the original code)
*/

var Typer = {
	text: null,
	accessCountimer: null,
	index: 0, // current cursor position
	speed: 2, // speed of the Typer
	file: "", //file, must be setted
	finish: false,
	init: function () { // inizialize Hacker Typer
		$.get(Typer.file, function (data) { // get the text file
			Typer.text = data; // save the textfile in Typer.text
			Typer.text = Typer.text.slice(0, Typer.text.length - 1);
		});
	},

	content: function () {
		return $("#console").html(); // get console content
	},

	write: function (str) { // append to console content
		$("#console").append(str);
		return false;
	},

	addText: function (key) { //Main function to add the code
		if (Typer.text) {
			var cont = Typer.content(); // get the console content
			if (cont.substring(cont.length - 1, cont.length) == "|") // if the last char is the blinking cursor
				$("#console").html($("#console").html().substring(0, cont.length - 1)); // remove it before adding the text
			if (key.keyCode != 8) { // if key is not backspace
				Typer.index += Typer.speed; // add to the index the speed
			} else {
				if (Typer.index > 0) // else if index is not less than 0 
					Typer.index -= Typer.speed; //	remove speed for deleting text
			}
			var text = Typer.text.substring(0, Typer.index) // parse the text for stripping html enities
			var rtn = new RegExp("\n", "g"); // newline regex

			$("#console").html(text.replace(rtn, "<br/>")); // replace newline chars with br, tabs with 4 space and blanks with an html blank
			window.scrollBy(0, 50); // scroll to make sure bottom is always visible
		}
		if (key.preventDefault && key.keyCode != 122) { // prevent F11(fullscreen) from being blocked
			key.preventDefault()
		};
		if (key.keyCode != 122) { // otherway prevent keys default behavior
			key.returnValue = false;
		}
	},

	updLstChr: function () { // blinking cursor
		// We change the original strategy to fix links bug
		if ($("#cursor").css("visibility") == "visible")
			$("#cursor").css("visibility", "hidden");
		else
			$("#cursor").css("visibility", "visible");
	}
}


Typer.speed = 3;
Typer.file = "./js/profile.txt";
Typer.init();

var timer = setInterval("t();", 30);

function t() {
	Typer.addText({
		"keyCode": 123748
	});
	if (Typer.text && Typer.index > Typer.text.length) {
		clearInterval(timer);
		// inizialize timer for blinking cursor
		Typer.accessCountimer = setInterval(function () {
			Typer.updLstChr();
		}, 500);
	}
}