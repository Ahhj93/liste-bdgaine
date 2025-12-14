// Gestion du clic sur les blasons (une seule vidéo à la fois)
document.addEventListener('DOMContentLoaded', function() {
	const blasonConfigs = [
		{ blasonId: 'blason-presentation', containerId: 'presentation-container', videoId: 'video-presentation' },
		{ blasonId: 'blason-membres', containerId: 'membres-container', videoId: 'members-cta' },
		{ blasonId: 'blason-choree', containerId: 'choree-container', videoId: 'video-choree' }
	];

	const blasonItems = blasonConfigs
		.map(({ blasonId, containerId, videoId }) => ({
			blason: document.getElementById(blasonId),
			container: document.getElementById(containerId),
			video: document.getElementById(videoId)
		}))
		.filter(({ blason, container, video }) => blason && container && video);

	function hideAllVideos() {
		blasonItems.forEach(({ container, video }) => {
			container.classList.remove('active');
			video.classList.remove('active');
		});
	}

	blasonItems.forEach(({ blason, container, video }) => {
		blason.addEventListener('click', function() {
			const isActive = container.classList.contains('active');
			hideAllVideos();
			if (!isActive) {
				container.classList.add('active');
				video.classList.add('active');
			}
		});
	});

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

	// Modal Membres
	const membersCtaBtn = document.querySelector('.members-cta-btn');
	const membersModal = document.getElementById('members-modal');

	function openMembersModal() {
		if (membersModal) {
			membersModal.classList.add('show');
			membersModal.setAttribute('aria-hidden', 'false');
			document.body.style.overflow = 'hidden';
		}
	}

	function closeMembersModal() {
		if (membersModal) {
			membersModal.classList.remove('show');
			membersModal.setAttribute('aria-hidden', 'true');
			document.body.style.overflow = '';
		}
	}

	if (membersCtaBtn) {
		membersCtaBtn.addEventListener('click', openMembersModal);
	}

	if (membersModal) {
		membersModal.addEventListener('click', function(e) {
			const target = e.target;
			if (target && target.getAttribute('data-close') === 'true') {
				closeMembersModal();
			}
		});
		document.addEventListener('keydown', function(e) {
			if (e.key === 'Escape') {
				closeMembersModal();
			}
		});
	}
});
