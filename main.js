// import crypto library
const SHA256 = require('crypto-js/sha256')

class Block{
    // constructor as instance of class for assigning properties to block
    constructor(index, timestamp, data, previousHash=''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        // this property will be calculated (hash)
        this.hash = this.calculateHash();
    }

    // new method to calculate new hash
    calculateHash(){
        // crypto js to import
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

// new class for blockchain
class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()]; // area of blocks
        // add genesis block (initial 1st block in the blockchain)
    }

    createGenesisBlock(){
        return new Block(0, "01/11/2021"," Genesis Block", "0");
    }
    getLatestBlock(){
        // return last element of the chain
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){
        // add new block to chain - needs to set previous hash
        // recalculate hash
        // append to chain
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
    // validate integrity of blockchain
    isChainValid(){
        // not starting at genesis block
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            // check if it's equal to current
            if (currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            // check if current block points to previous one
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }

        return true;
    }
}

// test chain by creating an instance of the blockchain
let jimboCoin = new Blockchain();
jimboCoin.addBlock(new Block(1, "03/11/2021", { amount: 4 }));
jimboCoin.addBlock(new Block(2, "05/11/2021", { amount: 7 }));

// check how blockchain looks like
// console.log(JSON.stringify(jimboCoin, null, 4));

// check if blockchain is valid
console.log('Is Blockchain valid? ' + jimboCoin.isChainValid());

// try changing a block from the chain to see if it's valid
jimboCoin.chain[1].data = { amount: 20 };
// change integrity by recalculating hash
jimboCoin.chain[1].hash = jimboCoin.chain[1].calculateHash();
// concl block chain is meant to add new blocks but never change an existing block
console.log('Is Blockchain valid? ' + jimboCoin.isChainValid());