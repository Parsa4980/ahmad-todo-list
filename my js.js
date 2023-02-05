function addTask(){ 
    const target = document.getElementById("task-container");

    const div = document.createElement("div");
    div.setAttribute("class","item");



    let div1 = document.createElement("div");
    div1.setAttribute("class","div1");
    var input =document.getElementById("text-input");
    var text = document.createTextNode(input.value);

    div1.appendChild(text);
    div.appendChild(div1);




    var div2 =document.createElement("div");
    div2.setAttribute("class","div2");

    var heart = document.createElement("input");
    heart.setAttribute("type","checkbox");
    heart.setAttribute("id","heart");
    heart.setAttribute("class","fav");
    heart.addEventListener("change",favFunction);

    var label1= document.createElement("label");
    label1.setAttribute("class","label1");
    label1.setAttribute("for","heart");

    var stick1=document.createElement("img");
    stick1.setAttribute("src","emptyHeart.jpg");
    stick1.setAttribute("class","stick1");
    label1.appendChild(stick1);
    div2.appendChild(heart);
    div2.appendChild(label1);
    div.appendChild(div2);



    var div3 = document.createElement("div");
    div3.setAttribute("class","div3");
    var d = new Date()
    var year =d.getFullYear();
    var month = d.getMonth() +1;
    var day = d.getDate();
    var dateString = year + "/" +  month + "/" + day ;
    var date = document.createTextNode(dateString);
    
    div3.appendChild(date);
    div.appendChild(div3);




    var div4= document.createElement("div");
    div4.setAttribute("class","div4");

    var done = document.createElement("input");
    done.setAttribute("type","checkbox");
    done.setAttribute("id","done");
    done.setAttribute("class","done");
    done.addEventListener("change",doneFunction);

    var lable2 = document.createElement("label");
    lable2.setAttribute("for","done");
    lable2.setAttribute("class","lable2");

    var stick2 = document.createElement("img");
    stick2.setAttribute("src","greenTick.jpg");
    stick2.setAttribute("class","stick2");

    lable2.appendChild(stick2);
    div4.appendChild(done);
    div4.appendChild(lable2);

    div.appendChild(div4);



    var div5 = document.createElement("div");
    div5.setAttribute("class","div5");

    var recyclebin = document.createElement("input");
    recyclebin.setAttribute("type","checkbox");
    recyclebin.setAttribute("id","recycle");
    recyclebin.setAttribute("class","bin");
    recyclebin.addEventListener("change",delFunction);

    var lable3 = document.createElement("label");
    lable3.setAttribute("for","recycle");
    lable3.setAttribute("class","lable3");

    var stick3 = document.createElement("img");
    stick3.setAttribute("src","bin.png");
    stick3.setAttribute("class","stick3");

    lable3.appendChild(stick3);
    div5.appendChild(recyclebin);
    div5.appendChild(lable3);

    div.appendChild(div5);



    target.appendChild(div);
    console.log(Date());
}

function favFunction(){

    alert("fav function");

}


function doneFunction (){

    alert("done function");

}

function delFunction(){
    alert("delete function");

}