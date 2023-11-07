import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Tasks</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Task Number</th>
            <th>Repository Link</th>
            <th>Deployment Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>my-react-app</td>
            <td>
              <a href="https://github.com/namansingh1111/Task3_my_react_app-">Link 1</a>
            </td>
            <td>
              <a href="https://task3-my-react-app-six.vercel.app/">Link 1</a>
            </td>
          </tr>
          <tr>
            <td>react-calculator-app</td>
            <td>
              <a href="https://github.com/namansingh1111/Task3_calculator-">Link 2</a>
            </td>
            <td>
              <a href="https://task3-my-react-app-el62.vercel.app/">Link 2</a>
            </td>
          </tr>
          <tr>
            <td>color-picker-react-app</td>
            <td>
              <a href="https://github.com/namansingh1111/Task3_color_picker-">Link 3</a>
            </td>
            <td>
              <a href="https://task3-color-picker-steel.vercel.app/">Link 3</a>
            </td>
          </tr>
          <tr>
            <td>usertable-react-app</td>
            <td>
              <a href="https://github.com/namansingh1111/Task3_Usertable_react_app">Link 4</a>
            </td>
            <td>
              <a href="https://task3-usertable-react-app-two.vercel.app/">Link 4</a>
            </td>
          </tr>
          <tr>
            <td>age-calculator-react-app</td>
            <td>
              <a href="https://github.com/namansingh1111/Task3_age_calculator">Link 5</a>
            </td>
            <td>
              <a href="https://task3-age-calculator-three.vercel.app/">Link 5</a>
            </td>
          </tr>
          <tr>
            <td>portfolio</td>
            <td>
              <a href="https://github.com/namansingh1111/Task3_Portfolio_react-">Link 6</a>
            </td>
            <td>
              <a href="https://task3-portfolio-react-five.vercel.app/">Link 6</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
