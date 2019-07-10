import React from 'react';
// import './App.css';

let factorial = (value) => {

  if (value === 0) {
    return 1;
  }

  return value * factorial(value - 1);

}

let sortByAlphabeticalAscInArray = (value) =>  {

  return value.sort().join();

}

let sortByAlphabeticalDscInArray = (value) =>  {

  value.sort();
  return value.reverse().join();

}

let sortArrayNumbersSmallestToLargest = (value) => {

  value.sort(function(a, b) {
    return a - b;
  })

  return value.join();

}

let sortArrayNumbersLargestToSmallest = (value) => {

  value.sort(function(a, b) {
    return b - a;
  })

  return value.join();

}

function App() {

  return (
    <>
      <div className="App">
          Value: 5
          Factorial: <div>{factorial(5)}</div>
      </div>

      <div className="example">
        <br></br>
        Sort by largest in array:
        <div>Value: ["We", "I", "Them", "You"]</div>
        <div>Answer: {sortByAlphabeticalAscInArray(["We", "I", "Them", "You"])}</div>
      </div>
      
      <div className="example">
        <br></br>
        Sort by smallest in array: 
        <div>Value: ["We", "I", "Them", "You"]</div>
        <div>Answer: {sortByAlphabeticalDscInArray(["We", "I", "Them", "You"])}</div>
      </div>

      <div className="example">
        <br></br>
        Sort array numbers smallest to largest: 
        <div>Value: [10, 5, 100, 25]</div>
        <div>Answer: {sortArrayNumbersSmallestToLargest([10, 5, 100, 25])}</div>
      </div>

      <div className="example">
        <br></br>
        Sort array numbers largest to smallest: 
        <div>Value: [10, 5, 100, 25]</div>
        <div>Answer: {sortArrayNumbersLargestToSmallest([10, 5, 100, 25])}</div>
      </div>
    </>
  );
}

export default App;
