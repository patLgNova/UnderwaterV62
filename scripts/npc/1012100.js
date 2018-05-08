/* Athena Pierce
    Bowman Job Advancement
    Victoria Road : Bowman Instructional School (100000201)
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
        if (mode == 0 && status == 2) {
            cm.sendOk("Make up your mind and visit me again.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getJob().equals(Packages.client.MapleJob.BEGINNER)) {
                if (cm.getLevel() >= 10 && cm.getChar().getDex() >= 25)
                    cm.sendNext("So you decided to become a #rBowman#k?");
                else {
                    cm.sendOk("Train a bit more and I can show you the way of the #rBowman#k.")
                    cm.dispose();
                }
            } else {
                if (cm.getLevel() >= 30 
                    && cm.getJob().equals(Packages.client.MapleJob.BOWMAN)) {
                    if (cm.getQuestStatus(32000).getId() >=
                        Packages.client.MapleQuestStatus.Status.STARTED.getId()) {
                        cm.completeQuest(32002);
                        if (cm.getQuestStatus(32002) ==
                         Packages.client.MapleQuestStatus.Status.COMPLETED) {
                            status = 20;
                            cm.sendNext("I see you have done well. I will allow you to take the next step on your long road.");
                        } else {
                            cm.sendOk("Go and see the #rJob Instructor#k.")
                            cm.dispose();
                        }
                    } else {
                        status = 10;
                        cm.sendNext("The progress you have made is astonishing.");
                    }
                } else if (cm.getQuestStatus(32100).equals(MapleQuestStatus.Status.STARTED)) {
                    if (cm.getQuestStatus(32101).equals(MapleQuestStatus.Status.COMPLETED)) {
                        cm.sendOk("Alright, now take this to #bRene#k.");
                    } else if (cm.haveItem(4031059,1)) {
                        cm.sendOk("Alright, now take this to #bRene#k.");
                        cm.completeQuest(32101);
                        cm.dispose();
                    } else {
                        cm.sendOk("Hey, " + cm.getChar().getName() + "! I need a #bBlack Charm#k. Go and find the Door of Dimension.");
                        cm.startQuest(32101);
                    }
                    cm.dispose();
                } else {
                    cm.sendOk("You have chosen wisely.");
                    cm.dispose();
                }
            }
        } else if (status == 1) {
            cm.sendNextPrev("It is an important and final choice. You will not be able to turn back.");
        } else if (status == 2) {
            cm.sendYesNo("Do you want to become a #rBowman#k?");
        } else if (status == 3) {
            if (cm.getJob().equals(Packages.client.MapleJob.BEGINNER))
                cm.changeJob(Packages.client.MapleJob.BOWMAN);
            cm.gainItem(1452002, 1);
            cm.gainItem(2060000, 1000);
            cm.sendOk("So be it! Now go, and go with pride.");
            cm.dispose();
        } else if (status == 11) {
            cm.sendNextPrev("You may be ready to take the next step as a #rHunter#k or #rCrossbowman#k.")
        } else if (status == 12) {
            cm.sendAcceptDecline("But first I must test your skills. Are you ready?");
        } else if (status == 13) {
            if (cm.haveItem(4031010)) {
                cm.sendOk("Please report this bug at http://odinms.de/forum/.\r\nstatus = 13");
            } else {
                cm.startQuest(32000);
                cm.sendOk("Go see the #bJob Instructor#k near Henesys. He will show you the way.");
            }
        } else if (status == 21) {
            cm.sendSimple("What do you want to become?#b\r\n#L0#Hunter#l\r\n#L1#Crossbowman#l#k");
        } else if (status == 22) {
            var jobName;
            if (selection == 0) {
                jobName = "Hunter";
                job = Packages.client.MapleJob.HUNTER;
            } else {
                jobName = "Crossbowman";
                job = Packages.client.MapleJob.CROSSBOWMAN;
            }
            cm.sendYesNo("Do you want to become a #r" + jobName + "#k?");
        } else if (status == 23) {
            cm.changeJob(job);
            cm.sendOk("So be it! Now go, and go with pride.");
        }
    }
}
