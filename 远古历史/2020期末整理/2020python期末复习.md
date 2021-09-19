## 第1章 Python 顺序结构
```python
"""程序代码
任务：已知直角三角形的斜边计算公式，其中邻边 x 和 y 我们通过键盘输入获取，且都为整型。请使用 math 库中的函数来求斜边 d 的值。
"""

 #请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########### Begin ###########
# 第1步：导入Python中的模块math
import math
# 第2步：使用input获取输入值赋值给x
x=int(input())
# 第3步：使用input获取输入值赋值给y
y=int(input())
# 第4步：使用math中的数学函数计算斜边长，将结果赋值给d
d=math.sqrt(x*x+y*y)
# 第5步：打印出斜边长的值
print(d)
########### End ###########
```

```python
"""
任务：使用 math 模块的数学函数来计算半径为 R 的球体的体积，R 使用 input 函数获取，数据类型为整型。
"""
# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########### Begin ###########
# 第1步：导入math模块
import math
# 第2步：使用input函数获取球体的半径赋值给R
R=float(input())
# 第3步：计算球体的体积，将结果赋值给result
result=4/3*math.pi*R*R*R
# 第4步：打印出球体的体积，结果四舍五入后保留 5 位小数
print("%.5f" % result)
########### End ##########
```

```python
"""程序代码
任务：现在分别有一个二进制数和十六进制数，二进制数为0b1110，十六进制数为0x2b，
请将二进制数转换为十六进制，十六进制数转换为二进制。
格式化输出格式为：
"二进制-十六进制结果为：change2_16"
"十六进制-二进制结果为：change16_2"
"""

 num2 = 0b1110     # 变量num2的值为二进制数 
num16 = 0x2b     # 变量num16的值为十六进制数 

  
#请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########### Begin ###########
# 第1步：将二进制转换成十六进制的结果赋值给change2_16
change2_16=hex(num2)
# 第2步：将十六进制转换成二进制的结果赋值给change16_2
change16_2=bin(num16)
# 第3步：按照格式化输出要求打印出两个转换后的结果
print("二进制-十六进制结果为：%s"%change2_16)
print("十六进制-二进制结果为：%s"%change16_2)
########### End ###########
```

```python
"""
任务：使用 max 函数得到两个数中的较大者并输出，这两个数通过 input 获取，第一个为二进制数，第二个为十六进制数。
"""
 
#请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 使用 max 函数得到两个数中的较大者并输出
num2=input()
num16=input()
num2=int(num2,2)
num16=int(num16,16)
m=max(num2,num16)
print(m)
##########End##########
```

```python
"""程序代码
任务：现在分别有一个八进制数和十六进制数，八进制数为0o16，十六进制数为0x1e，
请将八进制数转换为十六进制，十六进制数转换为八进制。
格式化输出格式为：
'''
八进制-十六进制结果为：change8_16
十六进制-八进制结果为：change16_8
'''
"""

 num8 = 0o16     # 变量num8值为一个八进制数
num16 = 0x2b     # 变量num16值为一个十六进制数 

  
#请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########### Begin ###########
# 第1步：将八进制转换成十六进制的结果赋值给change8_16
change8_16=hex(num8)
# 第2步：将十六进制转换成八进制的结果赋值给change16_8
change16_8=oct(num16)
# 第3步：按照格式化输出要求打印出两个转换后的结果
print("八进制-十六进制结果为：%s"%change8_16)
print("十六进制-八进制结果为：%s"%change16_8)
########### End ###########
```

```python
"""程序代码
任务：已知 2018 年 1 月 1 号是星期一，2 月 15 日是除夕，余数为 0 表示星期日，余数为 1 表示星期一，余数为 2 表示星期二，以此类推。
"""

 #请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########### Begin ###########
#第1步：计算2月15日是2018年的第几天，赋值给变量day
day = 46
#第2步：用day的值和一周的天数进行取余运算，将余数赋值给week_day，即得到需要的星期结果
week_day = day % 7
#第3步：打印week_day的值
print(week_day)
########### End ###########
```

## 第3章 Python 循环结构

```python
"""
任务：判断给定的整数是否是素数。该整数是通过 input 获取。如果输入的数小于1，则输出“输入数据不合法”。
"""


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 判断给定的整数是否是素数，并按照输出格式打印结果
n = int(input())
if n > 1:
    for i in range(2, n):
        if (n % i) == 0:
            print("不是素数")
            break
    else:
        print("是素数")
else:
    print("输入数据不合法")
##########End##########
```

```python
"""
任务：计算给定列表中所有正数的和。
"""

list_num = [-5, 0, 5, 8, 101, -16, -15, 56, 20, -32, 20, 0, -19, 50, 100, 205, 302, 1901, 302]

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 使用continue语句计算给定列表中所有正数的和，按照输出格式打印结果
sum=0
for i in list_num:
    if i < 0:
        continue
    sum += i
print("正数和为%d" % sum)
##########End##########
```

```python
"""
任务：给定一个整数 n，判断 n 以内的正数是否含有水仙花数，n 通过 input 获取;
如果有，输出“有水仙花数”，如果没有，则输出“没有水仙花数”。
"""

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 使用for-else判断 n 以内的正数是否含有水仙花数
n = int(input())
for n in range(100,n+1):
    g = n % 10
    s = n // 10 % 10
    b = n // 100
    if g ** 3 + s ** 3 +b ** 3 == n:
        print("有水仙花数")
        break
else:
    print("没有水仙花数")
########## End ##########
```

```python
"""
任务：分别统计给定的列表中奇数和偶数的个数。
"""

list_value = [1, 2, 18, 7, 33, 22, 1045, 98, 78, 36, 10, 111, 105, 4320, 1014, 50, 63, 15, 18, 910, 2010, 3201, 2501, 25, 120, 320]

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 使用for循环统计给定的列表中奇数和偶数的个数，并按照输出格式打印出结果
j=0
o=0
for i in list_value:
    if i % 2 == 0:
        o += 1
    else:
        j += 1
print("奇数共%d个，偶数共%d个"%(j,o))
##########End##########
```

