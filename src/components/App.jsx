import React from 'react';

class App extends React.Component {
  render() {
    return (
      <main>
        <section className="jumbotron">
          <h1 className="jumbotron-heading">GenB Crypto Tracker</h1>

          <p className="lead text-muted">
            Track your favourite cryptocurrencies
          </p>

          <div className="row">
            <ul>
              <li className="coin-item">
                <div className="coin-image">
                  <div className="coin-remove" />
                  <img
                    alt="Bitcoin"
                    src={require(`cryptocurrency-icons/dist/svg/color/btc.svg`)}
                  />
                </div>
                <div className="coin-name">
                  <p>Bitcoin</p>
                </div>
                <div className="coin-info">
                  <h4>$5364.12</h4>
                  <p>1.0</p>
                </div>
                <div className="coin-rank">
                  <p>#1</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="coin-available">Available Cryptocurrencies</h3>

          <div className="container">
            <div className="row">
              <div className="coin-select col-md-1">
                <img
                  alt="Ethereum"
                  src={require(`cryptocurrency-icons/dist/svg/color/eth.svg`)}
                />
                <p>Etheruem</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
