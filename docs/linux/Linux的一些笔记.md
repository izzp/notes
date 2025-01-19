# Linux

## Linux的一些笔记

> 见侧目录

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

### 终端复用--Screen

安装

```bash
# CentOS
yum install screen
# Debian/Ubuntu
apt install screen
```

基础命令

```bash
# 查询screen提示
screen -help
# 已经存在的screen终端
screen -ls
# 使用-R创建Hello,按Ctril+a，再按d，可保持这个screen到后台并回到主终端
screen -R Hello
# 使用screen -r命令,回到虚拟终端
screen -r [pid/name]
# 进入对应终端，退出终端
exit
# 也可以在主终端内，用命令释放：
# 使用-R/-r/-S均可
screen -R [pid/Name] -X quit
```

### 终端复用--Tmux

安装

```bash
# Debian/Ubuntu
apt install tmux
# CentOS/Fedora
yum install tmux
```

基本使用

```bash
# 启动命名tmux
$ tmux new -s <name>
# 分离会话,可使用快捷键 Ctrl+b d
$ tmux detach
# 查看当前所有的 Tmux 会话
$ tmux ls
# 重接会话 使用编号
$ tmux attach -t 0/<name>
# 杀死会话
$ tmux kill-session -t 0/<name>
# 切换会话
$ tmux switch -t 0/<name>
# 重命名会话
$ tmux rename-session -t 0 <new-name>

# 列出所有快捷键，及其对应的 Tmux 命令
$ tmux list-keys
# 列出所有 Tmux 命令及其参数
$ tmux list-commands
# 列出当前所有 Tmux 会话的信息
$ tmux info
```

快捷键
> 默认的快捷键前缀键是`Ctrl+b`

```
?      显示快捷键帮助
空格键    采用下一个内置布局，这个很有意思，在多屏时，用这个就会将多有屏幕竖着展示
!      把当前窗口变为新窗口
"      模向分隔窗口
%      纵向分隔窗口
q      显示分隔窗口的编号
o      跳到下一个分隔窗口。多屏之间的切换
上下键   上一个及下一个分隔窗口
C-方向键  调整分隔窗口大小
&      确认后退出当前tmux
[      复制模式，即将当前屏幕移到上一个的位置上，其他所有窗口都向前移动一个。
c      创建新窗口
n      选择下一个窗口
l      最后使用的窗口
p      选择前一个窗口
w      以菜单方式显示及选择窗口
s      以菜单方式显示和选择会话。这个常用到，可以选择进入哪个tmux
t      显示时钟。然后按enter键后就会恢复到shell终端状态
d      脱离当前会话；这样可以暂时返回Shell界面，输入tmux attach能够重新进入之前的会话
```

### 配置zsh并使用Oh-my-zsh

#### 安装

```bash
# 查看自带终端
cat /etc/shells

# 安装zsh
# CentOS
yum install zsh
# Debian/Ubuntu
apt install zsh

# 设置为默认shell并重启终端：
chsh -s /bin/zsh
```

#### zsh常用命令

```bash
Ctrl+R：搜索历史命令
Alt+D：删除光标后的一个单词
Ctrl+Z：挂起当前进程，可以使用fg命令恢复进程
r：可自动执行上一条命令
d：查看最近使用过的目录，输入数字可以直接进入对应目录

# 显示历史命令执行时间
❯ history -i
    1  2023-05-15 14:10  history -i
# 删除历史命令
❯ history -c
History file deleted.
```

#### 安装配置[Oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh) 

| Method    | Command                                                      |
| --------- | ------------------------------------------------------------ |
| **curl**  | sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" |
| **wget**  | sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" |
| **fetch** | sh -c "$(fetch -o - https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" |

配置[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)命令自动补全插件


```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

配置[zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)高亮显示常用命令插件

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

配置并使用[powerlevel10k](https://github.com/romkatv/powerlevel10k) 主题

1. Clone the repository:

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```
2. Set `ZSH_THEME="powerlevel10k/powerlevel10k"` in `~/.zshrc`.

3. 配置向导：键入`p10k configure`直接访问内置配置向导。


### 安装FNM管理多版本Node.js

