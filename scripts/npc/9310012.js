importPackage(Packages.client);
function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == 1) { 
        status++; 
    } else { 
        status--; 
    } 
    if (status == 0) { 
	if (cm.getLevel() >= 50 && (cm.getQuestStatus(26000).equals(MapleQuestStatus.Status.NOT_STARTED))) {
		cm.sendSimple("You'd think they'd give me a better job here... geez.\r\n#L0##bA problem in paradise#k#l");
	} else if (cm.getQuestStatus(26000).equals(MapleQuestStatus.Status.COMPLETED)) {
		cm.sendSimple("How's it going champ?");
		status = 10;
	} else if (cm.getQuestStatus(26000).equals(MapleQuestStatus.Status.STARTED)){
		cm.sendSimple("....");
	}
	} else if (status == 1) {
       if (selection == 0) {
			cm.sendNext("I need you to bring me some... uhhh..... boss items. Might seem crazy, but I'll make it worth your while! I need a whole bunch of things...\r\n#i4032133# #rZakum Diamond#k \r\n\ #i4001083# #rZakum Certificate#k \r\n\ #i4001084# #rPapulatus Certificate#k \r\n\ #i4001085# #rPianus Certificate#k \r\n #i4000175# #rMinature Pianus#k")
           }
}
	 }