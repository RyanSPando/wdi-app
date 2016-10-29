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
        var toAppend = `<div class="converted">${jsonObject.map(value => convertJsonToHtml(value)).join('')}</div>`;
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
