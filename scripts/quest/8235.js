
var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendNext("With all the strange occurrences in Masteria and New Leaf City, Lita Lawless must be busy! I'll bet that she's willing to accept my help...maybe I can earn some mesos in the process! A quick jaunt to the Kerning City subway and I'll be on my way to New Leaf City!");
		} else if (status == 1) {
			qm.sendNextPrev("I spoke with Lita, and she told me the tragic origin of the Headless Horseman. He was a former warrior of Crimsonwood Keep that was experimented on by the mysterious Alchemist, the same one who corrupted the Krakians. He now roams the Phantom Forest, and I must bring his Jack O'Lantern head to Lita as proof of my triumph!");
		} else if (status == 2) {
			qm.sendAcceptDecline("So you'll help me?");
		} else if (status == 3) {
			qm.forceStartQuest();
			qm.dispose();
		}
	}
}
function end(mode, type, selection){
}