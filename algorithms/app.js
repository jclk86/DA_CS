
// Learned new protocol for learning a difficult concept.
// - Write it down.How you understand it. 
// - Pretend to explain it to someone.  
// - Visualize the code. 

// In the first few weeks, everything still feels like a bag of tricks.It absolutely sucks and 
// the only way to break through this is to power through that and just keep learning.
// Do not be discouraged by the fact that you weren’t able to come up with tricks for 
// nearly all the algorithms you’ve tried.I guarantee you will run into an algorithm or
// problem down the line that rings a bell in your head, and once you feel that, things start to 
// snowball as you kind of get an intuition for approaches to a problem.

// Momentum is important.I found that I was more inclined to work on Leetcode if I 
// had gotten a problem right.Starting your day off on a hard is shitty, especially if you get 
// stuck and just procrastinate and don’t want to look at the solution.I usually ramped up, if I 
// was doing three questions a day it would be easy - medium - hard.Don’t waste your time on a 
// hard one if you’re stuck past 45 minutes.Do your best to come up with a brute force solution, 
// do not give up on it(this is a good attitude to have in your real interviews too) and implement 
// if you can.Then read the solution and reimplement it.



// Big O Notation 
    // Choosing best solution to algorithm
        // Problem: Write a function that accepts a string input and returns a reversed copy

        // Which solution is better? What does "better" even mean?
            // Better means faster and less memory
                // use a method that is a timing a function to test

//Solution 1 

    function addUpTo(n) {
        let total = 0;
            for (let i = 1; i <= n; i++) {
                total += i;
            }
        return total; 
    }         
    console.log(addUpTo(6));

//Solution 2 - Faster. 

    function addUpTo(n) {
        return (n * (n + 1)) / 2;
    }

    console.log(addUpTo(6));

// Run below completely with each. Time varies code above. 

            // WHICH CODE IS BETTER? (TESTS) 

// TIME TEST 

    let t1 = performance.now();
    addUpTo(1000000000);
    let t2 = performance.now();
    console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
        
// ISSUE w/ above and doing time test. Time tests are not accurate for all machines.
// The margins in time could change. But 1 will always still be faster than the other, and it will be the same one. 
// Just the difference between the two times can change. 
// Fast algorithms might be so fast that timing function can't see smallest interval of time. 


// COUNTING OPERATIONS TEST - count the number of simple operations 
                    // computer has to perform
    
     function addUpTo(n) {
       return (n * (n + 1)) / 2;
     }

     // this solution only has 3 operations, regardless of the value of n

      function addUpTo(n) {
        let total = 0;
        for (let i = 1; i <= n; i++) {
          total += i;
        }
        return total;
      }
      // The amount of operations on a for loop is tricky. The operations it performs is 
      // based on the amount of times it has to perform an operation.
      // This means if n is 1000, it performs 1000 operations, and that's not counting all
      // the operations inside of the for-loop statement and outside of the for loop that's within the function.
      // = is an operation.  


// VISUALIZING TIME COMPLEXITIES

      // For solution 1 with for-loop, the time increases as n increases.
      // For solution 2, time is very consistent and is nearly constant. So solution 2 is better.

// What is Big O Notation? A way of analyzing performance of an algorithm
                        // O(1) - as n grows, it does not reflect on runtime
                        // O(n) - number of operations is eventually bounded by a multiple of n (say, 10n).      
// Formalized fuzzy counting. 
      // It allows us to talk formally about how the runtime of an algorithm
      // grows as the inputs grow. ex: Think about solution 1 with for-loop. 
      // We say that an algorithm is O(f(n)) if the number of simple operations 
      // the computer has to do is eventually less than a constant times f(n), as n increases.
     
      // Relationship between input and runtime

        // f(n) - function with input of n. 

            // f(n) could be linear (f(n)=n)
            // f(n) could be quadratic (f(n)=n**2)
            // f(n) could be constant (f(n)=1)
            // f(n) could be something entirely different. 

// O(n**2). Number of operations bound to n. Since 2 for loops-1 nested- so runtime grows by power of 2. 
    function printAllPairs(n) {
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                console.log(i,j);
            }
        }
    }

// Simplifying Big O Expressions - O is operations n is input
    // Rules to follow when determining best solution. 
        // These rules of thumb are consequences of the definition of big O notation
            // O(number of operations) 
                // O(1) - Fastest. CONSTANT runtime. means no matter the input, operation is always 1. 
                    // This code represents the constant for all. so
                    // O(500) means the same in essence as O(1)

            // O(n) - Second fastest. Number of operations is bounded to the input n. So
                // O(2n) means the same as O(n). O(n + 10) is still O(n). Any n. 

            // O(n^2) - Slowest. highest runtimes. Too big to matter. It is following the quadratic formula. This can represent anything that grows 
                // so large, that on a graph that shows its runtime, it's barely discernible.
                // O(n^2 + o^3) is O(n^3). I suppose it's large enough that it matters?

            // When it's all so small, it doesn't matter either, justl ike O(n**2)

// Big O Shorthands knowledge- How we are analyzing problems with Big O. 
    // 1. Arithmetic operations are constant. Takes the same amount of time to run 2 + 2 as 1000000 + 2.
    // 2. Variable assignment is constant. 
    // 3. Accessing elements in an array (by index) or by object (by key) is constant
    // 4. In a loop, the complexity is the length if the loop times the complexity of 
            // whatever happens inside of the loop. 

    // 5. Which Big O Expression does this follow? 
        function logAtLeast5 (n) {
            for (var i = 1; i <= Math.max(5, n); i++) {
                console.log(i);
            }
        }
        // O(n), as n grows, the number of operations grow. 

    // 6. Which Big O Expression does this follow? Won't log anything larger than 5.
        function logAtMost5(n) {
          for (var i = 1; i <= Math.min(5, n); i++) {
            console.log(i);
          }
        }
        // O(1), as n grows, the big O is constant. Because it can't move beyond 5.
        // So, when we discussed smaller differences, we said they don't matter.
        // The above does indeed change number of operations if it's under 5. 
        // But that difference is too small to matter. 

