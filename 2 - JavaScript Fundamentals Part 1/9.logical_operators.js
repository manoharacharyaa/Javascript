const hasDriversLicense = true;
const hasGoodVision = false;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(hasDriversLicense && hasGoodVision) {
    console.log('Sara is able to drive');
} else {
    console.log('Someone should drive');
}

if(hasDriversLicense && !hasGoodVision || isTired) {
    console.log('Sara is able to drive');
} else {
    console.log('Someone should drive');
}

if(hasDriversLicense || hasGoodVision) {
    console.log('Sara is able to drive');
} else {
    console.log('Someone should drive');
}