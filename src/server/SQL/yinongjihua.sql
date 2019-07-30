/*
Navicat MySQL Data Transfer

Source Server         : mydb
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5db

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-07-27 09:48:34
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for yinongjihua
-- ----------------------------
DROP TABLE IF EXISTS `yinongjihua`;
CREATE TABLE `yinongjihua` (
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
-- Records of yinongjihua
-- ----------------------------
INSERT INTO `yinongjihua` VALUES ('1', '翼农计划5872期', '25.64万元', '7.2', '%+1%', '180', 'y');
INSERT INTO `yinongjihua` VALUES ('2', '翼农计划5871期', '25.65万元', '8.2', '%+1%', '181', 'y');
INSERT INTO `yinongjihua` VALUES ('3', '翼农计划5870期', '25.66万元', '9.2', '%+1%', '182', 'y');
INSERT INTO `yinongjihua` VALUES ('4', '翼农计划5869期', '25.67万元', '10.2', '%+1%', '183', 'y');
INSERT INTO `yinongjihua` VALUES ('5', '翼农计划5868期', '25.68万元', '11.2', '%+1%', '184', 'y');
INSERT INTO `yinongjihua` VALUES ('6', '翼农计划5867期', '25.69万元', '12.2', '%+1%', '185', 'y');
INSERT INTO `yinongjihua` VALUES ('7', '翼农计划5866期', '25.70万元', '13.2', '%+1%', '186', 'y');
INSERT INTO `yinongjihua` VALUES ('8', '翼农计划5865期', '25.71万元', '14.2', '%+1%', '187', 'y');
INSERT INTO `yinongjihua` VALUES ('9', '翼农计划5864期', '25.72万元', '15.2', '%+1%', '188', 'y');
INSERT INTO `yinongjihua` VALUES ('10', '翼农计划5863期', '25.73万元', '16.2', '%+1%', '189', 'y');
INSERT INTO `yinongjihua` VALUES ('11', '翼农计划5862期', '25.74万元', '17.2', '%+1%', '190', 'y');
INSERT INTO `yinongjihua` VALUES ('12', '翼农计划5861期', '25.75万元', '18.2', '%+1%', '191', 'y');
INSERT INTO `yinongjihua` VALUES ('13', '翼农计划5860期', '25.76万元', '19.2', '%+1%', '192', 'y');
INSERT INTO `yinongjihua` VALUES ('14', '翼农计划5859期', '25.77万元', '20.2', '%+1%', '193', 'y');
INSERT INTO `yinongjihua` VALUES ('15', '翼农计划5858期', '25.78万元', '21.2', '%+1%', '194', 'y');
INSERT INTO `yinongjihua` VALUES ('16', '翼农计划5857期', '25.79万元', '22.2', '%+1%', '195', 'y');
INSERT INTO `yinongjihua` VALUES ('17', '翼农计划5856期', '25.80万元', '23.2', '%+1%', '196', 'y');
INSERT INTO `yinongjihua` VALUES ('18', '翼农计划5855期', '25.81万元', '24.2', '%+1%', '197', 'y');
INSERT INTO `yinongjihua` VALUES ('19', '翼农计划5854期', '25.82万元', '25.2', '%+1%', '198', 'y');
INSERT INTO `yinongjihua` VALUES ('20', '翼农计划5853期', '25.83万元', '26.2', '%+1%', '199', 'n');
INSERT INTO `yinongjihua` VALUES ('21', '翼农计划5852期', '25.84万元', '27.2', '%+1%', '200', 'n');
INSERT INTO `yinongjihua` VALUES ('22', '翼农计划5851期', '25.85万元', '28.2', '%+1%', '201', 'n');
INSERT INTO `yinongjihua` VALUES ('23', '翼农计划5850期', '25.86万元', '29.2', '%+1%', '202', 'n');
INSERT INTO `yinongjihua` VALUES ('24', '翼农计划5849期', '25.87万元', '30.2', '%+1%', '203', 'n');
INSERT INTO `yinongjihua` VALUES ('25', '翼农计划5848期', '25.88万元', '31.2', '%+1%', '204', 'n');
INSERT INTO `yinongjihua` VALUES ('26', '翼农计划5847期', '25.89万元', '32.2', '%+1%', '205', 'n');
INSERT INTO `yinongjihua` VALUES ('27', '翼农计划5846期', '25.90万元', '33.2', '%+1%', '206', 'n');
INSERT INTO `yinongjihua` VALUES ('28', '翼农计划5845期', '25.91万元', '34.2', '%+1%', '207', 'n');
INSERT INTO `yinongjihua` VALUES ('29', '翼农计划5844期', '25.92万元', '35.2', '%+1%', '208', 'n');
INSERT INTO `yinongjihua` VALUES ('30', '翼农计划5843期', '25.93万元', '36.2', '%+1%', '209', 'n');
INSERT INTO `yinongjihua` VALUES ('31', '翼农计划5842期', '25.94万元', '37.2', '%+1%', '210', 'n');
INSERT INTO `yinongjihua` VALUES ('32', '翼农计划5841期', '25.95万元', '38.2', '%+1%', '211', 'n');
INSERT INTO `yinongjihua` VALUES ('33', '翼农计划5840期', '25.96万元', '39.2', '%+1%', '212', 'n');
INSERT INTO `yinongjihua` VALUES ('34', '翼农计划5839期', '25.97万元', '40.2', '%+1%', '213', 'n');
INSERT INTO `yinongjihua` VALUES ('35', '翼农计划5838期', '25.98万元', '41.2', '%+1%', '214', 'n');
INSERT INTO `yinongjihua` VALUES ('36', '翼农计划5837期', '25.99万元', '42.2', '%+1%', '215', 'n');
INSERT INTO `yinongjihua` VALUES ('37', '翼农计划5836期', '25.100万元', '43.2', '%+1%', '216', 'n');
INSERT INTO `yinongjihua` VALUES ('38', '翼农计划5835期', '25.101万元', '44.2', '%+1%', '217', 'n');
INSERT INTO `yinongjihua` VALUES ('39', '翼农计划5834期', '25.102万元', '45.2', '%+1%', '218', 'n');
INSERT INTO `yinongjihua` VALUES ('40', '翼农计划5833期', '25.103万元', '46.2', '%+1%', '219', 'n');
SET FOREIGN_KEY_CHECKS=1;
