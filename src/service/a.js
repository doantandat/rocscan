/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();
var Firestore = require('@google-cloud/firestore');
var firestore = new Firestore();
const Web3 = require('web3');
const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
const contractBox = "0x32b135dfe106efcee05fcecceb706534d0e2ef5d";
const abi_box = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_id", "type": "uint256" }], "name": "OpenEgg", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "_eggPriceLuxury", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_eggPriceNormal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_eggPriceVip", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_flagLuxury", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_flagNormal", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_flagVip", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_storyNfts", "outputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }, { "internalType": "uint256", "name": "story", "type": "uint256" }, { "internalType": "uint256", "name": "stt", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_totalLuxury", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_totalNormal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_totalVip", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "quantityEggs", "type": "uint256" }, { "internalType": "uint256", "name": "typeEgg", "type": "uint256" }], "name": "buyEgg", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "eggsLuxury", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "eggsNormal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "eggsVip", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "list", "outputs": [{ "internalType": "uint256[]", "name": "_ids", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "typeEgg", "type": "uint256" }], "name": "openEggAndAward", "outputs": [{ "internalType": "uint256", "name": "newItemId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "quantityEggs", "type": "uint256" }, { "internalType": "uint256", "name": "typeEgg", "type": "uint256" }], "name": "openEggsAndAwards", "outputs": [{ "internalType": "uint256[]", "name": "_ids", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "eggPriceNormal", "type": "uint256" }, { "internalType": "uint256", "name": "eggPriceVip", "type": "uint256" }, { "internalType": "uint256", "name": "eggPriceLuxury", "type": "uint256" }], "name": "setEggPrice", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "flagNormal", "type": "bool" }, { "internalType": "bool", "name": "flagVip", "type": "bool" }, { "internalType": "bool", "name": "flagLuxury", "type": "bool" }], "name": "setFlag", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }], "name": "setToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }], "name": "withdrawErc20", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];

const contract = new web3.eth.Contract(
    contract_abi,
    contract_address,
);

const listNfts = [
    {
        name: "Bakdack"
    },
    {
        name: "Scarlett"
    },
    {
        name: "Minotaur"
    },
    {
        name: "Faun"
    },
    {
        name: "Croco"
    },
    {
        name: "Lycanthrope"
    },
]
exports.openbox = functions.https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', "*");
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    // console.log("transaction request: ", req.body);
    // console.log("transaction query: ", req.query);
    // console.log("transaction query: ", req.query.data.length);
    await web3.eth.accounts.wallet.add('f29531b0c496d5799d833278f6e12a77386cbfb0b8dd14250b64106a93c0d3ce');

    let address = req.query.address;
    var arrId = req.query.data.split(','); // split string on comma space
    console.log(arrId);

    const sendMailForUsers = async (users) => {
        const usersLength = users.length;
        // console.log(usersLength);
        let arr = [];
        for (let i = 0; i < usersLength; i += 400) {
            const requests = users.slice(i, i + 400).map((user) => {
                return new Promise(async (resolve, reject) => {
                    let dataId = await firestore.doc("sft_idNft/" + user).get();
                    if (dataId.exists) {
                        console.log("Document data:", doc.data());
                        resolve()
                    } else {
                        console.log("No such document!");
                        let infoIfBlockchian = await contract.methods._storyNfts(user).call();
                        let randomNum = Math.floor(Math.random() * 100);
                        switch (infoIfBlockchian.story) {
                            case "0":
                                if (randomNum < 20) {

                                }
                                break;
                            case "1":

                                break;
                            case "2":

                                break;
                            default:
                                break;
                        }
                    }
                })
            })
            let aa = await Promise.all(requests)
                .catch(e => console.log(`Error in sending email for the batch ${i} - ${e}`))
            arr = arr.concat(aa);
        }
        return arr
    }

    let ancc = await sendMailForUsers(arr);

    // if (tranSnap.docs.length == 0) {
    //   await connectionOrder.doc(hashReq).set(staking);
    res.status(200).send({ 'code': 200, 'message': 'save order success' });
    // } else {
    //   // save transaction
    //   res.status(409).send({ 'code': 409, 'message': 'transaction exists' });
    // }
});

























