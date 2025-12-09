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
});
