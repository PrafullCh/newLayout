var x = 0;
    let width;
    var length;
    window.onload=(e)=>{
        length = document.getElementsByClassName('carousel-container')[0].getElementsByTagName('img').length;
        width = document.documentElement.clientWidth;
        var containerElements  = document.getElementsByClassName('carousel-container');
        //adding no of dots
        for(i=0;i<length;i++){
            var el = document.createElement('div');
            el.classList.add('carousel-container-dot');
            el.onclick = userClicked;
            document.getElementsByClassName('carousel-container-mover')[0].appendChild(el);
        }
        //left button and right button event
        document.getElementById('left-mover').addEventListener("click",handleLeftScroll);
        document.getElementById('right-mover').addEventListener("click",handleRightScroll);
        // changeText(); //<-changing state of text through js 
        containerElements[0].addEventListener('touchstart', function(e) {e.preventDefault()}, false);
        containerElements[0].addEventListener('touchmove', function(e) {e.preventDefault()}, false);
    }
    var userClicked = (e)=>{
        //temporarily removing listener
        document.getElementById('left-mover').removeEventListener("click",handleLeftScroll);
        document.getElementById('right-mover').removeEventListener("click",handleRightScroll);
        var toBeScrolled = Array.prototype.slice.call(document.getElementsByClassName('carousel-container-dot')).indexOf(e.target);
        console.log(toBeScrolled!=x);
        amountToBeScrolled = width*(toBeScrolled-x);
        console.log(amountToBeScrolled);
        document.getElementsByClassName('carousel-container')[0].scrollBy(amountToBeScrolled,0);
        x=toBeScrolled;
        changeText();
        //listener added again
        document.getElementById('left-mover').addEventListener("click",handleLeftScroll);
        document.getElementById('right-mover').addEventListener("click",handleRightScroll);
    }
    var handleLeftScroll = (e) => {
        if(x>=0 && (x-1)!=-1)
        x--;
        document.getElementsByClassName('carousel-container')[0].scrollBy(-width,0);
        changeText();
    }
    var handleRightScroll = (e) => {
        if(x<length && (x+1)!=length)
        x++;
        document.getElementsByClassName('carousel-container')[0].scrollBy(width,0);
        changeText();
    }
    var changeText = () =>{
        var textElement = document.getElementsByClassName('slide-text');
        for(i=0;i < textElement.length;i++){
            if(i==x){
                textElement[i].classList.remove('hide');
            }
            else{
                textElement[i].classList.add('hide');
            }
        }
    }