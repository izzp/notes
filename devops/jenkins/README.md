# Jenkins

### CentOS上安装

```bash
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
  
yum install epel-release # repository that provides 'daemonize'
yum install java-11-openjdk-devel
yum install jenkins
```



### 默认安装位置

1. `/usr/lib/jenkins/`：jenkins安装目录，WAR包会放在这里。
2. `/etc/sysconfig/jenkins`：jenkins配置文件，“端口”，“JENKINS_HOME”等都可以在这里配置。
3. `/var/lib/jenkins/`：默认的JENKINS_HOME。
4. `/var/log/jenkins/jenkins.log`：Jenkins日志文件。