```python
"""
任务：编写代码实现凯撒密码加密，密码只能为大写字母，原密码和偏移量都通过input函数获取。需要考虑边界效应，如果密码超过了Z，则重新用A、B、C...表示。
"""


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########### Begin ###########
# 第1步：通过input函数获取偏移量和原密码，分别赋值给p和key
key = input()
p = int(input())
# 第2步：通过while循环获取key中的每一个字符
for i in key:
# 第3步：将每一个字符转换成ASCII码值，然后与偏移量相加，将结果转换成相应的字符
    if ord(i)+p > 90:
        print(chr(ord(i)+p-26),end='')
    else:
        print(chr(ord(i)+p),end='')
# 第4步：将所有字符相加，打印出加密后的密码

########### End ###########
```

```python
"""
任务：构造-20到50摄氏度的摄氏-华氏温度对应表。本关的摄氏温度值都为整数。温度表中的温度跨度为1度。数字与---之间有一个空格。
输出格式：
摄氏度---华氏度
-20 ---> -4.000000
-19 ---> -2.200000
   ···
   ···
50 ---> 122.000000
"""

min_temp = -20     # 最小温度值
max_temp = 50     # 最大温度值

print("摄氏度--->华氏度")     # 打印出表的第一格

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########### Begin ###########
# 使用while循环并按照输出格式打印出摄氏-华氏温度对应表
i = min_temp
while i >= min_temp and i <= max_temp:
    print("%d ---> %f" % (i, i * 9 / 5 + 32))
    i += 1
########### End ###########
```

```python
"""
任务：模仿银行输入的密码出错 3 次，而锁定账户(三次重新输入密码的机会)，请编写代码实现该功能。密码通过 input 函数获取。正确密码为"123"。
如果密码错误，输出一次“密码错误”，如果密码正确，输出“密码正确”。
"""

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 使用while...break语句实现密码输入判断功能，并按照任务要求打印信息
i = 0
while i < 3:
    password = input()
    if password == "123":
        print("密码正确")
        break
    else:
        print("密码错误")
    i += 1
##########End##########
```

```python
"""
任务：给定一个正整数 n，统计小于等于 n 的正奇数的个数。n 通过 input 获取。如果输入的数据小于或者等于 0，则输出“输入数据不合法”。
"""

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 使用continue语句和循环语句统计小于等于 n 的正奇数的个数，按照输出格式打印结果
n = int(input())
m = 0
if n <= 0:
    print("输入数据不合法")
else:
    for i in range(0, n + 1):
        if not i % 2 == 0:
            m += 1
    print("正奇数个数为%d" % m)
##########End##########
```

```python
"""
任务：给定一个正整数 n，这个正整数通过 input 获取，统计 2 到 n 的素数个数是否超过了 10 个。
如果超过了 10 个，则输出“素数数量超过10个”，如果少于 10 个，则输出“素数数量少于10个”，如果输入的数是 0 或 1，则输出“输入数据不合法”。
"""

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 使用input获取正整数n，判断2到n的素数是否超过十个
n = int(input())
add = 0
if n == 0 or n == 1:
    print("输入数据不合法")
else:
    for num in range(2, n+1):
        if num == 2:
            add += 1
        else:
            for i in range(2, num):
                if (num % i) == 0:
                    break
            else:
                add += 1
    if add > 10:
        print("素数数量超过10个")
    else:
        print("素数数量少于10个")

##########End##########
```

```python
"""
任务：使用 for 循环计算某个正整数的阶乘，这个数通过 input 函数获取。如果输入的数不为正整数，则输出“输入数据不合法”。
注意：0 的阶乘为 1。
"""

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########### Begin ###########
# 使用 for 循环计算某个数的阶乘，并按照格式打印结果
num = int(input())
s = 1
if num < 0:
    print("输入数据不合法")
elif num == 0:
    print("0的阶乘为1")
else:
    for i in range(1, num + 1):
        s = s * i
    print("%d的阶乘为%d" % (num, s))
########### End ###########
```

```python
"""
任务：使用while循环打印出九九乘法表。注意每行算式间有一个空格，每一行的末尾有一个空格，乘号使用的是 x。
输出格式：
1x1=1
2x1=2 2x2=4
3x1=3 3x2=6 3x3=9
     ···
9x1=9 9x2=18 9x3=27 9x4=36 9x5=45 9x6=54 9x7=63 9x8=72 9x9=81
"""

#请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########### Begin ###########
# 使用while循环打印出九九乘法表
i = 1
while i <= 9:
    j = 1
    while j <= i:
        a = i * j
        print("%dx%d=%d " % (i, j, a), end='')
        j += 1
    print()
    i += 1
########### End ###########
```


## 第4章 Python 列表、元组和集合

```python
"""
任务：给定一个列表，利用集合的性质以及它的内置函数来对列表进行去重，打印去重后的列表。
"""

list1 = [453,5,3,4,5,5,7,6,77,87,8,89,78,78,86,78,56,75,623,4523,45,234,778,9,78,989,0,8,98,68,67,856,7,46,45,6]
# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 利用集合的性质以及它的内置函数来对列表进行去重，打印去重后的列表
print(list(set(list1)))
##########End##########
```

```python
"""
任务：给定一个字典，该字典的值只能是整型数据，键为该数字的字符型，比如`{"5":5}`。
但是字典中的键值对并不是都按照这个规则排序的，可能出现`{"5":4}`的情况，请编写代码将字典的值改为和键一致的整型数值。
例如：{"5":4,"3":2}改为{"5":5,"3":3}
"""

dict1 = {"4":3,"14":14,"5":6,"33":33,"25":25,"18":68,"0":0,"10":3,"42":24,"7":1,"64":64,"49":49,"90":90,"48":48,"68":86,"41":12,"46":46,"91":91,"75":75,"27":39,"34":3,"57":11}

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 请编写代码实现任务要求，打印更改后的字典
for key,value in dict1.items():
    dict1.update({key:int(key)})
print(dict1)
##########End##########
```

