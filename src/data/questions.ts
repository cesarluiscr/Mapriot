export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  chapter: string;
}

export const questions: Question[] = [
  {
    id: 1,
    chapter: "Fundamentos Generales",
    question: "¿Qué significan las siglas MAPRIOT?",
    options: [
      "Manual de Planificación Rural Integral de Ordenamiento Territorial",
      "Manual de Planes Reguladores como Instrumento de Ordenamiento Territorial",
      "Manual de Planes Regionales de Infraestructura y Ordenamiento Territorial",
      "Modelo de Planificación y Regulación del Ordenamiento Territorial"
    ],
    correctAnswer: 1,
    explanation: "MAPRIOT significa Manual de Planes Reguladores como Instrumento de Ordenamiento Territorial, desarrollado por el INVU."
  },
  {
    id: 2,
    chapter: "Fundamentos Generales",
    question: "¿Cuál es el objetivo principal del MAPRIOT?",
    options: [
      "Sustituir a la Ley de Planificación Urbana",
      "Regular exclusivamente la construcción de viviendas de interés social",
      "Orientar a los gobiernos municipales en la formulación, actualización y revisión de Planes Reguladores",
      "Establecer multas por construcciones ilegales"
    ],
    correctAnswer: 2,
    explanation: "Su objetivo es proporcionar lineamientos técnicos, normativos y metodológicos que guíen a las municipalidades en los procesos de planificación territorial."
  },
  {
    id: 3,
    chapter: "Marco Jurídico",
    question: "¿Cuál es la ley marco que regula la planificación urbana en Costa Rica?",
    options: [
      "Ley N.° 7554",
      "Ley N.° 4240",
      "Ley N.° 1788",
      "Ley N.° 9036"
    ],
    correctAnswer: 1,
    explanation: "La Ley N.° 4240 is the Ley de Planificación Urbana, del 15 de noviembre de 1968, base normativa principal para los planes reguladores."
  },
  {
    id: 4,
    chapter: "Definiciones",
    question: "Según el manual, ¿qué es el 'Alineamiento'?",
    options: [
      "La posición de los edificios respecto al sol",
      "El trazado de las calles en un nuevo fraccionamiento",
      "Distancia o límite físico mínimo para el emplazamiento de una edificación respecto a vías públicas u otros elementos",
      "La nivelación del terreno antes de construir"
    ],
    correctAnswer: 2,
    explanation: "El alineamiento es el límite mínimo para ubicar una edificación respecto a vías, ríos, nacientes, zonas especiales, etc."
  },
  {
    id: 5,
    chapter: "Elaboración del Plan",
    question: "¿Cuáles son los cuatro productos entregables fundamentales de un Plan Regulador?",
    options: [
      "Mapa base, Informe de campo, Censo y Patentes",
      "Diagnóstico, Pronóstico, Política de Desarrollo Urbano y Reglamentos de Desarrollo Urbano",
      "Presupuesto, Plan de obras, Viabilidad vial y Licencias",
      "EIVA-POT, SETENA, INVU y Municipalidad"
    ],
    correctAnswer: 1,
    explanation: "De conformidad con la Ley 4240, los entregables clave son el Diagnóstico, Pronóstico, la Política y los Reglamentos de Desarrollo Urbano."
  },
  {
    id: 6,
    chapter: "Marco Jurídico",
    question: "¿Qué artículo de la Constitución Política confiere a los gobiernos locales el mandato de administrar los intereses locales?",
    options: [
      "Artículo 169",
      "Artículo 170",
      "Artículo 50",
      "Artículo 121"
    ],
    correctAnswer: 0,
    explanation: "El Artículo 169 de la Constitución otorga a las municipalidades la administración de los intereses y servicios locales en cada cantón."
  },
  {
    id: 7,
    chapter: "Ambiente",
    question: "¿Qué significa la sigla IFA en el contexto de los estudios ambientales?",
    options: [
      "Infraestructura Ferroviaria Ambiental",
      "Índice de Fragilidad Ambiental",
      "Informe de Factibilidad Agraria",
      "Instrumento de Financiación Ambiental"
    ],
    correctAnswer: 1,
    explanation: "IFA se refiere al Índice de Fragilidad Ambiental, que determina la carga ambiental de un espacio geográfico."
  },
  {
    id: 8,
    chapter: "Elaboración del Plan",
    question: "¿Qué es la 'Planificación en Cascada'?",
    options: [
      "Un método para construir acueductos",
      "La construcción secuencial de edificios",
      "Enfoque que integra niveles de planificación desde lo nacional, regional hasta lo local",
      "Un sistema de evacuación de aguas pluviales"
    ],
    correctAnswer: 2,
    explanation: "Es un enfoque que integra los diferentes niveles de planificación territorial para asegurar su coherencia y complementariedad."
  },
  {
    id: 9,
    chapter: "Ambiente",
    question: "¿Qué instancia es la encargada de otorgar la Viabilidad Ambiental?",
    options: [
      "INVU",
      "CNE",
      "SETENA",
      "MIDEPLAN"
    ],
    correctAnswer: 2,
    explanation: "La Secretaría Técnica Nacional Ambiental (SETENA) es la encargada de otorgar la Viabilidad Ambiental."
  },
  {
    id: 10,
    chapter: "Definiciones",
    question: "¿Cuál es la diferencia entre un Plan Regulador Total y uno Parcial?",
    options: [
      "El Total incluye planos y el Parcial no",
      "El Total abarca toda el área planificable del cantón y el Parcial solo una porción",
      "El Total es permanente y el Parcial temporal",
      "El Total es nacional y el Parcial local"
    ],
    correctAnswer: 1,
    explanation: "El Plan Regulador Total abarca la totalidad del Área Planificable del Cantón, mientras que el Parcial se enfoca en sectores específicos."
  },
  {
    id: 11,
    chapter: "Régimen Municipal",
    question: "¿Cuál de los siguientes NO es uno de los Reglamentos de Desarrollo Urbano básicos?",
    options: [
      "Reglamento de Zonificación",
      "Reglamento de Fraccionamiento y Urbanización",
      "Reglamento de Patentes Comerciales",
      "Reglamento de Construcciones"
    ],
    correctAnswer: 2,
    explanation: "Los cinco básicos son: Zonificación, Fraccionamiento y Urbanización, Mapa Oficial, Renovación Urbana y Construcciones."
  },
  {
    id: 12,
    chapter: "Elaboración del Plan",
    question: "¿A qué pregunta responde el 'Diagnóstico Territorial'?",
    options: [
      "¿Hacia dónde queremos ir?",
      "¿Cómo llegamos allí?",
      "¿Dónde estamos?",
      "¿Quién es responsable?"
    ],
    correctAnswer: 2,
    explanation: "El diagnóstico responde a '¿Dónde estamos?' identificando las condiciones actuales, problemáticas y recursos del territorio."
  },
  {
    id: 13,
    chapter: "Territorio",
    question: "¿Cuál es la extensión aproximada del territorio continental de Costa Rica?",
    options: [
      "25,000 km²",
      "51,100 km²",
      "75,000 km²",
      "100,000 km²"
    ],
    correctAnswer: 1,
    explanation: "El territorio continental de Costa Rica abarca aproximadamente 51,100 km²."
  },
  {
    id: 14,
    chapter: "Territorio",
    question: "¿En cuántas grandes cuencas hidrográficas se divide Costa Rica?",
    options: [
      "12",
      "24",
      "34",
      "50"
    ],
    correctAnswer: 2,
    explanation: "Costa Rica se divide en 34 grandes cuencas hidrográficas (16 al Pacífico y 18 al Caribe)."
  },
  {
    id: 15,
    chapter: "Ambiente",
    question: "¿Cuántas Áreas de Conservación tiene actualmente Costa Rica?",
    options: [
      "7",
      "11",
      "15",
      "20"
    ],
    correctAnswer: 1,
    explanation: "Costa Rica cuenta con 11 Áreas de Conservación que gestionan las Áreas Silvestres Protegidas."
  },
  {
    id: 16,
    chapter: "Audiencia Pública",
    question: "¿Con cuánta antelación mínima se debe convocar a la audiencia pública?",
    options: [
      "5 días hábiles",
      "10 días hábiles",
      "15 días hábiles",
      "30 días naturales"
    ],
    correctAnswer: 2,
    explanation: "La convocatoria debe hacerse con una antelación no menor de quince días hábiles."
  },
  {
    id: 17,
    chapter: "Participación Ciudadana",
    question: "¿Qué nivel de participación implica que las personas sean copartícipes del proceso, aunque los aportes no sean vinculantes?",
    options: [
      "Informar",
      "Consultar",
      "Involucrar",
      "Empoderar"
    ],
    correctAnswer: 2,
    explanation: "El nivel de 'Involucrar' incorpora de manera activa a las personas como copartícipes del proceso."
  },
  {
    id: 18,
    chapter: "Definiciones",
    question: "¿Qué es el 'Amanzanamiento'?",
    options: [
      "La plantación de árboles frutales",
      "El tamaño y forma de las manzanas o bloque de lotes",
      "El proceso de pintar las aceras",
      "La recolección de residuos orgánicos"
    ],
    correctAnswer: 1,
    explanation: "Amanzanamiento se refiere al tamaño y forma de las manzanas o bloques de lotes en el diseño urbano."
  },
  {
    id: 19,
    chapter: "Definiciones",
    question: "¿Qué se conoce como 'Zona Marítimo Terrestre'?",
    options: [
      "La zona de los primeros 200 metros de la costa",
      "Cualquier terreno que tenga un río cerca",
      "La zona exclusiva de pesca en mar abierto",
      "El puerto de entrada de mercancías"
    ],
    correctAnswer: 0,
    explanation: "La ZMT abarca los primeros 200 metros de terreno a lo largo de los litorales."
  },
  {
    id: 20,
    chapter: "Adopción del Plan",
    question: "¿Cómo se oficializa la entrada en vigor de un Plan Regulador?",
    options: [
      "Con la firma del Alcalde",
      "Con un acuerdo del Concejo",
      "Mediante la publicación en el Diario Oficial La Gaceta",
      "Cuando lo apruebe el MIVAH"
    ],
    correctAnswer: 2,
    explanation: "Un Plan Regulador entra en vigor al ser publicado oficialmente en el Diario Oficial La Gaceta."
  },
  {
    id: 21,
    chapter: "Ambiente",
    question: "¿Qué es 'SETENA'?",
    options: [
      "Secretaría Técnica Nacional Ambiental",
      "Servicio Territorial de Energía Atómica",
      "Sistema Estatal de Transporte y Navegación",
      "Sociedad de Estudios de Tierras y Agua"
    ],
    correctAnswer: 0,
    explanation: "SETENA is the Secretaría Técnica Nacional Ambiental, rectora en materia de impacto ambiental."
  },
  {
    id: 22,
    chapter: "Marco Jurídico",
    question: "¿Qué ley creó el INVU en 1954?",
    options: [
      "Ley N.° 4240",
      "Ley N.° 1788",
      "Ley N.° 7554",
      "Ley N.° 3155"
    ],
    correctAnswer: 1,
    explanation: "La Ley N.° 1788 del 24 de agosto de 1954 is the Ley Orgánica del Instituto Nacional de Vivienda y Urbanismo."
  },
  {
    id: 23,
    chapter: "Etapas",
    question: "¿Cuál es la Etapa 1 del proceso de elaboración del Plan Regulador según el MAPRIOT?",
    options: [
      "Elaboración del mapa base",
      "Preparación preliminar",
      "Diagnóstico territorial",
      "Audiencia pública"
    ],
    correctAnswer: 1,
    explanation: "La Etapa 1 is the Preparación Preliminar, que incluye la designación del Órgano Local de Planificación."
  },
  {
    id: 24,
    chapter: "Definiciones",
    question: "¿Qué significa 'VUI'?",
    options: [
      "Vivienda Urbana Integral",
      "Ventanilla Única de Inversión",
      "Vehículo de Utilidad Institucional",
      "Vía Urbana de Interconexión"
    ],
    correctAnswer: 1,
    explanation: "VUI is the Ventanilla Única de Inversión, plataforma digital para facilitar trámites de planes reguladores."
  },
  {
    id: 25,
    chapter: "Ambiente",
    question: "¿Cuál es el sistema de proyección oficial para la cartografía en Costa Rica?",
    options: [
      "WGS84",
      "CRTM-05",
      "Lambert",
      "UTM"
    ],
    correctAnswer: 1,
    explanation: "El sistema oficial is the Costarrican Transversal Mercator 2005 (CRTM-05)."
  },
  {
    id: 26,
    chapter: "Pueblos Indígenas",
    question: "¿Cuántos territorios indígenas existen actualmente en Costa Rica según el manual?",
    options: [
      "12",
      "18",
      "24",
      "30"
    ],
    correctAnswer: 2,
    explanation: "El manual identifica la existencia de 24 territorios indígenas en el país."
  },
  {
    id: 27,
    chapter: "Definiciones",
    question: "¿Qué es el 'Cuadrante Urbano'?",
    options: [
      "Un parque central de la ciudad",
      "El área urbana o ámbito territorial de desenvolvimiento de un centro de población",
      "Una medida de área equivalente a una hectárea",
      "El edificio de la municipalidad"
    ],
    correctAnswer: 1,
    explanation: "Es el área urbana donde se encuentra la mayoría de los bienes y servicios de un centro de población."
  },
  {
    id: 28,
    chapter: "Régimen Municipal",
    question: "¿Cómo se llama el órgano colegiado que discute y toma decisiones en la municipalidad?",
    options: [
      "Asamblea Local",
      "Gabinete Municipal",
      "Concejo Municipal",
      "Junta Directiva de Cantón"
    ],
    correctAnswer: 2,
    explanation: "El Concejo Municipal is the cuerpo deliberativo integrado por regidores de elección popular."
  },
  {
    id: 29,
    chapter: "Ambiente",
    question: "¿Qué es el 'PNE'?",
    options: [
      "Plan Nacional de Energía",
      "Patrimonio Natural del Estado",
      "Parque Nacional de Emergencias",
      "Presupuesto Nacional de Edificación"
    ],
    correctAnswer: 1,
    explanation: "PNE is the Patrimonio Natural del Estado, tierras forestales bajo administración del MINAE."
  },
  {
    id: 30,
    chapter: "Territorio",
    question: "¿En qué niveles se organiza el territorio de Costa Rica según la dimensión geográfica?",
    options: [
      "Nacional, Provincial y Comunal",
      "Nacional, Regional y Local",
      "Continental, Insular y Marítimo",
      "Urbano, Rural y Costero"
    ],
    correctAnswer: 1,
    explanation: "Se organiza en tres niveles: Nacional, Regional y Local."
  },
  {
    id: 31,
    chapter: "Régimen Municipal",
    question: "¿Quién es la figura ejecutiva electa popularmente para la administración de la municipalidad?",
    options: [
      "El Presidente Municipal",
      "El Intendente",
      "La Alcaldía",
      "El Síndico"
    ],
    correctAnswer: 2,
    explanation: "La Alcaldía is the persona funcionaria ejecutiva a cargo de la administración municipal."
  },
  {
    id: 32,
    chapter: "Etapas",
    question: "¿Cuál es la última etapa del proceso de elaboración del Plan Regulador según el diagrama del manual?",
    options: [
      "Proyección de escenarios",
      "Audiencia pública",
      "Adopción del Plan",
      "Seguimiento y evaluación"
    ],
    correctAnswer: 2,
    explanation: "Tras la audiencia pública y aprobación del INVU, la etapa final is the Adopción formal."
  },
  {
    id: 33,
    chapter: "Ambiente",
    question: "¿Qué institución es la encargada de proteger el recurso hídrico subterráneo (SENARA)?",
    options: [
      "Servicio Nacional de Aguas Subterráneas, Riego y Avenamiento",
      "Sistema Estatal de Naturaleza de Ríos y Acuíferos",
      "Sociedad de Energía y Acueductos de la Red Agraria",
      "Secretaría de Emergencias por Riesgos Ambientales"
    ],
    correctAnswer: 0,
    explanation: "SENARA is the Servicio Nacional de Aguas Subterráneas, Riego y Avenamiento."
  },
  {
    id: 34,
    chapter: "Definiciones",
    question: "¿Qué es el 'Datum'?",
    options: [
      "Un dato estadístico de población",
      "Punto fundamental que sirve de referencia de un sistema coordinado",
      "La fecha de vencimiento de un permiso",
      "El nombre técnico de la cartografía básica"
    ],
    correctAnswer: 1,
    explanation: "Datum is the punto fundamental de referencia para un sistema de coordenadas geográficas."
  },
  {
    id: 35,
    chapter: "Etapas",
    question: "¿En qué etapa se recopilan y sistematizan los datos sociales, económicos y físicos?",
    options: [
      "Etapa 1",
      "Etapa 2",
      "Etapa 4",
      "Etapa 6"
    ],
    correctAnswer: 2,
    explanation: "La Etapa 4 corresponde al Diagnóstico Territorial, donde se analizan los diversos ejes del territorio."
  },
  {
    id: 36,
    chapter: "Desarrollo Urbano",
    question: "¿Qué significa 'DOT'?",
    options: [
      "Departamento de Ordenamiento Territorial",
      "Desarrollo Orientado al Transporte",
      "Directriz de Ocupación de Tierras",
      "Diseño de Operatividad Técnica"
    ],
    correctAnswer: 1,
    explanation: "DOT is the estrategia de Desarrollo Orientado al Transporte, que busca comunidades compactas cerca de estaciones."
  },
  {
    id: 37,
    chapter: "Suelo",
    question: "¿Qué es la 'Capacidad de uso de la tierra'?",
    options: [
      "La cantidad de personas que caben en un terreno",
      "El grado óptimo de aprovechamiento basado en limitantes para cultivos",
      "El precio de mercado del metro cuadrado",
      "La profundidad a la que se puede excavar"
    ],
    correctAnswer: 1,
    explanation: "Es el grado óptimo de aprovechamiento de un área basada en sus limitantes agrológicas."
  },
  {
    id: 38,
    chapter: "Régimen Municipal",
    question: "¿Cuál es la función del 'Síndico'?",
    options: [
      "Administrar el presupuesto del cantón",
      "Representar al distrito ante el Concejo Municipal con voz pero sin voto",
      "Firmar los permisos de construcción",
      "Supervisar a los recolectores de basura"
    ],
    correctAnswer: 1,
    explanation: "El síndico representa a su distrito ante el Concejo Municipal, participando con voz pero sin voto."
  },
  {
    id: 39,
    chapter: "Etapas",
    question: "¿A qué pregunta responde el 'Pronóstico Territorial'?",
    options: [
      "¿Dónde estamos?",
      "¿Hacia dónde podríamos ir?",
      "¿Cómo lo haremos?",
      "¿Quién es el dueño?"
    ],
    correctAnswer: 1,
    explanation: "El pronóstico o prospectiva territorial responde a la pregunta '¿Hacia dónde podríamos ir?' proyectando tendencias."
  },
  {
    id: 40,
    chapter: "Patrimonio",
    question: "¿Qué ley protege el Patrimonio Histórico-Arquitectónico de Costa Rica?",
    options: [
      "Ley N.° 4240",
      "Ley N.° 1788",
      "Ley N.° 7555",
      "Ley N.° 7600"
    ],
    correctAnswer: 2,
    explanation: "La Ley N.° 7555 es la que regula el Patrimonio Histórico-Arquitectónico."
  },
  {
    id: 41,
    chapter: "Salud/Acceso",
    question: "¿Qué ley garantiza la Igualdad de Oportunidades para personas con discapacidad?",
    options: [
      "Ley N.° 9976",
      "Ley N.° 7600",
      "Ley N.° 7142",
      "Ley N.° 7794"
    ],
    correctAnswer: 1,
    explanation: "La Ley N.° 7600 establece la igualdad de oportunidades para personas con discapacidad."
  },
  {
    id: 42,
    chapter: "Planificación",
    question: "¿Qué significa 'PNDU'?",
    options: [
      "Plan Nacional de Desarrollo Urbano",
      "Proyecto de Naturaleza y Diseño Urbano",
      "Planificación de Núcleos de Uso",
      "Política Nacional de Descarbonización"
    ],
    correctAnswer: 0,
    explanation: "PNDU is the Plan Nacional de Desarrollo Urbano, herramienta de planificación a nivel nacional."
  },
  {
    id: 43,
    chapter: "Definiciones",
    question: "¿Qué es un 'Asentamiento Informal'?",
    options: [
      "Un barrio sin pavimentar",
      "Edificaciones en terrenos ocupados sin tenencia legal (precarios)",
      "Viviendas construidas con materiales reciclados",
      "Casas en zonas rurales alejadas"
    ],
    correctAnswer: 1,
    explanation: "Son edificaciones en terrenos ocupados sin respaldo legal de propiedad."
  },
  {
    id: 44,
    chapter: "Etapas",
    question: "¿Qué escala es ideal para áreas con alta densidad de información (zonas urbanas)?",
    options: [
      "1:10 000",
      "1:25 000",
      "1:50 000",
      "1:100 000"
    ],
    correctAnswer: 0,
    explanation: "La escala 1:10 000 se recomienda para áreas con alta densidad de información urbana."
  },
  {
    id: 45,
    chapter: "Ambiente",
    question: "¿Qué es el 'EIVA-POT'?",
    options: [
      "Estudios de Impacto Vial y Ambiental",
      "Estudios de la Incorporación de la Variable Ambiental en un Plan de Ordenamiento Territorial",
      "Evaluación Integral de Viviendas y Acueductos",
      "Estrategia Institucional de Vía y Agua"
    ],
    correctAnswer: 1,
    explanation: "EIVA-POT son los estudios requeridos por SETENA para incorporar la variable ambiental en los planes reguladores."
  },
  {
    id: 46,
    chapter: "Planificación",
    question: "¿Qué significa 'INDER'?",
    options: [
      "Instituto Nacional de Desarrollo Rural",
      "Instituto de Energía y Redes",
      "Instituto Nacional de Derechos Reales",
      "Innovación en el Diseño de Edificios Rurales"
    ],
    correctAnswer: 0,
    explanation: "INDER is the Instituto Nacional de Desarrollo Rural, sucesor del IDA."
  },
  {
    id: 47,
    chapter: "Zonificación",
    question: "¿Qué reglamento define el uso permitido de cada predio (comercial, residencial, etc.)?",
    options: [
      "Reglamento de Construcciones",
      "Reglamento de Mapa Oficial",
      "Reglamento de Zonificación",
      "Reglamento de Renovación Urbana"
    ],
    correctAnswer: 2,
    explanation: "El Reglamento de Zonificación divide el área en zonas específicas de uso permitido."
  },
  {
    id: 48,
    chapter: "Definiciones",
    question: "¿Qué es el 'Retiro'?",
    options: [
      "El dinero que se guarda para la vejez",
      "Espacios abiertos no edificados entre una estructura y los linderos del predio",
      "La demolición de una estructura vieja",
      "El final de la jornada laboral municipal"
    ],
    correctAnswer: 1,
    explanation: "Retiro is the espacio obligatorio que debe quedar libre entre la construcción y los límites del terreno."
  },
  {
    id: 49,
    chapter: "Definiciones",
    question: "¿Qué significa 'MIDEPLAN'?",
    options: [
      "Ministerio de Planificación Nacional y Política Económica",
      "Ministerio del Interior y Desarrollo de Planes",
      "Municipalidad Internacional de Planes Locales",
      "Modelo de Integración de Datos Económicos"
    ],
    correctAnswer: 0,
    explanation: "MIDEPLAN is the Ministerio de Planificación Nacional y Política Económica."
  },
  {
    id: 50,
    chapter: "General",
    question: "¿En qué año se publicó la versión del MAPRIOT analizada en este quiz?",
    options: [
      "2007",
      "2018",
      "2021",
      "2026"
    ],
    correctAnswer: 3,
    explanation: "Según el texto oficial, esta actualización fue aprobada en 2025 y publicada en marzo de 2026."
  },
  {
    id: 51,
    chapter: "Ambiente",
    question: "¿Cuál de estos NO es uno de los cuatro ejes de información ambiental fundamental para el IFA?",
    options: [
      "Eje Geológico",
      "Eje Biológico",
      "Eje Socioeconómico",
      "Eje Cambio Climático"
    ],
    correctAnswer: 2,
    explanation: "Los cuatro ejes son: Geológico, Biológico, Aspectos Edafológicos y Cambio Climático."
  },
  {
    id: 52,
    chapter: "Ambiente",
    question: "¿Qué color representa el IFA (Índice de Fragilidad Ambiental) 'Muy Alto'?",
    options: [
      "Azul",
      "Verde",
      "Naranja",
      "Rojo"
    ],
    correctAnswer: 3,
    explanation: "IFA Muy Alto se representa con el color rojo (Categoría V)."
  },
  {
    id: 53,
    chapter: "Ambiente",
    question: "¿Qué color representa el IFA (Índice de Fragilidad Ambiental) 'Bajo'?",
    options: [
      "Verde claro",
      "Verde oscuro",
      "Amarillo",
      "Gris"
    ],
    correctAnswer: 0,
    explanation: "IFA Bajo se representa con verde claro, mientras que Muy Bajo es verde oscuro."
  },
  {
    id: 54,
    chapter: "Marco Jurídico",
    question: "¿Qué le corresponde al INVU según el Art 5 de su Ley Orgánica (1788)?",
    options: [
      "Nombrar a los alcaldes",
      "Preparar planos reguladores para los conglomerados que lo ameriten",
      "Recaudar el impuesto sobre la renta",
      "Construir carreteras nacionales"
    ],
    correctAnswer: 1,
    explanation: "El INVU tiene la atribución de preparar planos reguladores y redactar sus reglamentos."
  },
  {
    id: 55,
    chapter: "Marco Jurídico",
    question: "¿Qué debe contener la política de desarrollo según el Art 16 de la Ley 4240?",
    options: [
      "Solo el presupuesto municipal",
      "Principios y normas en que se fundamente y objetivos del área",
      "La lista de empleados municipales",
      "El organigrama del INVU"
    ],
    correctAnswer: 1,
    explanation: "Debe incluir principios, normas base y los objetivos que plantean las necesidades del área."
  },
  {
    id: 56,
    chapter: "Marco Jurídico",
    question: "¿Qué faculta el Transitorio II de la Ley 4240 al INVU?",
    options: [
      "Para cobrar multas de tránsito",
      "Para dictar normas de desarrollo de alcance nacional en ausencia de plan regulador municipal",
      "Para destituir al Concejo Municipal",
      "Para vender terrenos protegidos"
    ],
    correctAnswer: 1,
    explanation: "El Transitorio II permite al INVU dictar normas supletorias nacionales donde no haya plan local."
  },
  {
    id: 57,
    chapter: "Ambiente",
    question: "Según el Art 29 de la Ley 7554, ¿qué fin persigue el ordenamiento territorial sostenible?",
    options: [
      "Eliminar el transporte público",
      "Ubicar en forma óptima las actividades productivas y asentamientos humanos",
      "Privatizar todas las cuencas hídricas",
      "Construir solo edificios de más de 10 pisos"
    ],
    correctAnswer: 1,
    explanation: "Busca ubicar óptimamente actividades productivas, asentamientos, zonas de uso público y redes de transporte."
  },
  {
    id: 58,
    chapter: "Ambiente",
    question: "¿Cuándo entró en vigor el Reglamento para la Incorporación de la Variable Ambiental (Dto 44710-MINAE)?",
    options: [
      "15 de septiembre de 2021",
      "18 de agosto de 2025",
      "1 de enero de 2024",
      "18 de marzo de 2026"
    ],
    correctAnswer: 1,
    explanation: "Este reglamento estipula su entrada en vigor a partir del 18 de agosto del 2025."
  },
  {
    id: 59,
    chapter: "Territorio",
    question: "¿Cuál es la vertiente que recibe más cuencas hidrográficas de Costa Rica según el manual?",
    options: [
      "Vertiente del Pacífico (16 cuencas)",
      "Vertiente del Mar Caribe (18 cuencas)",
      "Vertiente del Norte (10 cuencas)",
      "Son iguales en ambas"
    ],
    correctAnswer: 1,
    explanation: "El territorio tiene 34 grandes cuencas: 16 al Pacífico y 18 al Caribe."
  },
  {
    id: 60,
    chapter: "Participación Ciudadana",
    question: "¿Qué significa 'AREDE' en el contexto de la gestión regional?",
    options: [
      "Área de Recursos de Desarrollo Eólico",
      "Agenda Regional de Desarrollo",
      "Asociación Rural de Edificación",
      "Agencia de Regulación de Datos Estadísticos"
    ],
    correctAnswer: 1,
    explanation: "AREDE es la Agenda Regional de Desarrollo, parte de la Ley 10096."
  },
  {
    id: 61,
    chapter: "Participación Ciudadana",
    question: "¿Qué significa 'ADI'?",
    options: [
      "Asociación de Desarrollo Integral",
      "Agencia de Desarrollo Industrial",
      "Área de Diagnóstico Interno",
      "Acuerdo de Intervención"
    ],
    correctAnswer: 0,
    explanation: "ADI se refiere a las Asociaciones de Desarrollo Integral."
  },
  {
    id: 62,
    chapter: "Participación Ciudadana",
    question: "¿Cuál es el propósito de las 'ASADAS'?",
    options: [
      "Construir carreteras rurales",
      "Gestionar acueductos y alcantarillados comunales",
      "Administrar las escuelas locales",
      "Recaudar impuestos municipales"
    ],
    correctAnswer: 1,
    explanation: "Gestionan el acceso eficiente y sostenible al agua potable en comunidades rurales."
  },
  {
    id: 63,
    chapter: "Ambiente",
    question: "¿De cuántos metros es la zona inalienable de la 'Franja Fronteriza' con Nicaragua y Panamá?",
    options: [
      "500 metros",
      "1000 metros",
      "2000 metros",
      "5000 metros"
    ],
    correctAnswer: 2,
    explanation: "Se extiende a lo largo de 2,000 metros de ancho en las fronteras, según Ley 2825."
  },
  {
    id: 64,
    chapter: "ZMT",
    question: "¿Cuál es el ancho de la 'Zona Restringida' en la Zona Marítimo Terrestre?",
    options: [
      "50 metros",
      "100 metros",
      "150 metros",
      "200 metros"
    ],
    correctAnswer: 2,
    explanation: "La ZMT se divide en Zona Pública (50m) y Zona Restringida (150m)."
  },
  {
    id: 65,
    chapter: "Trámite de Revisión",
    question: "¿Cuál es el plazo máximo para remitir información adicional al INVU si la recepción fue parcial?",
    options: [
      "3 días hábiles",
      "5 días hábiles",
      "10 días hábiles",
      "30 días naturales"
    ],
    correctAnswer: 2,
    explanation: "La municipalidad dispone de 10 días hábiles para aportar la documentación faltante."
  },
  {
    id: 66,
    chapter: "Trámite de Revisión",
    question: "¿Qué tipo de errores pueden corregirse tras la publicación oficial sin una reforma integral?",
    options: [
      "Errores conceptuales",
      "Errores por fe de erratas (materiales)",
      "Cambios en la zonificación",
      "Nuevos reglamentos"
    ],
    correctAnswer: 1,
    explanation: "Se permiten correcciones de errores materiales que no vician la voluntad del órgano."
  },
  {
    id: 67,
    chapter: "Etapas",
    question: "¿En qué etapa se formula la 'Política de Desarrollo Urbano'?",
    options: [
      "Etapa 2",
      "Etapa 4",
      "Etapa 6",
      "Etapa 7"
    ],
    correctAnswer: 2,
    explanation: "La Etapa 6 es la Propuesta del Plan Regulador, que incluye la Política y los Reglamentos."
  },
  {
    id: 68,
    chapter: "Zonificación",
    question: "¿Qué es el 'Uso No Conforme'?",
    options: [
      "El que se permite con condiciones",
      "El que existía de hecho antes del Plan pero no está listado como permitido",
      "El que está totalmente prohibido",
      "El que aún no ha sido definido por el INVU"
    ],
    correctAnswer: 1,
    explanation: "Es el uso que existía previo a la entrada en vigor del plan, aunque no coincida con la nueva zonificación."
  },
  {
    id: 69,
    chapter: "Planificación",
    question: "¿Cuántos territorios rurales ha delimitado el INDER según la Tabla 3?",
    options: [
      "11",
      "24",
      "29",
      "34"
    ],
    correctAnswer: 2,
    explanation: "El INDER ha delimitado un total de 29 Territorios Rurales conformados por diversos cantones."
  },
  {
    id: 70,
    chapter: "Etapas",
    question: "¿Qué escala mínima se requiere para los mapas del Atlas Cartográfico según el manual?",
    options: [
      "Carta (8.5x11)",
      "Legal (8.5x14)",
      "Tabloide (11x17 / 432x279 mm)",
      "A1 (Gigante)"
    ],
    correctAnswer: 2,
    explanation: "Se requiere utilizar como mínimo el tamaño de hoja 'Tabloide'."
  },
  {
    id: 71,
    chapter: "Definiciones",
    question: "¿Qué es la 'Densidad' en el Plan Regulador?",
    options: [
      "El peso del suelo por metro cúbico",
      "Relación entre número de habitantes por hectárea",
      "La cantidad de personas en una casa",
      "El tráfico vehicular"
    ],
    correctAnswer: 1,
    explanation: "Es la relación de habitantes por hectárea o unidades habitacionales por predio."
  },
  {
    id: 72,
    chapter: "Definiciones",
    question: "¿Qué es el 'Escenario' en el pronóstico territorial?",
    options: [
      "El lugar de la audiencia",
      "Modelo de desarrollo futuro alcanzable tras diversas acciones",
      "La foto aérea",
      "El municipio"
    ],
    correctAnswer: 1,
    explanation: "Un escenario es un modelo de desarrollo futuro que se busca proyectar."
  },
  {
    id: 73,
    chapter: "Etapas",
    question: "¿Quién designa al 'Equipo Planificador'?",
    options: [
      "El INVU",
      "Voto popular",
      "La Municipalidad",
      "El MIDEPLAN"
    ],
    correctAnswer: 2,
    explanation: "El equipo puede ser interno, contratado externamente o el mismo INVU si hay acuerdo."
  },
  {
    id: 74,
    chapter: "Ambiente",
    question: "¿Cuál de estos es un factor del IFA Geológico?",
    options: [
      "Biodiversidad",
      "Susceptibilidad a amenazas naturales",
      "Cobertura vegetal",
      "Cultivos"
    ],
    correctAnswer: 1,
    explanation: "Incluye sismicidad, movimientos en masa, volcánica, tsunamis e inundación."
  },
  {
    id: 75,
    chapter: "Ambiente",
    question: "¿Qué componente del DAM analiza la capacidad de los acuíferos?",
    options: [
      "Análisis biótico",
      "Vulnerabilidad del acuífero a la contaminación",
      "Sombra",
      "Pozos"
    ],
    correctAnswer: 1,
    explanation: "Es una variable general obligatoria en los estudios EIVA-POT."
  },
  {
    id: 76,
    chapter: "Etapas",
    question: "¿Cuál es el objetivo del 'Informe de Audiencia Pública'?",
    options: [
      "Venderlo",
      "Validar la realización efectiva del mecanismo de participación",
      "Multas",
      "Clima"
    ],
    correctAnswer: 1,
    explanation: "Sirve como respaldo técnico y administrativo del proceso participativo legal."
  },
  {
    id: 77,
    chapter: "Pueblos Indígenas",
    question: "¿Qué figura representa legalmente a las comunidades indígenas desde 1982?",
    options: [
      "Consejo",
      "ADII (Asociaciones de Desarrollo Integral Indígenas)",
      "Alcaldes",
      "Comités"
    ],
    correctAnswer: 1,
    explanation: "El Dto 13568-C-G otorgó la representación legal a las ADII."
  },
  {
    id: 78,
    chapter: "Pueblos Indígenas",
    question: "¿Qué cierra satisfactoriamente la Consulta Indígena?",
    options: [
      "SMS",
      "Pliego de Acuerdos firmado",
      "Alcalde",
      "Red social"
    ],
    correctAnswer: 1,
    explanation: "El proceso se formaliza mediante un Pliego de Acuerdos que la UTCI valida."
  },
  {
    id: 79,
    chapter: "Régimen Municipal",
    question: "¿Qué mayoría adopta el Plan Regulador en el Concejo?",
    options: [
      "Simple",
      "Absoluta",
      "Dos tercios",
      "Unanimidad"
    ],
    correctAnswer: 1,
    explanation: "Requerido por el inciso 3 del artículo 17 de la Ley 4240."
  },
  {
    id: 80,
    chapter: "General",
    question: "¿Qué significa 'SIG'?",
    options: [
      "Sistema de Información Geográfica",
      "Inversión",
      "Gráfica",
      "Impuestos"
    ],
    correctAnswer: 0,
    explanation: "SIG es la herramienta informática clave para el análisis territorial."
  },
  {
    id: 81,
    chapter: "Fundamentos",
    question: "¿Quién emitió el MAPRIOT original en 2007?",
    options: [
      "MOP",
      "INVU",
      "MIVAH",
      "MIDEPLAN"
    ],
    correctAnswer: 1,
    explanation: "El manual fue oficializado en 2007 por el INVU."
  },
  {
    id: 82,
    chapter: "Elaboración",
    question: "¿En qué etapa se designa al Órgano Local de Planificación?",
    options: [
      "Etapa 1",
      "Etapa 2",
      "Etapa 3",
      "Etapa 5"
    ],
    correctAnswer: 0,
    explanation: "Es una de las primeras actividades de la etapa preparatoria."
  },
  {
    id: 83,
    chapter: "Ambiente",
    question: "¿Qué plazo hay para estudios de IFA previo al nuevo decreto?",
    options: [
      "6 meses",
      "12 meses",
      "18 meses",
      "24 meses"
    ],
    correctAnswer: 1,
    explanation: "Tienen un plazo de 12 meses desde la entrada en vigor del Decreto N.° 44710."
  },
  {
    id: 84,
    chapter: "Definiciones",
    question: "¿Qué es el 'Alineamiento Eléctrico'?",
    options: [
      "Cables",
      "Distancia mínima a líneas de alta tensión",
      "Potencia",
      "Luces"
    ],
    correctAnswer: 1,
    explanation: "Es una restricción de distancia por seguridad respecto a redes eléctricas."
  },
  {
    id: 85,
    chapter: "Definiciones",
    question: "¿Qué incluye el 'Mapa de Servicios Comunales'?",
    options: [
      "Internet",
      "Centros de salud, escuelas, parques",
      "Feria",
      "Taller"
    ],
    correctAnswer: 1,
    explanation: "Localiza edificaciones e infraestructura orientada al beneficio colectivo."
  },
  {
    id: 86,
    chapter: "Zonificación",
    question: "¿Fin del 'Reglamento de Renovación Urbana'?",
    options: [
      "Colores",
      "Erradicar tugurios y rehabilitar áreas en decadencia",
      "Vender",
      "Parques"
    ],
    correctAnswer: 1,
    explanation: "Busca la mejora y rehabilitación de zonas urbanas deterioradas."
  },
  {
    id: 87,
    chapter: "Territorio",
    question: "¿Escala de los Planes Regionales?",
    options: [
      "Local",
      "Supracantonal",
      "Continental",
      "Global"
    ],
    correctAnswer: 1,
    explanation: "Se aplican en las regiones como instrumentos supracantonales."
  },
  {
    id: 88,
    chapter: "Régimen Municipal",
    question: "¿Cuántos Concejos Municipales de Distrito cita el manual?",
    options: [
      "3",
      "7",
      "15",
      "22"
    ],
    correctAnswer: 1,
    explanation: "Cita 7 (Cóbano, Paquera, Lepanto, etc.)."
  },
  {
    id: 89,
    chapter: "Régimen Municipal",
    question: "¿Figura ejecutiva de los Concejos de Distrito?",
    options: [
      "Alcalde",
      "Intendencia",
      "Secretario",
      "Gobernador"
    ],
    correctAnswer: 1,
    explanation: "La Intendencia es la figura ejecutiva en estos distritos."
  },
  {
    id: 90,
    chapter: "Zonificación",
    question: "¿Vigencia de restricciones de renovación si no se inicia?",
    options: [
      "3 años",
      "5 años",
      "7 años",
      "10 años"
    ],
    correctAnswer: 1,
    explanation: "Las restricciones quedan en firme por 5 años."
  },
  {
    id: 91,
    chapter: "Suelo",
    question: "¿Ley de Condominios?",
    options: [
      "4240",
      "7933",
      "7554",
      "1788"
    ],
    correctAnswer: 1,
    explanation: "La Ley N.° 7933 regula este régimen especial de propiedad."
  },
  {
    id: 92,
    chapter: "Planificación",
    question: "¿Qué es 'PCDHL'?",
    options: [
      "Plan Cantonal de Desarrollo Humano Local",
      "Crecimiento",
      "Desechos",
      "Hospitales"
    ],
    correctAnswer: 0,
    explanation: "Es el Plan Cantonal de Desarrollo Humano Local."
  },
  {
    id: 93,
    chapter: "Etapas",
    question: "¿Qué es el 'Mosaico Catastral'?",
    options: [
      "Arte",
      "Capa con planos catastrados georreferenciados",
      "Dueños",
      "Limpieza"
    ],
    correctAnswer: 1,
    explanation: "Es una capa digital que asocia planos catastrados con el territorio."
  },
  {
    id: 94,
    chapter: "General",
    question: "¿Sede del INVU?",
    options: [
      "Barrio México",
      "Barrio Amón",
      "Heredia",
      "San Rafael"
    ],
    correctAnswer: 1,
    explanation: "Avenida 9, Calles 3 bis y 5, San José, Barrio Amón."
  },
  {
    id: 95,
    chapter: "Ambiente",
    question: "¿Qué hacer si impacta un Humedal?",
    options: [
      "Drenar",
      "Medidas según SETENA y Ley Biodiversidad",
      "Ignorar",
      "Madera"
    ],
    correctAnswer: 1,
    explanation: "Deben incluirse medidas de mitigación y control según la normativa ambiental."
  },
  {
    id: 96,
    chapter: "Seguimiento",
    question: "¿Herramienta sugerida para indicadores?",
    options: [
      "Cuaderno",
      "Matriz de Seguimiento del Plan Regulador",
      "Mensajes",
      "Memoria"
    ],
    correctAnswer: 1,
    explanation: "Se recomienda una herramienta matricial para el registro sistemático."
  },
  {
    id: 97,
    chapter: "Indicadores",
    question: "¿Qué mide 'Impacto'?",
    options: [
      "Corto plazo",
      "Cambios de largo plazo en la sociedad",
      "Cemento",
      "Reuniones"
    ],
    correctAnswer: 1,
    explanation: "Mide efectos estructurales y transformaciones sociales profundas."
  },
  {
    id: 98,
    chapter: "Indicadores",
    question: "¿Etapas para elaborar indicadores?",
    options: [
      "3",
      "6",
      "9",
      "12"
    ],
    correctAnswer: 1,
    explanation: "El manual propone un proceso de 6 etapas flexibles."
  },
  {
    id: 99,
    chapter: "Recursos",
    question: "¿Sitio web de guías INVU?",
    options: [
      "mivah.go.cr",
      "invu.go.cr",
      "mideplan.go.cr",
      "gaceta.go.cr"
    ],
    correctAnswer: 1,
    explanation: "El INVU tiene alojadas las guías de cartografía, política, etc."
  },
  {
    id: 100,
    chapter: "General",
    question: "¿A qué responde el 'Pronóstico Territorial'?",
    options: [
      "¿Dónde?",
      "¿Quién?",
      "¿Hacia dónde podríamos ir?",
      "¿Por qué?"
    ],
    correctAnswer: 2,
    explanation: "El pronóstico se enfoca en las proyecciones y tendencias futuras del territorio."
  }
];
