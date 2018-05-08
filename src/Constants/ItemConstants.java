package Constants;

import client.MapleInventoryType;

public class ItemConstants {

    
    
public static boolean disallowedGMItems(int itemid){
    switch (itemid){
        case 2340000:
        case 2049100:
        return true;
    }
    return false;
}
public static boolean isRareItem(int rewardID) {
    /*
 1102079 - Ragged Red Cape
1102080 - Ragged Blue Cape
1102081 - Ragged Yellow Cape
1102082 - Ragged Black Cape
1102083 - Ragged Red Cape
1102084 - Pink Gaia Cape
1102085 - Yellow Gaia Cape
    */
    switch (rewardID) {
        case 1102079:
        case 1102080:
        case 1102081:
        case 1102082:
        case 1102083:
        case 1102084:
        case 1102085:
            return true;
        default:
            return false;
    }
}
public static boolean trackedItems(int itemid){
    switch (itemid){
        case 2340000:
        case 2049100:
        case 2022179:
        case 5222000:
        case 2022282:
        case 2043003:
            return true;
    }
    return false;
}
public static boolean blockedNPCs(int npcid){
    switch (npcid){
        case 9330045:
        case 9270043:
        return true;
    }
    return false;
}
public static boolean isRechargable(int itemId) {
    return itemId / 10000 == 233 || itemId / 10000 == 207;
}
    public static MapleInventoryType getInventoryType(final int itemId) {
        final byte type = (byte) (itemId / 1000000);
        if (type < 1 || type > 5) {
            return MapleInventoryType.UNDEFINED;
        }
        return MapleInventoryType.getByType(type);
    }
    public final static int PET_COME = 0x80;
    public final static int ACCOUNT_SHARING = 0x100;
    
    public static int getFlagByInt(int type) {
        if (type == 128) {
            return PET_COME;
        } else if (type == 256) {
            return ACCOUNT_SHARING;
        }
        return 0;
    }
    public static boolean isPet(int itemId) {
        return itemId / 1000 == 5000;
    }

public static boolean canEquipToSlot(int itemId, byte destination, boolean isCash) {
    if (itemId/1000 == 1092 && destination == -10) {//shields
        return true;
    } else if (itemId >= 1302000 && itemId < 1492032 && destination == -11) {//weapons
        return true;
    } else if (itemId/1000 == 1702 && destination == -111) {//cweapons
        return true;
    } else if (itemId/1000 == 1002 && destination == -1) {//hats
        return true;
    }
    return false;
}

}