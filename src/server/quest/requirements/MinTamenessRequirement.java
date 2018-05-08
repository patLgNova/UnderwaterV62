/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as
 published by the Free Software Foundation version 3 as published by
 the Free Software Foundation. You may not use, modify or distribute
 this program under any other version of the GNU Affero General Public
 License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package server.quest.requirements;

import client.MapleCharacter;
import client.MaplePet;
import provider.MapleData;
import provider.MapleDataTool;
import server.quest.MapleQuest;
import server.quest.MapleQuestRequirementType;

/**
 *
 * @author Tyler (Twdtwd)
 */
public class MinTamenessRequirement extends MapleQuestRequirement {
	private int minTameness;
	
	
	public MinTamenessRequirement(MapleQuest quest, MapleData data) {
		super(MapleQuestRequirementType.MIN_PET_TAMENESS);
		processData(data);
	}
	
	/**
	 * 
	 * @param data 
	 */
	@Override
	public void processData(MapleData data) {
		minTameness = MapleDataTool.getInt(data);
	}
	
	
	@Override
	public boolean check(MapleCharacter chr, Integer npcid) {
		int curCloseness = 0;
                if (chr.getPets() != null) {
                    for(MaplePet pet : chr.getPets()) {
                        if (pet != null) {
                            if(pet.getCloseness() > curCloseness) {
                                curCloseness = pet.getCloseness();
                            }
                        } else {
                            chr.dropMessage("Seems like your pet doesn't exist. Must be an error, report this!");
                        }
                    }
                } else {
                    chr.dropMessage("Seems like your pet doesn't exist. Must be an error, report this!");
                }
		return curCloseness >= minTameness;
	}
}
