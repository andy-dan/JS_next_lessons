var itemsByTagName = document.getElementsByTagName('button');
console.log(itemsByTagName.length);

for (i=0; i<itemsByTagName.length; i++) {
    console.log(itemsByTagName[i].innerText);
 };/* zabrakło i w itemsByTagName*/

/* wersja innego kursanta
var button = document.getElementsByTagName('button');
for (var i = 0; i < button.length; i++) {
var text = button[i].innerText;
alert(text);
}
   */                                     

