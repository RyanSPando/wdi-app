// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
  console.log('all good');
} else {
  console.log('The File APIs are not fully supported in this browser.');
}
