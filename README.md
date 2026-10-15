# Fluke 289 Analyzer — sitio estático

Landing page en HTML, CSS y JavaScript, preparada para GitHub + Render Static Site.

## Archivos
- `index.html`: contenido y estructura.
- `styles.css`: diseño responsive.
- `script.js`: aviso para enlace de descarga aún no configurado.
- `assets/fluke289_logo.png`: logotipo.

## Antes de publicar
1. Crea un repositorio público en GitHub, por ejemplo `fluke289-analyzer-web`.
2. Edita `index.html` y reemplaza:
   `https://github.com/USUARIO/REPOSITORIO/releases/latest`
   por la URL real de Releases de tu repositorio.
3. Publica una release en GitHub y adjunta el archivo `.zip` o `.dmg` de la aplicación macOS. No publiques un enlace de descarga hasta que el archivo esté disponible y probado.
4. Revisa que las funciones y formatos de exportación descritos coincidan con la versión que vas a distribuir.

## Publicar en Render
1. Sube estos archivos a la raíz de un repositorio de GitHub.
2. En Render, selecciona **New + → Static Site**.
3. Conecta el repositorio.
4. Configura:
   - **Build Command:** dejar vacío
   - **Publish Directory:** `.`
5. Pulsa **Create Static Site**.

Cada `git push` a la rama conectada activará un nuevo despliegue.

## Subir desde Terminal (opcional)
Desde la carpeta del sitio:
```bash
git init
git add .
git commit -m "Create Fluke 289 Analyzer landing page"
git branch -M main
git remote add origin https://github.com/USUARIO/fluke289-analyzer-web.git
git push -u origin main
```
Reemplaza `USUARIO` por tu usuario real de GitHub. Si Git ya estaba configurado, no repitas `git init`; configura el remote correspondiente.

## Nota sobre la aplicación
La web describe un proyecto independiente para trabajar con Fluke 289 desde macOS. No es un producto oficial de Fluke ni está afiliada, patrocinada o certificada por Fluke. Verifica la compatibilidad, las notas de versión y el paquete antes de distribuirlo.
