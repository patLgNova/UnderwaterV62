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
package Constants;

/**
 *
 * @author AngelSL
 */
public enum FieldConstants {
    Jump(0x01),
    MovementSkills(0x02),
    SummoningBag(0x04),
    MysticDoor(0x08),
    ChannelSwitch(0x10),
    RegularExpLoss(0x20),
    VipRock(0x40),
    Minigames(0x80),
    Mount(0x200),
    NoClue2(0x400), 
    CANNOTUSEPOTION(0x1000),
    Event(0x2000),
    Pet(0x8000), 
    Event2(0x10000),
    CANNOTJUMPDOWN(0x20000),
    Potions(0x40000);
    private final long i;

    private FieldConstants(long i) {
        this.i = i;
    }

    public long getValue() {
        return i;
    }

    public boolean check(int fieldlimit) {
        return (fieldlimit & i) == i;
    }
  public static boolean isBonusExpMap(int mapid) {
      switch (mapid) {
          case 200050000: //Cloud Park IV
          case 200080000: //Cloud Park VI
          case 200010302: //Garden of Darkness
          case 230040400: //Grave of a wrecked ship
          case 250010301: //Wild Bear area 1-3
          case 250010302: //2
          case 250010303: //3
              return true;
      }
      return false;
  }

}
