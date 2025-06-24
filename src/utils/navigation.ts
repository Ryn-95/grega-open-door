// Utilitaire de navigation pour éviter les problèmes de liens après navigation
export const navigateToPage = (path: string) => {
  // Forcer le rechargement de la page pour éviter les problèmes de React Router
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