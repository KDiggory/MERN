'use strict';

// Create three async functions called asyncFunction<1,2,3>
const asyncFunction1 = async () => {
    console.log('async function one');
    let prom1 = new Promise ((res, rej) => {
        setTimeout(() => {
            res('timer finished in async function one');
        }, 3000);
    })
    let result1 = await prom1;
    console.log(result1);
}; 


const asyncFunction2 = async () => {
    console.log('async function two');
    let prom2 = new Promise ((res, rej) => {
        setTimeout(() => {
            res('timer finished in async function two');
        }, 2000);
    })
    let result2 = await prom2;
    console.log(result2);
};


const asyncFunction3 = async () => {
    console.log('async function three');
    let prom3 = new Promise ((res, rej) => {
        setTimeout(() => {
            res('timer finished in async function three');
        }, 1000);
    })
    let result3 = await prom3;
    console.log(result3);
};

async function doThings() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
    console.log('all done');
};

doThings();