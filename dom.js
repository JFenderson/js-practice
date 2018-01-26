let btn;
var counter = 0;

document.addEventListener("DOMContentLoaded",() => {

    var applicationArea = document.createElement("div");
    applicationArea.id = "appArea";
    document.body.appendChild(applicationArea);

        btn = document.createElement("button");
        btn.className = 'sqButton';
        btn.innerText = ("add square");
        applicationArea.appendChild(btn);

    btn.addEventListener("click",function(){

        let container = document.createElement("div");
        container.className = "sqContainer";
        container.id = ++counter;
        //var sqIndex = "sqId" + counter;
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

        console.log(counter)

        container.addEventListener("dblclick", function (item){
            
            console.log(item);

            if (item.target.id % 2 === 0){
                console.log("Even");
                console.log(item.target.id);
                //console.log(document.getElementBy(item.target.id).nextSibling);
                document.getElementById(item.target.id).nextSibling.remove();
            }else if (item.target.id % 2 !== 0) {
                console.log("odd");
                console.log(item.target.id);
                console.log(document.getElementById(item.target.id).previousSibling);
                document.getElementById(item.target.id).previousSibling.remove();
              }
              //if(sqIndex = undefined){
            //      alert("no");
            //  }
            }) 

    })
});
    


