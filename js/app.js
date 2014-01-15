jQuery(document).ready(function(){
    InitLocalization();
    //InitLocalbitcoins();
});

var POVIDER_ONLINE = [];
var EXCHENGE_BTN = [];
var HOMEPAGE_DATA = [];
var COUNTRY_CODES = [
  "", "AP", "EU", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ",
  "AR", "AS", "AT", "AU", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH",
  "BI", "BJ", "BM", "BN", "BO", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA",
  "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU",
  "CV", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG",
  "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "FX", "GA", "GB",
  "GD", "GE", "GF", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT",
  "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN",
  "IO", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM",
  "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS",
  "LT", "LU", "LV", "LY", "MA", "MC", "MD", "MG", "MH", "MK", "ML", "MM", "MN",
  "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA",
  "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA",
  "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY",
  "QA", "RE", "RO", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI",
  "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "SZ", "TC", "TD",
  "TF", "TG", "TH", "TJ", "TK", "TM", "TN", "TO", "TL", "TR", "TT", "TV", "TW",
  "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN",
  "VU", "WF", "WS", "YE", "YT", "RS", "ZA", "ZM", "ME", "ZW", "A1", "A2", "O1",
  "AX", "GG", "IM", "JE", "BL", "MF"
    ];

var COUNTRY_NAMES = [
    "", "Asia/Pacific Region", "Europe", "Andorra", "United Arab Emirates",
    "Afghanistan", "Antigua and Barbuda", "Anguilla", "Albania", "Armenia",
    "Netherlands Antilles", "Angola", "Antarctica", "Argentina", "American Samoa",
    "Austria", "Australia", "Aruba", "Azerbaijan", "Bosnia and Herzegovina",
    "Barbados", "Bangladesh", "Belgium", "Burkina Faso", "Bulgaria", "Bahrain",
    "Burundi", "Benin", "Bermuda", "Brunei Darussalam", "Bolivia", "Brazil",
    "Bahamas", "Bhutan", "Bouvet Island", "Botswana", "Belarus", "Belize",
    "Canada", "Cocos (Keeling) Islands", "Congo, The Democratic Republic of the",
    "Central African Republic", "Congo", "Switzerland", "Cote D'Ivoire", "Cook Islands",
    "Chile", "Cameroon", "China", "Colombia", "Costa Rica", "Cuba", "Cape Verde",
    "Christmas Island", "Cyprus", "Czech Republic", "Germany", "Djibouti",
    "Denmark", "Dominica", "Dominican Republic", "Algeria", "Ecuador", "Estonia",
    "Egypt", "Western Sahara", "Eritrea", "Spain", "Ethiopia", "Finland", "Fiji",
    "Falkland Islands (Malvinas)", "Micronesia, Federated States of", "Faroe Islands",
    "France", "France, Metropolitan", "Gabon", "United Kingdom",
    "Grenada", "Georgia", "French Guiana", "Ghana", "Gibraltar", "Greenland",
    "Gambia", "Guinea", "Guadeloupe", "Equatorial Guinea", "Greece", "South Georgia and the South Sandwich Islands",
    "Guatemala", "Guam", "Guinea-Bissau",
    "Guyana", "Hong Kong", "Heard Island and McDonald Islands", "Honduras",
    "Croatia", "Haiti", "Hungary", "Indonesia", "Ireland", "Israel", "India",
    "British Indian Ocean Territory", "Iraq", "Iran, Islamic Republic of",
    "Iceland", "Italy", "Jamaica", "Jordan", "Japan", "Kenya", "Kyrgyzstan",
    "Cambodia", "Kiribati", "Comoros", "Saint Kitts and Nevis", "Korea, Democratic People's Republic of",
    "Korea, Republic of", "Kuwait", "Cayman Islands",
    "Kazakstan", "Lao People's Democratic Republic", "Lebanon", "Saint Lucia",
    "Liechtenstein", "Sri Lanka", "Liberia", "Lesotho", "Lithuania", "Luxembourg",
    "Latvia", "Libyan Arab Jamahiriya", "Morocco", "Monaco", "Moldova, Republic of",
    "Madagascar", "Marshall Islands", "Macedonia",
    "Mali", "Myanmar", "Mongolia", "Macau", "Northern Mariana Islands",
    "Martinique", "Mauritania", "Montserrat", "Malta", "Mauritius", "Maldives",
    "Malawi", "Mexico", "Malaysia", "Mozambique", "Namibia", "New Caledonia",
    "Niger", "Norfolk Island", "Nigeria", "Nicaragua", "Netherlands", "Norway",
    "Nepal", "Nauru", "Niue", "New Zealand", "Oman", "Panama", "Peru", "French Polynesia",
    "Papua New Guinea", "Philippines", "Pakistan", "Poland", "Saint Pierre and Miquelon",
    "Pitcairn Islands", "Puerto Rico", "Palestinian Territory",
    "Portugal", "Palau", "Paraguay", "Qatar", "Reunion", "Romania",
    "Russian Federation", "Rwanda", "Saudi Arabia", "Solomon Islands",
    "Seychelles", "Sudan", "Sweden", "Singapore", "Saint Helena", "Slovenia",
    "Svalbard and Jan Mayen", "Slovakia", "Sierra Leone", "San Marino", "Senegal",
    "Somalia", "Suriname", "Sao Tome and Principe", "El Salvador", "Syrian Arab Republic",
    "Swaziland", "Turks and Caicos Islands", "Chad", "French Southern Territories",
    "Togo", "Thailand", "Tajikistan", "Tokelau", "Turkmenistan",
    "Tunisia", "Tonga", "Timor-Leste", "Turkey", "Trinidad and Tobago", "Tuvalu",
    "Taiwan", "Tanzania, United Republic of", "Ukraine",
    "Uganda", "United States Minor Outlying Islands", "United States", "Uruguay",
    "Uzbekistan", "Holy See (Vatican City State)", "Saint Vincent and the Grenadines",
    "Venezuela", "Virgin Islands, British", "Virgin Islands, U.S.",
    "Vietnam", "Vanuatu", "Wallis and Futuna", "Samoa", "Yemen", "Mayotte",
    "Serbia", "South Africa", "Zambia", "Montenegro", "Zimbabwe",
    "Anonymous Proxy","Satellite Provider","Other",
    "Aland Islands","Guernsey","Isle of Man","Jersey","Saint Barthelemy","Saint Martin"
    ];

