
var counter = 0;

document.addEventListener("DOMContentLoaded",() => {

    var applicationArea = document.createElement("div");
    applicationArea.id = "appArea";
    document.body.appendChild(applicationArea);

        let btn = document.createElement("button");
        btn.className = 'sqButton';
        btn.innerText = ("add square");
        applicationArea.appendChild(btn);

    btn.addEventListener("click",function(){

    let container = document.createElement("div");
    container.className = "sqContainer";
    container.id = "sqId" + counter++;
    applicationArea.appendChild(container); 
              
    let text = document.createElement("p");
    text.className = "pContainer";
    text.innerText = counter;
    text.style.color = "transparent"
    container.appendChild(text);

    container.addEventListener("click", function(){
        var rgb = [];
        for (var i = 0;i < 3;i++)
            rgb.push(Math.floor(Math.random()* 255));
            container.style.backgroundColor = 'rgb('+ rgb.join(',') +')';
    })

    container.addEventListener("mouseover", function(){
        text.style.color = "black";
        container.addEventListener("mouseleave", function(){
            text.style.color = "transparent";
        })
     })



    container.addEventListener("dblclick", function removeElement(appArea,sqId){
    var myDiv = applicationArea.getElementsByClassName("sqContainer");
    var k;
    for(k = 0;k < myDiv.length;k++){
        if (myDiv[k] % 2 === 0){
            alert("even:delete after square");
        }else if (myDiv[k] % 3 === 0) {
            alert("odd:delete previous square");
            // var child = document.getElementById("sqId");
            // var parent = document.getElementById(appArea);
            // parent.removeChild(sqId);
        }else{
            alert("Child div has already been removed and does not exist");
            return false;
        }
    }
    })

})
});
    


