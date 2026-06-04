<div align="center">

# 🌴 RioRise Docs

**El recurso no oficial más completo del universo Roleplay de Rio Rise.**
Normas, reglamentos, sanciones y procedimientos — todo en un solo lugar, sin necesidad de Discord.

[![Licencia](https://img.shields.io/github/license/fgmcl-games/RioRise-Docs?style=for-the-badge&color=e8c84a&labelColor=0d0f14)](LICENSE)
[![Último commit](https://img.shields.io/github/last-commit/fgmcl-games/RioRise-Docs?style=for-the-badge&color=50c8a0&labelColor=0d0f14)](https://github.com/fgmcl-games/RioRise-Docs/commits/main)
[![Tamaño del repo](https://img.shields.io/github/repo-size/fgmcl-games/RioRise-Docs?style=for-the-badge&color=4a90e2&labelColor=0d0f14)](https://github.com/fgmcl-games/RioRise-Docs)

<br/>

🌐 **[Acceder al sitio →](https://fgmcl-games.github.io/RioRise-Docs/)**

</div>

---

## ¿Qué es RioRise Docs?

RioRise Docs es una plataforma de documentación web creada por la comunidad para centralizar todo el reglamento del servidor de Roleplay Rio Rise. El proyecto nació de la necesidad de tener un punto de referencia claro, accesible y permanente que no dependa de saber navegar Discord.

Cualquier jugador puede consultar normas, entender sanciones, conocer los reglamentos de cada organización y saber cómo abrir un ticket de soporte — desde cualquier dispositivo, en cualquier momento.

---

## ✨ Características

| Categoría | Descripción |
|---|---|
| 📚 Reglamento completo | Reglas generales, Biblia RP, sanciones y procedimientos |
| 🏛️ Organizaciones | PF, Ejército, Hospital, Facciones, Rio News |
| ⚔️ Acciones especiales | Secuestros, Vehículo Blindado, Invasión y Pacificación |
| 🔍 Búsqueda integrada | Filtra por código de artículo, título o contenido |
| 🎫 Guía de soporte | Cómo abrir tickets con las preguntas requeridas por categoría |
| 📱 Diseño responsivo | Adaptado para móvil, tablet y escritorio |
| ⚡ Sin dependencias | Cero frameworks, cero instalaciones. Abre y listo |
| 🌙 Tema oscuro | Interfaz moderna, limpia y de bajo consumo visual |

---

## 📁 Estructura del Proyecto

```
RioRise-Docs/
│
├── index.html      # Estructura HTML del sitio
├── styles.css      # Sistema de diseño y estilos visuales
├── script.js       # Navegación, búsqueda y renderizado dinámico
├── data.js         # Base de datos de reglas, artículos y contenido
├── LICENSE         # Apache License 2.0
└── README.md       # Este archivo
```

---

## ⚙️ Arquitectura

Todo el contenido vive en `data.js` como objetos JavaScript estructurados. El sitio no tiene backend ni base de datos — todo se genera en el navegador de forma dinámica.

```
data.js  →  script.js  →  index.html
[Datos]     [Lógica]      [Interfaz]
```

Este modelo hace que agregar nuevas secciones sea tan simple como añadir un objeto al archivo de datos. Sin tocar HTML, sin recompilar, sin desplegar servicios.

**Lo que facilita esta arquitectura:**

- Actualizar sanciones o artículos en segundos
- Agregar nuevas organizaciones sin tocar la interfaz
- Mantener la búsqueda siempre sincronizada con el contenido
- Escalar el proyecto sin aumentar la complejidad

---

## 🚀 Desarrollo Local

**1. Clona el repositorio**
```bash
git clone https://github.com/fgmcl-games/RioRise-Docs.git
cd RioRise-Docs
```

**2. Inicia un servidor local**

Con Python:
```bash
python -m http.server 8000
```

Con Node.js:
```bash
npx serve .
```

**3. Abre en tu navegador**
```
http://localhost:8000
```

> También puedes abrir `index.html` directamente en el navegador para uso básico, aunque algunas funciones pueden requerir servidor local.

---

## 🤝 Cómo Contribuir

Las contribuciones son bienvenidas y valoradas. El proyecto mejora con cada aporte de la comunidad.

**¿Encontraste algo que mejorar?**

- 📝 Errores ortográficos o de redacción
- ⚖️ Información de sanciones desactualizada
- 🔗 Artículos faltantes o incompletos
- 🐛 Errores de navegación o búsqueda
- 🎨 Mejoras visuales o de accesibilidad
- 🌐 Contenido nuevo del servidor oficial

**¿Cómo participar?**

1. Haz un fork del repositorio
2. Crea una rama descriptiva (`feature/agregar-reglamento-eb`)
3. Realiza tus cambios con commits claros
4. Abre un Pull Request explicando qué cambiaste y por qué

También puedes abrir un **Issue** si encuentras algo incorrecto y no sabes cómo corregirlo.

---

## 🌟 Únete al Proyecto

RioRise Docs es un proyecto de comunidad abierto a colaboradores de cualquier perfil.

Si eres desarrollador web, diseñador UI/UX, redactor de documentación, moderador con experiencia en servidores de RP, o simplemente alguien con ganas de aportar, hay espacio para ti aquí.

📧 Contacto directo: **fgmclgames@gmail.com**

---

## 📄 Licencia

```
Copyright © 2026 FGMCL Games

Licensed under the Apache License, Version 2.0.
http://www.apache.org/licenses/LICENSE-2.0
```

**En resumen, esta licencia te permite:**

- ✅ Usar el código en proyectos personales o comerciales
- ✅ Modificar el código fuente libremente
- ✅ Distribuir copias o versiones modificadas
- ✅ Integrar partes del proyecto en otros desarrollos

**Con la condición de:**

- 📌 Conservar el aviso de copyright original
- 📌 Incluir una copia de la licencia Apache 2.0
- 📌 Indicar claramente cualquier modificación al código original
- 📌 No usar el nombre de los autores para promocionar derivados sin autorización

El proyecto se proporciona **"tal cual"**, sin garantías de ningún tipo.

---

## ⚠️ Descargo de Responsabilidad

RioRise Docs es un recurso independiente creado por la comunidad. **No está afiliado oficialmente a Rio Rise ni a sus desarrolladores.** Todo el contenido publicado tiene fines informativos y busca facilitar el acceso a las normas del servidor.

Las marcas, nombres, logotipos y cualquier material oficial perteneciente a Rio Rise siguen siendo propiedad exclusiva de sus autores y titulares.

El contenido puede actualizarse conforme cambien las reglas oficiales del servidor.

---

<div align="center">

Hecho con ❤️ por la comunidad · **FGMCL Games** · 2026

</div>
