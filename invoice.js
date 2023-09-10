function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.getElementById("cpuSelection").textContent = getQueryParam("cpu");
document.getElementById("ramSelection").textContent = getQueryParam("ram");
document.getElementById("gpuSelection").textContent = getQueryParam("gpu");
document.getElementById("motherboardSelection").textContent = getQueryParam("motherboard");
document.getElementById("storageSelection").textContent = getQueryParam("storage");
document.getElementById("caseSelection").textContent = getQueryParam("case_");
document.getElementById("coolingSelection").textContent = getQueryParam("cooling");


const totalPrice = parseFloat(getQueryParam("totalPrice"));
document.getElementById("totalTaxPrice").textContent = `$${totalPrice.toFixed(2)}`;