//SPACE COMPLEXITY 
    // How much additional memory do we need to allocate in order 
    // to run this code in our algorithm? 

    // What about the inputs? 
        // Auxiliary space complexity refers to space required by 
        // the algorithm, NOT including space taken up by inputs. 
        // Unless otherwise noted, when we talk about space complexity, 
        // technically we'll be talking about auxiliary space complexity.

    // Rules of Thumb: Space Complexity in JS

        // Most primitives (booleans, numbers, undefined, null) are constant space.
        // So it doesn't matter what the size of the input is. If number is 1 or 1000, it takes up same 
        // amount of space.
        
        // Strings require O(n) space (where n is the string length). Think looping. 

        // Reference types are generally O(n), where n is the length (for arrays) or the number of 
        // keys (for objects). 

        // Ex: O(1) space. 
            function sum(arr) {
                let total = 0;
                for (let i = 0; i < arr.length; i++) {
                    total += arr[i];
                }
                return total;       
            }
            // See how the above only has 2 variables. Nothing is going to affect the space. 
            // Because it's 2 variables no matter what. 
            // This is why this is O(1)

        // Ex: O(n) space. 
            function double(arr) {
                let newArr = [];
                for (let i = 0; i < arr.length; i++) {
                    newArr.push(2 * arr[i]);
                }
                return newArr;
            }
            // Making new array. The newArr.push(2*arr[i]) gets longer
            // and longer directly in proportion to n or length of input n. 


// LOGARITHMS - ***The inverse (opposite/reverse) of exponentiation 
                // Less common expressions than O(1), O(n), O(n^2). Maybe
                // more complicated. 
    // O(log n) - fast.  Just know this is second best under O(1).
    // _ = base 
    // log base 2 = log_2

    // log_2(8) = 3; // 2 raised to what gives you 8? 3. 2^3 = 8. 

    // log === log_2. We only care about trend. Not details. 
    // The logarithm of a number roughly measures the number of times you can divide
    // that number by 2 before you get a value that's less than or equal to one.
    
    //Ex: 8/2 = 4. 4/2 = 2. 2/2 = 1. 3 times you divided to get to 1. 
                    // So log(8) = 3. 
    
    // Ex: log(25) =
            // 25 / 2 = 12.5. 12.5 / 2 = 6.25. 6.25 / 2/ 3.125. 3.125/2 = 1.5625
                    // 1.5625 / 2 = .78125. 
                    //log(25) = 4.64. 4.64 is amount of times to get below 1. 

// What uses O(log n)? 
// Searching algorithms do have logarithmic time complexity. ***
// Efficient sorting algorithms involve logarithms. ***
// Recursion sometimes involves logarithmic space complexity. ***
    
// BUILT-IN DATA STRUCTURES (through the lens of Big O)
    // How objects and arrays work through Big O. 
    // Explain why adding elements to the beginning of an array is costly
    // Compare and contrast the the runtime for arrays and objects, as well as 
            // built-in methods

    //Big O of Objects******************************************************************************************************************************
        // Work well when you don't need any order******
        // When you need fast access / insertion and removal*****
            // Insertion - O(1)
            // Removal - O(1)
            // Searching - O(N) - iterating processes. 
            // Access - O(1)

            // Object.keys - O(N) - iterating. So if # of items grows, the runtime grows
            // Object.values - O(N) - iterating
            // Object.entries - O(N) - iterating
            // hasOwnProperty - O(1) - This is constant time. This accesses information to check fi a key exists.
                                        // no iteration. Similar to dot notation. 

    //Big O of Arrays 
        // Ordered lists
        // Only use when you need order. Arrays slower than objects. 
        
        // Insertion - O(1) or O(N). 
                // inserting at end of array is fine. It's constant time. 
                // inserting at the beginning of an array messes up the indices
                    // so everything has to be **re-indexed**. Same goes for adding in middle. It's slower. 
                    // Unless it is meaningful, avoid adding beginning of array.
                    // push() and pop() faster than shift() and unshift(), unless 
                    // it is an empty array. 
        // Removal - O(1) or O(N). Same as above. 

        // Searching - O(N) - iterator needed. 

        // Access - O(1) - Common confusion. If you have an array of 1000, and you ask for 900 index position, 
                        // it doesn't iterate through entire array to return 900. 

        // You do not need to remember all of this, but here anyways:

            // push() & pop() = O(1)

            // shift(), unshift(), concat(), slice()  = O(n) (with concat(), it grows w/ # of arrays)
            // splice(), forEach(), map(),filter(), reduce() = O(n) - linear

            // sort() = O(N * log N) - Will address later in course. Larger than O(n). More complicated. 
            
        //*************************************************************************************************************************************************


            //////////INTRO TO PROBLEM SOLVING PATTERNS//////////

            // Steps you can take to make a problem solvable. 
            // Define what an algorithm is
            // Devise a plan to solve algorithms 
            // Compare and contrast problem solving
                // patterns including frequency counters, two pointer
                // problems and divide and conquer. 

            // Algorithm - A process or set of steps to accomplish a certain task

            // Applies to majority of programming and interviews. 

            // How do you improve? It is not inherent. 

                // 1. Devise a plan for solving problems. 
                // 2. Master common problem solving patterns. Problems 
                    // in parts can be broken down and categorized. 

            // What to do? 
                // Understand the problem
                // Explore concrete examples
                // Break it down 
                // Solve/simplify the problem
                // Look back and Refactor 

// UNDERSTAND THE PROBLEM 
    // Questions you should ask yourself first. Or the interviewer.  
            // 1. Can I restate the problem in my own words? 
            // 2. What are the inputs that go into the problem? 
            // 3. What are the outputs that should come from the 
                    // solution to the problem? 
            // 4. Can the outputs be determined from the inputs? In other
                    // words, do I have enough information to solve the 
                    // problem? (You may not be able to answer this question
                    // until you set about solving the problem. That's okay.
                    // It's still worth considering the question at this early
                    // stage. )
            // 5. How should I label the important pieces of data that are 
                    // a part of the problem? 

            //Ex: Write a function which takes 2 numbers and returns their sum
                // See questions above and answer accordingly below:     
                // 1. Implement addition.
                // 2. What type of numbers? Whole numbers? Decimals? How big are the numbers (too big and JS outputs infinity)?
                        // Is it only 2 inputs? What happens if less than 2 inputs? Or adds too many? 
                
                // 3. Output. Is it integer? Float? Do you want a float back after integer? 
                // 4. Can the output be determined from the inputs? Do we have enough info
                        // to do the problem? In most cases, yes. But what if someone only passes in
                        // 1 number. Return 0? Null? Ask interviewer. 
                // 5. What matters and how do you label them? 
                    // add, sum, num1 and num2. Those are the names you are thinking about. 
                                    function add(a,b) {
                                        return a + b;
                                    }
