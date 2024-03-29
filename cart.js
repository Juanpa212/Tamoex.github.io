const priceList = {
    "Intel i3": 120,
    "Intel i5": 285,
    "Intel i7": 400,
    "Intel i9": 550,
    "Ryzen 5": 300,
    "Ryzen 7": 450,
    "Ryzen 9": 500,
    "8 GB": 40,
    "16 GB": 60,
    "32 GB": 120,
    "64 GB": 200,
    "RTX 4060": 300,
    "RTX 4070": 600,
    "RTX 4080": 1200,
    "RTX 4090": 1600,
    "RX 7600": 320,
    "RX 7700 XT": 450,
    "RX 7800 XT": 600,
    "RX 7900 XT": 800,
    "256gb ssd": 15,
    "512gb ssd": 30,
    "1Tb ssd": 80,
    "2Tb ssd": 120,
    "256gb hd": 10,
    "512gb hd": 20,
    "1Tb hd": 50,
    "ATX": 150,
    "MICRO ATX": 200,
    "500Watts": 20,
    "650Watts": 40,
    "750Watts": 60,
    "850Watts": 80,
    "1000Watts": 100,
    "1200Watts": 120,
    "Corsair": 100,
    "Lian Li": 150,
    "CoolerMaster": 80,
    "Fractal": 140,
    "NZXT": 85,
    "Thermaltake": 90,
    "Air Cooling": 50,
    "Water Cooling": 100,
    "Custom Loop Cooling": 150,
    "DVD Disk Drive": 30,
    "Sound Card": 25,
    "Wifi Card": 20,
    "RGB Lights": 15
};



document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);

    const cpuSelection = urlParams.get('cpu');
    const ramSelection = urlParams.get('ram');
    const gpuSelection = urlParams.get('gpu');
    const motherboardSelection = urlParams.get('motherboard');
    const storageSelection = urlParams.get('storage');
    const caseSelection = urlParams.get('case_');
    const psuSelection = urlParams.get('psu');
    const coolingSelection = urlParams.get('cooling');
    const dvdCheck = urlParams.get('dvd');
    const rgbCheck = urlParams.get('rgb');
    const wifiCheck = urlParams.get('wifi');
    const soundCheck = urlParams.get('sound');

    const cpuPrice = priceList[cpuSelection] || 0;
    const ramPrice = priceList[ramSelection] || 0;
    const gpuPrice = priceList[gpuSelection] || 0;
    const motherboardPrice = priceList[motherboardSelection] || 0;
    const storagePrice = priceList[storageSelection] || 0;
    const casePrice = priceList[caseSelection] || 0;
    const psuPrice = priceList[psuSelection] || 0;
    const coolingPrice = priceList[coolingSelection] || 0;
    const dvdPrice = priceList[dvdCheck] || 0;
    const rgbPrice = priceList[rgbCheck] || 0;
    const wifiPrice = priceList[wifiCheck] || 0;
    const soundPrice = priceList[soundCheck] || 0;

    // Calculate subtotal without tax
    const subtotal = cpuPrice + ramPrice + gpuPrice + motherboardPrice + storagePrice +
                    casePrice + psuPrice + coolingPrice + dvdPrice + rgbPrice + wifiPrice + soundPrice;

    // Define your tax rate (for example, 10% tax)
    const taxRate = 0.1;

    // Calculate the tax amount
    const tax = subtotal * taxRate;

    // Calculate the total price including tax
    const totalPrice = subtotal + tax;

    document.getElementById('cpuSelection').textContent = cpuSelection;
    document.getElementById('cpuPrice').textContent = `$${cpuPrice}`;
    document.getElementById('ramSelection').textContent = ramSelection;
    document.getElementById('ramPrice').textContent = `$${ramPrice}`;
    document.getElementById('gpuSelection').textContent = gpuSelection;
    document.getElementById('gpuPrice').textContent = `$${gpuPrice}`;
    document.getElementById('motherboardSelection').textContent = motherboardSelection;
    document.getElementById('motherboardPrice').textContent = `$${motherboardPrice}`;
    document.getElementById('storageSelection').textContent = storageSelection;
    document.getElementById('storagePrice').textContent = `$${storagePrice}`;
    document.getElementById('caseSelection').textContent = caseSelection;
    document.getElementById('casePrice').textContent = `$${casePrice}`;
    document.getElementById('psuSelection').textContent = psuSelection;
    document.getElementById('psuPrice').textContent = `$${psuPrice}`;
    document.getElementById('coolingSelection').textContent = coolingSelection;
    document.getElementById('coolingPrice').textContent = `$${coolingPrice}`;
    document.getElementById('dvdCheck').textContent = dvdCheck;
    document.getElementById('dvdPrice').textContent = `$${dvdPrice}`;
    document.getElementById('rgbCheck').textContent = rgbCheck;
    document.getElementById('rgbPrice').textContent = `$${rgbPrice}`;
    document.getElementById('wifiCheck').textContent = wifiCheck;
    document.getElementById('wifiPrice').textContent = `$${wifiPrice}`;
    document.getElementById('soundCheck').textContent = soundCheck;
    document.getElementById('soundPrice').textContent = `$${soundPrice}`;
    document.getElementById('taxPrice').textContent = `$${tax.toFixed(2)}`; // Display the tax with two decimal places
    document.getElementById('totalPrice').textContent = `$${totalPrice.toFixed(2)}`; // Display the total price with two decimal places
});



