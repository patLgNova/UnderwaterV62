var status = 0;
var minLevel = 21; 
var maxLevel = 50; 
var minPlayers = 1;
var maxPlayers = 6;
var nomeServer = "AeroMS";

var PQItems = new Array(4001007, 4001008);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getParty() == null) { 
				cm.sendOk("How about you and your party members collectively beating a quest? Here you'll find obstacles and problems where you won't be able to beat it unless with great teamwork. If you want to try it, please tell the #bleader of your party#k to talk to me.");
                                cm.dispose();
                                return;
			} if (!cm.isLeader()) { 
				cm.sendOk("If you want to try the quest, please tell the #bleader of your party#k to talk to me.");
                                cm.dispose();
                                return;
                         } if (checkLevelsAndMap(minLevel, maxLevel) == 2) {  
	                          cm.sendOk("Are you sure all members of your group are present?");
                                  cm.dispose();
                                  return;
                         } else {
				var party = cm.getParty().getMembers();
				var mapId = cm.getChar().getMapId();
				var next = true;
				var levelValid = 0;
				var inMap = 0;
				var it = party.iterator();
				while (it.hasNext()) {
					var cPlayer = it.next();
					if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
						levelValid += 1;
					} else {
						next = false;
					}
					if (cPlayer.getMapid() == mapId) {
						inMap += 1;
					}
				}
				if (party.size() < minPlayers || party.size() > maxPlayers || inMap < minPlayers) 
					next = false;
				if (next) {
				  var em = cm.getEventManager("KerningPQ");
	                          if (em == null) {
	                          cm.sendOk("Event is turned off. Contact an admin");
		                  } else {
		                  var prop = em.getProperty("state");
		                  if (prop == ("0") || prop == null) {
				  em.startInstance(cm.getParty(),cm.getChar().getMap());
				  cm.dispose();
		                    } else {
		            	      cm.sendOk("Another group is currently taking on the quest.");
                                      cm.dispose();
		                 }
		               }
	                 } else {
		                   cm.sendOk("Someone in your group does not meet the level requirement.");
                                   cm.dispose();
	                        }
			}
		}
		else {
			cm.sendOk("ERROR");
			cm.dispose();
		}
	}
}

function checkLevelsAndMap(lowestlevel, highestlevel) {
    var party = cm.getParty().getMembers();
    var mapId = cm.getMapId();
    var valid = 0;
    var inMap = 0;

    var it = party.iterator();
    while (it.hasNext()) {
        var cPlayer = it.next();
        if (!(cPlayer.getLevel() >= lowestlevel && cPlayer.getLevel() <= highestlevel) && cPlayer.getJobId() != 900) {
            valid = 1;
        }
        if (cPlayer.getMapid() != mapId) {
            valid = 2;
        }
    }
    return valid;
}

					