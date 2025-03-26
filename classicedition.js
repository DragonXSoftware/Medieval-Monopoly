function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
    this.name = name;
    this.pricetext = pricetext;
    this.color = color;
    this.owner = 0;
    this.mortgage = false;
    this.house = 0;
    this.hotel = 0;
    this.groupNumber = groupNumber || 0;
    this.price = (price || 0);
    this.baserent = (baserent || 0);
    this.rent1 = (rent1 || 0);
    this.rent2 = (rent2 || 0);
    this.rent3 = (rent3 || 0);
    this.rent4 = (rent4 || 0);
    this.rent5 = (rent5 || 0);
    this.landcount = 0;

    if (groupNumber === 3 || groupNumber === 4) {
        this.houseprice = 50;
    } else if (groupNumber === 5 || groupNumber === 6) {
        this.houseprice = 100;
    } else if (groupNumber === 7 || groupNumber === 8) {
        this.houseprice = 150;
    } else if (groupNumber === 9 || groupNumber === 10) {
        this.houseprice = 200;
    } else {
        this.houseprice = 0;
    }
}

function Card(text, action) {
    this.text = text;
    this.action = action;
}

function corrections() {
    document.getElementById("cell1name").textContent = "Dragon’s Roost";

    // Add images to enlarges.
    document.getElementById("enlarge5token").innerHTML += '<img src="images/dragon_icon.png" height="60" width="65" alt="Dragon" style="position: relative; bottom: 20px;" />';
    document.getElementById("enlarge15token").innerHTML += '<img src="images/dragon_icon.png" height="60" width="65" alt="Dragon" style="position: relative; top: -20px;" />';
    document.getElementById("enlarge25token").innerHTML += '<img src="images/dragon_icon.png" height="60" width="65" alt="Dragon" style="position: relative; top: -20px;" />';
    document.getElementById("enlarge35token").innerHTML += '<img src="images/dragon_icon.png" height="60" width="65" alt="Dragon" style="position: relative; top: -20px;" />';
    document.getElementById("enlarge12token").innerHTML += '<img src="images/magic_icon.png" height="60" width="48" alt="Magic" style="position: relative; top: -20px;" />';
    document.getElementById("enlarge28token").innerHTML += '<img src="images/mystic_icon.png" height="60" width="78" alt="Mystic" style="position: relative; top: -20px;" />';
}

function utiltext() {
    return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Mystic Well" is owned, tribute is 4 times the fate roll.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Mystic Wells" are owned, tribute is 10 times the fate roll.';
}

function transtext() {
    return '<div style="font-size: 14px; line-height: 1.5;">Tribute<span style="float: right;">25 gold</span><br />If 2 Portals are claimed<span style="float: right;">50 gold</span><br />If 3 Portals are claimed<span style="float: right;">100 gold</span><br />If 4 Portals are claimed<span style="float: right;">200 gold</span></div>';
}

function luxurytax() {
    addAlert(player[turn].name + " was taxed 100 gold by the king’s decree.");
    player[turn].pay(100, 0);

    $("#landed").show().text("You have been levied 100 gold by the royal court.");
}

function citytax() {
    addAlert(player[turn].name + " has paid 200 gold in town tithe.");
    player[turn].pay(200, 0);

    $("#landed").show().text("You must pay 200 gold as a tithe to the town.");
}

var square = [];

