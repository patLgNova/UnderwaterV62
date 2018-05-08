/* 
 * This file is part of the OdinMS Maple Story Server
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
importPackage(Packages.client);
importPackage(Packages.server.quest);
function enter(pi) {
	var papuMap = pi.getClient().getChannelServer().getMapFactory().getMap(220080001);
	if (papuMap.getCharacters().size() == 0) {
		papuMap.killAllMonsters(false);
		papuMap.resetReactors();
		if (pi.haveItem(4031172) && pi.getQuestStatus(7103).equals(MapleQuestStatus.Status.STARTED)) {
			return pi.warp(220080001, "sp","st00");
		} else if (pi.getQuestStatus(7103).equals(MapleQuestStatus.Status.NOT_STARTED)) {
			pi.playerMessage("The power of the clocktower chims through your soul.");
			return false;
		} else if (pi.getQuestStatus(7103).equals(MapleQuestStatus.Status.COMPLETED)) {
			return pi.warp(220080001, "sp", "st00");
		}
	} else {
		pi.playerMessage("Someone else is fighting Papulatus.");
		return false;
	}
	return false;
}