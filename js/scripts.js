var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = 'triceratops';
var bigletters = dinosaur.toLocaleUpperCase();
console.log(bigletters);
var correctText = text.replace("Velociraptor",bigletters);
console.log(correctText);

console.log(text.length);//spr dł pierwszego teksty
console.log(correctText.length);//spr. dł. txt. z velocirptorem

var halfLenght = correctText.length/2;//podaje dł połowy tekstu
console.log(halfLenght);//wyświetla wynik
console.log(correctText.substr(0,71));//wyświetla 72 znaki jako połowę

console.log(correctText.substr(0,((correctText.length/2)-1))); //zapis w jednym poleceniu
