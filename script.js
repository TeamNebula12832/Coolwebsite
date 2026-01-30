// COMPLETE CURRICULUM - 6 Levels, 17 Steps
// Teaches concepts without giving away answers

const levels = [
    {
        title: "First Words",
        emoji: "👋",
        steps: [
            {
                mascot: "🐱",
                instruction: "Hi! I'm Syrius. Welcome to Python! Computers are very literal machines - they need specific instructions to do anything. In Python, we use functions, which are like action words. The print() function is how we make the computer display text on the screen. The parentheses () are important - they tell Python 'hey, I'm about to give you something to work with!' Inside those parentheses, we put quotes '' around text to tell Python 'this is a string (text data), not code commands'. This is called a string literal - literally, the exact text we want to show.",
                mission: "Type print('Hello World') to make the computer speak",
                hint: "Type exactly: print(Anything you'd like) - lowercase print, parentheses (), quotes around the text",
                starterCode: "# Type your first command below\n",
                validator: {
                    required: ["print(", "Hello World", ")"],
                    customCheck: (code) => {
                        if (!code.includes("print(")) return { pass: false, msg: "Use print() with parentheses" };
                        if (!code.includes("'") && !code.includes('"')) return { pass: false, msg: "Put quotes around your text!" };
                        return { pass: true };
                    }
                }
            },
            {
                mascot: "🐱",
                instruction: "Excellent! You just called your first function. Now let's understand what you did: print is the function name - it tells Python which action to perform. The () are the call operator - they tell Python to actually execute that action right now. The 'Hello World' inside is called an argument - it's the data we pass to the function. Arguments go inside the parentheses. The quotes define a string data type. You can replace the text between quotes with anything you want - your name, a message, anything! This is called string concatenation of values.",
                mission: "Change the code to print your own name instead of Hello World",
                hint: "Replace Hello World with your name inside the same quotes",
                starterCode: "# Change the message\n",
                validator: {
                    required: ["print("],
                    forbiddenCopy: ["Hello World"],
                    checkOutput: (out, code) => {
                        // Ensure they didn't just keep Hello World
                        return !out.includes("Hello World") && out.length > 0;
                    }
                }
            },
            {
                mascot: "🐱",
                instruction: "Now let's learn about data types! Python distinguishes between text (strings) and numbers (integers). When you put quotes around something, Python treats it as a string - even if it looks like a number. But if you write a number without quotes, Python recognizes it as an integer (whole number) or float (decimal number). This matters because numbers can do math, but number-strings can't! When you print a raw number like 2024, Python converts it to its text representation for display, but internally it knows it's a number. Try printing 2024 without any quotes.",
                mission: "Print the number 2024 (no quotes this time!)",
                hint: "Numbers don't need quotes! Just print(2024)",
                starterCode: "# Print a number\n",
                validator: {
                    required: ["print(", "2024", ")"],
                    forbidden: ["'", '"'],
                    checkOutput: (out) => out.includes("2024"),
                    message: "Don't use quotes around numbers!"
                }
            }
        ]
    },
    {
        title: "Variable",
        emoji: "📦",
        steps: [
            {
                mascot: "🐱",
                instruction: "Great work! Now let's talk about variables - one of the most important concepts in programming. A variable is like a labeled box in the computer's memory where you can store data. Think of it as a name tag for a value. We create variables using the assignment operator = (equals sign). This is NOT the same as math equals - it means 'take what's on the right side and store it in the name on the left side'. So 'age = 10' means 'create a box called age and put the number 10 inside it'. Later, when we say print(age) without quotes, Python looks inside the box called 'age' and uses whatever value is stored there. This is called variable reference or lookup.",
                mission: "Create variable 'age' = 10, then print(age) to see it. No quotes around age in print!",
                hint: "Line 1: age = 10\nLine 2: print(age)\nNotice no quotes around age in the print!",
                starterCode: "# Create your variable\n\n\n",
                validator: {
                    required: ["age", "=", "10", "print", "age"],
                    forbiddenCopy: ["Your Name"],
                    customCheck: (code) => {
                        if (code.includes("'age'") || code.includes('"age"')) {
                            return { pass: false, msg: "Don't put quotes around age in print() - that prints the word 'age', not the box contents!" };
                        }
                        if (code.includes("print(10)")) {
                            return { pass: false, msg: "Print the variable 'age', not the number 10 directly!" };
                        }
                        return { pass: true };
                    },
                    checkOutput: (out) => out.includes("10")
                }
            },
            {
                mascot: "🐱",
                instruction: "Perfect! You referenced a variable. Now let's store text in a variable. When you assign text to a variable, you still need quotes around the text value - the quotes tell Python where the text starts and ends. The variable name itself (pet) never has quotes - that would make it a string literal instead of a variable name! Once you store 'dog' in the variable pet, you can use pet as many times as you want, and Python will always substitute it with 'dog'. This is powerful because if you want to change the value later, you only change it in one place (the assignment), and every reference automatically updates!",
                mission: "pet = 'dog' (or cat/bird), then print(pet) two times on separate lines",
                hint: "pet = 'dog'\nprint(pet)\nprint(pet)",
                starterCode: "# Text variable\n\n\n\n",
                validator: {
                    required: ["=", "print", "print"],
                    checkOutput: (out) => {
                        const lines = out.trim().split('\n').filter(l => l.trim());
                        return lines.length >= 2 && lines[0] === lines[1];
                    }
                }
            },
            {
                mascot: "🐱",
                instruction: "Now for something cool - variables are mutable, meaning we can change their values after creation! This is called variable reassignment or updating. When you write 'score = 100', Python creates the variable. When you later write 'score = 50', Python finds the existing box labeled 'score', throws away the old value (100), and puts the new value (50) inside. The variable name stays the same, but the content changes. This is how programs keep track of changing state - like scores going up, health going down, or time passing. Notice how we can print the same variable name twice but get different outputs because the value changed between the print statements!",
                mission: "Show that variables can change values",
                hint: "score = 100\nprint(score)\nscore = 50\nprint(score)",
                starterCode: "# Changing values\n\n\n\n\n",
                validator: {
                    required: ["=", "=", "print", "print"],
                    customCheck: (code) => {
                        const lines = code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#'));
                        if (lines.length < 4) return { pass: false, msg: "Need 4 lines: set, print, set, print" };
                        return { pass: true };
                    },
                    checkOutput: (out) => out.includes("100") && out.includes("50")
                }
            }
        ]
    },
    {
        title: "Math Magic",
        emoji: "🔢",
        steps: [
            {
                mascot: "🐱",
                instruction: "Syrius here! Python is also a powerful calculator. When you write mathematical expressions inside print(), Python evaluates (calculates) the expression first, then passes the result to print. The basic operators are: + for addition, - for subtraction, * for multiplication (asterisk, not x!), and / for division. Python follows the standard order of operations (PEMDAS): Parentheses, Exponents, Multiplication/Division, Addition/Subtraction. When you write print(15 + 27), Python first calculates that 15 + 27 equals 42, then print displays 42. This is expression evaluation - converting complex expressions into single values!",
                mission: "Calculate and print 15 + 27",
                hint: "print(15 + 27) - spaces around + are nice but optional",
                starterCode: "# Calculate here\n",
                validator: {
                    required: ["print(", "+", ")"],
                    checkOutput: (out) => out.includes("42"),
                    customCheck: (code) => {
                        if (!code.includes("+")) return { pass: false, msg: "Use the + symbol!" };
                        return { pass: true };
                    }
                }
            },
            {
                mascot: "🐱",
                instruction: "Amazing! Now let's combine variables with math - this is where programming gets really useful. When Python sees 'apples + oranges', it doesn't just concatenate text (unless they're strings) - it looks up the current values of both variables, retrieves the numbers stored inside them, performs the addition operation, and returns the sum. This is called binary operation (two operands). You can store the result in a new variable (like total = apples + oranges) or print it directly. Using variables instead of raw numbers makes your code flexible - if you change apples to 10 later, the math automatically updates without you having to recalculate anything!",
                mission: "Add two variables together",
                hint: "apples = 5\noranges = 3\nprint(apples + oranges)",
                starterCode: "# Fruit calculator\n\n\n\n",
                validator: {
                    required: ["=", "=", "+", "print"],
                    checkOutput: (out) => out.includes("8"),
                    customCheck: (code) => {
                        if (code.includes("print(8)")) return { pass: false, msg: "Add the variables together, don't just print 8!" };
                        return { pass: true };
                    }
                }
            },
            {
                mascot: "🐱",
                instruction: "Multiplication time! The * operator (asterisk) multiplies values. Let's do something practical: calculating your age in months. There are 12 months in a year, so we multiply age by 12. When you write 'months = age * 12', Python follows this process: 1) Look up the value stored in 'age', 2) Multiply that number by 12, 3) Store the result in a new variable called 'months'. This demonstrates the power of variables - you can use them in expressions on the right side of equals signs, and Python substitutes the actual value at runtime (when the code runs). This makes calculations dynamic based on changing data!",
                mission: "Calculate months old using multiplication (*)",
                hint: "age = 10\nmonths = age * 12\nprint(months)",
                starterCode: "# Your age in months\n\n\n\n",
                validator: {
                    required: ["*", "print"],
                    checkOutput: (out) => {
                        const num = parseInt(out);
                        return num > 50 && num < 2000;
                    }
                }
            }
        ]
    },
    {
        title: "Ask & Answer",
        emoji: "❓",
        steps: [
            {
                mascot: "🐱",
                instruction: "Syrius here! Now for real interactivity! The input() function pauses your program and waits for the user to type something and press Enter. Whatever they type is returned as a string (text). The string inside the input() parentheses is called the 'prompt' - it's the message shown to tell the user what to type. When you write 'name = input('What is your name? ')', here's what happens: 1) Python displays the prompt, 2) Program waits for user input, 3) User types something and presses Enter, 4) That text becomes the return value, 5) The return value is stored in the variable 'name'. You can then use that variable just like any other string!",
                mission: "Ask for name using input(), then print 'Hi' plus that name",
                hint: "name = input('What is your name? ')\nprint('Hi', name)\nThe comma adds a space automatically!",
                starterCode: "# Interactive program\n\n\n",
                validator: {
                    required: ["input(", "print("],
                    customCheck: (code) => {
                        if (!code.includes("=")) return { pass: false, msg: "Save the input in a variable using =" };
                        if (code.includes("input()")) return { pass: false, msg: "Put a question inside input() like input('Name? ')" };
                        return { pass: true };
                    }
                }
            },
            {
                mascot: "🐱",
                instruction: "Critical concept alert! The input() function ALWAYS returns a string (text), even if the user types numbers like '10'. If you try to do math with this string, Python will crash with a TypeError because you can't add text to numbers! To fix this, we use type conversion functions. int() converts a string to an integer (whole number). When you nest functions like int(input('Age? ')), Python executes from the inside out: 1) input() runs and returns a string '10', 2) int() converts that string to the number 10, 3) That number is stored in the variable. Now you can do math with it! This is called explicit type casting or conversion.",
                mission: "Get age with input(), convert with int(), add 1, print result",
                hint: "age = int(input('Age? '))\nnext_year = age + 1\nprint(next_year)",
                starterCode: "# Birthday calculator\n\n\n\n",
                validator: {
                    required: ["int(", "input(", "+", "print"],
                    customCheck: (code) => {
                        if (code.includes("input(") && !code.includes("int(")) {
                            return { pass: false, msg: "Wrap input() with int() to make it a number: int(input('...'))" };
                        }
                        return { pass: true };
                    }
                }
            }
        ]
    },
    {
        title: "Smart Choices",
        emoji: "🚦",
        steps: [
            {
                mascot: "🐱",
                instruction: "Syrius here! Let's talk about control flow - making decisions in code. The 'if' statement is a conditional structure. It checks if a condition is True or False. If True, it runs the indented code block underneath. If False, it skips that block. The condition uses comparison operators: > (greater than), < (less than), == (equal to), != (not equal), >= (greater or equal), <= (less or equal). Notice the colon (:) at the end of the if line - this is mandatory and tells Python 'hey, a code block is coming next!' The indented lines below form a code block (suite). Python uses indentation (whitespace) to define blocks, unlike other languages that use braces {}. Standard indentation is 4 spaces or 1 tab. This is significant whitespace - it affects how the code runs!",
                mission: "Check if 10 > 5, if true print 'Yes!' (indented under if)",
                hint: "if 10 > 5:\n    print('Yes!')\nThe spaces before print are required!",
                starterCode: "# First if statement\n\n\n",
                validator: {
                    required: ["if", ":", "print"],
                    customCheck: (code) => {
                        if (!code.includes(":")) return { pass: false, msg: "Don't forget the colon (:) after if!" };
                        const lines = code.split('\n');
                        const ifLine = lines.findIndex(l => l.includes('if'));
                        const nextLine = lines[ifLine + 1];
                        if (!nextLine || (!nextLine.startsWith('    ') && !nextLine.startsWith('\t'))) {
                            return { pass: false, msg: "Indent the print line with 4 spaces or Tab!" };
                        }
                        return { pass: true };
                    }
                }
            },
            {
                mascot: "🐱",
                instruction: "Binary decisions! The 'else' clause catches everything when the 'if' condition is False. This creates a two-way branch: either the if-block runs, or the else-block runs, but never both. The else keyword lines up vertically with the if keyword (no indentation) to show they're at the same level. The colon after else is also required, followed by another indented block. This structure is called an if-else statement or conditional branching. It allows your program to choose between two different paths based on data. In our temperature example, we're categorizing data (hot vs cool) using a threshold value (30).",
                mission: "Check if temp > 30, print 'Hot', else print 'Cool'",
                hint: "temp = 25\nif temp > 30:\n    print('Hot')\nelse:\n    print('Cool')",
                starterCode: "# Temperature checker\n\n\n\n\n\n",
                validator: {
                    required: ["if", "else", ":", ":", "print", "print"],
                    checkOutput: (out) => out.toLowerCase().includes("hot") || out.toLowerCase().includes("cool")
                }
            },
            {
                mascot: "🐱",
                instruction: "Multiple choices with elif! 'elif' is short for 'else if' - it checks another condition if the first if was False. You can chain multiple elif statements between if and else. Python checks conditions from top to bottom: 1) Is the if condition True? If yes, run that block and skip the rest. 2) If not, check the first elif. If True, run that block and skip the rest. 3) Continue down the chain. 4) If nothing was True, run the else block. Notice we use == (double equals) for comparison, not = (single equals). Single equals is for assignment, double equals checks for equality. This entire structure is called an if-elif-else ladder or cascade.",
                mission: "Use if, elif, and else together with proper indentation",
                hint: "if score == 100:\n    print('Perfect')\nelif score > 50:\n    print('Pass')\nelse:\n    print('Fail')",
                starterCode: "# Grade checker\nscore = 75\n\n\n\n\n\n",
                validator: {
                    required: ["if", "elif", "else"],
                    customCheck: (code) => {
                        const colons = (code.match(/:/g) || []).length;
                        if (colons < 3) return { pass: false, msg: "Need 3 colons total (one for if, elif, and else)!" };
                        return { pass: true };
                    }
                }
            }
        ]
    },
    {
        title: "Repeat After Me",
        emoji: "🔁",
        steps: [
            {
                mascot: "🐱",
                instruction: "Loops! Loops allow us to repeat code without writing it multiple times. The 'for' loop iterates (goes through) a sequence. 'for i in range(3):' means 'run the indented block 3 times, with i being 0, then 1, then 2'. The range(3) creates a sequence [0, 1, 2]. The variable 'i' is called the iterator or loop variable - it takes on each value in the sequence one at a time. range(n) generates numbers from 0 up to (but not including) n. So range(3) gives 0, 1, 2. This is zero-indexed counting (common in programming). The colon after range() is mandatory, and the loop body must be indented just like if statements!",
                mission: "Use for loop to print 'Hello' 3 times",
                hint: "for i in range(3):\n    print('Hello')\nWatch the colon and indentation!",
                starterCode: "# My first loop\n\n\n",
                validator: {
                    required: ["for", "in", "range(", "print"],
                    customCheck: (code) => {
                        if (!code.includes(":")) return { pass: false, msg: "Colon after range()!" };
                        if (!code.includes("    ") && !code.includes("\t")) return { pass: false, msg: "Indent the print line!" };
                        return { pass: true };
                    },
                    checkOutput: (out) => {
                        const hellos = out.toLowerCase().match(/hello/g);
                        return hellos && hellos.length >= 3;
                    }
                }
            },
            {
                mascot: "🐱",
                instruction: "Using the loop variable! Instead of printing the same thing every time, we can print the variable 'i' to see it change. Remember, range(3) produces 0, 1, 2 by default. But what if we want to start at 1? Use range(start, stop)! range(1, 6) starts at 1 and stops BEFORE 6, giving us 1, 2, 3, 4, 5. This is called the half-open interval - it includes the start but excludes the stop. This is perfect for 'counting to 5' because it stops right before 6. You can use the loop variable in expressions too, like print(i * 2) to count by twos!",
                mission: "Print numbers 1 through 5 using range(1, 6)",
                hint: "range(1, 6) gives 1,2,3,4,5. It stops BEFORE the second number!",
                starterCode: "# Counting 1-5\n\n\n",
                validator: {
                    required: ["range(", "print"],
                    checkOutput: (out) => {
                        return out.includes("1") && out.includes("5") && !out.includes("6");
                    }
                }
            },
            {
                mascot: "🐱",
                instruction: "While loops! Unlike for loops that iterate over a sequence, while loops run based on a condition - 'while this condition is True, keep running'. This is called conditional iteration. You must initialize (create and set) a variable before the loop, check it in the condition, and update it inside the loop. If you forget to update the variable (x = x + 1), the condition never becomes False, creating an infinite loop that crashes the program! The pattern is: initialize, while condition:, do work, increment. This is perfect for when you don't know exactly how many times to repeat, but you know when to stop (like 'keep guessing until correct').",
                mission: "Count 1 to 5 using while loop",
                hint: "x = 1\nwhile x <= 5:\n    print(x)\n    x = x + 1",
                starterCode: "# While loop countdown\n\n\n\n\n\n",
                validator: {
                    required: ["while", "print"],
                    customCheck: (code) => {
                        // Check they update the variable
                        if ((!code.includes("+") && !code.includes("-")) || !code.includes("=")) {
                            return { pass: false, msg: "You need to change x inside the loop or it runs forever!" };
                        }
                        return { pass: true };
                    }
                }
            }
        ]
    }
];

