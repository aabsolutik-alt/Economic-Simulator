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
}


workButton.addEventListener("click", function(event) {
    currentBalance += 1; 
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
    price: Number(localStorage.getItem("koffiePrice")) || 50,
    profit: 2
};

const koffiePriceText = document.getElementById("koffie-price");
const buyKoffieButton = document.getElementById("buy-koffie");

koffiePriceText.textContent = "Prijs: € " + koffiekraam.price; 

buyKoffieButton.addEventListener("click", function() {
    if (currentBalance >= koffiekraam.price) {
        currentBalance -= koffiekraam.price; 
        currentIncome += koffiekraam.profit; 
        koffiekraam.price = Math.floor(koffiekraam.price * 1.15);
        
        balanceSpan.textContent = currentBalance; 
        incomeSpan.textContent = currentIncome;
        koffiePriceText.textContent = "Prijs: € " + koffiekraam.price; 
        Updatebutton();
        saveGame(); 
        showNotification("☕ Кофейня куплена!"); 
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

    };



const autowasstraat = {
    name: "Autowasstraat",
    price: Number(localStorage.getItem("autoPrice")) || 150,
    profit: 10
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
        showNotification("🚗 Автомойка куплена!"); 
    }
});




const bakery = {
    name: "Bakkerij",
    price: Number(localStorage.getItem("bakeryPrice")) || 250,
    profit: 18
};


const bakeryPriceText = document.getElementById("bakery-price");
const buybakeryButton = document.getElementById("buy-bakery");

bakeryPriceText.textContent = "Prijs: € " + bakery.price;

buybakeryButton.addEventListener("click", function() {
    if (currentBalance >= bakery.price) {
        currentBalance -= bakery.price; 
        currentIncome += bakery.profit; 
        bakery.price = Math.floor(bakery.price * 1.5);
        
        balanceSpan.textContent = currentBalance; 
        incomeSpan.textContent = currentIncome;
        
        bakeryPriceText.textContent = "Prijs: € " + bakery.price; 
        Updatebutton();
        saveGame(); 
        showNotification("🥖 Пекарня куплена!"); 
        localStorage.setItem("bakeryPrice", bakery.price);
    }
});


const Macdonalds = {
    name: "Macdonalds",
    price: Number(localStorage.getItem("MacdonaldsPrice")) || 500,
    profit : 30
};

const MacdonaldsPriceText = document.getElementById("Macdonalds-price");
const MacdonaldsButton = document.getElementById("buy-Macdonalds");

MacdonaldsPriceText.textContent = "Prijs: € " + Macdonalds.price;

MacdonaldsButton.addEventListener("click", function() {
    if (currentBalance >= Macdonalds.price) {
        currentBalance -= Macdonalds.price;
        currentIncome += Macdonalds.profit;
        Macdonalds.price = Math.floor(Macdonalds.price * 2.5 );

        balanceSpan.textContent = currentBalance;
        incomeSpan.textContent = currentIncome;

        MacdonaldsPriceText.textContent = "Prijs: € " + Macdonalds.price;
        Updatebutton();
        saveGame();
        showNotification("Мак куплен!")
        localStorage.setItem("macdonaldsPrice", Macdonalds.price);
    }

});




// === 5. ИГРОВОЙ ЦИКЛ (ТАЙМЕР ДОХОДА) ===
setInterval(function() {
    if (currentIncome > 0) {
        currentBalance += currentIncome;
        balanceSpan.textContent = currentBalance;
        Updatebutton();
        saveGame(); // Сохраняем пассивный доход
    }
}, 1000);


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