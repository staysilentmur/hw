let x=true;
let type=typeof(x); 
switch(type){
    case "string":
        console.log(x + "-- строка");
        break;
    case "number":
        console.log(x + "-- цифра");
        break;
    case "boolean":
        console.log(x+"-- логический тип");
        break;
    default:
        console.log( x + '-- тип не определён');

}
