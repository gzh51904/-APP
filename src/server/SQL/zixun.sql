/*
Navicat MySQL Data Transfer

Source Server         : mydb
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5db

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-07-27 09:49:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for zixun
-- ----------------------------
DROP TABLE IF EXISTS `zixun`;
CREATE TABLE `zixun` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zixun
-- ----------------------------
INSERT INTO `zixun` VALUES ('1', '1.png', '牛津大学教授到翼龙贷实地调研1', '张三', '最佳答案: HTML5中的新元素标签<nav>用来将具有导航性质的链接划分在一起,使代码结构在语义化方面更加准确,同时对于屏幕阅读器等设备的支持也更好。 一直以来,我们.');
INSERT INTO `zixun` VALUES ('2', '2.png', '牛津大学教授到翼龙贷实地调研2', '李四', 'Html 5新增标签nav教程篇与nav+css布局教程篇,HTML5 nav元素标签 HTML5新增nav标签。DIVCSS5对html 5 footer标签透彻介绍到html footer css布局案例演示让想学习...');
INSERT INTO `zixun` VALUES ('3', '3.png', '牛津大学教授到翼龙贷实地调研3', '王五', 'NAV（全称Net Asset Value）估值法的优势在于它为企业价值设定了一个估值底线，对内地很多\"地产项目公司\"尤为适用。而且NAV估值考虑了预期价格的变化、开发速度和投资人回报率等因素，');
INSERT INTO `zixun` VALUES ('4', '4.png', '牛津大学教授到翼龙贷实地调研4', '赵柳', '2019年2月5日 - 语义化布局不但能够提高代码的可读性,对于搜索引擎优化也有助益。HTML5对语义化布局进行了加强,本文所要介绍的nav标签就是HTML5新增。关于语义化布局...');
INSERT INTO `zixun` VALUES ('5', '1.png', '牛津大学教授到翼龙贷实地调研5', '张三', '最佳答案: HTML6中的新元素标签<nav>用来将具有导航性质的链接划分在一起,使代码结构在语义化方面更加准确,同时对于屏幕阅读器等设备的支持也更好。 一直以来,我们.');
INSERT INTO `zixun` VALUES ('6', '2.png', '牛津大学教授到翼龙贷实地调研6', '李四', 'Html 5新增标签nav教程篇与nav+css布局教程篇,HTML5 nav元素标签 HTML5新增nav标签。DIVCSS5对html 6 footer标签透彻介绍到html footer css布局案例演示让想学习...');
INSERT INTO `zixun` VALUES ('7', '3.png', '牛津大学教授到翼龙贷实地调研7', '王五', 'NAV（全称Net Asset Value）估值法的优势在于它为企业价值设定了一个估值底线，对内地很多\"地产项目公司\"尤为适用。而且NAV估值考虑了预期价格的变化、开发速度和投资人回报率等因素，');
INSERT INTO `zixun` VALUES ('8', '4.png', '牛津大学教授到翼龙贷实地调研8', '赵柳', '2019年2月5日 - 语义化布局不但能够提高代码的可读性,对于搜索引擎优化也有助益。HTML5对语义化布局进行了加强,本文所要介绍的nav标签就是HTML6新增。关于语义化布局...');
INSERT INTO `zixun` VALUES ('9', '1.png', '牛津大学教授到翼龙贷实地调研9', '张三', '最佳答案: HTML7中的新元素标签<nav>用来将具有导航性质的链接划分在一起,使代码结构在语义化方面更加准确,同时对于屏幕阅读器等设备的支持也更好。 一直以来,我们.');
INSERT INTO `zixun` VALUES ('10', '2.png', '牛津大学教授到翼龙贷实地调研10', '李四', 'Html 5新增标签nav教程篇与nav+css布局教程篇,HTML5 nav元素标签 HTML5新增nav标签。DIVCSS5对html 7 footer标签透彻介绍到html footer css布局案例演示让想学习...');
INSERT INTO `zixun` VALUES ('11', '3.png', '牛津大学教授到翼龙贷实地调研11', '王五', 'NAV（全称Net Asset Value）估值法的优势在于它为企业价值设定了一个估值底线，对内地很多\"地产项目公司\"尤为适用。而且NAV估值考虑了预期价格的变化、开发速度和投资人回报率等因素，');
INSERT INTO `zixun` VALUES ('12', '4.png', '牛津大学教授到翼龙贷实地调研12', '赵柳', '2019年2月5日 - 语义化布局不但能够提高代码的可读性,对于搜索引擎优化也有助益。HTML5对语义化布局进行了加强,本文所要介绍的nav标签就是HTML7新增。关于语义化布局...');
INSERT INTO `zixun` VALUES ('13', '1.png', '牛津大学教授到翼龙贷实地调研13', '张三', '最佳答案: HTML8中的新元素标签<nav>用来将具有导航性质的链接划分在一起,使代码结构在语义化方面更加准确,同时对于屏幕阅读器等设备的支持也更好。 一直以来,我们.');
INSERT INTO `zixun` VALUES ('14', '2.png', '牛津大学教授到翼龙贷实地调研14', '李四', 'Html 5新增标签nav教程篇与nav+css布局教程篇,HTML5 nav元素标签 HTML5新增nav标签。DIVCSS5对html 8 footer标签透彻介绍到html footer css布局案例演示让想学习...');
INSERT INTO `zixun` VALUES ('15', '3.png', '牛津大学教授到翼龙贷实地调研15', '王五', 'NAV（全称Net Asset Value）估值法的优势在于它为企业价值设定了一个估值底线，对内地很多\"地产项目公司\"尤为适用。而且NAV估值考虑了预期价格的变化、开发速度和投资人回报率等因素，');
INSERT INTO `zixun` VALUES ('16', '4.png', '牛津大学教授到翼龙贷实地调研16', '赵柳', '2019年2月5日 - 语义化布局不但能够提高代码的可读性,对于搜索引擎优化也有助益。HTML5对语义化布局进行了加强,本文所要介绍的nav标签就是HTML8新增。关于语义化布局...');
INSERT INTO `zixun` VALUES ('17', '1.png', '牛津大学教授到翼龙贷实地调研17', '张三', '最佳答案: HTML9中的新元素标签<nav>用来将具有导航性质的链接划分在一起,使代码结构在语义化方面更加准确,同时对于屏幕阅读器等设备的支持也更好。 一直以来,我们.');
INSERT INTO `zixun` VALUES ('18', '2.png', '牛津大学教授到翼龙贷实地调研18', '李四', 'Html 5新增标签nav教程篇与nav+css布局教程篇,HTML5 nav元素标签 HTML5新增nav标签。DIVCSS5对html 9 footer标签透彻介绍到html footer css布局案例演示让想学习...');
INSERT INTO `zixun` VALUES ('19', '3.png', '牛津大学教授到翼龙贷实地调研19', '王五', 'NAV（全称Net Asset Value）估值法的优势在于它为企业价值设定了一个估值底线，对内地很多\"地产项目公司\"尤为适用。而且NAV估值考虑了预期价格的变化、开发速度和投资人回报率等因素，');
INSERT INTO `zixun` VALUES ('20', '4.png', '牛津大学教授到翼龙贷实地调研20', '赵柳', '2019年2月5日 - 语义化布局不但能够提高代码的可读性,对于搜索引擎优化也有助益。HTML5对语义化布局进行了加强,本文所要介绍的nav标签就是HTML9新增。关于语义化布局...');
INSERT INTO `zixun` VALUES ('21', '1.png', '牛津大学教授到翼龙贷实地调研21', '张三', '最佳答案: HTML10中的新元素标签<nav>用来将具有导航性质的链接划分在一起,使代码结构在语义化方面更加准确,同时对于屏幕阅读器等设备的支持也更好。 一直以来,我们.');
INSERT INTO `zixun` VALUES ('22', '2.png', '牛津大学教授到翼龙贷实地调研22', '李四', 'Html 5新增标签nav教程篇与nav+css布局教程篇,HTML5 nav元素标签 HTML5新增nav标签。DIVCSS5对html 10 footer标签透彻介绍到html footer css布局案例演示让想学习...');
INSERT INTO `zixun` VALUES ('23', '3.png', '牛津大学教授到翼龙贷实地调研23', '王五', 'NAV（全称Net Asset Value）估值法的优势在于它为企业价值设定了一个估值底线，对内地很多\"地产项目公司\"尤为适用。而且NAV估值考虑了预期价格的变化、开发速度和投资人回报率等因素，');
INSERT INTO `zixun` VALUES ('24', '4.png', '牛津大学教授到翼龙贷实地调研24', '赵柳', '2019年2月5日 - 语义化布局不但能够提高代码的可读性,对于搜索引擎优化也有助益。HTML5对语义化布局进行了加强,本文所要介绍的nav标签就是HTML10新增。关于语义化布局...');
INSERT INTO `zixun` VALUES ('25', '1.png', '牛津大学教授到翼龙贷实地调研25', '张三', '最佳答案: HTML11中的新元素标签<nav>用来将具有导航性质的链接划分在一起,使代码结构在语义化方面更加准确,同时对于屏幕阅读器等设备的支持也更好。 一直以来,我们.');
INSERT INTO `zixun` VALUES ('26', '2.png', '牛津大学教授到翼龙贷实地调研26', '李四', 'Html 5新增标签nav教程篇与nav+css布局教程篇,HTML5 nav元素标签 HTML5新增nav标签。DIVCSS5对html 11 footer标签透彻介绍到html footer css布局案例演示让想学习...');
INSERT INTO `zixun` VALUES ('27', '3.png', '牛津大学教授到翼龙贷实地调研27', '王五', 'NAV（全称Net Asset Value）估值法的优势在于它为企业价值设定了一个估值底线，对内地很多\"地产项目公司\"尤为适用。而且NAV估值考虑了预期价格的变化、开发速度和投资人回报率等因素，');
INSERT INTO `zixun` VALUES ('28', '4.png', '牛津大学教授到翼龙贷实地调研28', '赵柳', '2019年2月5日 - 语义化布局不但能够提高代码的可读性,对于搜索引擎优化也有助益。HTML5对语义化布局进行了加强,本文所要介绍的nav标签就是HTML11新增。关于语义化布局...');
INSERT INTO `zixun` VALUES ('29', '1.png', '牛津大学教授到翼龙贷实地调研29', '张三', '最佳答案: HTML12中的新元素标签<nav>用来将具有导航性质的链接划分在一起,使代码结构在语义化方面更加准确,同时对于屏幕阅读器等设备的支持也更好。 一直以来,我们.');
INSERT INTO `zixun` VALUES ('30', '2.png', '牛津大学教授到翼龙贷实地调研30', '李四', 'Html 5新增标签nav教程篇与nav+css布局教程篇,HTML5 nav元素标签 HTML5新增nav标签。DIVCSS5对html 12 footer标签透彻介绍到html footer css布局案例演示让想学习...');
INSERT INTO `zixun` VALUES ('31', '3.png', '牛津大学教授到翼龙贷实地调研31', '王五', 'NAV（全称Net Asset Value）估值法的优势在于它为企业价值设定了一个估值底线，对内地很多\"地产项目公司\"尤为适用。而且NAV估值考虑了预期价格的变化、开发速度和投资人回报率等因素，');
INSERT INTO `zixun` VALUES ('32', '4.png', '牛津大学教授到翼龙贷实地调研32', '赵柳', '2019年2月5日 - 语义化布局不但能够提高代码的可读性,对于搜索引擎优化也有助益。HTML5对语义化布局进行了加强,本文所要介绍的nav标签就是HTML12新增。关于语义化布局...');
INSERT INTO `zixun` VALUES ('33', '1.png', '牛津大学教授到翼龙贷实地调研33', '张三', '最佳答案: HTML13中的新元素标签<nav>用来将具有导航性质的链接划分在一起,使代码结构在语义化方面更加准确,同时对于屏幕阅读器等设备的支持也更好。 一直以来,我们.');
INSERT INTO `zixun` VALUES ('34', '2.png', '牛津大学教授到翼龙贷实地调研34', '李四', 'Html 5新增标签nav教程篇与nav+css布局教程篇,HTML5 nav元素标签 HTML5新增nav标签。DIVCSS5对html 13 footer标签透彻介绍到html footer css布局案例演示让想学习...');
INSERT INTO `zixun` VALUES ('35', '3.png', '牛津大学教授到翼龙贷实地调研35', '王五', 'NAV（全称Net Asset Value）估值法的优势在于它为企业价值设定了一个估值底线，对内地很多\"地产项目公司\"尤为适用。而且NAV估值考虑了预期价格的变化、开发速度和投资人回报率等因素，');
INSERT INTO `zixun` VALUES ('36', '4.png', '牛津大学教授到翼龙贷实地调研36', '赵柳', '2019年2月5日 - 语义化布局不但能够提高代码的可读性,对于搜索引擎优化也有助益。HTML5对语义化布局进行了加强,本文所要介绍的nav标签就是HTML13新增。关于语义化布局...');
INSERT INTO `zixun` VALUES ('37', '1.png', '牛津大学教授到翼龙贷实地调研37', '张三', '最佳答案: HTML14中的新元素标签<nav>用来将具有导航性质的链接划分在一起,使代码结构在语义化方面更加准确,同时对于屏幕阅读器等设备的支持也更好。 一直以来,我们.');
INSERT INTO `zixun` VALUES ('38', '2.png', '牛津大学教授到翼龙贷实地调研38', '李四', 'Html 5新增标签nav教程篇与nav+css布局教程篇,HTML5 nav元素标签 HTML5新增nav标签。DIVCSS5对html 14 footer标签透彻介绍到html footer css布局案例演示让想学习...');
INSERT INTO `zixun` VALUES ('39', '3.png', '牛津大学教授到翼龙贷实地调研39', '王五', 'NAV（全称Net Asset Value）估值法的优势在于它为企业价值设定了一个估值底线，对内地很多\"地产项目公司\"尤为适用。而且NAV估值考虑了预期价格的变化、开发速度和投资人回报率等因素，');
INSERT INTO `zixun` VALUES ('40', '4.png', '牛津大学教授到翼龙贷实地调研40', '赵柳', '2019年2月5日 - 语义化布局不但能够提高代码的可读性,对于搜索引擎优化也有助益。HTML5对语义化布局进行了加强,本文所要介绍的nav标签就是HTML14新增。关于语义化布局...');
INSERT INTO `zixun` VALUES ('41', '1.png', '牛津大学教授到翼龙贷实地调研41', '张三', '最佳答案: HTML15中的新元素标签<nav>用来将具有导航性质的链接划分在一起,使代码结构在语义化方面更加准确,同时对于屏幕阅读器等设备的支持也更好。 一直以来,我们.');
INSERT INTO `zixun` VALUES ('42', '2.png', '牛津大学教授到翼龙贷实地调研42', '李四', 'Html 5新增标签nav教程篇与nav+css布局教程篇,HTML5 nav元素标签 HTML5新增nav标签。DIVCSS5对html 15 footer标签透彻介绍到html footer css布局案例演示让想学习...');
INSERT INTO `zixun` VALUES ('43', '3.png', '牛津大学教授到翼龙贷实地调研43', '王五', 'NAV（全称Net Asset Value）估值法的优势在于它为企业价值设定了一个估值底线，对内地很多\"地产项目公司\"尤为适用。而且NAV估值考虑了预期价格的变化、开发速度和投资人回报率等因素，');
INSERT INTO `zixun` VALUES ('44', '4.png', '牛津大学教授到翼龙贷实地调研44', '赵柳', '2019年2月5日 - 语义化布局不但能够提高代码的可读性,对于搜索引擎优化也有助益。HTML5对语义化布局进行了加强,本文所要介绍的nav标签就是HTML15新增。关于语义化布局...');
INSERT INTO `zixun` VALUES ('45', '1.png', '牛津大学教授到翼龙贷实地调研45', '张三', '最佳答案: HTML16中的新元素标签<nav>用来将具有导航性质的链接划分在一起,使代码结构在语义化方面更加准确,同时对于屏幕阅读器等设备的支持也更好。 一直以来,我们.');
INSERT INTO `zixun` VALUES ('46', '2.png', '牛津大学教授到翼龙贷实地调研46', '李四', 'Html 5新增标签nav教程篇与nav+css布局教程篇,HTML5 nav元素标签 HTML5新增nav标签。DIVCSS5对html 16 footer标签透彻介绍到html footer css布局案例演示让想学习...');
INSERT INTO `zixun` VALUES ('47', '3.png', '牛津大学教授到翼龙贷实地调研47', '王五', 'NAV（全称Net Asset Value）估值法的优势在于它为企业价值设定了一个估值底线，对内地很多\"地产项目公司\"尤为适用。而且NAV估值考虑了预期价格的变化、开发速度和投资人回报率等因素，');
INSERT INTO `zixun` VALUES ('48', '4.png', '牛津大学教授到翼龙贷实地调研48', '赵柳', '2019年2月5日 - 语义化布局不但能够提高代码的可读性,对于搜索引擎优化也有助益。HTML5对语义化布局进行了加强,本文所要介绍的nav标签就是HTML16新增。关于语义化布局...');
INSERT INTO `zixun` VALUES ('49', '1.png', '牛津大学教授到翼龙贷实地调研49', '张三', '最佳答案: HTML17中的新元素标签<nav>用来将具有导航性质的链接划分在一起,使代码结构在语义化方面更加准确,同时对于屏幕阅读器等设备的支持也更好。 一直以来,我们.');
INSERT INTO `zixun` VALUES ('50', '2.png', '牛津大学教授到翼龙贷实地调研50', '李四', 'Html 5新增标签nav教程篇与nav+css布局教程篇,HTML5 nav元素标签 HTML5新增nav标签。DIVCSS5对html 17 footer标签透彻介绍到html footer css布局案例演示让想学习...');
SET FOREIGN_KEY_CHECKS=1;
