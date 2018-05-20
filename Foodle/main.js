

// Initialize Firebase
var config = {
	apiKey: "AIzaSyCvmC3zBvuDdEC9mwFxYTMHUO530w07gao",
	authDomain: "foodle-3874d.firebaseapp.com",
	databaseURL: "https://foodle-3874d.firebaseio.com",
	projectId: "foodle-3874d",
	storageBucket: "foodle-3874d.appspot.com",
	messagingSenderId: "999921130778"
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const ref = firebase.storage().ref();

var current_template = null;
var thumbnail_chosen = null;
var new_post_num;

$(document).ready(function() {
	console.log(sessionStorage.session);

	if (!sessionStorage.session) {
		sessionStorage.session = true;
		localStorage.clear();
		localStorage.setItem('new-post-num', 0);
		new_post_num = 0;
	} else {
		new_post_num = parseInt(localStorage.getItem('new-post-num'));
		if ($('body').is('.profile')) {
			$('#li-profile').css('background-color', "#4c4c4c");
			$("#li-profile").hover(function(){
		    	$(this).css("background-color", "#4c4c4c");
		    }, function(){
        		$(this).css("background-color", "#4c4c4c");
		    });

			if (new_post_num > 0) {
				console.log('setting post info');
				for (i = 0; i < new_post_num; i++) {
					addPostToProfile(i);
				}
			}
		} else if ($('body').is('.saved')) {
			$('#li-saved').css('background-color', "#4c4c4c");
			$("#li-saved").hover(function(){
		    	$(this).css("background-color", "#4c4c4c");
		    }, function(){
        		$(this).css("background-color", "#4c4c4c");
		    });
		} else if ($('body').is('.newpost')) {
			$('#li-newpost').css('background-color', "#4c4c4c");
			$("#li-newpost").hover(function(){
		    	$(this).css("background-color", "#4c4c4c");
		    }, function(){
        		$(this).css("background-color", "#4c4c4c");
		    });
		}
	}
	
});

function template1() {
	current_template = 1;

	if ($("#next-btn").is(":disabled")) {
		$("#next-btn").removeAttr("disabled");
		$("#initial").hide();
	}

	$('.template-btn').css("box-shadow", "");
	$('#t1-btn').css("box-shadow", "0px 0px 20px #26afff");

	$('.template').css("display", "none");
	$('#template1').css("display", "contents");

	imgUpload0 = document.getElementById('t1-upload0');
	imgArea0 = document.getElementById('t1-img0');
	imgUpload0.onchange = function() {previewFile(imgUpload0, imgArea0, 0);};

	resetThumbnailTable();
	setThumbnailTable(1);
}

function template2() {
	current_template = 2;

	if ($("#next-btn").is(":disabled")) {
		$("#next-btn").removeAttr("disabled");
		$("#initial").hide();
	}

	$('.template-btn').css("box-shadow", "");
	$('#t2-btn').css("box-shadow", "0px 0px 20px #26afff");

	$('.template').css("display", "none");
	$('#template2').css("display", "grid");

	imgUpload0 = document.getElementById('t2-upload0');
	imgArea0 = document.getElementById('t2-img0');
	imgUpload0.onchange = function() {previewFile(imgUpload0, imgArea0, 0);};

	resetThumbnailTable();
	setThumbnailTable(1);
}

function template3() {
	current_template = 3;

	if ($("#next-btn").is(":disabled")) {
		$("#next-btn").removeAttr("disabled");
		$("#initial").hide();
	}

	$('.template-btn').css("box-shadow", "");
	$('#t3-btn').css("box-shadow", "0px 0px 20px #26afff");

	$('.template').css("display", "none");
	$('#template3').css("display", "grid");

	imgUpload0 = document.getElementById('t3-upload0');
	imgArea0 = document.getElementById('t3-img0');
	imgUpload0.onchange = function() {previewFile(imgUpload0, imgArea0, 0);};

	imgUpload1 = document.getElementById('t3-upload1');
	imgArea1 = document.getElementById('t3-img1');
	imgUpload1.onchange = function() {previewFile(imgUpload1, imgArea1, 1);};

	resetThumbnailTable();
	setThumbnailTable(2);
}

function template4() {
	current_template = 4;

	if ($("#next-btn").is(":disabled")) {
		$("#next-btn").removeAttr("disabled");
		$("#initial").hide();
	}

	$('.template-btn').css("box-shadow", "");
	$('#t4-btn').css("box-shadow", "0px 0px 20px #26afff");

	$('.template').css("display", "none");
	$('#template4').css("display", "grid");

	imgUpload0 = document.getElementById('t4-upload0');
	imgArea0 = document.getElementById('t4-img0');
	imgUpload0.onchange = function() {previewFile(imgUpload0, imgArea0, 0);};

	imgUpload1 = document.getElementById('t4-upload1');
	imgArea1 = document.getElementById('t4-img1');
	imgUpload1.onchange = function() {previewFile(imgUpload1, imgArea1, 1);};

	imgUpload2 = document.getElementById('t4-upload2');
	imgArea2 = document.getElementById('t4-img2');
	imgUpload2.onchange = function() {previewFile(imgUpload2, imgArea2, 2);};

	imgUpload3 = document.getElementById('t4-upload3');
	imgArea3 = document.getElementById('t4-img3');
	imgUpload3.onchange = function() {previewFile(imgUpload3, imgArea3, 3);};

	resetThumbnailTable();
	setThumbnailTable(4);
}

function setThumbnailTable(numThumbnails) {
	for (i = 0; i < numThumbnails; i++) {
		var tempChoice = "<td><img class='thumbnail' id='thumbnail" + i + "'><br><input class='radio' type='radio'></td>";
		$('#row0').append(tempChoice);
	}
}

function resetThumbnailTable() {
	while ($('#row0').children().length > 1) {
		$('#row0 td').last().remove();
	}
}

function previewFile(uploadElem, imgElem, i){
	var file = uploadElem.files[0];
	var name = file.name;

	ref.child("thumbnail" + i + "-" + new_post_num).put(file).then(function(snapshot) {
		localStorage.setItem("thumbnail" + i + "-" + new_post_num, snapshot.downloadURL);
		console.log('Uploaded a blob or file!');
	});

	var reader = new FileReader();

	reader.onloadend = function () {
		imgElem.src = reader.result;
		document.getElementById('thumbnail' + i).src = reader.result;
	}

	if (file) {
		reader.readAsDataURL(file);
	} else {
		imgElem.src = "";
	}
}

function next() {
	document.getElementById("form-overlay").style.display = "block";
}

function cancel() {
	document.getElementById("form-overlay").style.display = "none";
}

function post() {
	if (checkFields()) {
		savePostInfo();
		localStorage.setItem('new-post-num', new_post_num+1);
		$("#form").attr("action", "profile.html");
	} else {
		alert('Please fill out all the fields for the post!');
	}
}



function checkFields() {
	// Check that all fields on the canvas have a value
	var fields = $('#template' + current_template).children();

	for (i = 0; i < fields.length; i++) {
		var tempElem = fields[i];

		switch(tempElem.tagName.toLowerCase()) {
			case "input": 
				if (tempElem.attributes.type.value == 'text') {
					if (tempElem.value.length == 0) {
						return false;
					}
				} else if (tempElem.attributes.type.value == 'file') {

				}
				break;

			case "img":
				if (tempElem.src.length == 0) {
					return false;
				}
				break;

			case "textarea":
				if (tempElem.value.length == 0) {
					return false;
				}
				break;

			case "div":
				var tempUpload = tempElem.children[1];
				if (tempElem.children[0].src.length == 0) {
					return false;
				}

				if (tempElem.children[1]) {

				}
				break;

			default:
				break;
		}
	}

	// Check that all fields in the form are filled out
	var radioChosen = false;
	var radios = document.getElementsByClassName("radio");
	for (i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			radioChosen = true;
			thumbnail_chosen = i;
			break;
		}
	}

	if (!radioChosen) {
		return false;
	}

	if ($('#hover-info').val().length == 0) {
		return false;
	}

	if ($('#location').val().length == 0) {
		return false;
	}

	return true;
}

