# odin-calculator
1. When a user presses an integer button - need to make sure user can press like 4 5 7 and get 457 stores in a variable
2. The value of the button gets stored in a variable num 1
3. When a user presses an operator button 
4. The value gets stores in operator variable
5. Then pressing another integer
6. The value gets stored in variable num 2
7. When the user presses equals button
8. The function using all three variables executes and prints the result


1. when a user presses operator button, the current string value gets stored in num1, and the string is emptied
2. when a user presses digits again, the string gets filled again 
3. and we capture the value for num2 - 



1. typing 10 (num1 = undefined, num2 = 10, result = undefined, res1 = undefined)
2. typing + (num1 = "10", num2 = "10", result = undefined, res1 = undefined)
3. typing 5 (num1 = "10", num2 = "5", result = undefined, res1 = undefined)
4. typing = (num1 = "10", num2 = "5", result = 15, res1 = undefined)
5. typing + again (num1 = 15, num2 = "5", result = 15, res1 = 15) (the screen shows calculation 15 + and 5 in the currentNum - should show 15 - now showing num2, should show num1) fixed


solve the problem if a user enters one number and then presses operator
- now it takes the number as num1 and num2 and makes an operation.
- how it should behave: if there's only num1, it should not run operate function, but instead it should just change the chosen operator to a new one