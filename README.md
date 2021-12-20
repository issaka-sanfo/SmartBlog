# smcontract
We choose the Coding project in order to perform our knowledge in Solidity concepts.
Group:
* 1.ISSAKA SANFO
* 2.MBELLA
* 3.NADESSANE 

READ ME file
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)con
* [Setup](#setup)
## General info
This project is simple mini twitter application using solidity with etherum .
	
## Technologies
Project is created with:
* truffle version: 5.3.4
* solidity version :0.8.1
* solidity compiler version: 0.7.0
* npm version: 6.14.12
* lite-server version: 2.6.1 for the frontend.
	
## Setup with ganache:
$ git clone https://github.com/Isanfoweb/smcontract.git
download ganache https://www.trufflesuite.com/ganache
To run this project, install  it locally using npm:
```
$ cd ../smcontract
$ npm i

$ truffle migirate --reset

$ npm run dev
 connect to metamask 
 ```
## Setup to run the proect on ropsten:
 * 1.clone the master branch : $ git clone https://github.com/Isanfoweb/smcontract.git
 * 2.replace the ropsten_mnemonic value by own words: const ropsten_mnemonic = "faith salad rabbit ecology sketch decrease work scheme hip frog hat faith";
 * 3.run in the project folder: $ truffle migrate --network ropsten
 * 4.finally run : $ npm run dev

# Now you can create, modify, read and delete a tweet.

## Docker container
* We created 3 files:migrate.Docker, docker-compose.yml and .dockerignor .
* To create a image for container run: $ docker-compose build
* After this command you should go to Docker Appication you'll see the created image and you can run it to a container 
* ![Docker](https://user-images.githubusercontent.com/60336269/120220713-77955100-c23d-11eb-8c57-aed1e164a9d5.PNG)
* ![Capture1](https://user-images.githubusercontent.com/60336269/120220715-782de780-c23d-11eb-870d-bb7cff50fe51.PNG)
* Docker Show images run: $ docker ps OR docker images ls
* Docker stop images run: $ docker stop Ethereum
* Docker list of containers running run: $ docker container ls
* Docker previous containersrun: $ docker container ls -a












 
 


"# SmartBlog" 
