import Web3 from 'web3';

const host = 'http://localhost:7545';
const greeterAddress = '0x2cF00A42b8e339e02aEe933235177c689a23Df69';

//ABI = Application Binary Interface
//truffle(development)> JSON.stringify(Greeter.abi)
let greeterABI = [
  {
    'constant': false,
    'inputs': [
      {
        'internalType': 'string',
        'name': '_greeting',
        'type': 'string',
      }],
    'name': 'greeter',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'greet',
    'outputs': [{'internalType': 'string', 'name': '', 'type': 'string'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  }];

const web3 = new Web3(
    new Web3.providers.HttpProvider(host));

const greeterContract = new web3.eth.Contract(greeterABI, greeterAddress);

export {greeterContract, greeterAddress};