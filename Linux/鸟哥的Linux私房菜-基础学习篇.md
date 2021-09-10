# 鸟哥的Linux私房菜-基础学习篇

## 第一部分 Linux的规则安装

### 基本命令

#### 日期

```bash
[ovo@study ~]$ date
2021年 09月 10日 星期五 15:29:13 CST
[ovo@study ~]$ date +%Y/%m/%d
2021/09/10
[ovo@study ~]$ date +%H:%M
15:38
```

#### 显示目前支持的语系

```bash
[ovo@study ~]$ locale
LANG=zh_CN.UTF-8
LC_CTYPE="zh_CN.UTF-8"
LC_NUMERIC="zh_CN.UTF-8"
...
```

修改语系

```bash
[ovo@study ~]$ LANG=en_US.UTF-8
[ovo@study ~]$ date
Fri Sep 10 15:33:37 CST 2021
```

#### 显示日历的命令

```bash
[ovo@study ~]$ cal
      九月 2021
日 一 二 三 四 五 六
          1  2  3  4
 5  6  7  8  9 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29 30
# 显示某年日历
[ovo@study ~]$ cal 2021
                               2021

        一月                   二月                   三月
日 一 二 三 四 五 六   日 一 二 三 四 五 六   日 一 二 三 四 五 六
                1  2       1  2  3  4  5  6       1  2  3  4  5  6
 3  4  5  6  7  8  9    7  8  9 10 11 12 13    7  8  9 10 11 12 13
10 11 12 13 14 15 16   14 15 16 17 18 19 20   14 15 16 17 18 19 20
17 18 19 20 21 22 23   21 22 23 24 25 26 27   21 22 23 24 25 26 27
24 25 26 27 28 29 30   28                     28 29 30 31
31
# 以下省略
# 某年某月
[ovo@study ~]$ cal 9 2021
      九月 2021
日 一 二 三 四 五 六
          1  2  3  4
 5  6  7  8  9 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29 30
```

#### 简单好用的计算器

```bash
[ovo@study ~]$ bc
bc 1.06.95
Copyright 1991-1994, 1997, 1998, 2000, 2004, 2006 Free Software Foundation, Inc.
This is free software with ABSOLUTELY NO WARRANTY.
For details type `warranty'.
1+1
2
10/100
0
# 设置3位小数
scale=3
10/100
.100
```

#### help帮助

```bash
[ovo@study ~]$ date --help
用法：date [选项]... [+格式]
　或：date [-u|--utc|--universal] [MMDDhhmm[[CC]YY][.ss]]
Display the current time in the given FORMAT, or set the system date.

Mandatory arguments to long options are mandatory for short options too.
  -d, --date=STRING         display time described by STRING, not 'now'
  -f, --file=DATEFILE       like --date once for each line of DATEFILE
  -I[TIMESPEC], --iso-8601[=TIMESPEC]  output date/time in ISO 8601 format.
                            TIMESPEC='date' for date only (the default),
                            'hours', 'minutes', 'seconds', or 'ns' for date
                            and time to the indicated precision.
  -r, --reference=文件          显示文件指定文件的最后修改时间
  -R, --rfc-2822                以RFC 2822格式输出日期和时间
                                例如：2006年8月7日，星期一 12:34:56 -0600
......省略
```

#### man操作说明

```bash
[ovo@study ~]$ man date
```

