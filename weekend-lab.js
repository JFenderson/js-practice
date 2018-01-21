/*NUMBER 2
let stack = ['a','b','c'];
let sheets = [0];
for (let i = 1; i < 101;i++){
    sheets.push(i);
for(let j = 0;j < stack.length;j++){
    console.log(stack[j] + sheets[i]);
    }  
}
*/
/* NUMBER 3
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
console.log(getRandomInt(10));
*/
/* NUMBER 4
for (let i = 0; i < 101;i++){
    if (i % 3 == 0){
        console.log(i + " cove");
    }else if(i % 5 == 0){
        console.log(i + " valence");
    }else if(i % 3 !== 0 && i % 5 !== 0){
        console.log(i + " covalence");
    }    
    
}
*/
/*NUMBER 5
let author = ['Jamie Smith','carol Jones','John Doe','Mike Banks','William Lewis','Jackson Howell']

author.forEach((write) =>{
    for(let i = 0;i < author.length;i++)
        if(author[i] === 'John Doe'){
            console.log('John Doe Found!' + author[i]);
        }else{
            console.log(author[i]);
        }
})
*/
let author = ['Jamie Smith','carol Jones','John Doe','Mike Banks','William Lewis','Jackson Howell']


    function myFunc() {
        author.reverse();
        console.log(myFunc)
    }
    // for(let i = 0;i < author.length;i++)
    //     if(author[i] === 'John Doe'){
    //         console.log('John Doe Found!' + author[i]);
    //     }else{
    //         console.log(author[i]);
    //     }



