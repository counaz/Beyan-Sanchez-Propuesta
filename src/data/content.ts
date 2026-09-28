export interface Plan {
  id: string;
  name: string;
  badge?: string;
  duration: string;
  classesCount: string;
  priceUSD: number;
  highlighted?: boolean;
  features: string[];
  exclusiveBonus?: string[];
  ctaText: string;
  description: string;
}

export const TRADING_PLANS: Plan[] = [
  {
    id: 'mensual',
    name: 'PLAN 1: MENSUAL',
    duration: '1 Mes',
    classesCount: 'Total: 8 clases al mes (2 por semana)',
    priceUSD: 399,
    description: 'Ideal para corregir vicios operativos inmediatos, estructurar tu gestión y empezar a operar con disciplina profesional.',
    features: [
      'Total: 8 clases 1 a 1 al mes',
      'Acompañamiento directo por WhatsApp',
      'Resolución de dudas entre clases',
      'Trading + Desarrollo Personal integral',
      'Grabaciones completas de tus sesiones privadas',
      'Auditoría y feedback de tus entradas'
    ],
    ctaText: 'Postular a Plan Mensual'
  },
  {
    id: 'bimensual',
    name: 'PLAN 2: BIMENSUAL',
    badge: 'MÁS RECOMENDADO',
    duration: '2 Meses',
    classesCount: 'Total: 16 clases en 2 meses',
    priceUSD: 569,
    highlighted: true,
    description: 'El programa más elegido para consolidar tu método, dominar tus emociones bajo presión y ver resultados consistentes.',
    features: [
      'Total: 16 clases en 2 meses',
      'Acompañamiento directo prioritario por WhatsApp',
      'Resolución de dudas continua entre clases',
      'Trading + Desarrollo Personal avanzado',
      'Acceso a material exclusivo y sesiones especiales',
      'Diseño de Plan de Trading adaptado a tu estilo',
      'Bitácora personalizada de psicotrading'
    ],
    exclusiveBonus: [
      'Acceso a material exclusivo y sesiones especiales',
      'Ahorras $229 USD comparado con mes individual'
    ],
    ctaText: 'Postular a Plan Bimensual'
  },
  {
    id: 'trimestral',
    name: 'PLAN 3: TRIMESTRAL',
    badge: 'TRANSFORMACIÓN TOTAL',
    duration: '3 Meses',
    classesCount: 'Total: 24 clases en 3 meses',
    priceUSD: 859,
    description: 'Mentoría de inmersión total para formar traders profesionales listos para gestionar capital privado y pasar pruebas de fondeo.',
    features: [
      'Total: 24 clases en 3 meses',
      'Acompañamiento directo 24/7 por WhatsApp',
      'Resolución de dudas y revisión operativa diaria',
      'Trading + Desarrollo Personal de alto rendimiento',
      'Acceso vitalicio a material exclusivo y sesiones especiales',
      'Estrategia de fondeo de cuentas (Prop Firms)',
      'Psicotrading intensivo y reprogramación de hábitos'
    ],
    exclusiveBonus: [
      'Acompañamiento intensivo para pruebas de fondeo',
      'Acceso total a biblioteca de sesiones maestras'
    ],
    ctaText: 'Postular a Plan Trimestral'
  }
];

export const CORE_PILLARS = [
  {
    icon: 'TrendingUp',
    title: 'TRADING',
    subtitle: 'Estrategias probadas y gestión de riesgo.',
    description: 'Métodos claros y comprobados en mercados reales. Aprenderás a identificar ventajas estadísticas reales sin indicadores saturados.'
  },
  {
    icon: 'Brain',
    title: 'DESARROLLO PERSONAL',
    subtitle: 'Reprograma tu mente y eleva tu enfoque para ser élite.',
    description: 'El trading es 80% psicología y disciplina. Trabajamos tus creencias sobre el dinero, la paciencia y el autocontrol emocional.'
  },
  {
    icon: 'Target',
    title: 'ENFOQUE',
    subtitle: 'Claridad, disciplina y constancia diaria.',
    description: 'Elimina el ruido y el FOMO. Creas una rutina estricta de pre-mercado y ejecución que convierte la consistencia en un hábito.'
  },
  {
    icon: 'Award',
    title: 'RESULTADOS',
    subtitle: 'Construye un proceso rentable paso a paso.',
    description: 'No buscamos golpes de suerte. Construimos un sistema replicable con gestión asimétrica de riesgo para proteger y multiplicar tu capital.'
  }
];

