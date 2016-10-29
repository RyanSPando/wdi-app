window.onload = function() {//onload iife

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
		if (json.type.match(fileType)) {
			var reader = new FileReader();

			reader.onload = function(e) {
        //display stuff from file
				htmlDisplayArea.innerText = reader.result;
			};
      //r
			reader.readAsText(json);
		} else {
			htmlDisplayArea.innerText = "File not supported!";
		}
	});
};
