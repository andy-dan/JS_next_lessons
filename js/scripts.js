
var list = document.getElementById('list');
 console.log(list);
var add = document.getElementById('addElem');
console.log(add);
add.addEventListener('click', function() {
    var element = document.createElement('li');
    console.log(element);
    
    var a = document.getElementsByTagName('li');
    console.log(a);
    var nr = a.length;
    console.log(nr);
    
    element.innerHTML = 'item '+ nr;
   
    list.appendChild(element);
   
 
  });

  /*
  consola wyświetla więcej informacji, ponieważ sprawdzałem
  co w kodzie działa, przez kilka godzin z przerwami podchodziłem
  do wykonania tego zadania, metodą prób i błędów

*/