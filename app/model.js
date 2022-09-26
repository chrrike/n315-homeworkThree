export function changePage(pageID, subpage){

    if(subpage == undefined){
        $.get(`pages/${pageID}/${pageID}.html`, function (data){
            $("#app").html(data);
        }).fail((error) =>{
            if(error.status == "404"){
                alert("Page can not be found. Please check your url.");
            }
            console.log("error", + error.status);
        });
    }else{
         $.get(`pages/${pageID}/${subpage}.html`, function (data){
            $("#app").html(data);
        }).fail((error) =>{
            if(error.status == "404"){
                alert("Page can not be found. Please check your url.");
            }
            console.log("error", + error.status);
        });
    }
}