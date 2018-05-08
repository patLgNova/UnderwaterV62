importPackage(Packages.client);
importPackage(Packages.server.quest);
function enter(pi) {
    if (pi.getQuestStatus(6240).equals(MapleQuestStatus.Status.STARTED)) {
		return pi.warp(921100200);
    } else {
		pi.playerMessage("The burning flames repel you from entering.");
		return false;
    }
    return false;
}