export const METHOD_FEATURES = [
  {
    title: 'ESTRATEGIAS PROBADAS',
    description: 'Métodos claros y efectivos probados en mercados reales y diferentes condiciones de volatilidad.'
  },
  {
    title: 'GESTIÓN DEL RIESGO',
    description: 'Aprende a proteger tu capital matemáticamente y crecer con inteligencia sin arriesgar tu cuenta.'
  },
  {
    title: 'AUTODISCIPLINA Y ENFOQUE',
    description: 'Disciplina tu cuerpo y tu mente para ejecutar tu plan sin emoción, sin ansiedad y sin sobreoperar.'
  },
  {
    title: 'DESARROLLO CONTINUO',
    description: 'Mejora constante y mentalidad de élite en cada clase individual con Bryan Sánchez.'
  }
];

export const TEST_QUESTIONS = [
  {
    id: 1,
    question: '¿Qué haces cuando una operación toca tu Stop Loss?',
    options: [
      { text: 'Acepto la pérdida calculada, registro la entrada y no busco revancha.', score: 3 },
      { text: 'Siento frustración y a veces abro otra operación inmediata para recuperar.', score: 1 },
      { text: 'Muevo el Stop Loss más lejos para evitar que se cierre en negativo.', score: 0 }
    ]
  },
  {
    id: 2,
    question: '¿Tienes un plan de trading escrito con reglas claras antes de abrir el gráfico?',
    options: [
      { text: 'Sí, tengo reglas estrictas de entrada, salida y riesgo máximo por día.', score: 3 },
      { text: 'Tengo una idea en la cabeza, pero no siempre la sigo al pie de la letra.', score: 1 },
      { text: 'No, opero según lo que siento o las señales que veo en el momento.', score: 0 }
    ]
  },
  {
    id: 3,
    question: '¿Qué porcentaje de tu cuenta arriesgas en una sola operación?',
    options: [
      { text: 'Máximo entre el 0.5% y el 1.5% de mi capital.', score: 3 },
      { text: 'Entre el 3% y el 5%, dependiendo de qué tan seguro me sienta.', score: 1 },
      { text: 'Más del 10% o uso lotajes grandes para ganar rápido.', score: 0 }
    ]
  },
  {
    id: 4,
    question: '¿Cómo manejas tus emociones (miedo, euforia, impaciencia) al operar?',
    options: [
      { text: 'Practico rutinas de calma, acepto la incertidumbre y ejecuto con frialdad.', score: 3 },
      { text: 'La euforia tras ganar me hace sobreoperar y devolver las ganancias.', score: 1 },
      { text: 'El miedo a perder me paraliza o me hace cerrar ganancias antes de tiempo.', score: 0 }
    ]
  },
  {
    id: 5,
    question: '¿Llevas una bitácora o diario donde anotas tus emociones y análisis de cada trade?',
    options: [
      { text: 'Sí, reviso mis estadísticas y reflexiono sobre mis errores semanalmente.', score: 3 },
      { text: 'Solo registro las ganancias, casi nunca anoto mis pérdidas ni emociones.', score: 1 },
      { text: 'No llevo ningún registro.', score: 0 }
    ]
  }
];

