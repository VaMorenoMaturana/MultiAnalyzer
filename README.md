# MultiAnalyzer — sitio estático

Landing page en HTML, CSS y JavaScript, preparada para GitHub Pages o Render Static Site.

## Archivos
- `index.html`: contenido y estructura de la página.
- `styles.css`: diseño responsive.
- `script.js`: interacciones ligeras.
- `assets/multianalyzer-mark.svg`: identidad visual original de MultiAnalyzer.

## Antes de publicar
1. Sube los archivos del sitio a la raíz de tu repositorio.
2. Publica el paquete de la aplicación con el nombre exacto `MultiAnalyzer-macOS.zip` en la misma carpeta que `index.html`, o cambia el enlace del botón para apuntar a la URL de tu publicación.
3. Comprueba que el archivo distribuido corresponde a la versión final y que las funciones descritas están disponibles.
4. Verifica los requisitos de macOS y la compatibilidad con los instrumentos que deseas utilizar.

## Publicar en Render
1. En Render, selecciona **New + → Static Site**.
2. Conecta el repositorio.
3. Configura **Build Command** vacío y **Publish Directory** como `.`.
4. Pulsa **Create Static Site**.

Cada `git push` a la rama conectada activará un nuevo despliegue.

## Subir desde Terminal (opcional)
```bash
git init
git add .
git commit -m "Publish MultiAnalyzer website"
git branch -M main
git remote add origin https://github.com/USUARIO/REPOSITORIO.git
git push -u origin main
```
Si Git ya estaba configurado, no repitas `git init`; configura el remote correspondiente.

## Nota sobre el software
MultiAnalyzer es una herramienta independiente de adquisición, registro y análisis de mediciones. La compatibilidad depende del dispositivo, la interfaz y el protocolo de comunicación.
