

function drawTree (h) {
    for (i=0; i <= h; i++){   
        var star = '';
        for (j=0; j<=i; j++) {
            star += '*';
}
    console.log(star);
}
};
drawTree(7);//f-cja z parametrem 7

console.log('ponizej drugi wariant');
// ponizej wysokosc podaje uzytkownik
var u = prompt('podaj wysokosc');
var w = u-1;//wyrównuje wartość ze względu na start indexów od 0
for (i=0; i <= w; i++){   
        var star = '';
        for (j=0; j<=i; j++) {
            star += '*';
}
    console.log(star);

};