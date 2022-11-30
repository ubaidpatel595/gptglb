function show(elem,hide){
    let opt = document.getElementById(elem);
    opt.style="display:block";
    for(x in hide){
        let opt = document.getElementById(hide[x]);
        opt.style="display:none";
    }
}
function show_action(act,type){
    let elem = document.getElementById("action");
    elem.style='display:block';
    elem.src=act+'.html';
    sessionStorage.setItem("upload_type",type)
}