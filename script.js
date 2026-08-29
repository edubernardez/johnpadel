(() => {
  'use strict';

  const PHONE = '59893534762';
  const STORAGE_KEY = 'johnpadel-language';

  const copy = {
    es: {
      metaTitle: 'John Padel Academy | Entrenamiento de pádel en Livramento',
      metaDescription: 'Clases de pádel en Q3 Padel, Sant’Ana do Livramento. Técnica, táctica y correcciones en tiempo real para todos los niveles.',
      ogTitle: 'John Padel Academy | Dominá la cancha',
      bootStatus: 'Sistema de rendimiento · cargando', bootTechnique: 'TÉCNICA', bootTactics: 'TÁCTICA', bootPrecision: 'PRECISIÓN',
      skipLink: 'Saltar al contenido', brandHome: 'John Padel Academy — inicio', mainNav: 'Navegación principal', languageLabel: 'Idioma',
      navMethod: 'Método', navClasses: 'Clases', navCoach: 'John', navLocation: 'Ubicación', headerCta: 'Reservar',
      heroProtocol: 'Protocolo de entrenamiento 01', heroTitleLine1: 'DOMINÁ', heroTitleLine2: 'LA CANCHA',
      heroLead: 'Entrenamiento profesional de técnica y táctica con correcciones en tiempo real. Un sistema claro para jugar con más precisión, decisión y confianza.',
      heroCta: 'Reservar por WhatsApp', heroSecondary: 'Ver modalidades', trustLabel: 'Datos de confianza', statStudents: 'alumnos', statModes: 'modalidades', statMethod: 'método profesional', heroScroll: 'Descubrí el método',
      signalLine: 'TÉCNICA <i>●</i> TÁCTICA <i>●</i> PRECISIÓN <i>●</i> DECISIÓN <i>●</i> CONFIANZA <i>●</i> CORRECCIÓN EN TIEMPO REAL <i>●</i>',
      methodIndex: 'LAB DE RENDIMIENTO', liveAnalysis: 'ANÁLISIS EN VIVO', courtSystem: 'Q3 // SISTEMA DE CANCHA', playerDevelopment: 'DESARROLLO DEL JUGADOR', online: '● ACTIVO',
      methodTitle: 'NO ES JUGAR MÁS.<br><em>ES ENTRENAR MEJOR.</em>',
      methodLead: 'Cada ejercicio tiene un porqué. Observamos, corregimos y repetimos con intención para convertir técnica en decisiones que funcionan en partido.',
      aerialAlt: 'Vista aérea real de canchas de pádel iluminadas por la noche', consoleKicker: 'Tu juego, desarmado en detalles.',
      skillTechnique: 'Técnica', skillTechniqueText: 'Golpes más limpios y eficientes.', skillTactics: 'Táctica', skillTacticsText: 'Mejores decisiones en cada zona.',
      skillVolley: 'Volea', skillVolleyText: 'Control y firmeza en la red.', skillBandeja: 'Bandeja', skillBandejaText: 'Precisión sin perder posición.',
      skillWall: 'Salida de pared', skillWallText: 'Tiempo y respuesta bajo presión.', skillPosition: 'Posicionamiento', skillPositionText: 'Movimiento con intención.',
      skillReading: 'Lectura de juego', skillReadingText: 'Anticipación y control.', skillConfidence: 'Confianza', skillConfidenceText: 'Herramientas para jugar suelto.',
      proofEyebrow: 'RESULTADOS QUE RESPALDAN EL MÉTODO', proofTitle: 'Más de 600 alumnos ya entrenaron con John.', proofLink: 'Encontrá tu formato',
      trainingModes: 'MODALIDADES', groupCode: 'GRUPO', focusCode: 'FOCO', teamCode: 'DUPLA',
      classesTitle: 'TRES FORMATOS.<br><em>UN MISMO OBJETIVO.</em>', classesLead: 'Elegí el ritmo, el nivel de foco y con quién entrenar. Precios directos y sin letra chica.',
      mostDynamic: 'MÁS DINÁMICA', showSummary: 'Cuatro alumnos rotando, jugando y recibiendo correcciones en el momento.', perPerson: 'por persona', students: 'alumnos', feedback: 'corrección',
      showFeature1: 'Ejercicios organizados por John', showFeature2: 'Alimentación de pelotas y rotación', showFeature3: 'Correcciones sin cortar el ritmo', bookShow: 'Reservar Show Aula',
      individualTitle: 'CLASE<br>INDIVIDUAL', individualOption: 'Clase Individual', individualSummary: 'Una hora diseñada alrededor de tu juego, tus objetivos y lo que necesitás corregir.', perClass: 'por clase', student: 'alumno', focus: 'foco',
      individualFeature1: 'Entrenamiento personalizado', individualFeature2: 'Técnica y táctica puntual', individualFeature3: 'Plan según tus objetivos', bookIndividual: 'Reservar Individual',
      duoTitle: 'CLASE EN<br>DUPLA', duoOption: 'Clase en Dupla', duoSummary: 'Entrenamiento para mejorar la conexión, el posicionamiento y las decisiones en pareja.', total: 'total', each: 'cada uno',
      duoFeature1: 'Correcciones adaptadas a los dos', duoFeature2: 'Técnica y táctica de pareja', duoFeature3: 'Posicionamiento y coordinación', bookDuo: 'Reservar Dupla',
      startProtocol: 'PROTOCOLO DE INICIO', processTitle: 'DEL CELULAR A LA CANCHA.', processLead: 'Sin registros ni vueltas. Todo se coordina directamente con John.',
      step1Title: 'Elegís modalidad', step1Text: 'Grupal, individual o dupla.', step2Title: 'Escribís por WhatsApp', step2Text: 'Contás tu nivel y objetivo.', step3Title: 'Reservás horario', step3Text: 'Coordinan el mejor momento.', step4Title: 'Entrenás en Q3', step4Text: 'La evolución empieza en cancha.',
      theCoach: 'QUIÉN ES JOHN', aboutTitle: 'DETRÁS DEL MÉTODO.<br><em>UN PROFESOR QUE OBSERVA.</em>', aboutPhotoAlt: 'John Fernandez, con la remera de John Padel Academy, dando indicaciones durante una clase de pádel', aboutRole: 'Entrenador de pádel',
      aboutStory1: 'John Fernandez encontró en el pádel el punto justo entre competencia, técnica y enseñanza.',
      aboutStory2: 'Su forma de entrenar parte de una idea simple: el alumno avanza más rápido cuando entiende por qué una decisión funciona. Por eso observa, corrige con claridad y lleva cada ajuste a una situación real de juego.',
      aboutStory3: 'Desde Q3 Padel, en la frontera entre Livramento y Rivera, trabaja con jugadores de todos los niveles. Más de 600 alumnos ya pasaron por un método cercano, exigente y sin vueltas.',
      aboutQuote: 'No se trata de repetir por repetir. Se trata de entrenar con intención.', aboutValue1: 'Todos los niveles', aboutValue2: 'Corrección clara', aboutValue3: 'Método práctico', aboutValue4: 'Evolución real',
      homeCourt: 'NUESTRA CANCHA', locationPlace: 'Sant’Ana do Livramento · Frontera con Rivera, Uruguay', locationText: 'El punto de encuentro para entrenar con método, intensidad y objetivos claros.', openMaps: 'Abrir en Google Maps',
      bookingConsole: 'CONSOLA DE RESERVA', messageBuilder: 'GENERADOR DE MENSAJE SEGURO', ready: '● LISTO',
      bookingTitle: 'TU PRÓXIMA<br><em>CLASE EMPIEZA ACÁ.</em>', bookingLead: 'Completá los datos y abrimos WhatsApp con el mensaje listo. John te responde para coordinar el horario.', directLabel: 'CONTACTO DIRECTO / ONLINE',
      nameLabel: 'Nombre *', namePlaceholder: 'Tu nombre', phoneLabel: 'Teléfono (opcional)', phonePlaceholder: 'Tu teléfono', modeLabel: 'Modalidad *', selectMode: 'Elegí una modalidad',
      levelLabel: 'Nivel *', selectLevel: 'Elegí tu nivel', beginner: 'Principiante', intermediate: 'Intermedio', advanced: 'Avanzado', dayLabel: 'Día preferido', timeLabel: 'Horario preferido',
      messageLabel: 'Mensaje adicional', messagePlaceholder: '¿Qué querés mejorar en tu juego?', sendWhatsApp: 'Abrir WhatsApp y reservar', formNote: 'Tus datos no se guardan: se usan únicamente para armar el mensaje de WhatsApp.',
      faqTitle: 'ANTES DE<br><em>ENTRAR A CANCHA.</em>', faqLead: 'Todo lo esencial antes de tu primera clase.', faq1Q: '¿Dónde son las clases?', faq1A: 'En Q3 Padel, Sant’Ana do Livramento, en la frontera con Rivera.',
      faq2Q: '¿Necesito tener experiencia?', faq2A: 'No. El entrenamiento se adapta a principiantes, intermedios y avanzados.', faq3Q: '¿Las clases son individuales o grupales?', faq3A: 'Podés elegir Show Aula para 4 alumnos, clase individual o clase en dupla.',
      faq4Q: '¿Cuánto duran?', faq4A: 'Las clases individuales y en dupla duran 1 hora. Consultá la dinámica del Show Aula.', faq5Q: '¿Cómo reservo?', faq5A: 'Completá el formulario o tocá cualquier botón de WhatsApp para coordinar directamente con John.',
      finalTag: 'EL PRÓXIMO PUNTO ES TUYO.', finalTitle: 'ENTRENÁ MEJOR.<br><em>JUGÁ DIFERENTE.</em>', finalCta: 'Reservá tu lugar hoy',
      footerLocation: 'Q3 Padel · Sant’Ana do Livramento', footerRights: 'Todos los derechos reservados.', photoCredit: 'Fotos de cancha:', stickySmall: 'COORDINACIÓN DIRECTA', stickyCta: 'Reservar por WhatsApp',
      genericMessage: 'Hola John, quiero reservar una clase de pádel. ¿Qué horarios tenés disponibles?', modeMessage: 'Hola John, quiero reservar la modalidad {mode}. ¿Qué horarios tenés disponibles?',
      formHello: 'Hola John, quiero reservar una clase de pádel.', formName: 'Nombre', formPhone: 'Teléfono', formMode: 'Modalidad', formLevel: 'Nivel', formDay: 'Día preferido', formTime: 'Horario preferido', formMessage: 'Mensaje',
      modeShow: 'Show Aula', modeIndividual: 'Clase Individual', modeDuo: 'Clase en Dupla', levelBeginner: 'Principiante', levelIntermediate: 'Intermedio', levelAdvanced: 'Avanzado', notSpecified: 'A coordinar'
    },
    pt: {
      metaTitle: 'John Padel Academy | Treinamento de padel em Livramento',
      metaDescription: 'Aulas de padel no Q3 Padel, Sant’Ana do Livramento. Técnica, tática e correções em tempo real para todos os níveis.',
      ogTitle: 'John Padel Academy | Domine a quadra',
      bootStatus: 'Sistema de performance · carregando', bootTechnique: 'TÉCNICA', bootTactics: 'TÁTICA', bootPrecision: 'PRECISÃO',
      skipLink: 'Pular para o conteúdo', brandHome: 'John Padel Academy — início', mainNav: 'Navegação principal', languageLabel: 'Idioma',
      navMethod: 'Método', navClasses: 'Aulas', navCoach: 'John', navLocation: 'Localização', headerCta: 'Agendar',
      heroProtocol: 'Protocolo de treinamento 01', heroTitleLine1: 'DOMINE', heroTitleLine2: 'A QUADRA',
      heroLead: 'Treinamento profissional de técnica e tática com correções em tempo real. Um sistema claro para jogar com mais precisão, decisão e confiança.',
      heroCta: 'Agendar pelo WhatsApp', heroSecondary: 'Ver modalidades', trustLabel: 'Dados de confiança', statStudents: 'alunos', statModes: 'modalidades', statMethod: 'método profissional', heroScroll: 'Conheça o método',
      signalLine: 'TÉCNICA <i>●</i> TÁTICA <i>●</i> PRECISÃO <i>●</i> DECISÃO <i>●</i> CONFIANÇA <i>●</i> CORREÇÃO EM TEMPO REAL <i>●</i>',
      methodIndex: 'LAB DE PERFORMANCE', liveAnalysis: 'ANÁLISE AO VIVO', courtSystem: 'Q3 // SISTEMA DE QUADRA', playerDevelopment: 'DESENVOLVIMENTO DO JOGADOR', online: '● ATIVO',
      methodTitle: 'NÃO É JOGAR MAIS.<br><em>É TREINAR MELHOR.</em>',
      methodLead: 'Cada exercício tem um motivo. Observamos, corrigimos e repetimos com intenção para transformar técnica em decisões que funcionam no jogo.',
      aerialAlt: 'Vista aérea real de quadras de padel iluminadas à noite', consoleKicker: 'Seu jogo, analisado em detalhes.',
      skillTechnique: 'Técnica', skillTechniqueText: 'Golpes mais limpos e eficientes.', skillTactics: 'Tática', skillTacticsText: 'Melhores decisões em cada zona.',
      skillVolley: 'Voleio', skillVolleyText: 'Controle e firmeza na rede.', skillBandeja: 'Bandeja', skillBandejaText: 'Precisão sem perder posição.',
      skillWall: 'Saída de parede', skillWallText: 'Tempo e resposta sob pressão.', skillPosition: 'Posicionamento', skillPositionText: 'Movimento com intenção.',
      skillReading: 'Leitura de jogo', skillReadingText: 'Antecipação e controle.', skillConfidence: 'Confiança', skillConfidenceText: 'Ferramentas para jogar solto.',
      proofEyebrow: 'RESULTADOS QUE COMPROVAM O MÉTODO', proofTitle: 'Mais de 600 alunos já treinaram com John.', proofLink: 'Encontre seu formato',
      trainingModes: 'MODALIDADES', groupCode: 'GRUPO', focusCode: 'FOCO', teamCode: 'DUPLA',
      classesTitle: 'TRÊS FORMATOS.<br><em>O MESMO OBJETIVO.</em>', classesLead: 'Escolha o ritmo, o nível de foco e com quem treinar. Preços diretos e sem letras miúdas.',
      mostDynamic: 'MAIS DINÂMICA', showSummary: 'Quatro alunos em rodízio, jogando e recebendo correções na hora.', perPerson: 'por pessoa', students: 'alunos', feedback: 'correção',
      showFeature1: 'Exercícios organizados por John', showFeature2: 'Alimentação de bolas e rodízio', showFeature3: 'Correções sem quebrar o ritmo', bookShow: 'Agendar Show Aula',
      individualTitle: 'AULA<br>INDIVIDUAL', individualOption: 'Aula Individual', individualSummary: 'Uma hora planejada ao redor do seu jogo, objetivos e pontos que precisam de correção.', perClass: 'por aula', student: 'aluno', focus: 'foco',
      individualFeature1: 'Treinamento personalizado', individualFeature2: 'Técnica e tática pontual', individualFeature3: 'Plano conforme seus objetivos', bookIndividual: 'Agendar Individual',
      duoTitle: 'AULA EM<br>DUPLA', duoOption: 'Aula em Dupla', duoSummary: 'Treinamento para melhorar conexão, posicionamento e decisões em dupla.', total: 'total', each: 'cada um',
      duoFeature1: 'Correções adaptadas aos dois', duoFeature2: 'Técnica e tática de dupla', duoFeature3: 'Posicionamento e coordenação', bookDuo: 'Agendar Dupla',
      startProtocol: 'PROTOCOLO DE INÍCIO', processTitle: 'DO CELULAR À QUADRA.', processLead: 'Sem cadastros nem complicação. Tudo é combinado diretamente com John.',
      step1Title: 'Escolha a modalidade', step1Text: 'Em grupo, individual ou dupla.', step2Title: 'Chame no WhatsApp', step2Text: 'Conte seu nível e objetivo.', step3Title: 'Reserve o horário', step3Text: 'Combinem o melhor momento.', step4Title: 'Treine no Q3', step4Text: 'A evolução começa na quadra.',
      theCoach: 'QUEM É JOHN', aboutTitle: 'POR TRÁS DO MÉTODO.<br><em>UM PROFESSOR QUE OBSERVA.</em>', aboutPhotoAlt: 'John Fernandez, com a camiseta da John Padel Academy, orientando durante uma aula de padel', aboutRole: 'Treinador de padel',
      aboutStory1: 'John Fernandez encontrou no padel o ponto certo entre competição, técnica e ensino.',
      aboutStory2: 'Sua forma de treinar parte de uma ideia simples: o aluno evolui mais rápido quando entende por que uma decisão funciona. Por isso observa, corrige com clareza e leva cada ajuste para uma situação real de jogo.',
      aboutStory3: 'No Q3 Padel, na fronteira entre Livramento e Rivera, trabalha com jogadores de todos os níveis. Mais de 600 alunos já passaram por um método próximo, exigente e direto.',
      aboutQuote: 'Não é repetir por repetir. É treinar com intenção.', aboutValue1: 'Todos os níveis', aboutValue2: 'Correção clara', aboutValue3: 'Método prático', aboutValue4: 'Evolução real',
      homeCourt: 'NOSSA QUADRA', locationPlace: 'Sant’Ana do Livramento · Fronteira com Rivera, Uruguai', locationText: 'O ponto de encontro para treinar com método, intensidade e objetivos claros.', openMaps: 'Abrir no Google Maps',
      bookingConsole: 'CONSOLE DE AGENDAMENTO', messageBuilder: 'GERADOR DE MENSAGEM SEGURA', ready: '● PRONTO',
      bookingTitle: 'SUA PRÓXIMA<br><em>AULA COMEÇA AQUI.</em>', bookingLead: 'Preencha os dados e abrimos o WhatsApp com a mensagem pronta. John responde para combinar o horário.', directLabel: 'CONTATO DIRETO / ONLINE',
      nameLabel: 'Nome *', namePlaceholder: 'Seu nome', phoneLabel: 'Telefone (opcional)', phonePlaceholder: 'Seu telefone', modeLabel: 'Modalidade *', selectMode: 'Escolha uma modalidade',
      levelLabel: 'Nível *', selectLevel: 'Escolha seu nível', beginner: 'Iniciante', intermediate: 'Intermediário', advanced: 'Avançado', dayLabel: 'Dia preferido', timeLabel: 'Horário preferido',
      messageLabel: 'Mensagem adicional', messagePlaceholder: 'O que você quer melhorar no seu jogo?', sendWhatsApp: 'Abrir WhatsApp e agendar', formNote: 'Seus dados não são armazenados: servem apenas para montar a mensagem do WhatsApp.',
      faqTitle: 'ANTES DE<br><em>ENTRAR EM QUADRA.</em>', faqLead: 'Tudo o que importa antes da sua primeira aula.', faq1Q: 'Onde são as aulas?', faq1A: 'No Q3 Padel, em Sant’Ana do Livramento, na fronteira com Rivera.',
      faq2Q: 'Preciso ter experiência?', faq2A: 'Não. O treinamento se adapta a iniciantes, intermediários e avançados.', faq3Q: 'As aulas são individuais ou em grupo?', faq3A: 'Você pode escolher Show Aula para 4 alunos, aula individual ou aula em dupla.',
      faq4Q: 'Quanto tempo duram?', faq4A: 'As aulas individuais e em dupla duram 1 hora. Consulte a dinâmica do Show Aula.', faq5Q: 'Como agendo?', faq5A: 'Preencha o formulário ou toque em qualquer botão do WhatsApp para combinar diretamente com John.',
      finalTag: 'O PRÓXIMO PONTO É SEU.', finalTitle: 'TREINE MELHOR.<br><em>JOGUE DIFERENTE.</em>', finalCta: 'Reserve sua vaga hoje',
      footerLocation: 'Q3 Padel · Sant’Ana do Livramento', footerRights: 'Todos os direitos reservados.', photoCredit: 'Fotos das quadras:', stickySmall: 'CONTATO DIRETO', stickyCta: 'Agendar pelo WhatsApp',
      genericMessage: 'Olá John, quero agendar uma aula de padel. Quais horários estão disponíveis?', modeMessage: 'Olá John, quero agendar a modalidade {mode}. Quais horários estão disponíveis?',
      formHello: 'Olá John, quero agendar uma aula de padel.', formName: 'Nome', formPhone: 'Telefone', formMode: 'Modalidade', formLevel: 'Nível', formDay: 'Dia preferido', formTime: 'Horário preferido', formMessage: 'Mensagem',
      modeShow: 'Show Aula', modeIndividual: 'Aula Individual', modeDuo: 'Aula em Dupla', levelBeginner: 'Iniciante', levelIntermediate: 'Intermediário', levelAdvanced: 'Avançado', notSpecified: 'A combinar'
    }
  };

  let currentLanguage = 'es';

  const getStoredLanguage = () => {
    try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
  };

  const setStoredLanguage = (language) => {
    try { localStorage.setItem(STORAGE_KEY, language); } catch { /* Storage can be disabled. */ }
  };

  const waUrl = (message) => `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  const localizedMode = (value) => ({
    show: copy[currentLanguage].modeShow,
    individual: copy[currentLanguage].modeIndividual,
    duo: copy[currentLanguage].modeDuo
  }[value] || copy[currentLanguage].notSpecified);

  const localizedLevel = (value) => ({
    beginner: copy[currentLanguage].levelBeginner,
    intermediate: copy[currentLanguage].levelIntermediate,
    advanced: copy[currentLanguage].levelAdvanced
  }[value] || copy[currentLanguage].notSpecified);

  const updateWhatsAppLinks = () => {
    document.querySelectorAll('[data-whatsapp]').forEach((link) => {
      const mode = link.dataset.mode;
      const message = mode
        ? copy[currentLanguage].modeMessage.replace('{mode}', localizedMode(mode))
        : copy[currentLanguage].genericMessage;
      link.href = waUrl(message);
    });
  };

  const updateMeta = () => {
    document.title = copy[currentLanguage].metaTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (metaDescription) metaDescription.content = copy[currentLanguage].metaDescription;
    if (ogTitle) ogTitle.content = copy[currentLanguage].ogTitle;
    if (ogDescription) ogDescription.content = copy[currentLanguage].metaDescription;
    if (twitterTitle) twitterTitle.content = copy[currentLanguage].ogTitle;
    if (twitterDescription) twitterDescription.content = copy[currentLanguage].metaDescription;
  };

  const applyLanguage = (language, persist = true) => {
    currentLanguage = language === 'pt' ? 'pt' : 'es';
    const dictionary = copy[currentLanguage];

    document.documentElement.lang = currentLanguage === 'pt' ? 'pt-BR' : 'es-UY';
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      const value = dictionary[element.dataset.i18nHtml];
      if (value !== undefined) element.innerHTML = value;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const value = dictionary[element.dataset.i18nPlaceholder];
      if (value !== undefined) element.placeholder = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      const value = dictionary[element.dataset.i18nAria];
      if (value !== undefined) element.setAttribute('aria-label', value);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      const value = dictionary[element.dataset.i18nAlt];
      if (value !== undefined) element.alt = value;
    });
    document.querySelectorAll('[data-lang]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === currentLanguage));
    });
    document.querySelectorAll('[data-footer-lang]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.footerLang === currentLanguage));
    });

    updateMeta();
    updateWhatsAppLinks();
    if (persist) setStoredLanguage(currentLanguage);
  };

  const initialLanguage = () => {
    const stored = getStoredLanguage();
    if (stored === 'es' || stored === 'pt') return stored;
    return (navigator.language || '').toLowerCase().startsWith('pt') ? 'pt' : 'es';
  };

  document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
  document.querySelectorAll('[data-footer-lang]').forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.footerLang)));
  applyLanguage(initialLanguage(), false);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finishBoot = () => {
    document.body.classList.remove('booting');
    document.body.classList.add('boot-complete');
  };
  document.body.classList.add('booting');
  if (prefersReducedMotion) {
    finishBoot();
  } else {
    window.setTimeout(finishBoot, 2850);
    document.querySelector('.boot-screen')?.addEventListener('click', finishBoot, { once: true });
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') finishBoot();
    }, { once: true });
  }

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealElements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }

  const progress = document.querySelector('.page-progress span');
  const updateScroll = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
    if (progress) progress.style.transform = `scaleX(${ratio})`;
    document.getElementById('site-header')?.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();

  if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
    let pointerFrame = 0;
    window.addEventListener('pointermove', (event) => {
      if (pointerFrame) return;
      pointerFrame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
        pointerFrame = 0;
      });
    }, { passive: true });
  }

  const navLinks = [...document.querySelectorAll('.tech-nav a')];
  const trackedSections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    trackedSections.forEach((section) => navObserver.observe(section));
  }

  document.querySelectorAll('.faq-list details').forEach((detail) => {
    detail.addEventListener('toggle', () => {
      if (!detail.open) return;
      document.querySelectorAll('.faq-list details').forEach((other) => {
        if (other !== detail) other.open = false;
      });
    });
  });

  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const dayInput = document.getElementById('day');
  if (dayInput) dayInput.min = localToday;

  const bookingForm = document.getElementById('booking-form');
  bookingForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!bookingForm.reportValidity()) return;

    const data = new FormData(bookingForm);
    const dictionary = copy[currentLanguage];
    const valueOrFallback = (name) => String(data.get(name) || '').trim() || dictionary.notSpecified;
    const rawDay = valueOrFallback('day');
    let formattedDay = rawDay;
    if (rawDay !== dictionary.notSpecified) {
      const parsedDay = new Date(`${rawDay}T12:00:00`);
      formattedDay = parsedDay.toLocaleDateString(currentLanguage === 'pt' ? 'pt-BR' : 'es-UY');
    }

    const lines = [
      dictionary.formHello,
      `${dictionary.formName}: ${valueOrFallback('name')}`,
      `${dictionary.formPhone}: ${valueOrFallback('phone')}`,
      `${dictionary.formMode}: ${localizedMode(valueOrFallback('mode'))}`,
      `${dictionary.formLevel}: ${localizedLevel(valueOrFallback('level'))}`,
      `${dictionary.formDay}: ${formattedDay}`,
      `${dictionary.formTime}: ${valueOrFallback('time')}`,
      `${dictionary.formMessage}: ${valueOrFallback('message')}`
    ];

    window.open(waUrl(lines.join('\n')), '_blank', 'noopener,noreferrer');
  });

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
