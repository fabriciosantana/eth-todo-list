// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract TodoList {

    address private owner;
    uint public taskCount = 0;

    struct Task {
        uint id;
        string content;
        bool completed;
    }

    mapping (uint => Task) public tasks;

    event contractDeployed(string _message);
    event newTaskCreated(uint indexed _id, string indexed _content, bool _completed);

    constructor() {
        owner = msg.sender;
        emit contractDeployed("sucess");

        createTask("Starting using yout ethereum based Todo List Dapp");
    }

    function createTask (string memory _content) public {
        taskCount ++;
        tasks[taskCount] = Task(taskCount, _content, false);
        emit newTaskCreated(taskCount, _content, false);
    }

}
