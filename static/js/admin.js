function show(elem,hide){
    let opt = document.getElementById(elem);
    opt.style="display:block";
    for(x in hide){
        let opt = document.getElementById(hide[x]);
        opt.style="display:none";
    }
}
function show_action(id,act,type){
    let elem = document.getElementById(id);
    elem.style='display:block';
    elem.src=act+'.html';
    sessionStorage.setItem("upload_type",type)
}