// State management
let currentLevel = 0;
let currentStep = 0;
let completedLevels = [0];
let pyodide = null;
let isRunning = false;

async function initPyodide() {
    try {
        const loadingBar = document.getElementById('loading-bar');
        let progress = 0;
        const interval = setInterval(() => {
            progress += 2;
            if (progress > 90) progress = 90;
            loadingBar.style.width = progress + '%';
        }, 500);

        pyodide = await loadPyodide();
        
        clearInterval(interval);
        loadingBar.style.width = '100%';
        
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('app').style.display = 'block';
            initApp();
        }, 300);
    } catch (err) {
        document.querySelector('.loading-text').textContent = "Error loading! Please refresh.";
    }
}

function initApp() {
    loadStep(0, 0);
    updateProgress();
}

function loadStep(lvlIdx, stepIdx) {
    currentLevel = lvlIdx;
    currentStep = stepIdx;
    const step = levels[lvlIdx].steps[stepIdx];
    
    document.getElementById('mascotEmoji').textContent = step.mascot;
    document.getElementById('instructionText').textContent = step.instruction;
    document.getElementById('missionText').textContent = step.mission;
    document.getElementById('hintText').textContent = step.hint;
    document.getElementById('pythonCode').value = step.starterCode || "# Type your code here\n";
    document.getElementById('hintBox').style.display = 'none';
    document.getElementById('output').innerHTML = '<span style="color: #666;">Click "Run My Code" when ready!</span>';
    document.getElementById('nextBtn').disabled = true;
    
    // Update step counter
    let totalSteps = 0;
    let currentStepNum = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels[i].steps.length; j++) {
            totalSteps++;
            if (i < lvlIdx || (i === lvlIdx && j < stepIdx)) {
                currentStepNum++;
            }
        }
    }
    document.getElementById('stepTracker').textContent = `Step ${currentStepNum + 1} of ${totalSteps}`;
}

