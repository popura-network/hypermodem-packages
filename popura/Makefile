include $(TOPDIR)/rules.mk

PKG_NAME:=popura
PKG_VERSION:=0.3.14
PKG_RELEASE:=1

PKG_SOURCE_PROTO:=git
PKG_SOURCE_URL:=https://github.com/popura-network/Popura
PKG_SOURCE_DATE:=2020-08-27
PKG_SOURCE_VERSION:=4f55ff93f24e4af3b2db775411daaf5c605fc91d
PKG_MIRROR_HASH:=a0cf85eb1deb0d169ca628a160271f8b83bfc92e692140ece790eb389c7cd15a

PKG_MAINTAINER:=George <zhoreeq@protonmail.com>
PKG_LICENSE:=LGPL-3.0-only
PKG_LICENSE_FILES:=LICENSE

PKG_BUILD_DEPENDS:=golang/host
PKG_BUILD_PARALLEL:=1
PKG_USE_MIPS16:=0

GO_PKG:=github.com/popura-network/Popura
GO_PKG_BUILD_PKG:=github.com/popura-network/Popura/cmd/...

GO_PKG_LDFLAGS_X:= \
  github.com/popura-network/Popura/src/version.buildName=popura-openwrt \
  github.com/popura-network/Popura/src/version.buildVersion=$(PKG_VERSION)

include $(INCLUDE_DIR)/package.mk
include $(TOPDIR)/feeds/packages/lang/golang/golang-package.mk

define Package/popura
	SECTION:=net
	CATEGORY:=Network
	SUBMENU:=Routing and Redirection
	TITLE:=Popura is an alternative Yggdrasil network client 
	URL:=https://popura-network.github.io/
	DEPENDS:=$(GO_ARCH_DEPENDS) @IPV6 +kmod-tun +dkjson +libuci-lua
endef

define Package/popura/description
 Popura is an alternative Yggdrasil network client.
 Yggdrasil builds end-to-end encrypted networks with IPv6.
 Beyond the similarities with cjdns is a different routing
 algorithm. This globally-agreed spanning tree uses greedy
 routing in a metric space. Back-pressure routing techniques
 allow advanced link aggregation bonding on per-stream basis.
 In turn, a single stream will span across multiple network
 interfaces simultaneously with much greater throughput.
endef

define Package/popura/conffiles
/etc/config/yggdrasil
endef

define Package/popura/install
	$(INSTALL_DIR) \
		$(1)/etc/init.d \
		$(1)/etc/uci-defaults \
		$(1)/usr/sbin

	$(INSTALL_BIN) \
		$(GO_PKG_BUILD_BIN_DIR)/yggdrasil \
		$(1)/usr/sbin

	$(INSTALL_BIN) \
		$(GO_PKG_BUILD_BIN_DIR)/yggdrasilctl \
		$(1)/usr/sbin

	$(INSTALL_BIN) \
		./files/ygguci \
		$(1)/usr/sbin

	$(INSTALL_BIN) \
		./files/yggdrasil.defaults \
		$(1)/etc/uci-defaults/yggdrasil

	$(INSTALL_BIN) \
		./files/yggdrasil.init \
		$(1)/etc/init.d/yggdrasil
endef

$(eval $(call GoBinPackage,popura))
$(eval $(call BuildPackage,popura))
