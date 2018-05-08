package Constants;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;


public class GameConstants {

public static int ALLOWCS = 1;
    
public static boolean allowedJobs(int job) {
    switch (job) {
        case 0:
        case 100:
        case 200:
        case 300:
        case 400:
        case 500:
        case 110:
        case 120:
        case 130:
        case 210:
        case 220:
        case 230:
        case 310:
        case 320:
        case 410:
        case 420:
        case 510:
        case 520:
        case 900:
        case 910:
        case 111:
        case 121:
        case 131:
        case 211:
        case 221:
        case 231:
        case 311:
        case 321:
        case 411:
        case 421:
        case 511:
        case 521:
        case 112:
        case 122:
        case 132:
        case 212:
        case 222:
        case 232:
        case 312:
        case 322:
        case 412:
        case 422:
        case 512:
        case 522:
            return true;
    }
    return false;
}

    public static int JobToEncoding(int job) {
        switch (job) {
        case 0:
            return 1;
        case 100:
        case 110:
        case 120:
        case 130:
        case 111:
        case 121:
        case 131:
        case 112:
        case 122:
        case 132:
            return 2;
        case 200:
        case 210:
        case 220:
        case 230:
        case 211:
        case 221:
        case 231:
        case 212:
        case 222:
        case 232:
            return 4;
        case 300:
        case 310:
        case 320:
        case 311:
        case 321:
        case 312:
        case 3222:
            return 8;
        case 400:
        case 410:
        case 420:
        case 411:
        case 421:
        case 412:
        case 422:
            return 16;
        case 500:
        case 510:
        case 520:
        case 511:
        case 521:
        case 512:
        case 522:
            return 32;
        }
        return 1;
    }
     public static boolean isForceRespawn(int mapid) {
        switch (mapid) {
            case 103000800:
            case 103000890:
            case 925100100: 
                return true;
            default:
                return mapid / 100000 == 9800 && (mapid % 10 == 1 || mapid % 1000 == 100);
        }
    }
    public static boolean bannedHWID(long hwid) {
        return hwid == 419900422;
    }
    public static boolean multipleDropUSE(int itemid) {
        return itemid >= 2000000 && itemid <= 2022441;
    } 
    public static boolean no_consume_white_scroll(int itemid) {
        return itemid == 2040727 || itemid == 2041058 || (itemid/100 == 20490);
    }
    public static int get_category_from_SN(int nSN) {
        return nSN / 10000000 % 10;
    }
    public static int get_categorysub_from_SN(int nSN) {
        return nSN / 100000 % 100;
    }
    public static boolean is_cash_item_commodity(int nCommodityID){
         return nCommodityID >= 10000000 && nCommodityID < 80000000;
    }
    public static boolean is_inc_drop_item(int nItemID) {
        return nItemID / 10000 == 536;
    }
    public static boolean is_inc_exp_item(int nItemID) {
        return nItemID / 10000 == 521;
    }
    public static boolean  is_maple_point_commodity(int nCommodityID) {
        return nCommodityID >= 90000000 && nCommodityID < 91000000;
    }
    public static boolean is_meso_commodity(int nCommodityID){
        return nCommodityID >= 91000000 && nCommodityID < 92000000;
    }
    private static final SimpleDateFormat checkDate = new SimpleDateFormat("MM.dd");
    static ArrayList<String> bossDates = new ArrayList<>(Arrays.asList("03.12", "03.13"));
    public static boolean isBonusDay(SimpleDateFormat checkTheDate, int mobID) throws ParseException {
        System.out.println("isBonusDay: " + checkDate.format(System.currentTimeMillis()));
        System.out.println("isBonusDay2: " + bossDates.get(0));
        if ((checkDate.format(System.currentTimeMillis()).equalsIgnoreCase(bossDates.get(0))) && (mobID == 100100)) {
            return true;
        } else if (checkDate.format(System.currentTimeMillis()).equalsIgnoreCase(bossDates.get(1))) {
            return true;
        }
        return false;
    }
    public static boolean isBonusDayBoss(int mobID) {
        switch (mobID) {
            case 100100:
                return true;
        }
        return false;
    }
}