/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
 const functions = require('firebase-functions');

 const admin = require('firebase-admin');
 admin.initializeApp();
 var Firestore = require('@google-cloud/firestore');
 var firestore = new Firestore();
 const Web3 = require('web3');
 const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
 const contractBox = "0x32b135dfe106efcee05fcecceb706534d0e2ef5d";
 const abi_box = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_id", "type": "uint256" }], "name": "OpenEgg", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "_eggPriceLuxury", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_eggPriceNormal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_eggPriceVip", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_flagLuxury", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_flagNormal", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_flagVip", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_storyNfts", "outputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }, { "internalType": "uint256", "name": "story", "type": "uint256" }, { "internalType": "uint256", "name": "stt", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_totalLuxury", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_totalNormal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_totalVip", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "quantityEggs", "type": "uint256" }, { "internalType": "uint256", "name": "typeEgg", "type": "uint256" }], "name": "buyEgg", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "eggsLuxury", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "eggsNormal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "eggsVip", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "list", "outputs": [{ "internalType": "uint256[]", "name": "_ids", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "typeEgg", "type": "uint256" }], "name": "openEggAndAward", "outputs": [{ "internalType": "uint256", "name": "newItemId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "quantityEggs", "type": "uint256" }, { "internalType": "uint256", "name": "typeEgg", "type": "uint256" }], "name": "openEggsAndAwards", "outputs": [{ "internalType": "uint256[]", "name": "_ids", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "eggPriceNormal", "type": "uint256" }, { "internalType": "uint256", "name": "eggPriceVip", "type": "uint256" }, { "internalType": "uint256", "name": "eggPriceLuxury", "type": "uint256" }], "name": "setEggPrice", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "flagNormal", "type": "bool" }, { "internalType": "bool", "name": "flagVip", "type": "bool" }, { "internalType": "bool", "name": "flagLuxury", "type": "bool" }], "name": "setFlag", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }], "name": "setToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }], "name": "withdrawErc20", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
 
 const contract = new web3.eth.Contract(
   abi_box,
   contractBox,
 );
 
 const listNfts = [
   {
     name: "Bakdack"
   },
   {
     name: "Scarlett"
   },
   {
     name: "Minotaur"
   },
   {
     name: "Faun"
   },
   {
     name: "Croco"
   },
   {
     name: "Lycanthrope"
   }
 ]
 
 exports.openbox = functions.https.onRequest(async (req, res) => {
   res.set('Access-Control-Allow-Origin', "*");
   res.set('Access-Control-Allow-Methods', 'GET, POST');
   // console.log("transaction request: ", req.body);
   // console.log("transaction query: ", req.query);
   // console.log("transaction query: ", req.query.data.length);
   await web3.eth.accounts.wallet.add('f29531b0c496d5799d833278f6e12a77386cbfb0b8dd14250b64106a93c0d3ce');
 
   let address = req.query.address;
   var arrId = req.query.data.split(','); // split string on comma space
   console.log(arrId);
 
   const sendMailForUsers = async (users) => {
     const usersLength = users.length;
     // console.log(usersLength);
     let arr = [];
     for (let i = 0; i < usersLength; i += 400) {
       const requests = users.slice(i, i + 400).map((user) => {
         return new Promise(async (resolve, reject) => {
           let dataId = await firestore.doc("sft_idNft/" + user).get();
           if (dataId.exists) {
             console.log("Document data:", doc.data());
             resolve()
           } else {
             console.log("No such document!");
             let infoIfBlockchian = await contract.methods._storyNfts(user).call();
             let randomNum = Math.floor(Math.random() * 100);
             let randomChar = Math.floor(Math.random() * listNfts.length);
             switch (infoIfBlockchian.story) {
               case "0":
                 if (randomNum < 20) {
                   await firestore.collection("sft_idNft").add({
                     name: listNfts[randomChar],
                     type: "rare",
                     id: infoIfBlockchian.id * 1,
                     owner: infoIfBlockchian.owner,
                     time: infoIfBlockchian.timestamp * 1000
                   });
                 } else {
                   await firestore.collection("sft_idNft").add({
                     name: listNfts[randomChar],
                     type: "common",
                     id: infoIfBlockchian.id * 1,
                     owner: infoIfBlockchian.owner,
                     time: infoIfBlockchian.timestamp * 1000
                   });
                 }
                 break;
               case "1":
                 if (randomNum < 40) {
                   await firestore.collection("sft_idNft").add({
                     name: listNfts[randomChar],
                     type: "common",
                     id: infoIfBlockchian.id * 1,
                     owner: infoIfBlockchian.owner,
                     time: infoIfBlockchian.timestamp * 1000
                   });
                 } else if (randomNum >= 40 && randomNum < 95) {
                   await firestore.collection("sft_idNft").add({
                     name: listNfts[randomChar],
                     type: "rare",
                     id: infoIfBlockchian.id * 1,
                     owner: infoIfBlockchian.owner,
                     time: infoIfBlockchian.timestamp * 1000
                   });
                 } else {
                   await firestore.collection("sft_idNft").add({
                     name: listNfts[randomChar],
                     type: "legend",
                     id: infoIfBlockchian.id * 1,
                     owner: infoIfBlockchian.owner,
                     time: infoIfBlockchian.timestamp * 1000
                   });
                 }
                 break;
               case "2":
                 if (randomNum < 60) {
                   await firestore.collection("sft_idNft").add({
                     name: listNfts[randomChar],
                     type: "rare",
                     id: infoIfBlockchian.id * 1,
                     owner: infoIfBlockchian.owner,
                     time: infoIfBlockchian.timestamp * 1000
                   });
                 } else {
                   await firestore.collection("sft_idNft").add({
                     name: listNfts[randomChar],
                     type: "legend",
                     id: infoIfBlockchian.id * 1,
                     owner: infoIfBlockchian.owner,
                     time: infoIfBlockchian.timestamp * 1000
                   });
                 }
                 break;
               default:
                 break;
             }
           }
         })
       })
       let aa = await Promise.all(requests)
         .catch(e => console.log(`Error in sending email for the batch ${i} - ${e}`))
       arr = arr.concat(aa);
     }
     return arr
   }
 
   let ancc = await sendMailForUsers(arr);
 
   // if (tranSnap.docs.length == 0) {
   //   await connectionOrder.doc(hashReq).set(staking);
   res.status(200).send({ 'code': 200, 'data': ancc });
   // } else {
   //   // save transaction
   //   res.status(409).send({ 'code': 409, 'message': 'transaction exists' });
   // }
 });
 