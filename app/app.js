import * as MODEL from "./model.js";

function initListeners(){
}

function route(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    let pageIDArray = pageID.split("/");
    pageID = pageIDArray[0];
    let subpageID = pageIDArray[1];
    if(pageID == ""){
        MODEL.changePage("home");
    }else{
        if(pageID == subpageID){
            MODEL.changePage(pageID);
        }else{
            MODEL.changePage(pageID, subpageID);
        }
    }
}

function initApp(){
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function(){
    initApp();
    initListeners();
    route();
});
