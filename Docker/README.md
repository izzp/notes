# docker

## 基本命令

#### 列出存在的镜像

```bash
[root@ovo ~]# docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
tomcat       latest    bb832de23021   10 days ago   680MB
nginx        latest    ad4c705f24d3   2 weeks ago   133MB
```

#### 获取镜像

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

#### 删除镜像

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

#### 镜像制作历史

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

#### 镜像本地保存（不常用，一般用镜像仓库）

`docker save 镜像名称`

#### 帮助命令

```shell
docker version # 显示 Docker 版本信息。
docker info # 显示 Docker 系统信息，包括镜像和容器数
docker --help # 帮助
```

