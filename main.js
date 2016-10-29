function handleFileSelect(evt) {
    var file = evt.target.files[0]; // FileList object
    console.log(file);
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);