```python
"""
任务：给定一个数组，使用 for 循环复制这个数组，然后去除列表内的重复元素，最后对列表进行排序。打印去重且排序后的复制列表。
"""

list1 = [88, 5, 8, 6, 1, 23, 1, 15, 1, 61, 31, 6, 51, 1, 984, 9849, 1, -100, 513, 891, 3, 1, 48, 465, 132, 165, 4, 6,
         132, 498, 46, 132, 165, 468, 498, 484, 11, 6, 84, 65, 132, 1, 64, 684, 6981, 324, 984, 61, 32, 468, 4651, 6, 4,
         9814, 654, 984, 68, 7]

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 使用 for 循环复制这个数组，然后去除列表内的重复元素，最后对列表进行排序。打印去重且排序后的复制列表
list2 = []
for x in list1:
    list2.append(x)
for x in list1:
    num = 0
    for y in list2:
        if y == x:
            num += 1
        if num == 2:
            list2.remove(y)
            break
list2.sort()
print(list2)
##########End##########
```

```python
import copy


list1 = eval(input())     # 获取列表

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 使用所学的拷贝来完成本关任务，打印删除指定元素后的列表
list1=list(filter(lambda s:isinstance(s,int)==True or len(s)<=3,list1))
print(list1)
########## End ##########
```

```python
"""
任务：给定一个列表，使用列表推导式找出列表中长度大于 5 的名字，并打印该列表。
"""
 
names = [['Tom', 'Billy', 'Jefferson', 'Andrew', 'Wesley', 'Steven', 'Joe'],['Alice', 'Jill', 'Ana', 'Wendy', 'Jennifer', 'Sherry', 'Eva']]
 
# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 使用列表推导式找出列表中长度大于 5 的名字，并打印该列表
names2=[num for elem in names for num in elem]
names3 = [i for i in names2 if len(i)>5 ]
print(names3)

##########End##########
```

```python
"""
任务：给定一个元组，利用列表和元组的相互转换实现元组元素的更改，去除元组中的整型数据。打印更改后的元组。
"""

tup = (1,"3",4,5,"4","a",(1,2,3,4),"b","c",6,17,"d",("a","b","c"),0,"e","f",True,10,"False",11,"h","A","B","C",30,"D",-35,-60,(-1,-2,-5))


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 利用列表和元组的相互转换实现元组元素的更改，去除元组中的整型数据
list=list(tup)
list1=[]
for s in list:
    if type(s) != int:
        list1.append(s)
tup=tuple(list1)
print(tup)
##########End##########
```

```python
"""
任务：给定一个集合，使用集合的内置函数来删除集合内的非整型数据，然后将集合转换成列表并对其进行排序。
打印处理之后的列表。
"""

agg = {1,"3",4,5,"4","a",(1,2,3,4),"b","c",6,17,"d",("a","b","c"),0,"e","f",True,10,"False",11,"h","A","B","C",30,"D",-35,-60,(-1,-2,-5)}

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 第一步：使用深拷贝将元组复制一遍，否则使用for循环遍历时会报错
import copy
agg2=copy.deepcopy(agg)
# 第二步：使用集合的内置函数来删除集合内的整型数据,然后将集合转换成列表并对其进行排序,打印处理之后的列表
list1 = []
for s in agg2.copy():
    if type(s) == int:
        list1.append(s)
list1.sort()
print(list1)
##########End##########
```

```python
"""
任务：给定一个列表 phone_list，列表的元素为手机号，统计列表 phone_list 中给出的手机号号码段分别归属中国移动、联通、电信、虚拟运营商的数量值，以字典的形式输出四个运营商号码的数量。
输出格式：{"移动":num1,"联通":num2,"电信":num3,"虚拟":num4}
"""
 
phone_list = [13326356606, 14009606880, 13117746845, 13737677952, 13539707714, 13406608419, 13198674678, 13349102382, 13667722277, 13110521697, 13946115637, 13149723752, 13541815803, 13079560023, 13973654411, 13748468789, 13338020203, 13268915246, 13595403218, 14081566048, 13312897257, 13550638431, 13211576991, 13903245633, 13510740896, 13271439724, 13454284234, 13472286896, 13597236046, 13906631939, 14806548278, 17900858560, 19726770323, 19918104176, 19539570356, 19900529691, 15226847591, 19654997415, 15121618282, 15442480473, 19339053026, 19366641759, 14463265315, 19073714017, 17006580414, 14271944781, 15631019895, 19841137433, 16290971678, 19811009520, 18552062840, 16743208543, 16440365880, 16620053748, 15653576577, 15333629138, 17649390649, 15692838670, 15037630744, 19939968696, 19763751652, 18277908098, 17808293824, 18833820310, 18194092865, 18660620683, 14425361601, 18539331591, 19030911487, 19435815688, 15996524456, 14452455624, 15690512591, 19060853054, 18150019502, 17308588318, 14117735569, 17647113910, 17556077173, 19003416927, 14130557697, 16120832424, 16763584569, 16137496845, 16575402975, 15592200859, 18340329180, 14271394612, 15062698355, 19858230631, 18632675309, 17218219173, 14552234749, 15646357287, 19565403573, 18842258105, 18311403339, 14230644149, 14272313801, 19318196032]

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 编写代码判断电话号码的运营商归属，并以字典的形式输出各个运营商的电话号码数量
yidong=[134,135,136,137,138,139,147,148,150,151,152,157,158,159,165,172,178,182,183,184,187,188,198,197]
liantong=[130,131,132,140,145,146,155,156,166,167,185,186,175,176,196]
dianxin=[133,1349,149,153,180,181,189,177,173,174,191,199,162,190]
xuni=[170,171]
y=0
l=0
d=0
n=0
for i in phone_list:
    for j in yidong:
        if str(i)[0:len(str(j))]==str(j):
            y=y+1
for i in phone_list:
    for j in liantong:
        if str(i)[0:len(str(j))]==str(j):
            l=l+1
for i in phone_list:
    for j in dianxin:
        if str(i)[0:len(str(j))]==str(j):
            d=d+1
for i in phone_list:
    for j in xuni:
        if str(i)[0:len(str(j))]==str(j):
            n=n+1
dict1=dict.fromkeys(['移动','联通','电信','虚拟'])
dict1['移动']=int(y)
dict1['联通']=int(l)
dict1['电信']=int(d)
dict1['虚拟']=int(n)
print(dict1)
##########End##########
```

