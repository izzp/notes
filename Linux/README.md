# Linux

### 常用Linux控制组合键

| 组合键 |             作用             |
| :----: | :--------------------------: |
| Ctrl+C |   非常规中断，终止前端进程   |
| Ctrl+D | 输入完成的正常信号，结束终端 |
| Ctrl+H |   后退一格，删除前一个字符   |
| Ctrl+J |    换行，与Enter功能相同     |
| Ctrl+L |        换页，刷新屏幕        |
| Ctrl+U |          删除当前行          |
| Ctrl+A |           回到行首           |
| Ctrl+R |       搜索命令历史记录       |

### 安装中文man

```bash
[root@ali-bj-lh-1 /]# yum list | grep man.*zh
man-pages-zh-CN.noarch                   1.5.2-4.el7                   base     
[root@ali-bj-lh-1 /]# yum -y install man-pages-zh-CN.noarch
[root@ali-bj-lh-1 /]# vim /root/.bash_profile 
alias cman="man -M /usr/share/man/zh_CN"
[root@ali-bj-lh-1 /]# source .bash_profile
[root@ali-bj-lh-1 /]# cman cd
```

### 工具

#### 查看端口

netstat -nltp

需安装net-tools `yum install net-tools`