// Function to update the table
function updateTable() {
    // Clear existing table content
    clearTable();

    // Get the selected component values
    const selectedCpu = document.getElementById('cpu').value;
    const selectedRam = document.getElementById('ram').value;
    const selectedGpu = document.getElementById('gpu').value;
    const selectedMotherboard = document.getElementById('motherboard').value;
    const selectedStorage = document.getElementById('storage').value;
    const selectedCase = document.getElementById('case_').value;
    const selectedPsu = document.getElementById('psu').value;
    const selectedCooling = document.getElementById('cooling').value;

    // Calculate the prices of selected components
    const cpuPrice = priceList[selectedCpu];
    const ramPrice = priceList[selectedRam];
    const gpuPrice = priceList[selectedGpu];
    const motherboardPrice = priceList[selectedMotherboard];
    const storagePrice = priceList[selectedStorage];
    const casePrice = priceList[selectedCase];
    const psuPrice = priceList[selectedPsu];
    const coolingPrice = priceList[selectedCooling];

    // Display selected components in the table
    displayComponentInTable('Processor', selectedCpu, cpuPrice);
    displayComponentInTable('Ram', selectedRam, ramPrice);
    displayComponentInTable('Graphics Card', selectedGpu, gpuPrice);
    displayComponentInTable('Motherboard', selectedMotherboard, motherboardPrice);
    displayComponentInTable('Storage', selectedStorage, storagePrice);
    displayComponentInTable('Power Supply', selectedPsu, psuPrice);
    displayComponentInTable('Case', selectedCase, casePrice);
    displayComponentInTable('Cooling', selectedCooling, coolingPrice);

    // Handle add-ons
    displayAddonInTable('DVD Disk Drive', 'dvdCheckbox', 'dvdSelection', 'dvdPrice', 30);
    displayAddonInTable('Sound Card', 'soundCheckbox', 'soundSelection', 'soundPrice', 25);
    displayAddonInTable('WiFi Card', 'wifiCheckbox', 'wifiSelection', 'wifiPrice', 20);
    displayAddonInTable('RGB Lights', 'rgbCheckbox', 'rgbSelection', 'rgbPrice', 15);
    
    // Calculate the total price
    calculateTotalPrice();
}

// Function to display a component in the table
function displayComponentInTable(componentName, selection, price) {
    const table = document.getElementById('componentsTable');
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.textContent = componentName;
    cell2.textContent = selection;
    cell3.textContent = `$${price}`;
}

// Function to display an add-on in the table
function displayAddonInTable(componentName, checkboxId, selectionId, priceId, price) {
    const table = document.getElementById('componentsTable');
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.textContent = componentName;
    
    const addonCheckbox = document.getElementById(checkboxId);
    if (addonCheckbox.checked) {
        const selection = addonCheckbox.getAttribute('data-label');
        cell2.textContent = selection;
        cell3.textContent = `$${price}`;
    } else {
        cell2.textContent = ''; // Leave the selection cell empty
        cell3.textContent = ''; // Leave the price cell empty
    }
}

// Function to clear the table
function clearTable() {
    const table = document.getElementById('componentsTable');
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
}


// Function to calculate the total price
function calculateTotalPrice() {
    // Get the prices of selected components
    const cpuPrice = priceList[document.getElementById('cpu').value];
    const ramPrice = priceList[document.getElementById('ram').value];
    const gpuPrice = priceList[document.getElementById('gpu').value];
    const motherboardPrice = priceList[document.getElementById('motherboard').value];
    const storagePrice = priceList[document.getElementById('storage').value];
    const casePrice = priceList[document.getElementById('case_').value];
    const psuPrice = priceList[document.getElementById('psu').value];
    const coolingPrice = priceList[document.getElementById('cooling').value];

    // Initialize total price with the sum of component prices
    let totalPrice = cpuPrice + ramPrice + gpuPrice + motherboardPrice +
        storagePrice + casePrice + psuPrice + coolingPrice;

    // Handle each add-on separately
    const dvdCheckbox = document.getElementById('dvdCheckbox');
    if (dvdCheckbox.checked) {
        totalPrice += parseInt(dvdCheckbox.getAttribute('data-price'));
    }

    const soundCheckbox =document.getElementById('soundCheckbox');
    if(soundCheckbox.checked)
    {
        totalPrice += parseInt(soundCheckbox.getAttribute('soundCheckbox'));
    }

    const rgbCheckbox =document.getElementById('rgbCheckbox');
    if(rgbCheckbox.checked)
    {
        totalPrice += parseInt(rgbCheckbox.getAttribute('rgbCheckbox'));
    }

    const wifiCheckbox =document.getElementById('wifiCheckbox');
    if(wifiCheckbox.checked)
    {
        totalPrice += parseInt(wifiCheckbox.getAttribute('wifiCheckbox'));
    }
    // Repeat the above for other add-ons (sound, wifi, rgb) as well.

    // Display the tax (assumed 10% in this example)
    const taxPrice = totalPrice * 0.1; // 10% tax
    const totalWithTax = totalPrice + taxPrice;

    // Update the displayed prices in the table
    document.getElementById('totalPrice').textContent = `$${totalWithTax.toFixed(2)}`;
    document.getElementById('taxPrice').textContent = `$${taxPrice.toFixed(2)}`;
}