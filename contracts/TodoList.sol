// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract TodoList {

    address private owner;
    uint public taskCount = 0;

    event contractDeployed(string _message);

    constructor() {
        owner = msg.sender;
        emit contractDeployed("sucess");
    }

}
