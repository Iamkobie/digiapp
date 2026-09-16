/* ============================================================
   DigiApp — presentation.js  v3
   Interactive phone with numbered hotspot system.
   Each app has features array → clicking a hotspot slides up
   the teal explanation panel → after last feature, task screen
   appears. Outer panels show section context.
   ============================================================ */
(function () {
  'use strict';

  /* ══════════════════════════════════════════════════════════
     CONTENT DATA
     All feature explanations and tasks live here.
     Edit this section to update copy without touching HTML/CSS.
     ══════════════════════════════════════════════════════════ */

  const APP_DATA = {

    google: {
      accentColor: '#4285F4',
      accentGlow:  'rgba(66,133,244,0.18)',
      features: [
        {
          name: 'Search Bar',
          text: 'This is the long box that says "Search Google or type…"\n\n• You can type words, questions, or website names here to search on the internet.\n• It is the main way to find information using Google.'
        },
        {
          name: 'Google Search Button',
          text: 'This button starts your search.\n\n• After typing in the search bar, click this button to see results.\n• Google will show you a list of websites related to what you typed.'
        },
        {
          name: "I'm Feeling Lucky",
          text: 'This button takes you directly to the first search result.\n\n• Instead of showing a list, Google opens the top website immediately.\n• It is useful when you already know what you are looking for.'
        },
        {
          name: 'Google Logo',
          text: 'This is the Google logo at the top of the page.\n\n• Clicking it brings you back to the Google homepage from any page.\n• The four colors (blue, red, yellow, green) represent Google\'s brand.'
        },
        {
          name: 'Microphone Icon 🎤',
          text: 'This is the Voice Search button.\n\n• Tap or click this to speak your search instead of typing.\n• Google will listen to your voice and search for what you said.\n• Useful when your hands are busy or you cannot type.'
        },
        {
          name: 'Camera / Incognito Icon',
          text: 'This icon lets you search using an image.\n\n• Tap it to take a photo or upload a picture — Google will find similar images or information about it.\n• Some browsers show an Incognito shortcut here to browse privately.'
        },
        {
          name: 'Home Button ⌂',
          text: 'This is the Home button in your browser.\n\n• Clicking it returns you to your browser\'s start page.\n• It is different from the Google logo — it controls the browser, not Google.'
        },
        {
          name: 'AI Button 🤖',
          text: 'This opens Google\'s AI-powered search features.\n\n• Google AI can give you a direct answer at the top of your search results.\n• It summarizes information from many websites so you do not have to read them all.\n• Always verify AI answers with a real website.'
        },
        {
          name: 'More Menu ⋮',
          text: 'These three dots open extra browser options.\n\n• Here you can find: Bookmarks, History, Settings, Downloads, and Help.\n• You can also zoom the page, print, or open a new window from this menu.'
        }
      ],
      task: null // task is in the HTML
    },

    docs: {
      accentColor: '#4285F4',
      accentGlow:  'rgba(66,133,244,0.18)',
      features: [
        {
          name: 'Menu (Hamburger Icon) ≡',
          text: 'These three horizontal lines are called the Hamburger Menu.\n\n• Tap it to open the main navigation panel.\n• From here you can access Google Drive, Settings, Help, and switch between Google apps like Sheets and Slides.'
        },
        {
          name: 'Search Docs 🔍',
          text: 'This is the Search bar inside Google Docs.\n\n• Type the name of a document here to find it quickly.\n• It searches through all documents you have created or that have been shared with you.'
        },
        {
          name: 'Folder Icon 📁',
          text: 'This icon opens your Google Drive folders.\n\n• Tap it to browse or open documents stored inside specific folders.\n• Keeping your documents in folders helps you stay organized.'
        },
        {
          name: 'Tabs Bar (Docs / Sheets / Slides)',
          text: 'These tabs let you switch between Google apps.\n\n• Docs tab = text documents (like Word).\n• Sheets tab = spreadsheets (like Excel).\n• Slides tab = presentations (like PowerPoint).\n• All three are part of Google Workspace and save automatically to Drive.'
        },
        {
          name: 'Document List Item',
          text: 'Each row here shows one of your saved documents.\n\n• You can see the document name and when it was last opened.\n• Tap a document to open and edit it.\n• Long-press or tap the three-dot icon beside it to rename, share, or delete it.'
        },
        {
          name: 'Three-dot Menu ⋮ / Plus Button ➕',
          text: 'The three-dot menu beside a document opens more options.\n\n• Options include: Share, Move to Folder, Make a Copy, Remove, and Open in New Tab.\n\nThe Plus button (Floating Action Button) at the bottom creates a NEW document.\n\n• Tap it to start writing a brand new document from scratch.'
        }
      ],
      task: null
    },

    drive: {
      accentColor: '#FBBC05',
      accentGlow:  'rgba(251,188,5,0.16)',
      features: [
        {
          name: 'Menu (Hamburger Icon) ≡',
          text: 'These three lines open the Google Drive side menu.\n\n• Opens a side panel with different sections: My Drive, Shared with me, Recent, Starred, Trash, and Storage.\n• Use it to easily navigate and access all areas of Google Drive.'
        },
        {
          name: 'Search Drive 🔍',
          text: 'This is the search bar for Google Drive.\n\n• Type a file name, keyword, or file type to find any file stored in your Drive.\n• You can search by file type (e.g., "PDF", "image") or by date.\n• Very useful when you have many files saved.'
        },
        {
          name: 'Profile Icon 👤',
          text: 'This circle shows your Google account profile picture or initial.\n\n• Tap it to see which account you are signed in to.\n• You can switch between multiple Google accounts from here.\n• Make sure you are using the correct school or personal account.'
        },
        {
          name: 'File Item',
          text: 'Each row in the list is one file or folder stored in your Drive.\n\n• You can see the file name, file type icon, and the last time it was opened.\n• Tap a file to open it.\n• Tap the three-dot icon ⋮ beside the file to: Share, Download, Rename, Move, or Delete it.'
        },
        {
          name: 'Bottom Navigation Bar',
          text: 'These icons at the bottom help you move around Google Drive.\n\n• 🏠 Home — shows your recently opened and suggested files.\n• ⭐ Starred — files you marked as important.\n• 👥 Shared — files other people shared with you.\n• 📁 Files — shows all your files and folders organized.\n\nAlways tap Home first when you open Drive.'
        }
      ],
      task: null
    },

    gmail: {
      accentColor: '#EA4335',
      accentGlow:  'rgba(234,67,53,0.16)',
      features: [
        {
          name: 'Menu (Hamburger Icon) ≡',
          text: 'The three lines open the Gmail navigation menu.\n\n• Opens the full menu showing: Inbox, Sent, Drafts, Spam, Trash, and other custom folders (labels).\n• Use it to switch between different parts of your mailbox.\n• You can also find All Mail here to see every email ever received.'
        },
        {
          name: 'Search Mail 🔍',
          text: 'This is the Gmail search bar.\n\n• Type a sender\'s name, subject line, or any keyword to find a specific email.\n• You can use filters like "from:teacher@school.com" or "subject:homework" for precise searches.\n• Very useful when your inbox has many messages.'
        },
        {
          name: 'Profile Icon 👤',
          text: 'This circle shows the Google account you are currently using.\n\n• Tap it to see your account details or switch to another Google account.\n• Always check that you are signed in to the correct account before sending emails.\n• You can also manage Google Account settings from here.'
        },
        {
          name: 'Email Item (Message Row)',
          text: 'Each row in the inbox is one email message.\n\n• Bold text means the email has NOT been read yet.\n• Normal weight text means the email has been opened and read.\n• You can see: Sender name, Subject line, and Date received.\n• Tap a row to open and read the full email message.'
        },
        {
          name: 'Compose Button ✏️',
          text: 'This is the button to write a NEW email.\n\n• Tap the pencil icon (✏️) or the Compose button to open a new message window.\n• Fill in: To (recipient email), Subject (title of the email), and Body (your message).\n• You can also attach files, images, or links before sending.\n• Always double-check the recipient email address before pressing Send.'
        },
        {
          name: 'Sender Avatar',
          text: 'This colored circle on the left of each email shows the sender\'s initial or photo.\n\n• Tap it to select that email (a checkmark will appear) — you can select multiple emails this way.\n• Use bulk selection to delete, archive, or move many emails at once.\n• This helps keep your inbox organized without opening each email one by one.'
        },
        {
          name: 'Star Icon ☆',
          text: 'The star marks an email as important or a favorite.\n\n• Tap the star ☆ next to any email to highlight it.\n• Starred emails appear under the ⭐ Starred section in the menu — easy to find later.\n• Use stars to mark important messages like school assignments, teacher instructions, or deadlines.\n• Tap the star again to remove it.'
        }
      ],
      task: null
    }
  };

  /* ══════════════════════════════════════════════════════════
     PRESENTATION SECTIONS
     ══════════════════════════════════════════════════════════ */
  const SECTIONS = [
    { id: 'cover',        title: 'Cover',               accent: '#4285F4', glow: 'rgba(66,133,244,0.18)', phone: 'cover' },
    { id: 'rationale',    title: 'Rationale',           accent: '#EA4335', glow: 'rgba(234,67,53,0.16)',  phone: 'home'  },
    { id: 'competency',   title: 'Learning Competency', accent: '#4285F4', glow: 'rgba(66,133,244,0.18)', phone: 'home'  },
    { id: 'google',       title: 'Google Search',       accent: '#4285F4', glow: 'rgba(66,133,244,0.18)', phone: 'google'},
    { id: 'docs',         title: 'Google Docs',         accent: '#4285F4', glow: 'rgba(66,133,244,0.18)', phone: 'docs'  },
    { id: 'drive',        title: 'Google Drive',        accent: '#FBBC05', glow: 'rgba(251,188,5,0.16)',  phone: 'drive' },
    { id: 'gmail',        title: 'Gmail',               accent: '#EA4335', glow: 'rgba(234,67,53,0.16)',  phone: 'gmail' },
    { id: 'process',      title: 'Process',             accent: '#34A853', glow: 'rgba(52,168,83,0.16)',  phone: 'home'  },
    { id: 'costing',      title: 'Costing',             accent: '#34A853', glow: 'rgba(52,168,83,0.16)',  phone: 'home'  },
    { id: 'storage',      title: 'Storage & Maintenance',accent:'#4285F4', glow: 'rgba(66,133,244,0.18)', phone: 'home'  },
    { id: 'testimonials', title: 'Testimonials',        accent: '#EA4335', glow: 'rgba(234,67,53,0.16)',  phone: 'home'  },
    { id: 'closing',      title: 'Thank You',           accent: '#4285F4', glow: 'rgba(66,133,244,0.18)', phone: 'home'  },
  ];

  const COST_ROWS = [
    { label: 'Printed Guidelines',  qty: 1, price: 300 },
    { label: 'Softcopy / Storage',  qty: 1, price: 300 },
    { label: 'Design Materials',    qty: 1, price: 300 },
    { label: 'Additional Supplies', qty: 1, price:  79 },
  ];

  const TESTIMONIALS = [
    'Digi Explorer is easy to use and the activities are appropriate for the learners. I like that students can practice the basic functions of different applications while following simple instructions.',
    'At first, I thought using educational apps would be difficult, but Digi Explorer made the activities easier to understand. I liked that the instructions were clear, and I learned how to use apps that I usually don\'t use for school.',
    'Digi Explorer is a useful material for helping learners develop their digital skills. It encourages students to use technology not only for entertainment but also as a tool for learning and completing school tasks.',
  ];

  /* ══════════════════════════════════════════════════════════
     STATE
     ══════════════════════════════════════════════════════════ */
  let currentSection = 0;
  let hintHidden     = false;
  let costDone       = false;
  let testiDone      = false;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Per-app hotspot state
  const appState = {
    google: { current: -1, seen: new Set() },
    docs:   { current: -1, seen: new Set() },
    drive:  { current: -1, seen: new Set() },
    gmail:  { current: -1, seen: new Set() },
  };

  /* ══════════════════════════════════════════════════════════
     DOM REFS
     ══════════════════════════════════════════════════════════ */
  const panelLeft    = document.getElementById('panel-left');
  const panelRight   = document.getElementById('panel-right');
  const coverHeadline= document.getElementById('cover-headline');
  const sectionTitleBar = document.getElementById('section-title-bar');
  const sectionTitleText = document.getElementById('section-title-text');
  const phoneSectionLabel = document.getElementById('phone-section-label');
  const sectionDotsEl = document.getElementById('section-dots');
  const progressBar  = document.getElementById('progress-bar');
  const slideCounter = document.getElementById('slide-counter');
  const navPrev      = document.getElementById('nav-prev');
  const navNext      = document.getElementById('nav-next');
  const overview     = document.getElementById('overview');
  const overviewGrid = document.getElementById('overview-grid');
  const overviewClose= document.getElementById('overview-close');
  const kbHint       = document.getElementById('keyboard-hint');
  const canvas       = document.getElementById('particle-canvas');
  const ctx          = canvas.getContext('2d');

  /* ══════════════════════════════════════════════════════════
     PARTICLES
     ══════════════════════════════════════════════════════════ */
  const G_COLORS = ['#4285F4','#EA4335','#FBBC05','#34A853'];
  let particles = [];

  function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function spawnParticle(burst) {
    const color = G_COLORS[Math.floor(Math.random() * 4)];
    return {
      x: burst ? canvas.width * 0.5 + (Math.random() - 0.5) * 120
               : Math.random() * canvas.width,
      y: burst ? canvas.height * 0.5 + (Math.random() - 0.5) * 120
               : Math.random() * canvas.height,
      vx: burst ? (Math.random() - 0.5) * 5   : (Math.random() - 0.5) * 0.3,
      vy: burst ? (Math.random() - 0.5) * 5   : (Math.random() - 0.5) * 0.25,
      r:  burst ? 2 + Math.random() * 5       : 1.5 + Math.random() * 3,
      alpha: burst ? 0.85 : 0.06 + Math.random() * 0.14,
      decay: burst ? 0.016 : 0,
      color,
    };
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < 55; i++) particles.push(spawnParticle(false));
  }

  function burst() {
    if (reducedMotion) return;
    for (let i = 0; i < 20; i++) particles.push(spawnParticle(true));
  }

  function particleLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy;
      if (p.decay) {
        p.alpha -= p.decay;
        p.r     *= 0.986;
        if (p.alpha <= 0) { particles.splice(i, 1); continue; }
      } else {
        if (p.x < -8) p.x = canvas.width  + 8;
        if (p.x > canvas.width  + 8) p.x = -8;
        if (p.y < -8) p.y = canvas.height + 8;
        if (p.y > canvas.height + 8) p.y = -8;
      }
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      ctx.restore();
    }
    requestAnimationFrame(particleLoop);
  }

  /* ══════════════════════════════════════════════════════════
     SECTION NAVIGATION
     ══════════════════════════════════════════════════════════ */
  function goTo(index, animate) {
    if (index < 0 || index >= SECTIONS.length) return;
    currentSection = index;
    const sec = SECTIONS[index];

    // Accent vars
    document.documentElement.style.setProperty('--accent',      sec.accent);
    document.documentElement.style.setProperty('--accent-glow', sec.glow);

    // Swap phone page
    showPhonePage(sec.phone);

    // Swap panels
    swapPanel(panelLeft,  sec.id, 'left',  animate);
    swapPanel(panelRight, sec.id, 'right', animate);

    // Show/hide panels
    const hasPanels = sec.id !== 'cover';
    panelLeft.classList.toggle('visible', hasPanels);
    panelRight.classList.toggle('visible', hasPanels);

    // Cover headline — NEVER show on the cover section itself.
    // It shows on rationale/competency/closing as a subtitle.
    coverHeadline.classList.toggle('hidden', sec.id === 'cover');

    // Section title bar
    if (sec.id === 'cover') {
      sectionTitleBar.classList.remove('visible');
    } else {
      sectionTitleText.textContent = sec.title.toUpperCase();
      sectionTitleBar.classList.add('visible');
    }

    phoneSectionLabel.textContent = sec.id === 'cover' ? 'Digi Explorer' : sec.title;

    updateProgress();
    updateCounter();
    updateNavButtons();
    updateSectionDots();
    updateOverviewHighlight();
    updateHash();
    hideHint();
    if (animate) burst();

    // Per-section hooks
    runEntrance(sec.id);
  }

  function next() { goTo(currentSection + 1, true); }
  function prev() { goTo(currentSection - 1, true); }

  /* ══════════════════════════════════════════════════════════
     PANEL SWAP
     ══════════════════════════════════════════════════════════ */
  function swapPanel(panel, sectionId, side, animate) {
    panel.querySelectorAll('.panel-content').forEach(el => {
      const match = el.dataset.panel === sectionId && el.dataset.side === side;
      el.classList.toggle('active', match);
    });
  }

  /* ══════════════════════════════════════════════════════════
     PHONE PAGE SWITCHER
     ══════════════════════════════════════════════════════════ */
  function showPhonePage(pageId) {
    document.querySelectorAll('.phone-page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById('page-' + pageId);
    if (page) page.classList.add('active');
  }

  /* ══════════════════════════════════════════════════════════
     HOTSPOT ENGINE
     ══════════════════════════════════════════════════════════ */

  /**
   * Activate a specific feature for a given app.
   * @param {string} app   - 'google' | 'docs' | 'drive' | 'gmail'
   * @param {number} index - feature index (0-based)
   */
  function activateFeature(app, index) {
    const data   = APP_DATA[app];
    const state  = appState[app];
    const feats  = data.features;
    if (!feats || index < 0 || index >= feats.length) return;

    state.current = index;
    state.seen.add(index);

    const feat = feats[index];

    // Update explain panel content
    const nameEl = document.getElementById(app + '-feat-name');
    const textEl = document.getElementById(app + '-feat-text');
    if (nameEl) nameEl.textContent = feat.name;
    if (textEl) {
      // Convert \n\n to paragraphs, \n• to list items
      textEl.innerHTML = formatFeatureText(feat.text);
    }

    // Show explain panel
    const explainPanel = document.getElementById(app + '-explain');
    if (explainPanel) explainPanel.classList.add('visible');

    // Hide task screen if visible
    const taskScreen = document.getElementById(app + '-task');
    if (taskScreen) taskScreen.style.display = 'none';
    // Show app-split (the mock + explain area)
    const appSplit = document.querySelector('#page-' + app + ' .app-split');
    if (appSplit) appSplit.style.display = 'flex';

    // Update hotspot highlights
    const hotspots = document.querySelectorAll(`[data-app="${app}"].hotspot`);
    hotspots.forEach(h => {
      const fi = parseInt(h.dataset.feat, 10);
      h.classList.toggle('active', fi === index);
      // Dim seen ones slightly
      h.style.opacity = state.seen.has(fi) ? '0.7' : '1';
    });
    // Active one always full opacity
    const activeH = document.querySelector(`[data-app="${app}"][data-feat="${index}"]`);
    if (activeH) activeH.style.opacity = '1';

    // Update nav dots
    buildNavDots(app);

    // Update arrows
    updateArrows(app);
  }

  function formatFeatureText(raw) {
    // Split on double newline for paragraphs
    const parts = raw.split('\n\n');
    return parts.map(part => {
      // Lines starting with • become list items
      if (part.includes('\n•') || part.startsWith('•')) {
        const lines = part.split('\n');
        let html = '';
        lines.forEach(line => {
          if (line.startsWith('•')) {
            html += `<div style="text-align:left;padding-left:6px;margin-bottom:4px;">${line}</div>`;
          } else if (line.trim()) {
            html += `<div style="margin-bottom:4px;font-weight:700;">${line}</div>`;
          }
        });
        return html;
      }
      return `<p style="margin-bottom:6px;">${part}</p>`;
    }).join('');
  }

  function buildNavDots(app) {
    const dotsEl = document.getElementById(app + '-nav-dots');
    if (!dotsEl) return;
    const feats  = APP_DATA[app].features;
    const state  = appState[app];
    dotsEl.innerHTML = '';
    feats.forEach((_, i) => {
      const d = document.createElement('div');
      d.className = 'explain-dot' + (i === state.current ? ' current' : '');
      d.setAttribute('role', 'button');
      d.setAttribute('aria-label', `Feature ${i + 1}`);
      d.addEventListener('click', () => activateFeature(app, i));
      dotsEl.appendChild(d);
    });
  }

  function updateArrows(app) {
    const prevBtn = document.getElementById(app + '-prev');
    const nextBtn = document.getElementById(app + '-next');
    if (!prevBtn || !nextBtn) return;
    const state  = appState[app];
    const total  = APP_DATA[app].features.length;
    const idx    = state.current;

    prevBtn.disabled = idx <= 0;
    nextBtn.disabled = false; // always enabled — last one shows task

    // If we are at the last feature, change next label
    if (idx === total - 1) {
      nextBtn.textContent = 'Task →';
      nextBtn.style.background = '#000';
      nextBtn.style.color = '#fff';
    } else {
      nextBtn.textContent = '→';
      nextBtn.style.background = '';
      nextBtn.style.color = '';
    }
  }

  function showTask(app) {
    // Hide the split (mock + explain)
    const appSplit = document.querySelector('#page-' + app + ' .app-split');
    if (appSplit) appSplit.style.display = 'none';

    // Show task screen
    const taskScreen = document.getElementById(app + '-task');
    if (taskScreen) {
      taskScreen.style.display = 'flex';
      // Entrance animation
      if (!reducedMotion) {
        taskScreen.style.opacity = '0';
        taskScreen.style.transform = 'translateY(20px)';
        requestAnimationFrame(() => {
          taskScreen.style.transition = 'opacity 400ms ease, transform 400ms ease';
          taskScreen.style.opacity = '1';
          taskScreen.style.transform = 'translateY(0)';
        });
      }
    }

    // Reset hotspot active states
    document.querySelectorAll(`[data-app="${app}"].hotspot`).forEach(h => h.classList.remove('active'));
  }

  function restoreAppFromTask(app) {
    const appSplit = document.querySelector('#page-' + app + ' .app-split');
    if (appSplit) appSplit.style.display = 'flex';
    const taskScreen = document.getElementById(app + '-task');
    if (taskScreen) taskScreen.style.display = 'none';
    // Reactivate last feature
    const state = appState[app];
    if (state.current >= 0) activateFeature(app, state.current);
  }

  /* ══════════════════════════════════════════════════════════
     TIMELINE ANIMATIONS
     ══════════════════════════════════════════════════════════ */
  function revealTimeline(id) {
    const tl = document.getElementById(id);
    if (!tl) return;
    const items = tl.querySelectorAll('.tl-item');
    items.forEach(it => it.classList.remove('lit'));
    if (reducedMotion) { items.forEach(it => it.classList.add('lit')); return; }
    items.forEach(it => {
      const d = parseInt(it.dataset.delay || 0, 10);
      setTimeout(() => it.classList.add('lit'), d + 150);
    });
  }

  /* ══════════════════════════════════════════════════════════
     COST RECEIPT ANIMATION
     ══════════════════════════════════════════════════════════ */
  function animateCost() {
    if (costDone) return;
    costDone = true;

    const rowsEl   = document.getElementById('receipt-rows');
    const totalEl  = document.getElementById('receipt-total');
    const bigTotal = document.getElementById('big-total');
    const target   = COST_ROWS.reduce((s, r) => s + r.qty * r.price, 0);

    rowsEl.innerHTML = '';
    COST_ROWS.forEach((row, i) => {
      const div = document.createElement('div');
      div.className = 'receipt-row';
      div.innerHTML = `<span class="receipt-row-label">${row.label}</span><span class="receipt-row-price">₱ ${(row.qty * row.price).toLocaleString()}</span>`;
      rowsEl.appendChild(div);
      if (reducedMotion) { div.classList.add('shown'); return; }
      setTimeout(() => div.classList.add('shown'), 200 + i * 200);
    });

    if (reducedMotion) {
      totalEl.textContent = bigTotal.textContent = '₱ ' + target.toLocaleString();
      return;
    }

    const delay = 200 + COST_ROWS.length * 200 + 300;
    setTimeout(() => {
      let start = null;
      (function step(ts) {
        if (!start) start = ts;
        const t = Math.min((ts - start) / 900, 1);
        const v = Math.round((1 - Math.pow(1 - t, 3)) * target);
        const s = '₱ ' + v.toLocaleString();
        totalEl.textContent = bigTotal.textContent = s;
        if (t < 1) requestAnimationFrame(step);
      })(performance.now());
    }, delay);
  }

  /* ══════════════════════════════════════════════════════════
     TESTIMONIAL TYPEWRITER
     ══════════════════════════════════════════════════════════ */
  function animateTestimonials() {
    if (testiDone) return;
    testiDone = true;
    document.querySelectorAll('#testi-grid .testi-card').forEach((card, i) => {
      const delay = parseInt(card.dataset.delay || 0, 10);
      const el    = document.getElementById('tq-' + i);
      const text  = TESTIMONIALS[i];
      if (!el) return;
      if (reducedMotion) { el.textContent = text; card.classList.add('shown'); return; }
      setTimeout(() => {
        card.classList.add('shown');
        let idx = 0;
        el.textContent = '';
        const iv = setInterval(() => {
          el.textContent += text[idx++];
          if (idx >= text.length) clearInterval(iv);
        }, 16);
      }, delay + 300);
    });
  }

  /* ══════════════════════════════════════════════════════════
     PER-SECTION ENTRANCE HOOKS
     ══════════════════════════════════════════════════════════ */
  function runEntrance(id) {
    switch (id) {
      case 'google':
        // Always reset to feature 1 (index 0) when entering this section
        resetApp('google');
        setTimeout(() => activateFeature('google', 0), 400);
        break;
      case 'docs':
        resetApp('docs');
        setTimeout(() => activateFeature('docs', 0), 400);
        break;
      case 'drive':
        resetApp('drive');
        setTimeout(() => activateFeature('drive', 0), 400);
        break;
      case 'gmail':
        resetApp('gmail');
        setTimeout(() => activateFeature('gmail', 0), 400);
        break;
      case 'process':
        revealTimeline('tl-left');
        revealTimeline('tl-right');
        break;
      case 'storage':
        revealTimeline('tl-storage');
        revealTimeline('tl-maintenance');
        break;
      case 'costing':
        animateCost();
        break;
      case 'testimonials':
        animateTestimonials();
        break;
    }
  }

  /**
   * Reset an app's hotspot state and UI so it starts cleanly from feature 1.
   */
  function resetApp(app) {
    // Reset state
    appState[app].current = -1;
    appState[app].seen    = new Set();

    // Hide task screen, show app-split
    const taskScreen = document.getElementById(app + '-task');
    const appSplit   = document.querySelector('#page-' + app + ' .app-split');
    if (taskScreen) taskScreen.style.display = 'none';
    if (appSplit)   appSplit.style.display   = 'flex';

    // Hide explain panel (will slide up on first activateFeature call)
    const explainPanel = document.getElementById(app + '-explain');
    if (explainPanel) explainPanel.classList.remove('visible');

    // Remove active class from all hotspots, reset opacity
    document.querySelectorAll(`[data-app="${app}"].hotspot`).forEach(h => {
      h.classList.remove('active');
      h.style.opacity = '1';
    });

    // Reset nav dots
    const dotsEl = document.getElementById(app + '-nav-dots');
    if (dotsEl) dotsEl.innerHTML = '';

    // Reset arrows
    const prevBtn = document.getElementById(app + '-prev');
    const nextBtn = document.getElementById(app + '-next');
    if (prevBtn) { prevBtn.disabled = true; }
    if (nextBtn) { nextBtn.textContent = '→'; nextBtn.style.background = ''; nextBtn.style.color = ''; nextBtn.disabled = false; }
  }

  /* ══════════════════════════════════════════════════════════
     SECTION INDICATOR DOTS
     ══════════════════════════════════════════════════════════ */
  function buildSectionDots() {
    SECTIONS.forEach((s, i) => {
      const d = document.createElement('div');
      d.className = 's-dot';
      d.setAttribute('role', 'button');
      d.setAttribute('tabindex', '0');
      d.setAttribute('aria-label', 'Go to ' + s.title);
      d.addEventListener('click', () => goTo(i, true));
      d.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goTo(i, true); } });
      sectionDotsEl.appendChild(d);
    });
  }

  function updateSectionDots() {
    sectionDotsEl.querySelectorAll('.s-dot').forEach((d, i) => d.classList.toggle('active', i === currentSection));
  }

  /* ══════════════════════════════════════════════════════════
     OVERVIEW
     ══════════════════════════════════════════════════════════ */
  function buildOverview() {
    SECTIONS.forEach((s, i) => {
      const t = document.createElement('div');
      t.className = 'ov-thumb';
      t.setAttribute('role', 'button');
      t.setAttribute('tabindex', '0');
      t.setAttribute('aria-label', `Slide ${i + 1}: ${s.title}`);
      t.innerHTML = `<div class="ov-num">SLIDE ${String(i + 1).padStart(2, '0')}</div><div class="ov-label">${s.title}</div><div class="ov-bar" style="background:${s.accent};"></div>`;
      t.addEventListener('click', () => { closeOverview(); goTo(i, true); });
      t.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); t.click(); } });
      overviewGrid.appendChild(t);
    });
  }

  function updateOverviewHighlight() {
    overviewGrid.querySelectorAll('.ov-thumb').forEach((t, i) => t.classList.toggle('current', i === currentSection));
  }

  function openOverview()  { overview.classList.add('open'); overview.style.display = 'flex'; updateOverviewHighlight(); }
  function closeOverview() { overview.classList.remove('open'); overview.style.display = 'none'; }

  /* ══════════════════════════════════════════════════════════
     PROGRESS / COUNTER / NAV
     ══════════════════════════════════════════════════════════ */
  function updateProgress() {
    const pct = SECTIONS.length <= 1 ? 100 : (currentSection / (SECTIONS.length - 1)) * 100;
    progressBar.style.width = pct + '%';
    progressBar.setAttribute('aria-valuenow', Math.round(pct));
  }

  function updateCounter() {
    slideCounter.textContent = (currentSection + 1) + ' / ' + SECTIONS.length;
  }

  function updateNavButtons() {
    navPrev.disabled = currentSection === 0;
    navNext.disabled = currentSection === SECTIONS.length - 1;
  }

  /* ══════════════════════════════════════════════════════════
     DEEP LINKS
     ══════════════════════════════════════════════════════════ */
  function updateHash() {
    history.replaceState(null, '', '#' + SECTIONS[currentSection].id);
  }

  function readHash() {
    const hash = location.hash.replace('#', '');
    if (!hash) return;
    const idx = SECTIONS.findIndex(s => s.id === hash);
    if (idx >= 0) currentSection = idx;
  }

  function hideHint() {
    if (!hintHidden) {
      hintHidden = true;
      setTimeout(() => { kbHint.style.opacity = '0'; }, 600);
    }
  }

  /* ══════════════════════════════════════════════════════════
     EVENT BINDING
     ══════════════════════════════════════════════════════════ */
  function bindEvents() {

    /* Keyboard */
    document.addEventListener('keydown', e => {
      if (overview.classList.contains('open')) {
        if (e.key === 'Escape') closeOverview();
        return;
      }
      switch (e.key) {
        case 'ArrowRight': case 'ArrowDown': case ' ':
          e.preventDefault(); next(); break;
        case 'ArrowLeft': case 'ArrowUp':
          e.preventDefault(); prev(); break;
        case 'Escape':
          openOverview(); break;
      }
    });

    /* Nav arrows */
    navPrev.addEventListener('click', prev);
    navNext.addEventListener('click', next);
    overviewClose.addEventListener('click', closeOverview);

    /* Cover START button */
    const startBtn = document.getElementById('cover-start-btn');
    if (startBtn) startBtn.addEventListener('click', () => goTo(1, true));

    /* Home screen app buttons */
    document.querySelectorAll('.home-app-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const app = btn.dataset.app;
        // Jump to that section
        const idx = SECTIONS.findIndex(s => s.id === app);
        if (idx >= 0) goTo(idx, true);
      });
    });

    /* Back-to-home buttons inside app top bars */
    document.querySelectorAll('.app-topbar-back').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        // Go to the section before this app (competency)
        goTo(2, true);
      });
    });

    /* Hotspot badges */
    document.querySelectorAll('.hotspot').forEach(h => {
      h.addEventListener('click', e => {
        e.stopPropagation();
        const app  = h.dataset.app;
        const feat = parseInt(h.dataset.feat, 10);
        activateFeature(app, feat);
      });
    });

    /* Explain panel arrows — prev */
    ['google','docs','drive','gmail'].forEach(app => {
      const prevBtn = document.getElementById(app + '-prev');
      const nextBtn = document.getElementById(app + '-next');
      if (prevBtn) {
        prevBtn.addEventListener('click', e => {
          e.stopPropagation();
          const idx = appState[app].current;
          if (idx > 0) activateFeature(app, idx - 1);
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', e => {
          e.stopPropagation();
          const state = appState[app];
          const total = APP_DATA[app].features.length;
          if (state.current < total - 1) {
            activateFeature(app, state.current + 1);
          } else {
            // Last feature → show task
            showTask(app);
          }
        });
      }
    });

    /* Task back buttons */
    document.querySelectorAll('[data-back-task]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        restoreAppFromTask(btn.dataset.backTask);
      });
    });

    /* Click stage background to advance */
    document.getElementById('stage').addEventListener('click', e => {
      if (e.target.closest('button, a, .hotspot, .home-app-btn, .app-topbar-back, .explain-arrow, .task-back-btn, .task-open-link, .s-dot, .ov-thumb, #overview, #nav-prev, #nav-next, #phone')) return;
      next();
    });

    /* Touch swipe */
    let tx = 0;
    document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
    document.addEventListener('touchend',   e => {
      const dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
    }, { passive: true });

    /* Resize */
    window.addEventListener('resize', () => { resizeCanvas(); if (!reducedMotion) initParticles(); });

    /* Hash nav */
    window.addEventListener('hashchange', () => {
      const hash = location.hash.replace('#', '');
      const idx  = SECTIONS.findIndex(s => s.id === hash);
      if (idx >= 0 && idx !== currentSection) goTo(idx, true);
    });
  }

  /* ══════════════════════════════════════════════════════════
     INIT
     ══════════════════════════════════════════════════════════ */
  function init() {
    resizeCanvas();
    buildOverview();
    buildSectionDots();
    readHash();
    goTo(currentSection, false);
    bindEvents();
    if (!reducedMotion) {
      initParticles();
      requestAnimationFrame(particleLoop);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
/* ============================================================
   📱 STUDENT-FRIENDLY MOBILE INTERACTIONS
   Simple, clean interactions for educational use
   ============================================================ */

// Simple mobile detection
const isMobile = window.innerWidth <= 768;

// Add student-friendly mobile enhancements
document.addEventListener('DOMContentLoaded', function() {
  if (isMobile) {
    initStudentMobileMode();
  }
});

function initStudentMobileMode() {
  // Add simple touch feedback
  addSimpleTouchFeedback();
  
  // Show all panels by default on mobile (no hiding/sliding)
  showAllPanelsOnMobile();
  
  // Add simple swipe navigation (left/right only)
  addSimpleSwipeNavigation();
}

function showAllPanelsOnMobile() {
  // Make sure panels are visible and positioned properly for students
  const panels = document.querySelectorAll('.side-panel');
  panels.forEach(panel => {
    panel.classList.add('visible');
    panel.style.position = 'static';
    panel.style.transform = 'none';
    panel.style.opacity = '1';
  });
}

function addSimpleTouchFeedback() {
  // Simple visual feedback for touches (no vibration to avoid distraction)
  document.addEventListener('touchstart', function(e) {
    const target = e.target.closest('.hotspot, .start-btn, button');
    if (target) {
      target.style.transform = target.style.transform.replace('scale(1)', 'scale(0.95)');
    }
  }, {passive: true});
  
  document.addEventListener('touchend', function(e) {
    const target = e.target.closest('.hotspot, .start-btn, button');
    if (target) {
      setTimeout(() => {
        target.style.transform = target.style.transform.replace('scale(0.95)', 'scale(1)');
      }, 150);
    }
  }, {passive: true});
}

function addSimpleSwipeNavigation() {
  let startX, startTime;
  
  document.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    startTime = Date.now();
  }, {passive: true});
  
  document.addEventListener('touchend', function(e) {
    if (!startX) return;
    
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;
    const deltaTime = Date.now() - startTime;
    
    // Only consider quick swipes (not slow drags)
    if (deltaTime > 300 || Math.abs(deltaX) < 80) return;
    
    // Simple left/right navigation
    if (deltaX > 0) {
      // Swipe right - previous slide
      if (typeof previousSlide === 'function') previousSlide();
    } else {
      // Swipe left - next slide  
      if (typeof nextSlide === 'function') nextSlide();
    }
    
    startX = null;
  }, {passive: true});
}

// Remove complex animations that can confuse students
function simplifyForStudents() {
  // Remove floating animations
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      /* Remove distracting animations */
      * {
        animation: none !important;
        transition-duration: 0.3s !important;
      }
      
      /* Keep only essential transitions */
      .hotspot, .start-btn {
        transition: transform 0.2s ease, background-color 0.2s ease !important;
      }
      
      /* Ensure text is always readable */
      .cover-big, .cover-sub {
        text-shadow: none !important;
        color: #1e293b !important;
      }
      
      .cover-big .w1 { color: #4285F4 !important; }
      .cover-big .w2 { color: #dc2626 !important; }
    }
  `;
  document.head.appendChild(style);
}

// Initialize simplifications
if (isMobile) {
  simplifyForStudents();
}