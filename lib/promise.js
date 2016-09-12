console.log(`Promises`);

// an immediately resolved promise
var p2 = Promise.resolve(1); 

// can get it after the fact, unlike events
p2.then((res) => console.log(res)); 

var p = new Promise(function(resolve, reject) {
    var start = Date.now();
    var end = Date.now() + 4000; 
    
    setTimeout(() => resolve(2), 2000);
    while (Date.now() < start) {
        if (Date.now() )
    }
    resolve(3);
});

// handler can't change promise, just value
p.then((res) => {  
    res += 1;  
    console.log(res);
});

p.then((res) => {  
    res += 2;  
    console.log(res);
});

p.catch((err) => {  
    console.log(err);
});

// still gets 4
p.then((res) => console.log(res));  
