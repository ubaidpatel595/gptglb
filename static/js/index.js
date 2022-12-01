cnt = 1;
function change(x){
 x.classList.toggle("change")

 if (cnt == 1){
    let menu = document.getElementById("mob-nav");
    menu.className="show";
    cnt -=1;
 }else{
    let menu = document.getElementById("mob-nav");
    menu.className="hide";
    cnt=1;
 }
}

function validate(x){
    document.getElementById("user_id").innerHTML=x.value+':';
}