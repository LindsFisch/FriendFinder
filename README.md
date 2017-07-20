# FriendFinder

### Overview

Created a full-stack "compatibility-based" app that will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

### Requirements 

1. 10 question survey. Each answer on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
2. Determine the user's most compatible friend using the following:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
   * The closest match will be the user with the least amount of difference.

3. Once the current user's most compatible friend is found, display the result as a modal pop-up.
   * The modal should display both the name and picture of the closest match. 
   
### Technologies Utilized
Nodejs  Expressjs  

https://find-friend-lf.herokuapp.com/
