//read my json file inside this js file

import testData from './test-data.json' with {type:"json"}

//console.log(testData)

for(let data of testData){
    console.log(data.username);
    console.log(data.password);
    console.log("===============")
}