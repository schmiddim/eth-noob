pragma solidity ^0.5.16;

contract Greeter {

    string greeting;

    function greeter(string memory _greeting) public {
        greeting = _greeting;

    }


    function   greet() public view returns (string memory ){
        return greeting;
    }
}