var clientID = "bf4786cc3d61c977a00d",
clientSecret = "278240b45e3ff14a7d972b3055224a5f67feaed7";

var logged = false;

var site = {
  name: "localbitcoins.com",
  root: "https://localbitcoins.com"
};

var sCountryCode = "pl";

var locationInfo =
{
    countryCode: 'pl',
    countryName: 'Poland',
    cityName: 'Warsaw',
    lat: 51.028515,
    lon: 16.966439,
    locationId: '',
    locationSlug: ''
}

var apiUrl =
{
  payment_methods: '/api/payment_methods/',
  country_codes: '/api/countrycodes/',
  places: '/api/places/',
  ads: '/api/ads/',
  escrows: '/api/escrows/',
  myself: '/api/myself/'
}

var tokens = {
    access_token: "268403ff995ba2448a9b5e758bacb09de6d8f877",
    expires_in: "31535999",
    refresh_token: "a049036c4d7aaece1b7fd197143e0428d2d2ce1f",
    scope: "read"
};


function request_post_ex(url_string,extra_data,success_callback)
{
    var form = extra_data;
    form.access_token = tokens.access_token;

    jQuery.ajax(
        {
            dataType: "json",
            type: 'POST',
            async:false,
            url:url_string,
            data:form,
            success:function(data)
            {
                success_callback(data,true);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                success_callback(xhr.responseText,false);
            }
        }
    );
}


function request_post(url_string,extra_data,success_callback)
{
    request_post_ex(site.root + url_string,extra_data,success_callback);
}

function request_get_ex(url_string,extra_data,success_callback)
{
    jQuery.ajax(
            {
                dataType: "json",
                type: 'GET',
                async:false,
                url:url_string,
                data:extra_data,
                success:function(data)
                {
                    success_callback(data,true);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    success_callback(xhr.responseText,false);
                }
            }
        );
    }

