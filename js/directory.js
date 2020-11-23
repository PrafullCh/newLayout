let tl1 = gsap.timeline({duration:0.3});
let fields = [...document.getElementsByClassName('field')];
let expanded = '49px';
let contracted = '0px';
let expandedFields = '43px';
let contractedFields = '0px';
let bottomDirection = '0deg';
let leftDirection = '-90deg';
let none ='none';
let block ='block';
fields.forEach(el=>{
    el.getElementsByClassName('field-heading')[0].addEventListener("click",(e)=>{
        let partToExpand = el.getElementsByClassName('field-content');
        let rotator = el.getElementsByClassName('rotator');
        if(partToExpand[0].style.display==block){
            tl1.to(rotator,{rotate:bottomDirection})
            .fromTo(partToExpand,{height:expanded,opacity:1},{height:contracted,display:none,opacity:0});
        }else{
            tl1.to(rotator,{rotate:leftDirection})
            .fromTo(partToExpand,{height:contracted,opacity:0},{height:expanded,display:block,opacity:1});
        }
    });
});
if(window.innerWidth<768){
    document.getElementsByClassName('filter-title')[0].addEventListener("click",(e)=>{
        let tl2 = gsap.timeline({duration:0.3,stagger:0.1});
        if (fields[0].style.display==block) {
            tl2.fromTo(fields,{height:expandedFields,opacity:1},{height:contractedFields,display:none,opacity:0});
        }
        else{
            tl2.fromTo(fields,{height:contractedFields,opacity:0},{height:'initial',display:block,opacity:1});
        }
    });
}