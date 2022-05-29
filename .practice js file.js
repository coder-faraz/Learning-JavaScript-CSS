
function changeStyleByClassName() {

	let ClassName = document.getElementsByClassName("demo");

	for(i=0; i<2; i++) {
		ClassName[i].style.color = "aqua";
		ClassName[i].style.backgroundColor = "maroon";
		ClassName[i].style.border = "thick dashed green";
		ClassName[i].style.margin = "2px 540px";
		ClassName[i].style.padding = "2px 4px";

		ClassName[i].style.textAlign = "center";
		ClassName[i].style.fontStyle = "italic";
		ClassName[i].style.textDecoration = "underline overline";
		}
}


function replaceContent() {

	let content = document.getElementsByTagName("p");

//	for(i=0; i<content.length; i++) {
//		content[i].innerHTML = "Content replaced by innerHTML property" + "<br />";
//		content[i].style.color = "teal";
//		content[i].style.border = "5px dotted green";
//		content[i].style.margin = "2px 1050px 4px 8px";
//		content[i].style.padding = "2px 4px";
//	}
//	let content0 = content[0].innerHTML;
//	let content1 = content[1].innerHTML;
	let bothCombined = content[2].innerHTML = content[0].innerHTML + content[1].innerHTML;

	if(bothCombined.value.length > 1) {
		content[0].innerHTML = " ";
//		let erased1 = content[1].innerHTML = " ";
	}
}


function replaceImageAndButton() {

	let changedImg = document.getElementById("image");
	let button1 = document.getElementById("button1");
	
	button1.style.backgroundColor="aqua";
	button1.style.color="purple";
	button1.style.border="3px solid maroon";
	button1.style.borderRadius="6px";
	button1.style.padding="3px";
	button1.style.display="flex";
	button1.style.fontWeight="800";
	button1.style.textAlign="center";

	button1.innerHTML = "You Clicked Here";

	changedImg.src="file:///F:/Pictures..)/Adobe Photoshop pics/passport size photo with name on it.jpg";
}


function getDate() {
	let dateVar = new Date();
	let handle = document.getElementById("date");
	handle.innerHTML=dateVar.toDateString();

}


function changeColor() {
	let changed = document.getElementById("events");
	changed.style.color = "purple";
	changed.style.fontWeight="800";
	changed.style.fontSize="x-large";
	changed.style.margin="10px 300px";
}

function toNormal() {
	let normal = document.getElementById("events");
	normal.style.color="";
	normal.style.fontWeight="";
	normal.style.fontSize="";
}


function replaceImage2() {
	document.getElementById("image2").src="file:///F:/Pictures..)/Adobe Photoshop pics/Wallpaper/1332513820.jpg";
}

function toNormal2() {
	let normal = document.getElementById("image2");
	normal.src="file:///F:\Pictures..)/Adobe Photoshop pics/Wallpaper/-1896137618.jpg";
}






