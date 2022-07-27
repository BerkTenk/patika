# Merge Sort
[16, 21, 11, 8, 12, 22] 
1.	Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
2.	Big-O gösterimini yazınız. 

1)                    |16|21|11|8|12|22|
                         /           \
		          |16|21|11|       |8|12|22|
                   /      \          /   \
                |16|     |21|11|  |8|12| |22|
                 /        |   |    |  |    \
               |16|     |21| |11| |8||12|  |22|
                 |        \   /    \   /     |
               |16|      |11|21|   |8|12|   |22|
                  \         /         \      /
                   |11|16|21|        |8|12|22|
                           \             /
                          |8|11|12|16|21|22|
2) Sort türünde recursive bir fonksiyon mevcut olduğu için dizi sürekli ikiye bölünmektedir. Her adımda bölünmüş dizilerde işlem yapıldığından dizinin uzunluğu olan n defa işlem yapılır. Bu nedenle O(nlogn) yani O(6log6) şeklinde Big-O gösterimi yapılır.
