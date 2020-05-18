/*let backgroundImage1 = document.querySelector('.image-background');

let imageChange = () => {

 backgroundImage1.style.backgroundImage = 'url(./resources/images/food3.jpg)';
   console.log(backgroundImage1, 'aanu')
}

backgroundImage1.addEventListener('click', () =>{
    backgroundImage1.style.backgroundImage = '';
});*/
let isOne = true;
let bg1 = "url('./resources/images/background1.jpg')";
let bg2 = "url('./resources/images/background2.jpg')";


setInterval(() => {
    let background = document.querySelector('.image-background');
    background.style.backgroundImage = isOne? bg1:bg2;
    isOne = !isOne
    
}, 4000);


