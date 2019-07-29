/*
Navicat MySQL Data Transfer

Source Server         : mydb
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5db

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-07-27 09:49:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for hot
-- ----------------------------
DROP TABLE IF EXISTS `hot`;
CREATE TABLE `hot` (
  `id` int(9) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `date` varchar(22) DEFAULT NULL,
  `viewMount` varchar(255) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hot
-- ----------------------------
INSERT INTO `hot` VALUES ('1', '1.png', '增资专项进展1', '43466', '62085', '/deep/的意思大概为深入的，深远的。无意中看到css中有关于这种写法，开始没太注意 ，以为是组件css的写法，后来才发现不是。我们都知道Scoped CSS规范是Web组件产生不污染其他组件，也不被其他组件污染的CSS规范。', 'hot1');
INSERT INTO `hot` VALUES ('2', '2.png', '增资专项进展2', '43467', '62086', '/deep/的意思大概为深入的，深远的。无意中看到css中有关于这种写法，开始没太注意 ，以为是组件css的写法，后来才发现不是。我们都知道Scoped CSS规范是Web组件产生不污染其他组件，也不被其他组件污染的CSS规范。', 'hot2');
INSERT INTO `hot` VALUES ('3', '3.png', '增资专项进展3', '43468', '62087', '/deep/的意思大概为深入的，深远的。无意中看到css中有关于这种写法，开始没太注意 ，以为是组件css的写法，后来才发现不是。我们都知道Scoped CSS规范是Web组件产生不污染其他组件，也不被其他组件污染的CSS规范。', 'hot13');
INSERT INTO `hot` VALUES ('4', '4.png', '增资专项进展4', '43469', '62088', '/deep/的意思大概为深入的，深远的。无意中看到css中有关于这种写法，开始没太注意 ，以为是组件css的写法，后来才发现不是。我们都知道Scoped CSS规范是Web组件产生不污染其他组件，也不被其他组件污染的CSS规范。', 'hot14');
INSERT INTO `hot` VALUES ('5', '5.png', '增资专项进展5', '43470', '62089', '/deep/的意思大概为深入的，深远的。无意中看到css中有关于这种写法，开始没太注意 ，以为是组件css的写法，后来才发现不是。我们都知道Scoped CSS规范是Web组件产生不污染其他组件，也不被其他组件污染的CSS规范。', 'hot15');
INSERT INTO `hot` VALUES ('6', '6.png', '增资专项进展6', '43471', '62090', '/deep/的意思大概为深入的，深远的。无意中看到css中有关于这种写法，开始没太注意 ，以为是组件css的写法，后来才发现不是。我们都知道Scoped CSS规范是Web组件产生不污染其他组件，也不被其他组件污染的CSS规范。', 'hot16');
INSERT INTO `hot` VALUES ('7', '7.png', '增资专项进展7', '43472', '62091', '/deep/的意思大概为深入的，深远的。无意中看到css中有关于这种写法，开始没太注意 ，以为是组件css的写法，后来才发现不是。我们都知道Scoped CSS规范是Web组件产生不污染其他组件，也不被其他组件污染的CSS规范。', 'hot17');
INSERT INTO `hot` VALUES ('8', '8.png', '增资专项进展8', '43473', '62092', '/deep/的意思大概为深入的，深远的。无意中看到css中有关于这种写法，开始没太注意 ，以为是组件css的写法，后来才发现不是。我们都知道Scoped CSS规范是Web组件产生不污染其他组件，也不被其他组件污染的CSS规范。', 'hot18');
INSERT INTO `hot` VALUES ('9', '9.png', '增资专项进展9', '43474', '62093', '/deep/的意思大概为深入的，深远的。无意中看到css中有关于这种写法，开始没太注意 ，以为是组件css的写法，后来才发现不是。我们都知道Scoped CSS规范是Web组件产生不污染其他组件，也不被其他组件污染的CSS规范。', 'hot19');
INSERT INTO `hot` VALUES ('10', '10.png', '增资专项进展10', '43475', '62094', '/deep/的意思大概为深入的，深远的。无意中看到css中有关于这种写法，开始没太注意 ，以为是组件css的写法，后来才发现不是。我们都知道Scoped CSS规范是Web组件产生不污染其他组件，也不被其他组件污染的CSS规范。', 'hot10');
INSERT INTO `hot` VALUES ('11', '1.png', '增资专项进展11', '43476', '62095', '/deep/的意思大概为深入的，深远的。无意中看到css中有关于这种写法，开始没太注意 ，以为是组件css的写法，后来才发现不是。我们都知道Scoped CSS规范是Web组件产生不污染其他组件，也不被其他组件污染的CSS规范。', 'hot11');
INSERT INTO `hot` VALUES ('12', '2.png', '增资专项进展12', '43477', '62096', '/deep/的意思大概为深入的，深远的。无意中看到css中有关于这种写法，开始没太注意 ，以为是组件css的写法，后来才发现不是。我们都知道Scoped CSS规范是Web组件产生不污染其他组件，也不被其他组件污染的CSS规范。', 'hot12');
INSERT INTO `hot` VALUES ('13', '3.png', '增资专项进展13', '43478', '62097', '/deep/的意思大概为深入的，深远的。无意中看到css中有关于这种写法，开始没太注意 ，以为是组件css的写法，后来才发现不是。我们都知道Scoped CSS规范是Web组件产生不污染其他组件，也不被其他组件污染的CSS规范。', 'hot13');
INSERT INTO `hot` VALUES ('14', '4.png', '增资专项进展14', '43479', '62098', '/deep/的意思大概为深入的，深远的。无意中看到css中有关于这种写法，开始没太注意 ，以为是组件css的写法，后来才发现不是。我们都知道Scoped CSS规范是Web组件产生不污染其他组件，也不被其他组件污染的CSS规范。', 'hot14');
INSERT INTO `hot` VALUES ('15', '5.png', '增资专项进展15', '43480', '62099', '/deep/的意思大概为深入的，深远的。无意中看到css中有关于这种写法，开始没太注意 ，以为是组件css的写法，后来才发现不是。我们都知道Scoped CSS规范是Web组件产生不污染其他组件，也不被其他组件污染的CSS规范。', 'hot15');
INSERT INTO `hot` VALUES ('16', '6.png', '增资专项进展16', '43481', '62100', '/deep/的意思大概为深入的，深远的。无意中看到css中有关于这种写法，开始没太注意 ，以为是组件css的写法，后来才发现不是。我们都知道Scoped CSS规范是Web组件产生不污染其他组件，也不被其他组件污染的CSS规范。', 'hot16');
INSERT INTO `hot` VALUES ('17', '7.png', '增资专项进展17', '43482', '62101', '/deep/的意思大概为深入的，深远的。无意中看到css中有关于这种写法，开始没太注意 ，以为是组件css的写法，后来才发现不是。我们都知道Scoped CSS规范是Web组件产生不污染其他组件，也不被其他组件污染的CSS规范。', 'hot17');
INSERT INTO `hot` VALUES ('18', '8.png', '增资专项进展18', '43483', '62102', '/deep/的意思大概为深入的，深远的。无意中看到css中有关于这种写法，开始没太注意 ，以为是组件css的写法，后来才发现不是。我们都知道Scoped CSS规范是Web组件产生不污染其他组件，也不被其他组件污染的CSS规范。', 'hot18');
INSERT INTO `hot` VALUES ('19', '9.png', '增资专项进展19', '43484', '62103', '/deep/的意思大概为深入的，深远的。无意中看到css中有关于这种写法，开始没太注意 ，以为是组件css的写法，后来才发现不是。我们都知道Scoped CSS规范是Web组件产生不污染其他组件，也不被其他组件污染的CSS规范。', 'hot19');
SET FOREIGN_KEY_CHECKS=1;
