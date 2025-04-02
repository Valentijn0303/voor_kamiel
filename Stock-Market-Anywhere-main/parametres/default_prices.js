var default_prices = {
    "pils": {"initial_price": 1.25, "krach_price": 0.63, "min_price": 0.63, "full_name": "Pils"},
    "Viper": {"initial_price": 2.25, "krach_price": 1.13, "min_price": 1.13, "full_name": "Viper"},
    "Lentebok": {"initial_price": 2.0, "krach_price": 1.0, "min_price": 1.0, "full_name": "Lentebok"},
    "Weizen": {"initial_price": 2.0, "krach_price": 1.0, "min_price": 1.0, "full_name": "Weizen"},
    "Hangende Harry": {"initial_price": 2.0, "krach_price": 1.0, "min_price": 1.0, "full_name": "Hangende Harry"},
    "Disco Daisy": {"initial_price": 2.0, "krach_price": 1.0, "min_price": 1.0, "full_name": "Disco Daisy"},
    "Witte Wijn": {"initial_price": 1.25, "krach_price": 0.63, "min_price": 0.63, "full_name": "Witte Wijn"},
    "Rose": {"initial_price": 1.25, "krach_price": 0.63, "min_price": 0.63, "full_name": "Rose"},
    "Cola": {"initial_price": 0.75, "krach_price": 0.38, "min_price": 0.38, "full_name": "Cola"},
    "Cola Zero": {"initial_price": 0.75, "krach_price": 0.38, "min_price": 0.38, "full_name": "Cola Zero"},
    "Fanta": {"initial_price": 0.75, "krach_price": 0.38, "min_price": 0.38, "full_name": "Fanta"},
    "Cassis": {"initial_price": 0.75, "krach_price": 0.38, "min_price": 0.38, "full_name": "Cassis"},
    "Ice tea Green": {"initial_price": 0.75, "krach_price": 0.38, "min_price": 0.38, "full_name": "Ice tea Green"},
    "Ice tea": {"initial_price": 0.75, "krach_price": 0.38, "min_price": 0.38, "full_name": "Ice tea"},
    "7up": {"initial_price": 0.75, "krach_price": 0.38, "min_price": 0.38, "full_name": "7up"},
    "Nozem": {"initial_price": 1.25, "krach_price": 0.63, "min_price": 0.63, "full_name": "Nozem"},
    "Grolsch 0.0": {"initial_price": 1.25, "krach_price": 0.63, "min_price": 0.63, "full_name": "Grolsch 0.0"},
    "Grolsch 0.0 Radler": {"initial_price": 1.25, "krach_price": 0.63, "min_price": 0.63, "full_name": "Grolsch 0.0 Radler"},
    "Lowlander Non-Alc": {"initial_price": 2.0, "krach_price": 1.0, "min_price": 1.0, "full_name": "Lowlander 0.0 IPA"},
    "Aperol": {"initial_price": 1.25, "krach_price": 0.63, "min_price": 0.63, "full_name": "Aperol shot"},
    "Apfelkorn": {"initial_price": 1.25, "krach_price": 0.63, "min_price": 0.63, "full_name": "Apfelkorn"},
    "Boswandeling": {"initial_price": 1.25, "krach_price": 0.63, "min_price": 0.63, "full_name": "Boswandeling"},
    "Boswandeling Pink": {"initial_price": 1.25, "krach_price": 0.63, "min_price": 0.63, "full_name": "Boswandeling Pink"}
};


compteur = 0
number_of_drinks =  Object.keys(default_prices).length
for(let i in default_prices){
    if(!default_prices[i]["colour"]){
        default_prices[i]["colour"] = "hsl(" + Math.ceil(compteur * 360 / (number_of_drinks+1)) + ", 90%, 60%)";
    }
    compteur += 1
}