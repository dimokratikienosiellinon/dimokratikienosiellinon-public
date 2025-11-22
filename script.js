(function(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if(!btn || !nav) return;

  // Toggle nav
  btn.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('show');
  });

  // Close nav when clicking outside
  document.addEventListener('click', function(e){
    if(!nav.classList.contains('show')) return;
    const isClickInside = nav.contains(e.target) || btn.contains(e.target);
    if(!isClickInside){
      nav.classList.remove('show');
      btn.setAttribute('aria-expanded','false');
    }
  });

  // Close nav on link click
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('show');
    btn.setAttribute('aria-expanded','false');
  }));

  // Form listener outside nav links
  const form = document.getElementById('registrationForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.querySelector('input[name="name"]').value.trim();
      const email = document.querySelector('input[name="email"]').value.trim().toLowerCase();
      const role = document.querySelector('select[name="role"]').value;

      document.getElementById('entry-name').value = name;
      document.getElementById('entry-email').value = email;
      document.getElementById('entry-role').value = role;

      alert('Ευχαριστούμε πολύ! Θα ανακατευθυνθείτε στη φόρμα επιβεβαίωσης email.');
      setTimeout(() => form.submit(), 150);
    });
  }
})();
