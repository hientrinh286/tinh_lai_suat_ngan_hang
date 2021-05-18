let loan = +prompt('Nhập số tiền bạn muốn vay (Triệu Đồng):')
let perd = +prompt("Nhập thời hạn bạn muốn vay (Tháng):")
if (perd < 3) {
    rate = 0.031}
else if (3<perd & perd<6){
    rate = 0.05}
else if (6<perd & perd <12) {
    rate = 0.69}
else {
    rate = 0.1}
sum = loan + loan*rate;
document.write('Số tiền bạn phải trả sau ' +perd + ' tháng là:'+sum ' Triệu Đồng')