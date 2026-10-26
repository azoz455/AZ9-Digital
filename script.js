const toggle=document.getElementById('menuToggle');const nav=document.getElementById('nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'إغلاق القائمة':'فتح القائمة')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}))}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const note=document.getElementById('demoNote');document.querySelectorAll('[data-prompt]').forEach(button=>button.addEventListener('click',()=>{const text=button.dataset.prompt;const prompt=document.querySelector('.prompt-box span');if(prompt)prompt.textContent=text;if(note)note.textContent='تم اختيار المهمة. هذه واجهة تجريبية، ولا تُرسل البيانات إلى أي مزود ذكاء اصطناعي بعد.'}));
const send=document.getElementById('demoSend');if(send)send.addEventListener('click',()=>{if(note)note.textContent='المساعد في وضع العرض التجريبي فقط. يلزم إعداد اتصال آمن بمزود AI لتوليد ردود حقيقية.'});
const form=document.getElementById('projectForm');if(form)form.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(form);const summary='طلب مشروع | AZ9 Digital\n'+'الاسم: '+data.get('name')+'\n'+'البريد: '+data.get('email')+'\n'+'الخدمة: '+data.get('service')+'\n'+'تفاصيل المشروع:\n'+data.get('brief');const status=document.getElementById('formStatus');if(status){status.textContent='تم إنشاء ملخص الطلب. انسخ النص أدناه واحتفظ به أو أرسله عبر قناة التواصل الرسمية.';const old=document.getElementById('requestSummary');if(old)old.remove();const output=document.createElement('textarea');output.id='requestSummary';output.readOnly=true;output.rows=7;output.setAttribute('aria-label','ملخص الطلب للنسخ');output.value=summary;status.insertAdjacentElement('afterend',output);output.focus();output.select();}});
const studioGenerate=document.getElementById('studioGenerate');
if(studioGenerate)studioGenerate.addEventListener('click',()=>{
 const service=document.getElementById('studioService').value;
 const idea=document.getElementById('studioIdea').value.trim();
 const audience=document.getElementById('studioAudience').value;
 const priority=document.getElementById('studioPriority').value;
 const status=document.getElementById('studioStatus');
 if(!idea){const field=document.getElementById('studioIdea');field.focus();status.textContent='اكتب وصفًا مختصرًا للفكرة أولًا.';return;}
 const steps={
 'موقع أو منصة رقمية':['تحديد الصفحات الأساسية ومسار المستخدم','تصميم واجهة متجاوبة للجوال والكمبيوتر','بناء الصفحات وربط نموذج التواصل','اختبار الروابط وسرعة التحميل وإمكانية الوصول'],
 'تطبيق جوال':['رسم رحلات المستخدم والشاشات الأساسية','اختيار التقنية والمنصات المستهدفة','بناء نموذج أولي قابل للتجربة','اختبار الحسابات والإشعارات والبيانات'],
 'مساعد ذكاء اصطناعي':['تحديد مهام المساعد ومصادر المعرفة','اختيار مزود مناسب ومراجعة التكلفة والحدود','إنشاء خادم وسيط يحمي مفاتيح API','اختبار جودة الإجابات والخصوصية وحالات الفشل'],
 'متجر إلكتروني':['ترتيب التصنيفات والمنتجات والأسعار','تصميم صفحة المنتج والسلة ومسار الطلب','ربط الدفع والشحن بعد اختيار مزود مناسب','اختبار المخزون والطلبات ورسائل التأكيد'],
 'هوية بصرية':['تحديد الجمهور وشخصية العلامة','تطوير الشعار ولوحة الألوان والخطوط','تجهيز نماذج الاستخدام الرقمي والمطبوع','تسليم دليل هوية وملفات جاهزة'],
 'خطة مشروع ودراسة جدوى':['تعريف المشكلة والقيمة المقترحة','تحديد شرائح العملاء والمنافسين','تقدير التكاليف والإيرادات والسيناريوهات','اختبار الافتراضات قبل الالتزام المالي'],
 'أتمتة إجراءات':['رسم العملية الحالية ونقاط التعطّل','تحديد المدخلات والمخرجات والصلاحيات','بناء سير العمل مع تسجيل الأخطاء','اختبار الحالات الاستثنائية وقياس الوقت الموفر']
 };
 const plan=steps[service]||steps['موقع أو منصة رقمية'];
 const output='AZ9 DIGITAL | موجز مشروع\n'+'='.repeat(30)+'\n\n'+'المخرج المطلوب: '+service+'\n'+'الفكرة: '+idea+'\n'+'المستخدمون المستهدفون: '+audience+'\n'+'الأولوية: '+priority+'\n\n'+'الهدف الأولي\nتطوير حل بسيط يختبر الفكرة ويقدم قيمة واضحة للمستخدمين المستهدفين.\n\n'+'خطة البداية المقترحة\n'+plan.map((s,i)=>(i+1)+'. '+s).join('\n')+'\n\n'+'معايير القبول\n- نسخة أولية قابلة للتجربة على الجوال.\n- وضوح نطاق العمل وما هو خارج النطاق.\n- اختبار الوظائف الأساسية قبل الإطلاق.\n- توثيق التكاليف والخدمات الخارجية قبل التفعيل.\n\n'+'تنبيهات إنتاجية\n- هذه خطة أولية وليست تسعيرًا أو دراسة جدوى مالية معتمدة.\n- التكاليف والمدة النهائية تحدد بعد توضيح النطاق والمتطلبات.\n- لا تعتبر أي خدمة خارجية متصلة حتى يتم إعدادها واختبارها فعليًا.\n\n'+'إعداد: AZ9 Digital | نصنع الممكن';
 document.getElementById('studioOutput').value=output;
 document.getElementById('studioResult').hidden=false;
 status.textContent='تم إنشاء موجز مبدئي داخل المتصفح. راجعه وعدّله قبل استخدامه.';
 document.getElementById('studioResult').scrollIntoView({behavior:'smooth',block:'nearest'});
});
const studioCopy=document.getElementById('studioCopy');
if(studioCopy)studioCopy.addEventListener('click',async()=>{
 const out=document.getElementById('studioOutput');const status=document.getElementById('studioStatus');
 try{await navigator.clipboard.writeText(out.value);status.textContent='تم نسخ الموجز.';}
 catch(e){out.focus();out.select();status.textContent='تعذر النسخ التلقائي على هذا المتصفح. تم تحديد النص؛ اختر نسخ من القائمة.';}
});
const studioDownload=document.getElementById('studioDownload');
if(studioDownload)studioDownload.addEventListener('click',()=>{
 const content=document.getElementById('studioOutput').value;
 const blob=new Blob(['\ufeff'+content],{type:'text/plain;charset=utf-8'});
 const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='AZ9-project-brief.txt';document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
 document.getElementById('studioStatus').textContent='تم تجهيز ملف الموجز للحفظ.';
});


