document.addEventListener('DOMContentLoaded', function(){
    const button = document.getElementById('toDoList');
    const leadList = document.getElementById('ul');
    const listItem = document.createElement("li");

    document.getElementById("toDoList").addEventListener('click', function (){

            var ul = document.getElementById("myList");
            var text = document.getElementById("textbox").value;
            var li = document.createElement("li");
            var t = document.createTextNode(text);
            li.appendChild(t);
            if(text === ''){
                alert("you must write something")
            }else {
                document.getElementById("myList").appendChild(li);
            }
            document.getElementById("textbox").value = "";

    })
})