square[0] = new Square("Village Gate", "Begin your epic quest. Collect 200 gold as you set out.", "#FFFFFF");
square[1] = new Square("Elven Glade", "$60", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("Oracle’s Shrine", "Seek guidance from the ancient spirits.", "#FFFFFF");
square[3] = new Square("Goblin Warrens", "$60", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("Town Tithe", "Pay 200 gold", "#FFFFFF");
square[5] = new Square("Mystic Portal", "$200", "#FFFFFF", 200, 1);
square[6] = new Square("Wizard's Tower", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Fate's Scroll", "The runes foretell your destiny.", "#FFFFFF");
square[8] = new Square("Dwarven Mine", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Royal Barracks", "$120", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);
square[10] = new Square("Keep Watch", "Stand guard at the border.", "#FFFFFF");
square[11] = new Square("King's Keep", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("Mystic Well", "$150", "#FFFFFF", 150, 2);
square[13] = new Square("Sage's Court", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("Royal Gardens", "$160", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);
square[15] = new Square("Dragon's Passage", "$200", "#FFFFFF", 200, 1);
square[16] = new Square("Knight's Road", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("Fate's Scroll", "The runes foretell your destiny.", "#FFFFFF");
square[18] = new Square("Witch's Hollow", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("Battlefield", "$200", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);
square[20] = new Square("Sanctuary", "A brief respite on your journey.", "#FFFFFF");
square[21] = new Square("Enchanted Crossing", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Fate's Scroll", "The runes foretell your destiny.", "#FFFFFF");
square[23] = new Square("Bandit's Ambush", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("Haunted Ruins", "$240", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("Shadow Portal", "$200", "#FFFFFF", 200, 1);
square[26] = new Square("Crystal Lake", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Moonlit Grove", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("Mystic Well", "$150", "#FFFFFF", 150, 2);
square[29] = new Square("Faerie Glen", "$280", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);
square[30] = new Square("Dungeon Descent", "Go directly to the dungeon. Do not pass Village Gate. Do not collect 200 gold.", "#FFFFFF");
square[31] = new Square("Sorcerer's Lane", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[32] = new Square("Mystic Alley", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[33] = new Square("Fate's Scroll", "The runes foretell your destiny.", "#FFFFFF");
square[34] = new Square("Elixir Avenue", "$320", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("Hidden Passage", "$200", "#FFFFFF", 200, 1);
square[36] = new Square("Fate's Scroll", "The runes foretell your destiny.", "#FFFFFF");
square[37] = new Square("Wizard's Sanctum", "$350", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("Royal Levy", "Pay 100 gold", "#FFFFFF");
square[39] = new Square("Dragon's Lair", "$400", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("A blessing from the gods: Keep this card to escape peril.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("You win a local tournament. Collect 10 gold.", function() { addamount(10, 'Community Chest');});
communityChestCards[2] = new Card("From the harvest festival, you receive 50 gold.", function() { addamount(50, 'Community Chest');});
communityChestCards[3] = new Card("A healing potion matures. Collect 100 gold.", function() { addamount(100, 'Community Chest');});
communityChestCards[4] = new Card("Tax refund from the guild. Collect 20 gold.", function() { addamount(20, 'Community Chest');});
communityChestCards[5] = new Card("The festival’s bounty: Receive 100 gold.", function() { addamount(100, 'Community Chest');});
communityChestCards[6] = new Card("Inheritance from a noble relative. Collect 100 gold.", function() { addamount(100, 'Community Chest');});
communityChestCards[7] = new Card("Consult a seer and receive 25 gold.", function() { addamount(25, 'Community Chest');});
communityChestCards[8] = new Card("Pay for healing at the temple: 100 gold.", function() { subtractamount(100, 'Community Chest');});
communityChestCards[9] = new Card("A merchant’s error favors you. Collect 200 gold.", function() { addamount(200, 'Community Chest');});
communityChestCards[10] = new Card("You must pay for a minor ritual: 50 gold.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[11] = new Card("The local apothecary charges a fee: 50 gold.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[12] = new Card("It’s your birthday! Collect 10 gold from every adventurer.", function() { collectfromeachplayer(10, 'Community Chest');});
communityChestCards[13] = new Card("Advance to the Village Gate (Collect 200 gold).", function() { advance(0);});
communityChestCards[14] = new Card("You are assessed for fortification repairs. Pay 40 gold per keep, 115 per fortress.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Caught by bandits—go directly to the dungeon!", function() { gotojail();});

chanceCards[0] = new Card("Escape from peril! This card may be kept until needed.", function(p) { p.chanceJailCard = true; updateOwned();});
chanceCards[1] = new Card("General repairs on all your holdings: Pay 25 gold per keep, 100 per fortress.", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("You are fined 15 gold for a magical mishap.", function() { subtractamount(15, 'Chance');});
chanceCards[3] = new Card("You are elected councilor—pay each adventurer 50 gold.", function() { payeachplayer(50, 'Chance');});
chanceCards[4] = new Card("Move back three spaces along the old trade route.", function() { gobackthreespaces();});
chanceCards[5] = new Card("Advance to the nearest Mystic Well. If unclaimed, you may purchase it; if claimed, roll the dice and pay 10 times the roll.", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("The treasury rewards you with 50 gold.", function() { addamount(50, 'Chance');});
chanceCards[7] = new Card("Advance to the nearest Dragon Passage. If unclaimed, you may claim it; if claimed, pay double the tribute.", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("Pay poor tax of 15 gold.", function() { subtractamount(15, 'Chance');});
chanceCards[9] = new Card("Take a trip to Mystic Portal. If you pass the Village Gate, collect 200 gold.", function() { advance(5);});
chanceCards[10] = new Card("Advance to Dragon's Lair.", function() { advance(39);});
chanceCards[11] = new Card("Advance to Haunted Ruins. If you pass the Village Gate, collect 200 gold.", function() { advance(24);});
chanceCards[12] = new Card("Your building fund matures. Collect 150 gold.", function() { addamount(150, 'Chance');});
chanceCards[13] = new Card("Advance to the nearest Dragon Passage. If unclaimed, you may claim it; if claimed, pay double the tribute.", function() { advanceToNearestRailroad();});
chanceCards[14] = new Card("Advance to King's Keep. If you pass the Village Gate, collect 200 gold.", function() { advance(11);});
chanceCards[15] = new Card("Caught by royal guards—go directly to the dungeon!", function() { gotojail();});
