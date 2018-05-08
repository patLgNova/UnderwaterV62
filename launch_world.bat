@echo off
color b
@title AcaciaMS: World
set CLASSPATH=.;dist\AcaciaMS.jar;dist\lib\mina-core.jar;dist\lib\slf4j-api.jar;dist\lib\slf4j-jdk14.jar;dist\lib\mysql-connector-java-bin.jar
java -Drecvops=recvops.properties -Dsendops=sendops.properties -Dwzpath=wz\ -Djavax.net.ssl.keyStore=filename.keystore -Djavax.net.ssl.keyStorePassword=passwd -Djavax.net.ssl.trustStore=filename.keystore -Djavax.net.ssl.trustStorePassword=passwd net.world.WorldServer
pause