/* AZ9 Launchpad interactions: entirely local, no fake AI claims */
(()=>{
const root=document.getElementById('launchpad');if(!root)return;
let type='site',level='lean';
const typeNames={site:'موقع أو منصة رقمية',ai:'أداة ذكاء اصطناعي',store:'متجر إلكتروني',brand:'هوية بصرية'};
const levels={lean:{name:'انطلاقة اقتصادية',factor:.75,days:'7–14 يومًا'},pro:{name:'احترافي',factor:1.35,days:'2–4 أسابيع'},elite:{name:'تجربة فاخرة',factor:2.1,days:'4–8 أسابيع'}};
const deliverables={site:['خريطة الصفحات ومسار المستخدم','واجهة متجاوبة للجوال والكمبيوتر','نموذج تواصل واختبار الروابط','دليل نشر وصيانة أولي'],ai:['تحديد المهام وحدود المساعد','تصميم واجهة المحادثة','خطة ربط آمن بمزود AI','اختبارات الخصوصية وجودة الردود'],store:['هيكل التصنيفات والمنتجات','صفحات المنتجات والسلة','تصميم رحلة الطلب','خطة ربط الدفع والشحن'],brand:['اتجاه بصري وشخصية العلامة','لوحة ألوان وخطوط','نظام أيقونات وتطبيقات الهوية','دليل استخدام الملفات']};
const stages={site:[['تحديد النطاق','الصفحات والجمهور والوظائف'],['تصميم وبناء','تجهيز الواجهة والمحتوى'],['اختبار وإطلاق','الجوال والروابط والنشر']],ai:[['تعريف الاستخدام','المهام ومصادر المعرفة'],['تصميم وربط','واجهة وخادم آمن ومزود مناسب'],['اختبار الجودة','الخصوصية والتكلفة وحالات الفشل']],store:[['تجهيز الكتالوج','التصنيفات والأسعار والبيانات'],['بناء رحلة الشراء','المنتج والسلة والطلب'],['اختبار الإطلاق','الدفع والشحن ورسائل التأكيد']],brand:[['اكتشاف الهوية','الجمهور والتميّز المطلوب'],['تطوير النظام البصري','الشعار والألوان والتطبيقات'],['التسليم والتوثيق','الملفات ودليل الاستخدام']]};
const range=document.getElementById('budgetRange'),value=document.getElementById('budgetValue');
function money(n){return Math.round(n).toLocaleString('en-US')+' ر.س'}
function updateBudget(){value.textContent=money(+range.value)}
range.addEventListener('input',updateBudget);
root.querySelectorAll('[data-type]').forEach(b=>b.addEventListener('click',()=>{type=b.dataset.type;root.querySelectorAll('[data-type]').forEach(x=>x.classList.toggle('active',x===b));if(!document.getElementById('launchResult').hidden)generate()}));
root.querySelectorAll('[data-level]').forEach(b=>b.addEventListener('click',()=>{level=b.dataset.level;root.querySelectorAll('[data-level]').forEach(x=>x.classList.toggle('active',x===b));if(!document.getElementById('launchResult').hidden)generate()}));
range.addEventListener('change',()=>{if(!document.getElementById('launchResult').hidden)generate()});
document.getElementById('launchGoal').addEventListener('change',()=>{if(!document.getElementById('launchResult').hidden)generate()});
function generate(){
const budget=+range.value,lv=levels[level],goal=document.getElementById('launchGoal').value;
document.getElementById('launchPlaceholder').hidden=true;document.getElementById('launchResult').hidden=false;
document.getElementById('estimateBudget').textContent=money(budget);document.getElementById('estimateLevel').textContent=lv.name;
document.getElementById('deliverableList').innerHTML=deliverables[type].map(x=>'<li>'+x+'</li>').join('');
document.getElementById('timelineList').innerHTML=stages[type].map((s,i)=>'<div class="timeline-step"><span>0'+(i+1)+'</span><div><b>'+s[0]+'</b><small>'+s[1]+'</small></div></div>').join('');
const plan='AZ9 DIGITAL | خريطة تنفيذ المشروع\n'+'='.repeat(34)+'\nنوع المشروع: '+typeNames[type]+'\nمستوى التنفيذ: '+lv.name+'\nالميزانية المستهدفة: '+money(budget)+'\nالهدف: '+goal+'\nالمدة التخطيطية الأولية: '+lv.days+'\n\nالمخرجات المقترحة\n'+deliverables[type].map((x,i)=>(i+1)+'. '+x).join('\n')+'\n\nخطة التنفيذ\n'+stages[type].map((s,i)=>(i+1)+'. '+s[0]+' - '+s[1]).join('\n')+'\n\nملاحظات: تقدير إرشادي غير ملزم. قد تتغير التكلفة والمدة حسب النطاق والمحتوى والتكاملات. خدمات AI والدفع والاستضافة الخارجية تحتاج إلى إعداد فعلي.';
document.getElementById('launchPlanText').value=plan;
}
document.getElementById('launchGenerate').addEventListener('click',()=>{generate();document.getElementById('launchResult').scrollIntoView({behavior:'smooth',block:'nearest'})});
document.getElementById('launchCopy').addEventListener('click',async()=>{const out=document.getElementById('launchPlanText');try{await navigator.clipboard.writeText(out.value);document.getElementById('launchCopy').textContent='تم النسخ ✓'}catch(e){out.hidden=false;out.focus();out.select();document.getElementById('launchCopy').textContent='حدّد النص ثم انسخه'}});
document.getElementById('launchToContact').addEventListener('click',()=>{const brief=document.getElementById('brief');brief.value='نوع المشروع: '+typeNames[type]+'\nمستوى التنفيذ: '+levels[level].name+'\nالميزانية المستهدفة: '+money(+range.value)+'\nالهدف: '+document.getElementById('launchGoal').value+'\n\nالمخرجات والخطة:\n'+document.getElementById('launchPlanText').value;document.getElementById('service').selectedIndex=type==='ai'?1:type==='store'?3:type==='brand'?5:0;document.getElementById('contact').scrollIntoView({behavior:'smooth'})});
})();

