# What is Move VM?
Move VM is developed by Libra, a blockchain platform by Facebook. The main difference from other existing virtual machines, like EVM, it's:

* Support of Move language - resource oriented-language developed for Move VM.

* Move VM is resource-oriented: developer can define a resource, place resource under an account and move resources between accounts. But resource can be never duplicated, reused or discarded.

* Bytecode verification. To be executable code must be verifiable

This document describes how Move VM works


All this makes Move VM much safer than other blockchains VMs. For example, the famous DAO hack just couldn't happen, because of the resource model and bytecode verification.

# Resources 
- [@official@Move VM Specification](https://github.com/move-language/move/blob/main/language/documentation/spec/vm.md)
