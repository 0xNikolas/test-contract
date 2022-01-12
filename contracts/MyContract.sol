// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.4 <0.9.0;

contract MyContract {
    string public d = "HelloWorld";
    uint256 public data = 1;

    function getData() external view returns (uint256) {
        return data;
    }

    function setData(uint256 _data) external {
        data = _data;
    }

    function setDataPrivate(uint256 _data) private {
        data = _data + 10;
    }

    function HelloWorld() external view returns (string memory) {
        return d;
    }
}
