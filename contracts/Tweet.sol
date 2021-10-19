//SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

contract Tweet {
    event NewTweet(uint256 id, string content);

    uint256 public tweetCount = 0;

    struct TweetStructure {
        uint256 id;
        string content;
        bool modified;
        bool deleted;
        uint256 date;
    }

    //mapping(uint => TweetStructure) public key;
    TweetStructure[] public listtweet;

    function createSportTweet(string memory _content) public {
        uint256 id = listtweet.length + 1;
        listtweet.push(
            TweetStructure(id, _content, false, false, block.timestamp)
        );

        emit NewTweet(id, _content);
    }

    function modifyTweet(uint256 a, string memory _content) public {
        TweetStructure storage tweet_ = listtweet[a - 1];
        tweet_.content = _content;
        tweet_.modified = true;
    }

    function deleteTweet(uint256 a) public {
        TweetStructure storage tweet_ = listtweet[a - 1];
        tweet_.deleted = true;
    }

    function getListTweet() public view returns (TweetStructure[] memory) {
        return listtweet;
    }
}
