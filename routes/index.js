var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');




var requestPrice = function (req, res, next) {
	fetch('http://api.fixer.io/latest?base=USD')
		.then(function(res) {
			return res.json();
		}).then(function(json) {
			//console.log(json);
			//console.log(json.rates.NZD)
			//req.requestPrice = json
			fetch('https://api.coinmarketcap.com/v1/ticker/komodo')
				.then(function(reskmd) {
					return reskmd.json();
				}).then(function(jsonkmd) {
					//console.log(jsonkmd);
					var kmd_price_obj = {
						"body": [
							{
								"code": "BTC",
								"name": "Bitcoin",
								"rate": jsonkmd[0].price_btc
							},
							{
								"code": "USD",
								"name": "US Dollar",
								"rate": jsonkmd[0].price_usd
							},
							{
								"code": "EUR",
								"name": "Eurozone Euro",
								"rate": jsonkmd[0].price_usd * json.rates.EUR
							},
							{
								"code": "AUD",
								"name": "Australian Dollar",
								"rate": jsonkmd[0].price_usd * json.rates.AUD
							},
							{
								"code": "BGN",
								"name": "Bulgarian Lev",
								"rate": jsonkmd[0].price_usd * json.rates.BGN
							},
							{
								"code": "BRL",
								"name": "Brazilian Real",
								"rate": jsonkmd[0].price_usd * json.rates.BRL
							},
							{
								"code": "CAD",
								"name": "Canadian Dollar",
								"rate": jsonkmd[0].price_usd * json.rates.CAD
							},
							{
								"code": "CHF",
								"name": "Swiss Franc",
								"rate": jsonkmd[0].price_usd * json.rates.CHF
							},
							{
								"code": "CNY",
								"name": "Chinese Yuan",
								"rate": jsonkmd[0].price_usd * json.rates.CNY
							},
							{
								"code": "CZK",
								"name": "Czech Koruna",
								"rate": jsonkmd[0].price_usd * json.rates.CZK
							},
							{
								"code": "DKK",
								"name": "Danish Krone",
								"rate": jsonkmd[0].price_usd * json.rates.DKK
							},
							{
								"code": "GBP",
								"name": "Pound Sterling",
								"rate": jsonkmd[0].price_usd * json.rates.GBP
							},
							{
								"code": "HKD",
								"name": "Hong Kong Dollar",
								"rate": jsonkmd[0].price_usd * json.rates.HKD
							},
							{
								"code": "HUF",
								"name": "Hungarian Forint",
								"rate": jsonkmd[0].price_usd * json.rates.HUF
							},
							{
								"code": "IDR",
								"name": "Indonesian Rupiah",
								"rate": jsonkmd[0].price_usd * json.rates.IDR
							},
							{
								"code": "ILS",
								"name": "Israeli Shekel",
								"rate": jsonkmd[0].price_usd * json.rates.ILS
							},
							{
								"code": "INR",
								"name": "Indian Rupee",
								"rate": jsonkmd[0].price_usd * json.rates.INR
							},
							{
								"code": "JPY",
								"name": "Japanese Yen",
								"rate": jsonkmd[0].price_usd * json.rates.JPY
							},
							{
								"code": "KRW",
								"name": "South Korean Won",
								"rate": jsonkmd[0].price_usd * json.rates.KRW
							},
							{
								"code": "MXN",
								"name": "Mexican Peso",
								"rate": jsonkmd[0].price_usd * json.rates.MXN
							},
							{
								"code": "MYR",
								"name": "Malaysian Ringgit",
								"rate": jsonkmd[0].price_usd * json.rates.MYR
							},
							{
								"code": "NOK",
								"name": "Norwegian Krone",
								"rate": jsonkmd[0].price_usd * json.rates.NOK
							},
							{
								"code": "NZD",
								"name": "New Zealand Dollar",
								"rate": jsonkmd[0].price_usd * json.rates.NZD
							},
							{
								"code": "PHP",
								"name": "Philippine Peso",
								"rate": jsonkmd[0].price_usd * json.rates.PHP
							},
							{
								"code": "PLN",
								"name": "Polish Zloty",
								"rate": jsonkmd[0].price_usd * json.rates.PLN
							},
							{
								"code": "RON",
								"name": "Romanian Leu",
								"rate": jsonkmd[0].price_usd * json.rates.RON
							},
							{
								"code": "RUB",
								"name": "Russian Ruble",
								"rate": jsonkmd[0].price_usd * json.rates.RUB
							},,
							{
								"code": "SEK",
								"name": "Swedish Krona",
								"rate": jsonkmd[0].price_usd * json.rates.SEK
							},
							{
								"code": "SGD",
								"name": "Singapore Dollar",
								"rate": jsonkmd[0].price_usd * json.rates.SGD
							},
							{
								"code": "THB",
								"name": "Thai Baht",
								"rate": jsonkmd[0].price_usd * json.rates.THB
							},
							{
								"code": "TRY",
								"name": "Turkish Lira",
								"rate": jsonkmd[0].price_usd * json.rates.TRY
							},
							{
								"code": "ZAR",
								"name": "South African Rand",
								"rate": jsonkmd[0].price_usd * json.rates.ZAR
							}
						]
					};

					req.requestPrice = kmd_price_obj;
					next();
				});
		});
}



router.use(requestPrice)

router.get('/', function (req, res) {
	//console.log(req.requestPrice);
	res.json(req.requestPrice);
})



module.exports = router;