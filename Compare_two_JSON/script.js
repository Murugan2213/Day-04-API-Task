compare = () => {
    var obj1 = {
        name: "Person 1",
        age: 5
    };

var obj2 = {
        age: 5, 
        name: "Person 1"
    };

let obj1Property = Object.getOwnPropertyNames(obj1);
let obj2Property = Object.getOwnPropertyNames(obj2);


if (obj1Property.length !== obj2Property.length){
    console.log ("Object-1 and Object-2 are not same");
    return false;
}


    for (let i = 0; i < obj1Property.length; i++){
            if (! obj2.hasOwnProperty(obj1Property[i])){
        console.log ("Object-1 and Object-2 are not same");
        return false;
    }

        
            console.log ("Object-1 and Object-2 are same");
            return true;
};

}

compare();



