// const { expect } = require("chai");

// let counter;

// describe("Counter", function () {
//   async function init() {
//     const Counter = await ethers.getContractFactory("Counter");
//     counter = await Counter.deploy();
//     await counter.deployed();
//     console.log("counter:" + counter.address);
//   }

//   before(async function () {
//     await init();
//   });

//   // 
//   it("init equal 0", async function () {
//     expect(await counter.counter()).to.equal(0); // 期望 初始化的时候 counter.counter() 等于 0 
//   });

//   it("add 1 equal 1", async function () {
//     let tx = await counter.count();               // 执行一次
//     await tx.wait();
//     expect(await counter.counter()).to.equal(1); // 期望 执行一次后 counter.counter() 等于 1
//   });

// });



const { expect } = require("chai");

let counter;
let owner, otherAccount;

describe("Counter", function () {
  async function init() {
    [owner,otherAccount] = await ethers.getSigners();  // 获取 合约部署调用者及其他调用者的地址, 
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy(0);                 // 合约代码, counter 修改为输入一个值,而不是直接就为 0
    await counter.deployed();
    console.log("counter:" + counter.address);
  }

  before(async function () {
    await init();
  });

  // 
  it("count ok", async function () {     //  当是合约部署者调用的时候,期望开始的counter的值为0,执行一次count方法后,counter的值为1
    expect(await counter.counter()).to.equal(0);  
    let tx = await counter.count();
    await tx.wait();
    expect (await counter.counter()).to.equal(1);
  });

  it("count_with_revert", async function () {    // 当不是合约部署者调用时,期望回退
    let counter2 = counter.connect(otherAccount);
    expect(counter2.count()).to.be.revertedWith("invalid call"); 
  });

});