
var manny =  "https://upload.wikimedia.org/wikipedia/ro/2/24/HandyManny.jpg";

// creez un tag img in memorie
var imgElem = document.createElement("img")

imgElem.src = manny

// selectare body tags
var body_list = document.getElementsByTagName("body")

// selectare body din lista
var body_elem = body_list[0]

// adaug elementul imagine in body_elem
body_elem.appendChild(imgElem)