function showHint() {
    document.getElementById('hintBox').style.display = 'block';
}

function resetCode() {
    const step = levels[currentLevel].steps[currentStep];
    document.getElementById('pythonCode').value = step.starterCode || "# Type your code here\n";
    document.getElementById('output').innerHTML = '<span style="color: #666;">Code reset. Try again!</span>';
}

async function runCode() {
    if (isRunning || !pyodide) return;
    
    isRunning = true;
    const btn = document.getElementById('runBtn');
    const indicator = document.getElementById('runningIndicator');
    const outputEl = document.getElementById('output');
    const code = document.getElementById('pythonCode').value;
    const step = levels[currentLevel].steps[currentStep];
    
    btn.disabled = true;
    indicator.classList.add('active');
    outputEl.textContent = '';
    
    // Pre-process for input simulation
    let processedCode = code;
    let simulatedInput = false;
    if (code.includes('input(')) {
        processedCode = code.replace(/input\([^)]*\)/g, '"Alex"');
        outputEl.textContent = '(Simulated user input: "Alex")\n\n';
        simulatedInput = true;
    }
    
    try {
        pyodide.setStdout({ batched: (text) => {
            outputEl.textContent += text + '\n';
        }});
        
        pyodide.setStderr({ batched: (text) => {
            outputEl.textContent += text + '\n';
        }});
        
        await pyodide.runPythonAsync(processedCode);
        validateStep(step, code, outputEl.textContent, simulatedInput);
        
    } catch (err) {
        let msg = err.message;
        // Kid-friendly translations
        if (msg.includes("IndentationError")) {
            msg = "❌ Check your spaces! Python needs exactly 4 spaces (or Tab) for indentation.";
        } else if (msg.includes("SyntaxError") && msg.includes("EOF")) {
            msg = "❌ You forgot to close something! Missing ) or : or \" ?";
        } else if (msg.includes("SyntaxError")) {
            msg = "❌ Grammar mistake! Check for colons (:), quotes, and parentheses.";
        } else if (msg.includes("NameError")) {
            const match = msg.match(/name '(\w+)'/);
            const name = match ? match[1] : "that";
            msg = `❌ I don't know '${name}'. Did you spell it right? Or did you forget to create it?`;
        } else if (msg.includes("TypeError") && msg.includes("int")) {
            msg = "❌ You can't do math with text! Use int() to convert: int(input('...'))";
        } else if (msg.includes("RecursionError") || msg.includes("maximum recursion")) {
            msg = "❌ Infinite loop detected! Make sure you change your variable inside the while loop.";
        } else {
            msg = "❌ " + msg;
        }
        outputEl.innerHTML += '<span class="error-text">\n' + msg + '</span>';
    } finally {
        isRunning = false;
        btn.disabled = false;
        indicator.classList.remove('active');
    }
}

