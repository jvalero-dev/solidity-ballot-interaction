# Ballot.sol smart contract interaction

Initialisation of environment:

```shell
    npm install
```

Before interacting with the contract we need to compile to contract locally to have the abi available:

```shell
    npx hardhat compile
```

Contract Ballot.sol was deployed on Sepolia testnet at address 0xE9BF09c31E9a2FF48C37338EE913D142A2F83077 using script DeployWithView.ts

```shell
    npx ts-node --files ./scripts/DeployWithViem.ts "Proposal 1" "Proposal 2" "Proposal 3"
```

## Josue Valero @ jvalero.dv 0x765A6B5fB4aBE2381bC2Be4928F3D09C978dc5BB

Interacting with vote function via CastVote.ts script:

```shell
    npx ts-node --files ./scripts/CastVote.ts "0xE9BF09c31E9a2FF48C37338EE913D142A2F83077" "1"
```

Transaction hash: 0xb2cc4e21de01e9b375a28190e245f82b1787474d5f55e3d690920255bfc608b2

Interacting with giveRightToVote function via GiveVoteRights.ts script:

```shell
    npx ts-node --files ./scripts/GiveVoteRights.ts "0xE9BF09c31E9a2FF48C37338EE913D142A2F83077" "0xf58C39C212eaDc609AcABe1cf082B8a5a36D002E"
```

Transaction hash: 0xd53f53bb388539507c39dba2c628b3486f39fd60fa77f114fc77c07edfecc667

Interacting with delegate function via DelegateVote.ts script:

```shell
    npx ts-node --files ./scripts/DelegateVote.ts "0xE9BF09c31E9a2FF48C37338EE913D142A2F83077" "0xf58C39C212eaDc609AcABe1cf082B8a5a36D002E"
```

Transaction hash: 0x5822d77749a960f83be02864f19b1f772c3b77fff12c909ef2f83613b4cfe7df

Querying voting results via QueryVoteResults.ts script:

```shell
    npx ts-node --files ./scripts/QueryVoteResults.ts "0xE9BF09c31E9a2FF48C37338EE913D142A2F83077" "1"
```

Terminal output:

    Querying for proposal:  Proposal 2
    votes: 2
