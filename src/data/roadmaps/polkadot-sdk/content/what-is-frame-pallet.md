
# What is frame pallet? 


- FRAME provides modular, extensible components that enhance the flexibility of the Substrate SDK for various use cases. It includes Rust-based programs and libraries that simplify developing application-specific logic. 

- Most functionalities in FRAME are delivered through plug-in modules called pallets, which can be added and configured to meet specific requirements.

## #[pallet]
The #[pallet] macro is required to declare a pallet.This attribute macro is an attribute of the pallet module (`mod pallet`). 

Within the pallet module, the #[pallet] macro serves as an entry point for additional #[pallet::*] macros that describe the attributes used to identify the specific items the pallet requires

## #[pallet::config]

The [`#[pallet::config]`](https://paritytech.github.io/substrate/master/frame_support/attr.pallet.html#config-trait-palletconfig-mandatory) macro is required to define the generic data types that the pallet uses.

This macro provides the constants that are part of the system-level [`Config` trait](https://paritytech.github.io/substrate/master/frame_system/pallet/trait.Config.html) for the pallet


## #[pallet::event]

The #[pallet::event] macro allows you to define event types for a pallet

## #[pallet::error]

The #[pallet::error] macro allows you to define the error types that can be returned from the function calls dispatched to the runtime. The error information is included in the runtime metadata

## #[pallet::storage]
The #[pallet::storage] macro enables you to define abstract storage inside runtime storage and to set metadata for that storage. This attribute macro can be used multiple times.

## #[pallet::call]

The #[pallet::call] is required to implement the functions that can be dispatched to the runtime for a pallet

## #[pallet::hooks]

The #[pallet::hooks] macro lets you declare optional hooks for specific logic during the block-making process. Using this macro, you can implement the Hooks trait to execute code at key points, such as when a block is initialized or finalized, or during runtime upgrades



Resources:
- [@official@FRAME](https://docs.substrate.io/reference/frame-pallets/)

