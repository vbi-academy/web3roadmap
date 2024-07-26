# Application Binary Interface




```python
from algopy import ARC4Contract

class HelloWorld(ARC4Contract):
    @abimethod()
    def hello(self, name: String) -> String:
        return "Hello, " + name
```



# Resources:
- [@article@ARC-4 github documentation](https://github.com/algorandfoundation/puya/blob/main/docs/lg-arc4.md)