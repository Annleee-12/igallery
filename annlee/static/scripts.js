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