function request_get(url_string,extra_data,success_callback)
{
    request_get_ex(site.root + url_string,extra_data,success_callback);
}

function updateInfo(val,own)
{
    var json = parseInt(val);

    json = HOMEPAGE_DATA[json];

    jQuery('#info-price').html(json.temp_price+' '+json.currency);

    if(own)
        jQuery('#info-info-equation').html(json.price_equation);
    else
        jQuery('#info-info-equation').html('-');

    if(json.online_provider != null)
        jQuery('#info-payment').html(POVIDER_ONLINE[json.online_provider][0]);
    else
        jQuery('#info-payment').html('-');

    jQuery('#info-user').html(json.profile.name);
    jQuery('#info-limits').html(corect_trade_limits(json.min_amount,json.max_amount));
    jQuery('#info-location').html(json.location_string);
    jQuery('#info-user-short').html(json.profile.username);
}

function updateEditInfo(val_id)
{
    $('.alert').hide();

    var json = HOMEPAGE_DATA[val_id];

    jQuery('#edit-info-equation').val(json.price_equation);
    jQuery('#edit-info-price').html(json.temp_price+' '+json.currency);

    if(json.online_provider != null)
        jQuery('#edit-info-payment').html(POVIDER_ONLINE[json.online_provider][0]);
    else
        jQuery('#edit-info-payment').html('-');

    if(json.visible)
        $('#edit-info-visible option:eq(1)').prop('selected', true);

    jQuery('#edit-info-user').html(json.profile.name);
    jQuery('#edit-info-min').val(corect_value(json.min_amount));
    jQuery('#edit-info-max').val(corect_value(json.max_amount));
    jQuery('#edit-info-location').html(json.location_string);
    jQuery('#edit-info-user-short').html(json.profile.username);

    jQuery('.save-info-btn').attr('id','sib-'+val_id);

    $('.save-info-btn').unbind('click');
    $('.save-info-btn').bind('click',function() {

        $('.alert').hide();

        var gtu = $(this).attr('id').substring(4);

        request_post('/api/ad/'+gtu+'/',{
            visible:($('#edit-info-visible').val()=='true'),

            min_amount:corect_number(jQuery('#edit-info-min').val()),
            max_amount:corect_number(jQuery('#edit-info-max').val()),
            price_equation:jQuery('#edit-info-equation').val()
        },function(data,isError)
        {

            if(isError)
            {
                $("#edit-info-success").show().html(data.data.message);

            }else{

                var json = jQuery.parseJSON(data);

                var sErrolList = "";

                $.each(json.error.errors, function( key, val ) {
                    sErrolList += "<div>"+key+":"+val+"</div>";
                });

                $("#edit-info-error").show().html(sErrolList);

            }

        });

    });

}

function updateGraph(value)
{

    var json = EXCHENGE_BTN[value][1];

    commonTestData = [];

    var iCounter = 0;

    if(json.avg_1h!=null)
        commonTestData[iCounter++] =  [json.avg_1h, {label: '1h', color: '#E57536'}];

    if(json.avg_3h!=null)
        commonTestData[iCounter++] =  [json.avg_3h, {label: '3h', color: '#82293B'}];

    if(json.avg_12h!=null)
        commonTestData[iCounter++] =  [json.avg_12h, {label: '12h', color: '#FFBE33'}];

    if(json.avg_24h!=null)
        commonTestData[iCounter++] =  [json.avg_24h, {label: '24h', color: '#476FB2'}];

    $('#defaults-graph').tufteBar({
      data: commonTestData,
      barLabel:  function(i) { return this[0] },
      axisLabel: function(i) { return this[1].label },
      barWidth:  function(i) { return 0.5 + (i % 2) * 0.2 },
      color:     function(i) { return this[1].color }
    });

    $('#rates-last').html(json.rates.last);
    $('#volume-btc').html(json.volume_btc);

    var buyContiner = $('#trades-continer').find('tbody');
    buyContiner.children().first().nextAll().remove();

    request_get('/bitcoincharts/'+EXCHENGE_BTN[value][0]+'/trades.json',{},function(data)
    {
        $.each(data, function( key, val ) {
            var d1 = new Date(val.date);

            var min = d1.getMinutes();

            if (min < 10)
                min = '0' + min;

            var data_i_czas = d1.getDate() + ' ' + d1.getMonth() + ' ' + d1.getFullYear() + ', ' + d1.getHours() + ':' + min;

            buyContiner.append('<tr><td>'+val.amount+'</td><td>'+val.price+'</td><td>'+data_i_czas+'</td></tr>');
        });

    });


}

