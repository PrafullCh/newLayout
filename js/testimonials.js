let testimonialWidth = document.getElementsByClassName('testimonial')[0].clientWidth;
var totalNoOfTestimonial = document.getElementsByClassName('testimonial').length;
var testimonialToBeScrolled = window.innerWidth<768?window.innerWidth<576?1:2:3;
var toBeRotated = -(testimonialWidth*testimonialToBeScrolled-testimonialToBeScrolled);
var totalLength = -(testimonialWidth*totalNoOfTestimonial-testimonialWidth*3);
var rotation = 0;
var testimonialsArray =[...document.getElementsByClassName('testimonial')];
var dragging = {
    xStart:0,
    xEnd:0,
}

function rotate(){
    rotation+=toBeRotated;
    rotation = rotation<totalLength?0:rotation;
    if(rotation>totalLength && rotation<=0 )
        document.getElementsByClassName('testimonial-container-inner')[0].style.transform="translate3d("+(rotation)+"px,0px,0px)";
}
var timer = setInterval(rotate,5000);
document.getElementsByClassName('testimonial-container-inner')[0].addEventListener("pointerdown",(e)=>{
    dragging.xStart = e.clientX;
    document.getElementsByClassName('testimonial-container-inner')[0].addEventListener("pointermove",(e)=>{
        dragging.xEnd = e.clientX;
    })
})
document.getElementsByClassName('testimonial-container-inner')[0].addEventListener("pointerup",(e)=>{
    document.getElementsByClassName('testimonial-container-inner')[0].removeEventListener("pointermove",(e)=>{
        dragging.xEnd = e.clientX;
    });
    if(dragging.xStart > dragging.xEnd){
        //left swipe
        rotate();
    }else if(dragging.xStart < dragging.xEnd){
        //right swipe
        rotation-=toBeRotated;
        if(rotation>totalLength && rotation<=0 )
        document.getElementsByClassName('testimonial-container-inner')[0].style.transform="translate3d("+(rotation)+"px,0px,0px)";
    }
})
        