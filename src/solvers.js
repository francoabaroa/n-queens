/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  var savedIndex = 0;
  var matrix = [];

  for (var key in solution._currentAttributes) {
    if (key !== 'n') {
      solution._currentAttributes[key][savedIndex] = 1;
      matrix.push(solution._currentAttributes[key]);
      savedIndex ++;
    }
  }
  //  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return matrix;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var factorial = function factorial (n) {
  //   if (n <= 1) {
  //     return (n < 0) ? null : 1;
  //   }
  //   return n * factorial(n - 1);
  // };

  // var solutionCount = factorial(n);
  // return solutionCount;

  var board = new Board({n: n});
  var solutionCount = 0; 
  var recurse = function recurse (rowIndex) {
    // base case
    if (rowIndex === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(rowIndex, i);     
      if (!board.hasAnyRooksConflicts()) {
        recurse(rowIndex + 1);
      }
      board.togglePiece(rowIndex, i);     
    }
  };
  recurse(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var solutionCount = 0; 
  if (n === 2 || n === 3) {
    return board.rows();
  }
  var recurse = function recurse (rowIndex) {
    // base case
    if (rowIndex === n) {
      solutionCount = _.map(board.rows(), function (rows) {
        return rows.slice();
      });
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(rowIndex, i);     
      if (!board.hasAnyQueensConflicts()) {
        recurse(rowIndex + 1);
      }
      board.togglePiece(rowIndex, i);     
    }
  };
  recurse(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n: n});
  var solutionCount = 0; 
  var recurse = function recurse (rowIndex) {
    // base case
    if (rowIndex === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(rowIndex, i);     
      if (!board.hasAnyQueensConflicts()) {
        recurse(rowIndex + 1);
      }
      board.togglePiece(rowIndex, i);     
    }
  };
  recurse(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};
