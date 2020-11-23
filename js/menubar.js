
document.onclick=function(e){
    if(e.target.matches(".navbar a")){
        //navbar clicked   
        let attr = e.target.getAttribute('data-expandable-block');
        if(attr){
            //removing class from others
            [...document.getElementsByClassName('navbar-link-content')].forEach(node=>node.style.display="none");
            //adding to that specifiv class
            document.getElementById(attr).style.display="grid";
            gsap.fromTo('.navbar-link-content',{
                opacity:0
            },{
                duration:1,
                opacity:1
            })
            console.log("navbar clicked");
        }
        else{   
            [...document.getElementsByClassName('navbar-link-content')].forEach(node=>node.style.display="none");
        }
    }else if(e.target.matches(".navbar-link-content a") || e.target.matches(".navbar-link-content")){
        //dropdownlink clicked
        console.log("dropdownlink clicked");
    }
    else{
        //other part is clicked
        [...document.getElementsByClassName('navbar-link-content')].forEach(node=>node.style.display="none");
    }
}
let toggled = 0;
document.getElementById("toggle-button").onclick = () =>{
   [...document.querySelectorAll('.navbar > a')].forEach((node,i)=>{
       if(i!=0){
           if(toggled === 0){
               node.style.display="block";
               
           }
           else{
               node.style.display="none";
           }
       }
   });
   if(toggled === 0){
        document.getElementById('toggle-button').innerHTML = "<span>&#10006;</span>&nbsp;&nbsp;";     
        toggled=1;
    }
    else{
        document.getElementById('toggle-button').innerHTML = "<span>&#9776;</span>&nbsp;&nbsp;";     
        toggled=0;
    }
    console.log("triggered");  
}