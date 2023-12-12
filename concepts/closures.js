/* 
Closure in JavaScript means an inner function has access to the variables that are defined in the outer function. 
Whenever we are declaring a function inside another function, we are creating closures.
*/

const devName = function developer() {
  const name = 'matthew';
  function displayName() {
    console.log(name);
  }
  displayName();
};

devName();