安装和更新脚本		[项目地址](https://github.com/Schniz/fnm)

```bash
curl -fsSL https://fnm.vercel.app/install | bash
```

重载环境变量

```bash
# For macOS/Linux With ZSH
source ~/.zshrc
# For Linux With Bash
source ~/.bashrc
```

测试

```bash
fnm -V
```

基本使用

```bash
# 查看已经安装的脚本
fnm ls

# 查看可安装的lts版本
fnm ls-remote

# 安装需要的版本
fnm install v22.13.0

# 激活需要使用的版本
fnm use 22

即可
```

卸载

```bash
rm -rf ~/.fnm
# 并移除对应环境变量
```

### 使用Jenv配置多版本JDK

[项目地址](https://www.jenv.be/)

**下载jenv**

```bash
$ git clone https://github.com/jenv/jenv.git ~/.jenv
```

**配置到环境变量**

到环境变量内配置jenv即可：

```bash
# Bash Shell用户
$ vim ~/.bashrc
# ZSH Shell用户
$ vim ~/.zshrc
```

并添加：

```bash
# Jenv
export PATH="$HOME/.jenv/bin:$PATH"
eval "$(jenv init -)"
```

**重载环境变量**

最后，我们**重载环境变量**：

```bash
# Bash Shell用户
$ source ~/.bashrc
# ZSH Shell用户
$ source ~/.zshrc
```

即可使用

```bash
$ jenv help
```

**添加JDK**

```bash
$ jenv add /usr/local/Zulu11
```
**切换JDK**
切换的方法很简单，首先看看当前安装的JDK版本：

```bash
$ jenv versions
```
这个时候，我们用的还是默认JDK（system (set by /root/.jenv/version)），我们要切换到JDK11只需要：


```bash
$ jenv local 11
```
这时，这个目录下使用的JDK就是JDK11：
需要全局JDK，可以用：

```bash
$ jenv global 11
```
> 遇到`$JAVA_HOME` 未设置的报错，使用`jenv enable-plugin export`可以解决。

添加 JVM 选项（全局，按目录或当前 shell 实例）

```bash
$ jenv global-options "-Xmx512m" 
```

查看激活了那个插件。

```bash
$ jenv plugins
```

假设要 Maven 使用通过 Jenv 激活的 JDK，而不是默认`JAVA_HOME`配置。需要激活 Jenv 的 maven 插件。

```bash
$ jenv enable-plugin maven
maven plugin activated

$ jenv disable-plugin maven
maven disabled
```

### nano的使用

高亮

```bash
# 复制配置文件
$ sudo cp /etc/nanorc ~/.nanorc
# 加入包含
$ sudo nano .nanorc
include "/usr/share/nano/*.nanorc"
```
更多高亮
https://github.com/scopatz/nanorc

### Vim的使用

三种模式： 正常模式，编辑模式，命令行模式
区分大小写

- i -编辑模式(插入左侧)
- a - 附后
- I -行前
- A - 行后
- esc -正常模式
- : -命令行模式
- :q -仅退出
- :q! -不保存退出
- :wq -保存退出
- HJKL -上下左右
- o -新增下一行
- O -新增上一行
- G -到最后一行
- gg -到第一行
- yy -复制这一行
- p -粘贴
- dd -删除当前行
- . -重复上一次操作
- u -撤销前次操作
- ctrl+r - 恢复前次操作
- dw -删除单词
- cw -改变单词
- w -下个单词首部
- e -下个单词尾部
- b -上个单词首部
- / -搜索

**开启行号**

```bash
# 看版本和配置文件位置
$ vim --version
# 打开配置文件
$ vim $HOME/.vimrc
# 新增
set number
```

### iotop 监控磁盘I/O使用状况工具

#### 用法

```shell
iotop（选项）
```

#### 选项

```shell
-o：只显示有io操作的进程
-b：批量显示，无交互，主要用作记录到文件。
-n NUM：显示NUM次，主要用于非交互式模式。
-d SEC：间隔SEC秒显示一次。
-p PID：监控的进程pid。
-u USER：监控的进程用户。
```

### ncdu 磁盘使用分析查看工具

#### 用法

```shell
ncdu <options> <directory>
```

查看当前目录磁盘使用，直接：

```shell
ncdu
# 按 Q 键退出
```

查看指定目录磁盘使用：

```shell
ncdu /  #根目录，全盘
ncdu /home
# 按 Q 键退出
```

### Fail2Ban的使用

```bash
$ apt install fail2ban
```

###  MariaDB相关

安全配置脚本

```
mysql_secure_installation
```
改密码
```sql
MariaDB [(none)]> grant all privileges on *.* to 'root'@'%' identified by '123456qwer';
Query OK, 0 rows affected (0.005 sec)
 
MariaDB [(none)]> delete from mysql.user where User='';
Query OK, 2 rows affected (0.006 sec)
 
MariaDB [(none)]> FLUSH PRIVILEGES;
Query OK, 0 rows affected (0.001 sec)
```

### 系统和硬件信息命令inxi

安装

```bash
# 基于Debian的发行版
sudo apt install inxi

# 基于RHEL的发行版：
# 安装EPEL软件仓库：
sudo yum install epel-release
# 使用如下命令安装inxi
sudo yum install inxi
```

使用

```bash
inxi -Fx0
```

### 常见错误处理

使用OpenJDK错误处理

```bash
# 缺少字体
$ apt install fontconfig
$ apt install fonts-dejavu
```
