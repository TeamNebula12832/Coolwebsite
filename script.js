// COMPLETE CURRICULUM - 6 Levels, 17 Steps
// Concise technical instruction with Syrius

const levels = [
    {
        title: "First Words",
        emoji: "👋",
        steps: [
            {
                mascot: "🐱",
                instruction: "The print() function outputs text to the console. It takes arguments inside parentheses. String literals (text data) must be wrapped in quotes ('single' or \"double\"). Without quotes, Python interprets the content as code (variables or keywords).",
                mission: "Use print() to output the string 'Hello World'",
                hint: "Syntax: print('Hello World')",
                starterCode: "# Output a string\n",
                validator: {
                    required: ["print(", "Hello World", ")"],
                    customCheck: (code) => {
                        if (!code.includes("print(")) return { pass: false, msg: "Missing print() function call" };
                        if (!code.includes("'") && !code.includes('"')) return { pass: false, msg: "String requires quotation marks" };
                        return { pass: true };
                    }
                }
            },
            {
                mascot: "🐱",
                instruction: "String literals can contain any text between the quotes. Change the argument to output different text. The quotes define where the string starts and ends.",
                mission: "Modify the print argument to output your name",
                hint: "Replace the text between quotes with your name",
                starterCode: "# Modify the string\n",
                validator: {
                    required: ["print("],
                    forbiddenCopy: ["Hello World"],
                    checkOutput: (out, code) => {
                        return !out.includes("Hello World") && out.length > 0;
                    }
                }
            },
            {
                mascot: "🐱",
                instruction: "Integers are whole numbers. Unlike strings, they do not use quotes. Python distinguishes between numeric types and string types. print() converts the integer to its string representation for output.",
                mission: "Print the integer 2024 without quotes",
                hint: "Numeric syntax: print(2024)",
                starterCode: "# Output an integer\n",
                validator: {
                    required: ["print(", "2024", ")"],
                    forbidden: ["'", '"'],
                    checkOutput: (out) => out.includes("2024"),
                    message: "Remove quotation marks for numeric literals"
                }
            }
        ]
    },
    {
        title: "Variables",
        emoji: "📦",
        steps: [
            {
                mascot: "🐱",
                instruction: "Variables store data using the assignment operator (=). The format is: name = value. To reference the stored value, use the variable name without quotes. Quoting the name creates a string literal instead of accessing the variable.",
                mission: "Assign 10 to variable 'age', then print the variable",
                hint: "age = 10\nprint(age)",
                starterCode: "# Variable assignment\n\n\n",
                validator: {
                    required: ["age", "=", "10", "print", "age"],
                    forbiddenCopy: ["Your Name"],
                    customCheck: (code) => {
                        if (code.includes("'age'") || code.includes('"age"')) {
                            return { pass: false, msg: "Remove quotes from age in print() to reference the variable" };
                        }
                        if (code.includes("print(10)")) {
                            return { pass: false, msg: "Print the variable, not the literal value" };
                        }
                        return { pass: true };
                    },
                    checkOutput: (out) => out.includes("10")
                }
            },
            {
                mascot: "🐱",
                instruction: "Variables can store strings by assigning a quoted string value. The variable name is unquoted; only the value has quotes. Once assigned, the variable can be referenced multiple times.",
                mission: "Assign 'dog' to 'pet', then print pet twice",
                hint: "pet = 'dog'\nprint(pet)\nprint(pet)",
                starterCode: "# String variable\n\n\n\n",
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
                instruction: "Variables can be reassigned to new values. The latest assignment overwrites the previous value. References to the variable return the current value at that point in execution.",
                mission: "Set score to 100, print it, change score to 50, print again",
                hint: "score = 100\nprint(score)\nscore = 50\nprint(score)",
                starterCode: "# Variable reassignment\n\n\n\n\n",
                validator: {
                    required: ["=", "=", "print", "print"],
                    customCheck: (code) => {
                        const lines = code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#'));
                        if (lines.length < 4) return { pass: false, msg: "Required: assign, print, reassign, print" };
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
                instruction: "Python supports arithmetic operators: + (addition), - (subtraction), * (multiplication), / (division). Expressions inside parentheses are evaluated before being passed to functions.",
                mission: "Calculate and print 15 + 27",
                hint: "print(15 + 27)",
                starterCode: "# Arithmetic\n",
                validator: {
                    required: ["print(", "+", ")"],
                    checkOutput: (out) => out.includes("42"),
                    customCheck: (code) => {
                        if (!code.includes("+")) return { pass: false, msg: "Use the + operator" };
                        return { pass: true };
                    }
                }
            },
            {
                mascot: "🐱",
                instruction: "Variables can be used in arithmetic expressions. Python substitutes the variable's value before applying the operator. The result can be printed directly.",
                mission: "Add variables apples and oranges, then print the sum",
                hint: "apples = 5\noranges = 3\nprint(apples + oranges)",
                starterCode: "# Variable arithmetic\n\n\n\n",
                validator: {
                    required: ["=", "=", "+", "print"],
                    checkOutput: (out) => out.includes("8"),
                    customCheck: (code) => {
                        if (code.includes("print(8)")) return { pass: false, msg: "Use variables in the expression, not the result literal" };
                        return { pass: true };
                    }
                }
            },
            {
                mascot: "🐱",
                instruction: "Multiplication uses the * operator. Store a value, calculate a derived value using multiplication, then output the result.",
                mission: "Calculate age in months (age * 12) and print it",
                hint: "age = 10\nmonths = age * 12\nprint(months)",
                starterCode: "# Multiplication\n\n\n\n",
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
                instruction: "input() reads user input from the console and returns it as a string. It accepts an optional prompt string argument. The return value must be assigned to a variable to be used later.",
                mission: "Get user input for name, then print a greeting with that name",
                hint: "name = input('What is your name? ')\nprint('Hi', name)",
                starterCode: "# User input\n\n\n",
                validator: {
                    required: ["input(", "print("],
                    customCheck: (code) => {
                        if (!code.includes("=")) return { pass: false, msg: "Assign the input() return value to a variable" };
                        if (code.includes("input()")) return { pass: false, msg: "Add a prompt string argument to input()" };
                        return { pass: true };
                    }
                }
            },
            {
                mascot: "🐱",
                instruction: "input() returns strings. To perform math, convert the string to an integer using int(). Nest the functions: int(input(...)). This parses the string and returns a numeric type.",
                mission: "Convert input to int, add 1, print the result",
                hint: "age = int(input('Age? '))\nnext_year = age + 1\nprint(next_year)",
                starterCode: "# Type conversion\n\n\n\n",
                validator: {
                    required: ["int(", "input(", "+", "print"],
                    customCheck: (code) => {
                        if (code.includes("input(") && !code.includes("int(")) {
                            return { pass: false, msg: "Wrap input() with int() for numeric conversion" };
                        }
                        return { pass: true };
                    }
                }
            }
        ]
    },
    {
        title: "Control Flow",
        emoji: "🚦",
        steps: [
            {
                mascot: "🐱",
                instruction: "if statements execute code conditionally. Syntax: if condition: followed by an indented block. The condition evaluates to True or False. The colon is required. Indentation (typically 4 spaces) defines the code block.",
                mission: "Print 'Yes!' if 10 > 5 is True",
                hint: "if 10 > 5:\n    print('Yes!')",
                starterCode: "# Conditional\n\n\n",
                validator: {
                    required: ["if", ":", "print"],
                    customCheck: (code) => {
                        if (!code.includes(":")) return { pass: false, msg: "Add a colon after the condition" };
                        const lines = code.split('\n');
                        const ifLine = lines.findIndex(l => l.includes('if'));
                        const nextLine = lines[ifLine + 1];
                        if (!nextLine || (!nextLine.startsWith('    ') && !nextLine.startsWith('\t'))) {
                            return { pass: false, msg: "Indent the print statement" };
                        }
                        return { pass: true };
                    }
                }
            },
            {
                mascot: "🐱",
                instruction: "else provides an alternative block when the if condition is False. It aligns with the if (no indentation) and requires its own colon and indented block.",
                mission: "Check if temp > 30: print 'Hot' if True, else print 'Cool'",
                hint: "temp = 25\nif temp > 30:\n    print('Hot')\nelse:\n    print('Cool')",
                starterCode: "# If-else\n\n\n\n\n\n",
                validator: {
                    required: ["if", "else", ":", ":", "print", "print"],
                    checkOutput: (out) => out.toLowerCase().includes("hot") || out.toLowerCase().includes("cool")
                }
            },
            {
                mascot: "🐱",
                instruction: "elif (else if) checks additional conditions between if and else. Python evaluates top-down and executes the first True block only. Use == for equality comparison (not =).",
                mission: "Classify score: 100 (perfect), >50 (pass), else (fail)",
                hint: "if score == 100:\n    print('Perfect')\nelif score > 50:\n    print('Pass')\nelse:\n    print('Fail')",
                starterCode: "# If-elif-else\nscore = 75\n\n\n\n\n\n",
                validator: {
                    required: ["if", "elif", "else"],
                    customCheck: (code) => {
                        const colons = (code.match(/:/g) || []).length;
                        if (colons < 3) return { pass: false, msg: "Each clause needs a colon" };
                        return { pass: true };
                    }
                }
            }
        ]
    },
    {
        title: "Iteration",
        emoji: "🔁",
        steps: [
            {
                mascot: "🐱",
                instruction: "for loops iterate over sequences. 'for i in range(n):' repeats n times with i taking values 0 to n-1. range(3) generates [0, 1, 2]. Requires colon and indented block.",
                mission: "Print 'Hello' 3 times using a for loop",
                hint: "for i in range(3):\n    print('Hello')",
                starterCode: "# For loop\n\n\n",
                validator: {
                    required: ["for", "in", "range(", "print"],
                    customCheck: (code) => {
                        if (!code.includes(":")) return { pass: false, msg: "Add a colon after range()" };
                        if (!code.includes("    ") && !code.includes("\t")) return { pass: false, msg: "Indent the loop body" };
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
                instruction: "Use the loop variable in the body. range(start, stop) generates from start (inclusive) to stop (exclusive). range(1, 6) gives 1, 2, 3, 4, 5.",
                mission: "Print numbers 1 through 5 using range(1, 6)",
                hint: "range(1, 6) stops before the second number",
                starterCode: "# Range with start\n\n\n",
                validator: {
                    required: ["range(", "print"],
                    checkOutput: (out) => {
                        return out.includes("1") && out.includes("5") && !out.includes("6");
                    }
                }
            },
            {
                mascot: "🐱",
                instruction: "while loops execute while a condition remains True. You must initialize the variable, test it in the condition, and modify it inside the loop to ensure termination.",
                mission: "Count 1 to 5 using a while loop",
                hint: "x = 1\nwhile x <= 5:\n    print(x)\n    x = x + 1",
                starterCode: "# While loop\n\n\n\n\n\n",
                validator: {
                    required: ["while", "print"],
                    customCheck: (code) => {
                        if ((!code.includes("+") && !code.includes("-")) || !code.includes("=")) {
                            return { pass: false, msg: "Modify the loop variable inside the body to prevent infinite loops" };
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
        // Concise error messages
        if (msg.includes("IndentationError")) {
            msg = "❌ IndentationError: Check indentation (4 spaces)";
        } else if (msg.includes("SyntaxError") && msg.includes("EOF")) {
            msg = "❌ SyntaxError: Unclosed bracket or quote";
        } else if (msg.includes("SyntaxError")) {
            msg = "❌ SyntaxError: Check colons and syntax";
        } else if (msg.includes("NameError")) {
            const match = msg.match(/name '(\w+)'/);
            const name = match ? match[1] : "that";
            msg = `❌ NameError: '${name}' undefined`;
        } else if (msg.includes("TypeError") && msg.includes("int")) {
            msg = "❌ TypeError: Convert with int() first";
        } else if (msg.includes("RecursionError") || msg.includes("maximum recursion")) {
            msg = "❌ Infinite loop: update your variable";
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
                messages.push("Use your own values");
            }
        });
    }
    
    // 3. Check forbidden keywords (like quotes for numbers)
    if (val.forbidden) {
        val.forbidden.forEach(f => {
            if (code.includes(f)) {
                passed = false;
                messages.push(`Remove: ${f}`);
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
            if (messages.length === 0) messages.push("Check output");
        }
    }
    
    // Show results
    if (passed) {
        document.getElementById('nextBtn').disabled = false;
        const outputEl = document.getElementById('output');
        outputEl.innerHTML += '\n<span class="success-text">✅ Correct</span>';
        
        // Check if level complete
        if (currentStep === levels[currentLevel].steps.length - 1) {
            if (!completedLevels.includes(currentLevel)) {
                completedLevels.push(currentLevel);
            }
            updateProgress();
            setTimeout(() => {
                document.getElementById('successMessage').textContent = `${levels[currentLevel].title} Complete`;
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
        alert("Course Complete");
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