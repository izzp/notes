---
outline: deep
---

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

### 第5章 Linxu的文件权限与目录配置

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
  | /etc | 系统主要的配置文件几乎都放置在这个目录内，例如人员的帐号密码、各种服务的启动文件等等。一般来说，这个目录下的各文件属性是可以让一般使用者查阅的，但是只有root有权力修改。FHS建议不要放置可执行文件（binary）在这个目录中。比较重要的档案有：/etc/modprobe.d/，/etc/passwd，/etc/fstab，/etc/issue等等。另外FHS还规范几个重要的目录最好要存在/etc/目录下： /etc/opt（必要）：这个目录在放置第三方辅助软件/opt的相关配置文件 /etc/X11/（建议）：与X Window有关的各种配置文件都在这里，尤其是xorg.conf这个X Server的配置文件。 /etc/sgml/（建议）：与SGML格式有关的各项配置文件 /etc/xml/（建议）：与XML格式有关的各项配置文件 |
  | /lib | 系统的函数库非常的多，而/lib放置的则是在开机时会用到的函数库，以及在/bin或/sbin底下的指令会调用的函数库而已。什么是函数库呢？你可以将他想成是『外挂』，某些指令必须要有这些『外挂』才能够顺利完成程序的执行之意。另外FHS还要求底下的目录必须要存在： /lib/modules/：这个目录主要放置可抽换式的内核相关模块（驱动程序）！ |
  | /media | media是『媒体』的英文，顾名思义，这个/media底下放置的就是可删除的装置！包括软盘、光盘、DVD等等装置都暂时挂载于此。常见的文件名有：/media/floppy，/media/cdrom等。 |
  | /mnt | 如果你想要暂时挂载某些额外的设备，一般建议你可以放置到这个目录中。在早些时候，这个目录的用途与/media相同！只是有了/media之后，这个目录就用来暂时挂载用了。 |
  | /opt | 这个是给第三方辅助软件放置的目录。什么是第三方辅助软件啊？举例来说，KDE这个桌面管理系统是一个独立的计划，不过他可以安装到Linux系统中，因此KDE的软件就建议放置到此目录下了。另外，如果你想要自行安装额外的软件（非原本的发行版提供的），那么也能够将你的软件安装到这里来。不过，以前的Linux系统中，我们还是习惯放置在/usr/local目录下 |
  | /run | 早期的FHS规定系统开机后所产生的各项信息应该要放置到/var/run目录下，新版的FHS则规范到/run底下。由于/run可以使用內存来模拟，因此性能上会好很多 |
  | /sbin | Linux有非常多指令是用来设定系统环境的，这些指令只有root才能够用来『设定』系统，其他使用者最多只能用来『查询』而已。放在/sbin底下的为开机过程中所需要的，里面包括了开机、修复、还原系统所需要的指令。至于某些服务器软件程序，一般则放置到/usr/sbin/当中。至于本机自行安装的软件所产生的系统执行文件（system binary），则放置到/usr/local/sbin/当中了。常见的指令包括：fdisk，fsck，ifconfig，mkfs等等。 |
  | /srv | srv可以视为『service』的缩写，是一些网络服务启动之后，这些服务所需要取用的数据目录。常见的服务例如WWW，FTP等等。举例来说，WWW服务器需要的网页数据就可以放置在/srv/www/里面。不过，系统的服务数据如果尚未要提供给网际网络任何人浏览的话，预设还是建议放置到/var/lib底下即可。 |
  | /tmp | 这是让一般使用者或者是正在执行的程序暂时放置文件的地方。这个目录是任何人都能够存取的，所以你需要定期的清理一下。当然，重要数据不可放置在此目录啊！因为FHS甚至建议在开机时，应该要将/tmp下的数据都删除 |
  | /usr | 第二层FHS设置，见后续 |
  | /var | 第二层FHS设置，见后续 |
  | 第二部分：FHS建议可以存在的目录 |              |
  | /home | 系统默认的用户家目录 |
  | /lib | 存放与/lib不同格式的二进制函数库，例如支持64位的/lib64函数库 |
  | /root | root的家目录（维护模式时仅挂载/时就有） |

