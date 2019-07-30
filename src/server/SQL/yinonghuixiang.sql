/*
Navicat MySQL Data Transfer

Source Server         : mydb
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5db

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-07-27 09:48:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for yinonghuixiang
-- ----------------------------
DROP TABLE IF EXISTS `yinonghuixiang`;
CREATE TABLE `yinonghuixiang` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `surplusAmount` varchar(255) DEFAULT NULL,
  `num1` varchar(255) DEFAULT NULL,
  `num2` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `lend` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of yinonghuixiang
-- ----------------------------
INSERT INTO `yinonghuixiang` VALUES ('1', '翼农惠享5872期', '25.64万元', '7.2', '%+1%', '3', 'y');
INSERT INTO `yinonghuixiang` VALUES ('2', '翼农惠享5871期', '25.65万元', '8.2', '%+1%', '4', 'y');
INSERT INTO `yinonghuixiang` VALUES ('3', '翼农惠享5870期', '25.66万元', '9.2', '%+1%', '5', 'y');
INSERT INTO `yinonghuixiang` VALUES ('4', '翼农惠享5869期', '25.67万元', '10.2', '%+1%', '6', 'y');
INSERT INTO `yinonghuixiang` VALUES ('5', '翼农惠享5868期', '25.68万元', '11.2', '%+1%', '7', 'y');
INSERT INTO `yinonghuixiang` VALUES ('6', '翼农惠享5867期', '25.69万元', '12.2', '%+1%', '8', 'y');
INSERT INTO `yinonghuixiang` VALUES ('7', '翼农惠享5866期', '25.70万元', '13.2', '%+1%', '9', 'y');
INSERT INTO `yinonghuixiang` VALUES ('8', '翼农惠享5865期', '25.71万元', '14.2', '%+1%', '3', 'y');
INSERT INTO `yinonghuixiang` VALUES ('9', '翼农惠享5864期', '25.72万元', '15.2', '%+1%', '4', 'y');
INSERT INTO `yinonghuixiang` VALUES ('10', '翼农惠享5863期', '25.73万元', '16.2', '%+1%', '5', 'y');
INSERT INTO `yinonghuixiang` VALUES ('11', '翼农惠享5862期', '25.74万元', '17.2', '%+1%', '6', 'y');
INSERT INTO `yinonghuixiang` VALUES ('12', '翼农惠享5861期', '25.75万元', '18.2', '%+1%', '7', 'y');
INSERT INTO `yinonghuixiang` VALUES ('13', '翼农惠享5860期', '25.76万元', '19.2', '%+1%', '8', 'y');
INSERT INTO `yinonghuixiang` VALUES ('14', '翼农惠享5859期', '25.77万元', '20.2', '%+1%', '9', 'y');
INSERT INTO `yinonghuixiang` VALUES ('15', '翼农惠享5858期', '25.78万元', '21.2', '%+1%', '6', 'y');
INSERT INTO `yinonghuixiang` VALUES ('16', '翼农惠享5857期', '25.79万元', '22.2', '%+1%', '7', 'y');
INSERT INTO `yinonghuixiang` VALUES ('17', '翼农惠享5856期', '25.80万元', '23.2', '%+1%', '8', 'y');
INSERT INTO `yinonghuixiang` VALUES ('18', '翼农惠享5855期', '25.81万元', '24.2', '%+1%', '9', 'y');
INSERT INTO `yinonghuixiang` VALUES ('19', '翼农惠享5854期', '25.82万元', '25.2', '%+1%', '3', 'y');
INSERT INTO `yinonghuixiang` VALUES ('20', '翼农惠享5853期', '25.83万元', '26.2', '%+1%', '4', 'n');
INSERT INTO `yinonghuixiang` VALUES ('21', '翼农惠享5852期', '25.84万元', '27.2', '%+1%', '5', 'n');
INSERT INTO `yinonghuixiang` VALUES ('22', '翼农惠享5851期', '25.85万元', '28.2', '%+1%', '6', 'n');
INSERT INTO `yinonghuixiang` VALUES ('23', '翼农惠享5850期', '25.86万元', '29.2', '%+1%', '6', 'n');
INSERT INTO `yinonghuixiang` VALUES ('24', '翼农惠享5849期', '25.87万元', '30.2', '%+1%', '7', 'n');
INSERT INTO `yinonghuixiang` VALUES ('25', '翼农惠享5848期', '25.88万元', '31.2', '%+1%', '8', 'n');
INSERT INTO `yinonghuixiang` VALUES ('26', '翼农惠享5847期', '25.89万元', '32.2', '%+1%', '9', 'n');
INSERT INTO `yinonghuixiang` VALUES ('27', '翼农惠享5846期', '25.90万元', '33.2', '%+1%', '3', 'n');
INSERT INTO `yinonghuixiang` VALUES ('28', '翼农惠享5845期', '25.91万元', '34.2', '%+1%', '4', 'n');
INSERT INTO `yinonghuixiang` VALUES ('29', '翼农惠享5844期', '25.92万元', '35.2', '%+1%', '5', 'n');
INSERT INTO `yinonghuixiang` VALUES ('30', '翼农惠享5843期', '25.93万元', '36.2', '%+1%', '7', 'n');
INSERT INTO `yinonghuixiang` VALUES ('31', '翼农惠享5842期', '25.94万元', '37.2', '%+1%', '8', 'n');
INSERT INTO `yinonghuixiang` VALUES ('32', '翼农惠享5841期', '25.95万元', '38.2', '%+1%', '9', 'n');
INSERT INTO `yinonghuixiang` VALUES ('33', '翼农惠享5840期', '25.96万元', '39.2', '%+1%', '3', 'n');
INSERT INTO `yinonghuixiang` VALUES ('34', '翼农惠享5839期', '25.97万元', '40.2', '%+1%', '4', 'n');
INSERT INTO `yinonghuixiang` VALUES ('35', '翼农惠享5838期', '25.98万元', '41.2', '%+1%', '5', 'n');
INSERT INTO `yinonghuixiang` VALUES ('36', '翼农惠享5837期', '25.99万元', '42.2', '%+1%', '7', 'n');
INSERT INTO `yinonghuixiang` VALUES ('37', '翼农惠享5836期', '25.100万元', '43.2', '%+1%', '8', 'n');
INSERT INTO `yinonghuixiang` VALUES ('38', '翼农惠享5835期', '25.101万元', '44.2', '%+1%', '9', 'n');
INSERT INTO `yinonghuixiang` VALUES ('39', '翼农惠享5834期', '25.102万元', '45.2', '%+1%', '3', 'n');
INSERT INTO `yinonghuixiang` VALUES ('40', '翼农惠享5833期', '25.103万元', '46.2', '%+1%', '4', 'n');
SET FOREIGN_KEY_CHECKS=1;
