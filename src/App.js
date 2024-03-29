import React from 'react';
import ApolloBoost from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
//import logo from './logo.svg';
import './App.css';
import CardContainer from './components/CardContainer'
//import GoogleMap from './components/GoogleMap'


const client = new ApolloBoost({
  uri: 'https://api-uswest.graphcms.com/v1/ck7wb1qr50xw101eahdv636wz/master'
})



// client
//   .query({
//     query: getRestaurantsQuery
//   })
//   .then(res => console.log(res))

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <div className="App-header-title">
            <div><img src="ClickAndTipLogo.png" alt="Click and tip logo"></img></div>
          </div>
          <div className="App-header-content-container">
            <div className="App-header-content-item App-header-content-item-letter">
              <div>
                <div>
                  <b>TIP JAR ROUND #2 … effective Saturday, April 11th</b>
                </div>
                

                <p>
                  Dear Crested Butte Community –
                </p>
                <p>
                This website is a way to support service employees of local and independent restaurants who have had operations severely changed due to state and county mandates. YOU can now “tip” into a virtual tip jar! ALL donations flow through directly to laid off service sector employees.
                </p>
                <ul>
                  <li>
                    Any amount is helpful and will be directly deposited into employee’s accounts via venmo/zelle/cash app. (<b>Round #2</b>  involves restaurant owner/designated person to distribute tips to employees)
                  </li>
                  <li>
                  	You can choose to tip directly into a restaurant “tip jar” OR tip into a general CB “tip jar” (R<b>Round #2</b>  – General CB “tip jar” will be divided among all restaurants listed on website)
                  </li>
                  <li>This effort is an emergency response and is not tax-deductible (consider it a generous offering)</li>
                  <li>Each employee is verified by the business owner</li>
                  <li><b>Round #2</b> funds will be distributed to restaurant owner/designated person bi-monthly</li>
                  <li>This is a voluntary effort administered by Haden Spencer, long-time CB community
                    member (part-time and full-time) with deep roots in the community. Haden or Katherine  can be <a href="mailto:cbtipjar@gmail.com">reached</a>  for any questions/concerns and will be happy to share weekly reports on funds
                    distributed as requested by donors</li>
                  <li> WE ARE HOPEFUL TO MAKE AN IMPACT AND SHOW SUPPORT AND CONCERN FOR
                    THOSE WHO ARE IN NEED!!</li>
                </ul>

                <p>Thank you for your generosity!</p>
                <p>The Spencer Family <br></br><a href="mailto:cbtipjar@gmail.com">cbtipjar@gmail.com</a>  </p>
                


              </div>
            </div>
            <div className="App-header-content-item App-header-content-item-map">
              <img src="CBTipJar.png" alt="tip jar logo"></img>
            </div>
          </div>
        </header>

        <div className="App-content">
          <CardContainer containerName='restaurants'></CardContainer>
        </div>
      </div>
    </ApolloProvider>

  );
}

export default App;
