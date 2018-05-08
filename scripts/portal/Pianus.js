function enter(pi) {
    var fset = pi.getClient().getChannelServer().getMapFactory().getMap(230040420);
    if (fset.getCharacters().size() < 10) {
        //pi.playPortalSE;
        pi.warp(230040420);
        return true;
    } else {
        pi.dropMessage("The Cave of Pianus is currently full. Please come back later.");
        return false;
    }

}