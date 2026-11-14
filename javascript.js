let currentBalance = Number(localStorage.getItem("saveBalance")) || 0;
let currentIncome = Number(localStorage.getItem("saveIncome")) || 0;


const balanceSpan = document.getElementById("balance");
const incomeSpan = document.getElementById("income");
const workButton = document.getElementById("work-btn");

balanceSpan.textContent = currentBalance;
incomeSpan.textContent = currentIncome;


function saveGame() {
    localStorage.setItem("saveBalance", currentBalance);
    localStorage.setItem("saveIncome", currentIncome);
    localStorage.setItem("koffiePrice", koffiekraam.price);
    localStorage.setItem("autoPrice", autowasstraat.price);
    localStorage.setItem("bakeryPrice", bakery.price);
    localStorage.setItem("MacdonaldsPrice", Macdonalds.price);
    localStorage.setItem("itPrice", It.price);
    localStorage.setItem("VastgoedbedrijfPrice", Vastgoedbedrijf.price);
    localStorage.setItem("logistiekPrice", Logistiek.price);
    localStorage.setItem("SupermarktketenPrice", Supermarktketen.price);
    localStorage.setItem("ZonneenergieparkPrice", Zonneeenergiepark.price);
    localStorage.setItem("InvesteringsbankPrice", Investeringsbank.price);

}


workButton.addEventListener("click", function(event) {
    currentBalance += 10; 
    balanceSpan.textContent = currentBalance;
    Updatebutton();
    saveGame();

    const floatElement = document.createElement("div");
    floatElement.textContent = "+€1";
    floatElement.classList.add("floating-text");
    floatElement.style.left = event.clientX + "px";
    floatElement.style.top = event.clientY + "px";
    document.body.appendChild(floatElement);
    
    setTimeout(function() {
        floatElement.remove();
    }, 1000);
});




const koffiekraam = {
    name: "Koffiekraam",
    price: Number(localStorage.getItem("koffiePrice")) || 1500,
    profit: 20,
};

const koffiePriceText = document.getElementById("koffie-price");
const buyKoffieButton = document.getElementById("buy-koffie");

koffiePriceText.textContent = `Prijs: € ${koffiekraam.price.toLocaleString("nl-NL")}`;

buyKoffieButton.addEventListener("click", function() {
    if (currentBalance >= koffiekraam.price) {
        currentBalance -= koffiekraam.price; 
        currentIncome += koffiekraam.profit; 
        koffiekraam.price = Math.floor(koffiekraam.price * 1.15);
        
        balanceSpan.textContent = currentBalance.toLocaleString("nl-NL");
        incomeSpan.textContent = currentIncome.toLocaleString("nl-NL");
        koffiePriceText.textContent = `Prijs: € ${koffiekraam.price.toLocaleString("nl-NL")}`;
        Updatebutton();
        saveGame(); 
        showNotification("☕ Het koffiehuis is gekocht!"); 
    }
});

function Updatebutton() {
    if (currentBalance >= koffiekraam.price) {
        buyKoffieButton.disabled = false ;
    }  else {
        buyKoffieButton.disabled = true;
    }
    if (currentBalance >= autowasstraat.price) {
        buyAutoButton.disabled = false;
       }   else {
            buyAutoButton.disabled = true; 
        }
        if (currentBalance >= bakery.price) {
            buybakeryButton.disabled = false;
        }  else {
            buybakeryButton.disabled = true;
        }
        if (currentBalance >= Macdonalds.price) {
            MacdonaldsButton.disabled = false;
            
        } else { MacdonaldsButton.disabled = true;
            }
        if (currentBalance >= It.price) {
            itButton.disabled = false;
        } else {
            itButton.disabled = true;
        }

       if (currentBalance >= Vastgoedbedrijf.price) {
           VastgoedbedrijfButton.disabled = false;
        } else {
           VastgoedbedrijfButton.disabled = true;
        }

        if (currentBalance >= Logistiek.price) {
           LogistiekpButton.disabled = false;
        } else {
           LogistiekpButton.disabled = true;
        }


         if (currentBalance >= Supermarktketen.price) {
          SupermarktketenButton.disabled = false;
        } else {
           SupermarktketenButton.disabled = true;
        }

           if (currentBalance >= Zonneeenergiepark.price) {
        ZonneenergieparkButton.disabled = false;
        } else {
           ZonneenergieparkButton.disabled = true;
        }

              if (currentBalance >= Investeringsbank.price) {
        InvesteringsbankButton.disabled = false;
        } else {
           InvesteringsbankButton.disabled = true;
        }
    
    
    };



const autowasstraat = {
    name: "Autowasstraat",
    price: Number(localStorage.getItem("autoPrice")) || 8000,
    profit: 50,
};

const autoPriceText = document.getElementById("auto-price");
const buyAutoButton = document.getElementById("buy-auto");