// EXPLORE CONCRETE EXAMPLES // 
             // Ex: 
                // Coming up with examples can help you understand the problem better
                // Examples also provide sanity checks that your eventual solution
                    // works how it should
                    // user stories. Given input, what is output? 
                    // Unit tests for smaller features
                    
                    // 1. Start with simple examples.
                    // 2. Progress to more complex examples. 
                    // 3. Explore examples with empty inputs. 
                    // 4. Explore examples with invalid inputs. 

            //Ex: Interviewer asks, Write a function which takes in a string and returns counts 
                // of each character in the string. 
                
                //1.  Restate: Can count how many times a letter appears in a string. 

                //2.  Create simple examples: 
                charCount('aaa'); // {a: 3}. Now you know you need to return an object. ' - This is an important step. If you know the expectations
                charCount('Hello'); // {h:1, e:1, l:2, o:1}                                 you might be able to break down the entirety of the problem. Then you can 
                                                                                            // implement common patterns. 

                // Output: Should it only include letters there, or also letters not there? 
                                    // if {a: 3, b: 0, c: 0....}, it might make our code easier as we go. 
                                    // We don't have to keep adding in letters. It only needs to be incremented. 
                
                // 3. Create Complex Example: Understanding better
                    // If input is "my phone number is 18273493", what is output? 
                    // Complex inputs: Do we account for spaces? symbols? Casing of letters matter? 
                
                // 4. Explore Examples with Empty Inputs: 
                // 5. Explore Examples with Invalid Inputs: 
                        charCount(""); // what output do you want? 

// BREAK IT DOWN 
        // Psuedo code. Comments. Don't work silently. What steps
            // will you take? Explicitly write out steps to take. 
                // Forces you to think about the code you'll write
                // before you write it, and helps you catch any lingering
                // conceptual issues or misunderstandings before you dive in 
                // and have to worry about details. 
                // (e.g. language syntax) as well. 

                // ex: Write a function which takes in a string and returns
                        // counts of each character in the string. 

                        // Type up skeleton of function. 

                        function charCount(str) {
                            // Do something

                            //Return an object with keys that are lowercase alphanumeric 
                            //characyers in a string; values should be the counts for those 
                            //characters. 
                        }


                        function charCount(str) {
                            // make object to return at end

                            // loop over string, for each character
                                // if the char is a number/ letter AND is a key in object, add one to count
                                // if char is NOT a number/letter AND NOT in obj, add it to object and set value to 1
                                // if character is something else (space, period, etc...) don't do anything
                            
                            // return object at end. 
                        }
                                        
                // It is important to note that even writing out these steps matter to interviewers. Even if you 
                        // don't finish and only completed the pseudo code. A lot of people get jobs 
                        // off of pseudo code. It's just your process. 

// SOLVE AND SIMPLIFY 
    // Solve the problem if you can. But if you can't, 
    // solve a simpler problem.
        // Try to ignore the part that is giving you a hard time
        // and do everything else. 
        //Important: in an interview setting you need to have something to 
        // show for yourself. It's better to do the stuff you know how to do. 
        // It might give you insight into the harder problem. 

    //SIMPLIFY: Find the core difficulty in what you're trying to do.
            // Temporarily ignore that difficulty
            // Write a simplified solution. 
            // Then incorporate that difficulty back in. 
        
     // ex: Write a function which takes in a string and returns
                        // counts of each character in the string.
                        // If you forget methods, deal with it later
                            // say you can't remember method but you know what it can do. 

            function charCount(str) {
                // make object to return at end
                let result = {};
                // loop over string, for each character
                for( let i = 0; i < str.length; i++) {
                    // if the char is a number/ letter AND is a key in object, add one to count
                    //check if character in result obj. Ignore other parts of step
                    let char = str[i].toLowerCase();
                    if(result[char] > 0) { // if this character exists already
                        result[char]++; // add 1
                    } else {
                        // if char is a number/letter AND NOT in obj, add it to object and set value to 1
                        result[char] = 1; 
                    }
                }
                // if character is something else (space, period, etc...) don't do anything
                // return object at end. 
                return result; 
            }
            // Now if you don't know how to check if all  alphanumeric, you can spitball with
                // interviewer and ask for suggestions. If you solve the majority of it, and ask for suggestions
                // it's not a bad thing. 

// LOOK BACK & REFACTOR: It is true that in a lot of jobs in a lot of scenarios
                        // all that matters is if something works. But to be a better coder
                        // you need to go beyond that. 
        
    // Refactoring questions: You should say out loud during interview
            // Can you check the result? 
            // Can you derive the result differently? 
            // Can you understand it at a glance? 
            // Can you use the result or method for some other problem?
            // Can you improve the performance of your solution?
            // Can you think of other ways to refactor? 
            // How have other people solved this problem? 

    // Acknowledge that your code isn't neat and you would prefer it neater. 
            // Just have something. Pick their brain? What did I miss? A different way of solving the problem? 

            // You can actually find code in java or python and compare it. It could give you insight on how to solve your own
                // problem. So don't rule out other languages. 
    
        // Ex:  
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp   
        function charCount(str) {
                let result = {};
                for( let i = 0; i < str.length; i++) {
                    let char = str[i].toLowerCase();
                     //regEx regular expression with / escape
                    if (/[a-z0-9]/.test(char)) {// a-z or 0-9 - can do charCode. This current use is too complex. use simpler. 
                    if(result[char] > 0) {
                        result[char]++;
                    } else {
                        result[char] = 1; 
                    }
                }
            }
                return result; 
        }

// REFACTOR - for of is better. 
// ++x (pre-increment) means "increment the variable; the value of the expression is the final value"
// x++ (post - increment) means "remember the original value, then increment the variable; the value of the expression is the original value"
// Faster than above. More readable. More efficient. This one is tougher to get to though. 
// The above solution is fine. Sometimes you want to acknowledge a different solution
// and that you could find it online. 
function charCount(str) {
    let result = {};
    for (let char of str) {
        if (isAlphaNumberic(char)) { 
            result[char] = ++result[char] || 1; 
        }
    }
    return result;
}      
// a little bit like chunking
function isAlphaNumberic(char) {
    let code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && // numberic (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }
    return true; 
}
                                
