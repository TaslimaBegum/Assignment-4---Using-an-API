$(document).ready(function(){
	$.getJSON("https://api.spotify.com/v1/search", 
	{
	    q: " Shakira",
	    type: "artist",
	},
	function(data){
		console.log(data);
	    var shakira = data.artists.items[3];
	    var shakiraId = shakira.id;

	    $("#name").html(shakira.name);
	    $("#image").attr("src", shakira.images[1].url);
	});
});


$(document).ready(function(){
	$.getJSON("https://api.spotify.com/v1/search", 
	{
	    q: " Shakira",
	    type: "track",
	},
	function(data){
		console.log(data);
	    var song = data.tracks.items[2];

	    $("#track").html(song.name);
	    $("#popularity").html(song.popularity);
	    $("#album-image").attr("src", song.album.images[1].url);
	});
});


