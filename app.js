const currentimage = document.querySelector('#image');
const images = ['img/pic1.jpeg', 'img/pic2.jpg', 'img/pic3.jpg']

function changeImage(){
    console.log("Hello from script file!");
    let rnd =Math.floor(Math.random() * images.length);
    currentimage.src = images[rnd];
    console.log(rnd);
}