autoPriceText.textContent = "Prijs: € " + autowasstraat.price;

buyAutoButton.addEventListener("click", function() {
    if (currentBalance >= autowasstraat.price) {
        currentBalance -= autowasstraat.price; 
        currentIncome += autowasstraat.profit; 
        autowasstraat.price = Math.floor(autowasstraat.price * 1.15);
        
        balanceSpan.textContent = currentBalance; 
        incomeSpan.textContent = currentIncome;
        autoPriceText.textContent = "Prijs: € " + autowasstraat.price; 
        Updatebutton();
        saveGame(); 
        showNotification("🚗 De autowasstraat is gekocht!"); 
    }
});




const bakery = {
    name: "Bakkerij",
    price: Number(localStorage.getItem("bakeryPrice")) || 20000,
    profit: 100,
};


const bakeryPriceText = document.getElementById("bakery-price");
const buybakeryButton = document.getElementById("buy-bakery");

bakeryPriceText.textContent = "Prijs: € " + bakery.price;

buybakeryButton.addEventListener("click", function() {
    if (currentBalance >= bakery.price) {
        currentBalance -= bakery.price; 
        currentIncome += bakery.profit; 
        bakery.price = Math.floor(bakery.price * 1.15);
        
        balanceSpan.textContent = currentBalance; 
        incomeSpan.textContent = currentIncome;
        
        bakeryPriceText.textContent = "Prijs: € " + bakery.price; 
        Updatebutton();
        saveGame(); 
        showNotification("🥖 De bakkerij is gekocht!"); 
        localStorage.setItem("bakeryPrice", bakery.price);
    }
});


const Macdonalds = {
    name: "Macdonalds",
    price: Number(localStorage.getItem("MacdonaldsPrice")) || 30000,
    profit : 200,
};

const MacdonaldsPriceText = document.getElementById("Macdonalds-price");
const MacdonaldsButton = document.getElementById("buy-Macdonalds");

MacdonaldsPriceText.textContent = "Prijs: € " + Macdonalds.price;

MacdonaldsButton.addEventListener("click", function() {
    if (currentBalance >= Macdonalds.price) {
        currentBalance -= Macdonalds.price;
        currentIncome += Macdonalds.profit;
        Macdonalds.price = Math.floor(Macdonalds.price * 1.15 );

        balanceSpan.textContent = currentBalance;
        incomeSpan.textContent = currentIncome;

        MacdonaldsPriceText.textContent = "Prijs: € " + Macdonalds.price;
        Updatebutton();
        saveGame();
        showNotification("🍔 De Macdonalds is gekocht!")
        localStorage.setItem("macdonaldsPrice", Macdonalds.price);
    }

});



const It = {
    name: "IT-Bedrijf",
    price: Number(localStorage.getItem("itPrice")) || 45000,
    profit : 350,
};
const itPriceText = document.getElementById("it-price");
const itButton = document.getElementById("buy-it");

itPriceText.textContent = "Prijs: € " + It.price;
itButton.addEventListener("click", function() {
    if (currentBalance >= It.price) {
        currentBalance -= It.price;
        currentIncome += It.profit;
        It.price = Math.floor(It.price * 1.15 );

        balanceSpan.textContent = currentBalance;
        incomeSpan.textContent = currentIncome;

        itPriceText.textContent = "Prijs: € " + It.price;
        Updatebutton();
        saveGame();
        showNotification("💻 Het IT-Bedrijf is gekocht!")
        localStorage.setItem("itPrice", It.price);
    }

});



const Vastgoedbedrijf =  {
    name:"Vastgoedbedrijf",
    price: Number(localStorage.getItem("VastgoedbedrijfPrice")) || 120000,
    profit: 800,
    
}; 


const VastgoedbedrijfPriceText = document.getElementById("Vastgoedbedrijf-price");
const VastgoedbedrijfButton = document.getElementById("buy-Vastgoedbedrijf");

VastgoedbedrijfPriceText.textContent = "Prijs: € " + Vastgoedbedrijf.price;
VastgoedbedrijfButton.addEventListener("click", function() {
    if (currentBalance >= Vastgoedbedrijf.price) {
       (currentBalance -= Vastgoedbedrijf.price);
       (currentIncome += Vastgoedbedrijf.profit);
       Vastgoedbedrijf.price = Math.floor(Vastgoedbedrijf.price * 1.15);
       balanceSpan.textContent = currentBalance;
       incomeSpan.textContent = currentIncome;

        VastgoedbedrijfPriceText.textContent = "Prijs: € " + Vastgoedbedrijf.price;
        Updatebutton();
        saveGame();
        showNotification("💻 Het IT-Bedrijf is gekocht!")
        localStorage.setItem("VastgoedbedrijfPrice", Vastgoedbedrijf.price);
    }


});



const Logistiek =  {
    name: "Logistiek",
    price: Number(localStorage.getItem("LogistiekPrice")) || 350000,
    profit: 1200,
};

