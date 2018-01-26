
// let stack = ['a','b','c'];
// let sheets = [0];
// for (let i = 1; i < 101;i++){
//     sheets.push(i);
// for(let j = 0;j < stack.length;j++){
//     console.log(stack[j] + sheets[i]);
//     }  
// }


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
console.log(getRandomInt(100));



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
            console.log('** ' + author[i]);
        }else{
            console.log(author[i]);
        }
})
*/

/*NUMBER 6
let author = ['Jamie Smith','carol Jones','John Doe','Mike Banks','William Lewis','Jackson Howell']

    
        author.reverse();

        console.log(author);
*/
/*
let maroon5 = []

var albums = {
    "cd1": {
        "artistName":"Kendrick Lamar", 
        "albumName":"DAMN", 
        "year": 2017
    },

    "cd2": {
        "artistName":"Maroon 5", 
        "albumName":"Songs About Jane",
        "year": 2002
    },
    "cd3": {
        "artistName":"Maroon 5",
        "albumName": "V",
        "year": 2014
    },
    "cd4": {
        "artistName":"Rick Ross",
        "albumName":"Rather You Than Me",
        "year": 2017
    },
    "cd5": {
        "artistName":"Fall Out Boy", 
        "albumName":"From Under the Cork Tree",
        "year": 2005
    },
    "cd6": {
        "artistName":"Justice",
        "albumName": "Woman",
        "year": 2016
    },
    "cd7": {
        "artistName":"Digitalism",
        "albumName":"Idealism",
        "year": 2007
    },
    "cd8": {
        "artistName":"Kanye West", "albumName":"Yeezus",
        "year": 2013
    },
    "cd9": {
        "artistName":"Nirvana", "albumName":"Nevermind",
        "year": 1991
    },
    "cd10": {
        "artistName":"Red Hot Chilli Peppers",
        "albumName":"Blood Sugar Sex Magik",
        "year": 1991
    }
}

for(var  in albums) {
    if(!albums.hasOwnProperty(key));
    var cd = albums[key];
for(var index in cd){
    if(!cd.hasOwnProperty(index));
    if(cd[index] === "maroon 5"){
    maroon5.push(cd[index])
}    
    //console.log(maroon5[]);
    console.log(cd[index]);
    }
}
*/


