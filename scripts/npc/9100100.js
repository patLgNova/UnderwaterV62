importPackage(Packages.client);
var status = 0;
var commonItems = [2001000, 2001001, 2001002, 2022015, 2022017, 2022178, 2040025, 2040029, 2040318, 2040533, 2040531, 2040625, 2049100, 1472054, 1082149, 1102084, 1472054, 2040804, 2040817, 2040914, 1032028, 1022060, 2044704, 2044705, 2040008, 2040009, 2040012, 2040013, 2040014, 2040015, 2040103, 2040104, 2040108, 2040109, 2040203, 2040204, 2040208, 2040209, 2040322, 2040320, 2040304, 2040305, 2040306, 2040307, 2040404, 2040405, 2040406, 2040407, 2040408, 2040409, 2040410, 2040411, 2040508, 2040509, 2040510, 2040511, 2040518, 2040519, 2040520, 2040521, 2040604, 2040605, 2040606, 2040607, 2040608, 2040609, 2040610, 2040611, 2040624, 2040626, 2040712, 2040713, 2040714, 2040715, 2040716, 2040717, 2040808, 2040809, 2040812, 2040813, 2040906, 2040815, 2040814, 2040810, 2040811, 2040907, 2040916, 2040917, 2040921, 2040922, 2041034, 2041035, 2041036, 2041036, 2041038, 2041039, 2041040, 2041041, 2043004, 2043005, 2043006, 2043007, 2043104, 2043105, 2043204, 2043205, 2043304, 2043305, 2043704, 2043705, 2043804, 2043805, 2044004, 2044005, 2044104, 2044105, 2044204, 2044205, 2044304, 2044305, 2044404, 2044405, 2044504, 2044505, 2044604, 2044605, 2044803, 2044804, 2044903, 2044904, 2040028, 2040030, 2040531, 2040533, 2040626, 2040932, 1002394, 1082145, 1082146, 1082147, 1082148, 1082150, 1002080, 1002081, 1002082, 1002083, 1050070, 1382037, 1382015, 1382035, 1102040, 1040100, 1060089, 1051078, 1050063, 1051064, 1072238, 1072239, 1032015, 1002577, 4031911, 4031908];
var commonItemG = Math.floor(Math.random() * commonItems.length);

var uncommonItems = [1041034, 1472011, 1002005, 1060071, 1302006];
var uncommonItemG = Math.floor(Math.random()*uncommonItems.length);

var rareItems = [1041034, 1472011, 1002005, 1060071, 1302006];
var rareItemG = Math.floor(Math.random()*rareItems.length);

var superRareItems = [1041034, 1472011, 1002005, 1060071, 1302006];
var superRareItemG = Math.floor(Math.random()*superRareItems.length);

var chance = Math.floor(Math.random() * 100);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 2 && mode == 0) {
            cm.sendOk("See you next time, when you try your luck here~!");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendNext("I am #bHenesys#k gachapon. I give things to people if they give me cardboard tickets~! The tickets look like this: #v5220000#");
        } else if (status == 1) {
            if (cm.haveItem(5220000) &&
                cm.canHold(1000000) &&
                cm.canHold(2000000) &&
                cm.canHold(3990000) &&
                cm.canHold(4000000)) {
                cm.sendYesNo("I see you have a ticket of mine, do you wish to use it?");
            } else if (!cm.haveItem(5220000)) {
                cm.sendOk("You dont have any #bgachapon tickets#k.");
                cm.dispose();
            } else {
                cm.sendOk("You need to make some inventory space.");
                cm.dispose();
            }
        } else if (status == 2) {
			cm.gainItem(5220000, -1);
			cm.createRewardItem(cm.getC());
			cm.dispose();
		}
		/*else if (status == 2) {
            cm.gainItem(5220000, -1);
            if (chance > 0 && chance <= 75) {
                cm.gainItem(commonItems[commonItemG], 1, true);
                cm.sendOk("INFO\r\nITEM GAINED: " + commonItems[commonItemG] 
                        + "\r\nCHANCE: " + chance);
            } else if (chance > 75 && chance <= 90) {
                cm.gainItem(uncommonItems[uncommonItemG], 1, true);
                cm.sendOk("INFO\r\nITEM GAINED: " + uncommonItems[uncommonItemG] 
                        + "\r\nCHANCE: " + chance);
            } else if (chance > 90 && chance <= 97) {
                cm.gainItem(rareItems[rareItemG], 1, true);
                cm.sendOk("INFO\r\nITEM GAINED: " + rareItems[rareItemG] 
                        + "\r\nCHANCE: " + chance);
            } else if (chance > 97 && chance <= 100) {
                cm.gainItem(superRareItems[superRareItemG], 1, true);
                cm.sendOk("INFO\r\nITEM GAINED: " + superRareItems[superRareItemG] 
                        + "\r\nCHANCE: " + chance);
            }
           // cm.sendOk("INFO\nCHANCE " + chance);
            cm.dispose();
        }
		*/
    }
}