##### /usr的意义与内容

  |              目录               |                         应放置的内容                         |
  | :-----------------------------: | :----------------------------------------------------------: |
  | 第一部分：FHS要求必须存在的目录 |                                                              |
  |            /usr/bin/            | 所有一般用户能够使用的指令都放在这里！目前新的CentOS 7已经将全部的使用者指令放置于此，而使用链接文件的方式将/bin连接至此！也就是说，/usr/bin与/bin是一模一样了！另外，FHS要求在此目录下不应该有子目录！ |
  |            /usr/lib/            |      基本上与/lib功能相同，所以/lib就是链接到此目录中的      |
  |           /usr/local/           | 系统管理员在本机自行安装自己下载的软件（非发行版默认提供者），建议安装到此目录，这样会比较便于管理。举例来说，你的发行版提供的软件较旧，你想安装较新的软件但又不想移除旧版，此时你可以将新版软件安装于/usr/local/目录下，可与原先的旧版软件有分别！你可以自行到/usr/local去看看，该目录下也是具有bin，etc，include，lib…的次目录！ |
  |           /usr/sbin/            | 非系统正常运作所需要的系统指令。最常见的就是某些网络服务器软件的服务指令（daemon）！不过基本功能与/sbin也差不多，因此目前/sbin就是链接到此目录中的 |
  |           /usr/share/           | 主要放置只读的数据文件，当然也包括共享文件。在这个目录下放置的数据几乎是不分硬件构架均可读取的数据，因为几乎都是文本文件！在此目录下常见的还有这些次目录： /usr/share/man：在线帮助文件 /usr/share/doc：软件的说明文档 /usr/share/zoneinfo：与时区有关的时区文件 |
  | 第二部分：FHS建议可以存在的目录 |                                                              |
  |           /usr/games/           |                 与游戏比较相关的数据放在此处                 |
  |          /usr/include/          | c/ c++等程序语言的头文件（header）与包含文件（include）放置处，当我们以tarball方式（*.tar.gz的方式安装软件）安装某些程序时，会使用到里头的许多文件！ |
  |          /usr/libexec/          | 某些不被一般使用者惯用的执行档或脚本（script）等等，都会放置在此目录中。例如大部分的X视窗底下的操作指令，很多都是放在此目录下的。 |
  |         /usr/lib/         | 与/lib/功能相同，因此目前/lib就是链接到此目录中  |
  |            /usr/src/            | 一般源代码建议放置到这里，src有source的意思。至于内核源代码则建议放置到/usr/src/linux/目录下。 |

##### /var的意义与内容

  |              目录               |                        应放置文件内容                        |
  | :-----------------------------: | :----------------------------------------------------------: |
  | 第一部分：FHS要求必须存在的目录 |                                                              |
  |           /var/cache/           |               应用程序运行过程的产生的一些缓存               |
  |            /var/lib/            | 程序本身执行的过程中，需要使用到的数据文件放置的目录。在此目录下各自的软件应该要有各自的目录。举例来说，MySQL的数据库放置到/var/lib/mysql/而rpm的数据库则放到/var/lib/rpm去！ |
  |           /var/lock/            | 某些设备或者是文件资源一次只能被一个应用程序所使用，如果同时有两个程序使用该装置时，就可能产生一些错误的状况，因此就得要将该设备上锁（lock），以确保该装置只会给单一软件所使用。举例来说，刻录机正在刻录一块光盘，你想一下，会不会有两个人同时在使用一个刻录机烧片？如果两个人同时刻录，那片子写入的是谁的数据？所以当第一个人在刻录时该刻录机就会被上锁，第二个人就得要该装置被解除锁定（就是前一个人用完了）才能够继续使用。目前此目录也已经挪到/run/lock中 |
  |            /var/log/            | 重要到不行！这是日志文件放置的目录！里面比较重要的档案如/var/log/messages，/var/log/wtmp（记录登录者的信息）等。 |
  |           /var/mail/            | 放置个人电子邮件邮箱的目录，不过这个目录也被放置到/var/spool/mail/目录中！通常这两个目录是互为链接文件 |
  |            /var/run/            | 某些程序或者是服务启动后，会将他们的PID放置在这个目录下。与/run相同，这个目录连接到/run！ |
  |           /var/spool/           | 这个目录通常放置一些队列数据，所谓的『队列』就是排队等待其他程序使用的数据啦！这些数据被使用后通常都会被删除。举例来说，系统收到新邮件会放置到/var/spool/mail/中，但使用者收下该信件后该封信原则上就会被删除。信件如果暂时寄不出去会被放到/var/spool/mqueue/中，等到被送出后就被删除。如果是计划任务数据（crontab），就会被放置到/var/spool/cron/目录中！ |

  ##### 链接汇总

- /bin --> /usr/bin
- /sbin --> /usr/sbin
- /lib --> /usr/lib
- /lib64 --> /usr/lib64
- /var/lock --> /run/lock
- /var/run --> /run

### 第6章 Linux文件与目录管理

#### 目录相关操作

```bash
.         代表此层目录
..        代表上一层目录
-         代表前一个工作目录
~         代表『目前使用者身份』所在的家目录
~ovo  代表 ovo 这个使用者的家目录(ovo是个账号名称)
```

- cd：切换目录

- pwd：显示示目前的目录

  ```bash

  [root@ali-bj-dev ~]# pwd
  /root

  ```

- mkdir：建立一个新的目录

  ```bash
  # 建立test目录
  [root@ali-bj-dev tmp]# mkdir test
  # 使用-p选项建立多层目录
  [root@ali-bj-dev tmp]# mkdir -p test1/test2/test3
  # 建立目录时设置新目录权限
  [root@ali-bj-dev tmp]# mkdir -m 711 test2
  [root@ali-bj-dev tmp]# ls -ld test*
  drwxr-xr-x 2 root root 4096 Dec  6 16:01 test
  drwxr-xr-x 3 root root 4096 Dec  6 16:02 test1
  drwx--x--x 2 root root 4096 Dec  6 16:02 test2
  ```

- rmdir：删除一个空的目录

  有内容时无法删除目录

#### 执行文件路径的变量：$PATH

```bash
[root@ali-bj-dev ~]# echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin
```

#### 文件与目录的查看：ls

```bash
-a     # 列出所有文件，包括以 "." 开头的隐含文件。

```

#### 复制删除与移动：cp、rm、mv

#### 获取路径的文件名与目录名称
