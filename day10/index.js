/**
 * Câu điều kiện
 */

// Kiểm tra n có lơn hơn 0

let n = 10;

if  (n > 0) {
    console.log("n lớn hơn 0");
}

// Kiểm tra n là số chẵn hay lẻ

if (n % 2 === 0) {
    console.log("n là số chẵn")
} else {
    console.log("n là số lẻ")
}

// Kiểm tra n là số dương, số âm, hay số 0

if (n > 0) {
    console.log("n là số dương")
} else if (n < 0) {
    console.log("n là số âm")
} else {
    console.log("n là số 0")
}