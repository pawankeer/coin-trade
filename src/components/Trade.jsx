import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import asyncActions from '../async-actions'
import actions from '../actions'
import TradeRow from './Trade-row'

const {fetchBTCRate} = asyncActions
const {updateBTCAmount} = actions

const Trade = ({resetUSDAmount, rate, loading, btcValue, fetchBTCRate, updateBTCAmount}) => {
  if (!rate && !loading) {
    fetchBTCRate()
  }
  return (
    <div>
      <div className='section-heading'>Trade</div>
      <TradeRow value='USD' readonly='true'/>
      <TradeRow placeholder='Enter your amount' onchange={updateBTCAmount} type='number'
                clearInput={resetUSDAmount} readonly={loading ? 'true' : undefined}/>
      <div className='section-heading'>For</div>
      <TradeRow value='BTC' readonly='true'/>
      <TradeRow value={btcValue} placeholder='Display Quote' readonly='true'/>
    </div>
  )
}

Trade.propTypes = {
  resetUSDAmount: PropTypes.bool.isRequired,
  btcValue: PropTypes.string,
  rate: PropTypes.number,
  loading: PropTypes.bool.isRequired,
  fetchBTCRate: PropTypes.func.isRequired,
  updateBTCAmount: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  resetUSDAmount: !state.btcTrade.inputAmount && !state.account.notEnoughBalanceError,
  btcValue: state.btcTrade.btc ? state.btcTrade.btc.toFixed(8) : '',
  rate: state.btcTrade.rate,
  loading: state.btcTrade.loading,
})

const mapDispatchToProps = dispatch => ({
  fetchBTCRate: () => dispatch(fetchBTCRate()),
  updateBTCAmount: inputAmount => dispatch(updateBTCAmount(inputAmount)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Trade)
