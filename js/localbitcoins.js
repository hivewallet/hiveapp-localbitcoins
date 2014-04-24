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

LocalBitcoins = function(){
}

LocalBitcoins.prototype.request_post = function(url_string, extra_data, success_callback) {
  var form = extra_data;
  form.access_token = tokens.access_token;

  ajax({
    dataType: "json",
    type: 'POST',
    async: false,
    url: site.root + url_string,
    data: form,
    success: function(data) {
      success_callback(data, true);
    },
    error: function (xhr, ajaxOptions, thrownError) {
      success_callback(xhr.responseText, false);
    }
  });
}

LocalBitcoins.prototype.request_get = function (url_string, extra_data, success_callback) {
  ajax({
    dataType: "json",
    type: 'GET',
    url: site.root + url_string,
    data: extra_data,
    success: function(data) {
      success_callback(data,true);
    },
    error: function (xhr, ajaxOptions, thrownError) {
      success_callback(xhr.responseText,false);
    }
  });
}

LocalBitcoins.prototype.ajax = ajax

function ajax(xhrParams) { $.ajax(xhrParams) }

