window.addEventListener("DOMContentLoaded", function()
{
	var section = document.querySelector("#sec_blue"),
	starts = document.querySelector("#blue"),
	numblue = 0,
	imgblue = document.createElement("img"),
	tempblue;
	imgblue.src ="1.png";
	imgblue.className ="toy";

	section.addEventListener("click", function(event)
	{
		var id = event.target.id;
		if (id == "add_blue")
		{
			numblue += 1;
		}
		if (numblue < 0)
		{
			numblue = 0;
		}
		starts.innerHTML = "";
		tempblue = document.createDocumentFragment();
		for(var i = 0; i < numblue; i++)
		{
			tempblue.appendChild(imgblue.cloneNode());
		}
		starts.appendChild(tempblue);
	});
});

//_______________________________________________________

window.addEventListener("DOMContentLoaded", function()
{
	var section = document.querySelector("#sec_green"),
	starts = document.querySelector("#green"),
	numgreen = 0,
	imggreen = document.createElement("img"),
	tempgreen;
	imggreen.src ="2.png";
	imggreen.className ="toy";

	section.addEventListener("click", function(event)
	{
		var id = event.target.id;
		if (id == "add_green")
		{
			numgreen += 1;
		}
		if (numgreen < 0)
		{
			numgreen = 0;
		}
		starts.innerHTML = "";
		tempgreen = document.createDocumentFragment();
		for(var i = 0; i < numgreen; i++)
		{
			tempgreen.appendChild(imggreen.cloneNode());
		}
		starts.appendChild(tempgreen);
	});
});

//_______________________________________________________

window.addEventListener("DOMContentLoaded", function()
{
	var section = document.querySelector("#sec_red"),
	starts = document.querySelector("#red"),
	numred = 0,
	imgred = document.createElement("img"),
	tempred;
	imgred.src ="3.png";
	imgred.className ="toy";

	section.addEventListener("click", function(event)
	{
		var id = event.target.id;
		if (id == "add_red")
		{
			numred += 1;
		}
		if (numred < 0)
		{
			numred = 0;
		}
		starts.innerHTML = "";
		tempred = document.createDocumentFragment();
		for(var i = 0; i < numred; i++)
		{
			tempred.appendChild(imgred.cloneNode());
		}
		starts.appendChild(tempred);
	});
});

//_______________________________________________________

window.addEventListener("DOMContentLoaded", function()
{
	var section = document.querySelector("#sec_yellow"),
	starts = document.querySelector("#yellow"),
	numyellow = 0,
	imgyellow = document.createElement("img"),
	tempyellow;
	imgyellow.src ="4.png";
	imgyellow.className ="toy";

	section.addEventListener("click", function(event)
	{
		var id = event.target.id;
		if (id == "add_yellow")
		{
			numyellow += 1;
		}
		if (numyellow < 0)
		{
			numyellow = 0;
		}
		starts.innerHTML = "";
		tempyellow = document.createDocumentFragment();
		for(var i = 0; i < numyellow; i++)
		{
			tempyellow.appendChild(imgyellow.cloneNode());
		}
		starts.appendChild(tempyellow);
	});
});

