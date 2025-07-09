# heynori! Landing Page

Landing page moderna y completa para heynori!, la IA que realmente entiende cómo trabaja tu equipo.

## 🌍 Idiomas Disponibles

- **Español**: [index.html](./index.html) - Versión principal
- **English**: [en/index.html](./en/index.html) - English version

## 📁 Estructura del Proyecto

```
heynori-web/
├── assets/                          # Recursos estáticos
│   └── images/                      # Imágenes del proyecto
│       ├── logos/                   # Logos en diferentes variantes
│       │   ├── IS5uYOSPH6JapiCuAutslC6X70U.avif     # Logo principal
│       │   ├── IS5uYOSPH6JapiCuAutslC6X70U.avif # Logo para fondos oscuros
│       │   └── IS5uYOSPH6JapiCuAutslC6X70U.avif # Logo para fondos claros
│       ├── IS5uYOSPH6JapiCuAutslC6X70U.avif              # Icono del sitio
│       └── IS5uYOSPH6JapiCuAutslC6X70U.avif # Imagen principal
├── docs/                            # Documentación del proyecto
│   ├── deployment-readme.md         # Guía de deployment
│   ├── estrategia-marketing.md      # Estrategia de marketing
│   └── landing-copy.md             # Copy original completo
├── en/                             # Versión en inglés
│   └── index.html                  # Página principal en inglés
├── index.html                      # Página principal en español
├── styles.css                      # Estilos CSS modernos
├── script.js                       # JavaScript ES6+ interactivo
└── README.md                       # Este archivo
```

## ✨ Características Implementadas

### 🎨 Diseño y UX
- **Responsive Design**: Perfecto en móviles, tablets y desktop
- **Paleta profesional**: Basada en la identidad de heynori!
- **Animaciones fluidas**: Scroll effects, hover states, transiciones
- **Tipografía moderna**: Inter font optimizada para legibilidad
- **Accesibilidad WCAG 2.1**: Navegación por teclado, ARIA labels

### 🔧 Tecnologías Modernas
- **HTML5 semántico**: Estructura optimizada para SEO
- **CSS Grid/Flexbox**: Layout responsive moderno
- **CSS Custom Properties**: Variables para mantenimiento fácil
- **JavaScript ES6+**: Classes, arrow functions, async/await
- **Chart.js 4.4.0**: Gráficos modernos y animados
- **Font Awesome 6.5**: Iconografía profesional

### 📱 Funcionalidades Interactivas
- **Formulario de contacto**: Completamente funcional con Formspree
  - ✅ Envío real de emails
  - ✅ Validación en tiempo real
  - ✅ Protección antispam integrada
  - ✅ Soporte multiidioma
  - ✅ Funciona perfectamente en GitHub Pages
- **Sistema de notificaciones**: Toast notifications
- **Lazy loading**: Optimización de performance
- **Easter eggs**: Konami code, vibración, confetti
- **Modales**: Sistema completo con focus trapping

### 🔍 SEO y Performance
- **Meta tags completos**: Open Graph, Twitter Cards
- **JSON-LD**: Structured data para buscadores
- **Canonical URLs**: URLs únicas por idioma
- **Lazy loading**: Imágenes optimizadas
- **Performance**: Assets minificados y optimizados

## 📧 Formulario de Contacto Funcional

El formulario está **completamente configurado** para funcionar en GitHub Pages usando **Formspree**:

### ✅ Características del Formulario
- **Envío real**: Los datos se envían por email automáticamente
- **Validación cliente**: JavaScript valida antes de enviar
- **Protección antispam**: Formspree incluye filtros automáticos
- **Multiidioma**: Mensajes adaptan al idioma de la página
- **Experiencia fluida**: Sin redirecciones, notificaciones in-page
- **Fallback**: Si falla JS, funciona con envío HTML estándar

### 🔧 Configuración Técnica
```html
<!-- Formulario configurado con Formspree -->
<form action="https://formspree.io/f/xgvejgpv" method="POST">
  <!-- Campos hidden para mejores emails -->
  <input type="hidden" name="_subject" value="Nueva solicitud de demo - heynori!">
  <input type="hidden" name="_next" value="...?submitted=true">
  <input type="hidden" name="_language" value="es">
</form>
```

### 📬 Qué Incluye Cada Email
- **Asunto**: "Nueva solicitud de demo - heynori!" / "New demo request - heynori!"
- **Idioma**: Detectado automáticamente
- **Datos del usuario**: Nombre, empresa, email, tamaño equipo
- **Contexto**: Qué quiere optimizar, desafío principal
- **Origen**: Español o inglés según la versión

### 💡 Para Personalizar
Si quieres usar tu propio Formspree:
1. Regístrate en [formspree.io](https://formspree.io)
2. Crea un nuevo formulario 
3. Reemplaza `xgvejgpv` en ambos archivos HTML
4. ¡Listo! Los emails llegarán a tu correo

## 🚀 Deployment

### GitHub Pages
```bash
# La estructura está lista para GitHub Pages
# Solo habilita Pages en la configuración del repositorio
# Branch: main, Folder: / (root)
```

### URLs de acceso:
- **Español**: `https://tu-usuario.github.io/heynori-web/`
- **English**: `https://tu-usuario.github.io/heynori-web/en/`

## 🛠️ Desarrollo Local

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/heynori-web.git
   cd heynori-web
   ```

2. **Servir localmente** (opcional):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (si tienes live-server)
   npx live-server
   ```

3. **Acceder a las versiones**:
   - Español: `http://localhost:8000/`
   - English: `http://localhost:8000/en/`

## 📝 Personalización

### Cambiar colores
Modifica las variables CSS en `styles.css`:
```css
:root {
  --primary-beige: #F4E6D1;
  --primary-black: #1a1a1a;
  --accent-red: #E53E3E;
  --accent-pink: #ED64A6;
}
```

### Actualizar contenido
- **Español**: Edita `index.html`
- **English**: Edita `en/index.html`
- **Assets**: Reemplaza archivos en `assets/`

### Agregar idiomas
1. Crear carpeta: `mkdir nuevo-idioma`
2. Copiar HTML: `copy en/index.html nuevo-idioma/`
3. Traducir contenido
4. Actualizar rutas relativas (`../`)

## 📊 Métricas y Analytics

Para implementar tracking, actualiza en `script.js`:

```javascript
// Google Analytics
trackEvent(eventName, properties = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, properties);
  }
}
```

## 🔒 Seguridad

- **CSP**: Content Security Policy recomendado
- **HTTPS**: Obligatorio para todas las funcionalidades
- **Integrity checks**: CDNs con hashes de verificación
- **No inline scripts**: JavaScript separado

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una branch de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🎯 Próximos Pasos

- [ ] Implementar más idiomas (FR, DE, PT)
- [ ] Añadir más integraciones visuales
- [ ] A/B testing de elementos críticos
- [ ] Implementar PWA capabilities
- [ ] Añadir blog/news section

---

**¡Tu landing page multiidioma está lista para conquistar mercados globales! 🌍🚀**
