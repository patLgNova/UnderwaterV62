DROP TABLE IF EXISTS `bossCounter`;
CREATE TABLE `bossCounter` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`characterID` int(11) NOT NULL DEFAULT '0',
`bossID` int(11) NOT NULL DEFAULT '0',
`timeEntered` bigint(20) NOT NULL DEFAULT '0',
`bossCount` int(11) NOT NULL DEFAULT '0',
PRIMARY KEY (`id`),
KEY `character_` (`characterID`)
)