const themeToggle=document.getElementById('themeToggle');
if(themeToggle){
 const root=document.documentElement;
 const savedTheme=(()=>{try{return localStorage.getItem('az9-theme')}catch(e){return null}})();
 const applyTheme=theme=>{
  const dark=theme==='dark';
  root.dataset.theme=dark?'dark':'light';
  themeToggle.setAttribute('aria-pressed',String(dark));
  themeToggle.setAttribute('aria-label',dark?'تفعيل الوضع الفاتح':'تفعيل الوضع الداكن');
  themeToggle.title=dark?'التبديل إلى الوضع الفاتح':'التبديل إلى الوضع الداكن';
  const icon=themeToggle.querySelector('.theme-toggle-icon');
  const label=themeToggle.querySelector('.theme-toggle-label');
  if(icon)icon.textContent=dark?'☀':'☾';
  if(label)label.textContent=dark?'فاتح':'داكن';
  const meta=document.querySelector('meta[name="theme-color"]');
  if(meta)meta.content=dark?'#090e18':'#fbfaf7';
 };
 applyTheme(savedTheme==='dark'?'dark':'light');
 themeToggle.addEventListener('click',()=>{
  const next=root.dataset.theme==='dark'?'light':'dark';
  applyTheme(next);
  try{localStorage.setItem('az9-theme',next)}catch(e){}
 });
}