// Acknowledge there is a better way of doing it. Say, I would google it. I have a feeling regex not fastest way

// INTERVIEW:  
    // Clarify problem. Understand problem. Ask clarification to interviewer.
    // Explore concrete examples: Also understanding problem, but more detailed. What happens if no input. Invalid input? Edge cases. 
    // Break It Down: Pseudo code. Or steps. Better to have gameplan. Than nothing.
        // Always start with pseudo code and gameplan or mix. 
        // Without it, you will pigeonhole yourself. And panic. ************************
    // Solve problem. But if you can't, solve all the simpler problems.
        // Then reincorporate that difficulty back in. 
    // Look Back and Refactor - Analyzing. Acknowledging
        // better solutions. 

// PROBLEM SOLVING PATTERNS
    // Master common problem solving patterns. Sometimes comes in handy. 
    // Not a cure all. You can't just memorize these and it fixes everything. 
    // might help you 1/10 or 1/5 challenges. 

        // Not official names. 
        // Blue print. 
    // 1. Frequency Counter
    // 2. Multiple Pointers
    // 3. Sliding Window
    // 4. Divide and Conquer
    // 5. Dynamic Programming
    // 6. Greedy Algorithms
    // 7. Backtracking 
    // many more... 

//FREQUENCY COUNTER PATTERN
    // This pattern uses objects or sets to collect values/frequencies of values
    // This can often avoid the need for nested loops or O(N^2) operations
        // with arrays / strings 

        // Ex: Write a function called SAME, which accepts 2 arrays. 
            // The function should return true if every value in the 
            // array has its corresponding value squared in the
            // second array. The frequency of values must be the same. 
            // The order doesn't matter. 

            // same([1,2,3], [4,1,9])// true. 1**2 is 1. 2**2 = 4. 3**3 = 9
            // same([1,2,3], [1,9]) // false
            // same([1,2,1], [4,4,1]) // false. Not same frequency
            // NATIVE APPROACH O(N^2). Quadratic relationship
            function same(arr1, arr2) {
                if (arr1.length !== arr2.length) return false;
                // indexOf looks at a value and tries to find it in another array
                // let animals = ['bird', 'tiger', 'frog'];
                // animals.indexOf('tiger'); // 1 true
                for(let i = 0; i < arr1.length; i++) {
                    let correctIndex = arr2.indexOf(arr1[i]**2); //does this value exist in arr2? will find first value where true***************
                    if(correctIndex === -1) { //if no,
                        return false;
                    } 
                    arr2.splice(correctIndex, 1); // splice(value,range. Removes from array. So it's not encountering the same number
                                                    // [1,2,3,2], [9,1,4,4]. The second 2 in first array should not encounter again the 3rd 4. 
                }                                   // this checks if same frequency
                return true;   // I think this just exits amd just provides a true after all codes run
            }

///REFACTORED SOLUTION TO ABOVE
// 2 SEPARATE LOOPS VASTLY BETTER than 2 NESTED LOOPS. Nested loops doubles the amount of loops
// O(N) -- linear time 
// for... of -Use for…of to iterate over the values in an iterable, like an array for example
            // strings are also iterable
// for...in Use for…in to iterate over the properties of an object (the object keys)
            // You can also use for…in to iterate over the index values of an iterable like an array or a string
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {}; // ex: {1: 2, 2: 1, 3: 1} frequency object
    let frequencyCounter2 = {};

    for(let val of arr1) { // placing into object with frequency - array for..of
                                //get used to this logic here
                                // if it exists, then +1, if it doesn't then 0 +1
                                // it is conditional statement that checks if true--not necessarily returns true
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) { // placing into 2nd object with frequency 
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1) { // looping through frequencyCounter1 object  -- for...in
        if(!(key ** 2 in frequencyCounter2)) { // checks if prop and value are present. Does key ** 2 from frequency counter 1 exist in frequency counter 2? 
            return false; // ex: is 2**2 = 4 a key in frequencyCounter2? array turned into props, and value is frequency
        }
        //does the property at key**2 !== property at key. Do their values match? Bracket notation and reference
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){ // Do the values correspond?
            return false; 
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true;
}
// Objects break down content of array or string and helps you quickly compare 2 objects

