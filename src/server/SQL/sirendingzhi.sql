/*
Navicat MySQL Data Transfer

Source Server         : mydb
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5db

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-07-27 09:48:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for sirendingzhi
-- ----------------------------
DROP TABLE IF EXISTS `sirendingzhi`;
CREATE TABLE `sirendingzhi` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `creditImg` varchar(255) DEFAULT NULL,
  `repayWay` varchar(255) DEFAULT NULL,
  `closePeriod` varchar(255) DEFAULT NULL,
  `borrowRate` varchar(255) DEFAULT NULL,
  `loanTimeLimit` varchar(255) DEFAULT NULL,
  `surplusAmount` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sirendingzhi
-- ----------------------------
INSERT INTO `sirendingzhi` VALUES ('1', '此次借款用于大棚投资', 'B', '还本付息', '90天', '9.9', '12', '2.26');
INSERT INTO `sirendingzhi` VALUES ('2', '用于扩大种植桉树规模', 'BBB', '还本付息', '90天', '9.9', '12', '3.26');
INSERT INTO `sirendingzhi` VALUES ('3', '此次借款用于大棚投资', 'B', '还本付息', '90天', '9.9', '12', '4.26');
INSERT INTO `sirendingzhi` VALUES ('4', '用于扩大种植桉树规模', 'BB', '还本付息', '90天', '9.9', '12', '5.26');
INSERT INTO `sirendingzhi` VALUES ('5', '此次借款用于大棚投资', 'BBB', '还本付息', '90天', '9.9', '12', '6.26');
INSERT INTO `sirendingzhi` VALUES ('6', '用于扩大种植桉树规模', 'B', '还本付息', '90天', '9.9', '12', '7.26');
INSERT INTO `sirendingzhi` VALUES ('7', '此次借款用于大棚投资', 'BBB', '还本付息', '90天', '9.9', '12', '8.26');
INSERT INTO `sirendingzhi` VALUES ('8', '用于扩大种植桉树规模', 'B', '还本付息', '90天', '9.9', '12', '9.26');
INSERT INTO `sirendingzhi` VALUES ('9', '此次借款用于大棚投资', 'BBB', '还本付息', '90天', '9.9', '12', '10.26');
INSERT INTO `sirendingzhi` VALUES ('10', '用于扩大种植桉树规模', 'B', '还本付息', '90天', '9.9', '12', '11.26');
INSERT INTO `sirendingzhi` VALUES ('11', '此次借款用于大棚投资', 'BB', '还本付息', '90天', '9.9', '12', '12.26');
INSERT INTO `sirendingzhi` VALUES ('12', '用于扩大种植桉树规模', 'BBB', '还本付息', '90天', '9.9', '12', '13.26');
INSERT INTO `sirendingzhi` VALUES ('13', '此次借款用于大棚投资', 'B', '还本付息', '90天', '9.9', '12', '14.26');
INSERT INTO `sirendingzhi` VALUES ('14', '用于扩大种植桉树规模', 'BBB', '还本付息', '90天', '9.9', '12', '15.26');
INSERT INTO `sirendingzhi` VALUES ('15', '此次借款用于大棚投资', 'B', '还本付息', '90天', '9.9', '12', '16.26');
INSERT INTO `sirendingzhi` VALUES ('16', '用于扩大种植桉树规模', 'BBB', '还本付息', '90天', '9.9', '12', '17.26');
INSERT INTO `sirendingzhi` VALUES ('17', '此次借款用于大棚投资', 'B', '还本付息', '90天', '9.9', '12', '18.26');
INSERT INTO `sirendingzhi` VALUES ('18', '用于扩大种植桉树规模', 'BB', '还本付息', '90天', '9.9', '12', '19.26');
INSERT INTO `sirendingzhi` VALUES ('19', '此次借款用于大棚投资', 'BBB', '还本付息', '90天', '9.9', '12', '20.26');
INSERT INTO `sirendingzhi` VALUES ('20', '用于扩大种植桉树规模', 'B', '还本付息', '90天', '9.9', '12', '21.26');
SET FOREIGN_KEY_CHECKS=1;
