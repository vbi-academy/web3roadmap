# What the AVM actually does? 
The purpose of AVM is to approve or reject a transaction's effect on the blockchain based on the smart contract's rules.

AVM will use **Stack machine** to make the computation and approves the effects of a transaction. 

To approve the transaction's effects if and only if: 
- There is a single non-zero value on top of AVM's stack 

In the other words, The AVM will rejects transaction'effects if and only if: 
- There is a single zero value on top of AVM's stack 
- there are multiple values on the AVM's stack 
- There is no value on the AVM'stack 


Suppose we want the AVM check this statement: 
```
1 + 2 = 3
```

That one plus two is equal to 3. How the Algorand Vitural machine will check this?


It will tqake the first operation and put it on stack:
![image](https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/452380962_365185459947391_1905523452669603696_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=MqFqrftu9zIQ7kNvgGWJpHX&_nc_ht=scontent-sin6-4.xx&oh=00_AYBDUEBTVYv2AyRDGLfc7sdcsTFhkqrU-6vYghpONJyFag&oe=66A4E8FF)


![image](https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/452705775_365187696613834_2074209579833298612_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gvAHkv7-45oQ7kNvgFiO6QL&_nc_ht=scontent-sin6-4.xx&oh=00_AYAxTr3hYn3VfbIHhR0NnYvP88fiFjGoAvS5AlULIP71cw&oe=66A4FB81)


The result after compute is 3. The last is on top of the stack and verify it's true. At the end of the execution, there is non-single value on top of stack. This mean you can approve it 

# Resources

- [@official@AVM documentation](https://developer.algorand.org/docs/get-details/dapps/avm/teal/specification/)
- [@video@ Algorand Smart Contracts Week 1](https://youtu.be/fTAPLiPcj28?t=157)
