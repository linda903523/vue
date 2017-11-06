/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : vue

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-06 10:46:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ai
-- ----------------------------
DROP TABLE IF EXISTS `ai`;
CREATE TABLE `ai` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `decorations` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `addTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ai
-- ----------------------------
INSERT INTO `ai` VALUES ('0000000001', '小份鸡腿套餐', './src/img/timg1.jpg', '10.00', '8', '1', '好再来-热菜', '1', '2017-11-06 10:38:29');
INSERT INTO `ai` VALUES ('0000000002', '大份鸡腿套餐', './src/img/timg5.jpg', '12.00', '10', '1', '好再来-热菜', '1', '2017-11-06 10:39:00');
INSERT INTO `ai` VALUES ('0000000003', '酱汁鸡腿套餐', './src/img/timg4.jpg', '10.00', '1', '1', '好再来-热菜', '1', '2017-11-06 10:39:10');
INSERT INTO `ai` VALUES ('0000000004', '香酥鸡腿套餐', './src/img/timg2.jpg', '10.00', '2', '1', '好再来-热菜', '1', '2017-11-06 10:39:23');
INSERT INTO `ai` VALUES ('0000000005', '湘味鲍鱼套餐', './src/img/timg2.jpg', '14.00', '1', '1', '好再来-热菜', '1', '2017-11-06 10:43:51');
INSERT INTO `ai` VALUES ('0000000006', '糖醋排骨套餐', './src/img/timg4.jpg', '13.00', '1', '1', '好再来-热菜', '1', '2017-11-06 10:44:02');

-- ----------------------------
-- Table structure for carlist
-- ----------------------------
DROP TABLE IF EXISTS `carlist`;
CREATE TABLE `carlist` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '名称',
  `img` varchar(255) DEFAULT NULL COMMENT '图片',
  `price` decimal(10,2) DEFAULT NULL COMMENT '价格',
  `decorations` varchar(255) DEFAULT NULL COMMENT '描述',
  `type` varchar(255) DEFAULT NULL COMMENT '类型',
  `number` int(11) DEFAULT NULL COMMENT '数量',
  `status` varchar(255) DEFAULT NULL COMMENT '订单状态',
  `zhuohao` varchar(255) DEFAULT NULL COMMENT '桌号',
  `renshu` varchar(255) DEFAULT NULL COMMENT '人数',
  `addTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=65 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of carlist
-- ----------------------------
INSERT INTO `carlist` VALUES ('0000000057', '酱鸡腿套餐', './src/img/timg3.jpg', '12.00', '好再来-热菜', '1', '7', '1', '10', '1', '2017-11-06 10:14:39');
INSERT INTO `carlist` VALUES ('0000000055', '糖醋带鱼套餐', './src/img/timg.jpg', '12.00', '好再来-热菜', '1', '14', '1', '3', '3', '2017-11-06 09:58:35');
INSERT INTO `carlist` VALUES ('0000000056', '土豆肚片套餐', './src/img/timg2.jpg', '13.00', '好再来-热菜', '1', '2', '1', '5', '5', '2017-11-06 09:58:23');
INSERT INTO `carlist` VALUES ('0000000054', '酱汁鸡腿套餐', './src/img/timg4.jpg', '10.00', '好再来-热菜', '1', '7', '1', '7', '7', '2017-11-06 09:56:39');
INSERT INTO `carlist` VALUES ('0000000053', '香酥鸡腿套餐', './src/img/timg2.jpg', '10.00', '好再来-热菜', '1', '2', '1', '2', '2', '2017-11-06 09:40:56');
INSERT INTO `carlist` VALUES ('0000000052', '大份鸡腿套餐', './src/img/timg5.jpg', '12.00', '好再来-热菜', '1', '11', '1', '1', '1', '2017-11-06 09:40:38');
INSERT INTO `carlist` VALUES ('0000000058', '糖醋带鱼套餐', './src/img/timg.jpg', '12.00', '好再来-热菜', '1', '13', '1', '11', '1', '2017-11-06 10:04:58');
INSERT INTO `carlist` VALUES ('0000000059', '小份鸡腿套餐', './src/img/timg1.jpg', '10.00', '好再来-热菜', '1', '10', '1', '12', '4', '2017-11-06 10:13:42');
INSERT INTO `carlist` VALUES ('0000000060', '香酥鸡腿套餐', './src/img/timg2.jpg', '10.00', '好再来-热菜', '1', '2', '1', '12', '4', '2017-11-06 10:09:43');
INSERT INTO `carlist` VALUES ('0000000061', '酱鸡腿套餐', './src/img/timg3.jpg', '12.00', '好再来-热菜', '1', '1', '1', '12', '4', '2017-11-06 10:09:45');
INSERT INTO `carlist` VALUES ('0000000062', '酱鸡腿套餐', './src/img/timg3.jpg', '12.00', '好再来-热菜', '1', '1', '1', '55', '5', '2017-11-06 10:32:57');
INSERT INTO `carlist` VALUES ('0000000063', '酱汁鸡腿套餐', './src/img/timg4.jpg', '10.00', '好再来-热菜', '1', '1', '1', '55', '5', '2017-11-06 10:32:58');
INSERT INTO `carlist` VALUES ('0000000064', '糖醋带鱼套餐', './src/img/timg.jpg', '12.00', '好再来-热菜', '1', '12', '1', '55', '5', '2017-11-06 10:32:59');

