# Insertion Sort
[22,27,16,2,18,6] -> Insertion Sort
-Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
-Big-O gösterimini yazınız.
-Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.
-Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.
## Insertion Sort Aşamaları

[22,27,16,2,18,6] - (n)  en küçük değer olan 2 değeri ve serinin başındaki 22 değeri yer değiştirilir.
[2,27,16,22,18,6] - (n-1)  6 değeri ve 27 değeri yer değiştirilir.
[2,6,16,22,18,27] - (n-2)  16 değeri yerinde kalır, 22 ve 18 değerleri yer değiştirilir.
[2,6,16,18,22,27] - (n-3)
## Big-O Gösterimi
**[22,27,16,2,18,6]** -> **O(n²)** Sırasız bir dizi olduğu için 2 çevrim gerçekleşir.

- Average case: **O(n²)**
- Worst case: **O(n²)** 
- Best case: **O(n)** Sıralı bir dizi olduğunda tek çevrimde tamamlanır.
- Dizi sıralandıktan sonra 18 sayısı dizinin ortasında olduğu için **Average case** kapsamına girer.


## [7,3,5,8,2,9,4,15,6] Dizisinin İlk 4 Adımı
[2,3,5,8,7,9,4,15,6]
[2,3,4,8,7,9,5,15,6]
[2,3,4,5,7,9,8,15,6]
[2,3,4,5,6,9,8,15,7]
