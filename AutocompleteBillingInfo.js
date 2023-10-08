/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
  const shipname = document.getElementById('shippingName');
  const shipzip = document.getElementById('shippingZip');
  const billname = document.getElementById('billingName');
  const billzip = document.getElementById('billingZip');
  const same_info = document.getElementById('same');
  if(same_info.checked){
    billname.value = shipname.value;
    console.log(billname.value);
    billzip.value = shipzip.value;
  } else {
    billname.value = "";
    billzip.value = "";
  }
}