function InitLocalization()
{
    $('#main-page').show();
    /* TODO get location from Hive
    wait(true);
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(function(position)
        {
            locationInfo.lat = position.coords.latitude;
            locationInfo.lon = position.coords.longitude;

            InitLocalbitcoins(true);
        });
    }else{
        InitLocalbitcoins(false);
    }*/
    InitLocalbitcoins(false);
}

function findBuyBitcoinsOnlice(countryName,paymentMethod,buyContinerObject,reconizeCC)
{
    var urlNode = '/buy-bitcoins-online';

    if(countryName != '' && countryName != null)
    {
        if(reconizeCC)
        {
            var idCountry = $.trim(countryName);
            var newCountryName = "";

            idCountry = idCountry.split(" ");

            for(var i=0;i<idCountry.length;i++)
            {
                newCountryName += " "+ idCountry[i][0].toUpperCase() + idCountry[i].substring(1).toLowerCase();
            }

            idCountry = $.trim(newCountryName);

            var iPos = -1;

            if((iPos = jQuery.inArray( idCountry , COUNTRY_NAMES ))!=-1)
            {
                iPos = COUNTRY_CODES[iPos];
            }

            if(iPos != -1)
            {
                urlNode += '/'+iPos+'/'+countryName.toLowerCase();
            }else{
                urlNode += '/'+locationInfo.countryCode+'/'+countryName.toLowerCase();
            }

        }else{
            urlNode += '/'+locationInfo.countryCode+'/'+countryName.toLowerCase();
        }
    }

    if(paymentMethod != '' && paymentMethod != null)
    {
        urlNode += '/'+paymentMethod;
    }

    urlNode += '/.json';

    request_get(urlNode,{},function(data)
    {
        var buyContiner = buyContinerObject.find('tbody');

        buyContiner.children().first().nextAll().remove();

        $.each(data.data.ad_list, function( key, val ) {
            buyContiner.append('<tr><td><a class="user-detalis" href="'+val.data.profile.username+'">'+val.data.profile.name+'</a></td><td>'+val.data.temp_price+' '+val.data.currency+'</td><td><button class="info-btn" id="iid-'+val.data.ad_id+'">info</button></td></tr>');
            HOMEPAGE_DATA[val.data.ad_id] = val.data;
        });

        if(reconizeCC)
        {
            $('.info-btn').unbind('click');
            $('.info-btn').bind('click',function() {

                var gtu = $(this).attr('id').substring(4);
                $('.page').hide();
                $('#info-page').show();

                updateInfo(gtu,false);
            });

            $('.user-detalis').unbind('click');
            $('.user-detalis').bind('click',function() {

                var gtu = $(this).attr('href');
                $('.page').hide();
                $('#info-user-detalis').show();

                $('#uid-un').html(gtu);

                request_get('/api/account_info/'+gtu+'/',{},function(data)
                {
                    $('#uid-tpc').html(data.data.trading_partners_count);
                    $('#uid-fuc').html(data.data.feedbacks_unconfirmed_count);
                    $('#uid-tvt').html(data.data.trade_volume_text);
                    $('#uid-tbc').html(data.data.blocked_count);
                    $('#uid-fc').html(data.data.feedback_count);
                    $('#uid-tc').html(data.data.trusted_count);
                });
                return false;
            });
        }

    });
}

