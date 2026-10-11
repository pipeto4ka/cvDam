/* =========================================================
   Damir Zhumanov — landing
   i18n + modals + animations
   ========================================================= */
(function () {
  'use strict';

  /* ---------------- i18n ---------------- */
  var I18N = {
    ru: {
      htmlLang: 'ru',
      brandName: 'ДАМИР ЖУМАНОВ',
      name: 'ДАМИР ЖУМАНОВ',
      role: 'FinTech & Digital Operations Specialist',
      location: 'Алматы, Казахстан',
      status: 'ОТКРЫТ К УДАЛЁННОЙ РАБОТЕ',
      'tag.fintech': 'FinTech',
      'tag.igaming': 'iGaming',
      'tag.payments': 'Payments',
      'tag.operations': 'Operations',

      'job.payment.title': 'Payment Operations Manager',
      'job.payment.company': 'Monolife',
      'job.payment.period': 'Май 2026 — Октябрь 2026',
      'job.b2b.title': 'B2B Sales Manager',
      'job.b2b.company': 'Monolife',
      'job.b2b.period': 'Октябрь 2025 — Апрель 2026',
      'job.retention.title': 'iGaming Support / Retention Manager',
      'job.retention.company': 'NDA',
      'job.retention.period': 'Март 2025 — Июнь 2025',
      'job.support.title': 'Technical Support',
      'job.support.company': 'KazakhTelecom',
      'job.support.period': 'Апрель 2023 — Август 2023',

      'section.about': 'ОБО МНЕ',
      'section.skills': 'НАВЫКИ',
      'section.education': 'ОБРАЗОВАНИЕ',
      'section.languages': 'ЯЗЫКИ',
      'section.contacts': 'КОНТАКТЫ',
      about: 'Универсальный специалист с опытом в FinTech и iGaming. Работаю с клиентами, платёжными операциями, B2B-продажами и технической поддержкой. Внимателен к деталям, быстро обучаюсь и умею эффективно взаимодействовать с командой.',
      'skill.1': 'Excel / Google Sheets',
      'skill.2': 'CRM-системы',
      'skill.3': 'Платёжные админ-панели',
      'skill.4': 'Тикет-системы',
      'skill.5': 'Работа с транзакциями',
      'skill.6': 'Деловая переписка',
      'edu.name': 'Алматинский университет энергетики и связи',
      'edu.field': 'Электроэнергетика',
      'lang.ru': 'Русский',
      'lang.ru.lvl': 'Разговорный',
      'lang.kz': 'Казахский',
      'lang.en': 'Английский',
      'contact.email': 'Написать на Email',
      'contact.tg': 'Написать в Telegram',

      'modal.summary': 'КРАТКОЕ ОПИСАНИЕ ПОЗИЦИИ',
      'modal.duties': 'ОБЯЗАННОСТИ',
      'modal.achievement': 'ДОСТИЖЕНИЕ',
      'modal.scale': 'МАСШТАБ РАБОТЫ'
    },

    en: {
      htmlLang: 'en',
      brandName: 'DAMIR ZHUMANOV',
      name: 'DAMIR ZHUMANOV',
      role: 'FinTech & Digital Operations Specialist',
      location: 'Almaty, Kazakhstan',
      status: 'OPEN TO REMOTE WORK',
      'tag.fintech': 'FinTech',
      'tag.igaming': 'iGaming',
      'tag.payments': 'Payments',
      'tag.operations': 'Operations',

      'job.payment.title': 'Payment Operations Manager',
      'job.payment.company': 'Monolife',
      'job.payment.period': 'May 2026 — October 2026',
      'job.b2b.title': 'B2B Sales Manager',
      'job.b2b.company': 'Monolife',
      'job.b2b.period': 'October 2025 — April 2026',
      'job.retention.title': 'iGaming Support / Retention Manager',
      'job.retention.company': 'NDA',
      'job.retention.period': 'March 2025 — June 2025',
      'job.support.title': 'Technical Support',
      'job.support.company': 'KazakhTelecom',
      'job.support.period': 'April 2023 — August 2023',

      'section.about': 'ABOUT ME',
      'section.skills': 'SKILLS',
      'section.education': 'EDUCATION',
      'section.languages': 'LANGUAGES',
      'section.contacts': 'CONTACTS',
      about: 'A versatile specialist with experience in FinTech and iGaming. I work with clients, payment operations, B2B sales and technical support. Attentive to detail, a fast learner, and effective at working with a team.',
      'skill.1': 'Excel / Google Sheets',
      'skill.2': 'CRM systems',
      'skill.3': 'Payment admin panels',
      'skill.4': 'Ticketing systems',
      'skill.5': 'Transaction handling',
      'skill.6': 'Business correspondence',
      'edu.name': 'Almaty University of Power Engineering and Telecommunications',
      'edu.field': 'Electric Power Engineering',
      'lang.ru': 'Russian',
      'lang.ru.lvl': 'Conversational',
      'lang.kz': 'Kazakh',
      'lang.en': 'English',
      'contact.email': 'Write an Email',
      'contact.tg': 'Message on Telegram',

      'modal.summary': 'POSITION SUMMARY',
      'modal.duties': 'RESPONSIBILITIES',
      'modal.achievement': 'ACHIEVEMENT',
      'modal.scale': 'SCALE OF WORK'
    }
  };

  /* ---------------- modal content ---------------- */
  var JOBS = {
    payment: {
      num: '01',
      ru: {
        title: 'Payment Operations Manager',
        meta: 'Monolife · Май 2026 — Октябрь 2026',
        summary: 'Контроль входящих платежей и исходящих выплат, проверка корректности платёжных данных и соблюдения сроков обработки транзакций. Работа включала проверку отдельных операций, мониторинг общего процесса и взаимодействие с другими отделами для решения рабочих задач.',
        duties: [
          'Проверка статуса входящих платежей (pay-in).',
          'Контроль исходящих выплат (pay-out) и своевременности их проведения.',
          'Проверка корректности платёжных данных.',
          'Мониторинг отдельных транзакций и общего хода платёжных операций.',
          'Взаимодействие с другими отделами по текущим операционным вопросам.',
          'Контроль соблюдения сроков обработки платежей.'
        ],
        scale: { value: '~1 000', label: 'транзакций' }
      },
      en: {
        title: 'Payment Operations Manager',
        meta: 'Monolife · May 2026 — October 2026',
        summary: 'Control of incoming payments and outgoing payouts, verification of payment data accuracy and adherence to transaction processing deadlines. The work included checking individual operations, monitoring the overall process and working with other departments to resolve operational tasks.',
        duties: [
          'Checking the status of incoming payments (pay-in).',
          'Control of outgoing payouts (pay-out) and their timely processing.',
          'Verification of payment data accuracy.',
          'Monitoring individual transactions and the overall flow of payment operations.',
          'Working with other departments on current operational matters.',
          'Control over compliance with payment processing deadlines.'
        ],
        scale: { value: '~1,000', label: 'transactions' }
      }
    },

    b2b: {
      num: '02',
      ru: {
        title: 'B2B Sales Manager',
        meta: 'Monolife · Октябрь 2025 — апрель 2026',
        summary: 'Работа с B2B-клиентами из iGaming-индустрии, заинтересованными в платёжных решениях. Презентация услуг Monolife, проведение переговоров и обсуждение условий сотрудничества с потенциальными клиентами.',
        duties: [
          'Работа с готовой клиентской базой.',
          'Взаимодействие с представителями компаний из iGaming-индустрии.',
          'Презентация платёжных решений и услуг компании.',
          'Проведение переговоров с потенциальными клиентами.',
          'Обсуждение коммерческих условий сотрудничества.'
        ],
        achievement: 'Выполнение плана продаж три месяца подряд.'
      },
      en: {
        title: 'B2B Sales Manager',
        meta: 'Monolife · October 2025 — April 2026',
        summary: 'Working with B2B clients from the iGaming industry interested in payment solutions. Presenting Monolife services, holding negotiations and discussing cooperation terms with potential clients.',
        duties: [
          'Working with an existing client base.',
          'Communicating with representatives of iGaming companies.',
          'Presenting the company’s payment solutions and services.',
          'Holding negotiations with potential clients.',
          'Discussing commercial terms of cooperation.'
        ],
        achievement: 'Met the sales plan three months in a row.'
      }
    },

    retention: {
      num: '03',
      ru: {
        title: 'iGaming Support / Retention Manager',
        meta: 'iGaming Company · Март — июнь 2025 · NDA',
        groups: [
          {
            role: 'Retention Manager',
            summary: 'Работа с базой игроков, прекративших пользоваться продуктом. Выявление причин снижения активности, работа над возвращением пользователей и участие в управлении жизненным циклом игрока.',
            duties: [
              'Работа с базой неактивных игроков.',
              'Выяснение причин прекращения использования продукта.',
              'Взаимодействие с игроками с целью их возвращения.',
              'Участие в управлении жизненным циклом игрока.'
            ]
          },
          {
            role: 'iGaming Support',
            summary: 'Поддержка пользователей iGaming-проекта по финансовым вопросам, консультации по бонусам и правилам платформы, а также помощь в удержании клиентов в рамках взаимодействия со службой поддержки.',
            duties: [
              'Решение финансовых вопросов пользователей.',
              'Консультирование по бонусам и правилам проекта.',
              'Обработка пользовательских обращений.',
              'Участие в удержании пользователей на уровне поддержки.'
            ],
            achievement: 'Получал положительные отзывы пользователей на протяжении длительного периода работы.'
          }
        ]
      },
      en: {
        title: 'iGaming Support / Retention Manager',
        meta: 'iGaming Company · March — June 2025 · NDA',
        groups: [
          {
            role: 'Retention Manager',
            summary: 'Working with the base of players who had stopped using the product. Identifying the reasons behind the drop in activity, working on bringing users back and taking part in managing the player lifecycle.',
            duties: [
              'Working with the base of inactive players.',
              'Finding out the reasons for players leaving the product.',
              'Engaging with players in order to bring them back.',
              'Taking part in player lifecycle management.'
            ]
          },
          {
            role: 'iGaming Support',
            summary: 'Supporting users of an iGaming project on financial matters, advising on bonuses and platform rules, and helping retain customers as part of support interactions.',
            duties: [
              'Resolving users’ financial issues.',
              'Advising on bonuses and project rules.',
              'Handling user requests.',
              'Taking part in user retention at the support level.'
            ],
            achievement: 'Received positive user feedback over a long period of work.'
          }
        ]
      }
    },

    support: {
      num: '04',
      ru: {
        title: 'Technical Support Specialist',
        meta: 'Kazakhtelecom · Апрель — август 2023',
        summary: 'Приём и регистрация обращений пользователей, проведение базовой удалённой диагностики, помощь с настройками и предоставление консультаций по типовым вопросам.',
        duties: [
          'Приём и регистрация заявок пользователей.',
          'Проведение базовой удалённой диагностики.',
          'Помощь пользователям с настройками.',
          'Консультирование по типовым техническим вопросам.'
        ]
      },
      en: {
        title: 'Technical Support Specialist',
        meta: 'Kazakhtelecom · April — August 2023',
        summary: 'Receiving and registering user requests, performing basic remote diagnostics, helping with settings and advising on standard issues.',
        duties: [
          'Receiving and registering user requests.',
          'Performing basic remote diagnostics.',
          'Helping users with settings.',
          'Advising on standard technical issues.'
        ]
      }
    }
  };

  /* ---------------- state ---------------- */
  var lang = 'ru';
  try {
    var saved = localStorage.getItem('dj-lang');
    if (saved === 'ru' || saved === 'en') lang = saved;
  } catch (e) {}

  var t = function (key) {
    var dict = I18N[lang];
    return (dict && dict[key] != null) ? dict[key] : key;
  };

  /* ---------------- language ---------------- */
  var langBtns = document.querySelectorAll('.lang__btn');
  var pill = document.querySelector('.lang__pill');

  function movePill() {
    var active = document.querySelector('.lang__btn.is-active');
    if (!active || !pill) return;
    pill.style.width = active.offsetWidth + 'px';
    pill.style.transform = 'translateX(' + (active.offsetLeft - 4) + 'px)';
  }

  function applyLang(next) {
    lang = next;
    try { localStorage.setItem('dj-lang', next); } catch (e) {}
    document.documentElement.lang = I18N[next].htmlLang;

    var nodes = document.querySelectorAll('[data-i18n]');
    Array.prototype.forEach.call(nodes, function (el, i) {
      var val = I18N[next][el.getAttribute('data-i18n')];
      if (val == null) return;
      el.style.transition = 'none';
      el.style.opacity = '0';
      el.style.transform = 'translateY(6px)';
      setTimeout(function () {
        el.textContent = val;
        el.style.transition = 'opacity .4s cubic-bezier(.22,1,.36,1), transform .4s cubic-bezier(.22,1,.36,1)';
        el.style.opacity = '';
        el.style.transform = '';
      }, 60 + Math.min(i, 14) * 10);
    });

    Array.prototype.forEach.call(langBtns, function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-lang') === next);
    });
    requestAnimationFrame(movePill);

    if (modal.classList.contains('is-open') && currentJob) renderModal(currentJob);
  }

  Array.prototype.forEach.call(langBtns, function (btn) {
    btn.addEventListener('click', function () {
      var next = btn.getAttribute('data-lang');
      if (next !== lang) applyLang(next);
    });
  });

  /* ---------------- theme ---------------- */
  var themeBtn = document.getElementById('themeToggle');
  try {
    var savedTheme = localStorage.getItem('dj-theme');
    if (savedTheme === 'light') document.documentElement.setAttribute('data-theme', 'light');
  } catch (e) {}
  themeBtn.addEventListener('click', function () {
    var isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', 'light');
    try { localStorage.setItem('dj-theme', isLight ? 'dark' : 'light'); } catch (e) {}
  });

  /* ---------------- modal ---------------- */
  var modal = document.getElementById('modal');
  var modalNum = document.getElementById('modalNum');
  var modalTitle = document.getElementById('modalTitle');
  var modalMeta = document.getElementById('modalMeta');
  var modalBody = document.getElementById('modalBody');
  var currentJob = null;
  var lastFocus = null;

  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function blockSummary(text) {
    return '<div class="m-block"><h3 class="m-block__title">' + esc(t('modal.summary')) +
      '</h3><p>' + esc(text) + '</p></div>';
  }
  function blockDuties(list) {
    return '<div class="m-block"><h3 class="m-block__title">' + esc(t('modal.duties')) +
      '</h3><ul class="m-list">' + list.map(function (d) {
        return '<li>' + esc(d) + '</li>';
      }).join('') + '</ul></div>';
  }
  function blockAchievement(text) {
    return '<div class="m-block"><h3 class="m-block__title">' + esc(t('modal.achievement')) +
      '</h3><div class="m-badge">' + esc(text) + '</div></div>';
  }
  function blockScale(scale) {
    return '<div class="m-block"><h3 class="m-block__title">' + esc(t('modal.scale')) +
      '</h3><div class="m-scale"><strong>' + esc(scale.value) + '</strong><span>' +
      esc(scale.label) + '</span></div></div>';
  }

  function renderModal(key) {
    var job = JOBS[key];
    if (!job) return;
    var d = job[lang];
    modalNum.textContent = job.num;
    modalTitle.textContent = d.title;
    modalMeta.textContent = d.meta;

    var html = '';
    if (d.groups) {
      d.groups.forEach(function (g) {
        html += '<div class="m-block"><h3 class="m-block__title">' + esc(g.role) + '</h3>' +
          '<p>' + esc(g.summary) + '</p></div>';
        html += blockDuties(g.duties);
        if (g.achievement) html += blockAchievement(g.achievement);
      });
    } else {
      if (d.summary) html += blockSummary(d.summary);
      if (d.duties) html += blockDuties(d.duties);
      if (d.achievement) html += blockAchievement(d.achievement);
      if (d.scale) html += blockScale(d.scale);
    }
    modalBody.innerHTML = html;
    modalBody.scrollTop = 0;
    var dialog = modal.querySelector('.modal__dialog');
    if (dialog) dialog.scrollTop = 0;
  }

  function openModal(key, trigger) {
    currentJob = key;
    lastFocus = trigger || document.activeElement;
    renderModal(key);
    modal.hidden = false;
    requestAnimationFrame(function () {
      modal.classList.add('is-open');
    });
    document.body.style.overflow = 'hidden';
    var closeBtn = modal.querySelector('.modal__close');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(function () {
      modal.hidden = true;
      currentJob = null;
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }, 420);
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-close]'), function (el) {
    el.addEventListener('click', closeModal);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });

  /* ---------------- cards ---------------- */
  var cards = document.querySelectorAll('.card');
  Array.prototype.forEach.call(cards, function (card) {
    var key = card.getAttribute('data-job');
    card.addEventListener('click', function () { openModal(key, card); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(key, card);
      }
    });
    card.addEventListener('pointermove', function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* ---------------- connector lines ----------------
     Drawn from the real card edges to the real ring nodes, so they stay
     correct at any viewport width instead of relying on fixed coordinates. */
  var hero = document.querySelector('.hero');
  var linksSvg = document.querySelector('.links');
  var LINKS = [
    { card: '.card--1', node: '.node--tl', side: 'right' },
    { card: '.card--2', node: '.node--tr', side: 'left' },
    { card: '.card--3', node: '.node--bl', side: 'right' },
    { card: '.card--4', node: '.node--br', side: 'left' }
  ];
  var linksDrawn = false;

  function drawLinks() {
    if (!hero || !linksSvg) return;
    if (window.innerWidth <= 1080) return;
    var hb = hero.getBoundingClientRect();
    if (!hb.width || !hb.height) return;
    linksSvg.setAttribute('viewBox', '0 0 ' + hb.width + ' ' + hb.height);
    linksSvg.setAttribute('preserveAspectRatio', 'none');
    var paths = linksSvg.querySelectorAll('.link-path');

    LINKS.forEach(function (m, i) {
      var cardEl = document.querySelector(m.card);
      var nodeEl = document.querySelector(m.node);
      var path = paths[i];
      if (!cardEl || !nodeEl || !path) return;
      var c = cardEl.getBoundingClientRect();
      var n = nodeEl.getBoundingClientRect();
      var x1 = (m.side === 'right' ? c.right : c.left) - hb.left;
      var y1 = c.top + c.height / 2 - hb.top;
      var x2 = n.left + n.width / 2 - hb.left;
      var y2 = n.top + n.height / 2 - hb.top;
      path.setAttribute('d', 'M' + x1 + ' ' + y1 + ' L' + x2 + ' ' + y2);
      var len = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
      path.style.strokeDasharray = len;
      if (!linksDrawn) path.style.strokeDashoffset = len;
      else path.style.strokeDashoffset = 0;
    });

    if (!linksDrawn) {
      linksDrawn = true;
      requestAnimationFrame(function () {
        Array.prototype.forEach.call(paths, function (p) { p.style.strokeDashoffset = 0; });
      });
    }
  }

  setTimeout(drawLinks, 1250);
  var lrt;
  window.addEventListener('resize', function () {
    clearTimeout(lrt);
    lrt = setTimeout(drawLinks, 150);
  });

  /* ---------------- reveal on scroll ---------------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = parseInt(el.getAttribute('data-delay') || '0', 10);
        setTimeout(function () { el.classList.add('is-in'); }, delay);
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    Array.prototype.forEach.call(reveals, function (el, i) {
      el.setAttribute('data-delay', String((i % 4) * 110));
      io.observe(el);
    });
  } else {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add('is-in'); });
  }

  /* ---------------- parallax on core ---------------- */
  var core = document.querySelector('.core__visual');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (core && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('pointermove', function (e) {
      var x = (e.clientX / window.innerWidth - 0.5) * 16;
      var y = (e.clientY / window.innerHeight - 0.5) * 16;
      core.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
    });
  }

  /* ---------------- easter egg: 3s hold on the avatar ---------------- */
  var avatarEl = document.querySelector('.avatar');
  if (avatarEl) {
    var eyeTimer = null;
    var HOLD_MS = 3000;

    function armEyes() {
      clearTimeout(eyeTimer);
      eyeTimer = setTimeout(function () {
        avatarEl.classList.add('is-eyes');
      }, HOLD_MS);
    }
    function releaseEyes() {
      clearTimeout(eyeTimer);
      avatarEl.classList.remove('is-eyes');
    }

    avatarEl.addEventListener('mouseenter', armEyes);
    avatarEl.addEventListener('mouseleave', releaseEyes);
    // Touch: the same gesture is a long press.
    avatarEl.addEventListener('touchstart', armEyes, { passive: true });
    avatarEl.addEventListener('touchend', releaseEyes);
    avatarEl.addEventListener('touchcancel', releaseEyes);
    avatarEl.addEventListener('touchmove', releaseEyes, { passive: true });
  }

  /* ---------------- particles ---------------- */
  var canvas = document.getElementById('particles');
  if (canvas && canvas.getContext && !reduceMotion) {
    var ctx = canvas.getContext('2d');
    var dots = [];
    var w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var target = Math.min(90, Math.round((w * h) / 16000));
      dots = [];
      for (var i = 0; i < target; i++) {
        dots.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.3 + 0.3,
          a: Math.random() * 0.5 + 0.12
        });
      }
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      var light = document.documentElement.getAttribute('data-theme') === 'light';
      var rgb = light ? '20,20,26' : '255,255,255';
      for (var i = 0; i < dots.length; i++) {
        var d = dots[i];
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < -10) d.x = w + 10;
        if (d.x > w + 10) d.x = -10;
        if (d.y < -10) d.y = h + 10;
        if (d.y > h + 10) d.y = -10;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + rgb + ',' + d.a + ')';
        ctx.fill();
      }
      requestAnimationFrame(tick);
    }

    resize();
    tick();
    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(resize, 180);
    });
  }

  /* ---------------- boot ---------------- */
  window.addEventListener('resize', movePill);
  applyLang(lang);
  requestAnimationFrame(movePill);
  setTimeout(movePill, 400);

  // The loader must never depend on a slow external font / image:
  // hide it as soon as the avatar settles, with a hard cap either way.
  var loader = document.getElementById('loader');
  var loaderDone = false;
  function hideLoader(delay) {
    if (loaderDone) return;
    loaderDone = true;
    setTimeout(function () { loader.classList.add('is-done'); }, delay == null ? 320 : delay);
  }
  var avatarImg = document.querySelector('.avatar__img');
  if (avatarImg && !avatarImg.complete) {
    avatarImg.addEventListener('load', function () { hideLoader(); });
    avatarImg.addEventListener('error', function () { hideLoader(0); });
  } else {
    hideLoader();
  }
  setTimeout(function () { hideLoader(0); }, 1800);
})();
