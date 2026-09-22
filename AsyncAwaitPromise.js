

function dataFiller(elementname, dataToEnter){
    let p1 = new Promise((resolve, reject) => {
        setTimeout( () =>{
            resolve("Fill activity processed with "+ elementname + " -> " + dataToEnter);
        }, 2000);
    });
    return p1;
}

function click(elementname){
    let p2 = new Promise((resolve, reject) => {
        setTimeout( () =>{
        resolve("click activity processed with "+ elementname);
    }, 1000);
    });
    return p2;
}

// dataFiller("username", "data1").then((msg) => {
//     console.log("then - ", msg);
//     return click("login button");
// }).then((msg) =>{
//     console.log("then - ", msg); 
// }).catch((msg)=>{
//     console.log("catch - ", msg); 
// })

async function testcase(){
    try{
        let msg1 = await dataFiller("username", "data1");
        console.log("then - ", msg1);

        let msg2 = await click("login button");
        console.log("then - ", msg2);
    }catch(error){

    }
}

// single threaded language 
// function trigger, dont wait to finish those function


// dataFiller("username", "user1", click, "login button");

// Promise -  fullfilled (resolve)- then  , pending , rejected - catch

// let pr1 = new Promise((resolve, reject)=>{
//         // locator
//         let bool = false;
//         if(bool){
//           resolve("abcd");
//         }else{
//           reject("xyz");
//         }
// });

// pr1.then((msg)=>{
//     console.log("then " + msg)
// }).catch((msg)=>{
//     console.log("catch " + msg)
// })