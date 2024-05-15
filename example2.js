function isEligible(age, hasConsent) {
  if (age > 18 && hasConsent === true) {
    return true;
  } else {
    return false;
  }
}
// clean code 
function isEligible(age, hasConsent) {
  return age > 18 && hasConsent === true ? true : false;
}