FROM mysql:5.7

ADD ./conf.d /etc/mysql/conf.d
ADD ./sql /docker-entrypoint-initdb.d

CMD ["--default-authentication-plugin=mysql_native_password"]