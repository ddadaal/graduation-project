SH_DIR=$(dirname "$BASH_SOURCE")
mysql -uroot -e "CREATE DATABASE glance;"
mysql -uroot -e "GRANT ALL PRIVILEGES ON glance.* TO 'glance'@'localhost' IDENTIFIED BY 'GLANCE_DBPASS';"
mysql -uroot -e "GRANT ALL PRIVILEGES ON glance.* TO 'glance'@'%' IDENTIFIED BY 'GLANCE_DBPASS';"

. /root/admin-openrc

openstack user create --domain default --password glance glance
openstack role add --project service --user glance admin
openstack service create --name glance --description "OpenStack Image" image
openstack endpoint create --region RegionOne image public http://controller:9292
openstack endpoint create --region RegionOne image internal http://controller:9292
openstack endpoint create --region RegionOne image admin http://controller:9292

yum install -y openstack-glance

cp "$SH_DIR/glance-api.conf" /etc/glance/glance-api.conf
cp "$SH_DIR/glance-registry.conf" /etc/glance/

su -s /bin/sh -c "glance-manage db_sync" glance

systemctl enable openstack-glance-api.service
systemctl start openstack-glance-api.service