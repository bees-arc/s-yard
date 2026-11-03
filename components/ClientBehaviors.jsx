"use client";
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';
export default function ClientBehaviors(){const pathname=usePathname();useEffect(()=>{
document.documentElement.classList.add('js');
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
const onMenuClick=()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');menu.textContent=open?'×':'☰'};menu.addEventListener('click',onMenuClick);
const onKeyDown=e=>{if(e.key==='Escape'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}};document.addEventListener('keydown',onKeyDown);
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
const form=document.querySelector('#brief');const onSubmit=e=>{e.preventDefault();const d=new FormData(form);const text=`SKILLYARD / PROJECT BRIEF\n\nName: ${d.get('name')}\nEmail: ${d.get('email')}\nCompany: ${d.get('company')||'Not specified'}\nServices: ${d.getAll('service').join(', ')||'To discuss'}\nBudget: ${d.get('budget')}\nTimeline: ${d.get('timeline')}\n\nProject details\n${d.get('project')}\n`;const a=document.createElement('a');const url=URL.createObjectURL(new Blob([text],{type:'text/plain'}));a.href=url;a.download='SkillYard-project-brief.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);document.querySelector('#form-result').textContent='Your brief is ready to download. Keep it to share with the SkillYard team. Nothing has been sent.'};if(form)form.addEventListener('submit',onSubmit);

return ()=>{observer.disconnect();menu.removeEventListener('click',onMenuClick);document.removeEventListener('keydown',onKeyDown);if(form)form.removeEventListener('submit',onSubmit);};
},[pathname]);return null;}
