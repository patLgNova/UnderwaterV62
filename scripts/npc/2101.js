

/*var status = -1;

function start() {
  action(1,0,0);
}

function action(mode,type,selection){
    if(mode == 1)
        status++;
    else{
        cm.dispose();
        return;
    }
    if(status == 0){
        cm.sendGetText("Type the ID of the mob to fetch it's drop table.");
    }else if(status == 1){
		var dropMonster = parseInt(cm.getText());
		if (dropMonster > 2147483647 || isNaN(dropMonster)) {
			dropMonster = 0;
		}
		cm.sendOk(cm.fetchMonsterDrop(cm.getC(), dropMonster));
		cm.dispose();
    }
}*/
var status = 0;

function start() {
    cm.sendYesNo("Have you finished the tutorial?");
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 0) {
            cm.sendOk("Then finish it already!");
            cm.dispose();
        } else
            status++;
        if (status == 1)
            cm.sendNext("Onto the next stage my brave warrior!");
        else if (status == 2) {
            cm.warp(40000, 0); //cm.warp(40000, 0);
            cm.dispose();
        }
    }
}