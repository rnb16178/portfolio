function menuClick(){
    var menu =document.getElementById("navigationMenu");
    if (menu.className==="topnav"){
        menu.className="responsive"

    }else{
        menu.className="topnav"
    }
}