import { takeEvery, select, call, put } from 'redux-saga/effects';

//export const getLatestRate = currency => fetch(`https://api.fixer.io/latest?base=${currency}`);

const fetchLatestConversionRates = function * fetchLatestConversionRates(action) {

    //try {
    //    let currency = action.currency;
    //    if (currency === undefined) {
    //        currency = yield select(state => state.currencies.baseCurrency)
    //    }
    //    const response = yield call(getLatestRate, currency);
    //    const result = yield response.json();
    //
    //    if (result.error) {
    //        yield put({type: CONVERSION_ERROR, error: result.error})
    //    } else {
    //        yield put({type: CONVERSION_RESULT, result})
    //    }
    //} catch (e) {
    //    yield put({type: CONVERSION_ERROR, error: e.message})
    //}
};

const root = function * rootSaga() {
    //yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
    //yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
    //yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
};

export default root;