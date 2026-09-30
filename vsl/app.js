const play=document.querySelector('[data-play]');
const note=document.querySelector('[data-video-note]');
play?.addEventListener('click',()=>{play.classList.toggle('active');play.textContent=play.classList.contains('active')?'Ⅱ':'▶';note.textContent='INTERACTION PREVIEW · NO APPROVED VIDEO CONNECTED'});
document.querySelectorAll('[data-book-call]').forEach(button=>button.addEventListener('click',()=>{const bookingNote=document.querySelector('[data-booking-note]');if(bookingNote)bookingNote.hidden=false}));
