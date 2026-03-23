# Ex.07 Design of Interactive Image Gallery
## Date:23.03.2026

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
photos.html

<html>
<head>
<title>Image Gallery</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<h1>Interactive Image Gallery</h1>
<div class="gallery">
<img id="galleryImage" src="jinxy.jpg">
<p id="caption">Jinxy</p>
<button onclick="prevImage()">Previous</button>
<button onclick="nextImage()">Next</button>
</div>
<script src="scripts.js"></script>
<footer>
Designed by ANNLEE AGHAI DAVIDSON(25001177)
</footer>
</body> 
</html>
scripts.js

let images = [
"jinxy.jpg",
"ron.jpg",
"ray.jpg",
"ken.jpg",
"mohamed_lights.jpg"
];
var captions=["Jinxy","Ron","Ray","Ken","Mohamed Lights"]
var index = 0;
function nextImage(){
index++;
if(index >= images.length){
index = 0;
}
document.getElementById("galleryImage").src = images[index];
document.getElementById("caption").innerHTML = captions[index];
}
function prevImage(){
index--;
if(index < 0){
index = images.length - 1;
}
document.getElementById("galleryImage").src = images[index];
document.getElementById("caption").innerHTML = captions[index];
}
style.css

body{
text-align:center;
font-family:Arial;
background:linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
color: #e0e0e0;
margin: 0;
padding: 0;
min-height: 100vh;
}
h1{
margin-top:20px;
color: #e94560;
text-shadow: 0 0 10px rgba(233, 69, 96, 0.3);
}
.gallery{
margin-top:40px;
}
.gallery img{
width:400px;
height:250px;
border-radius:10px;
box-shadow:0 5px 20px rgba(233, 69, 96, 0.25);
border: 2px solid rgba(233, 69, 96, 0.2);
}
#caption{
font-size: 18px;
color: #a8d8ea;
margin-top: 10px;
}
button{
padding:10px 20px;
margin:20px;
font-size:16px;
background: #e94560;
color: #ffffff;
border:none;
border-radius:5px;
cursor:pointer;
transition: background 0.3s, box-shadow 0.3s;
}
button:hover{
background: #c81e45;
box-shadow: 0 0 15px rgba(233, 69, 96, 0.5);
}
footer{
background: #0f3460;
color: #a8d8ea;
padding:10px;
position:fixed;
bottom:0;
width:100%;
border-top: 1px solid rgba(233, 69, 96, 0.3);
}

```

## OUTPUT:
![alt text](<Screenshot (59).png>) ![alt text](<Screenshot (58).png>) ![alt text](<Screenshot (57).png>) ![alt text](<Screenshot (56).png>) ![alt text](<Screenshot (55).png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
