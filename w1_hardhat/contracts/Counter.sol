// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint public counter; // public 会自动生成一个counter方法，可以获取counter的值
    address owner; // 定义合约部署人的地址  测试只有合约部署者才可以调用count方法，其他人则调用失败

    constructor(uint x) {
        counter = x;
        owner = msg.sender;
    }

    function count() public {   //生成count方法,每次调用后counter + 1
        require(msg.sender == owner, "invalid call");
        counter = counter + 1;
    }
}