-- ----------------------------
-- Table structure for foods
-- ----------------------------
DROP TABLE IF EXISTS `foods`;
CREATE TABLE `foods` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '名称',
  `img` varchar(255) DEFAULT NULL COMMENT '图片',
  `price` decimal(10,2) DEFAULT NULL COMMENT '价格',
  `number` int(11) DEFAULT NULL COMMENT '数量',
  `type` varchar(255) DEFAULT NULL COMMENT '类型',
  `decorations` varchar(255) DEFAULT NULL COMMENT '描述',
  `status` varchar(255) DEFAULT '1' COMMENT '状态',
  `addTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=73 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of foods
-- ----------------------------
INSERT INTO `foods` VALUES ('0000000001', '大份鸡腿套餐', './src/img/timg5.jpg', '12.00', '10', '1', '好再来-热菜', '1', '2017-11-04 14:11:57');
INSERT INTO `foods` VALUES ('0000000002', '小份鸡腿套餐', './src/img/timg1.jpg', '10.00', '8', '1', '好再来-热菜', '1', '2017-11-04 14:11:55');
INSERT INTO `foods` VALUES ('0000000003', '香酥鸡腿套餐', './src/img/timg2.jpg', '10.00', '2', '1', '好再来-热菜', '1', '2017-11-04 12:05:18');
INSERT INTO `foods` VALUES ('0000000004', '酱鸡腿套餐', './src/img/timg3.jpg', '12.00', '1', '1', '好再来-热菜', '1', '2017-11-01 19:15:48');
INSERT INTO `foods` VALUES ('0000000005', '酱汁鸡腿套餐', './src/img/timg4.jpg', '10.00', '1', '1', '好再来-热菜', '1', '2017-11-01 19:15:49');
INSERT INTO `foods` VALUES ('0000000006', '糖醋带鱼套餐', './src/img/timg.jpg', '12.00', '12', '1', '好再来-热菜', '1', '2017-11-04 11:34:52');
INSERT INTO `foods` VALUES ('0000000007', '红烧带鱼套餐', './src/img/timg1.jpg', '12.00', '1', '1', '好再来-热菜', '1', '2017-11-01 19:15:52');
INSERT INTO `foods` VALUES ('0000000008', '湘味鲍鱼套餐', './src/img/timg2.jpg', '14.00', '1', '1', '好再来-热菜', '1', '2017-11-01 19:15:52');
INSERT INTO `foods` VALUES ('0000000009', '香辣小黄鱼套餐', './src/img/timg3.jpg', '12.00', '4', '1', '好再来-热菜', '1', '2017-11-04 11:32:38');
INSERT INTO `foods` VALUES ('0000000010', '豆豉小黄鱼套餐', './src/img/timg4.jpg', '12.00', '1', '1', '好再来-热菜', '1', '2017-11-01 19:15:54');
INSERT INTO `foods` VALUES ('0000000011', '红烧鸡翅根套餐', './src/img/timg5.jpg', '13.00', '10', '1', '好再来-热菜', '1', '2017-11-02 09:40:43');
INSERT INTO `foods` VALUES ('0000000012', '麻辣翅根套餐', './src/img/timg.jpg', '13.00', '1', '1', '好再来-热菜', '1', '2017-11-01 19:15:55');
INSERT INTO `foods` VALUES ('0000000013', '青椒肚片套餐', './src/img/timg1.jpg', '13.00', '6', '1', '好再来-热菜', '1', '2017-11-02 20:04:06');
INSERT INTO `foods` VALUES ('0000000014', '土豆肚片套餐', './src/img/timg2.jpg', '13.00', '1', '1', '好再来-热菜', '1', '2017-11-01 19:15:57');
INSERT INTO `foods` VALUES ('0000000015', '红烧排骨套餐', './src/img/timg3.jpg', '13.00', '1', '1', '好再来-热菜', '1', '2017-11-01 19:15:59');
INSERT INTO `foods` VALUES ('0000000016', '糖醋排骨套餐', './src/img/timg4.jpg', '13.00', '1', '1', '好再来-热菜', '1', '2017-11-01 19:16:00');
INSERT INTO `foods` VALUES ('0000000017', '酸菜肥肠套餐', './src/img/timg5.jpg', '13.00', '1', '1', '好再来-热菜', '1', '2017-11-01 19:16:01');
INSERT INTO `foods` VALUES ('0000000018', '红烧肥肠套餐', './src/img/timg.jpg', '13.00', '1', '2', '好再来-凉菜', '1', '2017-11-01 19:16:01');
INSERT INTO `foods` VALUES ('0000000019', '蘑菇烧鸡套餐', './src/img/timg1.jpg', '13.00', '1', '2', '好再来-凉菜', '1', '2017-11-01 19:16:02');
INSERT INTO `foods` VALUES ('0000000020', '古老肉套餐', './src/img/timg2.jpg', '13.00', '1', '2', '好再来-凉菜', '1', '2017-11-01 19:16:02');
INSERT INTO `foods` VALUES ('0000000021', '爽口排条套餐', './src/img/timg3.jpg', '13.00', '1', '2', '好再来-凉菜', '1', '2017-11-01 19:16:04');
INSERT INTO `foods` VALUES ('0000000022', '脆皮鸭套餐', './src/img/timg4.jpg', '13.00', '1', '2', '好再来-凉菜', '1', '2017-11-01 19:16:05');
INSERT INTO `foods` VALUES ('0000000023', '手撕鸡套餐', './src/img/timg5.jpg', '13.00', '1', '2', '好再来-凉菜', '1', '2017-11-01 19:16:05');
INSERT INTO `foods` VALUES ('0000000024', '飘香鸡套餐', './src/img/timg.jpg', '13.00', '1', '2', '好再来-凉菜', '1', '2017-11-01 19:16:10');
INSERT INTO `foods` VALUES ('0000000025', '五香牛肉套餐', './src/img/timg1.jpg', '13.00', '1', '2', '好再来-凉菜', '1', '2017-11-01 19:16:07');
INSERT INTO `foods` VALUES ('0000000026', '馋嘴牛肉套餐', './src/img/timg2.jpg', '13.00', '1', '2', '好再来-凉菜', '1', '2017-11-01 19:16:11');
INSERT INTO `foods` VALUES ('0000000027', '土豆烧牛肉套餐', './src/img/timg3.jpg', '13.00', '1', '2', '好再来-凉菜', '1', '2017-11-01 19:16:14');
INSERT INTO `foods` VALUES ('0000000028', '花菜肉片套餐', './src/img/timg4.jpg', '10.00', '1', '2', '好再来-凉菜', '1', '2017-11-01 19:16:15');
INSERT INTO `foods` VALUES ('0000000029', '水煮牛肉套餐', './src/img/timg5.jpg', '13.00', '1', '2', '好再来-凉菜', '1', '2017-11-01 19:16:15');
INSERT INTO `foods` VALUES ('0000000030', '水煮肉片套餐', './src/img/timg.jpg', '12.00', '1', '2', '好再来-凉菜', '1', '2017-11-01 19:16:16');
INSERT INTO `foods` VALUES ('0000000031', '水煮川味鸡套餐', './src/img/timg1.jpg', '12.00', '1', '2', '好再来-凉菜', '1', '2017-11-01 19:16:17');
INSERT INTO `foods` VALUES ('0000000032', '水煮鱼片套餐', './src/img/timg2.jpg', '12.00', '1', '2', '好再来-凉菜', '1', '2017-11-01 19:16:19');
INSERT INTO `foods` VALUES ('0000000033', '酸菜鱼套餐', './src/img/timg3.jpg', '12.00', '1', '2', '好再来-凉菜', '1', '2017-11-01 19:16:20');
INSERT INTO `foods` VALUES ('0000000034', '毛血旺套餐', './src/img/timg4.jpg', '12.00', '1', '2', '好再来-凉菜', '1', '2017-11-01 19:16:20');
INSERT INTO `foods` VALUES ('0000000035', '猪蹄炖黄豆套餐', './src/img/timg5.jpg', '13.00', '1', '3', '好再来-甜品', '1', '2017-11-01 19:16:22');
INSERT INTO `foods` VALUES ('0000000036', '排骨炖冬瓜套餐', './src/img/timg.jpg', '13.00', '1', '3', '好再来-甜品', '1', '2017-11-01 19:16:23');
INSERT INTO `foods` VALUES ('0000000037', '排骨炖土豆套餐', './src/img/timg1.jpg', '13.00', '1', '3', '好再来-甜品', '1', '2017-11-01 19:16:22');
INSERT INTO `foods` VALUES ('0000000038', '炖三宝套餐', './src/img/timg2.jpg', '13.00', '1', '3', '好再来-甜品', '1', '2017-11-01 19:16:24');
INSERT INTO `foods` VALUES ('0000000039', '鸡丁菜饭', './src/img/timg3.jpg', '10.00', '1', '3', '好再来-甜品', '1', '2017-11-01 19:16:25');
INSERT INTO `foods` VALUES ('0000000040', '香肠菜饭', './src/img/timg4.jpg', '10.00', '1', '3', '好再来-甜品', '1', '2017-11-01 19:16:27');
INSERT INTO `foods` VALUES ('0000000041', '咸肉菜饭', './src/img/timg5.jpg', '10.00', '1', '3', '好再来-甜品', '1', '2017-11-01 19:16:28');
INSERT INTO `foods` VALUES ('0000000042', '腊肉菜饭', './src/img/timg.jpg', '10.00', '1', '3', '好再来-甜品', '1', '2017-11-01 19:16:28');
INSERT INTO `foods` VALUES ('0000000043', '肉丝菜饭', './src/img/timg1.jpg', '10.00', '1', '3', '好再来-甜品', '1', '2017-11-01 19:16:29');
INSERT INTO `foods` VALUES ('0000000044', '牛肉菜饭', './src/img/timg2.jpg', '12.00', '1', '3', '好再来-甜品', '1', '2017-11-01 19:16:29');
INSERT INTO `foods` VALUES ('0000000045', '扬州炒饭', './src/img/timg3.jpg', '8.00', '1', '3', '好再来-甜品', '1', '2017-11-01 19:16:30');
INSERT INTO `foods` VALUES ('0000000046', '蛋炒饭', './src/img/timg4.jpg', '6.00', '1', '3', '好再来-甜品', '1', '2017-11-01 19:16:31');
INSERT INTO `foods` VALUES ('0000000047', '红烧鸡块盖浇饭', './src/img/timg5.jpg', '10.00', '1', '3', '好再来-甜品', '1', '2017-11-01 19:16:32');
INSERT INTO `foods` VALUES ('0000000048', '尖椒牛柳盖浇饭', './src/img/timg.jpg', '10.00', '1', '3', '好再来-甜品', '1', '2017-11-01 19:16:33');
INSERT INTO `foods` VALUES ('0000000049', '小炒肉盖浇饭', './src/img/timg1.jpg', '10.00', '1', '3', '好再来-甜品', '1', '2017-11-01 19:16:35');
INSERT INTO `foods` VALUES ('0000000050', '土豆牛柳盖浇饭', './src/img/timg2.jpg', '10.00', '1', '3', '好再来-甜品', '1', '2017-11-01 19:16:34');
INSERT INTO `foods` VALUES ('0000000051', '百叶烧肉盖浇饭', './src/img/timg3.jpg', '10.00', '1', '3', '好再来-甜品', '1', '2017-11-01 19:16:36');
INSERT INTO `foods` VALUES ('0000000052', '香菇烧肉盖浇饭', './src/img/timg4.jpg', '10.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:16:37');
INSERT INTO `foods` VALUES ('0000000053', '咖喱鸡块盖浇饭', './src/img/timg5.jpg', '10.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:16:39');
INSERT INTO `foods` VALUES ('0000000054', '鱼香肉丝盖浇饭', './src/img/timg.jpg', '8.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:16:42');
INSERT INTO `foods` VALUES ('0000000055', '回锅肉盖浇饭', './src/img/timg1.jpg', '8.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:16:40');
INSERT INTO `foods` VALUES ('0000000056', '青椒肉丝盖浇饭', './src/img/timg2.jpg', '8.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:16:43');
INSERT INTO `foods` VALUES ('0000000057', '蒜苔肉丝盖浇饭', './src/img/timg3.jpg', '8.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:16:43');
INSERT INTO `foods` VALUES ('0000000058', '莴笋肉丝盖浇饭', './src/img/timg4.jpg', '8.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:16:44');
INSERT INTO `foods` VALUES ('0000000059', '宫保鸡丁盖浇饭', './src/img/timg5.jpg', '8.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:16:45');
INSERT INTO `foods` VALUES ('0000000060', '家常豆腐盖浇饭', './src/img/timg.jpg', '8.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:16:46');
INSERT INTO `foods` VALUES ('0000000061', '麻辣豆腐盖浇饭', './src/img/timg1.jpg', '8.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:16:48');
INSERT INTO `foods` VALUES ('0000000062', '西红柿炒鸡蛋盖浇饭', './src/img/timg2.jpg', '8.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:16:48');
INSERT INTO `foods` VALUES ('0000000063', '青椒炒蛋盖浇饭', './src/img/timg3.jpg', '8.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:16:51');
INSERT INTO `foods` VALUES ('0000000064', '油焖茄子盖浇饭', './src/img/timg4.jpg', '8.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:16:53');
INSERT INTO `foods` VALUES ('0000000065', '香菇青菜盖浇饭', './src/img/timg5.jpg', '8.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:16:52');
INSERT INTO `foods` VALUES ('0000000066', '香肠炒蛋盖浇饭', './src/img/timg.jpg', '8.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:16:54');
INSERT INTO `foods` VALUES ('0000000067', '平菇肉丝盖浇饭', './src/img/timg1.jpg', '8.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:16:56');
INSERT INTO `foods` VALUES ('0000000068', '尖椒腊肉盖浇饭', './src/img/timg2.jpg', '8.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:16:57');
INSERT INTO `foods` VALUES ('0000000069', '芹菜肉丝盖浇饭', './src/img/timg3.jpg', '8.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:16:59');
INSERT INTO `foods` VALUES ('0000000070', '青椒土豆丝盖浇饭', './src/img/timg4.jpg', '8.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:17:00');
INSERT INTO `foods` VALUES ('0000000071', '酸辣土豆丝盖浇饭', './src/img/timg5.jpg', '8.00', '1', '4', '好再来-饮料', '1', '2017-11-01 19:17:02');

-- ----------------------------
-- Table structure for review
-- ----------------------------
DROP TABLE IF EXISTS `review`;
CREATE TABLE `review` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL COMMENT '评论内容',
  `star` varchar(255) DEFAULT NULL COMMENT '评分',
  `addTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of review
