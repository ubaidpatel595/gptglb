count = 1 ;
function carousel(direction,id){
    if (direction == 1){
        if(count < 5){
            let img  = document.getElementById(id);
            img.setAttribute("src",`static/images/${count+1}.jpg`)
            count +=1;
        }else{
            count = 0;
            let img  = document.getElementById(id);
            img.setAttribute("src",`static/images/${count+1}.jpg`)
            count +=1;
        }
    }else{
        if(count > 1){
            let img  = document.getElementById(id);
            img.setAttribute("src",`static/images/${count-1}.jpg`)
            count -=1;
        }else{
            count = 6;
            let img  = document.getElementById(id);
            img.setAttribute("src",`static/images/${count-1}.jpg`)
            count -=1;
        }
    }
}
//Function Auto change
setInterval(carousel,3000,1,'carousel_image');