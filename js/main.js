/*global $*/

var Boss = {
    totalHealth: 10000,
    currentHealth: 10000,
    test: 0
}
var Player = {
    totalHealth: 10000,
    currentHealth: 10000,
    totalMana: 1000,
    currentMana: 1000
    
}
function testFunction(){
    $("#bossHealthBar").animate({width: Boss.currentHealth  / 100 + "%"}, 0);
    $("#bossHealthBarLabel").text(Boss.currentHealth + "/" + Boss.totalHealth);
    Boss.currentHealth -= 200;
    
    $("#playerHealthBar").animate({width: Player.currentHealth  / 100+ "%"}, 0);
    $("#playerHealthBarLabel").text(Player.currentHealth + "/" + Player.totalHealth);
    Player.currentHealth -= 100;
    
    $("#playerManaBar").animate({width: Player.currentMana  / 10 + "%"}, 0);
    $("#playerManaBarLabel").text(Player.currentMana + "/" + Player.totalMana);
    Player.currentMana -= 100;
}

$( document ).ready(function() {
    createInventory();
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}