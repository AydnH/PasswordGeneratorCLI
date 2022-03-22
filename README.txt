Create an API in Javascript that generates secure passwords.
As input parameters the user must provide the minimum length, the number of special characters,
the number of numbers and the number of passwords that shall be created.
Then generate the passwords and return them in an array. Please also consider to add unit tests.


user input
    - user set parameters length minimum (set upper limit to 28) = number 
    - user set special characters = number
    - user set number of numbers = number
    - user set number of passwords = number
    - return passwords into array (eg 1: password, 2: password, 3: password)


TO USE 
options :
    - -l --length <number>', 'minimum length of password'
    - -ns --symbols <number>', 'number of symbols'
    - -n --numbers <number>', 'number of numbers'
    - -np --total <number>', 'number of passwords'
    - -s --save', 'save passwords to passwords.txt'

example use:
     node index --length=12 --symbols=3 --numbers=6 --total=1 --save