function validateStep(step, code, output, simulatedInput) {
    const val = step.validator;
    let passed = true;
    let messages = [];
    const outputClean = output.replace('(Simulated user input: "Alex")\n\n', '');
    
    // 1. Check required keywords exist
    if (val.required) {
        val.required.forEach(req => {
            if (!code.toLowerCase().includes(req.toLowerCase())) {
                passed = false;
                messages.push(`Missing: ${req}`);
            }
        });
    }
    
    // 2. Check they didn't just copy the example (forbiddenCopy)
    if (val.forbiddenCopy) {
        val.forbiddenCopy.forEach(forbidden => {
            if (code.includes(forbidden)) {
                passed = false;
                messages.push("Don't just copy the example - type it yourself with your own ideas!");
            }
        });
    }
    
    // 3. Check forbidden keywords (like quotes for numbers)
    if (val.forbidden) {
        val.forbidden.forEach(f => {
            if (code.includes(f)) {
                passed = false;
                messages.push(`Should not use: ${f} for this challenge`);
            }
        });
    }
    
    // 4. Custom validation logic
    if (val.customCheck) {
        const result = val.customCheck(code);
        if (!result.pass) {
            passed = false;
            messages.push(result.msg);
        }
    }
    
    // 5. Check output matches expected
    if (val.checkOutput) {
        const checkResult = val.checkOutput(outputClean, code);
        if (!checkResult) {
            passed = false;
            if (messages.length === 0) messages.push("Output doesn't look right yet!");
        }
    }
    
    // Show results
    if (passed) {
        document.getElementById('nextBtn').disabled = false;
        const outputEl = document.getElementById('output');
        outputEl.innerHTML += '\n<span class="success-text">✅ Perfect! You did it!</span>';
        
        // Check if level complete
        if (currentStep === levels[currentLevel].steps.length - 1) {
            if (!completedLevels.includes(currentLevel)) {
                completedLevels.push(currentLevel);
            }
            updateProgress();
            setTimeout(() => {
                document.getElementById('successMessage').textContent = `You completed ${levels[currentLevel].title}!`;
                document.getElementById('successModal').style.display = 'flex';
            }, 800);
        }
    } else {
        const outputEl = document.getElementById('output');
        outputEl.innerHTML += '\n<span class="error-text">⛔ ' + messages.join(' | ') + '</span>';
    }
}

