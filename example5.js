function calculateDiscount(items) {
  if (items > 3) {
    return 0.1;
  }

  return 0;
}

//clean 
function calculateDiscount(items) {
  return items > 3 ? 0.1 : 0;
}