// ANAGRAM CHALLENGE                          
    // Given 2 strings, write a function to determine if 
    // the second string is an anagram of the first

    // Clarify: Figure out if the two strings share the same characters and same number of characters? 
    
    function validAnagram(str1, str2) {
        if(str1.length !== str2.length) return false; 

        let frequency1 = {};
        let frequency2 = {};

        for(let val of str1) {
            frequency1[val] = (frequency1[val] || 0) + 1;
        }
        for (let val of str2) {
            frequency2[val] = (frequency2[val] || 0) + 1;
        }
        // pay attention to the different ways you can use bracket notations
        // bracket notations return value
        // this ends function if a property is not in frequency2 object 
        for(let key in frequency1) {
            if(!key in frequency2) {
                return false;
            }
            // takes value from frequency2 prop and compares to frequency1's, as you loop through frequency1.
            // hence only need to loop through 1 and compare. The bracket notation 
            if(frequency2[key] !== frequency1[key]) { // special part
                return false; 
            }
        }
        console.log(frequency1);
        console.log(frequency2);
        return true; 
    }

    //Alternate: See how code blocks can take care of general stuff and then gets more detailed going down?

    function validAnagramAlt(str1, str2){
        if (str1.length !== str2.length) return false; 

        const lookup = {}; 

        for(let i = 0; i < str1.length; i++) {
            let letter = str1[i];
            // if lookup[letter] exists, then lookup[letter]: 1. If not, then lookup[i]: 0;
            lookup[letter] ? lookup[letter] += 1: lookup[letter] = 1; // Does property lookup[letter] exist? If so, += 1 or ++ . If not, = 1. 
        }
        for(let i = 0; i < str2.length; i++) {
            let letter = str2[i];
            if(!lookup[letter]) { // here's the special part. It goes back to the lookup object, and checks if str2[i] characters exist in it. 
                return false; 
            } else {
                lookup[letter] -= 1; // checks frequency of letters by getting rid of 1. So str2[i] is compared to remaining letters
            }
        }
        true;
    }


    //MULTIPLE POINTERS 
        // Creating pointers or values that correspond to an index or position and move towards
        // the beginning, end or middle based on a certain condition
        // Very efficient for solving problems with minimal space complexity as well
        
        // ex: [-4,-3,-2,-1,0,1,2,5]
        //      alksjdalksjdlkasjdlks
        // No guaranteed direction. 
        // A pointer is a variable. A specific location in array or string.
        // And you have a second pointer that works toward each other or together in same
            //direction. 
        
        //ex: Write a function called sumZero which accepts a SORTED array of integers.
            // The function should find the first pair where the sum is 0. Return an array that
            // includes both values that sum to zero or undefined if a pair does not
            // exist. 
            //1. function accepts an ordered array, likely with negatives, and finds the 1st pair that 
                // sums to zero. 
            // 2. If nothing sums to zero, the function returns undefined. 
            // 3. This array needs 2 pointers. Does this mean 2 loops? 
            // Complex ex: 
                // [-3, -2, -1, 0, 1, 2, 3, 4]

            // O(N^2) and O(1)
            // NAIVE SOLUTION 
            function sumZero(arr) {
                for(let i = 0; i < arr.length; i++) {
                    for(let j = i+1; j < arr.length; j++) { // the nest loop goes through entire array for the first arr[i]******* This is the main behavior here to recognize
                        if(arr[i] + arr[j] === 0) {
                            return [arr[i], arr[j]];
                        }
                    }
                }   
            }
            // Fundamental understanding, when arr[i] iterates, it stops at that index, and goes to arr[j]. 
            // arr[j] must finish loop before arr[i] continues on. You also need to think about the 
            // BEHAVIOR you want as the two pointers move through the array. 

            // REFACTORED SOLUTION #1: Opposite Ends
            // 2 pointers start at opposite ends. 
                // Also with conditionals that determine if iteration moves on
                // [-3, -2, -1, 0, 1, 2, 3, 4]
                function sumZero(arr) {
                    let left = 0; // to be used as index later via bracket notation
                    let right = arr.length - 1; // you had trouble here.
                    while(left < right) { // I believe this also stops it from reaching zero and returning a false positive [0,0]
                        let sum = arr[left] + arr[right];
                        if(sum === 0) {
                            return [arr[left], arr[right]];
                        } else if (sum > 0) { 
                            right--;
                        } else {
                            left++;
                        }
                    }

                }
                // Need to stop the pointers before they both reach zero. Or else it will return
                // a false positive [0,0]; 

                // TWO POINTERS: SAME DIRECTION (don't do object way, for variation. object way would be better for unsorted)
                    // Ex: Implement a function called countUniqueValues, which
                    // accepts a sorted array, and counts the unique values in the array.
                    // there can be negative numbers in the array, but it will always be sorted.
                    // [-3, -2, -1, 0, 1, 2, 3, 4]
                    // [1,1,1,3,4,5] // 
                    // clarify: Use 2 pointers to go through array and return only the amount of unique integers.
                    // 
                    function countUniqueValues(arr){
                        if (arr.length === 0) return 0;
                        let i = 0;
                        for(let j = 1; j < arr.length; j++) { // 
                            if(arr[i] !== arr[j]) {
                               i++; // you had trouble here. This helps you reference the array and sort of move through an array, because this number changes
                               arr[i] = arr[j];
                            } 
                        }
                       return i + 1; // because index count is not the same quantity
                    }               // or put j <= arr.length in loop... I think that works

// SLIDING WINDOW PATTERN: https://medium.com/outco/how-to-solve-sliding-window-problems-28d67601a66 
     // This pattern involves creating a window which can either be an
     // array or number from one position to another. 
     // Depending on a certain condition, the window either increases,
     // or closes (and a new window is created)
     // Very useful for keeping track of a subset of data in an 
     // array/string etc.. 

     // Clarify: Useful with array and strings. When looking for subset of
     // data that is continuous. 
         // Ex 1: "hellothere" 
         // Write a function to find the longest sequence of unique
         // characters. 
         // hel el l lother other ther her er re e

         // Ex 2: 
         // Write a funcion called maxSubarraySum which accepts 
         // an array of integers and a number called n. The function should
         // calculate the maximum sum of n consecutive 
         // elements in the array. 

         maxSubarraySum([1,2,5,2,8,1,5],2); // 8 + 2 = 10 -- the max sum of 2 consecutive numbers in array 
         maxSubarraySum([1,2,5,2,8,1,5],4); // 8 + 2 + 5 + 2 = 17
         maxSubarraySum([4,2,1,6], 1); // 6
         maxSubarraySum([4,2,1,6,2], 4); // 13
         maxSubarraySum([], 4); // null 

         //See how that window grows and closes and reopens? 
         // Note: The nested loop will loop over all of its items before the outer loop moves to its second time. 

        // Ex: NAIVE SOLUTION: Nested loop still bad, even though other loop is iterating over a window. Think how long it would be if array was really long. 
                    function maxSubarraySum(arr, num) {
                        if(num > arr.length) {
                            return null;
                        }
                        let max = -Infinity; // accounts for negative numbers. If all negative numbers, biggest sum would still be negative. It just sets at negative
                                            // preparing for temp variable to overtake it.  
                        for(let i = 0; i < arr.length - num + 1; i++ ) { // You have to stop the loop before the num range can't be made up by remaining items in array
                                                                        //minus the window, plus 1, so last window starts at second-to-last index position if parameter is 2.
                                                                        // if you subtract and don't add on, the loop ends prematurely with still 2 numbers left. *******************
                            temp = 0; // temporary sum 
                            for(let j = 0; j < num; j++) { // This looks ahead and sums together num items. It NOT num.length. It is actually the window. 
                                temp += arr[i + j]; // CONFUSION: These add up INDEX position. Not value. Num is 0 - 1, after 1 i moves on to next index position
                                                // In the 1st one you add the values of i & j , and find the corresponding 
                                                // value from the array, e.g. arr[0+0] = 2, arr[0+1] = 6, arr[0+2] = 9, arr[1+0] = 6, arr[1+1] = 9, arr[1+2] = 2, and so on.
                            }                   // temp saves last value and adds it to next value index i. 
                            if(temp > max) {// TEMP deals with the VALUES of those index position
                                max = temp; 
                            }
                        }
                        return max; 
                    }

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // this would stop at 1 in array (see outer for loop) above.
                                        //  Last number you can begin with.

