import { sepolia } from "viem/chains";
import * as dotenv from "dotenv";
dotenv.config();
import {
  createPublicClient,
  http,
  createWalletClient,
  hexToString,
} from "viem";
import { abi } from "../artifacts/contracts/Ballot.sol/Ballot.json";

const providerApiKey = process.env.ALCHEMY_API_KEY || "";

async function main() {
  const parameters = process.argv.slice(2);
  if (!parameters || parameters.length < 2)
    throw new Error("Parameters not provided");
  const contractAddress = parameters[0] as `0x${string}`;
  if (!contractAddress) throw new Error("Contract address not provided");
  if (!/^0x[a-fA-F0-9]{40}$/.test(contractAddress))
    throw new Error("Invalid contract address");
  const proposalIndex = parameters[1];
  if (isNaN(Number(proposalIndex))) throw new Error("Invalid proposal index");

  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(`https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`),
  });

  const proposal = (await publicClient.readContract({
    address: contractAddress,
    abi,
    functionName: "proposals",
    args: [BigInt(proposalIndex)],
  })) as any[];
  const name = hexToString(proposal[0], { size: 32 });
  const votes = proposal[1];

  console.log("Querying for proposal: ", name);
  console.log(`votes: ${votes}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
