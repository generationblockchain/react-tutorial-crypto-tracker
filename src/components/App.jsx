import React from 'react';

import Data from '../data.json';

class App extends React.Component {
  state = {
    favourites: ['ethereum', 'stellar', 'bitcoin', 'ripple', 'monero']
  };

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
              {this.state.favourites
                .map(favourite => Data.find(coin => coin.id === favourite))
                .map(coin => (
                  <li key={coin.id} className="coin-item">
                    <div className="coin-image">
                      <div className="coin-remove" />
                      <img
                        alt={coin.name}
                        src={require(`cryptocurrency-icons/dist/svg/color/${
                          coin.symbol
                        }.svg`)}
                      />
                    </div>
                    <div className="coin-name">
                      <p>{coin.name}</p>
                    </div>
                    <div className="coin-info">
                      <h4>${coin.price_usd}</h4>
                      <p>{coin.price_btc}</p>
                    </div>
                    <div className="coin-rank">
                      <p>#{coin.rank}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </section>

        <section>
          <h3 className="coin-available">Available Cryptocurrencies</h3>

          <div className="container">
            <div className="row">
              {Data.filter(
                coin => !this.state.favourites.includes(coin.id)
              ).map(coin => (
                <div key={coin.id} className="coin-select col-md-1">
                  <img
                    alt={coin.name}
                    src={require(`cryptocurrency-icons/dist/svg/color/${
                      coin.symbol
                    }.svg`)}
                  />
                  <p>{coin.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
