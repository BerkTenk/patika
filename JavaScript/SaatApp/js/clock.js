const myName = document.querySelector('#myName')
myName.innerHTML = prompt("Adınızı Giriniz:")


const currentDateTime = new Date();

// Tarih ve saati ayrı değişkenlere ayır
const currentDate = currentDateTime.toLocaleDateString('tr-TR'); // Türkçe formatına göre tarih
const currentTime = currentDateTime.toLocaleTimeString('tr-TR'); // Türkçe formatına göre saat

// Tarih ve saati yazdır
document.getElementById("saat").textContent = currentTime;
document.getElementById("tarih").textContent =  currentDate; 

myClock.innerHTML 