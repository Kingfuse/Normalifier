'use strict'

const BLOCKME = [
		4850,     // Sneaky - You've found a blind spot in their defenses.
		48732,    // Brain Freeze - You ate ice-cold food too quickly.
		48733,    // Summer Wine - Ramsay's strong wine. The more of it you consume, the tipsier you get.
		48734,    // Tipsy - You're tipsy. Your vision is blurry and your senses are dull.
		48735,    // Intoxicated - You're dizzy. Your vision is blurry and your senses are dull.
		48736,    // Inebriated - You're very dizzy. Your vision is blurry and your senses are dull.
		48737,    // Drunk - You're seriously dizzy.
		48738,    // Wasted - If you drink any more, you will hurt yourself.
		48739,    // Passed Out - You are beyond wasted and unable to move until you sober up.
		70251,    // Freeholds Root Beer - Lightens your mood for a few seconds, but the kick might make you feel very woozy.
		70252,    // Shevranberry Wine - Lightens your mood for a few seconds, but the kick might make you feel very woozy.
		70253,    // Sky Lotus Drink - Makes you resistant to knockdown and stagger for a few seconds, but you might feel very dizzy.
		70254,    // Lein's Dark Root Beer - Increases Attack Speed by x for a few seconds, but the kick might make you feel very woozy.
		70255,    // Digory's Honey Moongourd Drink - Increases Endurance by x for a few seconds, but you might feel very woozy.
		//101300, // Traverse Cut
		776021,   // Flash Blindness - You can't see anything.
		905433,   // Noxious Plume - Inhaled poisonous fumes.
		47660800, // Darkness - Makes it hard to see anything around you. Darkness cannot be removed.
		47660900, // White Flash - Makes it hard to see things around you. White Flash cannot be removed.
		47661000, // Deep Darkness - Makes it hard to see anything around you. Deep Darkness cannot be removed.
		47662300, // Darkness I - You are gradually becoming blind.
		99006000, // Flash Grenade - A blinding flash makes it hard to see things around you! White Flashes cannot be removed.
		99007200, // Flash Grenade - Makes it hard to see things around you. White Flash cannot be removed.
		999001011 // Blindfolded - Your eyes are covered while you play the blind melon bash mini-game.
	],
	CRYSTALS = [
		10306, // Forcefulness VII
		10316, // Forcefulness VII
		10906, // Infusion VII
		10916, // Infusion VII
		11006, // Infusion VII
		11016, // Infusion VII
		12001, // Infusion VII
		12003, // Infusion VII
		12120, // Infusion VII
		12130  // Infusion VII
	]

module.exports = function Normalifier(mod) {
	
	let enabled = true,
		log = false,
		niceName = mod.proxyAuthor !== 'caali' ? '[Norm] ' : ''
	
	mod.hook('S_ABNORMALITY_BEGIN', 4, event => {
		if(mod.game.me.is(event.target) && log) console.log('[Norm] Abnormality: ' + event.id + ' Duration: ' + event.duration + ' Stacks: ' + event.stacks)
		if(enabled && BLOCKME.indexOf(event.id) > -1) return false
	})
	
	mod.hook('S_ABNORMALITY_REFRESH', 2, event => {
		if(enabled && CRYSTALS.indexOf(event.id) > -1) return false
	})
	
	// ################ //
	// ### Commands ### //
	// ################ //

	mod.command.add('norm', (param) => {
		if (param == null) {
			enabled = !enabled
			mod.command.message(niceName + 'Normalifier ' + (enabled ? '<font color="#56B4E9">enabled</font>' : '<font color="#E69F00">disabled</font>'))
			console.log('Normalifier ' + (enabled ? 'enabled' : 'disabled'))
		}
		else if (param == 'log') {
			log = !log
			mod.command.message(niceName + 'Logging ' + (log ? '<font color="#56B4E9">enabled</font>' : '<font color="#E69F00">disabled</font>'))
			console.log('[Norm] Logging ' + (log ? 'enabled' : 'disabled'))
		}
		else mod.command.message('Commands:\n'
			+ ' "norm" (enable/disable Normalifier),\n'
			+ ' "norm log" (enable/disable logging)'
			)
	})
}
