
var counter = 0;
var x = 0;
//var randomColor = Math.floor(Math.random()*16777215).toString(16);

document.addEventListener("DOMContentLoaded",() => {

    var applicationArea = document.createElement("div");
    applicationArea.id = "appArea";
    document.body.appendChild(applicationArea);

        let btn = document.createElement("button");
        btn.className = 'sq-button';
        btn.innerText = ("add square");
        applicationArea.appendChild(btn);

        

    btn.addEventListener("click",function(){

    let container = document.createElement("div");
    container.className = "sq-container";
    container.id = "sq-id" + counter++;
    applicationArea.appendChild(container); 
              
    let text = document.createElement("p");
    text.className = "p-container";
    text.innerText = counter;
    container.appendChild(text);

    container.addEventListener("click", function(){
        var rgb = [];
        for (var i = 0;i < 3;i++)
            rgb.push(Math.floor(Math.random()* 255));
            container.style.backgroundColor = 'rgb('+ rgb.join(',') +')';
    })

    for (j = 0;j <container.length;j--);
    

 
})
    


