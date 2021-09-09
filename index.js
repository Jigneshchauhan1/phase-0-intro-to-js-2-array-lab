// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
    return cats.push("Ralph");
}
destructivelyAppendCat();


function destructivelyRemoveLastCat(){
    return cats.pop();
}
destructivelyRemoveLastCat();
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
const copyOfCats = [...cats, "Broom"];
function appendCat(){
    return copyOfCats;
}
appendCat();
const allCats = ["Arnold", ...cats];
function prependCat(){
    return allCats;
}
prependCat();
const Cat = cats.slice()

function removeLastCat(){
    return Cat.slice(0, Cat.length -1);

}
removeLastCat();


function removeFirstCat(){
    return Cat.slice(1);
}
removeFirstCat();
function destructivelyPrependCat(){
    return cats.unshift("Bob");
}
destructivelyPrependCat();
function catfirst(){
    return cats.shift();
}
catfirst();



    
