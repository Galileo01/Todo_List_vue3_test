#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
# 发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Galileo01/Todo_List_vue3_test.git master:pages

cd -