function findSellBitcoinsOnlice(countryName,paymentMethod,buyContinerObject,reconizeCC)
{
    var urlNode = '/sell-bitcoins-online';

    if(countryName != '' && countryName != null)
    {
        if(reconizeCC)
        {
            var idCountry = $.trim(countryName);
            var newCountryName = "";

            idCountry = idCountry.split(" ");

            for(var i=0;i<idCountry.length;i++)
            {
                newCountryName += " "+ idCountry[i][0].toUpperCase() + idCountry[i].substring(1).toLowerCase();
            }

            idCountry = $.trim(newCountryName);

            var iPos = -1;

            if((iPos = jQuery.inArray( idCountry , COUNTRY_NAMES ))!=-1)
            {
                iPos = COUNTRY_CODES[iPos];
            }

            if(iPos != -1)
            {
                urlNode += '/'+iPos+'/'+countryName;
            }else{
                urlNode += '/'+locationInfo.countryCode+'/'+countryName;
            }

        }else{
            urlNode += '/'+locationInfo.countryCode+'/'+countryName;
        }
    }

    if(paymentMethod != '' && paymentMethod != null)
    {
        urlNode += '/'+paymentMethod;
    }

    urlNode += '/.json';

    request_get(urlNode,{},function(data)
    {
        var buyContiner = buyContinerObject.find('tbody');

        buyContiner.children().first().nextAll().remove();

        $.each(data.data.ad_list, function( key, val ) {
            buyContiner.append('<tr><td><a class="user-detalis" href="'+val.data.profile.username+'">'+val.data.profile.name+'</a></td><td>'+val.data.temp_price+' '+val.data.currency+'</td><td><button class="info-btn" id="iid-'+val.data.ad_id+'">info</button></td></tr>');
            HOMEPAGE_DATA[val.data.ad_id] = val.data;
        });

        if(reconizeCC)
        {
            $('.info-btn').unbind('click');
            $('.info-btn').bind('click',function() {

                var gtu = $(this).attr('id').substring(4);
                $('.page').hide();
                $('#info-page').show();

                updateInfo(gtu,false);
            });

            $('.user-detalis').unbind('click');
            $('.user-detalis').bind('click',function() {

                var gtu = $(this).attr('href');
                $('.page').hide();
                $('#info-user-detalis').show();

                $('#uid-un').html(gtu);

                request_get('/api/account_info/'+gtu+'/',{},function(data)
                {
                    $('#uid-tpc').html(data.data.trading_partners_count);
                    $('#uid-fuc').html(data.data.feedbacks_unconfirmed_count);
                    $('#uid-tvt').html(data.data.trade_volume_text);
                    $('#uid-tbc').html(data.data.blocked_count);
                    $('#uid-fc').html(data.data.feedback_count);
                    $('#uid-tc').html(data.data.trusted_count);
                });
                return false;
            });
        }

    });
}

function wait(tn)
{
    if(tn && $('#loading-page').css('display') == 'none')
    {
        $('#loading-page').css("min-height",$('body').height()).show();
    }else{
        $('#loading-page').hide();
    }
}

function corect_number(va)
{
    var nr = 0;

    try
    {
        var tmp = parseFloat(va);
        nr = Math.ceil(tmp);
    }catch(err){}

    return nr;
}


function corect_value(va)
{
    if(va=='None')
        return "";
    return va;
}

function corect_trade_limits(mint,maxt)
{
    if(mint=='None' && maxt=='None')
        return "Not set";

    if(mint=='None')
        return "Max: "+maxt;

    if(maxt=='None')
        return "Min: "+mint;

    return mint+" - "+maxt;
}

