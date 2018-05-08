package net.channel.handler;

import client.IItem;
import client.MapleCharacter;
import client.MapleClient;
import client.MapleInventoryType;
import net.AbstractMaplePacketHandler;
import server.MapleInventoryManipulator;
import server.MapleItemInformationProvider;
import tools.MaplePacketCreator;
import scripting.npc.NPCScriptManager;
import tools.data.input.SeekableLittleEndianAccessor;

public class UseItemHandler extends AbstractMaplePacketHandler {

    public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c) {
        MapleCharacter user = c.getPlayer();
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        slea.readInt();
        byte slot = (byte) slea.readShort();
        int itemId = slea.readInt();
        IItem toUse = c.getPlayer().getInventory(MapleInventoryType.USE).getItem(slot);
        if (itemId == 2022118) {
            c.getPlayer().dropMessage(1, "Please keep this item for scrolling purposes. Gives you 100% scroll rate.");
            c.getSession().write(MaplePacketCreator.enableActions());
        } else if (itemId == 2022065) {
            NPCScriptManager.getInstance().start(c, 9010000, "JobChanger", null);
        } else if (toUse != null && toUse.getQuantity() > 0) {
            if (toUse.getItemId() != itemId) {
                return;
            }
            if (ii.isTownScroll(itemId)) {
                if (ii.getItemEffect(toUse.getItemId()).applyTo(c.getPlayer())) {
                    MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (short) 1, false);
                }
                c.getSession().write(MaplePacketCreator.enableActions());
                return;
            }
                                /*
                    if (c.getAlpha() > 0) {
                        user.gainItem(Bandana?);
                    }
                    */
            if (itemId == 2031002) {
                if (user.canHold(1000000) && user.canHold(2000000) && user.canHold(4000000)) {
                    user.gainMeso(50000);
                    user.gainItem(2000005, (short) 15, false, true);
                    user.gainItem(1002510, (short) 1, true, true);
                    user.gainItem(4001126, (short) 50, false, true);
                    MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (short) 1, false);
                    c.getSession().write(MaplePacketCreator.enableActions());
                    return;
                } else {
                     user.dropMessage("Please clear out at least 1 EQP/USE/ETC slot.");
                 }
            } else if (itemId ==2031003) {
                 if (user.canHold(1000000) && user.canHold(2000000) && user.canHold(4000000)) {
                    user.gainMeso(500000);
                    user.gainItem(2000005, (short) 45, false, true);
                    user.gainItem(1002511, (short) 1, true, true);
                    user.gainItem(4001126, (short) 200, false, true);
                    MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (short) 1, false);
                    c.getSession().write(MaplePacketCreator.enableActions());
                    return;
                } else {
                     user.dropMessage("Please clear out at least 1 EQP/USE/ETC slot.");
                 }
            }
            MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (short) 1, false);
            ii.getItemEffect(toUse.getItemId()).applyTo(c.getPlayer());
        }
    }
}