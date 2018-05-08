/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/* Warrior Job Instructor
	Warrior 2nd Job Advancement
	Victoria Road : West Rocky Mountain IV (102020300)
*/

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0 && cm.getQuestStatus(32004) ==
			Packages.client.MapleQuestStatus.Status.STARTED) {
			status = 3;
		}
		if (status == 0) {
			if ((cm.getQuestStatus(32004) == 
				Packages.client.MapleQuestStatus.Status.COMPLETED) && !cm.haveItem(4031012) && cm.canHold(4031012)) {
				cm.sendOk("You seemed to have dropped this...");
				cm.gainItem(4031012, 1);
				cm.dispose();
			} else if ((cm.getQuestStatus(32004) == 
				Packages.client.MapleQuestStatus.Status.COMPLETED) && !cm.haveItem(4031012) && !cm.canHold(4031012)) {
				cm.sendOk("You dropped something, but you need to open up some slots so I can give it to you.");
				cm.dispose();
			} else if (cm.getQuestStatus(32004) == 
				Packages.client.MapleQuestStatus.Status.COMPLETED) {
				cm.sendOk("You're truly a hero!");
				cm.dispose();
			} else if (cm.getQuestStatus(32003).getId() >=
				Packages.client.MapleQuestStatus.Status.STARTED.getId()) {
				cm.completeQuest(32003);
				if (cm.getQuestStatus(32003) ==
					Packages.client.MapleQuestStatus.Status.COMPLETED && cm.haveItem(4031008)) {
					cm.sendNext("Oh, isn't this a letter from #bDances with Balrog#k?");
				}
			} else {
				cm.sendOk("I can show you the way once your ready for it.");
				cm.dispose();
			}
		} else if (status == 1) {
			cm.sendNextPrev("So you want to prove your skills? Very well...")
		} else if (status == 2) {
			cm.sendAcceptDecline("I will give you a chance if you're ready.");
		} else if (status == 3) {
			cm.startQuest(32004);
			cm.sendOk("You will have to collect me #b30 #t4031013##k. Good luck.")
		} else if (status == 4) {
			cm.warp(108000300, 0);
			cm.dispose();
		}
	}
}	