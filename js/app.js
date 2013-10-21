	jQuery(document).ready(function(){
		InitLocalization();
		//InitLocalbitcoins();
	});
	
	
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
	  ads: '/api/ads/'
	}
	
	var tokens = {
		access_token: "268403ff995ba2448a9b5e758bacb09de6d8f877",
		expires_in: "31535999",
		refresh_token: "a049036c4d7aaece1b7fd197143e0428d2d2ce1f",
		scope: "read"
	};
	
	function request_post(url_string,extra_data,success_callback)
	{
		jQuery.ajax(
			{
				dataType: "json",
				type: 'POST',
				async:false,                    
				url:site.root + url_string,
				data:{
					access_token: tokens.access_token
				},
				success:function(data)
				{
					success_callback(data);
				},
				error: function (xhr, ajaxOptions, thrownError) {
					
				}
			}
		);
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
						success_callback(data);
					},
					error: function (xhr, ajaxOptions, thrownError) {
						
					}
				}
			);
		}
	
	function request_get(url_string,extra_data,success_callback)
	{
		request_get_ex(site.root + url_string,extra_data,success_callback);
	}
	
	function InitLocalization()
	{
		$('#main-page').show();
		wait(true);
		if (navigator.geolocation)
		{
			navigator.geolocation.getCurrentPosition(function(position)
			{
				locationInfo.lat = position.coords.latitude;
				locationInfo.lon = position.coords.longitude;
				
				InitLocalbitcoins();
				
			});
		}
	}
	
	function findBuyBitcoinsOnlice(countryName,paymentMethod,buyContinerObject)
	{
		var urlNode = '/buy-bitcoins-online';
		
		if(countryName != '' && countryName != null)
		{
			urlNode += '/'+locationInfo.countryCode+'/'+locationInfo.countryName;
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
				buyContiner.append('<tr><td>'+val.data.profile.name+'</td><td>'+val.data.temp_price+' '+val.data.currency+'</td><td><button>info</button></td></tr>');
			});
			
		});
	}
	
	function findSellBitcoinsOnlice(countryName,paymentMethod,buyContinerObject)
	{
		var urlNode = '/sell-bitcoins-online';
		
		if(countryName != '' && countryName != null)
		{
			urlNode += '/'+locationInfo.countryCode+'/'+locationInfo.countryName;
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
				buyContiner.append('<tr><td>'+val.data.profile.name+'</td><td>'+val.data.temp_price+' '+val.data.currency+'</td><td><button>info</button></td></tr>');
			});
			
		});
	}
	
	function wait(tn)
	{			
		if(tn)
		{
			$('#loading-page').css("min-height",$('body').height()).show();			
		}else{
			$('#loading-page').hide();					
		}
	}
	
	function InitLocalbitcoins()
	{
				
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
					if((iPos = jQuery.inArray( idCountry , COUNTRY_CODES ))!=-1)
					{
						locationInfo.countryName = idCountry;
						locationInfo.countryCode = COUNTRY_CODES[iPos];
					}
				}
				
				request_get_ex(val.sell_local_url,{},function(data)
				{
					var buyContiner = $("#sell-cash-near").find('tbody');
					
					$.each(data.data.ad_list, function( key, val ) {
						buyContiner.append('<tr><td>'+val.data.profile.name+'</td><td>'+val.data.temp_price+' '+val.data.currency+'</td><td><button>info</button></td></tr>');
					});
					
				});
				
				request_get_ex(val.buy_local_url,{},function(data)
				{
					var buyContiner = $("#buy-cash-near").find('tbody');
					
					
					$.each(data.data.ad_list, function( key, val ) {
						buyContiner.append('<tr><td>'+val.data.profile.name+'</td><td>'+val.data.temp_price+' '+val.data.currency+'</td><td><button>info</button></td></tr>');
					});
				});
				
			});
			
		});
		
		request_get(apiUrl.payment_methods+locationInfo.countryCode+'/',{},function(data)
		{
			var pm = $('#paymend-method');					
			
			$.each(data.data.methods, function( key, val ) {
				pm.append('<option value="'+val.code+'">'+val.name+'</option>');
			});
			
		});
				
		findSellBitcoinsOnlice(locationInfo.countryName,null,$("#sell-bitcoins"));
		findBuyBitcoinsOnlice(locationInfo.countryName,null,$("#buy-bitcoins"));
		
		wait(false);
		
		
		$('.more-btn').click(function() {
			$(this).hide().parents('.continer-section').find('.list-continer').removeClass('short-list');			
		});
		
		$('#login-btn').click(function() {
			$('.page').hide();	
			$('#login-page').show();
		});
		
		$('#auth-btn').click(function() {
			
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
							  alert("invalid");
							}else{
							 
								$('.page').hide();
								$('#user-page').show();								
							 
								request_post(apiUrl.ads,{},function(data)
								{
									var buyContiner = $('#user-page').find('tbody');					
									
									$.each(data.data.ad_list, function( key, val ) {
										buyContiner.append('<tr><td>'+val.data.visible+'</td><td>'+val.data.temp_price+' '+val.data.currency+'</td><td>'+val.data.min_amount+'-'+val.data.max_amount+'</td><td><button>info</button></td></tr>');
									});
									
								});
							 
							 
							}
							
						},
						error: function (xhr, ajaxOptions, thrownError) {
							alert("ERROR!");
						}
					}
				);
			
			
		});
		
		$('#search-btn').click(function() {
			
			$('#main-result').hide();
			
			wait(true);
			
			var buy_boolean = $('#whattodo').val();
			var buy_cach = false;
			
			var country_name = $('#search-country');
			var payment_method = $('#paymend-method');
			
			if(!buy_boolean)
			{
				findSellBitcoinsOnlice(locationInfo.countryName,$('#paymend-method').parent().val(),$("#result-sell-bitcoins"));
				$('#search-result-sell').show();
			}else{
				findBuyBitcoinsOnlice(locationInfo.countryName,$('#paymend-method').parent().val(),$("#result-buy-bitcoins"));
				$('#search-result-buy').show();
			}			
			
			wait(false);
			
		});
		
		
		/*
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
					username: 'stanekpeka',
					password: 'chuj1111',
					scope: "read+write"
				},success:function(data)
				{
					
					tokens.access_token = data.access_token;
					
					if (data.error)
					{
					  alert("ERROR!: "+body.error);
					}
				},
				error: function (xhr, ajaxOptions, thrownError) {
					
				}
			}
		);
		
		jQuery.ajax(
			{
				dataType: "json",
				type: 'POST',
				async:false,                    
				url:site.root + '/api/ads/',
				data:{
					access_token: tokens.access_token
				},
				beforeSend: function (request)
				{
					
				},
				success:function(data)
				{
					
				},
				error: function (xhr, ajaxOptions, thrownError) {
					
				}
			}
		);*/	
	}
     