```python
# 请在下面的 Begin-End 之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 第1步：使用 input 函数获取列表
x=eval(input())
# 第2步：去除列表内的非重复值，打印处理后的列表
y=[]
for i in x:
    if x.count(i)!=1:
        y.append(i)
print(y)
########## End ##########
```

```python
"""
任务：给定一个列表，使用列表推导式来复制它，并筛选掉其中的负数，打印复制后的列表。
"""

list1 = [2,3,-43,4,5,-5,4,-535,34,5,345,-3,45,3,6,345,-546,546,34,-56,34,5,86,7,0,12341,979,7,67,-856,454,8,-64,342,-63,568]

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########### Begin ###########
# 使用列表推导式来复制给定的列表，并筛选掉其中的负数，打印复制后的列表
list2 = [i for i in list1 if i>=0 ]
print(list2)
########### End ###########
```

```python
"""
任务：给定一个列表，使用 for 循环来复制它，对复制后的列表进行倒序排序。打印原列表和排序后的列表。
"""

list1 = [6,9,12,3,5,8,1,8,131,58,1,581,31,8,46,13,8,4,613,30,546,0,68,4,1,3,16,99,61,-102,-290,116.5,165,-2.3]
 
# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 使用for循环复制列表，对复制后的列表进行倒序排序，并打印原列表和排序后的列表
print("原列表为：",end="")
print(list1)
list2=[i for i in list1]
list3=sorted(list2,reverse=True)
print("复制后的列表为：",end="")
print(list3)
##########End##########
```

```python
"""
任务：给定 a、b、c 三个变量，三个变量的值都是通过 input 函数获取，且都是整型数据，请编写代码交换三个变量的值，a 的值给 b，b 的值给 c，c 的值给 a，交换之后，输出 a、b、c 的结果。
"""

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 编写代码实现三个变量值的交换，按照预期输出打印三个变量交换后的值
a = input()
b = input()
c = input()
a, b = b, a
a, c = c, a
print("a:%s,b:%s,c:%s" % (a,b,c))
##########End##########
```

## 第5章 Python 函数

```python
"""
任务：给定两个列表，编写一个匿名函数实现比较两个列表中对应下标位置的元素的大小，将大的元素组成一个新的列表，函数参数通过 input 获取。
"""

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 请使用map函数和lambda表达式实现本关任务
list1=eval(input())
list2=eval(input())
d=map(lambda x,y: x if x > y else y,list1,list2)
print(list(d))
########## End ##########
```

```python
"""
任务：自定义函数message，实现学生的信息输出。
"""

'''
定义函数message，参数有位置参数name，默认参数age（默认值为6），可变参数scores,
关键字参数kw
'''


########### Begin ###########
# 第一步：定义参数
def message(name, age="6", *scores, **kw):
# 第二步：对可变参数scores进行求和，将结果赋值给result
    result=0
    for n in scores:
        result = result + n
# 第三步：通过print打印信息，输出格式可以参考下方的测试集
    print('name:', name, 'age:', age, 'result:', result, 'kw:',kw)
########### End ###########

# 以下为测试代码，不是本实训要求掌握的内容，请不要修改
if __name__ == '__main__':
    sign = int(input())
    if sign == 0:
        name = input()
        message(name)

    elif sign == 1:
        name = input()
        age = input()
        message(name, age=age)

    elif sign == 2:
        name = input()
        age = input()
        score1 = int(input())
        score2 = int(input())
        message(name, age, score1, score2)

    elif sign == 3:
        name = input()
        age = input()
        score1 = int(input())
        score2 = int(input())
        kw = {'hobby': 'basketball'}
        message(name, age, score1, score2, **kw)

    else:
        name = input()
        age = input()
        score1 = int(input())
        score2 = int(input())
        kw = {'height': 122, 'weight': 20}
        message(name, age, score1, score2, **kw)
```

```python
"""
任务：自定义函数calculate，实现 2 个数之间的加、减、乘、除运算，并返回结果值。
函数calculate接收三个参数，其中第一个参数为符号判断值，第二个参数为第一个运算数，
第三个参数为第二个运算数。符号判断值有4个，分别为1、2、3、4，依次对应加、减、乘、
除运算。
"""
# 定义函数calculate
def calculate(sign,var1,var2):
    # 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
    ########### Begin ###########
    # 第一步：判断sign是否等于1，等于1的话，进行加法运算，并将结果赋值给temp
    if sign == 1:
        temp = var1 + var2

    # 第二步：判断sign是否等于2，等于2的话，进行减法运算，并将结果赋值给temp
    elif sign == 2:
        temp = var1 - var2

    # 第三步：判断sign是否等于3，等于3的话，进行乘法运算，并将结果赋值给temp
    elif sign == 3:
        temp = var1 * var2

    # 判断sign是否等于4，等于4的话，进行除法运算
    else:
        # 判断被除数var2是否等于0，等于0的话，返回“被除数var2不能是0！”
        if var2 == 0:
            return '被除数var2不能是0！'
        # 第四步：被除数var2不等于0，进行除法运算，并将结果赋值给temp
        else:
            temp = var1 / var2

    ########### End ###########
    return temp     # 返回结果值


sign = int(input())     # 从后台获取数据sign
var1 = int(input())     # 从后台获取数据var1
var2 = int(input())     # 从后台获取数据var2
result = calculate(sign,var1,var2)     # 得到计算结果
print(result)     # 打印计算结果
```

