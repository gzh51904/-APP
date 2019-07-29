/*
Navicat MySQL Data Transfer

Source Server         : mydb
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5db

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-07-27 09:49:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for newcomer
-- ----------------------------
DROP TABLE IF EXISTS `newcomer`;
CREATE TABLE `newcomer` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `rate` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `starting` varchar(255) DEFAULT NULL,
  `allow` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of newcomer
-- ----------------------------
INSERT INTO `newcomer` VALUES ('1', '新手专享3540期', '0.1', '锁定期30天', '100元起投', 'Y');
INSERT INTO `newcomer` VALUES ('2', '新手专享3541期', '0.105', '锁定期31天', '101元起投', 'Y');
INSERT INTO `newcomer` VALUES ('3', '新手专享3542期', '0.12', '锁定期32天', '102元起投', 'Y');
INSERT INTO `newcomer` VALUES ('4', '新手专享3543期', '0.1', '锁定期33天', '103元起投', 'Y');
INSERT INTO `newcomer` VALUES ('5', '新手专享3544期', '0.1', '锁定期34天', '104元起投', 'Y');
INSERT INTO `newcomer` VALUES ('6', '新手专享3545期', '0.1', '锁定期35天', '105元起投', 'Y');
INSERT INTO `newcomer` VALUES ('7', '新手专享3546期', '0.145', '锁定期36天', '106元起投', 'Y');
INSERT INTO `newcomer` VALUES ('8', '新手专享3547期', '0.1', '锁定期37天', '107元起投', 'Y');
INSERT INTO `newcomer` VALUES ('9', '新手专享3548期', '0.1', '锁定期38天', '108元起投', 'Y');
INSERT INTO `newcomer` VALUES ('10', '新手专享3549期', '0.1', '锁定期39天', '109元起投', 'Y');
INSERT INTO `newcomer` VALUES ('11', '新手专享3550期', '0.1', '锁定期40天', '110元起投', 'N');
INSERT INTO `newcomer` VALUES ('12', '新手专享3551期', '0.1', '锁定期41天', '111元起投', 'N');
INSERT INTO `newcomer` VALUES ('13', '新手专享3552期', '0.1', '锁定期42天', '112元起投', 'N');
INSERT INTO `newcomer` VALUES ('14', '新手专享3553期', '0.1', '锁定期43天', '113元起投', 'N');
INSERT INTO `newcomer` VALUES ('15', '新手专享3554期', '0.1', '锁定期44天', '114元起投', 'N');
INSERT INTO `newcomer` VALUES ('16', '新手专享3555期', '0.1', '锁定期45天', '115元起投', 'N');
INSERT INTO `newcomer` VALUES ('17', '新手专享3556期', '0.1', '锁定期46天', '116元起投', 'N');
INSERT INTO `newcomer` VALUES ('18', '新手专享3557期', '0.1', '锁定期47天', '117元起投', 'N');
INSERT INTO `newcomer` VALUES ('19', '新手专享3558期', '0.1', '锁定期48天', '118元起投', 'N');
SET FOREIGN_KEY_CHECKS=1;
