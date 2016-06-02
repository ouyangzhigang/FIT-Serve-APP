-- phpMyAdmin SQL Dump
-- version 2.11.2.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2015 年 05 月 08 日 05:56
-- 服务器版本: 5.0.45
-- PHP 版本: 5.2.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- 数据库: `ft-mtserve`
--

-- --------------------------------------------------------

--
-- 表的结构 `collect`
--

CREATE TABLE `collect` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(60) NOT NULL,
  `con_id` int(11) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- 导出表中的数据 `collect`
--

INSERT INTO `collect` (`id`, `name`, `con_id`) VALUES
(1, 'abc', 1),
(2, 'abc', 2);

-- --------------------------------------------------------

--
-- 表的结构 `content`
--

CREATE TABLE `content` (
  `id` int(11) NOT NULL auto_increment,
  `title` varchar(12) NOT NULL,
  `con` varchar(25) NOT NULL,
  `img` varchar(100) NOT NULL,
  `http` varchar(60) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- 导出表中的数据 `content`
--

INSERT INTO `content` (`id`, `title`, `con`, `img`, `http`) VALUES
(1, '银行打响互联网金融反击战', '刚抢完微信红包，小周又看上了微信的理财功能。', 'img/hulian.jpg', 'paper11.html'),
(2, '欧美居家流行什么灯？', '今年初举办的巴黎Maison et Objet家居', 'img/4index.jpg', 'paper2.html'),
(3, '第三届领航中国金融行业创', '12月25日由金融界网站及清华大学五道口金融学院联', 'img/3index.jpg', 'paper33.html'),
(4, '上海禁止领导干部家属经商', '上海已禁止高级官员的亲属在该市（在某些情况下限制范', 'img/2index.jpg', 'paper4.html'),
(5, '楼继伟式悲观与中等收入陷', '多数故事，都需要一个戏剧性情节带来高潮；就像童话《', 'img/7index.jpg', 'paper5.html'),
(6, '短线观点：英国大选后的市', '明日英国选举的种种不确定性像是一枚洋葱头，拨开一层', 'img/1index.jpg', 'paper6.html'),
(7, '一个美国人的中国梦', '带着中美关系的选题再次飞赴华盛顿，我当然早已知道，', 'img/5index.jpg', 'paper7.html'),
(8, '“一带一路”能否改变全球', '2013年习近平出访哈萨克斯坦时，提醒东道主两国沿', 'img/weishang.jpg', 'paper8.html'),
(9, '“佳兆业并购案戏剧再起：', '5月4日，这样的对话发生在上海市浦东新区东方路18', 'img/66.png', 'paper9.html');

-- --------------------------------------------------------

--
-- 表的结构 `pinglun`
--

CREATE TABLE `pinglun` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(60) NOT NULL,
  `chat` varchar(60) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=46 ;

--
-- 导出表中的数据 `pinglun`
--

INSERT INTO `pinglun` (`id`, `name`, `chat`, `user_id`) VALUES
(4, 'abc', 'adsfsd', 0),
(5, 'abc', 'adsfsd', 0),
(6, 'abc', 'adsfsd', 0),
(8, 'abc', 'fgdfgdf', 0),
(9, 'abc', 'fdgdfgdf', 0),
(10, 'abc', 'fdgdfgdf', 0),
(11, 'abc', 'dfgdfdf', 7),
(12, 'abc', 'dfgdfgdfgd', 0),
(22, '1', 'wqh', 11),
(30, 'abc', 'ghgff', 12),
(31, 'wqh', 'wgfd', 4),
(32, 'wqh', 'fdsd', 30),
(34, 'wqh', 'jkhjkhjk', 4),
(35, 'wqh', '15645', 34),
(36, 'wqh', '456212312313', 4),
(37, 'wqh', '9646546578954657895464', 4),
(38, 'wqh', 'sdasadsa', 37),
(39, 'ouyang', 'sdfsdfsds', 38),
(40, 'abc', 'dfgdfgdfgd', 12),
(41, '', 'gsddsfsds11111111111111', 0),
(42, 'ouyang', 'dfgdf3333333333', 0),
(43, 'ouyang', 'dsfsdgs', 0),
(44, 'ouyang', 'fgdgdfd', 0),
(45, 'ouyang', 'GDFGDFFD', 0);

-- --------------------------------------------------------

--
-- 表的结构 `rss`
--

CREATE TABLE `rss` (
  `id` int(11) NOT NULL auto_increment,
  `display` varchar(60) NOT NULL,
  `indexxx` int(11) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- 导出表中的数据 `rss`
--


-- --------------------------------------------------------

--
-- 表的结构 `rss_user`
--

CREATE TABLE `rss_user` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(60) NOT NULL,
  `rss_id` int(11) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- 导出表中的数据 `rss_user`
--

INSERT INTO `rss_user` (`id`, `name`, `rss_id`) VALUES
(4, 'undefined', 1),
(5, 'undefined', 2),
(6, 'undefined', 3),
(7, 'undefined', 4),
(8, 'undefined', 5),
(9, 'undefined', 6),
(10, 'undefined', 7);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL auto_increment COMMENT 'id',
  `name` varchar(60) NOT NULL,
  `mail` varchar(60) NOT NULL,
  `tel` varchar(60) NOT NULL,
  `qq` varchar(60) NOT NULL,
  `pass` varchar(60) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='用户表' AUTO_INCREMENT=6 ;

--
-- 导出表中的数据 `user`
--

INSERT INTO `user` (`id`, `name`, `mail`, `tel`, `qq`, `pass`) VALUES
(1, 'werwe', '', '', '', ''),
(2, 'wtqwt', '12313213', 'dfgdfg', 'dfgdf', '123'),
(3, 'ouyang', 'ouyangzhigang@live.com', '15557319906', '249357105', '123456'),
(4, 'ouyangzhigang', '249357105@qq.com', '15557319006', '249357105', '123456'),
(5, 'wqh', '341878352@qq.com', '18205500001', '341155', '123');
