import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import CustomInput from '../CustomInput';
import Button from '../Button';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setStockTicker,
  setEntryDate,
  setUpdateDays,
  setExpirationDate,
  setExitLevel,
  setStockPrice,
  setCredit,
  setDividend,
  setCombinedProfit,
  setShortStrike,
  setCostPerShares,
  setROR,
  setBreakEven,
  setDownsideProtection,
  setAnnualizedROR,
} from '../../store/formatDataSlice';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  input1: yup.string().required('This field is required'),
  input2: yup.date().required('This field is required'),
  input3: yup.date().required('This field is required'),
  input4: yup.number().required('This field is required'),
  input5: yup.number().required('This field is required'),
  input6: yup.number().required('This field is required'),
  input7: yup.number().required('This field is required'),
  input8: yup.number().required('This field is required'),
  input9: yup.number().required('This field is required'),
});

const getTodayDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const dd = String(today.getDate()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd}`;
};

const MyForm = () => {
  const today = getTodayDate();
  const dispatch = useDispatch();
  const expirationDate = useSelector((state) => state.formData.expirationDate);
  const entryDate = useSelector((state) => state.formData.entryDate);
  const stockTicker = useSelector((state) => state.formData.stockTicker);
  const stockPrice = useSelector((state) => state.formData.stockPrice);
  const shortStrike = useSelector((state) => state.formData.shortStrike);
  const credit = useSelector((state) => state.formData.credit);
  const dividend = useSelector((state) => state.formData.dividend);
  const combinedProfit = useSelector((state) => state.formData.combinedProfit);
  const costPerShares = useSelector((state) => state.formData.costPerShares);
  const breakEven = useSelector((state) => state.formData.breakEven);
  const ror = useSelector((state) => state.formData.ror);
  const days = useSelector((state) => state.formData.days);

  const calculateDays = (entryDateString, expirationDateString) => {
    const entryDate = new Date(entryDateString);
    const expirationDate = new Date(expirationDateString);
    const oneDayMilliseconds = 1000 * 60 * 60 * 24;
    const days = (expirationDate - entryDate) / oneDayMilliseconds;
    return Math.ceil(days);
  };

  useEffect(() => {
    const days = calculateDays(entryDate, expirationDate);
    if (!isNaN(days) && days >= 0) {
      dispatch(setUpdateDays(days));
    }
  }, [entryDate, expirationDate, dispatch]);

  useEffect(() => {
    if (!isNaN(stockPrice)) {
      const stockExitLevel = parseFloat(stockPrice * 0.92).toFixed(2);
      dispatch(setExitLevel(stockExitLevel));
    }
  }, [stockPrice, setExitLevel]);

  useEffect(() => {
    // if (!isNaN(stockPrice)) {
    const costPerShares = parseFloat(stockPrice - credit) * 100;
    dispatch(setCostPerShares(costPerShares));
    // }
  }, [stockPrice, setCostPerShares, credit]);

  useEffect(() => {
    // if (!isNaN(stockPrice)) {
    const combinedNet =
      parseFloat(credit) +
      parseFloat(dividend) -
      (parseFloat(stockPrice) - parseFloat(shortStrike));

    dispatch(setCombinedProfit(combinedNet));
    // }
  }, [shortStrike, dividend, credit, setCombinedProfit]);

  useEffect(() => {
    // if (ror > 0 && days > 0 && !isNaN(ror)) {
    const annualizedRORData = parseFloat(ror / days).toFixed(2);
    dispatch(setAnnualizedROR(annualizedRORData));
    // }
  }, [ror, days, setAnnualizedROR]);

  useEffect(() => {
    // if (combinedProfit > 0 && !isNaN(combinedProfit)) {
    const breakEvenData = parseFloat(stockPrice - (credit - dividend));
    dispatch(setBreakEven(breakEvenData));
    // }
  }, [stockPrice, credit, dividend, setBreakEven]);

  useEffect(() => {
    if (breakEven > 0 && !isNaN(breakEven)) {
      const downsideProtectionData = parseFloat(
        breakEven / stockPrice - 1
      ).toFixed(2);
      dispatch(setDownsideProtection(downsideProtectionData));
    }
  }, [breakEven, stockPrice, setDownsideProtection]);

  useEffect(() => {
    // if (breakEven > 0 && !isNaN(breakEven)) {
    const rorData = parseFloat((combinedProfit * 100) / costPerShares).toFixed(
      2
    );
    dispatch(setROR(rorData));
    // }
  }, [breakEven, stockPrice, setDownsideProtection]);

  const handleSetCredit = (e) => {
    dispatch(setCredit(e.target.value));
  };

  const handleSetDividend = (e) => {
    dispatch(setDividend(e.target.value));
  };
  // const handleSetExitLevel = useCallback(() => {
  //   console.log(stockPrice*0.92)
  //   dispatch(setExitLevel(Number(stockPrice) * 0.92));
  // },[dispatch, stockPrice])

  const handleStockTickerChange = (e) => {
    dispatch(setStockTicker(e.target.value));
  };

  const handleEntryDateChange = (e) => {
    dispatch(setEntryDate(e.target.value));
  };

  const handleDaysChange = (e) => {
    dispatch(setUpdateDays(e.target.value));
  };

  const handleExpirationDateChange = (e) => {
    dispatch(setExpirationDate(e.target.value));
  };

  const handleStockPriceChange = (e) => {
    dispatch(setStockPrice(Number(e.target.value)));
  };

  const handleShortStrikeChange = (e) => {
    dispatch(setShortStrike(Number(e.target.value)));
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
  };

  return (
    <div>
      <h1>Form Example</h1>
      <Formik
        initialValues={{
          input1: 'AAPL',
          input2: today,
          input3: '',
          input4: '',
          stockPrice: '',
          input6: '',
          input7: '',
          input8: '',
        }}
        validationSchema={validationSchema}
        // validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-grid">
              <Field
                component={CustomInput}
                placeholder="e.g AAPL"
                name="stockTicker"
                label="Enter stock/ticker"
                value={stockTicker}
                onChange={handleStockTickerChange}
              />
              <Field
                component={CustomInput}
                type="date"
                name="entryDate"
                label="Entry date"
                value={entryDate}
                onChange={handleEntryDateChange}
              />
              <Field
                component={CustomInput}
                type="date"
                name="expirationDate"
                label="Expiration date"
                onChange={handleExpirationDateChange}
              />
              <Field
                component={CustomInput}
                type="number"
                name="days"
                label="Days"
                onChange={handleDaysChange}
              />
              <Field
                component={CustomInput}
                type="number"
                name="stockPrice"
                label="Stock Price"
                onChange={handleStockPriceChange}
              />
              <Field
                component={CustomInput}
                type="number"
                name="shortStrike"
                label="Short strike"
                onChange={handleShortStrikeChange}
              />
              <Field
                component={CustomInput}
                placeholder="e.g AAPL"
                label="Credit"
                onChange={handleSetCredit}
              />
              <Field
                component={CustomInput}
                placeholder="e.g AAPL"
                label="Dividend"
                onChange={handleSetDividend}
              />
            </div>
            <div className="button-container">
              <Button type="submit" title="Calculate" disabled={isSubmitting} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