```python
"""
任务：定义一个 compare 函数和一个嵌套函数 max_value，compare 函数用于比较两个数的大小，max_value 函数用于得到一串整型数据中的最大值。
"""


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 使用函数的嵌套定义完成两个函数的创建
def max_value(p):
    def compare(a,b):
        if a > b:
            return a
        else:
            return b
    max_v=p[0]
    for i in p:
        max_v=compare(i,max_v)
    return max_v
##########End##########
# 请勿修改下列函数调用的代码
max_number = max_value(eval(input()))     # eval(input())是将输入的字符串转换为列表
print(max_number)
```

```python
"""
任务：定义一个 compare 函数和一个 max_value 函数，compare 函数用于比较两个数的大小，
max_value 函数用于得到一串整型数据中的最大值。
"""


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 第一步：定义compare函数，返回两个数中较大的值
def compare(x,y):
    return x if x > y else y
# 第二部：定义max_value函数，返回数据中的最大值
def max_value(list_data):
    value = list_data[0]
    for x in range(1,len(list_data)):
        value = compare(list_data[x],value)
    return value
##########End##########
# 请勿修改下列函数调用的代码
max_number = max_value(eval(input()))     # eval(input())是将输入的字符串转换为列表
print(max_number)
```

```python
"""
任务：创建一个函数 Number，函数的功能为判断一个整数是否为正数，如果是正数，返回 True，如果是不是正数，
返回 False。被判断的整数都是通过 input 获取。如果是正数，打印"是正数"，如果不是正数，打印"不是正数"。
"""

num = int(input())     # 被判断的整数
# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 第一步：创建一个函数 Number，函数的功能为判断数字是否是正数，如果是正数，返回 True，如果是负数，返回 False
def Number(num):
    if num>0:
        return "True"
    else:
        return "False"
# 第二步：判断函数的返回值，按照任务要求打印信息
if Number(num)=="True":
    print("是正数")
else:
    print("不是正数")
##########End##########
```

```python
"""
任务：使用递归打印斐波拉契数列的前 n 位数字。n 通过 input 函数获取。
"""


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 定义一个函数，使用递归打印斐波拉契数列的前 n 位数字
def add(n):
    if n > 2:
        return (add(n - 1) + add(n - 2))
    if n == 2:
        return 1
    if n == 1:
        return 0

n = int(input())
print(add(n+1))

########## End ##########
```

```python
"""
任务：使用作用域中相关的关键字修改下列 begin-end 中的代码，使函数 average 实现计算平均分的功能。
"""

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 请使用作用域相关的关键字修改下列代码，实现计算平均分的功能
def average(*args):
    def sum(args):
        global score
        score  = 0
        for x in args:
            score += x
    sum(args)
    return score / len(args)
##########End##########
result = average(56,76,84,98,78,79,89,67,86,78,67,67,95,24,96,96,86,65,83,86,80)
print(result)
```

```python
"""
任务：设计一个生成器函数 count()，每次使用 next 函数调用该函数时，数字就会加 1。请编写代码实现一个从 0 开始的计数器。
"""


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 定义生成器函数count(),实现一个从0开始的计数器
def count():
    for x in range(num):
        yield x
########## End ##########
func = count()
num = int(input())
for x in range(num):
	print(next(func))
```

```python
"""
任务：将下列函数转换为匿名函数，该函数的作用是得到列表中的偶数，函数参数通过 input 获取。
将列表中的偶数添加到一个新列表中，打印纯偶数的列表。
``
def func(num_list):
	list1 = []
	for x in num_list:
		if x%2 == 0:
			list1.append(x)
	return list1
``
"""


# 请在下面的 Begin-End 之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 请使用 lambda 表达式实现本关任务
list1=eval(input())
list2=list(filter(lambda x:x%2==0,list1))
print(list2)
########## End ##########
```

```python
"""程序代码
任务：自定义函数 ScoreAverage，该函数的作用是计算学生成绩的平均分，但是学生人数未知；
成绩的输入方式通过给函数传递参数来实现，请编写代码实现计算平均分。
"""

#请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 使用可变参数实现函数的功能，返回学生成绩的平均分
def ScoreAverage(*list):
    score = 0
    for x in list:
        score += x
    return score / len(list)
##########End##########
# eval()是Python的内置函数，它能将字符串转换为可执行的表达式，并返回表达式的值
score = eval(input())
print("平均分为",score)
```

```python
"""
任务：创建函数 circle_area，它有一个参数，表示圆的半径，半径值通过 input 函数获取。该函数用于实现圆的面积计算，并返回面积结果。
"""


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 第一步：创建函数 circle_area
import math
def circle_area(r):
    area=math.pi*r**2
    return area
# 第二步：计算圆的面积计算，并返回面积结果
r=int(input())
########## End ##########
area = circle_area(r)
print("圆的面积为",area)
```

```python
"""
任务：定义一个函数 statistic() 和一个嵌套函数 count() ，statistic() 函数参数接收一个字符串，
返回字符串中每个字符及该字符出现次数的一个字典，count() 函数用于计算每个字符在字符串中出现的次数。
函数中需要用到的字符串通过 input() 获取。
"""


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 定义statistic()函数
def statistic(s):
    dic={}
# 定义嵌套函数count()
    def count(ch1,s):
        num=0
        for x in s:
            if x==ch1:
                num+=1
        return num
    for i in s:
        if i not in dic:
            dic[i]=count(i,s)
        else:
            continue
    return dic

# 获取字符串，调用函数并输出结果字典
s=input()
print(statistic(s))

########## End ##########
```

