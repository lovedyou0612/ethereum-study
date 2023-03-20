// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint public counter; // public 会自动生成一个counter方法，可以获取counter的值
    constructor() {
        counter = 0;
    }

    function count() public {   //生成count方法,每次调用后counter + 1
        counter = counter + 1;
    }
}