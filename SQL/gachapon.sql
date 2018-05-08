DROP TABLE IF EXISTS `gachapon`;
CREATE TABLE `gachapon` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`npc` int(11) NOT NULL DEFAULT '0',
`item` int(11) NOT NULL DEFAULT '0',
`prob` int(11) NOT NULL DEFAULT '0',
PRIMARY KEY (`id`),
KEY `npcid` (`npc`)
)