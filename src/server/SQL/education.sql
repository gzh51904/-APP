/*
Navicat MySQL Data Transfer

Source Server         : mydb
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5db

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-07-27 09:49:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for education
-- ----------------------------
DROP TABLE IF EXISTS `education`;
CREATE TABLE `education` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `viewMount` varchar(255) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of education
-- ----------------------------
INSERT INTO `education` VALUES ('1', '1.png', '觉得余额宝收益不低？不如看看以下几种理财产品1', '财富3000问', '43466', '347', '15');
INSERT INTO `education` VALUES ('2', '2.png', '觉得余额宝收益不低？不如看看以下几种理财产品2', '财富3001问', '43467', '348', '16');
INSERT INTO `education` VALUES ('3', '3.png', '觉得余额宝收益不低？不如看看以下几种理财产品3', '财富3002问', '43468', '349', '17');
INSERT INTO `education` VALUES ('4', '4.png', '觉得余额宝收益不低？不如看看以下几种理财产品4', '财富3003问', '43469', '350', '18');
INSERT INTO `education` VALUES ('5', '5.png', '觉得余额宝收益不低？不如看看以下几种理财产品5', '财富3004问', '43470', '351', '19');
INSERT INTO `education` VALUES ('6', '6.png', '觉得余额宝收益不低？不如看看以下几种理财产品6', '财富3005问', '43471', '352', '20');
INSERT INTO `education` VALUES ('7', '7.png', '觉得余额宝收益不低？不如看看以下几种理财产品7', '财富3006问', '43472', '353', '21');
INSERT INTO `education` VALUES ('8', '8.png', '觉得余额宝收益不低？不如看看以下几种理财产品8', '财富3007问', '43473', '354', '22');
INSERT INTO `education` VALUES ('9', '9.png', '觉得余额宝收益不低？不如看看以下几种理财产品9', '财富3008问', '43474', '355', '23');
INSERT INTO `education` VALUES ('10', '10.png', '觉得余额宝收益不低？不如看看以下几种理财产品10', '财富3009问', '43475', '356', '24');
INSERT INTO `education` VALUES ('11', '1.png', '觉得余额宝收益不低？不如看看以下几种理财产品11', '财富3010问', '43476', '357', '25');
INSERT INTO `education` VALUES ('12', '2.png', '觉得余额宝收益不低？不如看看以下几种理财产品12', '财富3011问', '43477', '358', '26');
INSERT INTO `education` VALUES ('13', '3.png', '觉得余额宝收益不低？不如看看以下几种理财产品13', '财富3012问', '43478', '359', '27');
INSERT INTO `education` VALUES ('14', '4.png', '觉得余额宝收益不低？不如看看以下几种理财产品14', '财富3013问', '43479', '360', '28');
INSERT INTO `education` VALUES ('15', '5.png', '觉得余额宝收益不低？不如看看以下几种理财产品15', '财富3014问', '43480', '361', '29');
INSERT INTO `education` VALUES ('16', '6.png', '觉得余额宝收益不低？不如看看以下几种理财产品16', '财富3015问', '43481', '362', '30');
INSERT INTO `education` VALUES ('17', '7.png', '觉得余额宝收益不低？不如看看以下几种理财产品17', '财富3016问', '43482', '363', '31');
INSERT INTO `education` VALUES ('18', '8.png', '觉得余额宝收益不低？不如看看以下几种理财产品18', '财富3017问', '43483', '364', '32');
INSERT INTO `education` VALUES ('19', '9.png', '觉得余额宝收益不低？不如看看以下几种理财产品19', '财富3018问', '43484', '365', '33');
SET FOREIGN_KEY_CHECKS=1;