// REFACTORED SOLUTION: O(N)- goes over entire array only once. linear. 
    
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0; 
    if(arr.length < num) return null;
    for(let i = 0; i < num; i++) { // if 3, then 0 1 2 *** Sums together  2, 6, 9 -- the WINDOW. 
        maxSum += arr[i]; // sums/adds arr[0] + arr[1] + arr[2] = 17
    }
    tempSum = maxSum;// 17
    for(let i = num; i < arr.length; i++) {// 1. i  = 3, if that is parameter passed. If there's more, numbers in array, keep iterating. so you're not iterating over same indices**************************************
        tempSum = tempSum - arr[i - num] + arr[i]; // 1. 17 - arr[3 - 3] + arr[3] = 17. Adds one array value in at end************************************
        maxSum = Math.max(maxSum, tempSum); /// takes higher #  //  2. 17 - arr[4 - 3 = 1] + arr[4] ***********************************
    }                                               // 3. 12 - arr[5 - 3 = 2] + arr[5]
    return maxSum; //19
}

maxSubarraySum([2,6,9,2,1,8,5,6,3], 3);
    // This behaves differently than naive solution. 
    // It's all about how the pointers around in the array. 
    // It adds together the first 3 indices values. 
    // Then it subtracts the first index value and adds on to the end 
    // the following index. 
    // ex: first is 2 + 6 + 9. Second is 17 - arr[0] + arr[3] = 17. 

    // DIVIDE AND CONQUER PATTERN 
        // This pattern involves dividing a data set into smaller chunks and then repeating a process
        // with a subset of data. 
        // This pattern can tremendously decrease time complexity. 

     // Divide up larger chunk data into smaller chunks
    // Ex: Given a SORTED array of integers, write a function called search, 
        // that accepts a value and returns the index where the value
        // passed to the function is located. If the value is not found,
        // return -1. 

        // This is binary search 

        // Clarify: find the index of the value passed into search function
        // if present, return index. If not present, return -1. 

        // The function accepts an array and a value. 
        // We can use findIndex
        // We'd prefer not to have to loop through this
        // What if value appears more than once in array? Are we only returning the first one
        // If necessary, ensure only integers are put through. 
        // What if array has decimals? 
        // What if negative values? 
        // We have to chunk it

        // expected output: 
        // search([1,2,3,4,5,6], 4); // index 3 is where 4 sits 
        
        // My Naive Approach: But this doesn't chunk and looks through entire array
        function search(arr, value){
            return arr.indexOf(value);
        }

        // His naive approach: O(n)
        function search(arr, val) {
            for(let i = 0; i < arr.length; i++) {
                if(arr[i] === value) {
                    return i;
                }
            }
            return -1;
        }

        //REFACTOR - this only works for sorted arrays - Log(N) - log base 2 of n
        // Pick middle point, to decide on which side you need  to get rid of
        // so you don't have to deal with entire array
        function search(array, val) {
            let min = 0;
            let max = array.length - 1;

            while(min <= max) { // this keeps cutting down the middle so long as condition is such
                let middle = Math.floor((min + max) / 2);// chunks data using length and index
                let currentElement = array[middle];

                if(array[middle] < val) { // 
                    min = middle + 1; 
                } 
                else if(array[middle] > val) { // 
                    max = middle - 1; 
                }
                else {
                    return middle;
                }
            }
            return -1; 
        }
            
        
// Challenge 1: 
        // 1. Create a function called sameFrequency that checks if 2 positive integers
        // occur the same amount of time. 

        // 2. It's like passing through 2 arrays. But not really. Checking if the two sequences of numbers appear the same amount of time in each
        // sameFrequency(35, 53); // True
        // sameFrequency(11, 51); // False 
        //sameFrequency(num1, num2)
        // let frequencyCounter = {}; 
        // if(arr.length < 2) {return null }
        // sameFrequency(0 , 1) //  if(num <= 0) {return null}
        //for of statement to move it into the object
            // for(num of arr) { arr[num] ? arr[num] += 1 : arr[num] = 1};
                // now you have frequencyCounter = {5:2, 3:2, 7:1, 8:1, 1: 1, 2:2, 9:1}
        //if(frequencyCounter[num1] === frequencyCounter[num2]) {return true}
        
        // I could join the two arrays together. But I think that requires more processes. 
        function sameFrequency(sequence1, sequence2) {
            let frequency1 = {};
            let frequency2 = {}; 
            if(sequence1.length !== sequence2.length) {
                return null;
            }
            let sequence1Str = sequence1.toString();
            let sequence2Str = sequence2.toString();
            
            for(let num of sequence1Str) {
                frequency1[num] = (frequency1[num] || 0) + 1;
            }
            for (let num of sequence2Str) {
                frequency2[num] = (frequency2[num] || 0) + 1;
            }
            for(let count in frequency1) {
                if(!(count in frequency2)) {
                    return false; 
                } else if (frequency1[count] !== frequency2[count]) {
                    return false;
                }
            }
            return true; 
        }

        // Analyze. You misunderstood this problem. It was not asking for 2 arrays. It was just a sequence of numbers
        // So the way to treat it is via like anagrams. But you had to make integers into string first. 
        // because integers are not iterable. Strings are. 


        // Challenge 2: Frequency Counter/ Multiple Pointers
            // Are there duplicates? 
            // Implement a function, areThereDuplicates, which accepts a variable
                // number of arguments, and checks whether there are any duplicates
                // among the arguments passed in. You can solve this using the
                // frequency counter pattern or the multple pointers pattern. 

                // Clarify problem: Basically, this function checks if there are 
                    // duplicates in the arguements passed through, regardless of the 
                    // amount of arguments passed through, and the form it comes in

                    // Examples: 
                        // areThereDuplicates(1,2,3); // false 
                        // areThereDuplicates(1,2,2); // true 
                        // areThereDuplicates('a','b', 'c', 'a'); // true 
                        
                        // This function needs to be able to accept an indefinite # 
                            // of arguments

                        // We could turn the arguments into an array and then an object
                        // can we turn it into an object, without array? 

                        // areThereDuplicates(...theArgs) {} -use rest parameters - Use this because are practicing multiple pointers 
                            // How do you want to move pointers through the array? let's use 
                            // i and j as the pointers. 
                            // 1 of the pointers has to remain stagnant to be compared to all the other 
                            // values. 

                            // [1, 'b', 6, 12, 'z', 'dot', b, 'dot']
                            //   i  j   j   j   j     j    j    j
                            // let i = theArgs[0]
                            // for (let j = 1; j < theArgs.length; j++) {
                            //      if(i === theArgs[j]) {
                            //          return true;
                            //    }
                            // 
                            // }
                            // I don't think we can use sliding window pattern here because
                                // of the rest parameter. We actually might be able to given the
                                // correct conditonals and ++. 


                        // or no rest paramters and just use arguments keyword, which is an array-like object 

                        // { 1:1, 2:1, 3:1 } if(let count in obj) { count > 1 } return true; 

                        
                            function areThereDuplicates(...theArgs) {
                                if (theArgs.length < 2) {
                                return false;
                                }
                                theArgs.sort(); // You thought of this, but kept thinking you could 
                                let start = 0;                  // only apply to the eventual creation of objects. 
                                let next = 1;
                                while (next < theArgs.length) { // Condition. Not like for loop. Only the numbers change and creates
                                    if (theArgs[start] === theArgs[next]) { // an indirect loop, we will call it. 
                                        return true;
                                    }
                                    start++; // With sort, it essential checks pairs. Since 
                                    next++; // they should all be next to each other if there are duplicates
                                }           // next variable starts at 1, so it reaches end faster than start
                                return false;
                            }

                            console.log(areThereDuplicates("d", "a", "b", "monkey", "a", 2)); // with sort
                                                    // [2,2,a,a,b,monkey] // true
                                                    // ['a', 'b', 'c', 3, 3]; // checks pairs 
                                                    //    s   n
            // analyze: you needed to organize the data into a manner that is easier to deal with from the start.



