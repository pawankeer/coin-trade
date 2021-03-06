import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AccountRow from './Account-row'

const Account = ({usd, btc, isEmpty}) => {
  return (
    <div>
      <div className='section-heading'>Account Balance</div>
      <div className='section-account-detail'>
        <AccountRow text='USD' value={isEmpty ? '0.00 [Account Empty]' : usd}/>
        <AccountRow text='BTC' value={btc}/>
      </div>
    </div>
  )
}

Account.propTypes = {
  usd: PropTypes.string.isRequired,
  btc: PropTypes.string.isRequired,
  isEmpty: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  usd: state.account.usd.toFixed(2),
  btc: state.account.btc.toFixed(8),
  isEmpty: state.account.isEmpty,
})

export default connect(mapStateToProps)(Account)