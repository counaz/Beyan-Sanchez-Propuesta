export const BRYAN_WHATSAPP_NUMBER = '56957082496';
export const COMMUNITY_INVITE_URL = 'https://chat.whatsapp.com/BQhBLZTz8OF6UN3HEGm2nX';

export const getWhatsAppUrl = (message: string) => {
  return `https://wa.me/${BRYAN_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

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
  spotsLeft?: number;
}

export const TRADING_PLANS: Plan[] = [
  {
    id: 'mensual',
    name: 'PLAN MENSUAL',
    duration: '1 Mes Contigo',
    classesCount: '8 clases privadas 1 a 1 conmigo (2 por semana)',
    priceUSD: 399,
    spotsLeft: 2,
    description: 'Trabajamos mano a mano para eliminar tus vicios emocionales, ordenar tu vida y aplicar mi estrategia de ratio 1:5 con disciplina innegociable.',
    features: [
      '8 sesiones individuales y privadas en vivo conmigo',
      'Mi WhatsApp personal para resolver tus dudas a diario',
      'Auditoría y corrección de tus trades antes de operar',
      '50% Desarrollo Personal + 50% Trading de Precisión',
      'Grabaciones completas de cada clase para repasar',
      'Estructuración de tu rutina matutina y guion operativo'
    ],
    ctaText: 'Postular conmigo (Solo 2 Cupos)'
  },
  {
    id: 'bimensual',
    name: 'PLAN BIMENSUAL',
    badge: 'EL MÁS ELEGIDO',
    duration: '2 Meses Contigo',
    classesCount: '16 clases privadas 1 a 1 conmigo',
    priceUSD: 569,
    highlighted: true,
    spotsLeft: 2,
    description: 'Mi programa más profundo para transformar tu identidad: reprogramamos tu mente bajo presión, pulimos tu método y logramos consistencia real.',
    features: [
      '16 sesiones individuales en vivo directamente conmigo',
      'Acompañamiento prioritario continuo por mi WhatsApp personal',
      'Auditoría diaria de tu psicología y tus entradas al mercado',
      'Reprogramación de creencias sobre el dinero y la abundancia',
      'Diseño personalizado de tu Guion de Vida y Plan de Trading',
      'Estrategia de psicotrading adaptada a tu personalidad',
      'Acceso directo para siempre a mis actualizaciones'
    ],
    exclusiveBonus: [
      'Ahorras $229 USD respecto al mes individual',
      'Acceso a mis sesiones maestras privadas'
    ],
    ctaText: 'Postular conmigo (Solo 2 Cupos)'
  },
  {
    id: 'trimestral',
    name: 'PLAN TRIMESTRAL',
    badge: 'TRANSFORMACIÓN TOTAL',
    duration: '3 Meses Contigo',
    classesCount: '24 clases privadas 1 a 1 conmigo',
    priceUSD: 859,
    spotsLeft: 2,
    description: 'Inmersión total de 90 días. Te formo como trader profesional y como persona de alto rendimiento lista para gestionar cuentas fondeadas de capital privado.',
    features: [
      '24 sesiones individuales privadas mano a mano conmigo',
      'Acompañamiento 24/7 en mi WhatsApp personal',
      'Estrategia paso a paso para pasar pruebas de fondeo (Prop Firms)',
      'Trading institucional con ratio asimétrico 1:5',
      'Reprogramación profunda de hábitos y mentalidad inquebrantable',
      'Revisión en vivo de tu psicología y toma de decisiones',
      'Vínculo y contacto cercano conmigo de por vida'
    ],
    exclusiveBonus: [
      'Acompañamiento intensivo para superar tu cuenta fondeada',
      'Acceso vitalicio a todas mis mentorías grupales futuras'
    ],
    ctaText: 'Postular conmigo (Solo 2 Cupos)'
  }
];

export const CORE_PILLARS = [
  {
    icon: 'Brain',
    title: 'DESARROLLO PERSONAL & MENTALIDAD',
    subtitle: 'El trader gana primero fuera del gráfico.',
    description: 'El trading es 80% psicología y estado de consciencia. Trabajamos tus creencias, tu relación con el dinero, la fe, la gratitud y la capacidad de actuar con serenidad bajo presión.'
  },
  {
    icon: 'TrendingUp',
    title: 'TRADING DE PRECISIÓN (RATIO 1:5)',
    subtitle: 'Matemática y liquidez a tu favor, sin humo.',
    description: 'Basta de saturar tu pantalla con 10 indicadores inútiles. Te enseño a leer la intención del mercado y a entrar únicamente cuando el beneficio potencial quintuplica tu riesgo medido.'
  },
  {
    icon: 'Target',
    title: 'HÁBITOS & GUION DE VIDA',
    subtitle: 'Acciona como la persona que quieres llegar a ser.',
    description: 'No te validas por un resultado temporal. Construyes una rutina pre-mercado innegociable, ordenas tu entorno y ejecutas con frialdad profesional eliminando el FOMO.'
  },
  {
    icon: 'Award',
    title: 'LIBERTAD & TRANSFORMACIÓN REAL',
    subtitle: 'Más vida para todos y menos para ninguno.',
    description: 'El dinero es solo un vehículo para comprar tiempo y paz mental con tu familia. Buscamos un proceso sostenible que te dé libertad duradera, no un golpe de suerte pasajero.'
  }
];

export const METHOD_FEATURES = [
  {
    title: 'DESARROLLO PERSONAL DIARIO',
    description: 'Reprogramación mental, hábitos de élite y lectura profunda para elevar tu frecuencia y actuar con convicción.'
  },
  {
    title: 'TRADING OBJETIVO RATIO 1:5',
    description: 'Estrategia basada en liquidez y estructura limpia sin indicadores mágicos ni falsas promesas.'
  },
  {
    title: 'GESTIÓN MATEMÁTICA DEL RIESGO',
    description: 'Protege tu capital pase lo que pase; una racha de pérdidas jamás destruirá tu cuenta ni tu paz mental.'
  },
  {
    title: 'ACOMPAÑAMIENTO CONMIGO 1 A 1',
    description: 'Hablas directamente conmigo por WhatsApp para resolver dudas y corregir tus análisis antes de arriesgar dinero.'
  }
];

export const TEST_QUESTIONS = [
  {
    id: 1,
    question: '¿Qué sientes y haces cuando una operación toca tu Stop Loss?',
    options: [
      { text: 'Acepto la pérdida calculada con calma, la registro y no busco revancha.', score: 3 },
      { text: 'Siento frustración o enojo, y a veces busco otra operación rápida para recuperar.', score: 1 },
      { text: 'Muevo el Stop Loss más lejos para evitar aceptar que me equivoqué.', score: 0 }
    ]
  },
  {
    id: 2,
    question: '¿Tienes un plan de trading y una rutina de vida claros antes de sentarte a operar?',
    options: [
      { text: 'Sí, sigo una rutina de calma y tengo reglas escritas de entrada y riesgo.', score: 3 },
      { text: 'Tengo ideas en la cabeza, pero suelo improvisar según la emoción del momento.', score: 1 },
      { text: 'No, opero según lo que siento o las señales que veo en redes.', score: 0 }
    ]
  },
  {
    id: 3,
    question: '¿Qué porcentaje de tu capital arriesgas en una sola operación?',
    options: [
      { text: 'Máximo entre el 0.5% y el 1% de mi cuenta, protegiendo mi paz mental.', score: 3 },
      { text: 'Entre el 2% y el 5%, según qué tan confiado me sienta con el trade.', score: 1 },
      { text: 'Más del 5% o meto lotajes pesados para intentar salvar el mes rápido.', score: 0 }
    ]
  },
  {
    id: 4,
    question: '¿Cómo manejas tu diálogo interno (miedo, euforia, impaciencia)?',
    options: [
      { text: 'Acepto la incertidumbre, cuido mis pensamientos y ejecuto con disciplina.', score: 3 },
      { text: 'La euforia al ganar me hace sobreoperar y termino devolviendo todo.', score: 1 },
      { text: 'El miedo a perder me congela o cierro las ganancias antes de tiempo.', score: 0 }
    ]
  },
  {
    id: 5,
    question: '¿Trabajas a diario en tu desarrollo personal (lectura, hábitos, bitácora)?',
    options: [
      { text: 'Sí, cuido mi mente y reflexiono sobre mis emociones y decisiones cada semana.', score: 3 },
      { text: 'Solo me enfoco en los gráficos y gráficos, casi no cuido mi parte mental.', score: 1 },
      { text: 'No leo ni llevo ningún registro de mis emociones.', score: 0 }
    ]
  }
];

export const FAQS = [
  {
    q: '¿Por qué solo abro 2 cupos para mis mentorías 1 a 1 este mes?',
    a: 'Porque yo sigo operando los mercados a diario y mi tiempo es muy limitado. No tengo un ejército de tutores ni delego tu formación a nadie más: si entras a mi mentoría, hablarás y te formarás directamente conmigo por WhatsApp y en sesiones privadas individuales. Solo puedo darle este nivel de energía y dedicación a 2 personas.'
  },
  {
    q: '¿Por qué mi enfoque es 50% Desarrollo Personal y 50% Trading?',
    a: 'Porque he visto a cientos de personas aprender estrategias técnicas perfectas y seguir perdiendo dinero año tras año por falta de disciplina, impaciencia y creencias de escasez. Cuando cambias quién eres por dentro, cuidas tus pensamientos y adoptas hábitos de alta frecuencia, el trading se vuelve una consecuencia natural y fluida.'
  },
  {
    q: '¿La comunidad gratuita es solo para personas que hacen trading?',
    a: 'No. Es una comunidad de Éxito Integral (Mente, Cuerpo y Alma). Aunque la mayoría nos dedicamos al trading como vehículo financiero, este espacio está abierto para cualquier persona que busque transformar su vida, construir hábitos de acero, reprogramar sus creencias de escasez y alcanzar la verdadera libertad personal.'
  },
  {
    q: '¿Qué hacemos en mi comunidad gratuita de WhatsApp (+50 personas)?',
    a: 'Es mi espacio abierto y 100% gratuito. Cada semana nos conectamos en vivo a desglosar el libro "La ciencia de hacerse rico" (el libro que cambió mi vida y la de mis alumnos), realizamos operativas en vivo en mercados reales sin humo explicando el porqué de cada entrada con ratio 1:5, y te comparto mi bitácora y reflexiones diarias.'
  },
  {
    q: '¿Qué es el futuro proyecto de Skool y retos diarios?',
    a: 'Es la siguiente etapa de nuestro movimiento: una comunidad exclusiva donde operaremos juntos todos los días en directo y cumpliremos retos diarios de acondicionamiento mental, hábitos saludables y disciplina financiera para transformar vidas de verdad.'
  },
  {
    q: '¿Cómo nos comunicamos durante la mentoría privada?',
    a: 'Estarás en contacto directo con mi WhatsApp personal. Me podrás enviar capturas de tus análisis antes de abrir operaciones para que te dé feedback, corrijamos errores antes de que arriesgues tu dinero y resolvamos cualquier duda entre nuestras clases en vivo.'
  },
  {
    q: '¿Qué formas de pago acepto para las mentorías?',
    a: 'Acepto transferencias bancarias, USDT / Cripto (Binance Pay), PayPal y tarjetas de crédito o débito internacionales. Todos los detalles los coordinamos de forma transparente y directa a través de mi WhatsApp.'
  }
];

export interface StudentProof {
  author: string;
  role: string;
  badge: string;
  badgeColor: string;
  quote: string;
  subtext: string;
  isFundingWin?: boolean;
  image?: string;
  time?: string;
}

export const STUDENT_PROOFS: StudentProof[] = [
  {
    author: 'Lucas Gallardo Trader',
    role: 'Miembro de mi Comunidad',
    badge: 'Fase 1 Aprobada en 1 Trade',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    quote: 'Hoy me compré una cuenta de fondeo para arrancarla con el reto y ya pasamos Fase 1 en un solo trade y día, estamos en una frecuencia que nunca antes sentí 🔥',
    subtext: 'Gracias especialmente a Bryan por todo lo que nos enseña y tomarse el tiempo de todo lo que hace.',
    isFundingWin: true,
    image: '/testimonios/testimonio_1.png',
    time: '18:42'
  },
  {
    author: 'Franco Alonso Trader',
    role: 'Alumno de Mentoría',
    badge: 'Crecimiento & Frecuencia',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    quote: 'Bro y yo lo feliz que me siento de formar parte de tu comunidad y escucharte. Cada llamada supera a la anterior. Muy buena clase y muy buena la frecuencia en la que nos encontramos¡¡',
    subtext: 'Todo gracias al genio de Bryan, gracias hermano por todo 💪💪',
    image: '/testimonios/testimonio_2.png',
    time: '21:15'
  },
  {
    author: 'Juanse Trader',
    role: 'Miembro de mi Comunidad',
    badge: 'Mentalidad & Enfoque',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    quote: 'Accionemos como la persona que queremos ser, NO nos validemos con el resultado 💪💪 Y cuidemos nuestros pensamientos.',
    subtext: 'Continuemos en el desarrollo y en el proceso 🔥 no dejemos de combatir los puntos débiles que nos alejan de los RESULTADOS.',
    image: '/testimonios/testimonio_3.png',
    time: '14:08'
  },
  {
    author: 'Compañero Fondeado',
    role: 'Alumno de Mentoría',
    badge: 'Fondeo Confirmado',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    quote: 'Fondeado colegas después de 1 año y 2 meses... logré fondearme con el método y la constancia de este grupo.',
    subtext: 'Muchísimo valor hay acá... poder desarrollar esta habilidad en un entorno tan correcto y con personas de alta vibración.',
    image: '/testimonios/testimonio_4.png',
    time: '10:30'
  },
  {
    author: 'Alexandra Trader',
    role: 'Comunidad Oficial',
    badge: 'Educación Sin Humo',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    quote: 'Repito para este grupo: lo que Bryan nos está dando aquí gratis vale miles de dólares. Esta información aprovechémosla al máximo.',
    subtext: 'Aprovechen toda la información de CALIDAD que Bryan nos da, no existen personas que lo hagan GRATIS realmente y de tanto valor.',
    image: '/testimonios/testimonio_5.png',
    time: '16:54'
  },
  {
    author: 'Alumno en Formación',
    role: 'Transformación de Vida',
    badge: 'Guion de Vida & Enfoque',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    quote: 'Te cuento que recién escribí el guion de vida que nos dijiste a lujo y detalle... es increíble lo que pasa por mi cuerpo, un estado de frecuencia tan alto que ya me siento esa persona.',
    subtext: 'Con todo lo que estamos haciendo con el grupo literal no soy el mismo. Me siento tan diferente y con claridad total.',
    image: '/testimonios/testimonio_6.png',
    time: '23:19'
  }
];
