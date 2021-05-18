let loan = +prompt('Nhập số tiền bạn muốn vay (Triệu Đồng):');
let month = +prompt("Nhập thời hạn bạn muốn vay (Tháng):");
if (month < 3) {
    rate = 0.031}
else if (3<month & month<6){
    rate = 0.05}
else if (6<month & month <12) {
    rate = 0.69}
else {
    rate = 0.1}
sum = loan + loan*rate;
document.write('Số tiền bạn vay là: '+loan+'<br>');
document.write('Thời hạn bạn vay là: '+ month +' tháng.'+'<br>');
document.write('Số tiền bạn phải trả sau ' +month + ' tháng là:'+sum +' Triệu Đồng');