export const FAQS = [
  {
    q: '¿Cómo funcionan las mentorías 1 a 1 con Bryan Sánchez?',
    a: 'Son sesiones individuales privadas vía Google Meet o Zoom directamente con Bryan. Cada clase dura entre 60 y 75 minutos, adaptadas a tu nivel actual, con análisis de tus gráficos, corrección de errores en vivo y desarrollo de tu psicología.'
  },
  {
    q: '¿Qué nivel necesito tener para ingresar a las mentorías?',
    a: 'Aceptamos tanto principiantes que quieren aprender desde cero con bases sólidas sin quemar cuentas, como traders intermedios que tienen conocimientos técnicos pero no logran la consistencia por falta de disciplina y gestión de riesgo.'
  },
  {
    q: '¿Cómo es el acompañamiento directo por WhatsApp?',
    a: 'Tienes contacto directo e individual con Bryan en WhatsApp. Puedes enviarle capturas de tus análisis antes de entrar al mercado, plantear tus dudas y recibir retroalimentación para evitar errores antes de arriesgar capital.'
  },
  {
    q: '¿En qué mercados o instrumentos aplica el método?',
    a: 'El método se fundamenta en acción del precio, estructura de mercado, liquidez y gestión matemática del riesgo, por lo que es aplicable a Forex, Criptomonedas, Índices Bursátiles y Sintéticos.'
  },
  {
    q: '¿Qué incluye la comunidad gratuita?',
    a: 'La comunidad gratuita es nuestro espacio abierto donde compartimos análisis de mercado semanales, audios y reflexiones de psicotrading, rutinas matutinas de mentalidad, libros recomendados y sesiones periódicas de preguntas.'
  },
  {
    q: '¿Cuáles son los métodos de pago disponibles?',
    a: 'Aceptamos transferencias bancarias internacionales, USDT/Cripto (Binance Pay), PayPal, tarjeta de crédito/débito y métodos locales según tu país de residencia.'
  }
];

export const COMMUNITY_BENEFITS = [
  {
    title: 'Análisis y Perspectivas Semanales',
    desc: 'Zonas clave de oferta, demanda y dirección del mercado compartidas directamente por Bryan.'
  },
  {
    title: 'Píldoras Diarias de Psicotrading',
    desc: 'Audios, reflexiones y recordatorios para mantener la disciplina y no cometer errores emocionales.'
  },
  {
    title: 'Entorno de Crecimiento & Cero Ruido',
    desc: 'Conéctate con traders comprometidos con el estudio riguroso, alejados de falsas promesas o humo.'
  },
  {
    title: 'Acceso a Clases y Q&A Abiertos',
    desc: 'Sesiones periódicas en vivo donde Bryan responde dudas operativas y analiza gráficos con la comunidad.'
  }
];

export const STUDENT_RESOURCES = [
  {
    id: 'res-1',
    title: 'Bitácora & Diario de Psicotrading 2026',
    type: 'Hoja de Cálculo / Excel',
    desc: 'Plantilla completa para registrar trades, porcentaje arriesgado, R:R y estado emocional antes y después de cada operación.',
    badge: 'Esencial'
  },
  {
    id: 'res-2',
    title: 'Checklist de Pre-Mercado y Auditoría de Entradas',
    type: 'PDF Guía',
    desc: 'Paso a paso de 7 puntos que debes verificar en el gráfico antes de presionar el botón de compra o venta.',
    badge: 'Popular'
  },
  {
    id: 'res-3',
    title: 'Manual de Gestión Asimétrica del Riesgo',
    type: 'Documento PDF',
    desc: 'Cómo mantener una esperanza matemática positiva incluso con una tasa de acierto del 40% al 50%.',
    badge: 'Gestión'
  },
  {
    id: 'res-4',
    title: 'Las 10 Reglas de Oro de Bryan Sánchez',
    type: 'Póster de Mentalidad',
    desc: 'Los principios de disciplina innegociables para pegar en tu espacio de trabajo y reprogramar tus hábitos diarios.',
    badge: 'Mentalidad'
  }
];
