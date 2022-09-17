import bigDecimal from "js-big-decimal";
import Web3 from "web3";
// const { ethers } = require("ethers");

const contractBox = "0x5bab4f8910530393b8e1c9f52859efc717d68835";
const abi_box = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_id", "type": "uint256" }], "name": "OpenEgg", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "_eggPriceLuxury", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_eggPriceNormal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_eggPriceVip", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_flagLuxury", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_flagNormal", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_flagVip", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_storyNfts", "outputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }, { "internalType": "uint256", "name": "story", "type": "uint256" }, { "internalType": "uint256", "name": "stt", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_totalLuxury", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_totalNormal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_totalVip", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_users", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "userAddress", "type": "address" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }, { "internalType": "address", "name": "ref", "type": "address" }, { "internalType": "uint256", "name": "totalF1Active", "type": "uint256" }, { "internalType": "uint256", "name": "totalF1", "type": "uint256" }, { "internalType": "uint256", "name": "reAmount", "type": "uint256" }, { "internalType": "uint256", "name": "profit", "type": "uint256" }, { "internalType": "uint256", "name": "commission", "type": "uint256" }, { "internalType": "uint256", "name": "reward", "type": "uint256" }, { "internalType": "uint256", "name": "directSales", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "ref", "type": "address" }], "name": "addTree", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "approveAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "quantityEggs", "type": "uint256" }, { "internalType": "uint256", "name": "typeEgg", "type": "uint256" }], "name": "buyEgg", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "cmsF1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "cmsF2", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "countPlayers", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "eggsLuxury", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "eggsNormal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "eggsVip", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "idNft", "type": "uint256" }], "name": "getStoryNft", "outputs": [{ "internalType": "uint256", "name": "story", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "list", "outputs": [{ "internalType": "uint256[]", "name": "_ids", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "typeEgg", "type": "uint256" }], "name": "mintNft", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "typeEgg", "type": "uint256" }], "name": "openEggAndAward", "outputs": [{ "internalType": "uint256", "name": "newItemId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "quantityEggs", "type": "uint256" }, { "internalType": "uint256", "name": "typeEgg", "type": "uint256" }], "name": "openEggsAndAwards", "outputs": [{ "internalType": "uint256[]", "name": "_ids", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "eggPriceNormal", "type": "uint256" }, { "internalType": "uint256", "name": "eggPriceVip", "type": "uint256" }, { "internalType": "uint256", "name": "eggPriceLuxury", "type": "uint256" }, { "internalType": "uint256", "name": "_cmsF1", "type": "uint256" }, { "internalType": "uint256", "name": "_cmsF2", "type": "uint256" }], "name": "setEggPrice", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "flagNormal", "type": "bool" }, { "internalType": "bool", "name": "flagVip", "type": "bool" }, { "internalType": "bool", "name": "flagLuxury", "type": "bool" }], "name": "setFlag", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }], "name": "setToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startAdd", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }], "name": "withdrawErc20", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

