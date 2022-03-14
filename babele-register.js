Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'bitd-ru',
			lang: 'ru',
			dir: 'compendium'
		}); 
	}
});