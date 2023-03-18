// Result.js
import React from 'react';
import { connect } from 'react-redux';
import {
  getStockTicker,
  getDays,
  getExitLvl,
  getCombinedProfit,
  getCostPerShares,
  getRORState,
  getBreakEven,
  getDownsideProtection,
  getAnnualizedROR,
} from '../../store/selectors';
import TradingViewWidget from '../TradingView';
import './styles.css';

const Result = ({
  stockTicker,
  days,
  exitLevel,
  combinedProfit,
  costPerShares,
  ror,
  breakEven,
  downsideProtection,
  annualizedROR,
}) => {
  return (
    <div className="result-container">
      <h2 className="result-title">Your Results</h2>
      <div className="result-grid">
        <div className="result-item">
          <span className="result-item-title">Stock Ticker</span>
          <span className="result-item-value">{stockTicker}</span>
        </div>
        <div className="result-item">
          <span className="result-item-title">Days</span>
          <span className="result-item-value">{days}</span>
        </div>
        <div className="result-item">
          <span className="result-item-title">Exit Level</span>
          <span className="result-item-value">{exitLevel}$</span>
        </div>
        <div className="result-item">
          <span className="result-item-title">
            Combined Net Credit / Profit
          </span>
          <span className="result-item-value">{combinedProfit}$</span>
        </div>
        <div className="result-item">
          <span className="result-item-title">Cost per 100 shares</span>
          <span className="result-item-value">{costPerShares}$</span>
        </div>
        <div className="result-item">
          <span className="result-item-title">ROR</span>
          <span className="result-item-value">{ror}$</span>
        </div>
        <div className="result-item">
          <span className="result-item-title">Downside protection</span>
          <span className="result-item-value">{downsideProtection}$</span>
        </div>
        <div className="result-item">
          <span className="result-item-title">Annualized ROR</span>
          <span className="result-item-value">{annualizedROR}$</span>
        </div>
        <div className="result-item">
          <span className="result-item-title">Break Even</span>
          <span className="result-item-value">{breakEven}$</span>
        </div>
      </div>
      <div className="tradingview-container">
        <h3 className="tradingview-title">TradingView Chart</h3>
        <TradingViewWidget stockTicker={stockTicker} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stockTicker: getStockTicker(state),
  days: getDays(state),
  exitLevel: getExitLvl(state),
  combinedProfit: getCombinedProfit(state),
  costPerShares: getCostPerShares(state),
  ror: getRORState(state),
  breakEven: getBreakEven(state),
  downsideProtection: getDownsideProtection(state),
  annualizedROR: getAnnualizedROR(state),
  // Add other input field selectors here
});

export default connect(mapStateToProps)(Result);
