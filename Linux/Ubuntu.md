# Ubuntu Server

----

#### 改中文
``` bash
# 安装中文语言包
apt install language-pack-zh-hans
# 更改默认语言为中文，修改/etc/default/locale文件添加：
# vi /etc/default/locale
LANG=zh_CN.UTF-8
LANGUAGE=zh_CN:zh:en_US:en
```

#### 查看版本
``` bash
# 第一种
root@iZqo95pghmywi3Z:~# cat /etc/issue
Ubuntu 20.04.1 LTS \n \l
# 第二种
root@iZqo95pghmywi3Z:~# sudo lsb_release -a
LSB Version:	core-11.1.0ubuntu2-noarch:security-11.1.0ubuntu2-noarch
Distributor ID:	Ubuntu
Description:	Ubuntu 20.04.1 LTS
Release:	20.04
Codename:	focal
```