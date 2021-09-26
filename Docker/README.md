# docker
## 帮助命令

```shell
docker version # 显示 Docker 版本信息。
docker info # 显示 Docker 系统信息，包括镜像和容器数
docker --help # 帮助
```

## 镜像基本命令

### 列出本机存在的镜像

```bash
[root@ovo ~]# docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
tomcat       latest    bb832de23021   10 days ago   680MB
nginx        latest    ad4c705f24d3   2 weeks ago   133MB
```

### 搜索镜像

```bash
[root@ovo conf]# docker search mysql
NAME                              DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
mysql                             MySQL is a widely used, open-source relation…   11470     [OK]
mariadb                           MariaDB Server is a high performing open sou…   4354      [OK]
mysql/mysql-server                Optimized MySQL Server Docker images. Create…   848                  [OK]
centos/mysql-57-centos7           MySQL 5.7 SQL database server                   91
mysql/mysql-cluster               Experimental MySQL Cluster Docker images. Cr…   88
centurylink/mysql                 Image containing mysql. Optimized to be link…   59                   [OK]
databack/mysql-backup             Back up mysql databases to... anywhere!         51
prom/mysqld-exporter                                                              42                   [OK]

```

### 获取镜像

不加版本号默认拉取`latest`版本

```bash
[root@ovo ~]# docker pull nginx
Using default tag: latest
latest: Pulling from library/nginx
a330b6cecb98: Pull complete 
e0ad2c0621bc: Pull complete 
9e56c3e0e6b7: Pull complete 
09f31c94adc6: Pull complete 
32b26e9cdb83: Pull complete 
20ab512bbb07: Pull complete 
Digest: sha256:853b221d3341add7aaadf5f81dd088ea943ab9c918766e295321294b035f3f3e
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest
```

### 删除镜像 

```bash
[root@ovo ~]# docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
tomcat       8         551efb60a0a2   10 days ago   678MB
tomcat       latest    bb832de23021   10 days ago   680MB
nginx        latest    ad4c705f24d3   2 weeks ago   133MB
[root@ovo ~]# docker rmi 551efb
Untagged: tomcat:8
Untagged: tomcat@sha256:658c3c54069e7c969803212191f654d0afb30660cd6702cabc3811ce753d1939
Deleted: sha256:551efb60a0a200cb11039fe4e29a2f78c2acabd4604e5af8cd345e6ce4486a99
Deleted: sha256:8a8887e79df466c7590dd80c5d30de0cb7b127470883202b2d6664a026a2d54d
Deleted: sha256:d7d66a00b3cd43b2d195dca6fba2a726a2980e75cdeb94217ad0f5b579c086e7
[root@ovo ~]# docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
tomcat       latest    bb832de23021   10 days ago   680MB
nginx        latest    ad4c705f24d3   2 weeks ago   133MB
```

> 也可以`docker images rm 镜像ID`

### 镜像制作历史