const contractUsdt = "0x55d398326f99059ff775485246999027b3197955";
const abi_usdt = [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "_decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];

const contractFarm = "0x302ec35c0268a1bcd96bde67f7a14cae9a3ed20e";
const abi_farm = [{ "inputs": [{ "internalType": "address", "name": "rewardToken", "type": "address" }, { "internalType": "uint256", "name": "stakeRewardCap", "type": "uint256" }, { "internalType": "uint256", "name": "stakeRewardPerBlock", "type": "uint256" }, { "internalType": "contract IERC721", "name": "_mercenary", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_price", "type": "uint256" }], "name": "BuyNft", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_price", "type": "uint256" }], "name": "StakeNft", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "UnstakeNft", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "StakeDetails", "outputs": [{ "internalType": "address payable", "name": "author", "type": "address" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_accAmountPerShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_finalRewardBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_infoNft", "outputs": [{ "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bool", "name": "status", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_lastRewardBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_lpToken", "outputs": [{ "internalType": "contract IERC20Mintable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_rewardToken", "outputs": [{ "internalType": "contract IERC20Mintable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_stakeRewardLeft", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_stakeRewardMinted", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_stakeRewardPerBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_stakers", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "rewardDebt", "type": "uint256" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }, { "internalType": "address", "name": "ref", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_startBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_totalShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_totalStake", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "reward", "type": "uint256" }], "name": "changeStakeReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getJoinsv1", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }, { "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getJoinsv2", "outputs": [{ "components": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "userAddress", "type": "address" }], "internalType": "struct Founder.Join[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "stakerAddr", "type": "address" }], "name": "getStakeReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getStakedNft", "outputs": [{ "components": [{ "internalType": "address payable", "name": "author", "type": "address" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "internalType": "struct Founder.StakeDetail[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "getStakedNft", "outputs": [{ "components": [{ "internalType": "address payable", "name": "author", "type": "address" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "internalType": "struct Founder.StakeDetail[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_staker", "type": "address" }], "name": "getStakeerAmount", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_staker", "type": "address" }], "name": "getStakerRef", "outputs": [{ "internalType": "address", "name": "ref", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_staker", "type": "address" }], "name": "getStakerRewardDebt", "outputs": [{ "internalType": "uint256", "name": "rewardDebt", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_staker", "type": "address" }], "name": "getStakerTimestamp", "outputs": [{ "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "getStakingAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getStakingAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "getTest", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "infoNfts", "outputs": [{ "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bool", "name": "status", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "joins", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "userAddress", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "mercenary", "outputs": [{ "internalType": "contract IERC721", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mintRewardToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "bytes", "name": "", "type": "bytes" }], "name": "onERC721Received", "outputs": [{ "internalType": "bytes4", "name": "", "type": "bytes4" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "priceLuxury", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "priceNormal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "priceVip", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "redeemStakeReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_priceNormal", "type": "uint256" }, { "internalType": "uint256", "name": "_priceVip", "type": "uint256" }, { "internalType": "uint256", "name": "_priceLuxury", "type": "uint256" }], "name": "setPriceStake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "rewardToken", "type": "address" }], "name": "setRewardToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "stake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "_price", "type": "uint256" }], "name": "stakeNft", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "stakedNft", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "startBlock", "type": "uint256" }], "name": "startStaking", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "unstake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "_price", "type": "uint256" }, { "internalType": "bool", "name": "status", "type": "bool" }], "name": "unstakeNft", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "_token", "type": "address" }], "name": "withdrawErc20", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

const contractMarket = "0xdE001F52f798E0B475d1639Df41022F7B709cEAE";
const abi_market = [{ "inputs": [{ "internalType": "contract IERC721", "name": "_mercenary", "type": "address" }, { "internalType": "contract IERC20", "name": "_token", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_price", "type": "uint256" }], "name": "BuyNft", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_price", "type": "uint256" }], "name": "StakeNft", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "UnstakeNft", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "_price", "type": "uint256" }], "name": "buyNft", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_index", "type": "uint256" }], "name": "getAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getStakedAllNfts", "outputs": [{ "components": [{ "internalType": "address payable", "name": "author", "type": "address" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "internalType": "struct Market.StakeDetail[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getStakedNft", "outputs": [{ "components": [{ "internalType": "address payable", "name": "author", "type": "address" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "internalType": "struct Market.StakeDetail[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "getStakedNft", "outputs": [{ "components": [{ "internalType": "address payable", "name": "author", "type": "address" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "internalType": "struct Market.StakeDetail[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "getStakingAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getStakingAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "mercenary", "outputs": [{ "internalType": "contract IERC721", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "bytes", "name": "", "type": "bytes" }], "name": "onERC721Received", "outputs": [{ "internalType": "bytes4", "name": "", "type": "bytes4" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "_price", "type": "uint256" }], "name": "stakeNft", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "stakedNft", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tax", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "unstakeNft", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "_token", "type": "address" }], "name": "withdrawErc20", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

const contractSft = "0x13b6e448eb51fa9289eabeb67c775f755652652a";
const abi_sft = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "delegator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "fromDelegate", "type": "address" }, { "indexed": true, "internalType": "address", "name": "toDelegate", "type": "address" }], "name": "DelegateChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "delegate", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "previousBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "DelegateVotesChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DELEGATION_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "DOMAIN_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_wallet", "type": "address" }], "name": "addMinter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint32", "name": "", "type": "uint32" }], "name": "checkpoints", "outputs": [{ "internalType": "uint32", "name": "fromBlock", "type": "uint32" }, { "internalType": "uint256", "name": "votes", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "delegatee", "type": "address" }], "name": "delegate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "delegatee", "type": "address" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "expiry", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "delegateBySig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "delegator", "type": "address" }], "name": "delegates", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "getCurrentVotes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "blockNumber", "type": "uint256" }], "name": "getPriorVotes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "minter", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "numCheckpoints", "outputs": [{ "internalType": "uint32", "name": "", "type": "uint32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

const bigUnit = new bigDecimal("1000000000000000000");


const addTree = async function (ref)
{

    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(
        abi_box,
        contractBox
    );
    if (!accounts.length) {
        return;
    }
    // console.log(ref);
    // return
    return await contract.methods
        .addTree(ref)
        .send({ from: accounts[0] })
        .catch((err) =>
        {
            return false;
        });
};

const getInfoUser = async function ()
{

    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(
        abi_box,
        contractBox
    );
    if (!accounts.length) {
        return;
    }
    return await contract.methods._users(accounts[0]).call();
};

const checkApprove = async () =>
{
    // console.log(data);
    // return true
    // connect acount
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(
        abi_sft,
        contractSft
    );
    if (!accounts.length) {
        return;
    }
    // return;
    let amountToken, amountApprove;
    let getAmountToken = await contract.methods.balanceOf(accounts[0]).call();
    let getAmountApprove = await contract.methods
        .allowance(accounts[0], contractBox)
        .call();
    amountToken = Number(new bigDecimal(getAmountToken).divide(bigUnit).value);
    amountApprove = Number(
        new bigDecimal(getAmountApprove).divide(bigUnit).value
    );

    if (amountToken <= amountApprove) {
        return true;
    } else {
        return false
    }
};

const getInfoBox = async () =>
{
    // console.log(data);
    // return true
    // connect acount
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(
        abi_box,
        contractBox
    );
    if (!accounts.length) {
        return;
    }
    let _eggPriceLuxury = await contract.methods._eggPriceLuxury().call();
    let _eggPriceNormal = await contract.methods._eggPriceNormal().call();
    let _eggPriceVip = await contract.methods._eggPriceVip().call();
    let _totalLuxury = await contract.methods._totalLuxury().call();
    let _totalNormal = await contract.methods._totalNormal().call();
    let _totalVip = await contract.methods._totalVip().call();

    return {
        _eggPriceLuxury: _eggPriceLuxury / 1e18,
        _eggPriceNormal: _eggPriceNormal / 1e18,
        _eggPriceVip: _eggPriceVip / 1e18,
        _totalLuxury,
        _totalNormal,
        _totalVip,
    }
};

const getMyNfts = async () =>
{
    // console.log("data");
    // return true
    // connect acount
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(
        abi_box,
        contractBox
    );
    if (!accounts.length) {
        return;
    }
    let listNfts = await contract.methods.list(accounts[0]).call();

    return listNfts;
};

const openEggs = async (data) =>
{

    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(
        abi_box,
        contractBox
    );
    if (!accounts.length) {
        return;
    }
    // var dataAmount = new bigDecimal(data.balance).multiply(bigUnit).value;
    // console.log('oj', data.th, data.balance);
    return await contract.methods
        .buyEgg(data.amount, data.type)
        .send({ from: accounts[0] })
        .catch((err) =>
        {
            return false;
        });
};

const submitApprove = async () =>
{
    // console.log(data);
    // return
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    if (!accounts.length) {
        return;
    }
    const contract = new web3.eth.Contract(
        abi_sft,
        contractSft
    );
    // let amountToken;
    let getAmountToken = await contract.methods.balanceOf(accounts[0]).call();

    // amountToken = Number(new bigDecimal(getAmountToken).divide(bigUnit).value);
    return await contract.methods
        .approve(contractMarket, getAmountToken)
        .send({ from: accounts[0] })
        .catch((err) =>
        {
            return false;
        });
};

const addToken = async function (ref)
{

    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(
        abi_box,
        contractBox
    );
    if (!accounts.length) {
        return;
    }
    // console.log(ref);
    // return
    return await contract.methods
        .setToken("0x55d398326f99059ff775485246999027b3197955")
        .send({ from: accounts[0] })
        .catch((err) =>
        {
            return false;
        });
};

const fcfarm = async (item) =>
{

    console.log(item);
    const web3 = new Web3(Web3.givenProvider);

    const accounts = await web3.eth.getAccounts();
    // console.log(accounts[0]);

    const contract = new web3.eth.Contract(
        abi_farm,
        contractFarm,
    );
    if (!accounts.length) {
        return;
    }
    // this.sttFarm = true;
    return await contract.methods
        .stake(item.id)
        .send({ from: accounts[0] })
        .catch((err) =>
        {
            console.log(err);
            return false;
        });
}

const fcSellMarket = async (id, price) =>
{

    // console.log(item);
    const web3 = new Web3(Web3.givenProvider);

    const accounts = await web3.eth.getAccounts();
    // console.log(accounts[0]);

    const contract = new web3.eth.Contract(
        abi_market,
        contractMarket,
    );
    if (!accounts.length) {
        return;
    }
    // this.sttFarm = true;
    var dataAmount = new bigDecimal(price).multiply(bigUnit).value;
    return await contract.methods
        .stakeNft(id, dataAmount)
        .send({ from: accounts[0] })
        .catch((err) =>
        {
            console.log(err);
            return false;
        });
}

const fcBuyMarket = async (id, price) =>
{

    // console.log(item);
    const web3 = new Web3(Web3.givenProvider);

    const accounts = await web3.eth.getAccounts();
    // console.log(accounts[0]);

    const contract = new web3.eth.Contract(
        abi_market,
        contractMarket,
    );
    if (!accounts.length) {
        return;
    }
    // this.sttFarm = true;
    var dataAmount = new bigDecimal(price).multiply(bigUnit).value;
    return await contract.methods
        .buyNft(id, dataAmount)
        .send({ from: accounts[0] })
        .catch((err) =>
        {
            console.log(err);
            return false;
        });
}

const fcUnSellMarket = async (id) =>
{

    // console.log(item);
    const web3 = new Web3(Web3.givenProvider);

    const accounts = await web3.eth.getAccounts();
    // console.log(accounts[0]);

    const contract = new web3.eth.Contract(
        abi_market,
        contractMarket,
    );
    if (!accounts.length) {
        return;
    }
    // this.sttFarm = true;
    return await contract.methods
        .unstakeNft(id)
        .send({ from: accounts[0] })
        .catch((err) =>
        {
            console.log(err);
            return false;
        });
}

const approveAll = async (type) =>
{
    const web3 = new Web3(Web3.givenProvider);

    const accounts = await web3.eth.getAccounts();
    // console.log(accounts[0]);

    const contract = new web3.eth.Contract(
        abi_box,
        contractBox,
    );
    if (!accounts.length) {
        return;
    }
    // console.log(this.contract.contractMercenary, this.contract.contractFarm, item.id);

    let ct;
    if (type == "farm") {
        ct = contractFarm
    } else {
        ct = contractMarket
    }
    await contract.methods
        .approveAll(ct)
        .send({ from: accounts[0] })
        .then((dataRes) =>
        {
            console.log(dataRes);
            // this.farm(item)
        })
        .catch((err) =>
        {
            console.log(err);
            // this.sttFarm = false;
        });
}

const getNftsMarket = async () =>
{
    // console.log(data);
    // return true
    // connect acount
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(
        abi_market,
        contractMarket
    );
    if (!accounts.length) {
        return;
    }
    let listNfts = await contract.methods.getStakedAllNfts().call();

    return { address: accounts[0], data: listNfts };
};

const checkApproveNft = async (id) =>
{
    // console.log(data);
    // return true
    // connect acount
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(
        abi_box,
        contractBox
    );
    if (!accounts.length) {
        return;
    }
    // return;
    console.log('is');
    let addApprove = await contract.methods
        .getApproved(id)
        .call();

    console.log('is', addApprove);
    let obj = {
        sttFarm: false,
        sttMarket: false
    };

    if (addApprove == contractFarm) {
        obj.sttFarm = true;
    }
    if (addApprove == contractMarket) {
        obj.sttMarket = true;
    }
    return obj;
};


const checkStaker = async (props) =>
{
    const web3 = new Web3(Web3.givenProvider);
    const account = await web3.eth.getAccounts();
    if (account.length > 0) {
        const data = new web3.eth.Contract(
            abi_farm,
            contractFarm
        );
        return await data.methods._stakers(account[0]).call();
    }
};
const getStakeReward = async (props) =>
{
    const web3 = new Web3(Web3.givenProvider);
    const account = await web3.eth.getAccounts();
    if (account.length > 0) {
        const data = new web3.eth.Contract(
            abi_farm,
            contractFarm
        );
        return await data.methods.getStakeReward(account[0]).call();
    }
};
const _totalStake = async (props) =>
{
    const web3 = new Web3(Web3.givenProvider);
    const account = await web3.eth.getAccounts();
    if (account.length > 0) {
        const data = new web3.eth.Contract(
            abi_farm,
            contractFarm
        );
        return await data.methods._totalStake().call();
    }
};

const listNftStake = async (props) =>
{
    const web3 = new Web3(Web3.givenProvider);
    const account = await web3.eth.getAccounts();
    if (account.length > 0) {
        const data = new web3.eth.Contract(
            abi_farm,
            contractFarm
        );
        return await data.methods.getStakedNft(account[0]).call();
    }
};

const onHarvest = async () =>
{
    const web3 = new Web3(Web3.givenProvider);
    const account = await web3.eth.getAccounts();
    if (!account.length) {
        return;
    }
    if (account.length > 0) {
        const data = new web3.eth.Contract(
            abi_farm,
            contractFarm
        );
        return await data.methods
            .redeemStakeReward()
            .send({
                from: account[0],
            }).catch((err) =>
            {
                return false
            });
    }
};

const onUnStake = async (tokenId) =>
{
    // console.log(item.tokenId);
    // return
    // sử dụng địa chỉ contract Farm và ABi của nó.
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(
        abi_farm,
        contractFarm
    ); // dùng ABI của contract lp căp bnb_sft và địa chỉ của contract đó
    if (!accounts.length) {
        return;
    }
    console.log(tokenId);
    return await contract.methods
        .unstake(tokenId)
        .send({ from: accounts[0] })
        .catch((err) =>
        {
            return false
        });
};

const getPrices = async (props) =>
{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return fetch("https://api.pancakeswap.info/api/v2/tokens/0xaa8f550ed21ae4ece978f4141c4551d1deb7390a", requestOptions)

};

export
{
    checkStaker,
    getStakeReward,
    _totalStake,
    listNftStake,
    onHarvest,
    onUnStake,
    submitApprove,
    checkApprove,
    openEggs,
    getInfoBox,
    getMyNfts,
    addTree,
    getInfoUser,
    addToken,
    getNftsMarket,
    checkApproveNft,
    approveAll,
    fcfarm,
    fcSellMarket,
    fcBuyMarket,
    fcUnSellMarket,
    getPrices
};