-- ----------------------------
INSERT INTO `review` VALUES ('0000000001', '黑米粥味道平淡无奇，和我在许多地方喝过的味道并无二般，不过上镜还是不错的。', '1', '2017-11-03 11:22:10');
INSERT INTO `review` VALUES ('0000000002', '韭菜蒸饺很鲜。', '1', '2017-11-03 11:22:13');
INSERT INTO `review` VALUES ('0000000003', '锅贴煎饺是在韭菜煎饺的基础上再加工的美食。', '1', '2017-11-03 11:22:12');
INSERT INTO `review` VALUES ('0000000004', '马蹄糕在我看来就是红糖发糕，软软糯糯的，口齿留香。', '1', '2017-11-03 11:22:14');
INSERT INTO `review` VALUES ('0000000005', '吃食是一种幸福，品味是一种情趣。', '1', '2017-11-03 11:22:14');
INSERT INTO `review` VALUES ('0000000006', '苏杭点心店之小笼汤包、红桥左岸之香蒜培根乳酪。', '1', '2017-11-03 11:22:15');
INSERT INTO `review` VALUES ('0000000007', '香港品源美食之黄蒲蛋、天津卫老米食堂之海鲜豆腐脑。', '1', '2017-11-03 11:22:15');
INSERT INTO `review` VALUES ('0000000008', '潮汕牛肉店之牛肉火锅、上海极品轩之霸王别姬。', '1', '2017-11-03 11:22:16');
INSERT INTO `review` VALUES ('0000000009', '喜福园之清蒸鲑鱼卷、上海小馆之清炒虾仁。', '1', '2017-11-03 11:22:16');
INSERT INTO `review` VALUES ('0000000010', '老阚厨房之山东扒鸡、梁记烧腊店之烧鹅。', '1', '2017-11-03 11:22:17');
INSERT INTO `review` VALUES ('0000000011', '欧美厨房之猪全餐、清真中国牛肉馆之美味牛餐。', '1', '2017-11-03 11:22:18');
INSERT INTO `review` VALUES ('0000000012', '美食当前，总能有所思，或馋性千娇，食前观察、吃中思想、品后体味。', '1', '2017-11-03 11:22:19');
INSERT INTO `review` VALUES ('0000000013', '食为天性，静静地咀嚼，轻轻地回味，非比寻常的韵致。', '1', '2017-11-03 11:22:19');
INSERT INTO `review` VALUES ('0000000014', '色、香、味俱全，让人看着就有食欲。', '1', '2017-11-03 11:22:20');
INSERT INTO `review` VALUES ('0000000015', '味道鲜美，让人闻着就想尝尝味道；口感好，吃过一次就忘不掉。', '1', '2017-11-03 11:22:22');
INSERT INTO `review` VALUES ('0000000016', 'goods', '1', '2017-11-03 10:43:25');
INSERT INTO `review` VALUES ('0000000017', 'very good', '1', '2017-11-03 10:44:57');
INSERT INTO `review` VALUES ('0000000018', '很好', '1', '2017-11-03 11:04:34');
INSERT INTO `review` VALUES ('0000000019', '666', '1', '2017-11-03 11:05:11');
INSERT INTO `review` VALUES ('0000000020', '888', '1', '2017-11-03 11:06:09');
INSERT INTO `review` VALUES ('0000000021', '999', '1', '2017-11-03 11:06:21');
INSERT INTO `review` VALUES ('0000000022', '很好', '1', '2017-11-03 11:06:34');
INSERT INTO `review` VALUES ('0000000023', '888', '1', '2017-11-03 11:08:09');
INSERT INTO `review` VALUES ('0000000024', '999', '1', '2017-11-03 11:08:21');
INSERT INTO `review` VALUES ('0000000025', '很好', '1', '2017-11-03 11:08:34');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '标识',
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '密码',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('0000000001', '付玲', '123456');
INSERT INTO `users` VALUES ('0000000002', '徐翠', '123456');
INSERT INTO `users` VALUES ('0000000003', '袁守明', '123456');
SET FOREIGN_KEY_CHECKS=1;
