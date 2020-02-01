SH_DIR=$(dirname "$BASH_SOURCE")

# Install and configure packages
"$SH_DIR/packages/openstack/install.sh"
"$SH_DIR/packages/database/install.sh"
"$SH_DIR/packages/rabbitmq/install.sh"
"$SH_DIR/packages/memcached/install.sh"
"$SH_DIR/packages/etcd/install.sh"

# Install services

read -p "Install keystone?"
"$SH_DIR/services/keystone/install.sh"
"$SH_DIR/services/keystone/configure.sh"
"$SH_DIR/services/keystone/verify.sh"
"$SH_DIR/services/keystone/create-auth-scripts.sh"

read -p "Install glance?"
"$SH_DIR/services/glance/install.sh"
"$SH_DIR/services/glance/verify.sh"

read -p "Install placement?"
"$SH_DIR/services/placement/install.sh"
"$SH_DIR/services/placement/verify.sh"