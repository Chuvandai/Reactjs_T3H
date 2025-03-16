// bài 1
//Hãy viết chương trình nhập vào một số a. Nếu a >= 18,
// in ra màn hình console “Đủ 18 thì quẩy tiếp”
// . Nếu a >= 16, in ra “Đợi thêm ít năm nữa”.
// Ngược lại, in ra “Còn quá nà trẻ”.
// var a = parseInt(prompt("Vui lòng nhập vào 1 số a:"));
// if (a >= 18) {
//   alert("Đủ 18 thì quẩy tiếp");
// } else if (a >= 16) {
//   alert("đợi thêm ít năm nữa");
// } else {
//   alert(" vẫn còn quá trẻ");
// }

// // bai2  Hãy tính tổng các số chẵn từ -10 đến 50.
// let total = 0;
// for (let i = -10; i <= 50; i++) {
//   if (i % 2 == 0) {
//     total += i;
//   }
// }
// console.log(`tổng các số chănz`, total);
// // bài 3 Hãy in ra màn hình console các số chia hết cho 9 trong đoạn [-100; 100]
// for (let i = -100; i < 100; i++) {
//   if (i % 9 == 0) {
//     console.log(`các số chia hết cho 9 là số  ${i}`);
//   }
// }
// // bai4 dùng while in ra dãy số từ 1 đến 200
// let i = 0;
// while (i <= 200) {
//   console.log(`các số là `, i);
// }
// // bai5 Nhập vào 2 số 0 <= x < y <= 100.
// // Hãy tăng dần giá trị của x, giảm dần giá trị của y
// // và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.

// let soA = parseInt(prompt("mời nhập vào số a"));
// const soB = parseInt(prompt("mời nhập vào số B"));

// if ((soA >= 0 && soB <= 100, soA > soB)) {
//   for (let x = soA, y = soB; x++; y--) {
//     console.log(`giá trị của x và y là ${x} , ${y}`);
//   }
// }
// // Thục hành

// // 1 : in ra dãy số 1 đến 500

// for (let i = 1; i < 500; i++) {
//   console.log(`các số từ 1 đến 500`, i);
// }
// // 2: In ra các số chia hết cho 2 và 3 từ 1 đến 300.
// for (let i = 1; i <= 300; i++) {
//   if (i % 2 == 0 && i % 3 == 0) {
//     console.log(`các số chia hết cho 2 và 3 là ${i}`);
//   }
// }
// // 3 Tính tổng các số chẵn trong đoạn [-30, 50].
// var toals = 0;
// for (let i = -30; i <= 50; i++) {
//   if (i % 2 == 0) {
//     totals += i;
//   }
// }
// console.log(`các số chẵn đc tính là : ${toals}`);
// // 4 
// //Nhập vào số n. Tính giai thừa của số n.
// let n= parseInt(prompt('nhập vào số n'));
// let giaiThua=1;
// for(let i=1; i<=n; i++){
//    giaiThua*=i;
// }
// console.log(`giai thừa của ${n} là ${giaiThua} : `);

// 5Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x
// let A= parseInt(prompt('nhập vào số a'));
// let B= parseInt(prompt('nhập vào số B'));
// let X= parseInt(prompt('nhập vào số X'));
// for(let i=A;i<=B; i++){
//    if(i%X==0){
//       console.log(`số nnor nhất trong khoảng 2 số ${A} và ${B} chiaa hết cho ${i}`);
      
//    }
// }
// 6 Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau: S = 1/(1.2) + 1/(2.3) + ... + 1/n(n+1)
//let so_N= parseInt(prompt('nhập vào số n>=2'));
// let tong= 0;
// if(so_N>=2){
//    for(let i=1; i<so_N; i++){
//       tong+= 1/(i*(i+1));
//    }
// }
// console.log('giá trị biểu thức là ', tong);

// 7 Nhập vào số n. Hãy in ra số ước của n.
// let soUoc= parseInt(prompt(' nhập vào số'));
// let count =0;
// for(let i=0; i<soUoc;i++){
//    if(soUoc%i==0){
//       count++;
//    }
// }
// console.log("số ước là +  ", count);

// 8 tính số nguyên tố


// let soNguyenTo= parseInt(prompt("nhập số nto kiểm tra"));
// let is_nguyenTo= true;
// if(soNguyenTo<2){
//    is_nguyenTo=false
// }else {
//    if(soNguyenTo%2==0){
//       return is_nguyenTo = false;
//    }else{
//       for(let i=3; i<soNguyenTo; i+2){
//          if(i%3==0){

//          }
//       }
//    }
// }

// 10 tìm ucln và bcnn

// let m= parseInt(prompt(' nhập số m'))
// let n= parseInt(prompt(' nhập số n'))
// let ucnn=1;
// let min2So= m<n?m:n;
// for(let i=min2So; i>=1; i--){
//    if(m%i==0 && n%i==0){
//       ucnn=i;
//    }
// }
// let bcln= (m*n)/ucnn;
// console.log(`ước chung lớn nhaatd của 2 số m và là ${ucnn}`);
// console.log(`ước chung lớn nhaatd của 2 số m và là ${bcln}`);

// // 11
// let counts = 0; 
// let nhapSo;

// while (count < 5) { 
//     nhapSo = parseInt(prompt("Mời nhập số từ 1 đến 20:"));

//     if (nhapSo >= 1 && nhapSo <= 20) {
//         switch (nhapSo) {
//             case 1:
//             case 2:
//             case 3:
//             case 4:
//             case 18:
//             case 12:
//             case 24:
//                 alert("Bạn đã nhập đúng!");
//                 count = 0; 
//                 break;
//             case 5:
//             case 6:
//             case 7:
//                 alert("Bạn đã nhập sai!");
//                 count++; 
//                 break;
//             default:
//                 alert("Số này không nằm trong danh sách kiểm tra!");
//                 counts++;
//                 break;
//         }
//     } else {
//         alert("Số nhập vào không hợp lệ! Vui lòng nhập từ 1 đến 20.");
//         count++;
//     }
//     if (count >= 5) {
//         alert("Bạn đã nhập sai quá 5 lần! Chương trình kết thúc.");
//         break; 
//     }
// }

//12 nhập vào số n và in ra bảng cửu chương số n

let SoN = parseInt(prompt("Nhập vào bảng cửu chương số n:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${SoN} x ${i} = ${SoN * i}`);
}

//16
let canNang= parseInt(prompt('nhập cân nặng'));
let chieuCao= parseInt(prompt('nhập chiều cao'));
let BMI= canNang/chieuCao;
if(BMI<18.5){
   alert('nhẹ cân')
}else if(BMI>=18.5&&BMI<23){
   alert('trung bình');
}
else if(BMI>23&&BMI<25){
   alert('thừa cân');
}else if(BMI>25){
   alert('béo phì');
}

// 13 Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n. VD: n = 3
let canh= parseInt(prompt('nhập cạnh'));
for(let i=0;i<canh;i++){
   let row="*";
   for(let j=0;j<canh;j++){
      row+="*";
   }
}
console.log(row);


