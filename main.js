$(document).ready(function() { //on ready iife

  //select input field and output area
	var jsonInput = document.getElementById('jsonInput');
	var $htmlDisplayArea = $('#htmlDisplayArea');

  //listen for file input
	jsonInput.addEventListener('change', function(e) {
    //grab file on input
		var json = jsonInput.files[0];
    //get type of file
		var fileType = /json.*/;

    //if file is json, read file
		if (json.type.match(fileType))
    {
      //instantiate FileReader object
			var reader = new FileReader();

      //when file is loaded do stuff
			reader.onload = function(e) {
        //parse to JSON
        const jsonObject = JSON.parse(reader.result);
        //Empty display areas
        $htmlDisplayArea.empty();
        //map top level of array of objects and pass them to the converter and then join them together
        var toAppend = jsonObject.map(value => convertJsonToHtml(value)).join('');
        //append to dom
        $htmlDisplayArea.append(toAppend);
			};
      //read text
			reader.readAsText(json);
		}
    else // If not .json display error
    {
			$htmlDisplayArea.text("File not supported!");
		}
  });
});

//takes JSON and converts it to HTML recursively
function convertJsonToHtml(jsonObject) {

  //if the next level down is an object, wrap it in element defined by tag and pass it recursively
  if (isObject(jsonObject.content))
  {
    return (
      `<${jsonObject.tag}>
      ${convertJsonToHtml(jsonObject.content)}
      </${jsonObject.tag}>`
    );
  }
  //if the next level down is an array, wrap it in element defined by tag and pass all elements of the array recursively
  else if (Array.isArray(jsonObject.content))
  {
    return (
      `<${jsonObject.tag}>
      ${jsonObject.content.map(section => convertJsonToHtml(section)).join('')}
      </${jsonObject.tag}>`
    );
  }
  //terminate recursion at end of JSON tree by returning content wrapped in element defined by tag.
  else
  {
    return (
      `<${jsonObject.tag}>
      ${jsonObject.content}
      </${jsonObject.tag}>`
    );
  }
}

//returns true if an object, false otherwise
function isObject (item) {
  return (typeof item === "object" && !Array.isArray(item) && item !== null);
}