```bash
[root@ovo ~]# docker history nginx
IMAGE          CREATED       CREATED BY                                      SIZE      COMMENT
ad4c705f24d3   2 weeks ago   /bin/sh -c #(nop)  CMD ["nginx" "-g" "daemon…   0B        
<missing>      2 weeks ago   /bin/sh -c #(nop)  STOPSIGNAL SIGQUIT           0B        
<missing>      2 weeks ago   /bin/sh -c #(nop)  EXPOSE 80                    0B        
<missing>      2 weeks ago   /bin/sh -c #(nop)  ENTRYPOINT ["/docker-entr…   0B        
<missing>      2 weeks ago   /bin/sh -c #(nop) COPY file:09a214a3e07c919a…   4.61kB    
<missing>      2 weeks ago   /bin/sh -c #(nop) COPY file:0fd5fca330dcd6a7…   1.04kB    
<missing>      2 weeks ago   /bin/sh -c #(nop) COPY file:0b866ff3fc1ef5b0…   1.96kB    
<missing>      2 weeks ago   /bin/sh -c #(nop) COPY file:65504f71f5855ca0…   1.2kB     
<missing>      2 weeks ago   /bin/sh -c set -x     && addgroup --system -…   64MB      
<missing>      2 weeks ago   /bin/sh -c #(nop)  ENV PKG_RELEASE=1~buster     0B        
<missing>      2 weeks ago   /bin/sh -c #(nop)  ENV NJS_VERSION=0.6.2        0B        
<missing>      2 weeks ago   /bin/sh -c #(nop)  ENV NGINX_VERSION=1.21.3     0B        
<missing>      3 weeks ago   /bin/sh -c #(nop)  LABEL maintainer=NGINX Do…   0B        
<missing>      3 weeks ago   /bin/sh -c #(nop)  CMD ["bash"]                 0B        
<missing>      3 weeks ago   /bin/sh -c #(nop) ADD file:4ff85d9f6aa246746…   69.3MB
```

### 镜像本地保存（不常用，一般用镜像仓库）

`docker save 镜像名称`

## 容器基本命令

### Docker查看所有容器

`docker ps`		查看所有运行的容器

`docker ps -a`	查看所有容器（包括启动和退出）

### Docker开一个新容器

`docker run 参数 镜像名称：tag 执行的命令`

常用参数

> -i	保持和docker容器内的交互，运行的命令结束后，容器依然存活，没有退出
>
> -t	虚拟一个tty
>
> -d	后台运行容器
>
> --rm	执行完成命令或程序就销毁
>
> --name	起一个自定义名称
>
> -p	宿主机：内部端口

```bash
[root@ovo ~]# docker run --rm -d --name tomcat1 -p 8080:8080 tomcat
0078b7050f269ec0d772770a9485866be991ec28e8a1f9b4a11a4338b889db5e
[root@ovo ~]# docker ps
CONTAINER ID   IMAGE     COMMAND             CREATED          STATUS          PORTS                                       NAMES
0078b7050f26   tomcat    "catalina.sh run"   16 seconds ago   Up 15 seconds   0.0.0.0:8080->8080/tcp, :::8080->8080/tcp   tomcat1
```

### 停止指定容器

> 参数可以是name，id

```bash
[root@ovo ~]# docker stop httpd5
httpd5
[root@ovo ~]# docker stop 54f1857
54f1857
```

### 停止所有容器

```bash
[root@ovo ~]# docker stop $(docker ps -a -q)
bce8ea89039a
457c67abc106
54f1857db6aa
efea6eaac7b3
993be5506025
13379fc5cdb5
0078b7050f26
```

### Docker删除容器

> 先停止才可以删除

```bash
[root@ovo ~]# docker rm efea6eaac7b3
efea6eaac7b3
[root@ovo ~]# docker rm httpd2
httpd2
```

### Docker开启容器

`docker start 名称/ID`

### Docker进入容器

```bash
[root@ovo ~]# docker exec -it tomcat9 bash
root@7deed1936cdd:/usr/local/tomcat# pwd
/usr/local/tomcat
 
#exit退出此终端，不会导致容器停止
```

###  在宿主机与容器之间交换文件

`docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-`	容器中复制到宿主机 

`docker cp [OPTIONS] SRC_PATH|- CONTAINER:DEST_PATH`	宿主机复制到容器中

```bash
#容器复制到宿主机
[root@ovo /]# docker cp tomcat9:/usr/local/tomcat/webapps/ROOT/index.html /ovo
[root@ovo /]# ls /ovo
hplus  index.html  logo1.jpg  logo.png
#宿主机复制到容器
[root@ovo /]# docker cp /ovo/hplus tomcat9:/usr/local/tomcat/webapps/ROOT/
```

### Docker查看日志

```
docker logs 容器名称/ID
docker logs -f -t --since="2021-9-25" --tail=10 tomcat9
```