```python
"""
任务：编写函数 count() 和 statistic()，statistic() 函数参数接收一个字符串，返回字符串中每个字符及该字符出现次数的一个字典，count() 函数用于计算每个字符在字符串中出现的次数。函数中需要用到的字符串通过 input() 获取。
"""


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 定义count()函数
def statistic(s):
    dic={}
# 定义嵌套函数count()
    def count(ch1,s):
        num=0
        for x in s:
            if x==ch1:
                num+=1
        return num
    for i in s:
        if i not in dic:
            dic[i]=count(i,s)
        else:
            continue
    return dic

# 获取字符串，调用函数并输出结果字典
s=input()
print(statistic(s))

# 定义 statistic()函数

# 获取字符串，调用函数并输出结果字典
string = input()
print(statistic(string))

##########End##########
```

```python
"""
任务：定义一个函数 average，用于计算考试成绩的平均分，每次传入的参数个数不确定，如果参数中出现了小于 0 或者大于 100 的数时，输出"分数数据异常"，否则输出平均分。
"""

 
# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
##########Begin##########
# 定义函数 average，计算平均分并按照要求返回结果
def average(*list):
	sumscore = 0
	for x in list:
		if x > 100 or x < 0:
			return 0
		sumscore += x
	return sumscore / len(list)

##########End##########
# 请勿修改下列代码
score = eval(input())     # 将输入的字符串转换为可执行的表达式
if score:
	print("平均分为",score)
else:
	print("分数数据异常")
```

```python
"""
任务：使用变量作用域相关的关键字修改下方 Begin-End 之间的代码，使 max_value 函数实现求最大值的功能。
"""

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 使用变量作用域相关的关键字修改代码，使max_value函数实现求最大值的功能
def compare(x, y):
    return x if x > y else y


def max_value(*list_data):
    global value
    value = list_data[0]
    for x in range(1, len(list_data)):
        value = compare(list_data[x], value)


########## End ##########

value = 0
max_value(42323, 457, 4245, 6, 3, 5463, 6, 7, 45, 725, 723, 7, 3, 46, 86, 7, 56, 8, 567, 5, 5745, 26, 34, 63, 412, 35,
          4, 76585, 67, 3, 45, 4, 5, 34, 5, 47, 5686)
print(value)
```

```python
"""
任务：定义一个生成器函数 fib()，实现打印斐波拉契数列的前 n 项。n 是用过 input 获取。
"""


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 定义生成器函数 fib()，实现斐波拉契数列的打印
def fib(n):
    f1 = 1
    f2 = 1
    if n == 1 or n == 2:
        yield 1
    else:
        for i in range(1, n - 1):
            f1, f2 = f2, (f1 + f2)
        yield f2


n = int(input())
for x in range(n):
    print(next(fib(x + 1)))
########## End ##########
```

```python
"""
任务：给定一个嵌套列表，递归实现嵌套列表求和，打印求和后的结果。
"""
list1 = eval(input())
# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 定义一个函数，递归实现嵌套列表求和,打印求和后的结果
def sumadd(list1):
    sum = 0
    for i in list1:
        if type(i) == int:
            sum += i
        else:
            sum += sumadd(i)
    return sum
print(sumadd(list1))
########## End ##########
```

## 第6章 Python 面向对象

```python
"""
任务：定义一个 Math 类，在类中定义一个 mean 方法，传入的参数为一个列表，该方法的作用是计算列表内所有元素的平均值。
"""


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 定义 Math 类，并在类中定义 mean 方法
class Math:
    def mean(self, list1):
        self.list1 = list1
        num = 0
        for x in self.list1:
            num += x
        return num / len(list1)


########## End ##########
# 实例化类
x = Math()
list1 = eval(input())
print("平均值为", x.mean(list1))
```

```python
import math

R = int(input())  # 获取球的半径


class Sphere:
    # 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
    ########## Begin ##########
    # 第1步：定义构造函数
    def __init__(self, R):
        self.pi = math.pi
        self.r = R

    # 第2步：定义volumn方法求球的体积
    def volumn(self):
        return (self.r ** 3) * self.pi * (4 / 3)


# 第3步：实例化类，调用volumn方法求体积，打印球的体积
s = Sphere(R)
print("体积为%s立方米" % s.volumn())
########## End ##########
```

```python
"""
任务：定义一个 Cuboid 类，该类有长、宽和高三个属性，而且类中定义了一个求表面积的函数 area 和 体积函数 volume，
长、宽和高都是通过 input 函数获取，请编写代码实现该类。
"""


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 第一步：定义Cuboid类，定义长、宽和高三个属性
class Cuboid:
    def __init__(self, length, wigh, high):
        self.length = length
        self.wigh = wigh
        self.high = high
# 第二步：在类中定义area函数和volume函数
    def area(self):
        return 2 * (self.length * self.wigh + self.length * self.high + self.wigh * self.high)
    def volume(self):
        return self.length * self.wigh * self.high


# 第三步：实例化类，并调用函数
a = int(input())
b = int(input())
c = int(input())
C = Cuboid(a, b, c)
area = C.area()
volume = C.volume()
print("表面积为%d平方米" % area)
print("体积为%d立方米" % volume)
########## End ##########
```

```python
class Account:
# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 第1步：补充实例属性
    def __init__(self,username,password):
        self.account_list = {}     # 用于存储传入的账号名和密码
        self.username=username
        self._password=password
# 第2步：定义账号添加函数add，将账号添加至account_list
    def add(self):
        self.account_list[self.username] = self._password
# 第3步：定义账号查询函数select，返回账号名
    def select(self):
        return ",".join(list(self.account_list.keys()))
########## End ##########
username = input()     # 账号名
password = input()     # 密码
a = Account(username,password)
a.add()
print("添加成功")
name = a.select()
print("账号名为：%s"%name)
```

```python
"""
任务：给定了一个 Dog 类，类中有 foot、weight 和 height 三个属性。请在类的外部输出这三个属性的值。
"""

class Animal:
    foot = 4
    weight = 14
    height = 30

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 第1步：实例化类
a=Animal()
# 第2步：输出三个类属性的值
print("foot属性值为：%d"%a.foot)
print("weight属性值为：%dkg"%a.weight)
print("height属性值为：%dcm"%a.height)
########## End ##########
```

