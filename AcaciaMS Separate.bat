@echo off
color b
cls

title AcaciaMS Starter
start launch_world.bat
echo : World Launched -

ping localhost -w 10000 >nul
ping localhost -w 10000 >nul
start launch_login.bat
echo : Login Launched -

ping localhost -w 10000 >nul
ping localhost -w 10000 >nul
start launch_channel.bat
echo : Channel Launched -

