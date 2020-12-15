//movement animation to happen
const card = document.querySelectorAll('.card');
const container = document.querySelectorAll('.container');
//Items
const title = document.querySelectorAll('.title');
const sneaker = document.querySelectorAll('.sneaker img');
const purchase = document.querySelectorAll('.purchase button');
const description = document.querySelectorAll('.info h3');
const sizes = document.querySelectorAll('.sizes');





//moving animation Event

for(i= 0; i < container.length; i++){
container[i].addEventListener('mousemove', (e) =>{

    let xAixs = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    var i=0;

    for(i = 0; i <card.length; i ++){
        card[i].style.transform = 'rotateY('+xAixs+'deg) rotateX('+yAxis+'deg)';
    }
});
}
//Animate In
for(i= 0; i < container.length; i++){
container[i].addEventListener('mouseenter', e =>{

    for(i = 0; i <card.length; i ++){
    card[i].style.transition = 'none';
    //popout
    title[i].style.transform = 'translateZ(150px)';
    sneaker[i].style.transform = 'translateZ(200px) rotateZ(40deg)';
    description[i].style.transform = 'translateZ(125px)';
    sizes[i].style.transform = 'translateZ(100px)';
    purchase[i].style.transform = 'translateZ(75px)';
    }
})
}

//Animate Out 
for(i= 0; i < container.length; i++){
container[i].addEventListener('mouseleave', e =>{
    for(i=0; i<card.length; i ++){
    card[i].style.transition = "all 0.5s ease";
    card[i].style.transform = 'rotateY(0deg) rotateX(0deg)';
    //popback
    title[i].style.transform = 'translateZ(0px)'
    sneaker[i].style.transform = 'translateZ(0px) rotateZ(0deg)'; 
    description[i].style.transform = 'translateZ(0px)';
    sizes[i].style.transform = 'translateZ(0px)';
    purchase[i].style.transform = 'translateZ(0px)';
    }
});
}



///////setTimeout


function slide(){
    const SHOWING_CLASS = "showing";
    const firstSlide = document.querySelector(".container:first-child");
    const currentSlide = document.querySelector('.showing');
    if(currentSlide){
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
       if(nextSlide){
           nextSlide.classList.add(SHOWING_CLASS);
       } else {
        firstSlide.classList.add(SHOWING_CLASS);
       }
    } else {
        firstSlide.classList.add(SHOWING_CLASS);
    };
};

slide();
setInterval(slide, 2000);


