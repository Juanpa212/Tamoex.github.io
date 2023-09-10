function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.getElementById("cpuSelection").textContent = getQueryParam("cpu");
document.getElementById("ramSelection").textContent = getQueryParam("ram");
document.getElementById("gpuSelection").textContent = getQueryParam("gpu");
document.getElementById("motherboardSelection").textContent = getQueryParam("motherboard");
document.getElementById("psuSelection").textContent = getQueryParam("psu");
document.getElementById("storageSelection").textContent = getQueryParam("storage");
document.getElementById("caseSelection").textContent = getQueryParam("case_");
document.getElementById("coolingSelection").textContent = getQueryParam("cooling");

function getAddOnPrice(addOnId) {
const addOnPriceMap = {
    dvd: 30,
    sound: 25,
    wifi: 20,
    rgb: 15,
};
const checkbox = document.getElementById(addOnId);
return checkbox.checked ? addOnPriceMap[addOnId] : 0;
}

function calculateTotalPrice() {

    taxRate = 0.07;

    const componentPrices = {
        cpu: {
            120: 120,
            285: 285,
            400: 400,
            550: 550,
            300: 300,
            450: 450,
            500: 500,
        },
        ram: {
            40 : 40,
            60 : 60,
            120: 120,
            200: 200,
        },
        gpu: {
            300 : 300,
            600 : 600,
            1200 : 1200,
            1600 : 1600,
            320 : 320,
            450 : 450,
            600 : 600,
            800 : 800,
        },
        storage: {
            15: 15,
            30: 30,
            80: 80,
            120: 120,
            10: 10,
            20: 20,
            50: 50,
        },
        motherboard: {
            150: 150,
            200: 200,
        },
        psu: {
            20: 20,
            40 : 40,
            60: 60,
            80 : 80,
            100 : 100,
            120 : 120,
        },
        case_: {
            100 : 100,
            150 : 150,
            80 : 80,
            140: 140,
            85: 85,
            90: 90,
        },
        cooling: {
            50: 50,
            100: 100,
            150: 150,
        },

    };


    var data = window.location.search;
    var params = new URLSearchParams(data);

    var cpu = params.get('cpu');
    var ram = params.get('ram');
    var gpu = params.get('gpu');
    var storage = params.get('storage');
    var motherboard = params.get('motherboard');
    var psu = params.get('psu');
    var case_ = params.get('case_');
    var cooling = params.get('cooling');


    const dvdChecked = document.getElementById('dvd').checked;
    const soundChecked = document.getElementById('sound').checked;
    const wifiChecked = document.getElementById('wifi').checked;
    const rgbChecked = document.getElementById('rgb').checked;

    const selectedAddOns = [];

    if (dvdChecked) selectedAddOns.push("DVD Disc Drive");
    if (soundChecked) selectedAddOns.push("Sound Card");
    if (wifiChecked) selectedAddOns.push("Wifi Card");
    if (rgbChecked) selectedAddOns.push("RGB Lights");

    document.getElementById('addOnsSelection').textContent = selectedAddOns.join(', ');




    var addOnPrices = 0;
    var addOnPrices = getAddOnPrice('dvd') + getAddOnPrice('sound') + getAddOnPrice('wifi') + getAddOnPrice('rgb');

    var cpuPrice = componentPrices.cpu[parseInt(cpu, 10)] || 0;
    var ramPrice = componentPrices.ram[parseInt(ram, 10)] || 0;
    var gpuPrice = componentPrices.gpu[parseInt(gpu, 10)] || 0;
    var storagePrice = componentPrices.storage[parseInt(storage, 10)] || 0;
    var motherboardPrice = componentPrices.motherboard[parseInt(motherboard, 10)] || 0;
    var psuPrice = componentPrices.psu[parseInt(psu, 10)] || 0;
    var casePrice = componentPrices.case_[parseInt(case_, 10)] || 0;
    var coolingPrice = componentPrices.cooling[parseInt(cooling, 10)] || 0;

    var totalPrice = cpuPrice + ramPrice + gpuPrice + storagePrice + motherboardPrice + psuPrice + casePrice + coolingPrice + addOnPrices;

    var taxPrice = totalPrice * taxRate;
    var finalPrice = totalPrice + taxPrice;

    document.getElementById('totalPrice').textContent = `$${finalPrice.toFixed(2)}`;
    document.getElementById('taxPrice').textContent = `$${taxPrice.toFixed(2)}`;

    return finalPrice;
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', calculateTotalPrice);
});

function checkout() {
    const finalPrice = calculateTotalPrice();
    window.location.href = `invoice.html?totalTaxPrice=${finalPrice.toFixed(2)}`;
}

calculateTotalPrice();