function savePostInfo() {
	var hoverInfo = document.getElementById("hover-info");
	localStorage.setItem("hover-info" + new_post_num, hoverInfo.value);

	var postTitle = document.getElementById("t" + current_template + "-title");
	localStorage.setItem("title" + new_post_num, postTitle.value);

	localStorage.setItem("thumbnail-i-" + new_post_num, thumbnail_chosen);

	var locationInfo = document.getElementById("location");
	localStorage.setItem("location" + new_post_num, locationInfo.value);

	localStorage.setItem("date" + new_post_num, getTodaysDate());
	localStorage.setItem("template" + new_post_num, current_template);

	// Dependent on template
	switch (current_template) {
		case 1:
			localStorage.setItem("body0-" + new_post_num, document.getElementById("t1-body0").value);
			break;

		case 2:
			localStorage.setItem("body0-" + new_post_num, document.getElementById("t2-body0").value);
			localStorage.setItem("body1-" + new_post_num, document.getElementById("t2-body1").value);
			break;

		case 3:
			localStorage.setItem("body0-" + new_post_num, document.getElementById("t3-body0").value);
			localStorage.setItem("body1-" + new_post_num, document.getElementById("t3-body1").value);
			break;

		case 4:
			localStorage.setItem("body0-" + new_post_num, document.getElementById("t4-body0").value);
			break;
	}

	console.log('saving post info');
}

