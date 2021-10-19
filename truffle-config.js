const HDWalletProvider = require("@truffle/hdwallet-provider");
const ropsten_mnemonic = "faith salad rabbit ecology sketch decrease work scheme hip frog hat faith";
module.exports = {
  
  networks: {
    ropsten: {
			provider: () =>
				new HDWalletProvider(
					ropsten_mnemonic,
					"https://ropsten.infura.io/v3/e44bd34397ce456bbef21eaccdce5556"
				),
			network_id: "3",
			gas: 8000000,
		},
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
    
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },

  compilers: {
		solc: {
			version: "0.8.1", // Fetch exact version from solc-bin (default: truffle's version)
			// docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
			// settings: {          // See the solidity docs for advice about optimization and evmVersion
			//  optimizer: {
			//    enabled: false,
			//    runs: 200
			//  },
			//  evmVersion: "byzantium"
			// }
		},
	}
}
