//takes JSON and converts it to HTML recursively
function convertJsonToHtml(jsonObject) {
  const content = jsonObject.content;
  const tag = jsonObject.tag;

  //if the next level down is an object, wrap it in element defined by tag and pass it recursively
  if (isObject(content))
  {
    return (`<${tag}>${convertJsonToHtml(content)}</${tag}>`);
  }
  //if the next level down is an array, wrap it in element defined by tag and pass all elements of the array recursively, then join them
  else if (Array.isArray(content))
  {
    return (`<${tag}>${content.map(section => convertJsonToHtml(section)).join('')}</${tag}>`);
  }
  //terminate recursion at end of JSON tree by returning content wrapped in element defined by tag.
  else
  {
    return (`<${tag}>${content}</${tag}>`);
  }
}

//returns true if an object, false otherwise
function isObject (item) {
  return (typeof item === "object" && !Array.isArray(item) && item !== null);
}
