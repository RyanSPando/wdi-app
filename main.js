$(document).ready(function() {

  //select input field and output area
	var jsonInput = document.getElementById('jsonInput');
	var htmlDisplayArea = document.getElementById('htmlDisplayArea');

  //listen for file input
	jsonInput.addEventListener('change', function(e) {
    //grab file on input
		var json = jsonInput.files[0];
    //get type of file
		var fileType = /json.*/;

    //if file is json, read file
		if (json.type.match(fileType))
    {
			var reader = new FileReader();

			reader.onload = function(e) {
        //display stuff from file
        const jsonObject = JSON.parse(reader.result);
				htmlDisplayArea.innerText = convertJsonToHtml(jsonObject);
			};
      //read text
			reader.readAsText(json);
		}
    else // If not .json display error
    {
			htmlDisplayArea.innerText = "File not supported!";
		}
  });
});

function convertJsonToHtml(jsonObject) {

  if (!Object.keys(jsonObject) && !Array.isArray(jsonObject)) {
    return null;
  }
  if (Array.isArray(jsonObject)) {
    jsonObject.forEach(value => convertJsonToHtml(value));
  }
  else
  {
    console.log(Object.keys(jsonObject));
  }
}
