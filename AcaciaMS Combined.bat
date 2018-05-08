@echo off
color b
cls

title AcaciaMS Revision 5/3/2018
echo AcaciaMS has started:
start /b launch_world.bat
echo World Launched

ping localhost -w 10000 >nul
ping localhost -w 10000 >nul
start /b launch_login.bat
echo Login Launched

ping localhost -w 10000 >nul
ping localhost -w 10000 >nul
start /b launch_channel.bat
echo Channel Launched

