(() => {
  'use strict';

  const PHONE = '59893534762';
  const STORAGE_KEY = 'johnpadel-language';

  const copy = {
    es: {
      metaTitle: 'John Padel Academy | Clases de pádel en Livramento',
      metaDescription: 'Clases de pádel en Q3 Padel, Sant’Ana do Livramento. Técnica, táctica y correcciones en tiempo real para todos los niveles.',
      skipLink: 'Saltar al contenido', brandHome: 'John Padel Academy — inicio', mainNav: 'Navegación principal', languageLabel: 'Idioma',
      navMethod: 'Método', navClasses: 'Clases', navCoach: 'John', navLocation: 'Ubicación', navBook: 'Reservar', headerCta: 'WhatsApp',
      heroEyebrow: 'Entrenamiento de alto rendimiento', heroTitle: 'Entrená mejor.<br><em>Jugá mejor.</em>',
      heroLead: 'Clases de pádel con método profesional, correcciones en tiempo real y un plan claro para evolucionar más rápido.',
      heroLocation: 'Q3 Padel · Livramento / Rivera', heroCta: 'Reservar por WhatsApp', heroSecondary: 'Ver modalidades', trustLabel: 'Datos de confianza',
      statStudents: 'alumnos', statModes: 'modalidades', statFeedback: 'corrección en vivo', heroPhotoLabel: 'John Fernandez en una cancha de pádel',
      heroPhotoAlt: 'John Fernandez jugando al pádel en una cancha de vidrio', coachRole: 'Entrenador de pádel', performanceTitle: '+ precisión', performanceText: 'técnica · táctica · confianza',
      benefitsTag: 'Tu evolución', benefitsTitle: 'Un método que se nota en la cancha',
      benefitsLead: 'Trabajamos cada detalle con ejercicios concretos, lectura de juego y correcciones que podés aplicar desde la primera clase.',
      skillTechnique: 'Técnica', skillTechniqueText: 'Golpes más limpios, eficientes y seguros.', skillTactics: 'Táctica', skillTacticsText: 'Elegí mejor cada golpe y cada zona.',
      skillVolley: 'Volea', skillVolleyText: 'Control, dirección y firmeza en la red.', skillBandeja: 'Bandeja', skillBandejaText: 'Defendé la posición sin perder precisión.',
      skillWall: 'Salida de pared', skillWallText: 'Más tiempo y mejores decisiones bajo presión.', skillPosition: 'Posicionamiento', skillPositionText: 'Movete con intención y cerrá espacios.',
      skillReading: 'Lectura de juego', skillReadingText: 'Anticipá la jugada y ganá tiempo.', skillConfidence: 'Confianza', skillConfidenceText: 'Jugá suelto con herramientas claras.',
      proofTitle: 'Alumnos ya entrenaron con el método', proofText: 'Técnica + táctica + corrección en tiempo real. Un camino concreto para notar avances en menos de 3 meses.',
      proofLink: 'Encontrá tu modalidad <span aria-hidden="true">↓</span>', classesTag: 'Modalidades y precios', classesTitle: 'Elegí cómo querés entrenar',
      classesLead: 'Precios claros, formatos simples y el mismo objetivo: que cada minuto en cancha te haga avanzar.', popular: 'Dinámica grupal',
      showSummary: 'Ritmo, rotación y correcciones mientras jugás.', perPerson: 'por persona', fourStudents: '4 alumnos', groupFormat: 'Formato grupal',
      showFeature1: 'Ejercicios organizados por el profesor', showFeature2: 'Alimentación de pelotas y rotación', showFeature3: 'Correcciones en el momento', bookShow: 'Reservar Show Aula',
      oneHour: '1 hora', individualTitle: 'Clase Individual', individualSummary: 'Todo el entrenamiento enfocado en tu juego.', perClass: 'por clase', oneStudent: '1 alumno', fullFocus: 'Foco total',
      individualFeature1: 'Entrenamiento personalizado', individualFeature2: 'Técnica y táctica puntual', individualFeature3: 'Plan según tus objetivos', bookIndividual: 'Reservar Individual',
      duoTitle: 'Clase en Dupla', duoSummary: 'Entrená la conexión y las decisiones en pareja.', total: 'total', duoPerPerson: 'R$ 40 por persona', twoStudents: '2 alumnos',
      duoFeature1: 'Correcciones adaptadas a los dos', duoFeature2: 'Técnica y táctica de pareja', duoFeature3: 'Posicionamiento y coordinación', bookDuo: 'Reservar Dupla',
      processTag: 'Simple y directo', processTitle: 'De este sitio a la cancha en cuatro pasos', processLead: 'Sin registros, sin vueltas. Coordinás directamente con John por WhatsApp.',
      processCta: 'Quiero reservar <span aria-hidden="true">→</span>', step1Title: 'Elegís modalidad', step1Text: 'Grupal, individual o en dupla.',
      step2Title: 'Coordinás por WhatsApp', step2Text: 'Contás tu nivel y qué querés mejorar.', step3Title: 'Reservás horario', step3Text: 'Definen juntos el mejor día y hora.',
      step4Title: 'Entrenás en Q3 Padel', step4Text: 'Llegás a la cancha y empieza la evolución.',
      aboutTag: 'Tu entrenador', aboutRole: 'Entrenador de pádel',
      aboutLead: 'Un enfoque técnico, práctico y cercano. John transforma cada error en una corrección clara para que entiendas qué cambiar, cómo hacerlo y cuándo aplicarlo.',
      aboutQuote: '“No se trata de repetir por repetir. Se trata de entrenar con intención.”', aboutValue1: 'Todos los niveles', aboutValue2: 'Corrección clara', aboutValue3: 'Método práctico', aboutValue4: 'Evolución medible',
      aboutPhotoAlt: 'John Fernandez de perfil en Q3 Padel', locationTag: 'Dónde entrenamos', locationPlace: 'Sant’Ana do Livramento · Frontera con Rivera, Uruguay',
      locationText: 'Entrená en cancha y en un entorno preparado para aprovechar cada ejercicio.', openMaps: 'Abrir en Google Maps', borderLabel: 'LIVRAMENTO ↔ RIVERA',
      bookingTag: 'Tu próxima clase', bookingTitle: 'Reservá en menos de un minuto', bookingLead: 'Completá los datos y abrimos WhatsApp con el mensaje listo. La coordinación es directa con John.',
      directLabel: 'Contacto directo', nameLabel: 'Nombre *', namePlaceholder: 'Tu nombre', phoneLabel: 'Teléfono (opcional)', phonePlaceholder: 'Tu teléfono',
      modeLabel: 'Modalidad *', selectMode: 'Elegí una modalidad', levelLabel: 'Nivel *', selectLevel: 'Elegí tu nivel', beginner: 'Principiante', intermediate: 'Intermedio', advanced: 'Avanzado',
      dayLabel: 'Día preferido', timeLabel: 'Horario preferido', messageLabel: 'Mensaje adicional', messagePlaceholder: 'Contale a John qué querés mejorar',
      sendWhatsApp: 'Abrir WhatsApp y reservar', formNote: 'No enviamos ni guardamos tus datos: el mensaje se abre directamente en WhatsApp.',
      faqTitle: 'Preguntas frecuentes', faqLead: 'Lo esencial antes de tu primera clase.', faq1Q: '¿Dónde son las clases?', faq1A: 'En Q3 Padel, Sant’Ana do Livramento, en la frontera con Rivera.',
      faq2Q: '¿Necesito tener experiencia?', faq2A: 'No. Hay clases para principiantes, intermedios y avanzados. El entrenamiento se adapta a tu nivel.',
      faq3Q: '¿Las clases son individuales o grupales?', faq3A: 'Podés elegir Show Aula para 4 alumnos, clase individual o clase en dupla.',
      faq4Q: '¿Cuánto duran?', faq4A: 'Las clases individuales y en dupla duran 1 hora. Consultá por WhatsApp la dinámica y disponibilidad del Show Aula.',
      faq5Q: '¿Cómo reservo?', faq5A: 'Completá el formulario o tocá cualquier botón de WhatsApp para coordinar día y horario directamente con John.',
      finalTag: 'Tu mejor versión empieza acá', finalTitle: 'Entrená con intención.<br>Jugá con confianza.', finalCta: 'Reservá tu lugar hoy',
      footerLocation: 'Q3 Padel · Sant’Ana do Livramento', footerRights: 'Todos los derechos reservados.', stickyCta: 'Reservar por WhatsApp',
      genericMessage: 'Hola John, quiero reservar una clase de pádel. ¿Qué horarios tenés disponibles?', modeMessage: 'Hola John, quiero reservar la modalidad {mode}. ¿Qué horarios tenés disponibles?',
      modeShow: 'Show Aula', modeIndividual: 'Clase Individual', modeDuo: 'Clase en Dupla', levelBeginner: 'Principiante', levelIntermediate: 'Intermedio', levelAdvanced: 'Avanzado', notSpecified: 'A coordinar'
    },
    pt: {
      metaTitle: 'John Padel Academy | Aulas de padel em Livramento',
      metaDescription: 'Aulas de padel no Q3 Padel, Sant’Ana do Livramento. Técnica, tática e correções em tempo real para todos os níveis.',
      skipLink: 'Pular para o conteúdo', brandHome: 'John Padel Academy — início', mainNav: 'Navegação principal', languageLabel: 'Idioma',
      navMethod: 'Método', navClasses: 'Aulas', navCoach: 'John', navLocation: 'Localização', navBook: 'Agendar', headerCta: 'WhatsApp',
      heroEyebrow: 'Treinamento de alto rendimento', heroTitle: 'Treine melhor.<br><em>Jogue melhor.</em>',
      heroLead: 'Aulas de padel com método profissional, correções em tempo real e um plano claro para evoluir mais rápido.',
      heroLocation: 'Q3 Padel · Livramento / Rivera', heroCta: 'Agendar pelo WhatsApp', heroSecondary: 'Ver modalidades', trustLabel: 'Dados de confiança',
      statStudents: 'alunos', statModes: 'modalidades', statFeedback: 'correção ao vivo', heroPhotoLabel: 'John Fernandez em uma quadra de padel',
      heroPhotoAlt: 'John Fernandez jogando padel em uma quadra de vidro', coachRole: 'Treinador de padel', performanceTitle: '+ precisão', performanceText: 'técnica · tática · confiança',
      benefitsTag: 'Sua evolução', benefitsTitle: 'Um método que aparece na quadra',
      benefitsLead: 'Trabalhamos cada detalhe com exercícios concretos, leitura de jogo e correções que você aplica desde a primeira aula.',
      skillTechnique: 'Técnica', skillTechniqueText: 'Golpes mais limpos, eficientes e seguros.', skillTactics: 'Tática', skillTacticsText: 'Escolha melhor cada golpe e cada zona.',
      skillVolley: 'Voleio', skillVolleyText: 'Controle, direção e firmeza na rede.', skillBandeja: 'Bandeja', skillBandejaText: 'Defenda a posição sem perder precisão.',
      skillWall: 'Saída de parede', skillWallText: 'Mais tempo e melhores decisões sob pressão.', skillPosition: 'Posicionamento', skillPositionText: 'Movimente-se com intenção e feche espaços.',
      skillReading: 'Leitura de jogo', skillReadingText: 'Antecipe a jogada e ganhe tempo.', skillConfidence: 'Confiança', skillConfidenceText: 'Jogue solto com ferramentas claras.',
      proofTitle: 'Alunos já treinaram com o método', proofText: 'Técnica + tática + correção em tempo real. Um caminho concreto para perceber avanços em menos de 3 meses.',
      proofLink: 'Encontre sua modalidade <span aria-hidden="true">↓</span>', classesTag: 'Modalidades e preços', classesTitle: 'Escolha como você quer treinar',
      classesLead: 'Preços claros, formatos simples e o mesmo objetivo: fazer cada minuto na quadra gerar evolução.', popular: 'Dinâmica em grupo',
      showSummary: 'Ritmo, rodízio e correções enquanto você joga.', perPerson: 'por pessoa', fourStudents: '4 alunos', groupFormat: 'Formato em grupo',
      showFeature1: 'Exercícios organizados pelo professor', showFeature2: 'Alimentação de bolas e rodízio', showFeature3: 'Correções na hora', bookShow: 'Agendar Show Aula',
      oneHour: '1 hora', individualTitle: 'Aula Individual', individualSummary: 'Todo o treinamento focado no seu jogo.', perClass: 'por aula', oneStudent: '1 aluno', fullFocus: 'Foco total',
      individualFeature1: 'Treinamento personalizado', individualFeature2: 'Técnica e tática pontual', individualFeature3: 'Plano conforme seus objetivos', bookIndividual: 'Agendar Individual',
      duoTitle: 'Aula em Dupla', duoSummary: 'Treine a conexão e as decisões em dupla.', total: 'total', duoPerPerson: 'R$ 40 por pessoa', twoStudents: '2 alunos',
      duoFeature1: 'Correções adaptadas aos dois', duoFeature2: 'Técnica e tática de dupla', duoFeature3: 'Posicionamento e coordenação', bookDuo: 'Agendar Dupla',
      processTag: 'Simples e direto', processTitle: 'Deste site para a quadra em quatro passos', processLead: 'Sem cadastro, sem complicação. Você combina diretamente com John pelo WhatsApp.',
      processCta: 'Quero agendar <span aria-hidden="true">→</span>', step1Title: 'Escolha a modalidade', step1Text: 'Em grupo, individual ou em dupla.',
      step2Title: 'Combine pelo WhatsApp', step2Text: 'Conte seu nível e o que quer melhorar.', step3Title: 'Reserve o horário', step3Text: 'Definam juntos o melhor dia e hora.',
      step4Title: 'Treine no Q3 Padel', step4Text: 'Chegue à quadra e comece a evolução.',
      aboutTag: 'Seu treinador', aboutRole: 'Treinador de padel',
      aboutLead: 'Uma abordagem técnica, prática e próxima. John transforma cada erro em uma correção clara para você entender o que mudar, como fazer e quando aplicar.',
      aboutQuote: '“Não é repetir por repetir. É treinar com intenção.”', aboutValue1: 'Todos os níveis', aboutValue2: 'Correção clara', aboutValue3: 'Método prático', aboutValue4: 'Evolução mensurável',
      aboutPhotoAlt: 'John Fernandez de perfil no Q3 Padel', locationTag: 'Onde treinamos', locationPlace: 'Sant’Ana do Livramento · Fronteira com Rivera, Uruguai',
      locationText: 'Treine em quadra e em um ambiente preparado para aproveitar cada exercício.', openMaps: 'Abrir no Google Maps', borderLabel: 'LIVRAMENTO ↔ RIVERA',
      bookingTag: 'Sua próxima aula', bookingTitle: 'Agende em menos de um minuto', bookingLead: 'Preencha os dados e abrimos o WhatsApp com a mensagem pronta. A combinação é direta com John.',
      directLabel: 'Contato direto', nameLabel: 'Nome *', namePlaceholder: 'Seu nome', phoneLabel: 'Telefone (opcional)', phonePlaceholder: 'Seu telefone',
      modeLabel: 'Modalidade *', selectMode: 'Escolha uma modalidade', levelLabel: 'Nível *', selectLevel: 'Escolha seu nível', beginner: 'Iniciante', intermediate: 'Intermediário', advanced: 'Avançado',
      dayLabel: 'Dia preferido', timeLabel: 'Horário preferido', messageLabel: 'Mensagem adicional', messagePlaceholder: 'Conte ao John o que você quer melhorar',
      sendWhatsApp: 'Abrir WhatsApp e agendar', formNote: 'Não enviamos nem armazenamos seus dados: a mensagem abre diretamente no WhatsApp.',
      faqTitle: 'Perguntas frequentes', faqLead: 'O essencial antes da sua primeira aula.', faq1Q: 'Onde são as aulas?', faq1A: 'No Q3 Padel, em Sant’Ana do Livramento, na fronteira com Rivera.',
      faq2Q: 'Preciso ter experiência?', faq2A: 'Não. Há aulas para iniciantes, intermediários e avançados. O treinamento se adapta ao seu nível.',
      faq3Q: 'As aulas são individuais ou em grupo?', faq3A: 'Você pode escolher Show Aula para 4 alunos, aula individual ou aula em dupla.',
      faq4Q: 'Quanto tempo duram?', faq4A: 'As aulas individuais e em dupla duram 1 hora. Consulte pelo WhatsApp a dinâmica e disponibilidade do Show Aula.',
      faq5Q: 'Como agendo?', faq5A: 'Preencha o formulário ou toque em qualquer botão do WhatsApp para combinar dia e horário diretamente com John.',
      finalTag: 'Sua melhor versão começa aqui', finalTitle: 'Treine com intenção.<br>Jogue com confiança.', finalCta: 'Reserve sua vaga hoje',
      footerLocation: 'Q3 Padel · Sant’Ana do Livramento', footerRights: 'Todos os direitos reservados.', stickyCta: 'Agendar pelo WhatsApp',
      genericMessage: 'Olá John, quero agendar uma aula de padel. Quais horários estão disponíveis?', modeMessage: 'Olá John, quero agendar a modalidade {mode}. Quais horários estão disponíveis?',
      modeShow: 'Show Aula', modeIndividual: 'Aula Individual', modeDuo: 'Aula em Dupla', levelBeginner: 'Iniciante', levelIntermediate: 'Intermediário', levelAdvanced: 'Avançado', notSpecified: 'A combinar'
    }
  };

  const modeLabels = {
    es: { show: copy.es.modeShow, individual: copy.es.modeIndividual, duo: copy.es.modeDuo },
    pt: { show: copy.pt.modeShow, individual: copy.pt.modeIndividual, duo: copy.pt.modeDuo }
  };
  const levelLabels = {
    es: { beginner: copy.es.levelBeginner, intermediate: copy.es.levelIntermediate, advanced: copy.es.levelAdvanced },
    pt: { beginner: copy.pt.levelBeginner, intermediate: copy.pt.levelIntermediate, advanced: copy.pt.levelAdvanced }
  };

  let currentLanguage = 'es';

  const waUrl = (message) => `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  function applyLanguage(language, persist = false) {
    currentLanguage = language === 'pt' ? 'pt' : 'es';
    const t = copy[currentLanguage];
    document.documentElement.lang = currentLanguage === 'pt' ? 'pt-BR' : 'es-UY';
    document.title = t.metaTitle;

    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (description) description.content = t.metaDescription;
    if (ogTitle) ogTitle.content = t.metaTitle;
    if (ogDescription) ogDescription.content = t.metaDescription;
    if (twitterTitle) twitterTitle.content = t.metaTitle;
    if (twitterDescription) twitterDescription.content = t.metaDescription;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = t[element.dataset.i18n];
      if (typeof value === 'string') element.textContent = value;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      const value = t[element.dataset.i18nHtml];
      if (typeof value === 'string') element.innerHTML = value;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const value = t[element.dataset.i18nPlaceholder];
      if (typeof value === 'string') element.placeholder = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      const value = t[element.dataset.i18nAria];
      if (typeof value === 'string') element.setAttribute('aria-label', value);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      const value = t[element.dataset.i18nAlt];
      if (typeof value === 'string') element.alt = value;
    });
    document.querySelectorAll('[data-lang]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === currentLanguage));
    });

    document.querySelectorAll('[data-whatsapp]').forEach((link) => {
      const mode = link.dataset.mode;
      const message = mode
        ? t.modeMessage.replace('{mode}', modeLabels[currentLanguage][mode])
        : t.genericMessage;
      link.href = waUrl(message);
    });

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, currentLanguage); } catch (_) { /* preference remains in memory */ }
    }
  }

  function detectedLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'es' || saved === 'pt') return saved;
    } catch (_) { /* browser preference is enough */ }
    const browserLanguage = (navigator.languages?.[0] || navigator.language || '').toLowerCase();
    return browserLanguage.startsWith('pt') ? 'pt' : 'es';
  }

  function formattedDate(value) {
    if (!value) return copy[currentLanguage].notSpecified;
    const date = new Date(`${value}T12:00:00`);
    return new Intl.DateTimeFormat(currentLanguage === 'pt' ? 'pt-BR' : 'es-UY', {
      day: '2-digit', month: '2-digit', year: 'numeric'
    }).format(date);
  }

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang, true));
  });

  const form = document.getElementById('booking-form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const mode = String(data.get('mode') || '');
    const level = String(data.get('level') || '');
    const day = formattedDate(String(data.get('day') || ''));
    const time = String(data.get('time') || '').trim() || copy[currentLanguage].notSpecified;
    const extra = String(data.get('message') || '').trim() || '—';

    const lines = currentLanguage === 'pt'
      ? [
          'Olá John, quero agendar uma aula de padel.',
          `Nome: ${name}`,
          ...(phone ? [`Telefone: ${phone}`] : []),
          `Modalidade: ${modeLabels.pt[mode]}`,
          `Nível: ${levelLabels.pt[level]}`,
          `Dia preferido: ${day}`,
          `Horário preferido: ${time}`,
          `Mensagem: ${extra}`
        ]
      : [
          'Hola John, quiero reservar una clase de pádel.',
          `Nombre: ${name}`,
          ...(phone ? [`Teléfono: ${phone}`] : []),
          `Modalidad: ${modeLabels.es[mode]}`,
          `Nivel: ${levelLabels.es[level]}`,
          `Día preferido: ${day}`,
          `Horario preferido: ${time}`,
          `Mensaje: ${extra}`
        ];

    const popup = window.open(waUrl(lines.join('\n')), '_blank');
    if (popup) popup.opener = null;
    else window.location.href = waUrl(lines.join('\n'));
  });

  document.querySelectorAll('.faq-list details').forEach((detail) => {
    detail.addEventListener('toggle', () => {
      if (!detail.open) return;
      document.querySelectorAll('.faq-list details[open]').forEach((other) => {
        if (other !== detail) other.open = false;
      });
    });
  });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((element) => element.classList.add('is-revealed'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px' });
    reveals.forEach((element) => observer.observe(element));
  }

  const dayInput = document.getElementById('day');
  if (dayInput) {
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    dayInput.min = localToday;
  }
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  applyLanguage(detectedLanguage());
})();