function setPostInfo() {
	var firstHover = document.getElementsByClassName('text')[0];
	var menuDes = document.getElementsByClassName('small_text')[0];
	var firstPic = document.getElementsByClassName('image')[0];
	firstHover.innerHTML = localStorage.getItem("hover-info");
	menuDes.innerHTML = localStorage.getItem("menu-des");
	firstPic.src = localStorage.getItem('thumbnail');
}

function addPostToProfile(postNum) {
	var newDrop = document.createElement('div');
	newDrop.className = "dropdown";

	var newDropdown = document.createElement('div');
	newDropdown.className = "dropdown-content";
	newDropdown.id = "newDropdown" + postNum;

	var newDropClick = document.createElement('button');
	newDropClick.className = 'dropbtn';
	newDropClick.innerHTML = "...";
	newDropClick.setAttribute('onclick', "drop('newDropdown" + postNum + "')");

	var newDeleteBtn = document.createElement('button');
	newDeleteBtn.setAttribute('onclick', "deletePost('new-" + postNum + "')");
	newDeleteBtn.innerHTML = 'Delete';

	newDropdown.appendChild(newDeleteBtn);
	newDrop.appendChild(newDropClick);
	newDrop.appendChild(newDropdown);

	// Adding HTML element for the post thumbnail
	var newPost = document.createElement('div');
	newPost.className = "post";
	newPost.id = "new-" + postNum;

	var newPic = document.createElement('div');
	newPic.className = "picture";

	var newImg = document.createElement('img');
	newImg.className = 'profile_image';
	newImg.src = localStorage.getItem('thumbnail' + localStorage.getItem("thumbnail-i-" + postNum) + "-" + postNum);
	newImg.setAttribute('onclick', "on('new-post" + postNum +"')");


  	var newLike = document.createElement('button');
	newLike.className = 'button';
	newLike.id = 'like_p1' + postNum;
	newLike.innerHTML = "<i class='fa fa-heart'></i>";
	newLike.setAttribute('onclick', "like('p1" + postNum + "')");

	var newSave = document.createElement('button');
	newSave.className = 'button';
	newSave.id = 'bookmark_p1' + postNum;
	newSave.innerHTML = "<i class='fa fa-bookmark'></i>";
	newSave.setAttribute('onclick', "save('p1" + postNum + "')");

	var newComment = document.createElement('button');
	newComment.className = 'button';
	newComment.id = 'comment_p1' + postNum;
	newComment.innerHTML = "<i class='fa fa-comment'></i>";
	// newComment.setAttribute('onclick', "save('p1" + postNum + "')");


	var newHover = document.createElement('div');
	newHover.className = 'overlay';
	newHover.setAttribute('onclick', "on('new-post" + postNum +"')");
	newHover.innerHTML = "<div class='text'>" + localStorage.getItem('title' + postNum) + "</div>" +
						 "<div class='small_text'>" + localStorage.getItem("hover-info" + postNum) + "</div>" +
						 "<p><i class='fa fa-globe'></i> " + localStorage.getItem("location" + postNum) + "</p>" +
						 "<p><i class='fa fa-calendar'></i> " + localStorage.getItem("date" + postNum) + "</p>" +
						 "<p><i class='fa fa-heart'></i> <label id='p1" + postNum + "'>0</label></p>"

	newPic.appendChild(newImg);
	newPic.appendChild(newLike);
	newPic.appendChild(newSave);
	newPic.appendChild(newComment);
	newPic.appendChild(newHover);

	newPost.appendChild(newDrop);
	newPost.appendChild(newPic);

    var profileGrid = document.getElementById('profile-grid');
	profileGrid.insertBefore(newPost, profileGrid.firstChild);

	// Adding corresponding overlay for the post
	var newOverlay = document.createElement('div');
	newOverlay.id = "new-post" + postNum;
	newOverlay.classList.add("post-overlay");
	newOverlay.setAttribute("onclick", "off('new-post" + postNum + "')");

	switch (localStorage.getItem("template" + postNum)) {
		case "1":
			newOverlay.innerHTML = "<div class='post-overlay-bg t1'>" +
										"<div class='post-overlay-title'>" + localStorage.getItem('title' + postNum) + "</div>" +
										"<img class='post-overlay-img' src='" + localStorage.getItem('thumbnail' + localStorage.getItem("thumbnail-i-" + postNum) + "-" + postNum) + "'>" +
										"<div class='post-overlay-body'>" + localStorage.getItem("body0-" + postNum) + "</div>" +
									"</div>";

			break;

		case "2":
			newOverlay.innerHTML = "<div class='post-overlay-bg t2'>" +
										"<div class='post-overlay-title'>" + localStorage.getItem('title' + postNum) + "</div>" +
										"<img class='post-overlay-img' src='" + localStorage.getItem("thumbnail0-" + postNum)+ "'>" + 
										"<div class='post-overlay-body'>" + localStorage.getItem("body0-" + postNum) + "</div>" +
										"<div class='post-overlay-body'>" + localStorage.getItem("body1-" + postNum) + "</div>" +
									"</div>";
			break;

		case "3":
			newOverlay.innerHTML = "<div class='post-overlay-bg t3'>" +
										"<div class='post-overlay-title'>" + localStorage.getItem('title' + postNum) + "</div>" +
										"<img class='post-overlay-img' src='" + localStorage.getItem("thumbnail0-" + postNum)+ "'>" + 
										"<img class='post-overlay-img' src='" + localStorage.getItem("thumbnail1-" + postNum)+ "'>" + 
										"<div class='post-overlay-body'>" + localStorage.getItem("body0-" + postNum) + "</div>" +
										"<div class='post-overlay-body'>" + localStorage.getItem("body1-" + postNum) + "</div>" +
									"</div>";
			break;

		case "4":
			newOverlay.innerHTML = "<div class='post-overlay-bg t4'>" +
										"<div class='post-overlay-title'>" + localStorage.getItem('title' + postNum) + "</div>" +
										"<img class='post-overlay-img' src='" + localStorage.getItem("thumbnail0-" + postNum)+ "'>" + 
										"<img class='post-overlay-img' src='" + localStorage.getItem("thumbnail1-" + postNum)+ "'>" + 
										"<div class='post-overlay-body'>" + localStorage.getItem("body0-" + postNum) + "</div>" +
										"<img class='post-overlay-img' src='" + localStorage.getItem("thumbnail2-" + postNum)+ "'>" + 
										"<img class='post-overlay-img' src='" + localStorage.getItem("thumbnail3-" + postNum)+ "'>" +
									"</div>";
			break;
	}
	profileGrid.insertBefore(newOverlay, profileGrid.firstChild);
	
}