```python
"""
任务：给定一段代码，请修改其中部分代码，使代码可以成功运行。
"""


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
class Kls:
    def __init__(self, data):
        self.data = data

    @staticmethod
    def checkind():
        return IND == 'ON'

    def do_reset(self):
        if self.checkind():
            print('输入的值为 %s' % self.data)

IND = 'ON'
k = Kls(input())
k.do_reset()
########## End ##########
```

```python
"""
任务：定义一个 Dog 类，在类中定义属性 name 和 age；在类外部可以修改该 name 和 age 的值，值通过 input 获取。
"""


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
class Dog:
    def __init__(self, name, age):
        self.age = age
        self.name = name


# 第一步：定义属性


name = input()
age = int(input())
# 第二步：实例化类，并将 name 和 age 作为参数传给类
D = Dog(name, age)
# 第三步：按照预期输出打印结果
print("Dog %s的年龄为%d岁" % (D.name , D.age))
########## End ##########
```

```python
"""
任务：请修改右侧 Begin-End 之间的代码，使其可以正常运行。该代码的目的是求输入数据的阶乘。
"""


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
class Factorial:
	def __init__(self,num):
		self.num = num
	def get_value(self):
		x = 1
		for i in range(1, self.num + 1):
			x = x * i
		return x

num = int(input())
f = Factorial(num)
print("%d的阶乘为%d"%(f.num,f.get_value()))
########## End ##########
```

## 第7章 Python 字符串

```python
"""
任务：给定一个字母，判断字母的大小写，如果是大写，将该字母转换为小写，反之，将字母改为大写。
该字母通过 input 函数获取。打印转换后的字母。如果不是字母则输出“不是字母”
"""


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 使用字符串函数实现字母大小写的切换
str = input()
if str.isupper():
    print(str.lower())
elif str.islower():
    print(str.upper())
else:
    print("不是字母")
########## End ##########
```

```python
"""
任务：给定一个字符串，判断该字符串是否是回文串。字符串通过 input 获取，如果是，则输出“是回文串”,如果不是，则输出“不是回文串”。
"""

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 使用字符串函数来判断字符串是否为回文串
s = input()
if not s:
    print('请不要输入空字符串！')
    s = input('请重新输入一个字符串：')
a = len(s)
i = 0
count = 1
while i <= (a/2):
    if s[i] == s[a-i-1]:
        count = 1
        i += 1
    else:
        count = 0
        break
if count == 1:
    print('是回文串')
else:
    print('不是回文串')
########## End ##########
```

```python
"""
任务：在编写代码时，我们规定在代码末尾注释时需要给定 5 个空格来隔开。以字符串的形式给定一行代码，请使用字符串函数将代码中的注释修改为符合要求的形式。打印修改后的代码。
"""

code = input()

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 第一步：切分出注释部分代码
list1 = code.split("#")
# 第二步：使用合适的字符串函数来处理注释代码
str1 = list1[0].strip()
list1[0] = str1.ljust(len(str1)+5)
list1.insert(1,"#")
print("".join(list1))
########## End ##########
```

```python
"""
任务：给定一个字符串，统计字符串中每个字符在该字符串中出现位置的所有下标。输出一个字典，字典的键为字符，值为该字符出现的所有下标。
举个例子：“hello”   输出结果：{"h":[0],"e":[1],"l":[2,3],"o":[4]}
"""

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 使用字符串函数完成本关任务，并按照要求打印结果
str1 = input()

dict1 = {}
for x in list(str1):
    index_num = []
    num = 0
    while True:
        num = str1.find(x,num)
        if num == -1:
            break
        index_num.append(num)
        num += 1
    dict1[x] = index_num

print(dict1)
########## End ##########
```

```python
"""
任务：请编写代码实现生成一个 n 位的验证码，验证码可由大小写字母和数字组成。
"""
import string
import random
n = int(input())     # 验证码的位数

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 使用string和random模块随机生成n位的验证码，将生成的验证码赋值给变量 result
str1=string.ascii_letters+string.digits
result=""
for i in range(n):
    result=result+random.choice(list(str1))
########## End ##########
if result.isalnum() and len(result)==n:
	print(result)
	print("验证码生成成功")
else:
	print("验证码生成错误")
```

```python
"""
任务：给定一个字符串，该字符串的内容为一个英语短句，请编写代码实现单词的反向排序。
"""

str1 = input()

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 使用字符串函数实现单词反向排序，打印反向排序之后的结果
l1=str1.split(" ")
l1.reverse()
str2=" ".join(l1)
print(str2)
########## End ##########
```

```python
"""
任务：给定一个字符串，该字符串是一个包含地名、空格、特殊符号和 html 标签的字符串，请使用字符串函数筛选出其中的地名。
"""

str1 = input()

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 使用字符串函数来清洗出字符串中的地名
str2 = str1.strip().replace("<p>","").replace("</p>","").replace("<div>","").replace("</div>","")
result = "".join(str2.split("**"))
print(result)
########## End ##########
```

```python
"""
任务：给定一个字符串，该字符串中包含了许多邮箱号，使用字符串函数筛选出这些邮箱号，并根据不同的电子邮件服务商来分类。
分类结果为一个字典，字典的键为邮箱号中`@`和`.com`之间的一截，字典的值为包含邮箱号的列表。
"""
str1 = input()     # 包含邮箱号的字符串
# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 使用字符串函数筛选出这些邮箱号，并根据不同的电子邮件服务商来分类
str2 = str1.split(",")
str3 = []
result = []
for i in str2:
    k = i.split("@")[1].split(".")[0]
    str3.append(k)
str3 = sorted(list(set(str3)))
for x in str3:
    list2 = []
    for y in str2:  # 遍历所有邮箱
        if (x == y.split("@")[1].split(".")[0]):
            list2.append(y)  ## 如果是x的服务商
    result.append(x + ":" + ",".join(list2))
print(result)
########## End ##########
```

