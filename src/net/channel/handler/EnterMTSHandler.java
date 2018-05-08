package net.channel.handler;

import client.*;
import net.AbstractMaplePacketHandler;
import tools.MaplePacketCreator;
import tools.data.input.SeekableLittleEndianAccessor;
import server.maps.SavedLocationType;

public class EnterMTSHandler extends AbstractMaplePacketHandler {

    @Override
    public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c) {
        if ((c.getPlayer().getMapId() >= 910000000 && c.getPlayer().getMapId() <= 910000021) 
                || (c.getPlayer().getMapId() < 100000000)
                || !c.getPlayer().isAlive()
                ) {
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        if (c.getPlayer().getMap() == null || c.getPlayer().getEventInstance() != null || c.getChannelServer() == null) {
            c.getPlayer().dropMessage(1, "Please try again later.");
            c.getSession().write(MaplePacketCreator.enableActions());
            return;
        }
        c.getPlayer().setPreviousFmMap(c.getPlayer().getMapId());
        c.getPlayer().saveLocation(SavedLocationType.FREE_MARKET);
        c.getPlayer().changeMap(910000000);
    }
}