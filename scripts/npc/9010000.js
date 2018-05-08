importPackage(Packages.client);
function start() {
    status = -1;
    action (1,0,0);    
}
function action (mode,type,selection)  {
	var level30completed = "";
	var level70completed = "";
	var level100completed = "";
	if (cm.getQuestStatus(30000).equals(MapleQuestStatus.Status.COMPLETED)) {
		level30completed = "#bCompleted";
	} else {
		level30completed = "#rUncompleted";
	}
	if (cm.getQuestStatus(30001).equals(MapleQuestStatus.Status.COMPLETED)) {
		level70completed = "#bCompleted"; 
	} else {
		level70completed = "#rUncompleted";
	}
	if (cm.getQuestStatus(30002).equals(MapleQuestStatus.Status.COMPLETED)) {
		level100completed = "#bCompleted"; 
	} else {
		level100completed = "#rUncompleted";
	}
    if (mode == -1) {
        cm.dispose();
    } else if (mode == 1) {
        status++;
    }
        if (status == 0 && mode == 1){
     if (cm.getPlayer().getLevel() >= 30 & cm.getPlayer().getLevel() < 70) {
            cm.sendSimple(
			"QUEST LIST\r\n#k#L0#Level 30 gift box " + level30completed);
	 } else if (cm.getPlayer().getLevel() >= 70 && cm.getPlayer().getLevel() < 100) {
		    cm.sendSimple(
			"QUEST LIST\r\n#k#L0#Level 30 gift box " + level30completed + 
			"#l\r\n#k#L1#Level 70 gift box " + level70completed);
	 } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() < 150) {
		    cm.sendSimple(
			"QUEST LIST\r\n#k#L0#Level 30 gift box " + level30completed + 
			"#l\r\n#k#L1#Level 70 gift box " + level70completed +
			"#l\r\n#k#L2#Level 100 gift box " + level100completed);
	 } else {
		 cm.sendOk("Wonderful weather we're having!");
	 }
        } else if (status == 1){
            switch (selection) {
        case 0:
		if (!cm.getQuestStatus(30000).equals(MapleQuestStatus.Status.COMPLETED)) {
            cm.sendNext("Here is your level 30 gift box!");
			cm.completeQuest(30000);
			cm.gainItem(2031002);
			cm.dispose();
		} else {
			cm.dispose();
		}
        break;
        case 1:
		if (!cm.getQuestStatus(30000).equals(MapleQuestStatus.Status.COMPLETED)) {
            cm.sendNext("Here is your level 30 gift box!");
			cm.completeQuest(30001);
			cm.gainItem(2031003);
			cm.dispose();
		} else {
			cm.dispose();
		}
        break;
        case 2:
            cm.sendNext( "Heh, I asked the same thing when I saw the Professor building them. They're warp points. Pressing Up will warp you to another location. I recommend getting the hang of them, they're our transport system." );    
        case 3:
            cm.sendNext( "The MesoGears are beneath Bigger Ben. It's a monster-infested section of Bigger Ben that Barricade discovered. It seems to reside in a separate section of the tower-quite strange if you ask me. I hear he needs a bit of help exploring it, you should see him. Be careful though, the Wolf Spiders in there are no joke." );
        break;
        case 4:
            cm.sendNext( "Ah...well. The Krakian Jungle is located on the outskirts of New Leaf City. Many new and powerful creatures roam those areas, so you'd better be prepared to fight if you head out there. It's at the left end of town. Rumors abound that the Jungle leads to a lost city, but we haven't found anything yet." );
        break;
        case 5:
            cm.sendNext( "Well, when John found himself in the MesoGears portion of Bigger Ben, he stood on one and went to another location. However, he could only head back and forth-they don't cycle through like the Foxwit Door. Ancient tech for you." );
        break;
        case 6:
            cm.sendNext( "Well, you'll see them just about everywhere. They're areas under construction. The Red lights mean it's not finished, but the Green lights mean it's open. Check back often, we're always building!" );    
        break;
        case 7:
            cm.sendNext( "Ah, Jack. You know those guys that are too cool for school? The ones who always seem to get away with everything? AND get the girl? Well, that's Jack, but without the girl. He thinks he blew his chance, and began wearing that mask to hide his true identity. My lips are sealed about who he is, but he's from Amoria. He might tell you a bit more if you ask him." );
        break;
        case 8:
            cm.sendNext( "I've known Lita for a while, thought we've just recently rekindled our friendship. I didn't see her for a quite a bit, but I understand why. She trained for a very, very long time as a Thief. Matter of fact, that's how we first met? I was besieged a group of wayward Mushrooms, and she jumped in to help. When it was time to a pick a sheriff, it was a no-brainer. She's made a promise to help others in their training and protect the city, so if you're interested in a bit of civic duty, speak with her. " );    
        break;
        case 9:
            cm.sendNext( "Soon, my friend. Even though you can't see them, the city developers are hard at work. When they're ready, we'll open them. I know you're looking forward to it and so am I!" );
        break;
        case 10: //pude save me my brain hurts
		if (cm.getLevel()>=15){
		if (cm.getQuestStatus(4900).equals(MapleQuestStatus.Status.NOT_STARTED)) {
                    cm.sendNext("Okay whenever you're ready!");
			cm.startQuest(4900);
		} else {
            cm.sendNext("You have already completed the NLC quiz!")
             break;
        }
		} else {
			cm.sendNext("You must be Level 15 or higher to take part in the NLC quiz!")
		}        
    }
}
}
/*function start() {
    if (cm.getPlayer().getLevel() >= 30 & cm.getPlayer().getLevel() < 70) {
        cm.sendOk("\r\n#bL0#Level 30 box");
    } else if (cm.getPlayer().getLevel() >= 70) {
		cm.sendOk("level 70 test");
    } else {
		cm.sendOk("Wonderful weather we're having!");
	}
}

function action() {
    cm.dispose()
}*/