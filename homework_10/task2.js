function showResult(fighter) {
    console.log('Fighter ', fighter.getName());
    console.log('- Combat stats: ', fighter.getCombatHistory());
    console.log('- Properties: ', fighter.getStats());

}

function fighter(properties) {
    var combatHistory = {
        wins: 0,
        loses: 0
    };

    var stats = {
        name: properties.name,
        attack: properties.attack,
        hp: properties.hp
    };

    return {
        getName: function () {
            return stats.name;
        },

        getStats: function () {
            return stats;
        },

        getCombatHistory: function () {
            return combatHistory;
        },

        block: function () {
            return Math.random() < 0.5;
        },

        fight: function (enemy) {
            if (enemy.block()) {
                console.log(enemy.getStats().name + ' blocked incoming damage from ' + stats.name);
                return false;
            } else {
                var damage = enemy.getStats().hp - stats.attack;
                if (damage > 0) {
                    enemy.getStats().hp = damage;
                } else {
                    combatHistory.wins++;
                    enemy.getCombatHistory().loses++;
                    enemy.getStats().hp = damage;
                }
                console.log(stats.name + ' dealt damage to ' + enemy.getStats().name);
                return true;
            }
        }
    };
}

var fighter1 = fighter({
    name: 'John',
    attack: 100,
    hp: 100
});
var fighter2 = fighter({
    name: 'Kayn',
    attack: 50,
    hp: 300
});
var fighter3 = fighter({
    name: 'Bill',
    attack: 40,
    hp: 100
});

fighter1.fight(fighter2); // true, fighter 1 make damage to fighter 2
fighter1.fight(fighter3); // true, fighter 1 make damage to fighter 3

// /**
//  * Fighter John
//  * - Combat stats: { wins: 1, loses: 0 }
//  * - Properties: { name: 'John', attack: 100, hp: 100 }
//  */
showResult(fighter1);

// /** Fighter Kayn
//  * - Combat stats: { wins: 0, loses: 0 }
//  * - Properties: { name: 'Kayn', attack: 50, hp: 200 }
//  */
showResult(fighter2);

// /**
//  * Fighter Bill
//  * - Combat stats: { wins: 0, loses: 1 }
//  * - Properties: { name: 'Bill', attack: 40, hp: 0 }
//  */
showResult(fighter3);