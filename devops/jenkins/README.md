# Jenkins

### CentOS上安装

```bash
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
  
yum install epel-release # repository that provides 'daemonize'
yum install java-11-openjdk-devel
yum install jenkins
```
### war安装

```bash
nohup java -Dfile.encoding=UTF-8 -httpPort=3006 -jar jenkins.war >log.log &
```

### 默认安装位置

1. `/usr/lib/jenkins/`：jenkins安装目录，WAR包会放在这里。
2. `/etc/sysconfig/jenkins`：jenkins配置文件，“端口”，“JENKINS_HOME”等都可以在这里配置。
3. `/var/lib/jenkins/`：默认的JENKINS_HOME。
4. `/var/log/jenkins/jenkins.log`：Jenkins日志文件。

### 常用Jenkinsfile

#### 1.Spring Boot & Docker

```bash
pipeline {
    agent any
      triggers {
        GenericTrigger(
         genericVariables: [
          [key: 'ref', value: '$.ref']
         ],
         causeString: 'Triggered on $ref',
         token: '这是触发token',
         tokenCredentialId: '',
         printContributedVariables: true,
         printPostContent: true,
         silentResponse: false,
         regexpFilterText: '$ref',
         regexpFilterExpression: 'refs/heads/' + BRANCH_NAME
        )
      }
       environment {
    		def imageName = "repair/repair-with-api"
    		def tag="latest"
        }
    tools {
        maven "maven"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: '794f18de-62c4-4e6e-8e10-36449b798fc6', url: 'git@github.com:izzp/repair-with-api.git']]])
             }
        }
        stage('构建jar') {
            steps {
                //编译jar
                sh "mvn clean package"
            }
        }
        stage('删除原容器及镜像') {
            steps {
                echo "删除原容器及镜像"
                 script {
                            sh '''
                            str1=`docker ps -a | grep -w ${imageName} | awk '{print $1}'`
                            str2=`docker images | grep -w $imageName  | awk '{print $3}'`
                            if [ "$str2" !=  "" ] ; then
                                if [ "$str1" !=  "" ] ; then
                                    #停掉容器
                                    docker stop `docker ps -a | grep -w ${imageName}  | awk '{print $1}'`
                                    #删除容器
                                    docker rm `docker ps -a | grep -w ${imageName}  | awk '{print $1}'`
                                    #删除镜像
                                    docker rmi --force ${imageName}
                                else
                                     #删除镜像
                                    docker rmi --force ${imageName}
                                fi
                            fi
                            '''
                			}
            }
        }
        stage('构建本地镜像') {
            steps {
                //构建本地镜像
                sh "docker build -t ${imageName}:${tag} ."
            }
        }
        stage('部署') {
            steps {
                sh "docker run -d -p 8333:8080 ${imageName}:${tag} ."
                echo '部署完成'
            }
        }
    }
}
```

