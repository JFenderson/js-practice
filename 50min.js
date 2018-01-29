document.addEventListener('DOMContentLoaded', function(){
    const button = document.getElementById('toDoList');
    const leadList = document.getElementById('ul');
    
    const listItem = document.createElement("li");

    button.addEventListener('click', function (){
        function addItem() {
            var ul = document.getElementById("ul");
            var text = document.getElementById("textbox");
            var li = document.createElement("li");
            
            li.setAttribute('id', textbox.value);
            li.appendChild(document.createTextNode(textbox.value));
            ul.appendChild(li);
        }
       
     
console.log('clicked');

        
    })
})