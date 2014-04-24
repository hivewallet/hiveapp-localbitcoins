/*
 * Hive App API mock https://github.com/javgh/hiveapp-api-mock
 *
 * Licensed under the MIT License.
 *
 * v1.0.1
 */

var bitcoin = bitcoin || mockBitcoin()

function mockBitcoin() {
  var _BTC_IN_SATOSHI = 100000000;
  var _MBTC_IN_SATOSHI = 100000;
  var _UBTC_IN_SATOSHI = 100;
  var userAddress = 'poqjer23rfc234laq';
  var transactions = [];
  var exchangeRateListeners = [];
  var bitcoinFormatToSatoshi = {
    BTC: _BTC_IN_SATOSHI,
    mBTC: _MBTC_IN_SATOSHI,
    µBTC: _UBTC_IN_SATOSHI
  }
  var preferredBitcoinFormat = 'mBTC';
  var preferredCurrency = 'USD';
  var locale = navigator.language;

  function async(fn) { setTimeout(fn, 0) }
  function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      throw new Error('CORS not supported');
    }
    return xhr;
  }

  function ajax(url, options) {
    options = options || {}
    options.type = options.type || "GET"
    options.dataType = options.dataType || "json"
    options.success = options.success || function(){}
    options.failure = options.failure || function(){}
    options.complete = options.complete ||  function(){}

    var xhr = createCORSRequest(options.type, url)
    xhr.responseType = options.dataType

    xhr.onload = function(event) {
      options.success(xhr.response, xhr.status)
    };

    xhr.onerror = function(event) {
      options.error(xhr.response, xhr.status, xhr.statusText)
    };

    xhr.onloadend = function(event) {
      options.complete(xhr.response, xhr.status, xhr.statusText)
    };

    var data = new FormData();
    if(options.data) {
      for(var key in options.data) {
        data.append(key, options.data[key])
      }
    }
    xhr.send(data);
  }

  return {
    BTC_IN_SATOSHI: _BTC_IN_SATOSHI,
    MBTC_IN_SATOSHI: _MBTC_IN_SATOSHI,
    UBTC_IN_SATOSHI: _UBTC_IN_SATOSHI,

    TX_TYPE_INCOMING: "incoming",
    TX_TYPE_OUTGOING: "outgoing",

    sendMoney: function(address, amount, callback){
      if (!address) { throw "address argument is undefined" }

      var result = prompt("Send bitcoins to " + address + ": ", amount);

      if (callback) {
        if (result) {
          var txid = transactions.length + "";

          transactions.push({
            id: txid,
            amount: amount,
            type: bitcoin.TX_TYPE_OUTGOING,
            timestamp: new Date().toISOString(),
            inputAddresses: [userAddress],
            outputAddresses: [address]
          });

          async(function() { callback(true, txid) } )
        } else {
          async(function() { callback(false) } )
        }
      }
    },

    getTransaction: function(id, callback){
      if (!id || !callback){ throw "id and callback are required" }

      var tx = transactions.filter(function(t){ return t.id == id })[0]
      async(function(){ callback(tx) })
    },

    getSystemInfo: function(callback){
      if (!callback){
        throw "callback is undefined";
      }
      async(function(){
        callback({
          version: "0.9",
          buildNumber: "2013120901",
          decimalSeparator: (0.1).toLocaleString().substring(1, 2),
          locale: locale,
          preferredCurrency: "USD",
          preferredBitcoinFormat: preferredBitcoinFormat
        })
      })
    },

    addExchangeRateListener: function(callback) {
      if (!callback){ throw "callback is required" }

      exchangeRateListeners.push(callback)
    },

    removeExchangeRateListener: function(callback) {
      if (!callback){ throw "callback is required" }

      exchangeRateListeners.splice(exchangeRateListeners.indexOf(callback), 1)
    },

    updateExchangeRate: function(currency) {
      exchangeRateListeners.forEach(function(fn){
        fn(currency, Number((Math.random() * 1000).toFixed(2)))
      })
    },

    getUserInfo: function(callback){
      if (!callback){
        throw "callback is required";
      }
      async(function(){
        callback({
          firstName: 'Homer',
          lastName:  'Simpson',
          email:     'homer@fake.com',
          address:   userAddress
        })
      })
    },

    makeRequest: function(endpoint, args){
      var url = endpoint.replace(/http[s]?:\/\//gi, "http://www.corsproxy.com/");
      ajax(url, args)
    },

    userStringForSatoshi: function(satoshiAmount) {
      var amount = satoshiAmount / bitcoinFormatToSatoshi[preferredBitcoinFormat]
      return amount.toLocaleString()
    },

    satoshiFromUserString: function(formattedAmount) {
      var floatValue = bitcoin.valueFromUserString(formattedAmount)
      return floatValue * bitcoinFormatToSatoshi[preferredBitcoinFormat]
    },

    userStringForCurrencyValue: function(amount, currency) {
      currency = currency || preferredCurrency
      var maximumFractionDigits = currency == 'JPY' ? 0 : 2
      return parseFloat(amount.toFixed(maximumFractionDigits)).toLocaleString()
    },

    valueFromUserString: function(formattedAmount) {
      var thousandsSeparator = (1000).toLocaleString().substring(1, 2)
      return parseFloat(formattedAmount.replace(thousandsSeparator, ''))
    }
  };
}

