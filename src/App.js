import React, {Component} from 'react';
import './App.css';

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

let iterateOverArray = (value) => {

  let newArray = []
  value.map((item, index) => 
    newArray.push(item)
  )

  return newArray.join();
}

let addToBeginningOfArray = (value) => {

  value.unshift('test');
  return value.join();

}

let addToEndOfArray = (value) => {

  value.push('test')
  return value.join();

}

let removeFirstElementFromArray = (value) => {

  value.shift();
  return value.join();

}

let removeLastElementFromArray = (value) => {

  value.pop();
  return value.join();

}

let addItemToObject = (value) => {

  value.fifth = 1000
  return Object.entries(value).join();

}

let iterateOverObject = (value) => {

  let newArray = [];
  Object.getOwnPropertyNames(value).map((key) => 

    newArray.push(value[key])

  );

  return newArray.join();

}

let removeItemFromObject = (value) => {

  delete value.first;
  return Object.entries(value).join();

}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showCode: false
    }

  }

  componentDidMount() {

  }

  clickHandler = () => {
    this.setState({
      showCode: !this.state.showCode
    })
  }

  render() {
    return (
      <div className="practice">

        <div className="category">
          Recursion
          <div className="example">

              Factorial
              <div>Value: 5</div>
              <div>Answer: {factorial(5)}</div>

              {this.state.showCode &&
                <div className="code">
                <div>Code:</div>
                <code>{factorial.toString()}</code>
              </div>
            }
          </div>
        </div>

        <div className="category">
          Arrays
          <div className="example">

            Sort by largest in array:
            <div>Value: ["We", "I", "Them", "You"]</div>
            <div>Answer: {sortByAlphabeticalAscInArray(["We", "I", "Them", "You"])}</div>
            {this.state.showCode &&
                <div className="code">
                <div>Code:</div>
                <code>{sortByAlphabeticalAscInArray.toString()}</code>
              </div>
            }
            
          </div>
          
          <div className="example">

            Sort by smallest in array: 
            <div>Value: ["We", "I", "Them", "You"]</div>
            <div>Answer: {sortByAlphabeticalDscInArray(["We", "I", "Them", "You"])}</div>

            {this.state.showCode &&
                <div className="code">
                <div>Code:</div>
                <code>{sortByAlphabeticalDscInArray.toString()}</code>
              </div>
            }
          </div>

          <div className="example">

            Sort array numbers smallest to largest: 
            <div>Value: [10, 5, 100, 25]</div>
            <div>Answer: {sortArrayNumbersSmallestToLargest([10, 5, 100, 25])}</div>

            {this.state.showCode &&
                <div className="code">
                <div>Code:</div>
                <code>{sortArrayNumbersSmallestToLargest.toString()}</code>
              </div>
            }
          </div>

          <div className="example">

            Sort array numbers largest to smallest: 
            <div>Value: [10, 5, 100, 25]</div>
            <div>Answer: {sortArrayNumbersLargestToSmallest([10, 5, 100, 25])}</div>

            {this.state.showCode &&
                <div className="code">
                <div>Code:</div>
                <code>{sortArrayNumbersLargestToSmallest.toString()}</code>
              </div>
            }
          </div>

          <div className="example">

            Iterate over array: 
            <div>Value: [10, 5, 100, 25]</div>
            <div>Answer: {iterateOverArray([10, 5, 100, 25])}</div>

            {this.state.showCode &&
                <div className="code">
                <div>Code:</div>
                <code>{iterateOverArray.toString()}</code>
              </div>
            }
          </div>

          <div className="example">

            Add to beginning of array: 
            <div>Value: [10, 5, 100, 25]</div>
            <div>Answer: {addToBeginningOfArray([10, 5, 100, 25])}</div>

            {this.state.showCode &&
                <div className="code">
                <div>Code:</div>
                <code>{addToBeginningOfArray.toString()}</code>
              </div>
            }
          </div>

          <div className="example">

            Add to End of array: 
            <div>Value: [10, 5, 100, 25]</div>
            <div>Answer: {addToEndOfArray([10, 5, 100, 25])}</div>

            {this.state.showCode &&
              <div className="code">
                <div>Code:</div>
                <code>{addToEndOfArray.toString()}</code>
              </div>
            }
          </div>

          <div className="example">
            Remove first element from array: 
            <div>Value: [10, 5, 100, 25]</div>
            <div>Answer: {removeFirstElementFromArray([10, 5, 100, 25])}</div>

            {this.state.showCode &&
              <div className="code">
              <div>Code:</div>
              <code>{removeFirstElementFromArray.toString()}</code>
              </div>
            }
          </div>

          <div className="example">

            Remove last element from array: 
            <div>Value: [10, 5, 100, 25]</div>
            <div>Answer: {removeLastElementFromArray([10, 5, 100, 25])}</div>

            {this.state.showCode &&
                <div className="code">
                <div>Code:</div>
                <code>{removeLastElementFromArray.toString()}</code>
              </div>
            }
          </div>
        </div>

        <div className="category">
          Objects:

          <div className="example">

            Add element to object: 
            <div>Value: {"{'first': 10, 'second': 5, 'third' : 100, 'fourth': 25}"}</div>
            <div>Answer: {addItemToObject({'first': 10, 'second': 5, 'third' : 100, 'fourth': 25})}</div>

            {this.state.showCode &&
              <div className="code">
              <div>Code:</div>
              <code>{addItemToObject.toString()}</code>
              </div>
            }

          </div>

          <div className="example">

            Remove item from object: 
            <div>Value: {"{'first': 10, 'second': 5, 'third' : 100, 'fourth': 25}"}</div>
            <div>Answer: {removeItemFromObject({'first': 10, 'second': 5, 'third' : 100, 'fourth': 25})}</div>

            {this.state.showCode &&
              <div className="code">
              <div>Code:</div>
              <code>{removeItemFromObject.toString()}</code>
              </div>
            }
          </div>

          <div className="example">

            Iterate over object: 
            <div>Value: {"{'first': 10, 'second': 5, 'third' : 100, 'fourth': 25}"}</div>
            <div>Answer: {iterateOverObject({'first': 10, 'second': 5, 'third' : 100, 'fourth': 25})}</div>

            {this.state.showCode &&
              <div className="code">
              <div>Code:</div>
              <code>{iterateOverObject.toString()}</code>
              </div>
            }
          </div>

        </div>

        <div class="category">
            <button onClick={this.clickHandler}>Show/Hide Code</button>
        </div>
      </div>
    );
  }
}