function updateProgress() {
    let totalSteps = 0;
    let completed = 0;
    levels.forEach((level, lIdx) => {
        level.steps.forEach((_, sIdx) => {
            totalSteps++;
            if (lIdx < currentLevel || (lIdx === currentLevel && sIdx <= currentStep)) {
                completed++;
            }
        });
    });
    
    const pct = (completed / totalSteps) * 100;
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressText').textContent = `${completedLevels.length}/${levels.length}`;
}

function nextStep() {
    const level = levels[currentLevel];
    if (currentStep < level.steps.length - 1) {
        loadStep(currentLevel, currentStep + 1);
    } else {
        document.getElementById('successModal').style.display = 'flex';
    }
}

function closeSuccess() {
    document.getElementById('successModal').style.display = 'none';
    if (currentLevel < levels.length - 1) {
        loadStep(currentLevel + 1, 0);
        document.getElementById('learningArea').style.display = 'grid';
        document.getElementById('levelMap').style.display = 'none';
    } else {
        alert("🎉🎉🎉 YOU'RE A PYTHON MASTER! 🎉🎉🎉\n\nYou finished all 6 levels!");
    }
}

function toggleLevelMap() {
    const map = document.getElementById('levelMap');
    const learning = document.getElementById('learningArea');
    
    if (map.style.display === 'grid') {
        map.style.display = 'none';
        learning.style.display = 'grid';
    } else {
        renderLevelMap();
        map.style.display = 'grid';
        learning.style.display = 'none';
    }
}

function renderLevelMap() {
    const map = document.getElementById('levelMap');
    map.innerHTML = '';
    
    levels.forEach((level, idx) => {
        const node = document.createElement('div');
        node.className = 'level-node';
        
        if (completedLevels.includes(idx)) {
            node.classList.add('completed');
        } else if (idx === currentLevel) {
            node.classList.add('available');
        } else if (idx < currentLevel || (idx === currentLevel && currentStep === 0)) {
            node.classList.add('available');
        } else {
            node.classList.add('locked');
        }
        
        node.innerHTML = `
            <div class="level-icon">${level.emoji}</div>
            <div class="level-title">${level.title}</div>
            <div class="stars">${completedLevels.includes(idx) ? '★★★' : '☆☆☆'}</div>
        `;
        
        if (!node.classList.contains('locked')) {
            node.onclick = () => {
                currentLevel = idx;
                currentStep = 0;
                loadStep(idx, 0);
                document.getElementById('levelMap').style.display = 'none';
                document.getElementById('learningArea').style.display = 'grid';
            };
        }
        
        map.appendChild(node);
    });
}

// Start
window.addEventListener('load', initPyodide);