// Challenge #3: MULTIPLE POINTERS - averagePair
        // Write a function called averagePair. Given a sorted array of 
        // integers and a target average, determine if there
        // is a pair of values in the array where the average of the pair 
        // equals the target average. There may be more than one pair
        // that matches the average target. 

        // Clarify: Create a function that checks if there is a pair of values in a given array where the average of the pair(s)
        // equals the target average. There may be more than 1 pair. 

        // Examples:
            // averagePair([1, 2, 3, 3, 4, 5, 6, 22, 23, 75, 75, 222, 569], 14)// true.  1 pair [6, 22]
            //              i  j 
            //averagePair([1,2,3,4,5], 2.5)// true 

        // 2 pointers. No stagnant one. Both move together. i++, j++, j = i + 1.
        // if((arr[i] + arr[j]) / 2 === targetValue) { return true }
        // while(arr[i] < arr[j]) {}

        // NOT only pertaining to consecutive pairs. 
        // Start from opposite ends. 

        function averagePair(array, targetValue) {
            if(array.length < 2) {
                return false; 
            }
            let start = 0;
            let end = array.length - 1;

            while(start < end) {
                let avg = (array[start] + array[end]) / 2;
                if(avg === targetValue) {
                    return true;
                } else if(avg < targetValue) {
                    start++;
                } else {
                    end--;
                }
            }
            return false; 
        }

        averagePair([1,2,3,5,6,7,10,12,19], 8);

        // Analyze: These pointers start at opposite ends of a sorted
        // array. 
        // The trick here is the average. If the average 
        // is smaller than the targetValue, then the 
        // array[start] has to increase in order to increase
        // the average. If it's too big, then the 
        // arr[end] needs to work backwards, lowering the 
        // average. 
        // The other trick is while(start < end). This condition 
        // keeps all of the stuff in its block scope 
        // running--namely the start++ or end++. 

    // Challenge #4: MULTIPLE POINTERS - isSubsequence
        // Write a function called isSubsequence which takes in two strings
        // and checks whether the character in the first string form 
        // a subsequence of the characters in the second string. In 
        // other words, the function should check whether the characters
        // in the first string appear somewhere in the second string
        // without their order changing. 

        // Clarify: Creat a function that checks whether the characters 
        // in the first string appear somewhere in the second string, 
        // while maintaining the same order.

        // Example: 
            // isSubsequence('hello', 'hello world'); // true
            // isSubsequence('sing', 'sting'); // true
            // isSubsequence('abc', 'abracadabra'); // true
            // isSubsequence('abc', 'acb'); // false (wrong order)

            // The order matters, but characters don't need to be
            // next to each other.

            // In essence, treat it like 2 arrays. 

            // includes() or test() regex

            // if a[i] < b[i] < c[i]

            // we can distill the letters from the second string and then
            // check the order 
            // str1 === str3 // true if both 'abc' 

            // includes(), indexOf, 
            // have to split the string into array
            // then use conditionals to check order 

            // the C/C++ code: 

                // Returns true if str1[] is a subsequence of str2[]. m is 
                // length of str1 and n is length of str2 

                // bool isSubSequence(char str1[], char str2[], int m, int n)
                // {
                //     // Base Cases 
                //     if (m == 0) return true;
                //     if (n == 0) return false;

                //     // If last characters of two strings are matching 
                //     if (str1[m - 1] == str2[n - 1])
                //         return isSubSequence(str1, str2, m - 1, n - 1);

                //     // If last characters are not matching 
                //     return isSubSequence(str1, str2, m, n - 1);
                // } 
                // O(N) - iterative. Linear. 
                function isSubsequence(str1, str2) {
                    let i = 0;
                    let j = 0;
                    if(!str1) return true; // True because it's nothing, I guess.
                    while(j < str2.length) { // not important. You can set it null if str1.length is 0 
                        if(str2[j] === str1[i]) i++;
                        if(i === str1.length) return true; 
                        j++; 
                    } 
                    return false; 
                }

                // RECURSION 
                function isSubsequence(str1, str2) {
                    if (str1.length === 0) return true // if the length is 0 or it gets down to zero from splicing via matches, then true
                    if (str2.length === 0) return false 
                    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
                    return isSubsequence(str1, str2.slice(1))
                }

                // Challenge 5: SLIDING WINDOW
                // Given an array of integers and a number, write a function
                // called maxSubarraySum, which finds the maximum sum of a subarray
                // with the length of the number passed to the function. 

                // Note that a subarray must consist of CONSECUTIVE elements
                // from the original array. In the first example below, [100, 200, 300]
                // is a subarray of the original array, but [100,300] is not. 

                // Clarify: Create a function that takes on an array of integers as 1 argument
                // and a number as the 2nd argument and have this function find the max sum of a subarray,
                // that is consituted by consecutive numbers with the 
                // length of whatever number was passed through in the second argument. 

                //Ex: maxSubarraySum([100,200,300,400], 2); // 300 + 400 = 700
                //Ex: maxSubarraySum([1,4,2,10,23,3,1,0,20], 4); 4 + 2 + 10 + 23 = 39
                //Ex: maxSubarraySum([-3,4,0,-2,6,-1], 2); // 6 + -1 = 5
                //Ex: maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2); // -2 + 7 = 5
                //Ex: maxSubarraySum([2,3], 3); // null. Window larger than array
                // How to move through array? 
                // [1,2,3,4], 2
                //  i j
                // let i = 0
                // let j = num.length - num + 1; // but needs to stop before end 
                // i !== j {i++ j++}
                function maxSubarraySum(arr, num) {
                    if(num > arr.length) {
                        return null;
                    }
                    let temp = 0;
                    let max = 0;
                    for(let i = 0; i < num; i++) { // window
                        max += arr[i]; // bracket notation to access array items. 
                    }
                    temp = max;
                    for(let i = num; i < arr.length; i++) { //starts at arr[i + 1]. The num provides an index ahead of arr[i]
                        temp = temp - arr[i - num] + arr[i]; // 1. arr[i-num] = arr[3 - 3] = 0. - Subtracts first number of subarray. Cancel out to get arr[0]
                        max = Math.max(temp, max);                                    // 2. arr[0] + arr[i] = arr[3]. This adds on the value from the added on array item. 
                    }                                       // 3. Next iteration: i = 4. You got confused with i = num. It starts there. Not that always. 
                    return max;                             // 4. 17 - arr[4 - 3] = 17 - arr[1] + arr[4]; 17 - 6 + 1 = 12. 
                }                                           // 5. 12 - arr[5 - 3] + arr[5] = 12 - 9 + 8 = 3 + 8 = 11. 
                                                            // while it iterates over the remaining array by subtracting the first number and adding one to the end
                maxSubarraySum([2,6,9,2,1,8,5,6,3], 3);        // It is checking all those values gainst the temp sum. If it's higher, then it replaces. If it's not
                                                                // Then it remains that sum. 