function refresh_account()
{
    wait(true);

    $('.page').hide();
    $('#user-page').show();


    request_post(apiUrl.myself,{},function(data)
    {
        $('#myself-tpc').html(data.data.trading_partners_count);
        $('#myself-fuc').html(data.data.feedbacks_unconfirmed_count);
        $('#myself-tvt').html(data.data.trade_volume_text);
        $('#myself-tbc').html(data.data.blocked_count);
        $('#myself-fc').html(data.data.feedback_count);
        $('#myself-tc').html(data.data.trusted_count);
    });

    request_post(apiUrl.ads,{},function(data)
    {
        var buyContiner = $('#user-ads-continer').find('tbody');
        buyContiner.children().first().nextAll().remove();
        $.each(data.data.ad_list, function( key, val ) {
            buyContiner.append('<tr><td>'+val.data.visible+'</td><td>'+val.data.temp_price+' '+val.data.currency+'</td><td>'+corect_trade_limits(val.data.min_amount,val.data.max_amount)+'</td><td><button class="info-btn" id="iid-'+val.data.ad_id+'">info</button><button class="edit-btn" id="iid-'+val.data.ad_id+'">edit</button></td></tr>');
            HOMEPAGE_DATA[val.data.ad_id] = val.data;
        });

    });

    request_post(apiUrl.escrows,{},function(data)
    {
        var buyContiner = $('#user-escrow-continer').find('tbody');
        buyContiner.children().first().nextAll().remove();

        $.each(data.data.escrow_list, function( key, val ) {
            buyContiner.append('<tr><td>'+val.data.buyer_username+'</td><td>'+val.data.amount+'</td><td>'+val.data.amount_btc+'</td><td><button class="release-btn" id="eid-'+val.actions.release_url+'">release</button></td></tr>');
            HOMEPAGE_DATA[val.data.ad_id] = val.data;
        });

    });
    $('.info-btn').unbind('click');
    $('.info-btn').bind('click',function() {

        var gtu = $(this).attr('id').substring(4);
        $('.page').hide();
        $('#info-page').show();

        updateInfo(gtu,true);
    });

    $('.edit-btn').unbind('click');
    $('.edit-btn').bind('click',function() {

        var gtu = $(this).attr('id').substring(4);
        $('.page').hide();
        $('#edit-info-page').show();

        updateEditInfo(gtu);
    });

    $('.release-btn').unbind('click');
    $('.release-btn').bind('click',function() {

        var gtu = $(this).attr('id').substring(4);

        request_post_ex(gtu,{},function(data)
        {

        });

    });

    wait(false);

}


function refresh_homepage()
{
    wait(true);

    request_get('/api/places/',{lat:locationInfo.lat,lon:locationInfo.lon},function(data)
    {

        $.each(data.data.places, function( key, val ) {

            var idCountry = $.trim(val.location_string.split(",")[1]);

            var iPos = jQuery.inArray( idCountry , COUNTRY_CODES );

            if(iPos!=-1)
            {
                locationInfo.countryCode = idCountry;
                locationInfo.countryName = COUNTRY_NAMES[iPos];
                $('.fill-country').text(locationInfo.countryName);
            }else{
                if((iPos = jQuery.inArray( idCountry , COUNTRY_NAMES ))!=-1)
                {
                    locationInfo.countryName = idCountry;
                    locationInfo.countryCode = COUNTRY_CODES[iPos];
                }
            }

            request_get_ex(val.sell_local_url,{},function(data)
            {
                var buyContiner = $("#sell-cash-near").find('tbody');

                $.each(data.data.ad_list, function( key, val ) {
                    buyContiner.append('<tr><td><a class="user-detalis" href="'+val.data.profile.username+'">'+val.data.profile.name+'</a></td><td>'+val.data.temp_price+' '+val.data.currency+'</td><td><button class="info-btn" id="iid-'+val.data.ad_id+'">info</button></td></tr>');
                    HOMEPAGE_DATA[val.data.ad_id] = val.data;
                });

            });

            request_get_ex(val.buy_local_url,{},function(data)
            {
                var buyContiner = $("#buy-cash-near").find('tbody');

                $.each(data.data.ad_list, function( key, val ) {
                    buyContiner.append('<tr><td><a class="user-detalis" href="'+val.data.profile.username+'">'+val.data.profile.name+'</a></td><td>'+val.data.temp_price+' '+val.data.currency+'</td><td><button class="info-btn" id="iid-'+val.data.ad_id+'">info</button></td></tr>');
                    HOMEPAGE_DATA[val.data.ad_id] = val.data;
                });

            });
        });
    });

    findSellBitcoinsOnlice(locationInfo.countryName,null,$("#sell-bitcoins"),false);
    findBuyBitcoinsOnlice(locationInfo.countryName,null,$("#buy-bitcoins"),false);

    $('.info-btn').unbind('click');
    $('.info-btn').bind('click',function() {
        var gtu = $(this).attr('id').substring(4);
        $('.page').hide();
        $('#info-page').show();

        updateInfo(gtu,false);
    });

    $('.user-detalis').unbind('click');
    $('.user-detalis').bind('click',function() {

        var gtu = $(this).attr('href');
        $('.page').hide();
        $('#info-user-detalis').show();

        $('#uid-un').html(gtu);

        request_get('/api/account_info/'+gtu+'/',{},function(data)
        {
            $('#uid-tpc').html(data.data.trading_partners_count);
            $('#uid-fuc').html(data.data.feedbacks_unconfirmed_count);
            $('#uid-tvt').html(data.data.trade_volume_text);
            $('#uid-tbc').html(data.data.blocked_count);
            $('#uid-fc').html(data.data.feedback_count);
            $('#uid-tc').html(data.data.trusted_count);
        });
        return false;
    });


    wait(false);

}

