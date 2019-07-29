/*
Navicat MySQL Data Transfer

Source Server         : mydb
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5db

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-07-27 09:48:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cartoon
-- ----------------------------
DROP TABLE IF EXISTS `cartoon`;
CREATE TABLE `cartoon` (
  `id` int(12) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `viewMount` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cartoon
-- ----------------------------
INSERT INTO `cartoon` VALUES ('1', '1.png', '易小龙1', '易小龙内容1', '1.1', 'kat1', '555');
INSERT INTO `cartoon` VALUES ('2', '2.png', '易小龙2', '易小龙内容2', '1.2', 'kat2', '555');
INSERT INTO `cartoon` VALUES ('3', '3.png', '易小龙3', '易小龙内容3', '1.3', 'kat3', '555');
INSERT INTO `cartoon` VALUES ('4', '4.png', '易小龙4', '易小龙内容4', '1.4', 'kat4', '555');
INSERT INTO `cartoon` VALUES ('5', '1.png', '易小龙5', '易小龙内容5', '1.5', 'kat5', '555');
INSERT INTO `cartoon` VALUES ('6', '2.png', '易小龙6', '易小龙内容6', '1.6', 'kat6', '555');
INSERT INTO `cartoon` VALUES ('7', '3.png', '易小龙7', '易小龙内容7', '1.7', 'kat7', '555');
INSERT INTO `cartoon` VALUES ('8', '4.png', '易小龙8', '易小龙内容8', '1.8', 'kat8', '555');
INSERT INTO `cartoon` VALUES ('9', '1.png', '易小龙9', '易小龙内容9', '1.9', 'kat9', '555');
INSERT INTO `cartoon` VALUES ('10', '2.png', '易小龙10', '易小龙内容10', '2.0', 'kat10', '555');
SET FOREIGN_KEY_CHECKS=1;
