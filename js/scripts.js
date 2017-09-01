var a=10,
    b=-15,
    value=(a * a) + (2 * a * b) - (b * b);

console.log(value);

if (value >= 0) {console.log("wynik dodatni")}
else {console.log("wynik ujemny")};

switch (value) {
    case 0: console.log("wartość jest zerem")
    default: console.log("wartość nie jest zerem");         }