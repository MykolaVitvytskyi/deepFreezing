const a = { a: 1, b: {b1: 2, b2: 3}, c: 4};

function deepFreeze(obj){
  
  Object.entries(obj).forEach(([key, value]) => {

    if( typeof obj[key] === 'object' ){
      deepFreeze(obj[key]);
    }

    Object.defineProperty(obj, key,{
      value : value,
      writable : false,
      configurable : false
    });
  });
  Object.seal(obj);
}

deepFreeze(a);
delete a.a;
a.b = 12;
a.b.b2 = null;
delete a.b.b1; 
a.b.b3 = 3;
console.log(a);
console.log(Object.isFrozen(a));  