const LogistiekpPriceText = document.getElementById("Logistiek-price");
const LogistiekpButton = document.getElementById("buy-Logistiek");

LogistiekpPriceText.textContent = "Prijs: € " + Logistiek.price;
LogistiekpButton.addEventListener("click", function() {
       if (currentBalance >= Logistiek.price) {
          (currentBalance -= Logistiek.price);
          (currentIncome += Logistiek.profit);
          Logistiek.price = Math.floor(Logistiek.price * 1.15);
          balanceSpan.textContent = currentBalance;
          incomeSpan.textContent = currentIncome;

          LogistiekpPriceText.textContent = "Prijs: € " + Logistiek.price;
          Updatebutton();
          saveGame();
          showNotification("dada")
          localStorage.setItem("LogistiekpPrice", Logistiek.price);
       }

    });
    


    const Supermarktketen = {
        name: "Supermarktketen",
        price: Number(localStorage.getItem("SupermarktketenPrice")) || 1000000,
        profit: 2000,
    };

    const SupermarktketenPriceText = document.getElementById("Supermarktketen-price");
    const SupermarktketenButton = document.getElementById("buy-Supermarktketen")

    SupermarktketenPriceText.textContent = "Prijs: € " + Supermarktketen.price;
    SupermarktketenButton.addEventListener("click", function() {
        if (currentBalance >= Supermarktketen.price) {
            (currentBalance -= Supermarktketen.price);
            (currentIncome += Supermarktketen.profit);
            Supermarktketen.price = Math.floor(Supermarktketen.price * 1.15);
            balanceSpan.textContent = currentBalance;
            incomeSpan.textContent = currentIncome;

        SupermarktketenPriceText.textContent = "Prijs: € " + Supermarktketen.price;
          Updatebutton();
          saveGame();
          showNotification("dada")
          localStorage.setItem("SupermarktketenPrice", Supermarktketen.price);

    }
    });


// 1. Creating the business object (database)
const Zonneeenergiepark = {
    name: "Zonneenergiepark",
    price: Number(localStorage.getItem("ZonneenergieparkPrice")) || 1500000,
    profit: 5500,
};

// 2 HTML connection
const ZonneeenergieparkPriceText = document.getElementById("Zonneenergiepark-price");
const ZonneenergieparkButton = document.getElementById("buy-Zonneenergiepark");

// 3 Display the initial price on the screen when the page loads
ZonneeenergieparkPriceText.textContent = "Prijs: € " + Zonneeenergiepark.price;

// 4 Add a click event listener to the button 

ZonneenergieparkButton.addEventListener("click", function() {
    // 5  check if the player has enough balance (conditional check)
    if (currentBalance >= Zonneeenergiepark.price) {
        (currentBalance -= Zonneeenergiepark.price);
        (currentIncome += Zonneeenergiepark.profit);
        Zonneeenergiepark.price = Math.floor(Zonneeenergiepark.price * 1.15);
        // 6 Update numbers on the screen 
        balanceSpan.textContent = currentBalance;
        incomeSpan.textContent = currentIncome;
        ZonneeenergieparkPriceText.textContent = ("Prijs: € " + Zonneeenergiepark.price);

        // run service functions 

        Updatebutton();
        saveGame();
        showNotification("De Zonnee-energie park is gekocht!")
}
});


const Investeringsbank = {
    name: "Investeringsbank",
    price: Number(localStorage.getItem("InvesteringsbankPrice")) || 4000000,
    profit: 12000,
}

const InvesteringsbankPriceText = document.getElementById("Investeringsbank-price");
const InvesteringsbankButton = document.getElementById("buy-Investeringsbank");

InvesteringsbankPriceText.textContent = "Prijs: € " + Investeringsbank.price;

InvesteringsbankButton.addEventListener("click", function() {
    if (currentBalance >= Investeringsbank.price) {
        (currentBalance -= Investeringsbank.price);
        (currentIncome += Investeringsbank.profit);
        Investeringsbank.price = Math.floor(Investeringsbank.price * 1.15);

        balanceSpan.textContent = currentBalance;
        incomeSpan.textContent = currentIncome; 

        InvesteringsbankPriceText.textContent = ("Prijs: € " + Investeringsbank.price);
        Updatebutton();
        saveGame();
        showNotification("De Investeringsbank is gekocht!");

}
});




setInterval(function() {
    if (currentIncome > 0) {
        currentBalance += currentIncome;
        balanceSpan.textContent = currentBalance;
        Updatebutton();
        saveGame();
    }
}, 1000);

Updatebutton();

function showNotification(message) {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.classList.add("notification");
    document.body.appendChild(toast);
    
    setTimeout(function() {
        toast.remove();
    }, 1000);
}

const resetButton = document.getElementById("reset-btn");

resetButton.addEventListener("click", function() {
    localStorage.clear(); 
    location.reload();  
});