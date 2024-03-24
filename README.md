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

## Jerzy Kraszewski @ sanfarans addr1: 0xb2e0DceBaB0D4233E0c1F37C809b54B90cB95E29, addr2: 0x7269852C4a1F51a8f5647e6Feabb02816954A495

Checking current ballot status:

```shell
    npx ts-node --files ./scripts/CheckVotes.ts 0xE9BF09c31E9a2FF48C37338EE913D142A2F83077
```

Terminal output:

    Found 3 proposals
    Proposal 1 0n
    Proposal 2 2n
    Proposal 3 0n

Delegate addr2 vote to addr1, increasing addr1 voting power

```shell
     npx ts-node --files ./scripts/DelegateVote.ts 0xE9BF09c31E9a2FF48C37338EE913D142A2F83077 0xb2e0DceBaB0D4233E0c1F37C809b54B90cB95E29
```

Transaction hash: 0xc9aba2c5ed5f69e6d48bacf2be73d7c72e2703422388c3bab92f1475091b0613

Vote on Proposal 1 with addr1

```shell
    npx ts-node --files ./scripts/CastVote.ts 0xE9BF09c31E9a2FF48C37338EE913D142A2F83077 0
```

Transaction hash: 0xe73149e1dd2e303f1053d6b1d5bfa59172bb6f2f51eb602f472f36c29daa95b6

Checking current ballot status:

```shell
    npx ts-node --files ./scripts/CheckVotes.ts 0xE9BF09c31E9a2FF48C37338EE913D142A2F83077
```

Terminal output:

    Found 3 proposals
    Proposal 1 2n
    Proposal 2 2n
    Proposal 3 0n

## Karlo Sebalj @schelby5 addr1: 0xb2146a0B704Da9701D127B8722C572a6e6693EfD
Trying to vote without the voting rights:
```shell
    npx ts-node --files ./scripts/CastVote.ts 0xE9BF09c31E9a2FF48C37338EE913D142A2F83077 0
```
Result: 
```shell
  details: 'execution reverted: Has no right to vote',
  docsPath: undefined,
  metaMessages: [
    'Request Arguments:',
    '  from:  0xb2146a0B704Da9701D127B8722C572a6e6693EfD\n' +
      '  to:    0xE9BF09c31E9a2FF48C37338EE913D142A2F83077\n' +
      '  data:  0x0121b93f0000000000000000000000000000000000000000000000000000000000000001'
  ],
  shortMessage: 'Execution reverted with reason: Has no right to vote.',
  version: 'viem@2.8.18'
```
Calling the CastVote.ts script after the voting rights have been given:
```shell
    npx ts-node --files ./scripts/CastVote.ts "0xE9BF09c31E9a2FF48C37338EE913D142A2F83077" "1"
```
Transaction hash: 0xb56acc78195dda65f3c19d11aebec8fbe2086b9523656118cd2d9a4bcac52eb4

Delegating the vote status to jvalero.dv 0x765A6B5fB4aBE2381bC2Be4928F3D09C978dc5BB

```shell
    npx ts-node --files ./scripts/Delega
teVote.ts "0xE9BF09c31E9a2FF48C37338EE913D142A2F83077" "0x765A6B5fB4aBE2381bC2Be4928F3D09C978dc5BB"
```

Result:
```shell

details: 'execution reverted: You already voted.',
  docsPath: undefined,
  metaMessages: [
    'Request Arguments:',
    '  from:  0xb2146a0B704Da9701D127B8722C572a6e6693EfD\n' +
      '  to:    0xE9BF09c31E9a2FF48C37338EE913D142A2F83077\n' +
      '  data:  0x5c19a95c000000000000000000000000765a6b5fb4abe2381bc2be4928f3d09c978dc5bb'
  ],
  shortMessage: 'Execution reverted with reason: You already voted..',
```
