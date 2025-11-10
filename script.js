
async function loadEvents(){
  try {
    const res = await fetch('events.json');
    const data = await res.json();
    const container = document.getElementById('events-list');
    container.innerHTML = '';
    data.slice(0,3).forEach(ev => {
      const card = document.createElement('article');
      const reverseClass = ev.imagePosition === 'right' ? 'reverse' : '';
      card.className = `event-card ${reverseClass}`;
      card.innerHTML = `
        <img src="${ev.image}" alt="Event image for ${ev.title}" class="event-image" loading="lazy">
        <div class="event-content">
          <h3 class="event-title">${ev.title}</h3>
          <p class="event-date">${ev.date}</p>
          <p class="event-description">${ev.description}</p>
        </div>`;
      container.appendChild(card);
    });
  } catch(e){
    console.error(e);
  }
}
function clickedMember(){
  let members = document.querySelectorAll(".team-member");
  members.forEach(m => {
    m.addEventListener('click', function(e){
      e.target.console.log("hello");
    });
  });
}

document.addEventListener('DOMContentLoaded', loadEvents, clickedMember);
