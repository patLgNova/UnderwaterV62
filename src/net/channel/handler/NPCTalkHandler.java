package net.channel.handler;

import client.MapleClient;
import net.AbstractMaplePacketHandler;
import scripting.npc.NPCScriptManager;
import server.life.MapleNPC;
import server.maps.MapleMapObject;
import server.maps.PlayerNPCs;
import tools.MaplePacketCreator;
import tools.data.input.SeekableLittleEndianAccessor;

public class NPCTalkHandler extends AbstractMaplePacketHandler {

    @Override
    public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c) {
        if (c.getPlayer().getLastSelectNPCTime()+200 > System.currentTimeMillis() ){
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        c.getPlayer().setLastSelectNPCTime(System.currentTimeMillis());
        if (!c.getPlayer().isAlive() || c.getPlayer() == null || c.getPlayer().getMap() == null) {
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        int oid = slea.readInt();
        slea.readInt();
        MapleMapObject obj = c.getPlayer().getMap().getMapObject(oid);
        if (obj instanceof MapleNPC) {
            MapleNPC npc = (MapleNPC) obj;
            if (NPCScriptManager.getInstance() != null) {
                NPCScriptManager.getInstance().dispose(c);
            }
            if (!c.getPlayer().getCheatTracker().Spam(1000, 4)) {
                if (npc.hasShop()) {
                    if (c.getPlayer().getShop() != null) {
                        c.getPlayer().setShop(null);
                        c.getSession().write(MaplePacketCreator.confirmShopTransaction((byte) 20));
                    }
                    npc.sendShop(c);
                } else {
                    if (c.getCM() != null || c.getQM() != null) {
                        c.getSession().write(MaplePacketCreator.enableActions());
                        return;
                    }
                    NPCScriptManager.getInstance().start(c, npc.getId());
                }
            }
        } else if (obj instanceof PlayerNPCs) {
            PlayerNPCs npc = (PlayerNPCs) obj;
            NPCScriptManager.getInstance().start(c, npc.getId(), npc.getName(), null);
        }
    }
}