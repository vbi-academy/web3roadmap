
# Rust Libraries


## Core Client

Libraries that enable a Substrate node to handle its network responsibilities, including consensus and block execution, are Rust crates prefixed with `sc_`

[@official@sc_](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/client)

## Core FRAME

The libraries for building runtime logic and encoding/decoding information in Substrate are Rust crates prefixed with `frame_`

- [@official@frame_](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/system)
- [@official@frame_](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/support)
- [@official@frame_](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/benchmarking)
- [@official@frame_](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/executive)

## Primitives
At the core of the Substrate architecture are primitive libraries that manage underlying operations and facilitate communication between core client services and the runtime. These libraries are Rust crates prefixed with `sp_`

[@official@sp_](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/primitives)


## Pallets

In the Substrate SDK, pallets are modular components that provide specific functionality to a blockchain. They are like plug-in modules that can be added, configured, and reused to build custom blockchains

[@official@pallets](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame)

Resoures:
[@official@Rust Libraries](https://docs.substrate.io/learn/rust-basics/)
