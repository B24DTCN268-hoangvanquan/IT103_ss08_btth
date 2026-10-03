const waitingQueue = ['30A-111', '29B-222', '51C-333'];
console.log('1. Hàng đợi ban đầu:', waitingQueue);

waitingQueue.push('43D-444');
console.log('2. Sau khi xe 43D-444 đến (push):', waitingQueue);

waitingQueue.splice(1, 0, '14A-999');
console.log('3. Sau khi chèn xe ưu tiên 14A-999 vào vị trí 1 (splice):', waitingQueue);

const chargingVehicle = waitingQueue.shift();
console.log('4. Xe được điều phối vào sạc (shift):', chargingVehicle);
console.log('   Hàng đợi còn lại:', waitingQueue);

const kwhList = [30, 45, 25];
const pricePerKwh = 4500;
let totalKwh = 0;

for (let i = 0; i < kwhList.length; i++) {
    totalKwh += kwhList[i];
}

const totalRevenue = totalKwh * pricePerKwh;

console.log('====================================');
console.log('=== BÁO CÁO DOANH THU CA TRỰC ===');
console.log(`- Tổng sản lượng tiêu thụ: ${totalKwh} kWh`);
console.log(`- Tổng doanh thu ca trực: ${totalRevenue.toLocaleString('vi-VN')} VNĐ`);
console.log('====================================');