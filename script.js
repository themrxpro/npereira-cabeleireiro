
    const menuButton=document.querySelector('.menu-toggle');
    const navigation=document.querySelector('#navigation');
    function closeMenu(){navigation.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false')}
    menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));navigation.classList.toggle('is-open',open)});
    navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus()}});
    document.querySelector('#year').textContent=new Date().getFullYear();
    const privacyDialog=document.querySelector('#privacy-dialog');
    document.querySelector('#privacy-link').addEventListener('click',event=>{if(typeof privacyDialog.showModal==='function'){event.preventDefault();privacyDialog.showModal()}});
    function updateOpeningStatus(){
      try{const parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Lisbon',weekday:'short',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date());const val=type=>parts.find(part=>part.type===type).value;const weekday=val('weekday');const minute=Number(val('hour'))*60+Number(val('minute'));const regular=['Tue','Wed','Thu','Fri'].includes(weekday);const saturday=weekday==='Sat';const open=(regular&&minute>=570&&minute<1170)||(saturday&&minute>=540&&minute<1140);const weekdays=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      const names=['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
      const day=weekdays.indexOf(weekday);
      const schedule={2:[570,1170],3:[570,1170],4:[570,1170],5:[570,1170],6:[540,1140]};
      const time=n=>String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0');
      let summary;
      if(open){summary='Aberto até às '+time(schedule[day][1]);}
      else if(schedule[day]&&minute<schedule[day][0]){summary='Abre hoje às '+time(schedule[day][0]);}
      else {for(let offset=1;offset<=7;offset++){const next=(day+offset)%7;if(schedule[next]){summary='Abre '+(offset===1?'amanhã':names[next])+' às '+time(schedule[next][0]);break;}}}
      document.querySelector('#opening-text').textContent=summary+' · horário habitual';
      document.querySelector('[data-opening-summary]').textContent=summary;document.querySelector('.status-dot').classList.toggle('open',open);document.querySelector('#opening-status').hidden=false}catch(error){/* O horário impresso permanece disponível. */}
    }
    updateOpeningStatus();setInterval(updateOpeningStatus,60000);
  
    document.addEventListener('click',event=>{if(!navigation.contains(event.target)&&!menuButton.contains(event.target))closeMenu()});
    const mobileQuery=window.matchMedia('(max-width:760px)');
    mobileQuery.addEventListener('change',closeMenu);
    document.querySelector('.copy-address').addEventListener('click',async()=>{
      const feedback=document.querySelector('.copy-feedback');
      try{await navigator.clipboard.writeText('Rua General Humberto Delgado, 472, 4450-700 Leça da Palmeira');feedback.textContent='Morada copiada.'}
      catch{feedback.textContent='Não foi possível copiar. Selecione a morada acima para a copiar.'}
    });
    if('IntersectionObserver' in window){
      const links=[...navigation.querySelectorAll('a')];
      const observer=new IntersectionObserver(entries=>{
        const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
        if(visible)links.forEach(link=>{if(link.hash==='#'+visible.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')});
      },{rootMargin:'-90px 0px -45% 0px',threshold:[0,.15,.4]});
      document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));
    }
