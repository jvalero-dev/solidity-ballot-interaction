import { abi } from "../artifacts/contracts/Ballot.sol/Ballot.json";
import { createPublicClient, http, hexToString } from "viem";
import { sepolia } from "viem/chains";
import * as dotenv from "dotenv";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";

async function main() {
  const parameters = process.argv.slice(2);
  if (!parameters || parameters.length < 1)
    throw new Error("Parameters not provided");
  const contractAddress = parameters[0] as `0x${string}`;
  if (!contractAddress) throw new Error("Contract address not provided");
  if (!/^0x[a-fA-F0-9]{40}$/.test(contractAddress))
    throw new Error("Invalid contract address");

  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });
  
  const proposals = []
  try {
    while (true) {
      const proposal: any = await publicClient.readContract({
        address: contractAddress,
        abi,
        functionName: "proposals",
        args: [BigInt(proposals.length)],
      })
      proposals.push(proposal);
    }
  } catch (Error) {
    console.log(`Found ${proposals.length} proposals`)
  }

  proposals.forEach((proposal: any) => {
    console.log(
      hexToString(proposal[0], { size: 32 }),
      proposal[1]
    )
  })
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
