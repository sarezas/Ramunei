function crawl() {
    var pool = [
        "https://www.norwegian.com/uk/ipc/availability/avaday?AdultCount=1&A_City=RIX&D_City=OSLALL&D_Month=201812&D_Day=01&IncludeTransit=true&TripType=1&CurrencyCode=GBP&dFare=63&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=02&D_Month=201812&D_SelectedDay=02&R_Day=02&R_Month=201812&R_SelectedDay=02&dFlight=DY1072OSLRIX&dCabinFareType=1&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=26267&processid=43169&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=03&D_Month=201812&D_SelectedDay=03&R_Day=03&R_Month=201812&R_SelectedDay=03&dFlight=DY1072OSLRIX&dCabinFareType=1&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=37392&processid=77905&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=04&D_Month=201812&D_SelectedDay=04&R_Day=04&R_Month=201812&R_SelectedDay=04&dFlight=DY1072OSLRIX&dCabinFareType=1&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=73088&processid=5061&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=06&D_Month=201812&D_SelectedDay=06&R_Day=06&R_Month=201812&R_SelectedDay=06&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=26254&mode=ab"
    ]

    var request = require("request");
    var cheerio = require("cheerio");
    var async = require("async");
    var queue = [];
    var priceList = [];

    for (let i = 0; i < pool.length; i++) {
        queue.push(function () {
            var url = pool[i];
            // console.log(url);
            request(url, function (error, response, body) {
                if (!error) {
                    var $ = cheerio.load(body, {
                        ignoreWhitespace: true
                    });
                    var departure = "";
                    var arrival = "";
                    var departureTime = []
                    var arrivalTime = [];
                    var price = [];
                    var date = "";

                    $('#avaday-outbound-result').each(function (i, el) {
                        departure = /oslo-\w+/gi.exec($('.avadaytable'));
                        arrival = /riga/gi.exec($(el));
                        // for arrival and departure times
                        var body = $('.avadaytable').text();
                        var result = body.match(/\d{1,2}\:\d{1,2}/gi);
                        departureTime = result[0];
                        arrivalTime = result[1];
                        price = parseFloat($(el).text().match(/\d{1,3}\.\d{1,2}/g).join(" or "));
                        date = /\d+.\s\w+\s\d{1,4}/i.exec($(el));

                        console.log(`On the ${date} the cheapest flight from ${departure} is at ${departureTime}, which arrives at ${arrival} airport at ${arrivalTime}, for the price of ${Math.min(price)} eur.`);
                    });
                } else {
                    console.log("The program failed to calculate");
                };

            })
        })
    };


    async.parallel(queue, function (err, result) {
        if (err) {
            throw new Error(err.message)
        } else {
            console.log("'.'");
        }
        console.log("DONE");
    })

    function countMinimum(array) {
        console.log(array);
        var min = Math.min(array);
        return min;
    };

};
crawl();
