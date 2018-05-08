DROP TABLE IF EXISTS `drops`;
CREATE TABLE `drops` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`monster` int(11) NOT NULL DEFAULT '0',
`dropId` int(3) NOT NULL DEFAULT '0',
`item` int(11) NOT NULL DEFAULT '0',
`minCount` int(6) NOT NULL DEFAULT '0',
`maxCount` int(6) NOT NULL DEFAULT '0',
`money` int(11) NOT NULL DEFAULT '0',
`prob` int(11) NOT NULL DEFAULT '0',
`questid` int(11) NOT NULL DEFAULT '0',
PRIMARY KEY (`id`),
KEY `mobid` (`monster`)
)
DROP TABLE IF EXISTS `worlddrops`;
CREATE TABLE `worlddrops` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`monster` int(11) NOT NULL DEFAULT '0',
`item` int(11) NOT NULL DEFAULT '0',
`minCount` int(6) NOT NULL DEFAULT '0',
`maxCount` int(6) NOT NULL DEFAULT '0',
`money` int(11) NOT NULL DEFAULT '0',
`prob` int(11) NOT NULL DEFAULT '0',
`questid` int(11) NOT NULL DEFAULT '0',
PRIMARY KEY (`id`),
KEY `mobid` (`monster`)
)