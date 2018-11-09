function crawl() {
    var pool = [
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=01&D_Month=201812&D_SelectedDay=01&R_Day=06&R_Month=201812&R_SelectedDay=06&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=32112&processid=50206&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=02&D_Month=201812&D_SelectedDay=02&R_Day=06&R_Month=201812&R_SelectedDay=06&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=97887&processid=45744&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=03&D_Month=201812&D_SelectedDay=03&R_Day=06&R_Month=201812&R_SelectedDay=06&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=38062&processid=63442&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=04&D_Month=201812&D_SelectedDay=04&R_Day=06&R_Month=201812&R_SelectedDay=06&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=21402&processid=90598&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=05&D_Month=201812&D_SelectedDay=05&R_Day=06&R_Month=201812&R_SelectedDay=06&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=91112&processid=82035&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=06&D_Month=201812&D_SelectedDay=06&R_Day=06&R_Month=201812&R_SelectedDay=06&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=74705&processid=29826&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=07&D_Month=201812&D_SelectedDay=07&R_Day=07&R_Month=201812&R_SelectedDay=07&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=82455&processid=90907&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=08&D_Month=201812&D_SelectedDay=08&R_Day=08&R_Month=201812&R_SelectedDay=08&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=77612&processid=64026&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=09&D_Month=201812&D_SelectedDay=09&R_Day=09&R_Month=201812&R_SelectedDay=09&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=17950&processid=88136&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=10&D_Month=201812&D_SelectedDay=10&R_Day=10&R_Month=201812&R_SelectedDay=10&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=83103&processid=10316&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=11&D_Month=201812&D_SelectedDay=11&R_Day=11&R_Month=201812&R_SelectedDay=11&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=93884&processid=46098&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=12&D_Month=201812&D_SelectedDay=12&R_Day=12&R_Month=201812&R_SelectedDay=12&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=13261&processid=99311&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=13&D_Month=201812&D_SelectedDay=13&R_Day=13&R_Month=201812&R_SelectedDay=13&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=92397&processid=71216&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=14&D_Month=201812&D_SelectedDay=14&R_Day=14&R_Month=201812&R_SelectedDay=14&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=33453&processid=85536&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=15&D_Month=201812&D_SelectedDay=15&R_Day=15&R_Month=201812&R_SelectedDay=15&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=6746&processid=79250&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=16&D_Month=201812&D_SelectedDay=16&R_Day=16&R_Month=201812&R_SelectedDay=16&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=42784&processid=9364&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=17&D_Month=201812&D_SelectedDay=17&R_Day=17&R_Month=201812&R_SelectedDay=17&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=73175&processid=8981&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=18&D_Month=201812&D_SelectedDay=18&R_Day=18&R_Month=201812&R_SelectedDay=18&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=14722&processid=21428&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=19&D_Month=201812&D_SelectedDay=19&R_Day=19&R_Month=201812&R_SelectedDay=19&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=6093&processid=39731&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=20&D_Month=201812&D_SelectedDay=20&R_Day=20&R_Month=201812&R_SelectedDay=20&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=34430&processid=64534&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=21&D_Month=201812&D_SelectedDay=21&R_Day=21&R_Month=201812&R_SelectedDay=21&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=41456&processid=26897&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=22&D_Month=201812&D_SelectedDay=22&R_Day=22&R_Month=201812&R_SelectedDay=22&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=10637&processid=38880&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=23&D_Month=201812&D_SelectedDay=23&R_Day=23&R_Month=201812&R_SelectedDay=23&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=58779&processid=63805&mode=ab",
        "https://www.norwegian.com/uk/booking/flight-tickets/farecalendar/?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=24&D_Month=201812&D_SelectedDay=24&R_Day=24&R_Month=201812&R_SelectedDay=24&CurrencyCode=GBP&message=noFlightsOnDate&processid=42657&mode=ab#/?origin=OSLALL&destination=RIX&outbound=2018-12&adults=1&oneWay=true&currency=GBP",
        "https://www.norwegian.com/uk/ipc/availability/avaday?AdultCount=1&A_City=RIX&D_City=OSLALL&D_Month=201812&D_Day=26&IncludeTransit=true&TripType=1&CurrencyCode=GBP&dFare=109&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=27&D_Month=201812&D_SelectedDay=27&R_Day=27&R_Month=201812&R_SelectedDay=27&dFlight=DY1072OSLRIX&dCabinFareType=1&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=36362&processid=84852&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=28&D_Month=201812&D_SelectedDay=28&R_Day=28&R_Month=201812&R_SelectedDay=28&dFlight=DY1072OSLRIX&dCabinFareType=1&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=48145&processid=37807&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=29&D_Month=201812&D_SelectedDay=29&R_Day=29&R_Month=201812&R_SelectedDay=29&dFlight=DY1072OSLRIX&dCabinFareType=1&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=96704&processid=49000&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=30&D_Month=201812&D_SelectedDay=30&R_Day=30&R_Month=201812&R_SelectedDay=30&dFlight=DY1072OSLRIX&dCabinFareType=1&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=60088&processid=57703&mode=ab",
        "https://www.norwegian.com/uk/ipc/availability/avaday?D_City=OSLALL&A_City=RIX&TripType=1&D_Day=31&D_Month=201812&D_SelectedDay=31&R_Day=31&R_Month=201812&R_SelectedDay=31&dFlight=DY1072OSLRIX&dCabinFareType=1&AgreementCodeFK=-1&CurrencyCode=GBP&ShowNoFlights=True&rnd=57065&processid=72760&mode=ab"
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
                        // split indexes for arrival and departure times
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

};
crawl();
