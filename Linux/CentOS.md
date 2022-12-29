# CentOS

#### 查看端口

netstat -nltp

需安装net-tools `yum install net-tools`

#### 基础补全

```bash
[root@zhao ~]# yum install bash-completion
```

#### 网络配置

```bash
# ip地址
[root@zhao ~]# vi /etc/sysconfig/network-scripts/ifcfg-xxx

修改 BOOTPROTO=static
ONBOOT=yes
IPADDR=10.0.0.22
NETMASK=255.255.255.0
GATEWAY=10.0.0.1
DNS1=8.8.8.8

# 网关配置
[root@zhao ~]# vi /etc/sysconfig/network
# DNS配置
[root@zhao ~]# vi /etc/resolv.conf

````



### 有趣功能

####  ssh输入密码后欢迎信息设置

> **/etc/motd**	**此信息不仅在 ssh 输入密码成功登录后显示，而且在普通登录成功后也会显示**

```bash
❯ ssh root@dev.mezzp.com
root@dev.mezzp.com's password:
Last login: Mon Oct  4 21:11:28 2021 from 124.238.124.170

Welcome to Alibaba Cloud Elastic Compute Service !
 ________  ___  ___  ________  ________
|\_____  \|\  \|\  \|\   __  \|\   __  \
 \|___/  /\ \  \\\  \ \  \|\  \ \  \|\  \
     /  / /\ \   __  \ \   __  \ \  \\\  \
    /  /_/__\ \  \ \  \ \  \ \  \ \  \\\  \
   |\________\ \__\ \__\ \__\ \__\ \_______\
    \|_______|\|__|\|__|\|__|\|__|\|_______|
```

