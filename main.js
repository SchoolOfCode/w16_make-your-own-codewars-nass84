/* 
👉 Write your kata here!

You are trying to work out what your maximum efficiency would be when doing squats for an amount of time. 
You would like to know how many Squats you can do if you complete the set without breaks. 


👉 Write the function your CodeWarriors will start with below here: 
*/

function maximumSquatAmount(time, singleSquatTime) {
  return Math.floor(time / singleSquatTime);
}

module.exports = maximumSquatAmount;
