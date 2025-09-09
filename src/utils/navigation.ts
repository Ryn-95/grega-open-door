// Utilitaire de navigation pour React Router
export const navigateToPage = (path: string) => {
  // Utilise l'API History moderne pour la navigation SPA
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

// Alternative avec scroll smooth vers le haut
export const navigateWithScroll = (path: string) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
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