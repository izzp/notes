# 云计算大赛培训视频笔记


----------


## A卷
### 第一部分
> `hostnamectl`       查看主机名  
> `hostname`    仅查看主机名  
> `hostnamectl set-hostname 主机名` 更改主机名

> ` getenforce` 显示当前SELinux的应用模式   
> 编辑selinux文件，设置SELinux为Permissive模式  
`vi /etc/selinux/config`  
`SELINUX=permissive`

> 关闭防火墙并设置开机不启动  
>`systemctl stop firewalld`  
`systemctl disable firewalld`  
> 查看防火墙状态  
> `systemctl status firewalld`

> `df -h`     查看挂载的设备  
> `mount -o loop 映像名称 挂载路径` 挂载命令  
>`umount 路径` 卸载  
>`cat 文件路径` 把文件输出到显示器  
> `mv 源文件 目标文件` 移动命令 

> `控制节点`在/etc/yum.repos.d创建local.repo源文件  
[centos]  
name=centos  
baseurl=file:///opt/centos  
gpgcheck=0  
enabled=1  
[iaas]  
name=iaas  
baseurl=file:///opt/iaas/iaas-repo
gpgcheck=0  
enabled=1  
> `计算节点`在/etc/yum.repos.d创建ftp.repo源文件  
[centos]  
name=centos  
baseurl=ftp://192.168.100.10/centos  
gpgcheck=0  
enabled=1  
[iaas]  
name=iaas  
baseurl=ftp://192.168.100.10/iaas  
gpgcheck=0  
enabled=1  
> `yum clean all`清除所有yum  
> `yum update`更新yum  

> `yum install vsftpd –y` 安装ftp服务  
> `vi /etc/vsftpd/vsftpd.conf`  
> 添加 `anon_root=/opt/` 保存退出  
> `systemctl start vsftpd` 启动  
> `systemctl enable vsftpd` 设置开机启动  

> `yum install iaas-xiandian -y` 安装iaas-xiandian软件包（两个节点都安装）    
> 编辑文件`/etc/xiandian/openrc.sh` 配置信息见表格    

> 数据库安装  
> iaas install mysql.sh    
     
> compute节点  
> `#yum -y install  MySQL-python`  

> `mysql -uroot -p000000` 以root用户登录    
> `show databases;` 查询数据库列表信息     

## 注意： `/usr/local/bin`是先电里的脚本存放位置，千万记住！！！部署的iaas的sh脚本想不起来可以从这里边找！！！

> `iaas-install-keystone.sh`安装keystone  
> `mysql -uroot -p000000` 登陆mysql  
> `show databases;` 查看数据库   
> `use keystone;`  
> `show grants for 'keystone'@'%';`

> `iaas-install-glance.sh`安装glance  
> `systemctl status openstack-glance*` 查看服务状态  

> `iaas-install-nova-controller.sh` 安装nova  
> `source  /etc/keystone/admin-openrc.sh`  解决权限问题，若上一步报权限错误，则执行此条   
> `nova service-list`

> ``
