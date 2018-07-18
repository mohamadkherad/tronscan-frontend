import React, {Component} from 'react';
import {connect} from "react-redux";
import {injectIntl} from "react-intl";
import {doSearch, getSearchType} from "../services/search";
import {clearConstellations, constellationPreset} from "../lib/constellation/constellation";
import CountUp from 'react-countup';
import {Client} from "../services/api";
import {Link} from "react-router-dom";
import {TRXPrice} from "./common/Price";
import RecentBlocks from "./Home/RecentBlocks";
import {KEY_ENTER} from "../utils/constants";
import {withTimers} from "./utils/timing";
import RecentTransfers from "./Home/RecentTransfers";
import {tu} from "../utils/i18n";
import {toastr} from "react-redux-toastr";
import {HrefLink} from "./common/Links";
import {TronLoader} from "./common/loaders";
import {LineReactAdd, LineReactTx} from "./common/LineChartTx";
import {ONE_TRX} from "../constants";
import xhr from "axios/index";
import {FormattedDate, FormattedNumber, FormattedRelative, FormattedTime} from "react-intl";

const subDays = require("date-fns/sub_days");

class Demo extends Component {

  constructor() {
    super();
    this.state = {
      volume: 0,
      previousVolume: 0,
      totalAccounts: 0,
      previousTotalAccounts: 0,
      transactionLastDay: 0,
      previousTransactionLastDay: 0,
      txOverviewStats: null,
    };
  }

  async load() {


    /* let {total: totalTransactions} = await Client.getTransfers({
       limit: 1,
       date_start: subDays(new Date(), 1),
     });
    */


    let vol = await xhr.get("https://min-api.cryptocompare.com/data/exchange/histoday?fsym=TRX&tsym=USD&limit=1");

    let volume = vol.data['Data'][1].volume;


    let totalAccounts = await Client.getAccounts();

    let {txOverviewStats} = await Client.getTxOverviewStats();

    let temp = [];

    for (let txs in txOverviewStats) {
      let tx = parseInt(txs);
      if (tx === 0) {
        temp.push(txOverviewStats[tx]);
      }
      else {
        temp.push({
          date: txOverviewStats[tx].date,
          totalTransaction: (txOverviewStats[tx].totalTransaction - txOverviewStats[tx - 1].totalTransaction),
          avgBlockTime: txOverviewStats[tx].avgBlockTime,
          avgBlockSize: txOverviewStats[tx].avgBlockSize,
          totalBlockCount: (txOverviewStats[tx].totalBlockCount - txOverviewStats[tx - 1].totalBlockCount),
          newAddressSeen: txOverviewStats[tx].newAddressSeen
        });

      }
    }


    this.setState(prevState => ({
      volume: volume,
      previousVolume: prevState.volume,
      // totalAccounts: totalAccounts.total,
      transactionLastDay: temp[temp.length - 1].totalTransaction,
      previousTransactionLastDay: prevState.transactionLastDay,
      txOverviewStats: temp
    }));

  }

  async loadAccount() {
    let totalAccounts = await Client.getAccounts();
    this.setState(prevState => ({
      totalAccounts: totalAccounts.total,
      previousTotalAccounts: prevState.totalAccounts,
    }));
    
  }

  componentDidMount() {
    // constellationPreset(this.$ref, "Hot Sparks");
    this.load();
    this.loadAccount();
    this.props.setInterval(() => {
      this.load();
    }, 3600000);
    this.props.setInterval(() => {
      this.loadAccount();
    }, 10000);
  }

  componentWillUnmount() {
    //clearConstellations();
  }


  render() {
    console.log('render');
    let {intl} = this.props;
    let {txOverviewStats, volume, totalAccounts, transactionLastDay, previousVolume, previousTotalAccounts, previousTransactionLastDay} = this.state;
    document.getElementsByTagName('body')[0].style.height = '95%';
    let height = window.innerHeight * 0.65;
    let width = window.innerWidth;
    return (
        <main className="home pb-0">


          <div className="pb-5 mt-5">
            <div className="container-fluid" style={{paddingLeft: '5%', paddingRight: '5%'}}>


              <div className="row" style={{height: '150px'}}>
                <div className="col-md-4 mt-3 mt-md-0">
                  <div className="card h-100 widget-icon">

                    <div className="card-body" style={{lineHeight: '50px', display: 'flex'}}>
                      <img src={require("../images/icon1.png")} style={{
                        float: 'left',
                        width: '100px',
                        height: '100px',
                        float: 'left',
                        marginTop: '5px',
                        marginRight: '20px',
                        marginLeft: '10px'
                      }}/>
                      <div>
                        <strong style={{whiteSpace: 'nowrap'}}>TRON Transactions Last Day</strong>
                        <h1 className="text-danger">
                          <FormattedNumber value={transactionLastDay}/>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-3 mt-md-0">
                  <div className="card h-100 widget-icon">

                    <div className="card-body" style={{lineHeight: '50px', display: 'flex'}}>
                      <img src={require("../images/icon2.png")} style={{
                        float: 'left',
                        width: '100px',
                        height: '100px',
                        float: 'left',
                        marginTop: '5px',
                        marginRight: '20px',
                        marginLeft: '10px'
                      }}/>
                      <div>
                        <strong style={{whiteSpace: 'nowrap'}}>Total Accounts</strong>
                        <h1 className="text-danger">
                          {/* <FormattedNumber value={totalAccounts}/> */}
                          <CountUp redraw={true} separator="," start={previousTotalAccounts} end={totalAccounts} duration={1}/>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-3 mt-md-0">
                  <div className="card h-100 widget-icon">

                    <div className="card-body" style={{lineHeight: '50px', display: 'flex'}}>
                      <img src={require("../images/icon3.png")} style={{
                        float: 'left',
                        width: '100px',
                        height: '100px',
                        float: 'left',
                        marginTop: '5px',
                        marginRight: '20px',
                        marginLeft: '10px'
                      }}/>
                      <div>
                        <strong style={{whiteSpace: 'nowrap'}}>Volume Last Day（$）</strong>
                        <h1 className="text-danger">
                          <FormattedNumber maximumFractionDigits={0} minimunFractionDigits={0} value={volume}/>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="row mt-4">
                <div className="col-md-12 mt-3 mt-md-0 ">
                  <div className="card">

                    <div className="card-body">

                      <div style={{height: height}}>
                        {
                          txOverviewStats === null ?
                              <TronLoader/> :
                              <LineReactTx style={{height: height}} data={txOverviewStats} intl={intl} source='home'/>
                        }
                      </div>

                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>


        </main>
    )
  }
}

const  countUpProps = {
  redraw:true
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {};


export default connect(mapStateToProps, mapDispatchToProps)(withTimers(injectIntl(Demo)))
