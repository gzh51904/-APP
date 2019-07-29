/*
Navicat MySQL Data Transfer

Source Server         : mydb
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5db

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-07-27 09:48:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for zhimakaihua
-- ----------------------------
DROP TABLE IF EXISTS `zhimakaihua`;
CREATE TABLE `zhimakaihua` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `surplusAmount` varchar(255) DEFAULT NULL,
  `rate` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `lend` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhimakaihua
-- ----------------------------
INSERT INTO `zhimakaihua` VALUES ('1', '芝麻开花9424期', '64.50万元', '6.9~8.5%', '23', 'y');
INSERT INTO `zhimakaihua` VALUES ('2', '芝麻开花9423期', '64.51万元', '6.9~8.6%', '24', 'y');
INSERT INTO `zhimakaihua` VALUES ('3', '芝麻开花9422期', '64.52万元', '6.9~8.7%', '25', 'y');
INSERT INTO `zhimakaihua` VALUES ('4', '芝麻开花9421期', '64.53万元', '6.9~8.8%', '26', 'y');
INSERT INTO `zhimakaihua` VALUES ('5', '芝麻开花9420期', '64.54万元', '6.9~8.9%', '27', 'y');
INSERT INTO `zhimakaihua` VALUES ('6', '芝麻开花9419期', '64.55万元', '7.9~8.1%', '28', 'y');
INSERT INTO `zhimakaihua` VALUES ('7', '芝麻开花9418期', '64.56万元', '6.9~8.1%', '29', 'y');
INSERT INTO `zhimakaihua` VALUES ('8', '芝麻开花9417期', '64.57万元', '6.9~8.2%', '30', 'y');
INSERT INTO `zhimakaihua` VALUES ('9', '芝麻开花9416期', '64.58万元', '6.9~8.3%', '31', 'y');
INSERT INTO `zhimakaihua` VALUES ('10', '芝麻开花9415期', '64.59万元', '6.9~8.4%', '32', 'y');
INSERT INTO `zhimakaihua` VALUES ('11', '芝麻开花9414期', '64.60万元', '6.9~8.5%', '33', 'n');
INSERT INTO `zhimakaihua` VALUES ('12', '芝麻开花9413期', '64.61万元', '6.9~8.6%', '34', 'n');
INSERT INTO `zhimakaihua` VALUES ('13', '芝麻开花9412期', '64.62万元', '6.9~8.7%', '35', 'n');
INSERT INTO `zhimakaihua` VALUES ('14', '芝麻开花9411期', '64.63万元', '4.9~8.8%', '36', 'n');
INSERT INTO `zhimakaihua` VALUES ('15', '芝麻开花9410期', '64.64万元', '6.9~8.9%', '37', 'n');
INSERT INTO `zhimakaihua` VALUES ('16', '芝麻开花9409期', '64.65万元', '6.9~8.0%', '38', 'n');
INSERT INTO `zhimakaihua` VALUES ('17', '芝麻开花9408期', '64.66万元', '6.9~8.1%', '39', 'n');
INSERT INTO `zhimakaihua` VALUES ('18', '芝麻开花9407期', '64.67万元', '8.9~8.2%', '40', 'n');
INSERT INTO `zhimakaihua` VALUES ('19', '芝麻开花9406期', '64.68万元', '6.9~8.3%', '41', 'n');
SET FOREIGN_KEY_CHECKS=1;
