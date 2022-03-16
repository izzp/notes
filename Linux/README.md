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

配置[Oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh) 即可

| Method    | Command                                                      |
| --------- | ------------------------------------------------------------ |
| **curl**  | sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" |
| **wget**  | sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" |
| **fetch** | sh -c "$(fetch -o - https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" |

### 安装NVM管理多版本Node.js

安装和更新脚本		[项目地址](https://github.com/nvm-sh/nvm)

```bash
# 把命令中的版本改为最新版本 https://github.com/nvm-sh/nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
# 或者
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
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