> --since	开始日期
>
> -f	查看实时日志
>
> -t	查看日志产生的日期
>
> -tail=10	查看最后10条日志
>
> tomcat9	容器名称

```bash
[root@ovo ~]# docker logs -f --tail=3 -t nginx1
2021-09-26T13:04:30.389550640Z 124.238.124.170 - - [26/Sep/2021:13:04:30 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4651.0 Safari/537.36" "-"
2021-09-26T13:08:54.062221134Z 124.238.124.170 - - [26/Sep/2021:13:08:54 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4651.0 Safari/537.36" "-"
2021-09-26T13:19:12.484677453Z 124.238.124.170 - - [26/Sep/2021:13:19:12 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4651.0 Safari/537.36" "-"
```

## Docker数据卷

> 数据卷可以在容器之间共享和重用
>
> 对数据卷的修改会马上生效
>
> 对数据卷修改不影响镜像
>
> 数据卷会一直存在，即使容器被删除

### 数据卷应用

> #1到4没啥用，直接5就可

```bash
#1 创建数据卷(adate为创建的数据卷名称)
[root@ovo ~]# docker volume create adata
adata
#创建数据卷之后默认会保存在：/var/lib/docker/volume/数据卷名称/_data目录下

#2 查看数据卷
[root@ovo ~]# docker volume inspect adata
[
    {
        "CreatedAt": "2021-09-26T22:14:57+08:00",
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/adata/_data",
        "Name": "adata",
        "Options": {},
        "Scope": "local"
    }
]

#3 查看全部数据卷
[root@ovo ~]# docker volume ls
DRIVER    VOLUME NAME
local     adata
local     adate

#4 删除数据卷
[root@ovo ~]# docker volume rm adate
adate

#5 应用数据卷
#5.1 当要映射的数据卷不存在时，Docker会自动创建 
#docker run -v 数据卷名称:容器内路径 镜像ID
[root@ovo ~]# docker run -d --name tomcat-9 -v adata:/usr/local/tomcat/webapps/ROOT -p 11111:8080 tomcat
d37c71f0c0345134dd017e6686e2d9404ed151b46568f0ed35263c17a032e25d

#5.2 直接指定一个路径作为数据卷的存储位置
#docker run -v 路径:容器内路径 镜像ID

```

## Docker安装开发环境

### nginx配置

```bash
#容器内
root@993be5506025:/# whereis nginx
nginx: /usr/sbin/nginx /usr/lib/nginx /etc/nginx /usr/share/nginx
#宿主机
[root@ovo nginx]# pwd
/usr/local/nginx
[root@ovo nginx]# mkdir html
[root@ovo nginx]# mkdir logs
[root@ovo nginx]# mkdir conf
[root@ovo nginx]# ls
conf  html  logs
[root@ovo nginx]# docker cp nginx1:/etc/nginx/nginx.conf /usr/local/nginx/conf/
[root@ovo nginx]# docker cp nginx1:/etc/nginx/conf.d /usr/local/nginx/conf/

#带映射创建nginx容器，不太稳妥，有待更新
docker run -d -p 80:80 \
--name nginx-80 \
-v /usr/local/nginx/html:/usr/share/nginx/html \
-v /usr/local/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /usr/local/nginx/conf/conf.d/default.conf:/etc/nginx/conf.d/default.conf \
-v /usr/local/nginx/logs:/var/log/nginx \
nginx

[root@ovo ~]# docker run -d -p 22222:80 --name nginx-80 -v /usr/local/nginx/html:/usr/share/nginx/html -v /usr/local/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /usr/local/nginx/conf/conf.d/default.conf:/etc/nginx/conf.d/default.conf -v /usr/local/nginx/logs:/var/log/nginx nginx
7d6cd11f49682674fbc684c41be467b35a355b14864e8aac0ee01082e29aedbb
```

### MySQL

