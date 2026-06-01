const SITE_DATA = {
  meta: {
    title: "RioRise Docs",
    disclaimer: "Este sitio es un recurso no oficial creado por la comunidad. No estamos afiliados ni representamos a Rio Rise ni a sus desarrolladores. El contenido aquí publicado es únicamente para facilitar el acceso a las normas del servidor. No me hago responsable del mal uso de esta información.",
    version: "1.0.0"
  },

  intro: {
    title: "RioRise Docs",
    subtitle: "El recurso no oficial de la comunidad",
    description: "Rio Rise es el videojuego móvil de mundo abierto y Roleplay definitivo inspirado en la cultura y la energía de Brasil. Diseñado para ofrecer una simulación de vida libre y realista, miles de jugadores se conectan simultáneamente en un universo donde cada decisión define tu destino. Desde las vibrantes calles de las favelas hasta las zonas metropolitanas más lujosas, el mapa es tu próximo escenario de acción.",
    features: [
      { icon: "🌐", title: "Elige Tu Camino", desc: "Sé oficial de policía, paramédico, conductor, o elige el crimen organizado con tu facción." },
      { icon: "🚗", title: "Personalización", desc: "Compra, colecciona y modifica autos. Participa en subastas y adquiere propiedades de lujo." },
      { icon: "🌍", title: "Comunidad Global", desc: "Crea alianzas, forma bandas o compite en eventos masivos en tiempo real." },
      { icon: "📲", title: "Juega Donde Sea", desc: "Disponible para móviles con servidores optimizados para Latinoamérica." }
    ]
  },

  sections: [
    {
      id: "politica-cuentas",
      title: "1. Política de Cuentas",
      icon: "👤",
      description: "Reglas relacionadas con el uso de la cuenta, la creación de múltiples cuentas, el uso compartido, la seguridad y las sanciones por infracciones.",
      articles: [
        { id: "1.1", title: "Aceptación de Reglas", content: "Al crear una cuenta en nuestro proyecto, el jugador declara automáticamente haber leído, comprendido y aceptado todas las reglas y directrices establecidas por los servidores de RioRise. Esto incluye las reglas generales, las reglas específicas del rol, las sanciones, la conducta prohibida y cualquier actualización futura comunicada por la administración.", sanction: null },
        { id: "1.2", title: "Responsabilidad de la Cuenta", content: "La administración del servidor no se hace responsable de las cuentas de los jugadores, incluyendo todos los objetos, valores, propiedades o activos que contengan. Cualquier pérdida resultante de pirateo, fraude, uso compartido de cuentas, negligencia o cualquier fallo de seguridad es responsabilidad exclusiva del jugador.", sanction: null },
        { id: "1.3", title: "Transferencia de Cuentas", content: "La transferencia, venta, intercambio o préstamo de cuentas de juego a terceros está estrictamente prohibido.", sanction: "Baneo permanente" },
        { id: "1.4", title: "Apodos Inapropiados", content: "Está prohibido usar nombres con connotaciones sexuales o que glorifiquen el crimen. Se toleran: 'Th', 'Vulgo', 'Mnr' o apodos conocidos, siempre que sean apropiados.", sanction: "Baneo de 7 días" },
        { id: "1.5", title: "Lenguaje en Apodos", content: "Está estrictamente prohibido usar apodos que contengan palabrotas, insultos, términos ofensivos (incluidas versiones disfrazadas o abreviadas) o cualquier lenguaje inapropiado.", sanction: "Baneo de 7 días" },
        { id: "1.6", title: "Suplantación de Identidad", content: "Está prohibido crear un apodo repetitivo, muy similar o que imite el apodo de otros jugadores, administradores o cualquier miembro del equipo, ya sea en escritura, pronunciación o formato.", sanction: "Advertencia + cambio de apodo obligatorio. Prohibición permanente en casos de suplantación intencional." },
        { id: "1.17", title: "Mal uso de Atajos", content: "Se prohíbe usar vehículos (automóviles o motocicletas) para circular por campos, aceras, zonas verdes o terrenos irregulares con el objetivo de acortar rutas u obtener ventaja injusta. No se tolerará durante ningún tipo de acción que involucre organizaciones gubernamentales o criminales.", sanction: "Detención de 15 minutos" },
        { id: "1.18", title: "Abuso de Poder Policial", content: "Está prohibido abusar del poder policial, caracterizado por el uso indebido de autoridad fuera de las normas del rol o del servidor.", sanction: "60 minutos de detención | Suspensión de 20 a 30 días" },
        { id: "1.19", title: "DM contra Médicos", content: "Se prohíbe el combate a muerte (DM) contra médicos en servicio.", sanction: "Suspensión de 20 días / Bloqueo de IP" },
        { id: "1.20", title: "Suspensión con Soporte", content: "Los administradores tienen plena autoridad para aplicar suspensiones con la instrucción 'CONTACTAR CON SOPORTE' cuando existe una queja formal, cuando el jugador no es visible y hay pruebas de irregularidades, o cuando es necesario remitir el caso para análisis completo.", sanction: "Baneo de 365 días" }
      ]
    },
    {
      id: "terminologia-sanciones",
      title: "2. Terminología de Sanciones",
      icon: "⚖️",
      description: "Explicación de los tipos de sanciones aplicadas en el servidor.",
      articles: [
        { id: "2.1", title: "Advertencia Verbal", content: "Aviso directo de un administrador para alertar al jugador sobre una conducta inapropiada. Su propósito es guiar al jugador para que corrija su comportamiento antes de aplicar medidas más severas.", sanction: null },
        { id: "2.2", title: "Expulsión (Kick)", content: "Desconexión inmediata del jugador del servidor. Se utiliza para interrumpir conductas inapropiadas o aplicar correcciones rápidas. No es una medida definitiva. Causas: interrupción en el HP, uso indebido del VOIP, interrumpir interacciones de rol, faltas leves de respeto, estar AFK en lugares que afecten el servidor.", sanction: null },
        { id: "2.3", title: "Silencio (Mute)", content: "Bloquea el acceso del jugador al chat de texto durante un período determinado. Se aplica en casos de spam, insultos, comportamiento tóxico o violación de las reglas de comunicación.", sanction: null },
        { id: "2.4", title: "Prisión (Jail)", content: "Aísla al jugador en una ubicación específica del servidor durante un tiempo determinado. Se utiliza para castigar infracciones más graves o reiteradas.", sanction: null },
        { id: "2.5", title: "Advertencia (Warn)", content: "Notificación formal que registra una infracción grave. Al recibirla, el jugador es expulsado automáticamente de su facción y no puede unirse a ninguna durante 24 horas. Al acumular 3 advertencias, la cuenta es bloqueada automáticamente por 10 días.", sanction: null },
        { id: "2.6", title: "Baneo (Ban)", content: "Bloqueo de la cuenta del jugador durante un período determinado o permanente. El bloqueo de IP impide el acceso al servidor independientemente de la cuenta utilizada, aplicado en casos de hackeo, fraude o abuso severo.", sanction: null },
        { id: "2.7", title: "Baneo Permanente (PermaBan)", content: "Bloqueo definitivo de la cuenta. Se aplica únicamente en casos extremadamente graves o con reincidencia severa en infracciones intolerables.", sanction: null },
        { id: "2.8", title: "Silencio por Reporte", content: "Bloquea el uso de la función de reportar problemas dentro del servidor. Se aplica cuando el jugador usa el sistema de reportes de forma abusiva, con spam o para fines ajenos al soporte.", sanction: "40 minutos de silencio" },
        { id: "2.9", title: "Reinicio de Cuenta", content: "Elimina por completo todos los activos del jugador. Incluye: fondos monetarios, número de teléfono, aspecto del personaje, vehículos, propiedades, empresas, negocios, gasolineras, vínculos familiares e inventario completo.", sanction: null }
      ]
    },
    {
      id: "reglas-generales-rol",
      title: "3. Reglas Generales del Rol",
      icon: "📋",
      description: "Directrices básicas para mantener un rol coherente, incluyendo comportamiento, interpretación del personaje, entorno y narrativa.",
      articles: [
        { id: "3.1", title: "Evasión del Rol", content: "Se prohíbe desviarse deliberadamente del proceso de rol. Infracciones: ausentarse durante una aproximación policial, abandonar el juego para evitar consecuencias, ignorar interacciones que afectan al personaje, entrar a zonas seguras durante tiroteos para escapar del rol.", sanction: "Según la infracción cometida" },
        { id: "3.2", title: "Mal Uso de Vehículos", content: "Prohibido usar vehículos de trabajo o de la organización para fines personales, fuera de servicio o sin autorización. También está prohibido usar vehículos personales para realizar trabajo de la organización.", sanction: "40 minutos de cárcel" },
        { id: "3.3", title: "Publicidad Comercial", content: "Prohibido anunciar otros servidores, Discord externos, sitios web no relacionados con RioRise, canales de YouTube, transmisiones en vivo, códigos promocionales o cualquier publicidad comercial.", sanction: "Suspensión de 10 días | Posible bloqueo de IP" },
        { id: "3.4", title: "Intercambios con Donaciones", content: "Prohibido intercambiar, vender o negociar beneficios de donaciones a cambio de moneda del juego, objetos, vehículos, propiedades, servicios o cualquier recurso del servidor.", sanction: "Suspensión permanente (Permaban) + Reinicio completo de cuenta" },
        { id: "3.5", title: "Engaño a la Administración", content: "Prohibido engañar, manipular o distorsionar información para obtener ventajas indebidas. Incluye: falsificación de pruebas, información incompleta intencional, manipulación del equipo administrativo.", sanction: "Suspensión de 5 días | Permaban en casos de falsificación de pruebas" },
        { id: "3.6", title: "Venta de Incentivos", content: "Prohibido vender, intercambiar o comprar incentivos del proyecto como códigos de bonificación, cupones, premios o cualquier artículo entregado en eventos o promociones.", sanction: "Silencio de 40 minutos | Suspensión de 1 a 5 días" },
        { id: "3.7", title: "AFK en el Servidor", content: "Los jugadores no pueden estar ausentes (AFK) en ninguna zona del servidor. Estar ausente ocupa ranuras de conexión y perjudica el rendimiento.", sanction: "Expulsión (Kick)" },
        { id: "3.8", title: "Dormir en Lugares Públicos", content: "Prohibido usar el comando o animación de dormir en lugares públicos, áreas concurridas, estaciones de trabajo o cualquier entorno que interfiera con el flujo del servidor.", sanction: "Expulsión (Kick)" },
        { id: "3.9", title: "Nombres Inapropiados en Objetos", content: "Prohibido asignar nombres inapropiados, ofensivos, con insultos, connotaciones políticas o religiosas a objetos del juego, vehículos, ropa, armas u otros elementos personalizables. Incluye nombres de familias, organizaciones y empresas.", sanction: "Suspensión de 1 día | Suspensión permanente en reincidencia" },
        { id: "3.10", title: "Ocultar Errores del Sistema", content: "Prohibido ocultar errores del juego a la administración, usarlos para beneficio personal o distribuirlos a otros jugadores. Cualquier fallo encontrado debe reportarse inmediatamente. La administración tiene plena autonomía para aplicar suspensión permanente o bloqueo de IP si el impacto es significativo o intencional.", sanction: "Suspensión de 30 días | Suspensión permanente / Bloqueo de IP según gravedad" },
        { id: "3.11", title: "Daño a la Economía", content: "Prohibido comprar o vender moneda o artículos del juego con dinero real entre jugadores o a través de sitios web de terceros. Las compras solo pueden realizarse a través del sitio web oficial. También incluye distribución injustificada de dinero, propiedades o vehículos blindados entre jugadores sin justificación de rol. Cualquier intento de buscar información sobre este tipo de negociación también se considera infracción.", sanction: "Bloqueo de IP de 365 a 3650 días | Suspensión permanente | Reinicio completo de cuenta" },
        { id: "3.13", title: "Infracciones Graves Reiteradas", content: "Se considera infracción grave cuando se cometen tres o más infracciones de las reglas del servidor en un período de 7 días.", sanction: "Suspensión de 7 días" },
        { id: "3.14", title: "Acciones Perjudiciales al Proyecto", content: "Cualquier actitud que cause daño directo o indirecto al proyecto, dentro o fuera del servidor. Incluye desestabilización, difamación, incitación a infracciones o cualquier conducta que comprometa la integridad del proyecto.", sanction: "Suspensión permanente, con consentimiento del equipo" },
        { id: "3.15", title: "Venta de Propiedades por Dinero Real", content: "Prohibido vender, intercambiar o negociar propiedades o cuentas del juego con dinero real, independientemente del resultado de la negociación.", sanction: "Suspensión de 30 días, bloqueo de IP o suspensión permanente" },
        { id: "3.16", title: "Manipulación de Reputación Familiar", content: "Prohibida la venta, compra o transferencia de la reputación familiar por cualquier medio, así como el encubrimiento de infractores por parte del líder de la facción. Cualquier intento de eludir el sistema de sanciones o proteger a miembros infractores se verá afectado por esta norma.", sanction: "Reinicio de la cuenta del líder" },
        { id: "3.17", title: "Hablar Fuera de Personaje (OOC)", content: "Prohibido hablar fuera de personaje excepto cuando un administrador lo solicite. IC (en personaje) es todo lo que forma parte de la historia del rol. OOC (fuera de personaje) incluye asuntos personales, preguntas técnicas o conversaciones de la vida real.", sanction: "30 minutos de cárcel" },
        { id: "3.18", title: "Irrespeto a la Administración", content: "Prohibido cualquier tipo de trato irrespetuoso, insulto, comportamiento inapropiado o amenaza dirigida a la administración.", sanction: "Suspensión de 5 días | Acumulación puede resultar en bloqueo de IP" },
        { id: "3.19", title: "Regresar a la Acción (VPA)", content: "Prohibido regresar al lugar donde moriste. Debes esperar 15 minutos. En acciones de invasión y pacificación, el regreso solo está permitido una vez que la acción haya finalizado por completo.", sanction: "30 minutos de cárcel | Suspensión de 1 día" },
        { id: "3.20", title: "Acción en Zona Segura (ASF)", content: "Prohibido realizar cualquier tipo de acción dentro de una Zona Segura (SafeZone).", sanction: "30 minutos de cárcel | Suspensión de 1 día" },
        { id: "3.21", title: "Anti-RP", content: "En casos de Anti-RP o acciones que perjudiquen a otros jugadores, se aplicará el castigo correspondiente de acuerdo con las normas del servidor.", sanction: "Según la infracción cometida" },
        { id: "3.22", title: "Cambio de Organización", content: "Al ser expulsado de una organización o corporación, el jugador no podrá unirse a otra durante 24 horas.", sanction: null },
        { id: "3.23", title: "Forzar el RP", content: "Prohibido realizar actos con la intención de forzar el RP. Ejemplo: caminar con un arma en la mano para provocar a otros personajes o a la policía.", sanction: "40 minutos de cárcel | Suspensión de 4 días | Bloqueo de IP" },
        { id: "3.24", title: "Robo seguido de Muerte", content: "Los robos seguidos de muerte constituyen DM. Los jugadores que acepten el robo correctamente no deben ser asesinados.", sanction: "60 minutos de cárcel" },
        { id: "3.25", title: "Suplantación de Administrador", content: "Prohibido suplantar la identidad de un administrador sin ostentar dicho cargo.", sanction: "Suspensión de 5 a 15 días | Bloqueo de IP" },
        { id: "3.26", title: "Ruidos en VOIP", content: "Prohibido generar ruidos o sonidos externos que interrumpan la comunicación. Incluye ruido de fondo, distorsiones de micrófonos de baja calidad, modificadores de voz y acciones deliberadas para perturbar a otros jugadores.", sanction: "Silencio de 40 minutos" },
        { id: "3.27", title: "Música en VOIP", content: "Prohibido reproducir música en VoIP fuera de las áreas permitidas.", sanction: "Silencio de 40 minutos" },
        { id: "3.28", title: "Spam en el Chat", content: "Prohibido saturar el chat de servicio, el chat del juego o cualquier otro canal de comunicación.", sanction: "Silencio de 40 minutos" },
        { id: "3.29", title: "Insultos a Jugadores", content: "Prohibido insultar a otros jugadores o a sus familiares.", sanction: "Silencio y suspensión de 30 minutos | Ban de 2 días en casos graves" },
        { id: "3.30", title: "Rol Oscuro (Dark RP)", content: "Expresamente prohibido: acoso, discriminación, acoso sexual, racismo, violencia moral, homofobia y cualquier práctica tóxica.", sanction: "Baneo de 10 a 30 días | En casos graves: 30 a 60 días o más | Baneo por IP" },
        { id: "3.31", title: "Mal uso de /me, /do, /try", content: "Prohibido el uso indebido de comandos de rol.\n\n/me: Describe acciones del personaje. Ejemplo correcto: /me toma un vaso de agua.\n\n/do: Describe situaciones del entorno. Ejemplo correcto: /do el viento sopla suavemente.\n\n/try: Para acciones con probabilidad de éxito o fracaso. Ejemplo correcto: /try intenta agarrar un objeto en lo alto.\n\nEjemplos incorrectos: /me derriba a John (forzar acción sobre otro) | /do John está inconsciente (confirmar sin dar oportunidad de reacción) | /try mata al personaje al instante (forzar resultado).", sanction: "Silencio de 40 minutos" },
        { id: "3.32", title: "Irrespeto tras Pelea", content: "Prohibido participar en rol irrespetuoso después de ganar una pelea, como provocar o humillar a jugadores heridos, o realizar acciones degradantes. Se permiten bromas leves sobre debilidades del personaje sin exceder los límites del respeto.", sanction: "60 minutos de prisión | 1 día de suspensión" },
        { id: "3.33", title: "Uso Excesivo de Mayúsculas", content: "Prohibido usar Bloq Mayús de forma excesiva al escribir en cualquier chat.", sanction: "10 minutos de silencio" },
        { id: "3.34", title: "Vaciar Almacén de Facción", content: "Prohibido vaciar el almacén de una facción o familia retirando grandes cantidades de recursos que excedan lo autorizado.", sanction: "60 minutos de prisión | Si no se devuelven los fondos: Suspensión de 30 días o bloqueo de IP" }
      ]
    },
    {
      id: "biblia-rp",
      title: "4. Biblia del RP",
      icon: "📖",
      description: "Normas fundamentales que definen lo que está permitido y prohibido en el rol. Válidas para todas las situaciones.",
      articles: [
        { id: "4.1", title: "CMM – Combate Masivo", content: "Prohibido matar o dañar a tres o más jugadores sin razón válida dentro del rol.", sanction: "60 min de prisión + restricción de armas | Suspensión de 3 a 7 días" },
        { id: "4.2", title: "CMA – Combate Aleatorio (RDM)", content: "Prohibidos los intercambios aleatorios como participar en una acción sin estar directamente involucrado.", sanction: "60 min de prisión | Suspensión de 1 a 3 días" },
        { id: "4.3", title: "CMV – Combate con Vehículo (VDM)", content: "Prohibido atropellar intencionalmente a otros jugadores con vehículos.", sanction: "60 min de prisión | Suspensión de 1 a 5 días" },
        { id: "4.4", title: "MG – Metajuego", content: "Prohibido usar información obtenida fuera del juego para beneficio personal o para dañar a otro jugador. El uso de emoticonos como '=D' en el chat del juego también está prohibido.", sanction: "60 min de cárcel | Suspensión de 1 a 3 días" },
        { id: "4.5", title: "CL – Registro de Combate (Combat Log)", content: "Prohibido abandonar la partida durante una acción para obtener ventaja, como evitar ser secuestrado, asesinado o arrestado.", sanction: "60 min de cárcel | Suspensión de 1 a 3 días" },
        { id: "4.6", title: "DM – Combate a Muerte", content: "Prohibido matar o dañar a otro jugador sin motivo válido dentro del rol.", sanction: "60 min de cárcel | Suspensión de 1 a 3 días" },
        { id: "4.7", title: "RK – Asesinato por Venganza", content: "Prohibido matar o dañar a un jugador para vengarse por haber sido eliminado en una vida anterior.", sanction: "60 min de cárcel | Suspensión de 1 a 3 días" },
        { id: "4.8", title: "SK – Asesinato al Aparecer (Spawn Kill)", content: "Prohibido matar o dañar a jugadores en el territorio de cualquier facción u organización, así como en sus puntos de aparición.", sanction: "60 min de prisión | Suspensión de 1 a 5 días" },
        { id: "4.9", title: "TK – Fuego Amigo (Team Kill)", content: "Prohibido matar o dañar a un miembro de tu propia facción o de una facción aliada sin motivo válido.", sanction: "40 min de prisión | Suspensión de 1 a 2 días" },
        { id: "4.10", title: "SAAV – Sin Amor a la Vida", content: "Prohibido no preocuparse por la propia vida en el juego, prefiriendo morir antes que cooperar con la acción en curso.", sanction: "40 min de prisión | Suspensión de 1 a 3 días" },
        { id: "4.11", title: "Flaming RP – RP Ofensivo", content: "Prohibido el uso de lenguaje ofensivo, insultos o discurso de odio dirigido a otros jugadores durante el rol.", sanction: "60 min de prisión + silencio | Suspensión de 1 a 30 días según gravedad" },
        { id: "4.12", title: "KOS – Matar a la Vista", content: "Prohibido matar a otro jugador de otra organización a simple vista sin motivo ni contexto de rol. En la vida real no matarías a alguien solo porque pertenezca a la policía.", sanction: "60 min de prisión | Suspensión de 1 a 5 días" },
        { id: "4.13", title: "PK – Muerte del Jugador", content: "Muerte del personaje en la que el jugador pierde toda memoria relacionada con quien lo mató y los eventos que llevaron a su muerte. Está prohibido usar esa información después de morir.", sanction: "60 min de prisión | Suspensión de 1 a 5 días" },
        { id: "4.14", title: "RPFW – Jugar para Ganar Siempre", content: "Prohibido desarrollar un rol únicamente para beneficio personal donde el jugador siempre busca ganar. Ejemplos: vender posiciones, ir a zona segura durante una acción, usar reglas para perjudicar a otros, estacionar vehículos de trabajo en lugares privados.", sanction: "60 min de prisión | Suspensión de 1 a 5 días" },
        { id: "4.15", title: "MIX – Mezcla Fuera del Rol", content: "Prohibido combinar temas o información ajenos al rol dentro del mismo, rompiendo la inmersión del personaje.", sanction: "60 min de detención | Suspensión de 1 a 5 días" },
        { id: "4.16", title: "Multi-Cuentas para Transferencias", content: "Prohibido crear o usar varias cuentas para transferir dinero u obtener ventajas para la cuenta principal. Incluye: obtener ventajas en eventos o guerras, perjudicar a otros mediante cuentas coordinadas.", sanction: "Expulsión de 30 días | Bloqueo de IP | Expulsión permanente" },
        { id: "4.17", title: "AAP – Interferir en Acción", content: "Prohibido interferir intencionalmente en una acción en curso. Ejemplo: interrumpir un acercamiento golpeando a otros, gritando por VOIP o saturando el chat.", sanction: "60 min de detención | Expulsión de 1 a 3 días" },
        { id: "4.18", title: "DMA – Daño a Vehículos", content: "Prohibido causar daños a vehículos públicos o privados sin motivo.", sanction: "Expulsión | 30 min de detención" },
        { id: "4.19", title: "NRA – Armas en Lugares Públicos", content: "Prohibido usar armas en lugares públicos como hospitales, comisarías, ayuntamientos, mercados, iglesias, subastas, lugares de trabajo y plazas.", sanction: "20 min de detención" },
        { id: "4.20", title: "AI – Acción Irregular", content: "Prohibido invadir o permanecer cerca de propiedades privadas de otros jugadores (casas, mansiones) con la intención de forzar una acción.", sanction: "Suspensión de 10 días | En acción familiar: Advertencia o bloqueo de IP" },
        { id: "4.21", title: "INA – Invasión No Autorizada", content: "Prohibido invadir organizaciones criminales o corporaciones sin autorización previa de la Administración.", sanction: "Suspensión de 5 días" },
        { id: "4.22", title: "FAIL – Acción Fallida", content: "Prohibido realizar acciones de forma diferente a la establecida en las reglas.", sanction: "60 min de prisión | Suspensión de 3 a 5 días | Advertencia" },
        { id: "4.23", title: "TSC – Transferencia sin Consentimiento", content: "Prohibido transferir objetos al administrador sin su consentimiento.", sanction: "10 min de cárcel" },
        { id: "4.24", title: "ECI – Enseñar Comandos Incorrectos", content: "Prohibido enseñar comandos incorrectos a otros jugadores con la intención de obtener ventaja.", sanction: "60 min de cárcel | Suspensión de 1 a 5 días" },
        { id: "4.25", title: "TOS – Incumplimiento de Términos", content: "Prohibido incumplir los términos de uso de la comunidad. Cualquier solicitud de incumplimiento se tramitará tras verificación del sistema.", sanction: "Suspensión permanente" }
      ]
    },
    {
      id: "reglas-denuncia",
      title: "5. Reglas de Denuncia",
      icon: "📝",
      description: "Procedimientos para presentar denuncias, aportar pruebas, plazos y conductas consideradas inválidas.",
      articles: [
        { id: "5.1", title: "Estándar de Denuncias", content: "No se aceptarán denuncias que no cumplan con el estándar definido, sean poco claras o presenten evidencia de baja calidad.", sanction: null },
        { id: "5.2", title: "Denunciante Infractor", content: "Si en la denuncia el denunciante aparece cometiendo Anti-RP, recibirá una sanción junto con el jugador denunciado. Ejemplo: denunciar SAAV y cometerlo junto al denunciado.", sanction: null },
        { id: "5.3", title: "Conversaciones Paralelas", content: "Prohibidas las conversaciones paralelas en el chat de denuncias.", sanction: "Advertencia | Silencio de 10 minutos o más" },
        { id: "5.4", title: "Falsificación de Evidencia", content: "Prohibido falsificar evidencia contra otro jugador.", sanction: "Sanción doble a la que recibiría el acusado" },
        { id: "5.5", title: "Plazos de Apelación", content: "Plazos para apelar sanciones desde su aplicación: 1 día para sanciones de prisión | 3 días para sanciones de expulsión. Después de estos plazos no se aceptarán apelaciones.", sanction: null },
        { id: "5.6", title: "Revisión de Reportes", content: "Los reportes enviados a Discord se revisarán en 24 horas, siempre que se publiquen en el momento del incidente. Los reportes enviados después de un día no se revisarán, salvo casos de mayor gravedad.", sanction: null },
        { id: "5.7", title: "Suspensión Prolongada", content: "Si un jugador es suspendido durante 30 días y posee uno o más negocios, el sistema restablecerá todas sus propiedades.", sanction: null }
      ]
    },
    {
      id: "zona-segura",
      title: "6. Zona Segura",
      icon: "🛡️",
      description: "Lugares donde se prohíben acciones, conflictos o acercamientos ilegales.",
      articles: [
        {
          id: "6.1",
          title: "Áreas de Zona Segura",
          content: "Las Zonas Seguras son áreas donde está prohibido cualquier tipo de violencia.\n\nEdificios gubernamentales: Departamento de Policía, Hospital, Autoescuela, Bancos, Ayuntamiento.\n\nLugares de trabajo: Mina, Obra de construcción, Granja.\n\nNegocios: Apertura 24/7, Cafetería, Tienda de ropa, Armería, Tienda de accesorios, Gasolinera, Bar, Concesionario de autos, Concesionario de motocicletas, Centro de servicio, Casino Dragon 4, Taller de personalización de autos.",
          sanction: null
        }
      ]
    },
    {
      id: "acciones-callejeras",
      title: "7. Acciones Callejeras",
      icon: "🚨",
      description: "Conducta para conflictos urbanos entre jugadores: acercamientos, tiroteos, persecuciones, límites y obligaciones de rol.",
      articles: [
        { id: "7.1", title: "Horario de Acciones", content: "Las acciones callejeras deben realizarse exclusivamente entre las 8:00 a.m. y las 12:00 a.m., con un intervalo mínimo obligatorio de 30 minutos entre cada acción. Solo son válidas para organizaciones criminales.", sanction: "60 min de cárcel (4.22 - Suspensión)" },
        { id: "7.2", title: "Agresión a Trabajadores", content: "Prohibido agredir a trabajadores legales mientras estén de servicio: taxistas, camioneros, conductores de autobús, mineros, agricultores y recolectores de basura, entre otros.", sanction: "60 min de cárcel (4.22 - Suspensión)" },
        { id: "7.3", title: "Disparar a Comerciantes", content: "Prohibido disparar o someter a comerciantes durante la acción.", sanction: "60 min de cárcel (4.22 - Suspensión)" },
        { id: "7.4", title: "Proporción en Secuestros", content: "Debe haber más secuestradores que víctimas, y es obligatorio que todos los involucrados del lado de los secuestradores porten armas de fuego.", sanction: "60 min de cárcel (4.22 - Suspensión)" }
      ]
    },
    {
      id: "reglas-familiares",
      title: "8. Reglas Familiares",
      icon: "👨‍👩‍👧‍👦",
      description: "Reglas para crear, gestionar y organizar familias de rol, límites de miembros, responsabilidades y conductas prohibidas.",
      articles: [
        { id: "8.1", title: "Jerarquía Familiar", content: "La jerarquía de derechos familiares incluye: Nivel 4 — Vicelíder Familiar | Nivel 5 — Líder Familiar.", sanction: null },
        { id: "8.2", title: "Advertencias Internas", content: "El líder y el vicelíder pueden emitir advertencias a los miembros por infracciones, indicando el motivo. Tras acumular 3 advertencias, el miembro puede ser expulsado.", sanction: null },
        { id: "8.3", title: "Aplicación de Castigos", content: "Todos los castigos deben aplicarse estrictamente de acuerdo con las normas y reglamentos familiares y del servidor.", sanction: null },
        { id: "8.5", title: "Insultos Internos", content: "Prohibido insultar a los miembros de la propia familia.", sanction: "Advertencia del líder de la familia" },
        { id: "8.6", title: "Daño a Propiedad Familiar", content: "Prohibido dañar o perjudicar cualquier propiedad familiar.", sanction: "Advertencia del líder de la familia" },
        { id: "8.7", title: "Ignorar Superiores", content: "Prohibido ignorar mensajes, órdenes o solicitudes de superiores relacionados contigo.", sanction: "Advertencia del líder de la familia" },
        { id: "8.8", title: "Provocar Conflictos", content: "Prohibido provocar conflictos con otras familias.", sanction: "Advertencia del líder de la familia" },
        { id: "8.9", title: "Solicitar Ascenso", content: "No está permitido solicitar un ascenso de rango dentro de la familia.", sanction: "Advertencia verbal u observación | Multa familiar" },
        { id: "8.10", title: "Multa Familiar", content: "La multa familiar se aplica a la familia cuando se identifican múltiples casos de infracciones cometidas por sus miembros. Consiste en el pago de una suma de dinero definida por el personal dentro de un plazo determinado.", sanction: null },
        { id: "8.12", title: "Monto de la Multa", content: "El monto varía según: tipo de familia, número de infracciones, cooperación del liderazgo y comportamiento general de los miembros.", sanction: null },
        { id: "8.13", title: "Impago de Multa", content: "El impago de la multa dentro del plazo puede resultar en la expulsión de la familia.", sanction: "Reinicio + restricción de 3 meses (90 días)" },
        { id: "8.15", title: "Expulsión de la Familia", content: "La familia puede ser expulsada en los siguientes casos: reincidencia grave de infracciones, impago de multas, falta de control del liderazgo, participación continua en acciones ilegales.", sanction: "Reinicio" },
        { id: "8.16", title: "Reestructuración Anticipada", content: "La reestructuración de la familia antes de que finalice el período de restricción resultará en el reinicio de la mansión del líder.", sanction: "Reinicio" },
        { id: "8.21", title: "Sistema de Advertencias", content: "Cada familia tiene un límite de infracciones: Advertencias formales: [0/3] | Advertencias verbales: [0/5]. Al acumular 5 advertencias verbales, se convierten automáticamente en 1 advertencia formal.", sanction: null },
        { id: "8.26", title: "Venta de Moneda Virtual Familiar", content: "Prohibido vender moneda virtual, cuentas o cualquier propiedad relacionada con la familia.", sanction: "Reinicio" },
        { id: "8.27", title: "Inflar Membresía", content: "Prohibido traer jugadores de otros servidores para aumentar fraudulentamente la membresía en guerras o tomas de control.", sanction: "1/3 de advertencia formal inmediata" },
        { id: "8.28", title: "Engaño entre Jugadores", content: "Prohibido que miembros de la familia engañen a otros jugadores con respecto a objetos del juego.", sanction: "Hasta 3 advertencias verbales | Posible advertencia formal" },
        { id: "8.29", title: "Insultar a la Administración", content: "Prohibido insultar a la administración o a sus familiares, ya sea dentro del juego, el foro o los mensajeros oficiales.", sanction: "1 advertencia verbal | Si persiste: advertencia formal" },
        { id: "8.30", title: "Mensajes Directos Masivos", content: "Cuando se descubre que más de 3 miembros de la familia envían mensajes directos simultáneamente.", sanction: "Advertencia formal" },
        { id: "8.31", title: "Comportamiento Inapropiado Reiterado", content: "Cuando los miembros acumulan más de 5 silenciamientos por comportamiento inapropiado o insultos.", sanction: "1 advertencia verbal | Si persiste: advertencia formal" },
        { id: "8.33", title: "Consideración General", content: "RioRise es un juego de simulación de vida en Brasil, desarrollado para brindar inmersión, diversión y realismo. Todas las reglas están diseñadas para garantizar la mejor experiencia posible.", sanction: null },
        { id: "8.34", title: "Responsabilidad del Jugador", content: "Cualquier castigo o expulsión aplicada es responsabilidad exclusiva del jugador, como resultado del incumplimiento directo o indirecto de las reglas.", sanction: null },
        { id: "8.35", title: "Tolerancia Cero", content: "Cualquier tipo de acoso, discurso de odio, prejuicio o comportamiento tóxico está estrictamente prohibido.", sanction: "Expulsión" },
        { id: "8.36", title: "Castigos Injustos", content: "En caso de que un castigo se considere injusto, el jugador deberá presentar una queja directamente con el responsable a través del Discord oficial del servidor.", sanction: null }
      ]
    }
  ],

  organizations: [
    {
      id: "pf",
      title: "Policía Federal (PF)",
      icon: "👮",
      color: "#4a90e2",
      description: "Reglamento oficial de la Policía Federal del servidor RioRise. Toda conducta durante el servicio está regulada por estas normas.",
      sections: [
        {
          subtitle: "⏰ Turnos y Cobertura",
          articles: [
            { id: "PF-1", title: "Turno de Trabajo", content: "Turno activo: 8:00 a.m. a 12:00 a.m.\nDurante este período todos los agentes deben estar de servicio, uniformados y equipados.\n\nDescanso: 12:00 p.m. a 1:00 p.m.\nSe permite la división de turnos para una mejor cobertura de la ciudad.", sanction: null },
            { id: "PF-2", title: "Límite de Líderes", content: "Máximo 10 delegados + 1 Líder (11 en total).", sanction: null },
            { id: "PF-3", title: "Autoridad de Reporte", content: "El Comandante y los oficiales tienen autoridad para reportar infracciones y aplicar medidas disciplinarias de forma independiente al detectar a un infractor.", sanction: null }
          ]
        },
        {
          subtitle: "🎖️ Disciplina y Jerarquía",
          articles: [
            { id: "PF-4", title: "Cadena de Mando", content: "Respetar siempre la cadena de mando. Las decisiones del mando son definitivas y deben obedecerse sin cuestionamiento.", sanction: null },
            { id: "PF-5", title: "Respeto entre Compañeros", content: "El respeto entre compañeros es obligatorio. Las discusiones, insultos, falta de respeto o comportamiento tóxico dentro o fuera del servicio serán sancionados.", sanction: "Expulsión de la organización" },
            { id: "PF-6", title: "Uso de Radio y Chat", content: "El uso indebido de la radio, el megáfono o el chat policial para bromas, asuntos personales o para saturar el sistema está prohibido.", sanction: "Expulsión de la organización" },
            { id: "PF-7", title: "Profesionalismo", content: "Los agentes deben actuar con profesionalismo y neutralidad, sin abuso de poder ni favoritismo.", sanction: null },
            { id: "PF-8", title: "Solicitud de Ascensos", content: "Se prohíbe solicitar ascensos o ventajas. El ascenso depende del mérito, la disciplina y la antigüedad.", sanction: "Expulsión de la organización" }
          ]
        },
        {
          subtitle: "🚔 Patrullaje y Operaciones",
          articles: [
            { id: "PF-9", title: "Patrullaje Mínimo", content: "Debe realizarse con un mínimo de 3 agentes por vehículo (VTR). Patrullajes con menos de 3 agentes solo están permitidos con autorización del Comandante o acompañados por un oficial de mayor rango.", sanction: null },
            { id: "PF-10", title: "Uso de Taser", content: "El uso de pistolas Taser en vehículos en movimiento está prohibido, excepto en casos extremos con autorización superior.", sanction: "Expulsión de la organización si se desobedece sin orden superior" },
            { id: "PF-11", title: "Uso de Armas de Fuego", content: "Solo permitido si el sospechoso abre fuego contra civiles o agentes de policía.", sanction: null },
            { id: "PF-12", title: "Comunicación Obligatoria", content: "Todas las persecuciones, tiroteos y arrestos deben reportarse por radio.", sanction: null },
            { id: "PF-13", title: "Solicitud de Refuerzos", content: "Los agentes pueden solicitar patrullas adicionales, siempre que la fuerza mantenga superioridad numérica sobre los delincuentes.", sanction: null },
            { id: "PF-14", title: "Armamento Pesado", content: "Restringido a operaciones especiales o situaciones de alto riesgo, con autorización del mando.", sanction: null }
          ]
        },
        {
          subtitle: "🤝 Procedimientos y Acercamientos",
          articles: [
            { id: "PF-15", title: "Identificación en Acercamientos", content: "Todos los acercamientos deben realizarse con respeto y claridad. El agente debe identificarse e indicar el motivo del acercamiento.", sanction: null },
            { id: "PF-16", title: "Registro de Mujeres", content: "Para registrar a mujeres es obligatoria la presencia de una agente de policía. Si no hay ninguna presente, el registro solo podrá realizarse con el consentimiento de la ciudadana a través del chat.", sanction: null },
            { id: "PF-17", title: "Esposar al Sospechoso", content: "Si el ciudadano representa un riesgo o intenta huir, el agente podrá esposarlo inmediatamente.", sanction: null },
            { id: "PF-18", title: "No Interrumpir Acercamientos", content: "Ningún jugador debe interrumpir la comunicación entre el agente y el ciudadano. Los ruidos fuertes, insultos o provocaciones conllevarán sanción.", sanction: "Silencio por ruido (3.26)" },
            { id: "PF-19", title: "Fuerza Letal", content: "El uso de fuerza letal solo está permitido en legítima defensa o para proteger a civiles y agentes de policía.", sanction: null }
          ]
        },
        {
          subtitle: "🔒 Procedimientos de Detención",
          articles: [
            { id: "PF-20", title: "Explicación de Detención", content: "Antes de introducir al sospechoso en el coche patrulla, el agente debe explicar el motivo de la detención y su duración.", sanction: null },
            { id: "PF-21", title: "Rendición del Ciudadano", content: "Si el ciudadano levanta las manos o se rinde, se considera que ha cedido y no puede reaccionar.", sanction: null },
            { id: "PF-22", title: "Trabajo de Abogados", content: "La policía no debe obstaculizar el trabajo de los abogados dentro de la prisión.", sanction: "Advertencia verbal; si se repite: 1/3 de advertencia formal" },
            { id: "PF-23", title: "Presos Administrativos", content: "Los abogados no pueden liberar a los presos administrativos.", sanction: "60 minutos de cárcel (4.22 - FALLO)" }
          ]
        },
        {
          subtitle: "🚫 Conducta Interna y Restricciones",
          articles: [
            { id: "PF-24", title: "Conducta Ejemplar", content: "El agente debe mantener una conducta ejemplar tanto dentro como fuera de servicio. La imagen de la corporación refleja la del agente.", sanction: null },
            { id: "PF-25", title: "Prohibiciones Internas", content: "Está estrictamente prohibido:\n• Usar los vehículos patrulla para fines personales.\n• Participar en misiones, cacerías o eventos durante el servicio.\n• Trabajar en otros empleos durante el horario laboral.\n• Colaborar o asociarse con delincuentes.\n• Consumir drogas, bebidas alcohólicas o portar armas ilegales.\n• Usar radios, megáfonos o el chat para hacer bromas.\n• Mezclar IC y OOC en situaciones de RP.", sanction: "Expulsión de la organización + inclusión en la lista negra" }
          ]
        },
        {
          subtitle: "📋 Asistencia y Sanciones",
          articles: [
            { id: "PF-26", title: "Horas Mínimas de Servicio", content: "Mínimo de 7 horas de servicio por semana. Las ausencias superiores a 3 días sin previo aviso pueden resultar en degradación o despido.\n\nEscala de sanciones posibles:\n• Advertencia verbal\n• Advertencia escrita\n• Suspensión temporal\n• Despido\n• Inclusión en la lista negra", sanction: null },
            { id: "PF-27", title: "Derecho a Apelación", content: "Todo agente tiene derecho a apelar una sanción, presentando su defensa ante la administración.", sanction: null }
          ]
        },
        {
          subtitle: "🎮 Conducta Fuera del Rol",
          articles: [
            { id: "PF-28", title: "Prohibición de OOC en Servicio", content: "Se prohíbe mezclar el juego dentro y fuera de personaje.\nEjemplos prohibidos: 'Hubo un error', 'Voy a reiniciar', 'Me mataron sin motivo', 'Estoy grabando', 'Voy a llamar al administrador'.", sanction: "30 minutos de cárcel (3.17)" },
            { id: "PF-29", title: "Conducta General", content: "Respeta siempre a los jugadores y el rol. Evita el metajuego, las desconexiones durante el combate y el powergaming. El incumplimiento conllevará sanciones internas y administrativas.\n\nLa policía es una institución honorable. Cada miembro representa la ley, el orden y el respeto por el servidor. Sirve con disciplina, valentía y responsabilidad.", sanction: null }
          ]
        }
      ]
    }
  ],

  specialRules: [
    {
      id: "secuestro",
      title: "Reglas de Secuestro",
      icon: "🔫",
      color: "#c0392b",
      description: "Directrices oficiales para secuestros dentro del rol. Todas las acciones deben cumplir estrictamente estos criterios. El incumplimiento puede resultar en castigos según la gravedad de la infracción.",
      sections: [
        {
          subtitle: "⚠️ Directrices Generales",
          articles: [
            { id: "SEC-1", title: "Superioridad Numérica", content: "Debe haber más secuestradores que víctimas, y todos los secuestradores deben portar armas de fuego.", sanction: "60 minutos de cárcel (FALLO - 4.22)" },
            { id: "SEC-2", title: "No Interferir", content: "Prohibido interferir en secuestros en los que no estés directamente involucrado (terceros, espectadores o facciones sin participación).", sanction: "60 minutos de cárcel (AAP - 4.17)" },
            { id: "SEC-3", title: "Comportamiento del Secuestrado", content: "La persona secuestrada debe mostrar comportamiento acorde con la situación (conmoción, miedo, tensión). Tiene prohibido hacer bromas, actuar de forma irreal o romper la inmersión del rol.", sanction: "60 minutos de cárcel (FAIL - 4.22)" },
            { id: "SEC-4", title: "Comunicación Cortada", content: "Desde el momento en que se apunta con un arma a la cabeza del personaje, la comunicación de la persona secuestrada se corta automáticamente. No puede usar la radio, el teléfono móvil ni ningún otro medio externo sin autorización de los secuestradores.", sanction: "40 minutos de cárcel (SAAV - 4.10)" },
            { id: "SEC-5", title: "Armas Permitidas", content: "Se pueden realizar acciones callejeras relacionadas con el secuestro con todas las armas.", sanction: null },
            { id: "SEC-6", title: "Toma de Rehenes", content: "En caso de toma de rehenes, la víctima puede intentar contactar a familiares o a la policía para generar un GRP. Sin embargo, este permiso queda a entera discreción de los secuestradores.", sanction: "40 minutos de cárcel (Forzar GRP - 3.23)" },
            { id: "SEC-7", title: "Monto Máximo sin Secuestro", content: "El monto máximo permitido en acciones sin secuestro es de hasta R$ 5.000 por rehén.", sanction: "60 minutos de cárcel (FALLO - 4.22)" },
            { id: "SEC-8", title: "Monto Máximo con Secuestro", content: "El monto máximo permitido en acciones con secuestro es de hasta R$ 8.000 por rehén.", sanction: "60 minutos de cárcel (FALLO - 4.22)" },
            { id: "SEC-9", title: "Duración Máxima", content: "Las acciones con rehenes tienen una duración máxima de 30 minutos. Transcurrido este tiempo, la situación debe resolverse (liberación, negociación final o resolución del GRP).", sanction: "60 minutos de cárcel (FALLO - 4.22)" },
            { id: "SEC-10", title: "Quién Puede Secuestrar", content: "Solo las facciones y las mafias están autorizadas a realizar secuestros. Los civiles u organizaciones no criminales no pueden llevar a cabo este tipo de acciones.", sanction: "60 minutos de cárcel (FALLO - 4.22)" },
            { id: "SEC-11", title: "Horario y Frecuencia", content: "Los secuestros solo pueden ocurrir entre las 8:00 y las 24:00, respetando un intervalo mínimo de 30 minutos entre acciones de la misma organización.", sanction: "60 minutos de cárcel (FALLO - 4.22)" },
            { id: "SEC-12", title: "Anuncio del Secuestro", content: "Los secuestradores están obligados a anunciar el secuestro por dos medios: usando el comando /s o mediante VoIP, dejando claro a la víctima que se trata de un secuestro.", sanction: "60 minutos de cárcel (FALLO - 4.22)" },
            { id: "SEC-13", title: "Uso Obligatorio de Máscara", content: "En operaciones de secuestro, es obligatorio que todos los secuestradores usen máscaras durante toda la operación, desde el acercamiento inicial hasta la finalización.", sanction: "60 minutos de cárcel (FALLO - 4.22)" },
            { id: "SEC-14", title: "Incumplimiento General", content: "El incumplimiento de cualquiera de los puntos anteriores puede conllevar sanciones según la gravedad de cada infracción descrita.", sanction: null }
          ]
        }
      ]
    },
    {
      id: "blindado",
      title: "Reglas del Vehículo Blindado",
      icon: "🚛",
      color: "#8e44ad",
      description: "Directrices que regulan el funcionamiento del servicio de vehículos blindados dentro del servidor, garantizando organización, seguridad y coherencia en el rol durante las operaciones.",
      sections: [
        {
          subtitle: "⏰ 1. Horario de Trabajo",
          articles: [
            { id: "VB-1.1", title: "Horario Permitido", content: "El servicio de vehículos blindados debe realizarse exclusivamente entre las 17:00 y las 02:00. Está prohibido realizar entregas, transportes de objetos de valor o apertura de cajas fuertes fuera de este horario.", sanction: "Expulsión por trabajar fuera del horario laboral (2.2)" }
          ]
        },
        {
          subtitle: "👔 2. Normas de Uniforme",
          articles: [
            { id: "VB-2.1", title: "Prohibición de Máscaras", content: "El uso de máscaras está prohibido durante toda la ejecución del trabajo.", sanction: "Expulsión por uso de máscara (2.2)" },
            { id: "VB-2.2", title: "Uniforme Obligatorio", content: "Todos los trabajadores deben usar el uniforme estándar de la empresa durante su jornada laboral.", sanction: "Expulsión por trabajar sin uniforme (2.2)" },
            { id: "VB-2.3", title: "Ropa No Representativa", content: "Prohibido trabajar sin uniforme o con ropa que no represente la función de un vehículo blindado.", sanction: "Expulsión por trabajar sin uniforme (2.2)" }
          ]
        },
        {
          subtitle: "👥 3. Composición del Equipo",
          articles: [
            { id: "VB-3.1", title: "Equipo Completo", content: "La operación debe realizarse con un equipo completo.", sanction: "Expulsión por vehículo blindado incompleto (2.2)" },
            { id: "VB-3.2", title: "Mínimo de Trabajadores", content: "Es necesario contar con un total de 4 trabajadores para iniciar cualquier acción relacionada con el vehículo blindado.", sanction: "Expulsión por vehículo blindado incompleto (2.2)" },
            { id: "VB-3.3", title: "Equipo Incompleto", content: "Prohibido iniciar entregas, traslados o abrir la caja fuerte con un equipo incompleto.", sanction: "Expulsión por vehículo blindado incompleto (2.2)" }
          ]
        },
        {
          subtitle: "🛡️ 4. Escolta",
          articles: [
            { id: "VB-4.1", title: "Tamaño de la Escolta", content: "Se permite el uso de una escolta de hasta 8 personas, sin necesidad de uniformes. Todos los miembros de la escolta deben conocer el plan de acción y actuar de acuerdo con él.", sanction: null },
            { id: "VB-4.2", title: "Función de la Escolta", content: "La escolta debe actuar exclusivamente para la protección del vehículo y del equipo. Tiene prohibido actuar de forma desorganizada o sin coordinación con el líder.", sanction: null }
          ]
        }
      ]
    }
  ],

  armyRules: {
    id: "ejercito",
    title: "Reglamento del Ejército (EB)",
    icon: "🪖",
    color: "#6abf69",
    description: "Reglamento oficial del Ejército Brasileño. Horario de trabajo: 17:00 a 02:00. El General y los Coroneles tienen autoridad para aplicar medidas disciplinarias de forma independiente.",
    sections: [
      {
        subtitle: "📜 Capítulo 1 — Disposiciones Generales",
        articles: [
          { id: "EB-1.1", title: "Conocimiento del Reglamento", content: "Todos los empleados del ejército deben conocer y cumplir este reglamento.", sanction: null },
          { id: "EB-1.2", title: "Sanciones por Incumplimiento", content: "Por infracciones al reglamento, los empleados pueden sufrir: advertencia, amonestación, despido o despido con inclusión en la lista negra.", sanction: null },
          { id: "EB-1.3", title: "Derecho a Apelación", content: "Todo empleado tiene derecho a apelar una medida disciplinaria.", sanction: null },
          { id: "EB-1.4", title: "Uso de Uniforme", content: "Durante el horario laboral, todos los empleados deben estar uniformados. Es posible solicitar permiso al General o a los Coroneles.", sanction: null }
        ]
      },
      {
        subtitle: "📋 Capítulo 2 — Deberes Principales",
        articles: [
          { id: "EB-2.1", title: "Cumplimiento de Leyes", content: "Conocer y obedecer las leyes del estado y los estatutos de la organización, asegurando su cumplimiento.", sanction: null },
          { id: "EB-2.2", title: "Proteger la Vida", content: "Proteger la vida de los ciudadanos por cualquier medio necesario.", sanction: null },
          { id: "EB-2.3", title: "Obedecer Órdenes", content: "Obedecer las órdenes y peticiones de los oficiales superiores sin cuestionarlas, siempre dentro del marco legal.", sanction: null },
          { id: "EB-2.4", title: "Cadena de Mando", content: "Respetar la cadena de mando en todo momento.", sanction: null },
          { id: "EB-2.5", title: "Orden Interno", content: "Seguir el orden interno de la organización.", sanction: null },
          { id: "EB-2.6", title: "Trato al Ciudadano", content: "Ser cortés y diplomático al comunicarse con los ciudadanos.", sanction: null },
          { id: "EB-2.7", title: "Reparación de Vehículos", content: "En caso de daños intencionales o accidentales, el oficial debe reparar el vehículo de trabajo.", sanction: null },
          { id: "EB-2.8", title: "Conocer a Superiores", content: "Los soldados deben conocer a sus oficiales superiores por su rostro y nombre.", sanction: null },
          { id: "EB-2.9", title: "Proteger Bienes del Ejército", content: "Proteger los bienes y objetos de valor del ejército.", sanction: null },
          { id: "EB-2.10", title: "Documentos en Puestos de Control", content: "Presentar los documentos al oficial de guardia en los puestos de control.", sanction: null },
          { id: "EB-2.11", title: "Verificar Documentos", content: "En los puestos de control, verificar los documentos de todos los civiles que lleguen.", sanction: null },
          { id: "EB-2.12", title: "Presentarse Antes de Verificar", content: "Los soldados deben presentarse antes de proceder a verificar los documentos.", sanction: null },
          { id: "EB-2.13", title: "Vigilancia del Territorio", content: "Vigilar el territorio del ejército diariamente. La distribución de áreas de servicio la realiza el ayudante o el líder.", sanction: null }
        ]
      },
      {
        subtitle: "✅ Capítulo 3 — Derechos del Personal",
        articles: [
          { id: "EB-3.1", title: "Disparar a Intrusos", content: "El personal puede disparar a civiles que ingresen ilegalmente al territorio del ejército.", sanction: null },
          { id: "EB-3.2", title: "Asistencia a Otras Facciones", content: "El personal puede prestar asistencia a otras facciones gubernamentales durante eventos.", sanction: null },
          { id: "EB-3.3", title: "Verificar Documentos", content: "El personal puede verificar los documentos de identidad de civiles y personal.", sanction: null },
          { id: "EB-3.4", title: "Consultas a Superiores", content: "El personal puede hacer preguntas a los oficiales superiores.", sanction: null },
          { id: "EB-3.5", title: "Práctica de Tiro", content: "El personal puede practicar tiro fuera del horario laboral.", sanction: null },
          { id: "EB-3.6", title: "Solicitar Asistencia", content: "El personal puede solicitar asistencia por radio.", sanction: null },
          { id: "EB-3.7", title: "Disparar en Defensa de Civiles", content: "El personal puede disparar a civiles que apunten con un arma a otro civil o a un agente de policía.", sanction: null },
          { id: "EB-3.8", title: "Licencia y Vacaciones", content: "El personal puede tomar licencia o vacaciones con aprobación del General o los Coroneles (hasta dos semanas).", sanction: null },
          { id: "EB-3.9", title: "Bloquear Caminos", content: "El personal puede bloquear caminos para prevenir delitos (por ejemplo, entrega de guaraná por la mafia).", sanction: null },
          { id: "EB-3.10", title: "Chocar o Disparar a Vehículos", content: "El personal puede chocar o disparar contra vehículos para prevenir delitos como la entrega de guaraná.", sanction: null },
          { id: "EB-3.11", title: "Transportar Armas", content: "El personal puede transportar y almacenar armas en cualquier lugar.", sanction: null },
          { id: "EB-3.12", title: "Estacionamiento", content: "El personal puede estacionar vehículos personales en el territorio de la organización.", sanction: null }
        ]
      },
      {
        subtitle: "🚫 Capítulo 4 — Prohibiciones",
        articles: [
          { id: "EB-4.1", title: "Uniformes Militares", content: "Prohibido vender o perder uniformes militares.", sanction: null },
          { id: "EB-4.2", title: "Propiedad del Gobierno", content: "Prohibido vender cualquier propiedad del gobierno.", sanction: null },
          { id: "EB-4.3", title: "Solicitar Ascensos", content: "Prohibido solicitar ascensos de rango o puesto.", sanction: null },
          { id: "EB-4.4", title: "Abandonar la Base", content: "Prohibido abandonar la base sin permiso. Hacerlo sin reportarse se considera ausencia no autorizada.", sanction: null },
          { id: "EB-4.5", title: "Zonas Marginales", content: "Prohibido permanecer solo en barrios marginales innecesariamente.", sanction: null },
          { id: "EB-4.6", title: "Daño Físico sin Motivo", content: "Prohibido causar daño físico a compañeros, civiles, empleados o propiedades sin motivo.", sanction: null },
          { id: "EB-4.7", title: "Engaño", content: "Prohibido engañar a soldados o civiles.", sanction: null },
          { id: "EB-4.8", title: "Cuestionar Órdenes", content: "Prohibido discutir, ignorar o cuestionar órdenes de oficiales superiores.", sanction: null },
          { id: "EB-4.9", title: "Lenguaje Inapropiado", content: "Prohibido usar lenguaje obsceno, insultar o humillar a alguien.", sanction: null },
          { id: "EB-4.10", title: "Colaborar con Criminales", content: "Prohibido colaborar con grupos criminales o mafias.", sanction: null },
          { id: "EB-4.11", title: "Abuso de Autoridad", content: "Prohibido abusar de la autoridad en cualquier circunstancia.", sanction: null },
          { id: "EB-4.12", title: "Uso de Máscara", content: "Prohibido usar máscara innecesariamente. Su uso debe reportarse por radio indicando el motivo.", sanction: null },
          { id: "EB-4.13", title: "Acompañar Civiles en la Base", content: "Prohibido acompañar a civiles o miembros de pandillas dentro de la base.", sanction: null },
          { id: "EB-4.14", title: "Asuntos Personales en Servicio", content: "Prohibido manejar asuntos personales durante el trabajo.", sanction: null },
          { id: "EB-4.15", title: "Drogas y Alcohol", content: "Prohibido poseer o consumir drogas o alcohol estando de servicio.", sanction: null },
          { id: "EB-4.16", title: "Vehículos Oficiales", content: "Prohibido usar vehículos oficiales para fines personales.", sanction: null },
          { id: "EB-4.17", title: "Comportamiento Inapropiado", content: "Prohibido cualquier comportamiento inapropiado dentro o fuera del servicio.", sanction: null },
          { id: "EB-4.18", title: "Actividades Ilícitas", content: "Prohibido realizar actividades ilícitas durante el trabajo.", sanction: null },
          { id: "EB-4.19", title: "Megáfono", content: "Prohibido hacer mal uso del megáfono.", sanction: null },
          { id: "EB-4.20", title: "Empleos Secundarios", content: "Prohibido trabajar en empleos secundarios durante el servicio o estando de uniforme.", sanction: null },
          { id: "EB-4.21", title: "Sobornos", content: "Prohibido aceptar sobornos bajo cualquier circunstancia.", sanction: null },
          { id: "EB-4.22", title: "Armas para Uso Personal", content: "Prohibido usar armas del ejército para fines personales.", sanction: null },
          { id: "EB-4.23", title: "Puestos sin Reportar", content: "Prohibido ocupar o abandonar puestos sin reportarlo por radio.", sanction: null },
          { id: "EB-4.24", title: "Cambio de Puesto sin Autorización", content: "Prohibido cambiar o elegir puestos sin autorización de un superior.", sanction: null },
          { id: "EB-4.25", title: "Mal Uso de Radio y Chat", content: "Prohibido usar la radio y el chat del departamento para fines ajenos al trabajo.", sanction: null }
        ]
      },
      {
        subtitle: "🎯 Capítulo 5 — Reglas de Entrenamiento",
        articles: [
          { id: "EB-5.1", title: "Duración del Entrenamiento", content: "El tiempo de entrenamiento es de 5 minutos exactos.", sanction: null },
          { id: "EB-5.2", title: "Gestos Permitidos", content: "Prohibido el uso de gestos durante el entrenamiento. Excepción: levantar la mano.", sanction: null },
          { id: "EB-5.3", title: "Disciplina en Entrenamiento", content: "Prohibido quebrantar la disciplina durante el entrenamiento.", sanction: null },
          { id: "EB-5.4", title: "Radio en Entrenamiento", content: "Prohibido el uso de la radio durante el entrenamiento.", sanction: null },
          { id: "EB-5.5", title: "Hablar en Entrenamiento", content: "Prohibido hablar durante el entrenamiento, incluso en voz baja o susurrando.", sanction: null },
          { id: "EB-5.6", title: "Teléfono en Entrenamiento", content: "Prohibido el uso del teléfono durante el entrenamiento.", sanction: null },
          { id: "EB-5.7", title: "Armas en Entrenamiento", content: "Prohibido portar o usar armas durante el entrenamiento.", sanction: null }
        ]
      },
      {
        subtitle: "📡 Capítulo 6 — Comunicación y Subordinación",
        articles: [
          { id: "EB-6.1", title: "Comunicación con Ciudadanos", content: "El personal del ejército debe comunicarse cortésmente con todos los ciudadanos, independientemente de su estatus.", sanction: null },
          { id: "EB-6.2", title: "Conducta en Radio y Chat", content: "Prohibidos los asuntos personales, los insultos y las discusiones por radio o en el chat del departamento.", sanction: null }
        ]
      },
      {
        subtitle: "⏰ Capítulo 7 — Horario de Trabajo",
        articles: [
          { id: "EB-7.1", title: "Horas Mínimas Semanales", content: "El personal del ejército debe cumplir un mínimo de 7 horas de juego por semana.", sanction: null },
          { id: "EB-7.2", title: "Ausencia Máxima", content: "La ausencia máxima permitida sin justificación es de 3 días consecutivos.", sanction: null }
        ]
      }
    ]
  },

  hospitalRules: {
    id: "hospital",
    title: "Reglamento del Hospital",
    icon: "🏥",
    color: "#50c8a0",
    description: "Reglamento oficial del Hospital. Horario laboral: 8:00 a 22:00. Descanso: 12:00 a 13:00. El Director y los 3 Subdirectores tienen autoridad para aplicar medidas disciplinarias de forma independiente.",
    sections: [
      {
        subtitle: "📜 Capítulo 1 — Disposiciones Generales",
        articles: [
          { id: "H-1.1", title: "Conocimiento del Reglamento", content: "Todo el personal del hospital debe conocer y cumplir este reglamento.", sanction: null },
          { id: "H-1.2", title: "Sanciones por Incumplimiento", content: "Por incumplimiento de los artículos del reglamento, los empleados pueden enfrentar: advertencia / amonestación / despido / despido con inclusión en la lista negra.", sanction: null },
          { id: "H-1.3", title: "Derecho a Apelación", content: "Todo empleado tiene derecho a apelar su sanción.", sanction: null },
          { id: "H-1.4", title: "Uso de Uniforme", content: "Durante el horario laboral, todos los empleados deben usar uniforme. Se puede solicitar permiso a los líderes o subdirectores.", sanction: null },
          { id: "H-1.5", title: "Ruta de Escape", content: "Prohibido usar el hospital como ruta de escape estratégica para evitar acciones de rol.", sanction: null },
          { id: "H-1.6", title: "Acampar", content: "Prohibido acampar (esperar para matar o secuestrar a alguien) dentro de las instalaciones.", sanction: null },
          { id: "H-1.7", title: "Metajuego y Abuso de Poder", content: "Cualquier tipo de metajuego o abuso de poder está prohibido dentro de las instalaciones.", sanction: null },
          { id: "H-1.8", title: "Agresión Física o Verbal", content: "Prohibido iniciar cualquier tipo de agresión física o verbal dentro del hospital.", sanction: null },
          { id: "H-1.9", title: "Desenfundar Armas", content: "Prohibido desenfundar armas dentro de las instalaciones del hospital.", sanction: null },
          { id: "H-1.20", title: "Actos Delictivos", content: "Prohibido cometer robos, secuestros o cualquier acto delictivo dentro del hospital. El hospital se considera un área neutral, excepto en situaciones previamente autorizadas por la administración.", sanction: null },
          { id: "H-1.21", title: "Ventaja Injusta en RP", content: "Prohibido utilizar el hospital para obtener ventajas injustas en acciones de RP, como huir de confrontaciones, esconderse de persecuciones o evitar consecuencias de actos delictivos.", sanction: null },
          { id: "H-1.22", title: "Desorden en Instalaciones", content: "Prohibido realizar actos delictivos, peleas, amenazas, disparos o causar desorden dentro del hospital. El incumplimiento se considerará violación de RP y puede conllevar sanciones administrativas según la gravedad.", sanction: null }
        ]
      },
      {
        subtitle: "📋 Capítulo 2 — Deberes Principales",
        articles: [
          { id: "H-2.1", title: "Cumplimiento de Leyes", content: "Cumplir con las leyes del estado y los estatutos de la organización, garantizando su cumplimiento.", sanction: null },
          { id: "H-2.2", title: "Proteger la Vida", content: "Proteger la vida de los ciudadanos por todos los medios y métodos disponibles.", sanction: null },
          { id: "H-2.3", title: "Cadena de Mando", content: "Seguir la cadena de mando dentro y fuera del hospital.", sanction: null },
          { id: "H-2.4", title: "Obedecer Órdenes", content: "Acatar sin cuestionar las órdenes y requisitos de los superiores dentro del marco legal.", sanction: null },
          { id: "H-2.5", title: "Atención Universal", content: "Los profesionales de la salud deben brindar asistencia médica a cualquier persona que la necesite, independientemente de su estatus social, situación económica o afiliación racial, religiosa o política.", sanction: null },
          { id: "H-2.6", title: "Respuesta a Llamadas", content: "Responder de inmediato a las llamadas de ambulancia y brindar primeros auxilios a las víctimas.", sanction: null },
          { id: "H-2.7", title: "Trato al Ciudadano", content: "Ser amable y cortés al comunicarse con los ciudadanos en todo momento.", sanction: null },
          { id: "H-2.8", title: "Conducta Profesional", content: "Seguir los procedimientos internos de la organización. Los médicos deben mantener una conducta profesional durante toda la consulta.", sanction: null },
          { id: "H-2.9", title: "Abandonar Atención", content: "Prohibido abandonar la atención médica en curso sin justificación.", sanction: null },
          { id: "H-2.10", title: "Protocolos Médicos", content: "Es obligatorio seguir los protocolos médicos definidos por el equipo de atención médica.", sanction: null }
        ]
      },
      {
        subtitle: "✅ Capítulo 3 — Derechos del Personal",
        articles: [
          { id: "H-3.1", title: "Solicitar Abandono", content: "El personal puede solicitar a cualquier ciudadano que abandone el edificio o el territorio si representa una amenaza.", sanction: null },
          { id: "H-3.2", title: "Asistencia por Radio", content: "El personal puede solicitar asistencia por radio en cualquier momento.", sanction: null },
          { id: "H-3.3", title: "Consultas a Superiores", content: "El personal puede hacer preguntas a los superiores cuando lo considere necesario.", sanction: null },
          { id: "H-3.4", title: "Llamadas en Pareja", content: "El personal puede responder a las llamadas de ambulancia en parejas.", sanction: null },
          { id: "H-3.6", title: "Portar Armas con Licencia", content: "El personal puede portar armas con licencia dentro de sus funciones.", sanction: null },
          { id: "H-3.7", title: "Negar Atención", content: "El personal puede negarse a atender a pacientes groseros o con comportamiento inapropiado.", sanction: null },
          { id: "H-3.8", title: "Permisos y Vacaciones", content: "El personal puede solicitar permiso o vacaciones coordinadas con el líder o subdirector (hasta dos semanas).", sanction: null },
          { id: "H-3.9", title: "Estacionamiento", content: "El personal puede estacionar vehículos personales en el estacionamiento de la organización.", sanction: null }
        ]
      },
      {
        subtitle: "🩺 Capítulo 7 — Pacientes",
        articles: [
          { id: "H-7.1", title: "Valorar la Propia Vida (VL)", content: "Es obligatorio valorar la propia vida en todo momento.", sanction: null },
          { id: "H-7.2", title: "Levantarse tras Reanimación", content: "Prohibido levantarse o huir inmediatamente después de la reanimación sin una interpretación adecuada de la situación.", sanction: null },
          { id: "H-7.3", title: "Tiempo de Recuperación", content: "Es obligatorio respetar el tiempo de recuperación estipulado por el equipo médico.", sanction: null },
          { id: "H-7.4", title: "Respetar la Fila", content: "Es obligatorio respetar la fila y el orden de atención.", sanction: null },
          { id: "H-7.5", title: "Anti-RP en Atención", content: "Prohibido interrumpir la atención médica con bromas, provocaciones o acciones sin sentido (Anti-RP).", sanction: null },
          { id: "H-7.6", title: "Exigir Atención Inmediata", content: "Prohibido exigir atención inmediata sin una justificación plausible de RP.", sanction: null },
          { id: "H-7.7", title: "RP Completo en Atención", content: "Es obligatorio que médicos y pacientes realicen un RP completo durante la atención hospitalaria.\n\nLos pacientes deben interpretar el dolor, las lesiones y las reacciones a los procedimientos de forma realista, evitando levantarse o actuar con normalidad sin interpretación adecuada.\n\nLos médicos deben usar comandos y acciones médicas de manera coherente, describiendo los procedimientos y manteniendo la inmersión en el rol.\n\nRecuerden que el servidor se centra en la generación de rol; todas las situaciones médicas deben interpretarse fiel y completamente.", sanction: null }
        ]
      },
      {
        subtitle: "👮 Capítulo 8 — Policía en el Hospital",
        articles: [
          { id: "H-8.1", title: "Persecución Activa", content: "Prohibido entrar al hospital en persecución activa, salvo que las reglas del servidor lo permitan expresamente.", sanction: null },
          { id: "H-8.2", title: "Disparar dentro del Hospital", content: "Prohibido disparar dentro del hospital bajo cualquier circunstancia.", sanction: null },
          { id: "H-8.3", title: "Personal Policial en Entrada", content: "Es obligatorio mantener personal policial en la entrada del hospital durante acciones o movimientos pertinentes. Mínimo 2 oficiales presentes y activos. La ausencia del mínimo o inactividad de los oficiales designados se considerará falla operativa.", sanction: "El jefe de la corporación puede recibir 1 advertencia directa (1/3)" }
        ]
      },
      {
        subtitle: "🏛️ Capítulo 9 — Área Pública",
        articles: [
          { id: "H-9.1", title: "Zona de Libre Circulación", content: "El hospital se considera un área pública. Los jugadores pueden permanecer y moverse libremente dentro de las instalaciones, siempre que no cometan actos de desorden, perturben la paz o infrinjan las reglas.", sanction: null },
          { id: "H-9.2", title: "Expulsión de Jugadores", content: "Prohibido expulsar a jugadores del hospital a menos que hayan cometido una infracción o causado desorden. Se permite permanecer dentro siempre que se respete el orden, el entorno y las normas del servidor.", sanction: null }
        ]
      },
      {
        subtitle: "🚑 Capítulo 10 — Autoridad Médica y Circulación",
        articles: [
          { id: "H-10.1", title: "Libre Circulación de Paramédicos", content: "Los paramédicos tienen permitido circular por cualquier parte del mapa en patrullas para brindar asistencia médica. Ningún jugador puede impedir, ordenar o restringir su movimiento durante sus funciones.\n\nEl hospital tiene autoridad para acceder a lugares públicos y privados exclusivamente para brindar atención médica cuando un jugador requiera asistencia.\n\nSi el paciente falta el respeto al equipo médico, causa desorden o infringe las normas durante el tratamiento, el médico decidirá si le presta asistencia.\n\nCualquier intento de impedir o interrumpir el trabajo del equipo médico se considerará Anti-RP y estará sujeto a sanciones administrativas correspondientes.", sanction: null }
        ]
      }
    ]
  },

  factionRules: {
    id: "facciones",
    title: "Reglamento de Facciones",
    icon: "⚔️",
    color: "#e85050",
    description: "Normas oficiales que rigen el funcionamiento, reclutamiento, guerras y conducta de todas las facciones criminales del servidor.",
    sections: [
      {
        subtitle: "📜 1. Disposiciones Generales",
        articles: [
          { id: "F-1.1", title: "Conocimiento de Reglas", content: "Cada miembro de la facción debe conocer y seguir todas las reglas.", sanction: null },
          { id: "F-1.2", title: "Violación de Reglas", content: "La violación de cualquier regla puede resultar en sanción. Al alcanzar 3/3 advertencias, el líder de la organización será disuelto automáticamente.", sanction: "1/3 de advertencia para la facción" }
        ]
      },
      {
        subtitle: "🔫 2. Reglas Generales de la Banda",
        articles: [
          { id: "F-2.1", title: "Matar sin Diálogo de RP", content: "Prohibido matar a cualquier jugador sin diálogo previo de rol y sin razón válida.\nExcepción: provocación directa que justifique reacción inmediata.", sanction: "60 minutos de cárcel (DM - 4.6)" },
          { id: "F-2.2", title: "Hostilidad entre Facciones", content: "Todas las facciones se consideran automáticamente hostiles entre sí.", sanction: null },
          { id: "F-2.3", title: "Matar en Punto de Aparición", content: "Prohibido matar a jugadores pacíficos en el punto de aparición de la facción sin diálogo o provocación válida de RP.", sanction: "60 minutos de cárcel (SK - 4.8)" },
          { id: "F-2.4", title: "Motivo al Matar Rival", content: "Al matar a un miembro de una facción rival, es obligatorio tener un motivo válido y realizar un diálogo de rol mínimo que revele la motivación.\nExcepción: acciones de captura de territorio.", sanction: null },
          { id: "F-2.5", title: "Presencia Mínima Diaria", content: "La organización debe mantener al menos 20 miembros conectados diariamente entre las 15:00 y las 21:00. Si no se cumple, la facción recibirá una advertencia. Al alcanzar 3/3, el líder será expulsado automáticamente.", sanction: "1/3 de advertencia para la facción" },
          { id: "F-2.6", title: "Lenguaje en Radio", content: "Prohibido usar lenguaje obsceno o insultos en la radio de la banda.", sanction: "Expulsión de la organización" },
          { id: "F-2.7", title: "Cooperación con Gobierno", content: "Prohibido cooperar con facciones gubernamentales durante los eventos. Al alcanzar 3/3 advertencias, el líder será destituido automáticamente.", sanction: "1/3 de advertencia para la facción" },
          { id: "F-2.8", title: "Fuego Amigo (TK)", content: "Prohibido participar en combates JcJ, agredir, disparar o matar a miembros de tu propia facción.", sanction: "Expulsión de la organización | Con pruebas: 60 minutos de cárcel (TK - 4.9)" },
          { id: "F-2.9", title: "Obedecer al Liderazgo", content: "Los miembros deben obedecer las órdenes del Líder y el Vicelíder.", sanction: "Expulsión de la organización" },
          { id: "F-2.10", title: "Solicitar Ascenso", content: "Prohibido solicitar un ascenso de rango directamente al liderazgo.", sanction: "Expulsión de la organización" },
          { id: "F-2.11", title: "Cooperación en Eventos", content: "Prohibido cooperar con facciones gubernamentales u otras facciones durante:\na) Venta de guaraná\nb) Entrega de materiales\nAl acumular 3/3 advertencias, el líder será expulsado automáticamente.", sanction: "1/3 de advertencia para la facción" }
        ]
      },
      {
        subtitle: "❄️ 3. Reglas de Congelación",
        articles: [
          { id: "F-3.1", title: "Límite de Congelaciones", content: "Cada líder puede aplicar un máximo de 3 congelaciones durante su mandato.", sanction: null },
          { id: "F-3.2", title: "Duración Máxima", content: "La duración máxima de cada congelación es de 3 días.", sanction: null },
          { id: "F-3.3", title: "Intervalo entre Congelaciones", content: "Debe haber un intervalo mínimo de 3 días entre cada congelación solicitada.", sanction: null },
          { id: "F-3.4", title: "Una Congelación Simultánea", content: "Solo se puede congelar una facción simultáneamente.", sanction: null },
          { id: "F-3.5", title: "Congelación Inicial", content: "Al asumir el liderazgo, la facción recibe automáticamente una congelación de 72 horas para:\na) Reclutamiento de miembros\nb) Organización interna\nc) Preparación de existencias", sanction: null }
        ]
      },
      {
        subtitle: "🗺️ 4. Captura de Territorio",
        articles: [
          { id: "F-4.1", title: "Perder Territorio Intencionalmente", content: "Prohibido perder intencionalmente un territorio capturado. Al acumular 3/3 advertencias, el líder será expulsado automáticamente.", sanction: "1/3 de advertencia para la facción" },
          { id: "F-4.2", title: "Perder Capturas Deliberadamente", content: "Prohibido perder deliberadamente capturas de territorio. Al acumular 3/3 advertencias, el líder será suspendido automáticamente.", sanction: "1/3 de advertencia para la facción" },
          { id: "F-4.3", title: "Cooperar con Enemigos en Captura", content: "Prohibido cooperar con miembros de facciones enemigas durante las capturas de territorio.", sanction: "1/3 de advertencia para la facción" },
          { id: "F-4.4", title: "Interrumpir Animaciones", content: "Prohibido interrumpir las animaciones durante las acciones de captura de territorio.", sanction: "1/3 de advertencia para la facción" }
        ]
      },
      {
        subtitle: "🏗️ 5. Estructura y Límites",
        articles: [
          { id: "F-5.1", title: "Límite de Miembros", content: "El límite máximo es de 150 miembros por facción.", sanction: null },
          { id: "F-5.2", title: "Estructura Interna", content: "La estructura interna debe contener un máximo de:\na) 1 Líder\nb) 2 Sublíderes\nc) 3 Gerentes\nAl alcanzar 3/3 advertencias, el líder será destituido automáticamente.", sanction: "1/3 de advertencia para la facción" },
          { id: "F-5.3", title: "Inactividad del Líder", content: "Una facción con un líder inactivo por más de 3 días sin justificación perderá el liderazgo. El servidor deberá notificar al superior correspondiente.", sanction: null },
          { id: "F-5.4", title: "Suspensión del Líder", content: "Las suspensiones de 3 días o más resultarán en la destitución y reinicio automático de la facción sin previo aviso.", sanction: null }
        ]
      },
      {
        subtitle: "🤝 6. Conducta e Interacciones",
        articles: [
          { id: "F-6.1", title: "Provocar al Gobierno", content: "Prohibido provocar a empleados de organizaciones gubernamentales.", sanction: "60 min de prisión - Forzar Rol (3.23)" },
          { id: "F-6.2", title: "Ausentarse en Guerras", content: "Prohibido ausentarse durante las guerras territoriales.", sanction: "Expulsión (2.2)" },
          { id: "F-6.3", title: "Acciones con Familias", content: "Prohibido realizar acciones con familias. Al alcanzar 3/3 advertencias, el líder será suspendido automáticamente.", sanction: "1/3 de advertencia para la facción" },
          { id: "F-6.4", title: "Alianzas con Familias", content: "Prohibido formar alianzas con familias ajenas a la facción. Al alcanzar 3/3 advertencias, el líder será suspendido automáticamente.", sanction: "1/3 de advertencia para la facción" },
          { id: "F-6.5", title: "Relación con Rivales", content: "Prohibido cualquier tipo de relación o participación entre miembros de facciones rivales.", sanction: "1/3 de advertencia para la facción" },
          { id: "F-6.6", title: "Abandonar la Facción", content: "Los miembros que deseen abandonar deben:\na) Esperar 24 horas para unirse a otra facción\nb) Para regresar a la misma facción, esperar 48 horas", sanction: null },
          { id: "F-6.7", title: "Respetar Jerarquía", content: "Prohibido faltar el respeto a la jerarquía de la facción.", sanction: "Advertencia verbal del líder" },
          { id: "F-6.8", title: "Uniforme Obligatorio", content: "Prohibido estar en las favelas sin el uniforme de la facción.", sanction: "Expulsión sin uniforme (2.2)" }
        ]
      },
      {
        subtitle: "⚔️ 7. Acción y Conflicto",
        articles: [
          { id: "F-7.1", title: "Invasiones por Soporte", content: "Todas las invasiones y pacificaciones deben programarse a través de soporte.", sanction: "INA (4.21)" },
          { id: "F-7.2", title: "Límite de Invasiones", content: "Las invasiones solo pueden realizarse una vez al día y deben contar con al menos 4 miembros conectados por bando en la ciudad.", sanction: "60 minutos de cárcel (FALLO - 4.22)" },
          { id: "F-7.3", title: "Refuerzos en Pacificación", content: "Tras el inicio de la pacificación policial en favelas o lugares de registro, se prohíbe la entrada de refuerzos de ambos bandos. Al alcanzar 3/3 advertencias, el líder será desactivado automáticamente.", sanction: "1/3 de advertencia para la facción" },
          { id: "F-7.4", title: "Atención Médica en Acción", content: "Al morir durante una acción, el jugador debe esperar a que termine antes de recibir atención médica.", sanction: null },
          { id: "F-7.5", title: "Hablar Estando Muerto", content: "Prohibido hablar estando 'muerto' durante una acción.", sanction: "40 minutos de silencio (3.26)" },
          { id: "F-7.6", title: "Varios Equipos contra Policía", content: "Ningún tipo de acción callejera puede involucrar a varios equipos contra la policía. Solo un equipo puede participar en la acción.", sanction: "60 minutos de cárcel (FALLO - 4.22)" },
          { id: "F-7.7", title: "Valorar la Propia Vida", content: "Todos los criminales deben valorar su propia vida. Acudir a la policía o al ejército sin previo aviso está prohibido.", sanction: "40 minutos de cárcel (SAAV - 4.10)" }
        ]
      },
      {
        subtitle: "🏘️ 8. Combate, JcJ y Territorios",
        articles: [
          { id: "F-8.1", title: "JcJ en Zonas Base", content: "El JcJ está prohibido en las zonas base.", sanction: "60 minutos de cárcel (RDM - 4.2)" },
          { id: "F-8.2", title: "Invadir para Forzar JcJ", content: "Entrar en territorios de otras facciones para forzar JcJ está prohibido.", sanction: "60 minutos de cárcel (RDM - 4.2)" },
          { id: "F-8.3", title: "Alianzas con Dos Facciones", content: "Mientras solo haya dos facciones en la ciudad, cualquier tipo de alianza entre ellas está prohibida. Al alcanzar 3/3 advertencias, el líder será desactivado automáticamente.", sanction: "1/3 de advertencia para la facción" },
          { id: "F-8.4", title: "Interferir en Asaltos", content: "Prohibido que una facción interfiera con otra durante asaltos o robos.", sanction: "60 minutos de cárcel (AAP - 4.17)" }
        ]
      },
      {
        subtitle: "💰 9. Delitos y Bienes",
        articles: [
          { id: "F-9.1", title: "Forzar Transferencia de Dinero", content: "Prohibido obligar a la víctima a transferir dinero o bienes, incluyendo llevarla al banco para retirar fondos.", sanction: "1/3 de advertencia para la facción | Al acumular 3/3: líder expulsado" },
          { id: "F-9.2", title: "Robo de Vehículos", content: "Prohibido robar vehículos.", sanction: "1/3 de advertencia para la facción | Al acumular 3/3: líder expulsado" },
          { id: "F-9.3", title: "Huida sin Criminalidad", content: "Los sospechosos que inicien una huida sin tener un nivel de criminalidad recibirán el castigo máximo por Forzar Juego de Rol.", sanction: "60 minutos de cárcel (3.23)" }
        ]
      },
      {
        subtitle: "📋 10. Reclutamiento",
        articles: [
          { id: "F-10.1", title: "Canales de Reclutamiento", content: "El reclutamiento debe realizarse únicamente dentro del juego o a través del Discord oficial de las organizaciones.", sanction: "Advertencia verbal" }
        ]
      },
      {
        subtitle: "🏆 Calendario de Toma de Territorio",
        articles: [
          { id: "F-CAL", title: "Horarios Oficiales", content: "Miércoles\n• 19:00 — Toma de Territorio\n• 23:00 — Toma de Territorio 🏆 Premio: 20.000 materiales\n\nJueves\n• 19:00 — Toma de Territorio\n• 23:00 — Toma de Territorio\n\nViernes\n• 19:00 — Toma de Territorio\n• 23:00 — Toma de Territorio 🏆 Premio: 20.000 materiales\n\nEl premio se ubica en el último horario en días alternos para aumentar la participación. El pago se realizará dentro de las 48 horas posteriores a la acción.", sanction: null }
        ]
      },
      {
        subtitle: "📌 11. Disposiciones Finales",
        articles: [
          { id: "F-11.1", title: "Alianzas con Familias Externas", content: "Las facciones tienen prohibido formar alianzas con familias que no pertenezcan oficialmente a la facción. Al acumular 3/3 advertencias, el líder será expulsado automáticamente.", sanction: "1/3 de advertencia para la facción" },
          { id: "F-11.2", title: "Límite de Miembros", content: "El incumplimiento del límite máximo de miembros resultará en una advertencia verbal o sanción por infracción de normas para la facción.", sanction: "Advertencia verbal o sanción por infracción" }
        ]
      }
    ]
  }
};
