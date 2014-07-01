var site = {
  name: "localbitcoins.com",
  root: "https://localbitcoins.com"
};

var tokens = {
  clientID: "8d56ad847955f100fe67"
};

var apiPaths = {
  payment_methods: '/api/payment_methods/',
  country_codes: '/api/countrycodes/',
  places: '/api/places/',
  ads: '/api/ads/',
  escrows: '/api/escrows/',
  myself: '/api/myself/',
  ticker: '/bitcoinaverage/ticker-all-currencies/'
};

var postEndpoints = ['myself', 'ads', 'escrows'];
var getEndpoints = ['payment_methods', 'ticker'];

LocalBitcoins = function() {};

LocalBitcoins.prototype.request_post = function(path, extra_data, success_callback) {
  var form = extra_data;
  form.access_token = tokens.accessToken;

  post.call(this, path, form, function(data) {
    success_callback(data, true);
  }, function (xhr, ajaxOptions, thrownError) {
    success_callback(xhr.responseText, false);
  });
}

LocalBitcoins.prototype.request_get = function(path, extra_data, success_callback) {
  this.ajax({
    dataType: "json",
    type: 'GET',
    url: site.root + path,
    data: extra_data,
    success: function(data) {
      success_callback(data,true);
    },
    error: function (xhr, ajaxOptions, thrownError) {
      success_callback(xhr.responseText,false);
    }
  });
};

LocalBitcoins.prototype.login = function(username, password, success, error) {
  window.location = 'https://localbitcoins.com/oauth2/authorize/' +
    '?response_type=token' +
    '&client_id=' + tokens.clientID +
    '&redirect_uri=' + encodeURIComponent(location.origin + location.pathname);
};

LocalBitcoins.prototype.trades = function(currency, callback) {
  this.request_get('/bitcoincharts/' + currency + '/trades.json', {}, callback);
};

LocalBitcoins.prototype.account = function(gtu, callback) {
  this.request_get('/api/account_info/' + gtu + '/', {}, callback);
};

postEndpoints.forEach(function(method) {
  LocalBitcoins.prototype[method] = function(callback) {
    this.request_post(apiPaths[method], {}, callback);
  };
});

getEndpoints.forEach(function(method) {
  LocalBitcoins.prototype[method] = function(callback) {
    this.request_get(apiPaths[method], {}, callback);
  };
});

function post(path, data, success, error) {
  this.ajax({
    dataType: "json",
    type: 'POST',
    url: site.root + path,
    data: data,
    success: success,
    error: error
  });
}

LocalBitcoins.prototype.ajax = ajax;

function ajax(xhrParams) {
  $.ajax(xhrParams)
}
