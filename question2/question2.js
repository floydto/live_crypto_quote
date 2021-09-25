// Question 2
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

function isBracketValid(expression) {
    //create a stack to store different scenarios
    const stack = [],
        //create a map to define different types of brackets
        map = {
            "(": ")",
            "{": "}",
            "[": "]"
        };
    //use for loop to iterate all of the expressions
    for (const x of expression) {
        //use for in loop to iterate all of the strings in map
        if (x in map) {
            // push bracket into the stack
            stack.push(x);
            continue;
        };
        //set 3 conditions to return false:
        //If the stack isn't empty after iteration, return false
        //If there is no matched string or bracket inside the stack, return false
        //If the stack is already empty during iteration and the right bracket can't find the left bracket, return false
        if (map[stack.pop()] !== x) return false;
    }
    //If the iteration is finished, then the stack is empty, it should return true
    return !stack.length;
}

const example1 = isBracketValid("()]{}");
const example2 = isBracketValid("([)");
const example3 = isBracketValid("{[]}");

console.log(example1, example2, example3);