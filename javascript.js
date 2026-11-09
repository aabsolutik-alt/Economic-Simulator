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
    currentBalance += 10; 
    balanceSpan.textContent = currentBalance;
    saveGame(); // Сохраняем после клика

    // Анимация клика
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
    price: Number(localStorage.getItem("koffiePrice")) || 50, // Грузим цену из памяти или берем 50
    profit: 2
};

const koffiePriceText = document.getElementById("koffie-price");
const buyKoffieButton = document.getElementById("buy-koffie");

koffiePriceText.textContent = "Prijs: € " + koffiekraam.price; // Пишем актуальную цену на экран

buyKoffieButton.addEventListener("click", function() {
    if (currentBalance >= koffiekraam.price) {
        currentBalance -= koffiekraam.price; 
        currentIncome += koffiekraam.profit; 
        koffiekraam.price = Math.floor(koffiekraam.price * 1.15);
        
        balanceSpan.textContent = currentBalance; 
        incomeSpan.textContent = currentIncome;
        koffiePriceText.textContent = "Prijs: € " + koffiekraam.price; 
        
        saveGame(); // Сохраняем прогресс
        showNotification("☕ Кофейня куплена!"); // Вызываем уведомление
    }
});


const autowasstraat = {
    name: "Autowasstraat",
    price: Number(localStorage.getItem("autoPrice")) || 250,
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
        
        saveGame(); // Сохраняем прогресс
        showNotification("🚗 Автомойка куплена!"); 
    }
});



const bakery = {
    name: "Bakkerij",
    price: Number(localStorage.getItem("bakeryPrice")) || 250,
    profit: 18
};

// Правильно объявляем переменную и привязываем к нужному id
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
        
        // Обновляем текст именно у пекарни
        bakeryPriceText.textContent = "Prijs: € " + bakery.price; 
        
        saveGame(); 
        showNotification("🥖 Пекарня куплена!"); 
        localStorage.setItem("bakeryPrice", bakery.price);
    }
});


// === 5. ИГРОВОЙ ЦИКЛ (ТАЙМЕР ДОХОДА) ===
setInterval(function() {
    if (currentIncome > 0) {
        currentBalance += currentIncome;
        balanceSpan.textContent = currentBalance;
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
    }, 3000);
}



const resetButton = document.getElementById("reset-btn");

resetButton.addEventListener("click", function() {
    localStorage.clear(); 
    location.reload();  
});