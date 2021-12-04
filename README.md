# Blockchain & Jimbo Coin Excercise

This project consists in a creating a blockchain - contains the following:
 - proof-of-work algorithm
 - verify blokchain integrity (prevent hacking)
 - generate wallet for transactions
 - signing transactions

# Intro

A blockchain is a block of chains that contains and records information in a way that makes it extremly diffuclt (almost impossible) to hack or cheat.

It works as a digital ledger of transactions that's duplicated and distributed across the entire network of computer systems on the blockchain.

Each block in the chain has a number of transactions, and every time a mew transaction takes place, a record of that transaction is added to every participant's ledger. And, contains data, hash, and the previous hash (a has is the unique identifier from the block)

Each blockchain has a Proof-of-work. It's a mechanism that slows down the creation of new blocks.

Whenever someone joins the network a block is created and everyone from the network gets a copy of that block (each node verifies the block to make sure it hasn't been changed) - creating consensus.