function getTodaysDate() {
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var today = new Date();
	var dd = today.getDate();
	var mm = months[today.getMonth()];
	var yyyy = today.getFullYear();
	return mm + ' ' + dd + ', ' + yyyy;
}

function textAreaAdjust(o) {
	o.rows = Math.floor(o.value.length/50) + 1;
}

function on(overlayID) {
    document.getElementById(overlayID).style.display = "block";
}

function off(overlayID) {
    document.getElementById(overlayID).style.display = "none";
}

function openNav() {
	document.getElementById('hide-sidebar').classList.remove('fa-caret-right');
	document.getElementById('hide-sidebar').classList.add('fa-caret-left');
	document.getElementById('show-toggle').setAttribute("onclick", "closeNav()");
	
	document.getElementById("canvas").style.left = "0";
	document.getElementById("templates").style.left = "0";
}

function closeNav() {
	document.getElementById('hide-sidebar').classList.remove('fa-caret-left');
	document.getElementById('hide-sidebar').classList.add('fa-caret-right');
	document.getElementById('show-toggle').setAttribute("onclick", "openNav()");

    document.getElementById("canvas").style.left = "-6%";
    document.getElementById("templates").style.left = "-19%";
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function drop(dropdownID) {
    document.getElementById(dropdownID).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

function deletePost(postID) {
	$('#'+postID).remove();
	$('#'+postID.split('-')[0]+'-post'+postID.split('-')[1]).remove();
}

function like(id) {
	if (document.getElementById("like_"+id).style.color=="red") {
		document.getElementById("like_"+id).style.color="grey";
		current = parseInt($('#'+id)[0].innerHTML)-1
		document.getElementById(id).innerHTML = current
	} else {
		document.getElementById("like_"+id).style.color="red";
		current = parseInt($('#'+id)[0].innerHTML)+1
		document.getElementById(id).innerHTML = current
	}
}

function save(id) {
	if (document.getElementById("bookmark_" + id).style.color=="royalblue") {
		document.getElementById("bookmark_" + id).style.color="grey";
	} else {
		document.getElementById("bookmark_" + id).style.color="royalblue";
	}
}

