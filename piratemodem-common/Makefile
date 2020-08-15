#
# Copyright (C) 2006-2014 OpenWrt.org
#
# This is free software, licensed under the GNU General Public License v3.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=piratemodem-common
PKG_VERSION=1

PKG_MAINTAINER:=George <zhoreeq@protonmail.com>
PKG_LICENSE:=LGPL-3.0-only

include $(INCLUDE_DIR)/package.mk

define Package/$(PKG_NAME)
  TITLE:=PirateModem system files
  CATEGORY:=PirateModem
  URL:=https://popura-network.github.io/
  PKGARCH:=all
endef

define Package/$(PKG_NAME)/description
	Basic system files for PirateModem
endef

define Build/Compile
endef

define Package/$(PKG_NAME)/install
	$(CP) ./files/* $(1)/
endef

$(eval $(call BuildPackage,$(PKG_NAME)))
