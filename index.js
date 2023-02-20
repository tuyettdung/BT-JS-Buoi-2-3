/* BÀI TẬP 1 */
//input: Người dùng nhập vào số ngày làm (Number).
//Progress: Tính tổng tiền lương bằng công thức: Tổng lương = số ngày làm * Lương 1 ngày (100.000).
//output: Tổng lương
function tinhTongLuong() {
  var soNgayLam = Number(document.getElementById("soNgayLam").value);
  var tongLuong = 100000 * soNgayLam;
  document.getElementById("ket-qua-b1").innerHTML = tongLuong.toLocaleString();
}

/* BÀI TẬP 2 */
//input: Người dùng nhập vào 5 số thực.
//Progress: Tính giá trị trung bình của 5 số theo công thức: Gía trị TB = Tổng 5 con số / 5;
//output: Gía trị TB 5 số
function tinhTrungBinh5So() {
  var soThu1 = Number(document.getElementById("soThucThu1").value);
  var soThu2 = Number(document.getElementById("soThucThu2").value);
  var soThu3 = Number(document.getElementById("soThucThu3").value);
  var soThu4 = Number(document.getElementById("soThucThu4").value);
  var soThu5 = Number(document.getElementById("soThucThu5").value);
  var trungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
  document.getElementById("ket-qua-b2").innerHTML = trungBinh;
}

/* BÀI TẬP 3 */
//input: Nhập vào số tiền USD cần đổi
//Progress: đổi từ tiền USD---->VND với công thức: 1 USD = 23500
//output: tiền VND đã được quy đổi.
function doiTienUSD() {
  var tienUSD = Number(document.getElementById("soTienUSD").value);
  var tienVND = 23500 * tienUSD;
  document.getElementById("ket-qua-b3").innerHTML = tienVND.toLocaleString() + ' VND';
}

/* BÀI TẬP 4 */
//input: nhập giá trị chiều dài, chiều rộng
//Progress: tính chu vi theo công thức: (chiều dài+chiều rộng)*2; diện tích = chiều dài*chiều rộng.
//output: hiển thị kết quả chi vi và diện tích
function tinhCVDTHCN () {
    var chieuDai = Number(document.getElementById("chieuDai").value);
    var chieuRong = Number(document.getElementById("chieuRong").value);
    var chuVi = (chieuDai+chieuRong)*2;
    var dienTich = chieuDai*chieuRong;
    var DTCV = document.getElementById('ket-qua-b4').innerHTML = 'Diện tích: '+dienTich+'; '+'Chu vi: '+ chuVi;
}

/* BÀI TẬP 5 */
//input: nhập vào số có 2 chữ số
//Progress: lấy số hàng đơn vị (là phần dư của số chia): so%10; lấy số hàng chục(là phần nguyên của số chia). Sau đó tính tổng 2 số: số hàng chục + số hàng đơn vị.
//Kết quả: hiển thị kết quả tổng 2 số hàng chục và hàng đơn vị
function tinhTong2KySo () {
    var so = Number(document.getElementById('so').value);
    var hangDonVi = so%10;
    var hangChuc = Math.floor(so/10);
    var tong2KySo = hangChuc +hangDonVi;
    document.getElementById('ket-qua-b5').innerHTML= tong2KySo;
}