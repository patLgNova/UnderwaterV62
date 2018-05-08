/* Door of Dimension
*/


importPackage(Packages.client);


function start() {
    if (cm.getQuestStatus(32101).equals(MapleQuestStatus.Status.STARTED) && !cm.haveItem(4031059)) {
        var em = cm.getEventManager("3rdjob");
        if (em == null) {
            cm.sendOk("Your bonehead admin didn't enable the 3rd job script! RIOT");
        } else {
            em.newInstance(cm.getChar().getName()).registerPlayer(cm.getChar());
        }
    } else {
        cm.sendOk("You seem to be missing something!");
    }
    cm.dispose();
}


function action(mode, type, selection) {


}