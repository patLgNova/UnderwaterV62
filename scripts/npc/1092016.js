importPackage(Packages.client);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.getQuestStatus(2166).equals(MapleQuestStatus.Status.STARTED)) {
        cm.completeQuest(2166);
        cm.gainExp(400);
	cm.playerMessage(5, "You felt the power of the stone");
    }
    cm.dispose();
}