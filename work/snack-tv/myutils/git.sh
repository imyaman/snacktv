#!/usr/bin/sh

#git config --global user.name "Sangyong Gwak"
#git config --global user.email sangyong.gwak@bdsnack.com

git init
git add config.xml www myutils 
git remote add http://175.113.119.231/sangyong.gwak/snack-tv.git
git push origin master
