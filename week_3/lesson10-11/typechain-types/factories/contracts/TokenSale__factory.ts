/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TokenSale, TokenSaleInterface } from "../../contracts/TokenSale";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ratio",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ratio",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102d23803806102d28339818101604052810190610032919061011a565b8160008190555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505061015a565b600080fd5b6000819050919050565b61009981610086565b81146100a457600080fd5b50565b6000815190506100b681610090565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100e7826100bc565b9050919050565b6100f7816100dc565b811461010257600080fd5b50565b600081519050610114816100ee565b92915050565b6000806040838503121561013157610130610081565b5b600061013f858286016100a7565b925050602061015085828601610105565b9150509250929050565b610169806101696000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806371ca337d1461003b5780639d76ea5814610059575b600080fd5b610043610077565b60405161005091906100bc565b60405180910390f35b61006161007d565b60405161006e9190610118565b60405180910390f35b60005481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000819050919050565b6100b6816100a3565b82525050565b60006020820190506100d160008301846100ad565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610102826100d7565b9050919050565b610112816100f7565b82525050565b600060208201905061012d6000830184610109565b9291505056fea264697066735822122023a6655353e8cfeefca45a99e4725f91ed8925a08d690bada8ee6ef0f5c3afa764736f6c63430008110033";

type TokenSaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenSaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenSale__factory extends ContractFactory {
  constructor(...args: TokenSaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _ratio: PromiseOrValue<BigNumberish>,
    _tokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenSale> {
    return super.deploy(
      _ratio,
      _tokenAddress,
      overrides || {}
    ) as Promise<TokenSale>;
  }
  override getDeployTransaction(
    _ratio: PromiseOrValue<BigNumberish>,
    _tokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_ratio, _tokenAddress, overrides || {});
  }
  override attach(address: string): TokenSale {
    return super.attach(address) as TokenSale;
  }
  override connect(signer: Signer): TokenSale__factory {
    return super.connect(signer) as TokenSale__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenSaleInterface {
    return new utils.Interface(_abi) as TokenSaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenSale {
    return new Contract(address, _abi, signerOrProvider) as TokenSale;
  }
}
