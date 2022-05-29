
function nextArticleAndAttrib() {
	let head = document.createElement("h2");	// - This will create a new h2 HTML Element &  that Element will get stored in our head variable.
	let para = document.createElement("p");		// - No need to specify the position because automatically gets added after the last HTML Element..

	let div = document.getElementById("div1");
	div.appendChild(head);		// - Appending our newly created h2 and p Elements as Child to Parent Element because in hierarchy of HTML we have Parent & 
	div.appendChild(para);		// Child Elements and div Element here, acts as a Parent Element of all h2  &  p Elements which are inside div Element..

	let headText = document.createTextNode("Microsoft To Set Up 4th Data Centre Region In Hyderabad");	// - Adding Text to our newly created h2 Element
	let pText = document.createTextNode("Microsoft India said that it intends to set up its fourth data centre region in Hyderabad, Telangana to meet the growing demand for public Cloud in India. This will be the companys largest data centre in India and will be among the largest foreign direct investments (FDIs) in the state. According to IDC, Microsoft data centre regions in India contributed $9.8 billion in revenue to the economy between 2016 and 2020. Beyond GDP impact, the IDC report estimated 1.5 million jobs were added to the economy, including 169,000 new skilled IT jobs. The company currently has three datacentre regions in Mumbai, Pune and Chennai.");

	head.appendChild(headText);		// - Attaching above created, both the Text Nodes as Child to the Parent (h2 & p) Element Nodes, because Text Node is 
	para.appendChild(pText);		// always a Child of the Element Node..


	let pAttrib = document.createAttribute("style");	// - Creating style attribute node using createAttribute() method, you can create any attribute
	pAttrib.value = "font-family: times new roman;";	// - Using value property to assign a value to the style Attribute node

	para.setAttributeNode(pAttrib);			// - This method will set our newly created Attribute Node to the paragraph Element that we created above.
							// -- We don't need to use appendChild() method, because Attribute Node is a part of Element Node, not it's child
}



function removeArticle() {
	let remH = document.getElementsByTagName("h2")[2];	   // - Grabbing 3rd heading tag from a collection of h2 tags by specifying a position of h2 tag as [2].
	let remP = document.getElementsByTagName("p")[2];

	let parentH = remH.parentNode;		// - Using parentNode property to get the Parent Node of 3rd heading tag that we want to remove(here, it is div element)
	let parentP = remP.parentNode;		// As in JavaScript DOM, everything is a Node, we have Element Nodes, Attribute Nodes, Text Nodes..

	parentH.removeChild(remH);			// - After getting the Parent of heading tag, we can remove the 3rd heading, by specifying the Parent Object  &  using
	parentP.removeChild(remP);			// removeChild() method..
}



