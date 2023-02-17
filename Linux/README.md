# Linux

## Linux的一些笔记

> 见左侧目录

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

### 终端命令--Screen

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

### 配置zsh并使用Oh-my-zsh

安装

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

配置[Oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh) 

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


### 安装NVM管理多版本Node.js

安装和更新脚本		[项目地址](https://github.com/nvm-sh/nvm)

```bash
# 把命令中的版本改为最新版本 https://github.com/nvm-sh/nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
# 或者
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
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
nvm -v
```

基本使用

```bashi
# 查看已经安装的脚本
nvm list

# 查看可安装的lts版本
nvm ls-remote --lts

# 安装需要的版本
nvm install 16.14.1

# 激活需要使用的版本
nvm use 16

即可
```

卸载

```bash
# 删除NVM以及Node.js
rm -rf ~/.nvm
# 删除可能存在的NPM
rm -rf ~/.npn
# 在环境变量内移除：
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

### 使用Jenv配置多版本JDK

[项目地址](https://www.jenv.be/)

**下载jenv**

```
git clone https://github.com/jenv/jenv.git ~/.jenv
```

**配置到环境变量**

到环境变量内配置jenv即可：

```
# Bash Shell用户
vim ~/.bashrc
# ZSH Shell用户
vim ~/.zshrc
```

并添加：

```
# Jenv
export PATH="$HOME/.jenv/bin:$PATH"
eval "$(jenv init -)"
```

**重载环境变量**

最后，我们**重载环境变量**：

```
# Bash Shell用户
source ~/.bashrc
# ZSH Shell用户
source ~/.zshrc
```

即可使用

```
jenv help
```

**添加JDK**

```
jenv add /usr/local/Zulu11
```
**切换JDK**
切换的方法很简单，首先看看当前安装的JDK版本：

```
jenv versions
```
这个时候，我们用的还是默认JDK（system (set by /root/.jenv/version)），我们要切换到JDK11只需要：


```
jenv local 11
```
这时，这个目录下使用的JDK就是JDK11：
需要全局JDK，可以用：

```
jenv global 11
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
