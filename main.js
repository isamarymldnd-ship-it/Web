function initSignIn() {
  const openBtn = document.getElementById('openSignIn');
  const modal = document.getElementById('signInModal');
  const close = document.getElementById('closeModal');
  if (!openBtn || !modal) return;
  openBtn.addEventListener('click', ()=> modal.style.display='flex');
  close.addEventListener('click', ()=> modal.style.display='none');
  window.addEventListener('click', e => { if (e.target === modal) modal.style.display='none'; });
}
document.addEventListener('DOMContentLoaded', initSignIn);