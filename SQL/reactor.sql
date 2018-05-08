DROP TABLE IF EXISTS `reactors`;
CREATE TABLE `reactors` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`reactor` int(11) NOT NULL DEFAULT '0',
`dropId` int(3) NOT NULL DEFAULT '0',
`item` int(11) NOT NULL DEFAULT '0',
`money` int(11) NOT NULL DEFAULT '0',
`prob` int(11) NOT NULL DEFAULT '0',
`questid` int(11) NOT NULL DEFAULT '0',
PRIMARY KEY (`id`),
KEY `reactorid` (`reactor`)
)