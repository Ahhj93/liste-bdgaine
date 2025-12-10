// Gestion du clic sur le blason Présentation
document.addEventListener('DOMContentLoaded', function() {
	// Fonction générique pour gérer le toggle des blasons
	function setupBlasonToggle(blasonId, containerId, videoId) {
		const blason = document.getElementById(blasonId);
		const container = document.getElementById(containerId);
		const video = document.getElementById(videoId);
		
		let isVideoVisible = false;
		
		blason.addEventListener('click', function() {
			if (!isVideoVisible) {
				container.classList.add('active');
				video.classList.add('active');
				isVideoVisible = true;
			} else {
				container.classList.remove('active');
				video.classList.remove('active');
				isVideoVisible = false;
			}
		});
	}
	
	// Configuration pour chaque blason
	setupBlasonToggle('blason-presentation', 'presentation-container', 'video-presentation');
	setupBlasonToggle('blason-membres', 'membres-container', 'video-membres');
	setupBlasonToggle('blason-choree', 'choree-container', 'video-choree');
	
	// Gestion du dropdown "Nous suivre"
	const nousSuivreBtn = document.getElementById('nous-suivre-btn');
	const socialDropdown = document.getElementById('social-dropdown');
	let isSocialVisible = false;
	
	nousSuivreBtn.addEventListener('click', function(e) {
		e.preventDefault();
		if (!isSocialVisible) {
			socialDropdown.classList.add('active');
			isSocialVisible = true;
		} else {
			socialDropdown.classList.remove('active');
			isSocialVisible = false;
		}
	});
	
	// Fermer le dropdown si on clique ailleurs
	document.addEventListener('click', function(e) {
		if (!nousSuivreBtn.contains(e.target) && !socialDropdown.contains(e.target)) {
			socialDropdown.classList.remove('active');
			isSocialVisible = false;
		}
	});
});
