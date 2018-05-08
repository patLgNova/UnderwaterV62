function enter(pi) {
    if (!pi.haveItem(4000381)) {
	pi.playerMessage(5, "You do not have White Essence.");
	return false;
    } else {
	if (pi.getPlayerCount(541010100) == 0) { // Capt. Lac Map
	    var captMap = pi.getMap(541010100);
	    captMap.resetReactors();
	    captMap.killAllMonsters(false);
	    pi.warp(541010100, "sp");
		return true;
	} else {
		pi.playerMessage(5, "The battle against the boss has already begun, so you may not enter this place.");
		return false;
	}
    }
}
