var site = {
  name: "localbitcoins.com",
  root: "https://localbitcoins.com"
};
var tokens = {
  access_token: "268403ff995ba2448a9b5e758bacb09de6d8f877",
  expires_in: "31535999",
  refresh_token: "a049036c4d7aaece1b7fd197143e0428d2d2ce1f",
  scope: "read"
};
var clientID = "bf4786cc3d61c977a00d",
clientSecret = "278240b45e3ff14a7d972b3055224a5f67feaed7";

LocalBitcoins = function(){
}

LocalBitcoins.prototype.request_post = function(path, extra_data, success_callback) {
  var form = extra_data;
  form.access_token = tokens.access_token;

  post(path, form, function(data) {
    success_callback(data, true);
  }, function (xhr, ajaxOptions, thrownError) {
    success_callback(xhr.responseText, false);
  })
}

LocalBitcoins.prototype.request_get = function(path, extra_data, success_callback) {
  ajax({
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
}

LocalBitcoins.prototype.login = function(username, password, success, error) {
  var data = {
    client_id: clientID,
    client_secret: clientSecret,
    grant_type: "password",
    username: username,
    password: password
  }
  post("/oauth2/access_token/", data, success, error)
}

function post(path, data, success, error){
  ajax({
    dataType: "json",
    type: 'POST',
    url: site.root + path,
    data: data,
    success: success,
    error: error
  })
}

LocalBitcoins.prototype.ajax = ajax

function ajax(xhrParams) { $.ajax(xhrParams) }

