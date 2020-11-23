var itemName = 'testimonial';
var itemParent = 'testimonial-wrapper';
var length = document.getElementsByClassName(itemName).length;
var amtToScroll = 120;
let index =0;
var status=1;
function changeOrder(){
    if(status==1){
        index++;
        if (index==length) {
            status=-1;
        }
    }
    else if(status==-1){
        index--;
        if (index==-1) {
            status=1;
        }
    }
    
	document.getElementsByClassName(itemParent)[0].scrollBy(amtToScroll*status,0); 
}
setInterval(changeOrder,2000);

document.getElementById('read-more').addEventListener("click",(e)=>{
    e.preventDefault();
    console.log('event triggered');
    document.querySelectorAll('.main-page-section-1 > .part-2 > .paragraph')[2].style.display="block";
    document.querySelectorAll('.main-page-section-1 > .part-2 > .paragraph')[3].style.display="block";
    document.getElementById('read-more').style.display="none";
    document.getElementById('read-less').style.display="block";
});
document.getElementById('read-less').addEventListener("click",(e)=>{
    e.preventDefault();
    console.log('event triggered');
    document.querySelectorAll('.main-page-section-1 > .part-2 > .paragraph')[2].style.display="none";
    document.querySelectorAll('.main-page-section-1 > .part-2 > .paragraph')[3].style.display="none";
    document.getElementById('read-more').style.display="block";
    document.getElementById('read-less').style.display="none";
});