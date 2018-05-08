CREATE TABLE IF NOT EXISTS `serialhwidbans` (
  `serialbanid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `serial` varchar(30) NOT NULL,
  PRIMARY KEY (`serialbanid`),
  UNIQUE KEY `serial_2` (`serial`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
