// Utilitaire de navigation pour React Router
export const navigateToPage = (path: string) => {
  // Force la navigation en changeant l'URL
  window.location.href = path;
};

// Alternative avec scroll smooth vers le haut
export const navigateWithScroll = (path: string) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => {
    window.location.href = path;
  }, 300);
};

// Pour les liens externes
export const openExternalLink = (url: string, newTab = true) => {
  if (newTab) {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    window.location.href = url;
  }
}; 