require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan random stick equip hover lobster frame genius'; 
let testAccounts = [
"0xcdab0e96a799e38784a60d3f61971b5b5e8068331c3244fc8171a1ece056213a",
"0xc9d4ffc681c730be9319f50826ff07e386b2f4bc7f8fb54648266ce28e6697eb",
"0x8fd13d7b5e3f4f6e1adb9c8785084c1f90b85f5304d4969b6404a719bd1bec94",
"0xaa0484bdc07739733f4e68787d6d27037dd777b695d31860d24fca0844ee0542",
"0x9b618cd09e7b24aab1c96a55104912f51c75f78ab554b95382073e21941072aa",
"0x68340ac25e00f27603b531aeec2984a4bcd4176c060b1f96b3cdab1b74186f3e",
"0xd06726956f36bbdb4dd950a3735cfba4cac62b8da6874f50155af65ea3addb66",
"0xc8ae2544f8c01b300c64ac51b8083ce1884ba46187c00307cb78058ddbdd5800",
"0xc575a518477f711267198d43c9e6940c41f118a892aaa6d44c2412cfbe7557d4",
"0xd3fbbd87c18b0fe88f100e8570c7809e0d1f4fcb92e26b5e06507427875f77cd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

