var tags;//array of tags for querys

//load
function loadSearches()
{
	if(!sessionStorage.getItem("herePreviously"))
	{
		sessionStorage.setItem("herePreviously", "true");
		document.getElementById("welcomeMessage").innerHTML =
		"Welcome to the Favorite Twitter Searches App";
	}//end if
	var length = localStorage.length; //number of key/value
	tags = []; //create empty array

	//load all keys
	for(var i=0; i<length;++i)
	{
		tags[i]= localStorage.key(i);
	}
}//end for

tags.sort(); //sort the keys

var markup = "<ul>";
var url = "http://search.twitter.com/search?q=";

for(var tag in tags)
{
	var query = url + loacalStorage.getItem(tags[tag]);
	markup += "<li><span><a href ='" + query + "'>" + tags[tag] +
	"</a></span>" +
	"<input id='" + tags[tag] + "' type='button'" +
	"value = 'Edit' onclick = 'editTag(id)'>" +
	"<input id='" + tags[tag] + "' type='button'" +
	"value = 'Delete' onclick = 'deleteTag(id)'>";
}//end for

markup += "</ul>";
document.getElementById("searches").innerHTML = markup;

function clearAllSearcesh()
{
	loacalStorage.clear();
	loadSearches();
}//end function

function saveSearch()
{
	var query = document.getElementById("query");
	var tag = document.getElementById("tag");
	localStorage.setItem(tag.value, query.value);
	tag.value = "";
	query.value = "";
	loadSearches();
}//end fuction

function deleteTag(tag)
{
	localStorage.removeItem(tag);
	loadSearches();
}//end function

function editTag(tag)
{
	document.getElementById("query").value = loacalStorage[tag];
	document.getElementById("tag").value = tag;
	loadSearches();
}//end function

function start()
{
	var saveButton = getElementById("saveButton");
	saveButton.addEventListener("click", saveSearch, false);
	var clearButton = document.getElementById("clearButton");
	clearButton.addEventListener("click", clearAllSearcesh, false);
	loadSearches();
}//end function

window.addEventListener("load", start, false);