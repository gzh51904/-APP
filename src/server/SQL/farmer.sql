/*
Navicat MySQL Data Transfer

Source Server         : mydb
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5db

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-07-27 09:49:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for farmer
-- ----------------------------
DROP TABLE IF EXISTS `farmer`;
CREATE TABLE `farmer` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `viewmount` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of farmer
-- ----------------------------
INSERT INTO `farmer` VALUES ('1', '1.png', '板蓝根1', '板蓝根内容1', 'author1', '1.1', '555');
INSERT INTO `farmer` VALUES ('2', '2.png', '板蓝根2', '板蓝根内容2', 'author2', '1.1', '555');
INSERT INTO `farmer` VALUES ('3', '3.png', '板蓝根3', '板蓝根内容3', 'author3', '1.1', '555');
INSERT INTO `farmer` VALUES ('4', '4.png', '板蓝根4', '板蓝根内容4', 'author4', '1.1', '555');
INSERT INTO `farmer` VALUES ('5', '1.png', '板蓝根5', '板蓝根内容5', 'author5', '1.1', '555');
INSERT INTO `farmer` VALUES ('6', '2.png', '板蓝根6', '板蓝根内容6', 'author6', '1.1', '555');
INSERT INTO `farmer` VALUES ('7', '3.png', '板蓝根7', '板蓝根内容7', 'author7', '1.1', '555');
INSERT INTO `farmer` VALUES ('8', '4.png', '板蓝根8', '板蓝根内容8', 'author8', '1.1', '555');
INSERT INTO `farmer` VALUES ('9', '1.png', '板蓝根9', '板蓝根内容9', 'author9', '1.1', '555');
INSERT INTO `farmer` VALUES ('10', '2.png', '板蓝根10', '板蓝根内容10', 'author10', '1.1', '555');
SET FOREIGN_KEY_CHECKS=1;
