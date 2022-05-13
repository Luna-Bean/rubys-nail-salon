// // Codewars Challenge 05-13-2022

                        // How Good Are You Really?

                        
// // There was a test in your class and you passed it. Congratulations!
// // But you're an ambitious person. You want to know if you're better than the average student in your class.

// // You receive an array with your peers' test scores. Now calculate the average and compare your score!

// // Return True if you're better, else False!

// // Note:
// // Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!




                                                           //  My Thought process:

//- Need to create a function that needs to take in two parameters: the class test scores and my test score.



                                                    // If I didnt add my test scores to the array:

// -Received an array with peer test scores. An example array could be classTestScores = [97,88,67,100,78]
// -lets say my test score is 99.
// -add all test scores and take average of array => classTestScores.reduce((a,b){return a + b}, 0)/classTestScores.length. can set it equal to averageTestScores.
// -if averageTestScores is greater than my test score, the code should return true.
// -if averageTestScores is less than my test scores, the code should return false.

                                                        //If I did add my test scores to the class array:

//-we could set the classTestScores array to equal [99,97,88,67,100,78]
//-add all the test scores by using classTestScores.reduce((a,b){return a + b},0)/classTestScores.length.
//-if averageTestScores is greater than my test score, the code should return true.
//-if averageTestScores is less than my test scores, the code should return false.


                                                                    // Questions I have:

// - what would be returned if my test scores were equal to the averageTestScores? Would I need to return true or false?
//Does it matter if the class average is not a whole number? Do I have to round the average to the nearest integer?

                                                                        // My Solution:

function betterThanAverage(classTestScores, myTestScore){
    let averageTestScores = classTestScores.reduce((a,b)=>{
        return a + b},0)/classTestScores.length;

        if(myTestScore > averageTestScores){
            return true;
        }else{
            return false; 
        };
    };
                                                                            
