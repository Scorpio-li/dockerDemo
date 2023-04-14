# FROM nginx 指定该镜像是基于 nginx:latest 镜像而构建的；
FROM nginx  

# 维护者信息
# MAINTAINER lizhiliang

# 命令的意思是将项目根目录下 dist 文件夹中的所有文件复制到镜像中 /usr/share/nginx/html/ 目录下；
COPY dist/ /usr/share/nginx/html/  

# 将 default.conf 复制到 etc/nginx/conf.d/default.conf，用本地的 default.conf 配置来替换 Nginx 镜像里的默认配置
COPY default.conf /etc/nginx/conf.d/default.conf  