/*
Navicat MySQL Data Transfer

Source Server         : mydb
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5db

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-07-27 09:49:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for login_houtai
-- ----------------------------
DROP TABLE IF EXISTS `login_houtai`;
CREATE TABLE `login_houtai` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usename` varchar(255) DEFAULT NULL,
  `psw` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login_houtai
-- ----------------------------
INSERT INTO `login_houtai` VALUES ('1', '190400', '123456');
SET FOREIGN_KEY_CHECKS=1;
