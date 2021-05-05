var myAge = 16;
if (myAge > 17) {
    console.log('Welkom');
}
else if (myAge < 18) {
    console.log('U bent nog geen 18 en heeft daarom geen toegang.');
}

// Ladiesnight

const isFemale = true;
if (isFemale) {
    console.log('Vrouwen zijn welkom');
}
else {
    console.log('Mannen zijn niet welkom')
}

//Driverstatus

const driverStatus = 'harrie';
if (driverStatus === 'Bob') {
    console.log('Jij rijd');
}
else {
    console.log('Jij mag niet meer rijden');
}


// Nog meer korting in de kroeg.

var myAge = 20;
const firstName = 'Sarah';
const totalAmount = 100;

// 50% korting
if (myAge >= 18 && myAge <= 25) {
    console.log('Jij krijgt 50% korting ');
}
else if (myAge < 18 && myAge > 25) {
    console.log('Jij krijgt geen korting');
}

// Ludieke actie
if (firstName == 'Bram' || firstName == 'Sarah') {
    console.log('Jij krijgt een gratis biertje');
}
else {
    console.log('Jij moet betalen voor je biertje');
}

// Jubileum korting
if (totalAmount >= 25 && totalAmount < 50) {
    console.log('Jij krijgt gratis bitterballen');
}
else if (totalAmount >= 50 && totalAmount < 100) {
    console.log('Jij krijgt een gratis portie nachos');
}
else if (totalAmount >= 100) {
    console.log('Jij krijgt een gratis fles champagne');
}