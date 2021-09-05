class Calculator{
    constructor() {
        /* The click events */

        // Add click event to numbers
        for (let i = 0, l = this.nums.length; i < l; i++) {
            this.nums[i].onclick = this.setNum;
        }

        // Add click event to operators
        for (let i = 0, l = this.ops.length; i < l; i++) {
            this.ops[i].onclick = this.moveNum;
        }

        // Add click event to equal sign
        this.equals.onclick = this.displayNum;

        // Add click event to clear button
        Calculator.el("#clear").onclick = this.clearAll;

        // Add click event to reset button
        Calculator.el("#reset").onclick = function() {
            window.location = window.location;
        };
    }

    viewer = Calculator.el("#viewer"); // Calculator screen where result is displayed
    equals = Calculator.el("#equals"); // Equal button
    nums = Calculator.el(".num"); // List of numbers
    ops = Calculator.el(".ops"); // List of operators
    theNum = ""; // Current number
    oldNum = ""; // First number
    resultNum; // Result
    operator; // Batman

    setNum() {
        if (Calculator.resultNum) { // If a result was displayed, reset number
            Calculator.theNum = this.getAttribute("data-num");
            Calculator.resultNum = "";
        } else { // Otherwise, add digit to previous number (this is a string!)
            if (Calculator.theNum){
                Calculator.theNum += this.getAttribute("data-num");
            }else{
                Calculator.theNum = this.getAttribute("data-num");
            }

        }

        viewer.innerHTML = Calculator.theNum; // Display current number

    };
// When: Operator is clicked. Pass number to oldNum and save operator
    moveNum () {
        Calculator.oldNum = Calculator.theNum;
        Calculator.theNum = "";
        Calculator.operator = this.getAttribute("data-ops");

        equals.setAttribute("data-result", ""); // Reset result in attr
    };

    // Shortcut to get elements
    static el (element) {
        if (element.charAt(0) === "#") { // If passed an ID...
            return document.querySelector(element); // ... returns single element
        }

        return document.querySelectorAll(element); // Otherwise, returns a nodelist
    };

// When: Equals is clicked. Calculate result
    displayNum () {

        // Convert string input to numbers
        Calculator.oldNum = parseFloat(Calculator.oldNum);
        Calculator.theNum = parseFloat(Calculator.theNum);

        // Perform operation
        switch (Calculator.operator) {
            case "plus":
                Calculator.resultNum = Calculator.oldNum + Calculator.theNum;
                break;

            case "minus":
                Calculator.resultNum = Calculator.oldNum - Calculator.theNum;
                break;

            case "times":
                Calculator.resultNum = Calculator.oldNum * Calculator.theNum;
                break;

            case "divided by":
                Calculator.resultNum = Calculator.oldNum / Calculator.theNum;
                break;

            // If equal is pressed without an operator, keep number and continue
            default:
                Calculator.resultNum = Calculator.theNum;
        }

        // If NaN or Infinity returned
        if (!isFinite(Calculator.resultNum)) {
            if (isNaN(Calculator.resultNum)) { // If result is not a number; set off by, eg, double-clicking operators
                Calculator.resultNum = "You broke it!";
            } else { // If result is infinity, set off by dividing by zero
                Calculator.resultNum = "Look at what you've done";
                Calculator.el('#calculator').classList.add("broken"); // Break calculator
                Calculator.el('#reset').classList.add("show"); // And show reset button
            }
        }

        // Display result, finally!
        viewer.innerHTML = Calculator.resultNum;
        equals.setAttribute("data-result", Calculator.resultNum);

        // Now reset oldNum & keep result
        Calculator.oldNum = 0;
        Calculator.theNum = Calculator.resultNum;

    };

    // When: Clear button is pressed. Clear everything
    clearAll () {
        Calculator.oldNum = "";
        Calculator.theNum = "";
        viewer.innerHTML = "0";
        equals.setAttribute("data-result", Calculator.resultNum);
    };

}
const calc = new Calculator();