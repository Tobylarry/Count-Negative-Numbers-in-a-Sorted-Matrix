/**

Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.



*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

//using brute force
var countNegatives = function(grid) {
    let count = 0;
    grid.map((a) => count += a.filter((a)=> a<0).length)
    return count;
}


 //using map and filter
var countNegatives = function(grid) {
   return  grid.map((a) => a.filter((a) => a < 0).length).reduce((a,b) => a+b);
};
