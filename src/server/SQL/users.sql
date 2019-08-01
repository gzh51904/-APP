/*
Navicat MySQL Data Transfer

Source Server         : mydb
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5db

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-07-30 19:44:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `psw` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '15622384926', '123456');
INSERT INTO `users` VALUES ('4', '15632252525', '456123');
INSERT INTO `users` VALUES ('2', '15622384893', '123456');
INSERT INTO `users` VALUES ('5', '15678978945', '123456');
INSERT INTO `users` VALUES ('7', '15622384926', '123456');
INSERT INTO `users` VALUES ('8', '15622384926', '123456');
INSERT INTO `users` VALUES ('9', '15898989898', '123456');
SET FOREIGN_KEY_CHECKS=1;
