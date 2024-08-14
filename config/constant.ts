import { Aptos, AptosConfig } from "@aptos-labs/ts-sdk";
import { Network } from "aptos";

const aptosConfig = new AptosConfig({ network: Network.TESTNET });
export const APTOS = new Aptos(aptosConfig);