function InitLocalbitcoins(tn)
{
    if(tn)
    {
        refresh_homepage();
    }else{
        $('#main-result').hide();
    }

    request_get(apiUrl.payment_methods,{},function(data)
    {
        var pm = $('#paymend-method');

        $.each(data.data.methods, function( key, val ) {
            pm.append('<option value="'+val.code+'">'+val.name+'</option>');
            POVIDER_ONLINE[val.code] = [val.name, key];
        });

    });
    wait(false);
    $('.more-btn').click(function() {
        $(this).hide().parents('.continer-section').find('.list-continer').removeClass('short-list');
        $(this).parent().children().eq(1).show();
    });

    $('.less-btn').click(function() {
        $(this).hide().parents('.continer-section').find('.list-continer').addClass('short-list');
        $(this).parent().children().eq(0).show();
    });

    $('#home-btn').click(function() {
        $('.page').hide();
        $('#main-page').show();

        $('#search-result-sell').hide();
        $('#search-result-buy').hide();

        refresh_homepage();

        $('#main-result').show();
    });


    $('#exchcenge-select').change(function() {
        updateGraph($(this).val());
    });

    $('#exchange-btn').click(function() {
        $('.page').hide();
        $('#exchange-page').show();

        request_get('/bitcoinaverage/ticker-all-currencies/',{},function(data)
        {
            var pm = $('#exchcenge-select');

            var iCounter = 0;

            $.each(data, function( key, val ) {
                pm.append('<option value="'+iCounter+'">'+key+'</option>');

                EXCHENGE_BTN[iCounter++] = [key,val];

            });

            updateGraph(0);

        });


    });



    $('#login-btn').click(function() {
        $('.alert').hide();
        if(logged)
        {
            refresh_account();
            return false;
        }else{
            $('.page').hide();
            $('#login-page').show();
        }
    });

    $('#auth-btn').click(function() {

            $('.alert').hide();

            jQuery.ajax(
                {
                    dataType: "json",
                    type: 'POST',
                    async:false,
                    url:site.root + "/oauth2/access_token/",
                    data:{
                        client_id: clientID,
                        client_secret: clientSecret,
                        grant_type: "password",
                        username: $('#login-name').val(),
                        password: $('#login-password').val(),
                        scope: "read+write"
                    },success:function(data)
                    {
                        tokens.access_token = data.access_token;


                        if (data.error)
                        {
                          $("#login-error").show().html('Invalid username or password');
                        }else{
                            logged = true;
                            $('#login-btn').html('account');
                            refresh_account();
                        }

                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        $("#login-error").show().html('Invalid username or password');
                    }
                }
            );


    });

    $('#search-btn').click(function() {

        $('#main-result').hide();

        wait(true);

        var buy_boolean = $('#id-whattodo').prop('checked');
        var buy_cach = false;

        var country_name = $('#search-country').val();

        var payment_method = $('#paymend-method').parent().val();

        if (payment_method != '')
            payment_method = POVIDER_ONLINE[payment_method][1];

        if(!buy_boolean)
        {
            findSellBitcoinsOnlice(country_name,payment_method,$("#result-sell-bitcoins"),true);
            $('#search-result-sell').show();
        }else{
            findBuyBitcoinsOnlice(country_name,payment_method,$("#result-buy-bitcoins"),true);
            $('#search-result-buy').show();
        }

        wait(false);

    });
}
