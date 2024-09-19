# Debian

----

### 安装desktop

``` bash
# 安装工具
sudo apt-get install tasksel -y
# 运行
tasksel
```

### 编译安装Nginx

#### 环境准备

```bash
# 安装Gcc编译器
apt install -y build-essential
# 安装正则库
apt install -y libpcre3 libpcre3-dev
# 安装zlib库
apt install -y zlib1g-dev
# 安装OpenSSL库
apt install -y openssl libssl-dev
```

#### 下载源码

去[官网](http://nginx.org/en/download.html)下载稳定版本

```bash
# 下载源码
wget http://nginx.org/download/nginx-1.22.0.tar.gz
# 解压源码
tar -xf nginx-1.22.0.tar.gz
# 进入源代码内
cd cd nginx-1.22.0
```

#### 编译

参考[官网文档](http://nginx.org/en/docs/configure.html)

```bash
./configure \
--prefix=/usr/local/nginx \
--user=www \
--group=www \
--sbin-path=/usr/local/nginx/sbin/nginx \
--conf-path=/usr/local/nginx/nginx.conf \
--error-log-path=/var/log/nginx/error.log \
--http-log-path=/var/log/nginx/access.log \
--pid-path=/var/run/nginx.pid \
--lock-path=/var/run/nginx.lock \
--http-client-body-temp-path=/var/cache/nginx/client_temp \
--http-proxy-temp-path=/var/cache/nginx/proxy_temp \
--http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp \
--http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp \
--http-scgi-temp-path=/var/cache/nginx/scgi_temp \
--with-file-aio \
--with-threads \
--with-http_addition_module \
--with-http_auth_request_module \
--with-http_dav_module \
--with-http_flv_module \
--with-http_gunzip_module \
--with-http_gzip_static_module \
--with-http_mp4_module \
--with-http_random_index_module \
--with-http_realip_module \
--with-http_secure_link_module \
--with-http_slice_module \
--with-http_ssl_module \
--with-http_stub_status_module \
--with-http_sub_module \
--with-http_v2_module \
--with-mail \
--with-mail_ssl_module \
--with-stream \
--with-stream_realip_module \
--with-stream_ssl_module \
--with-stream_ssl_preread_module
```

其中：

- `--prefix`：Nginx主要安装路径，后续Nginx子目录依照这个变量展开
- `--user`：设置Nginx进程启动时，所属的用户
- `--group`：设置Nginx进程启动时，所属的用户组

```bash
/usr/sbin/groupadd -f www
/usr/sbin/useradd -g www www
```

```bash
make
```

#### 安装

```bash
make install
```

#### 创建守护

```bash
vim /usr/lib/systemd/system/nginx.service
# 内容
[Unit]
Description=nginx
After=network.target
[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s quit
PrivateTmp=true
[Install]
WantedBy=multi-user.target
```

#### 卸载

```bash
# 停止nginx服务
systemctl stop nginx
# 删除Nginx服务
rm -rf /usr/lib/systemd/system/nginx.service
# 重载配置
systemctl daemon-reload
# 删除Nginx编译文件
rm -rf nginx
```

