# 鸟哥的Linux私房菜-基础学习篇

## 第一部分 Linux的规则安装

### 简单基本命令

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

永久修改语系

```bash
[root@ovo /]# cat /etc/locale.conf
LANG=en_US.UTF-8
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
# 加-f取得更多信息
[root@study ~]# man -f man
man (1)              - 格式化并显示在线帮助手册页
man (7)              - 格式化手册页的宏
man (1p)             - display system documentation
[root@study ~]# man 7 man
```

> 第一行DATE(1)含义
>
> 1：用户在shell环境中可以操作的命令或文件
>
> 4：设备文件的说明，通常在/dev下的文件
>
> 5：配置文件或某些文件的格式
>
> 8：系统管理员可用的管理命令
>
> 9：跟内核有关的文件

> `/`：向下查找字符串
>
> `?`：向上查找字符串
>
> `n,N`：向上，向下查询
>
> `	q	`：结束此次man page

#### 说明文件

>  `/usr/share/doc`：说明文件

#### nano简单文件编辑器

> 详见打开之后说明，`^`代表`Ctrl`

#### 关机

```bash
#将数据同步写入硬盘
sysc
#关机
shutdown
reboot
halt 系统停止
poweroff

[root@study ~]# shutdown --help
shutdown [OPTIONS...] [TIME] [WALL...]
Shut down the system.

     --help      Show this help
  -H --halt      Halt the machine
  -P --poweroff  Power-off the machine
  -r --reboot    Reboot the machine
  -h             Equivalent to --poweroff, overridden by --halt
  -k             Don't halt/power-off/reboot, just send warnings
     --no-wall   Don't send wall message before halt/power-off/reboot
  -c             Cancel a pending shutdown
```

## 第二部分 Linux文件、目录与磁盘格式

### 第五章 Linxu的文件权限与目录配置

#### 账号相关信息

`/etc/passwd`：账号相关信息

`/etc/shadow`：密码记录

`/etc/group`：组信息

```bash
#切换成root
[ovo@study /]$ su -
密码：
上一次登录：一 9月 13 08:50:49 CST 2021pts/0 上
[root@study ~]#切换成功
```

#### 文件属性

```bash
[ovo@study ovo]$ ls -al
总用量 0
drwxrwxrwx.  3 root root  35 9月  13 09:52 .
dr-xr-xr-x. 18 root root 235 9月  13 09:50 ..
drwxr-xr-x.  2 root root   6 9月  13 09:50 a
-rw-r--r--.  1 root root   0 9月  13 09:50 b
-rw-rw-r--.  1      ovo       ovo         0       9月  13 09:52   ovo
#文件类型权限 链接数 文件拥有者 文件所属用户组 文件大小 文件最后被修改的时间 文件名
```

`drwxrwxrwx`：

- 第一位：[d]代表目录，[-]文件，[l]链接文件
- 后面三位一组，是权限，
  - 第一组：文件拥有者可具备的权限
  - 第二组：加入此用户组之账号的权限
  - 第三组：非本人且没有加入本用户组的其他账号的权限

#### 修改文件属性与权限

- chgrp：修改文件所属用户组

  ```bash
  [root@study ~]# chgrp users initial-setup-ks.cfg
  [root@study ~]# ll
  总用量 8
  -rw-------. 1 root root  1869 9月  10 14:56 anaconda-ks.cfg
  -rw-r--r--. 1 root users 1917 9月  10 14:57 initial-setup-ks.cfg
  # 加参数-R为递归修改子目录
  ```

- chown：修改文件所有者

  ```bash
  [root@study ~]# chown ovo initial-setup-ks.cfg
  [root@study ~]# ll
  总用量 8
  -rw-------. 1 root root  1869 9月  10 14:56 anaconda-ks.cfg
  -rw-r--r--. 1 ovo  users 1917 9月  10 14:57 initial-setup-ks.cfg
  # 加参数-R为递归修改子目录
  ```

- chmod：修改文件的权限，SUID,SGID,SBIT等特性

  ```bash
  [root@study ~]# ll
  总用量 8
  -rw-------. 1 root root  1869 9月  10 14:56 anaconda-ks.cfg
  -rw-r--r--. 1 ovo  users 1917 9月  10 14:57 initial-setup-ks.cfg
  [root@study ~]# chmod 611 anaconda-ks.cfg
  [root@study ~]# ll
  总用量 8
  -rw---x--x. 1 root root  1869 9月  10 14:56 anaconda-ks.cfg
  -rw-r--r--. 1 ovo  users 1917 9月  10 14:57 initial-setup-ks.cfg
  # 加参数-R为递归修改子目录
  ```

  - r:4
  - w:2
  - x:1

  ```bash
  # u g o a   +-=    rwx    文件或目录
  [root@study ~]# ll
  总用量 8
  -rw---x--x. 1 root root  1869 9月  10 14:56 anaconda-ks.cfg
  -rw-r--r--. 1 ovo  users 1917 9月  10 14:57 initial-setup-ks.cfg
  [root@study ~]# chmod a+x anaconda-ks.cfg
  [root@study ~]# ll
  总用量 8
  -rwx--x--x. 1 root root  1869 9月  10 14:56 anaconda-ks.cfg
  -rw-r--r--. 1 ovo  users 1917 9月  10 14:57 initial-setup-ks.cfg
  [root@study ~]# chmod a-x anaconda-ks.cfg
  [root@study ~]# ll
  总用量 8
  -rw-------. 1 root root  1869 9月  10 14:56 anaconda-ks.cfg
  -rw-r--r--. 1 ovo  users 1917 9月  10 14:57 initial-setup-ks.cfg
  ```

  #### Linxu目录配置的依据-FHS

  ##### 根目录（/）的意义与内容

  |              目录              | 应存放的内容 |
  | :----------------------------: | :----------: |
  | 第一部分:FHS要求必须存在的目录              ||
  |              /bin              | 系统有很多放置执行文件的目录，但/bin比较特殊。因为/bin放置的是在单人维护模式下还能够被操作的指令。在/bin底下的指令可以被root与一般帐号所使用，主要有：cat，chmod，chown，date，mv，mkdir，cp，bash等等常用的指令 |
  | /boot | 这个目录主要在放置开机会使用到的文件，包括Linux内核文件以及启动选项与启动所需配置文件等。Linux 内核常用的文件名为：vmlinuz，如果使用的是grub2这个开机管理程序，则还会存在/boot/grub2/这个目录 |
  | /dev | 在Linux系统上，任何设备与接口设备都是以文件的形式存在于这个目录当中的。你只要透过存取这个目录底下的某个档案，就等于存取某个装置啰～比要重要的文件有/dev/null，/dev/zero，/dev/tty，/dev/loop\*，/dev/sd\*等等 |
  | /etc |              |
  | /lib |              |
  | /media |              |
  | /mnt |              |
  | /opt |              |
  | /run |              |
  | /sbin |              |
  | /srv |              |
  | /tmp |              |
  | /usr | 第二层FHS设置，见后续 |
  | /var | 第二层FHS设置，见后续 |
  | 第二部分：FHS建议可以存在的目录 |              |
  | /home | 系统默认的用户家目录 |
  | /lib<qual> | 存放与/lib不同格式的二进制函数库，例如支持64位的/lib64函数库 |
  | /root | root的家目录（维护模式时仅挂载/时就有） |

  
