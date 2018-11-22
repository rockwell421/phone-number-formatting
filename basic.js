
//This function will format a phone number to have (+, 2, 1, 8 digits respectively)
function formatCustomNumber(num) {
      let phone1 = num;
      phone1 = phone1.split(' ').join('');
      phone1 = phone1.replace(/\D/, ''); //if its NaN, automatically delete 
      return phone1.replace(/(\d{2})(\d{1})(\d{8})/, '+$1 $2 $3');
}

//This function will format a phone number to split the number into 2's with spaces between
function formatNumberInTwos(num) {
      let phone1 = num;
      phone1 = phone1.split(' ').join('');
      phone1 = phone1.match(/.{1,2}/g) || [];
      phone1 = phone1.join(' ');
      return phone1;
}
