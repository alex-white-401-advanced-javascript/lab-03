'use strict';

const fs = require('fs');
const faker = require('faker');


let file = `${__dirname}/files/test.txt`;
// let file = process.argv.slice(2);

let doSomething = (err,data) => {
  if (err) {
    throw err;
  }
  console.log('Before appendFile', data.toString());
  let randoNum = faker.random.number(10);
  fs.appendFile(file, randoNum, (err) => {
    if (err) throw err;
    console.log(`${randoNum} was appended to ${file}`);

    fs.readFile(file, (err,data) => {
      if ( err ) { throw err; }
      console.log('After appendFile', data.toString());
    });
  });
};

fs.readFile(file, doSomething);
