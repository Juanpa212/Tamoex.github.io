function getQueryParam() {
    const queryParams = new URLSearchParams(window.location.search);
    const cpu = queryParams.get("cpu");
    const ram = queryParams.get("ram");
    const gpu = queryParams.get("gpu");
    const motherboard = queryParams.get("motherboard");
    const psu = queryParams.get("psu");
    const storage = queryParams.get("storage");
    const case_ = queryParams.get("case_");
    const cooling = queryParams.get("cooling");
    const dvd = queryParams.get("dvd");
    const sound = queryParams.get("sound");
    const wifi = queryParams.get("wifi");
    const rgb = queryParams.get("rgb");
    return {
        cpu,
        ram,
        gpu,
        motherboard,
        psu,
        storage,
        case_,
        cooling,
        dvd,
        sound,
        wifi,
        rgb,
    };
}

// const taxRate = 0.07;

// document.getElementById("cpuSelection").textContent = getQueryParam("cpu");
// document.getElementById("ramSelection").textContent = getQueryParam("ram");
// document.getElementById("gpuSelection").textContent = getQueryParam("gpu");
// document.getElementById("motherboardSelection").textContent = getQueryParam("motherboard");
// document.getElementById("psuSelection").textContent = getQueryParam("psu");
// document.getElementById("storageSelection").textContent = getQueryParam("storage");
// document.getElementById("caseSelection").textContent = getQueryParam("case_");
// document.getElementById("coolingSelection").textContent = getQueryParam("cooling");
// document.getElementById("dvdSelection").textContent = getQueryParam("dvd");
// document.getElementById("soundSelection").textContent = getQueryParam("sound");
// document.getElementById("wifiSelection").textContent = getQueryParam("wifi");
// document.getElementById("rgbSelection").textContent = getQueryParam("rgb");

// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// checkboxes.forEach((checkbox) => {
//     checkbox.addEventListener('change', calculateTotalPrice);
// });
//     const componentPrices = {
//         cpu: {
//             120: 120,
//             285: 285,
//             400: 400,
//             550: 550,
//             300: 300,
//             450: 450,
//             500: 500,
//         },
//         ram: {
//             40 : 40,
//             60 : 60,
//             120: 120,
//             200: 200,
//         },
//         gpu: {
//             300 : 300,
//             600 : 600,
//             1200 : 1200,
//             1600 : 1600,
//             320 : 320,
//             450 : 450,
//             600 : 600,
//             800 : 800,
//         },
//         storage: {
//             15: 15,
//             30: 30,
//             80: 80,
//             120: 120,
//             10: 10,
//             20: 20,
//             50: 50,
//         },
//         motherboard: {
//             150: 150,
//             200: 200,
//         },
//         psu: {
//             20: 20,
//             40 : 40,
//             60: 60,
//             80 : 80,
//             100 : 100,
//             120 : 120,
//         },
//         case_: {
//             100 : 100,
//             150 : 150,
//             80 : 80,
//             140: 140,
//             85: 85,
//             90: 90,
//         },
//         cooling: {
//             50: 50,
//             100: 100,
//             150: 150,
//         },

//     };



// function getAddOnPrice(addOnId) {
// const addOnPriceMap = {
//     dvd: 30,
//     sound: 25,
//     wifi: 20,
//     rgb: 15,
// };

// const checkbox = document.getElementById(addOnId);
// return checkbox.checked ? addOnPriceMap[addOnId] : 0;
// }

function updateCart(){
    const selectedComponents= getQueryParam();

    document.getElementById("cpuSelection").textContent = selectedComponents.cpu || "-";
    document.getElementById("ramSelection").textContent = selectedComponents.ram || "-";
    document.getElementById("gpuSelection").textContent = selectedComponents.gpu || "-";
    document.getElementById("motherboardSelection").textContent = selectedComponents.motherboard || "-";
    document.getElementById("psuSelection").textContent = selectedComponents.psu || "-";
    document.getElementById("storageSelection").textContent = selectedComponents.storage || "-";
    document.getElementById("caseSelection").textContent = selectedComponents.case_ || "-";
    document.getElementById("coolingSelection").textContent = selectedComponents.cooling || "-";
    document.getElementById("dvdSelection").textContent = selectedComponents.dvd || "-";
    document.getElementById("soundSelection").textContent = selectedComponents.sound || "-";
    document.getElementById("wifiSelection").textContent = selectedComponents.wifi || "-";
    document.getElementById("rgbSelection").textContent = selectedComponents.rgb || "-";
}

updateCart();

// function calculateTotalPrice() {
//     let totalPrice = 0;
//     const componentIds = ["cpu", "ram", "gpu", "storage", "motherboard", "psu", "case_", "cooling"];
//     for (const componentId of componentIds) {
//         const selectedOption = document.getElementById(`${componentId}Selection`).textContent;
//         const componentPrice = componentPrices[componentId][selectedOption];
//         totalPrice += componentPrice;
//     }

//     //display price in the table on cart.html
//     const tax = totalPrice * taxRate;
//     const finalPrice = totalPrice + tax;

// }

// function checkout() {
//     console.log("checkout button clicked");
//     //take the final price and send it to the checkout page
//     const finalPrice = document.getElementById("finalPrice").textContent;
//     window.location.href = `checkout.html?price=${finalPrice}`;

// }

// calculateTotalPrice();