// CHALLENGE 6: More SLIDING WINDOW - minSubArrayLen
    
    // Write a function called minSubArrayLen which accepts 2 parameters - 
    // an array of positive integers and a positive integer.

    // This function should return a minimal length of a contiguous subarray
    // of which the sum is greater than or equal to the integer passed to the 
    // function. If there isn't one, return 0 instead.

    // Examples: 
                // minSubArrayLen([2,3,1,2,4,3], 7); // 2 -> b/c [4,3] is the smallest subarray
                // minSubArrayLen([2,1,6,5,4], 9); // 2 -> because [5,4] is the smallest subarray
                // minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52); // 1 -> because [62] is greater than 52
                // minSubArrayLen([1,4,16,22,5,7,8,9,10], 39); // 3
                // minSubArrayLen([1,4,16,22,5,7,8,9,10], 55); // 5
                // minSubArrayLen([4,3,3,8,1,2,3],11); // 2
                // minSubArrayLen([1,4,16,22,5,7,8,9,10], 95); // 0

    // Clarify: This function must be able to find the smallest subarray that sums up to either equal to the positive integer or is greater than it. 
                // it returns the LENGTH of the sum of the subarray that is greater than or equal to the 
                // Is there a single number that equals the positive integer? 
                    //for(let i = 0; i < arr.length; i++) {
                    //   if(arr[i] === num || arr[i] > num) { 
                    //       return arr[i]
                    //   } 
                    //}
                // create variable subArray to hold numbers
                    // .push() with splice()? 
                    // the problem with push() here is it doesn't guarantee the subarray you have obtained is indeed the smallest 
                    // the tough part is after you have obtained a subarray that does equal to or is greater than num, how do yo keep
                        //checking if it is indeed the smallest sub array? 

                    // Needs a temporarySum variable
                    // Needs conditionals testing if a sub array equals the num
                    // Needs conditionals testing whether a new sub array during iteration
                        // is 

                // return subArray.length or return 0; 

                function minSubArrayLen(arr, sum) {
                    let total = 0; 
                    let start = 0; 
                    let end = 0;
                    let minLen = Infinity;
                        // keep track of if else statement. Remember, not all code runs below. 
                    while(start < arr.length) { // as long as start value is less than array length
                        if(total < sum && end < arr.length) { // if the accumulate total is less than num value & accumulated end value is less than array length
                            total +=arr[end]; 
                            end++; 
                        } else if (total >= sum) {
                            minLen = Math.min(minLen, end - start); // 9. infinity built to lose 
                            total -= arr[start]; // I think this takes off from the beginning
                            start++; 
                        } else {
                            break;
                        }
                    }
                    return minLen === Infinity ? 0 : minLen; // does minLen === infinity still?
                                                            // if yes, then 0. If no, then minimum length
                }

                minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)

// http://blog.sodhanalibrary.com/2015/06/minimum-size-sub-array-sum-javascript.html#.XIar4yhKiM8 

function minSubArrayLen(arr, value) {

    if (!arr || !arr.length || !value) return 0;

    let left = 0;
    let right = 1;
    let sum = arr[left];
    let minLen = Infinity;

    while (right <= arr.length) {
        if (sum < value) {
            sum += arr[right++];
        } else {
            if (minLen > right - left) minLen = right - left;
            sum -= arr[left++];
        }
    }
    return minLen < Infinity ? minLen : 0;
}

minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)


function minSubArrayLen(arr, target) {
    let sum = 0;
    let start = 0;
    let minLength = Infinity;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        while (sum >= target) {
            minLength = Math.min(minLength, i - start + 1);
            sum -= arr[start];
            start++;
        }

    }
    return minLength === Infinity ? 0 : minLength;
}