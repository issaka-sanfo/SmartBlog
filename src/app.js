const addresss = '0x1ccb1C84329DC1ccA64f836535574A8C019e8a6b'
window.abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "listtweet",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "content",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "modified",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "deleted",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "date",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "tweetCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_content",
        "type": "string"
      }
    ],
    "name": "createSportTweet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "a",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_content",
        "type": "string"
      }
    ],
    "name": "modifyTweet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "a",
        "type": "uint256"
      }
    ],
    "name": "deleteTweet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getListTweet",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "content",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "modified",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "deleted",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "date",
            "type": "uint256"
          }
        ],
        "internalType": "struct Tweet.TweetStructure[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]

window.addEventListener('load', async () => {
	if (typeof web3 !== 'undefined') {
		window.web3 = new Web3(web3.currentProvider)
    //console.log(web3)
	}
	else {
		window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
		alert("HttpProvider")
	}
  await init()
})

async function init() { 
  const address = addresss
  console.log(address)
  const AbiContractToken = await new web3.eth.Contract(abi, address)
  acc = await web3.eth.getAccounts()
  console.log(acc)
  tweets = await AbiContractToken.methods.getListTweet().call()
  //tweets = await AbiContractToken.methods.createSportTweet('yann').send({from:"0xC7755F19502958cEBa6347b8674c43D727b62626"})
  console.log(tweets)

	feed = ''

	for (tweet of tweets){
			  if (! tweet.deleted){
          feed += `<div class="media-block tweetTemplate">
        <a class="media-left" href="#"><img class="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar1.png"></a>
        <div class="media-body " >
          <div class="mar-btm">
            <a href="#"class="btn-link text-semibold media-heading box-inline"><span id="account">User</span></a>
            <p class="text-muted text-sm"><i class="fa fa-mobile fa-lg"></i> - From Mobile - ${tweet.date} </p>
          </div>
          <p id="${tweet.id}" class="content">${tweet.content}</p>
          <div class="pad-ver">
            <div class="btn-group">
              <a class="btn btn-sm btn-default btn-hover-success" href="#"><i class="fa fa-thumbs-up"></i></a>
              <a class="btn btn-sm btn-default btn-hover-danger" href="#"><i class="fa fa-thumbs-down"></i></a>                  
              <a class="btn btn-sm btn-default btn-hover-success" onclick="deletedTweets(${tweet.id});" href="#"><i class="fa fa-trash"></i></a>
              <a class="btn btn-sm btn-default btn-hover-danger" data-toggle="modal" data-target="#myModal" onclick="modifyTweets(${tweet.id});" href="#"><i class="fa fa-pencil-square-o "></i></a>
            </div>
          </div>
          <hr>
        </div>
      </div>`
        }
	}

  document.getElementById('tweetContent').innerHTML = feed
}

async function createTweet(){
  content = document.getElementById('newTweet').value 
  const address = addresss
  const AbiContractToken = await new web3.eth.Contract(abi, address)
  acc = await web3.eth.getAccounts()
  console.log(acc[0])
  tweets = await AbiContractToken.methods.createSportTweet(content).send({from:acc[0]})
  init()
}

async function modifyTweets(id){
  let content = prompt('enter new content')
  const address = addresss
  const AbiContractToken = await new web3.eth.Contract(abi, address)
  acc = await web3.eth.getAccounts()
  tweets = await AbiContractToken.methods.modifyTweet(id, content).send({from:acc[0]})
  init()
}

async function deletedTweets(id){
  const address = addresss
  const AbiContractToken = await new web3.eth.Contract(abi, address)
  acc = await web3.eth.getAccounts()
  tweets = await AbiContractToken.methods.deleteTweet(id).send({from:acc[0]})
  init()
}


