
function addTask(){ 
    const target = document.getElementById("task-container");

    let div = document.createElement("div");
    div.setAttribute("class","item");
    // div.setAttribute("id","item")



    let divMain = document.createElement("div");
    divMain.setAttribute("class","divMain");
    // divMain.setAttribute("id","div");

    var input =document.getElementById("text-input");
    var text = document.createTextNode(input.value);

    divMain.appendChild(text);
    div.appendChild(divMain);












    const divHelper = document.createElement("div");
    divHelper.setAttribute("class","divHelper");

    var favorite =document.createElement("div");
    favorite.setAttribute("class","favorite");
    favorite.setAttribute("id","div2");

    var heart = document.createElement("input");
    heart.setAttribute("type","checkbox");
    heart.setAttribute("id","heart");
    heart.setAttribute("class","fav");
    heart.addEventListener("change",favFunction);

    var label1= document.createElement("label");
    label1.setAttribute("class","label1");
    label1.setAttribute("for","heart");
    // label1.setAttribute("id","lable1");

    var stick1=document.createElement("img");
    stick1.setAttribute("src","emptyHeart.jpg");
    stick1.setAttribute("class","stick1");
    // stick1.setAttribute("id","stick1");
    label1.appendChild(stick1);
    favorite.appendChild(heart);
    favorite.appendChild(label1);
    divHelper.appendChild(favorite);








    var history = document.createElement("div");
    history.setAttribute("class","history");
    var d = new Date()
    var year =d.getFullYear();
    var month = d.getMonth() +1;
    var day = d.getDate();
    var dateString = year + "/" +  month + "/" + day ;
    var date = document.createTextNode(dateString);
    
    history.appendChild(date);
    divHelper.appendChild(history);










    var done = document.createElement("input");
    done.setAttribute("type","checkbox");
    // done.setAttribute("id","done");
    done.setAttribute("class","done");
    done.addEventListener("change",doneFunction);
    divHelper.appendChild(done);











    var remove = document.createElement("input");
    remove.setAttribute("type","button");
    remove.setAttribute("value","X");
    // remove.setAttribute("id","recycle");
    remove.setAttribute("class","remove");
    remove.addEventListener("click",delFunction);

    divHelper.appendChild(remove);
    div.appendChild(divHelper);

    target.appendChild(div);
    console.log(Date());












    document.getElementById("text-input").value=" ";



    
}




function favFunction(){

        // let img = this.parentNode.getElementsByClassName(label1).innerHtml;
        // if(img === "emptyHeart.jpg" ){

        //     img= fullHeart.jpg ;
        //     console.log("AHMAD");
        //      alert("fav function");
        // }
        // else{
           
        //      console.log(img); 
             
        // }
        alert("fav function222");

    }



function doneFunction (){

    alert("done function");

}


function delFunction(){
 
    this.parentNode.parentNode.remove();
}
    





