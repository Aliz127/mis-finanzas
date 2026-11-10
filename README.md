# Mis finanzas

App web instalable (PWA) + instaladores de escritorio (Tauri) + APK de Android (Capacitor), con sincronización por Firebase.

## 1. Firebase (una sola vez)
1. Authentication > Método de acceso: activa **Correo electrónico/contraseña** (los instaladores no pueden usar el botón de Google).
2. Firestore Database > Reglas: pega el contenido de `firestore.rules` y publica.
3. Cuando tengas la URL de la web (paso 3), agrega `TU-USUARIO.github.io` en Authentication > Configuración > Dominios autorizados.

## 2. Subir el proyecto a GitHub
1. Crea un repositorio **público** en github.com (no contiene tus datos financieros, solo el código y la configuración web de Firebase).
2. Sube el contenido de esta carpeta (en la rama `main`), incluida la carpeta oculta `.github`.

## 3. Publicar y generar instaladores
1. Settings > Pages > Source: **GitHub Actions**.
2. Pestaña Actions > build > Run workflow. Tarda unos 15 a 25 minutos.
3. La web queda en `https://TU-USUARIO.github.io/NOMBRE-REPO/`.
4. Los instaladores aparecen al final de la ejecución, en "Artifacts": `escritorio-windows-latest` (.msi/.exe), `escritorio-macos-latest` (.dmg), `escritorio-ubuntu-22.04` (.deb/.AppImage) y `android-apk` (.apk).

## 4. Instalar
- **Web/PWA:** abre la URL y usa "Instalar app" (Chrome/Edge) o "Añadir a pantalla de inicio" (iPhone, desde Safari).
- **Windows:** ejecuta el instalador; si aparece SmartScreen, "Más información" > "Ejecutar de todas formas".
- **Mac:** abre el .dmg; la primera vez, clic derecho > Abrir.
- **Android:** copia el .apk al teléfono y ábrelo; permite instalar de orígenes desconocidos.

## 5. Primer uso
Crea tu cuenta con correo y contraseña (la misma en todos los dispositivos). Luego usa "Importar respaldo JSON" (al final de la pantalla) con `respaldo-finanzas.json` para cargar tus CDT y deuda. El PIN solo bloquea la pantalla.
