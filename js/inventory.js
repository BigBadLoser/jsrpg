/*global $*/
var testMe = "me2";
function createInventory(){
    $("#inventory").html('stuff:');
    var index = 0;
    for(var i = 0; i < 4; i++){
        $("#inventory").append('<div class="row inv-row" id="inventoryRow' + i + '">');
        
        for(var h = 0; h <= 9; h++){
            $("#inventoryRow" + i).append('<div class="inv-box col-xs-1" id="invSlot' + index + '" ondrop="drop(event)" ondragover="allowDrop(event)"></div>');
            index++;
        }
        $("#inventory").append("</div>");
    }
    
}

function giveItem(){
    $("#invSlot10").append('<img id="drag1" src="images/viking.png" draggable="true" ondragstart="drag(event)" width="50" height="50">');
}