
import React, { useEffect, useRef } from 'react';
import { getStockTicker } from '../../store/selectors';
import { connect, useSelector } from 'react-redux'


let tvScriptLoadingPromise;

const TradingViewWidget = () => {
  const onLoadScriptRef = useRef();
  const stockTicker = useSelector(getStockTicker);

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;
      function createWidget() {
        if (document.getElementById('tradingview_215b4') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: stockTicker,
            interval: "W",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            withdateranges: true,
            hide_side_toolbar: false,
            allow_symbol_change: true,
            details: true,
            hotlist: true,
            container_id: "tradingview_215b4"
          });
        }
      }
    },
    [stockTicker]
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_215b4' />
    </div>
  );
}

const mapStateToProps = (state) => ({
  stockTicker: getStockTicker(state),
});

export default connect(mapStateToProps)(TradingViewWidget);
