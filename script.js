// Interacciones pequeñas y progresivas; el sitio funciona también sin JavaScript.
document.addEventListener("DOMContentLoaded", () => {
  const download = document.getElementById("download-button");
  if (download) {
    download.addEventListener("click", () => {
      // El enlace de GitHub Releases debe configurarse antes de publicar.
      if (download.href.includes("USUARIO/REPOSITORIO")) {
        alert("Antes de publicar, reemplaza el enlace de ejemplo por la URL de Releases de tu repositorio de GitHub.");
      }
    });
  }
});
