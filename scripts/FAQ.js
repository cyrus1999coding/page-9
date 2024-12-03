function toggleFAQ(contentId, iconId) {
    const content = document.getElementById(contentId);
    const icon = document.getElementById(iconId);
    
    // Toggle visibility
    content.classList.toggle('hidden');
    
    // Rotate icon based on visibility
    if (content.classList.contains('hidden')) {
      icon.classList.remove('rotate-45'); // Reset rotation
      icon.src = './public/svg/FAQ/plus.svg'; // Show plus icon
    } else {
      icon.classList.add('rotate-45'); // Rotate icon
      icon.src = './public/svg/FAQ/plus.svg'; // Show minus icon (you need to have this icon)
    }
  }