/* Arec
    Thief 3rd job advancement
    El Nath: Chief's Residence (211000001)
*/


importPackage(Packages.client);


var status = 0;
var job;


function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 1) {
            cm.sendOk("Make up your mind and visit me again.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (!(cm.getJob().equals(MapleJob.ASSASSIN) ||
                cm.getJob().equals(MapleJob.BANDIT))) {
                cm.sendOk("And...who might you be?");
                cm.dispose();
                return;
            }
            if (cm.getQuestStatus(32102).equals(MapleQuestStatus.Status.COMPLETED)) {
                cm.sendNext("Indeed, you have proven to be worthy of the strength I will now bestow upon you.");
            } else if (cm.getQuestStatus(32102).equals(MapleQuestStatus.Status.STARTED)) {
                cm.sendOk("Go and find me the #rNecklace of Wisdom#k which is hidden on the Holy Ground at the Snowfield.");
                cm.dispose();
            } else if (cm.getQuestStatus(32100).equals(MapleQuestStatus.Status.COMPLETED)) {
                cm.sendNext("I was right, your strength is truly excellent.");
            } else if (cm.getQuestStatus(32100).equals(MapleQuestStatus.Status.COMPLETED)) {
                cm.sendOk("Well, well. Now go and see #bthe Dark Lord#k. He will show you the way.");
                cm.dispose();
            } else if ((cm.getJob().equals(MapleJob.ASSASSIN) ||
                cm.getJob().equals(MapleJob.BANDIT)) &&
                cm.getLevel() >= 70 && 
                cm.getChar().getRemainingSp() <= (cm.getLevel() - 70) * 3) {
                cm.sendNext("#rYou are a strong one.");
            } else {
                cm.sendOk("Your time has yet to come...");
                cm.dispose();
            }
        } else if (status == 1) {
            if (cm.getQuestStatus(32102).equals(MapleQuestStatus.Status.COMPLETED)) {
                if (cm.getJob().equals(MapleJob.ASSASSIN)) {
                    cm.changeJob(MapleJob.HERMIT);
                    cm.getChar().gainAp(5);
                    cm.gainItem(4031058, -1)
                    cm.gainItem(4031059, -1)
                    cm.sendOk("You are now a #bHermit#k!");
                    cm.dispose();
                } else if (cm.getJob().equals(MapleJob.BANDIT)) {
                    cm.changeJob(MapleJob.CHIEFBANDIT);
                    cm.getChar().gainAp(5);
                    cm.gainItem(4031058, -1)
                    cm.gainItem(4031059, -1)
                    cm.sendOk("You are now a #bChief Bandit#k!");
                    cm.dispose();
                }
            } else if (cm.getQuestStatus(32100).equals(MapleQuestStatus.Status.COMPLETED)) {
                cm.sendAcceptDecline("Is your mind ready to undertake the final test?");
            } else {
                cm.sendAcceptDecline("But I can make you even stronger. Although you will have to prove not only your strength but your knowledge. Are you ready for the challenge?");
            }
        } else if (status == 2) {
            if (cm.getQuestStatus(32101).equals(MapleQuestStatus.Status.COMPLETED)) {
                cm.startQuest(32102);
                cm.sendOk("Go and find me the #rNecklace of Wisdom#k which is hidden on the Holy Ground at the Snowfield.");
                cm.dispose();
            } else {
                cm.startQuest(32100);
                cm.sendOk("Well, well. Now go and see #bthe Dark Lord#k. He will show you the way.");
                cm.dispose();
            }
        }
    }
}