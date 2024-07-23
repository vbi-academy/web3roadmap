# How to program AVM 


The AVM runs programs written in bytecode.

These programs, called TEAL programs, have sets of operation codes (opcodes) that define how smart contracts and smart signatures work.

![image](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*O0y4ZFISn7ETsVOVoQxKFw.jpeg)

You need to know programming languages to write smart contracts: 

* Python - Algorand provides language bindings for Python to the AVM.  Developers write their code in Python and access AVM opcodes via a supplied library without having to write directly in Teal.  



* [Reach](https://docs.reach.sh/#reach-top) simplifies the creation of smart contracts and dApps by using a simplified version of JavaScript. It integrates smart contracts, front-end clients, back-end servers, and their communication into one language. The compiler ensures error-free, secure, and correctly connected components, and includes a tool for automatic application verification.

* [clarity](https://clarity-lang.org/) The Clarity language, supported by Algorand, the Stacks ecosystem, and Hiro PBC, is being integrated into a compiler for layer-1 smart contracts. Clarity emphasizes predictability and security, allowing comprehensive analysis of smart contracts and eliminating common bugs through type checking.