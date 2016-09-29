console.log(`Promises`);

var DataStore = {


}


// an immediately resolved promise
var p2 = Promise.resolve(1); 

// can get it after the fact, unlike events
p2.then((res) => console.log(res)); 

var p = new Promise(function(resolve, reject) {
    setTimeout(() => resolve({uid: 12345}), 2000);
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