```python
"""
任务：输出如下所示格式美观的杨辉三角的前 n 行。n 通过 input 函数获取。下例为 n=7 时的杨辉三角。具体输出情况可以查看预期输出。
``
                  1
               1     1
            1     2     1
         1     3     3     1
      1     4     6     4     1
   1     5    10    10     5     1
1     6    15    20    15     6     1
``
"""

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 使用字符串格式化输出方式打印杨辉三角
n = int(input())
s = [[1]]
for i in range(n):
    t = []
    for j in range(len(s[i])):
        if j == 0:
            t.append(1)
        else:
            t.append(s[i][j - 1] + s[i][j])
    t.append(1)
    s.append(t)

k = 3*n+1
for i in range(n):
    print(' '*k, end = '')
    for j in range(len(s[i])):
        if j == 0:
            print(str(s[i][j]), end = '')
        else:
            print('%6d'%(s[i][j]), end = '')
    print(' ' *k)
    k -= 3

########## End ##########
```

```python
"""
任务：给定一个字符串乱码，请对该字符串进行合适的编码和解码操作，使字符串还原成正常的格式。字符串乱码通过 input 获取。
"""


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 编写代码实现字符串乱码转换为正常的字符串，并打印转换后的字符串
import chardet
string1=input()
print(string1.encode("gbk").decode("utf-8"))
########## End ##########
```

```python
"""
任务：给定一个密码字符串，判断该密码的安全性。如果密码符合低级要求则打印"低级密码"，
如果密码符合中级要求则打印"中级密码"，如果密码符合高级要求则打印"高级密码"，
"""
import string
password = input()     # 获取密码字符串

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 通过本章节所学的知识来判断密码的安全性
k=string.punctuation
p=0
P=0
P1=0
P2=0
for i in password:
    for j in k:
        if(i==j):
            p=1
L=string.ascii_letters
for i in L:
    if(password[0]==i):
        P=1
for i in password:
        if(i.isdigit()):
            P1=1
for i in password:
        if(i.isalpha()):
            P2=1
if(len(password)>=8 and p==1 and P2==1 and p==1 and P==1):
    print('高级密码')
elif(P1==1 and P2==1):
    print('中级密码')
else:
    print('低级密码')
########## End ##########
```

```python
"""
任务：使用内置函数将一个列表转换为一个字典，字典的键为该元素在列表中的下标，
字典的值为该元素的值，打印转换后的字典。
"""


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 使用内置函数将列表转换为字典，打印转换后的字典
list1=eval(input())
list2=list(range(len(list1)))
list3=dict(zip(list2,list1))
print(list3)
########## End ##########
```

```python
"""
任务：在登陆一个账号时，通常要检查账号和密码是否符合要求，现在给定一个账号字符串和一个密码字符串，账号只能为数字，密码可以是字母或者数字。
账号和密码都通过 input 函数获取，请判断账号和密码是否符合要求。
"""

account = input()     # 账号
password = input()     # 密码


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 使用字符串函数来判断账号密码是否违规，并按照任务要求输出
if not account.isdigit():
    print("账号违规")
elif not password.isalnum():
    print("密码违规")
else:
    print("账号密码符合要求")

########## End ##########
```

```python
"""
任务：给定一个字符串，去除字符串中非字母的字符，然后将每个字符串的首字母大写，打印处理后的字符串。字符串通过 input 函数获取。
"""

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 第一步：使用字符串函数去除字符串中非字符的字符，可以观察测试输入来完成
str1=input()
str2 = str1.replace("#","").replace("/","").replace("_","")
# 第二步：将字符串的首字母大写，并打印处理后的字符串
str3=str2.capitalize()
print(str3)
########## End ##########
```

```python
# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 使用字符串函数来判断电话号码的运营商
number = input()
if number.startswith("130"):
    print("中国联通")
elif number.startswith("133"):
    print("中国电信")
elif number.startswith("134"):
    print("中国移动")
else:
    print("输入数据不合法")
########## End ##########
```

```python
"""
任务：编写代码实现随机生成一个 8 位数的密码。
"""


# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 使用 random 模块实现随机生成一个 8 位数的密码，将密码赋值给变量 password
import random
password = random.randint(10000000,99999999)
########## End ##########
if len(str(password)) == 8:
    print(password)
    print("随机密码生成成功")
else:
    print("随机密码生成失败，长度不为8")
```

```python
"""
任务：给定一个列表，计算列表内所有数据标准差，结果保留小数点后 2 位。
"""
import math

list1 = eval(input())
# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 计算列表内所有元素的标准差
num = 0  #和
s2 = 0
for x in list1:
    num += x
for y in list1:
    s2 += (y-num/len(list1))**2
result = math.sqrt(s2/len(list1))
# 使用格式化输出打印结果，并保留小数点后2位
print("%.2f" % result)
########## End ##########
```

```python
"""
任务：给定一个编码之后的字符串，请输出它的编码方式，并输出解码之后的字符串。结果以字典的形式输出。
输出格式：{"编码格式": "gbk","字符串":···}
"""
string = eval(input())

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 第一步：导入检测模块
import chardet
# 第二步：对字符串进行解码并按照要求输出结果
result1 = chardet.detect(string)
bianma = result1['encoding']
result2 = string.decode(encoding=bianma)
print("{'编码格式': '%s', '字符串': '%s'}"%(bianma,result2))
########## End ##########
```

```python
"""
任务：给定一个字符串，利用内置函数判断该字符串是否为回文串。该字符串通过 input 函数获取。如果是回文串则输出“是回文串”，如果不是则输出“不是回文串”。
"""

# 请在下面的Begin-End之间按照注释中给出的提示编写正确的代码
########## Begin ##########
# 利用内置函数判断该字符串是否为回文串
string1=list(input())
string2=reversed(string1)
list1=list(string1)
list2=list(string2)
i=0
flag=0
while i < len(list1):
    if list1[i]==list2[i]:
        i=i+1
    else:
        flag=1
        break
if flag==0:
    print('是回文串')
else:
    print('不是回文串')
########## End ##########
```

