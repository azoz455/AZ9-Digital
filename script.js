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

const studioGenerate=document.getElementById('studioGenerate');
if(studioGenerate)studioGenerate.addEventListener('click',()=>{
 const service=document.getElementById('studioService').value;
 const ideaField=document.getElementById('studioIdea');
 const idea=ideaField.value.trim();
 const audience=document.getElementById('studioAudience').value;
 const priority=document.getElementById('studioPriority').value;
 const status=document.getElementById('studioStatus');
 if(!idea){ideaField.focus();ideaField.setCustomValidity('اكتب وصفًا مختصرًا للفكرة أولًا.');ideaField.reportValidity();ideaField.addEventListener('input',()=>ideaField.setCustomValidity(''),{once:true});return;}
 const steps={
 'موقع أو منصة رقمية':['تحديد الصفحات الأساسية ومسار المستخدم','تصميم واجهة متجاوبة للجوال والكمبيوتر','بناء الصفحات وربط نموذج التواصل','اختبار الروابط وسرعة التحميل وإمكانية الوصول'],
 'تطبيق جوال':['رسم رحلات المستخدم والشاشات الأساسية','اختيار التقنية والمنصات المستهدفة','بناء نموذج أولي قابل للتجربة','اختبار الحسابات والإشعارات والبيانات'],
 'مساعد ذكاء اصطناعي':['تحديد مهام المساعد ومصادر المعرفة','اختيار مزود مناسب ومراجعة التكلفة والحدود','إنشاء خادم وسيط يحمي مفاتيح API','اختبار جودة الإجابات والخصوصية وحالات الفشل'],
 'متجر إلكتروني':['ترتيب التصنيفات والمنتجات والأسعار','تصميم صفحة المنتج والسلة ومسار الطلب','ربط الدفع والشحن عند اختيار مزود مناسب','اختبار المخزون والطلبات ورسائل التأكيد'],
 'هوية بصرية':['تحديد الجمهور وشخصية العلامة','تطوير الشعار ولوحة الألوان والخطوط','تجهيز نماذج الاستخدام الرقمي والمطبوع','تسليم دليل هوية وملفات جاهزة'],
 'خطة مشروع ودراسة جدوى':['تعريف المشكلة والقيمة المقترحة','تحديد شرائح العملاء والمنافسين','تقدير التكاليف والإيرادات والسيناريوهات','اختبار الافتراضات قبل الالتزام المالي'],
 'أتمتة إجراءات':['رسم العملية الحالية ونقاط التعطّل','تحديد المدخلات والمخرجات والصلاحيات','بناء سير العمل مع تسجيل الأخطاء','اختبار الحالات الاستثنائية وقياس الوقت الموفر']
 };
 const plan=steps[service]||steps['موقع أو منصة رقمية'];
 const output='AZ9 DIGITAL | موجز مشروع\\n'+'='.repeat(30)+'\\n\\n'+'المخرج المطلوب: '+service+'\\n'+'الفكرة: '+idea+'\\n'+'المستخدمون المستهدفون: '+audience+'\\n'+'الأولوية: '+priority+'\\n\\n'+'خطة البداية المقترحة\\n'+plan.map((s,i)=>(i+1)+'. '+s).join('\\n')+'\\n\\n'+'معايير القبول\\n- نسخة أولية قابلة للتجربة على الجوال.\\n- وضوح نطاق العمل وما هو خارج النطاق.\\n- اختبار الوظائف الأساسية قبل الإطلاق.\\n- توثيق التكاليف والخدمات الخارجية قبل التفعيل.\\n\\n'+'تنبيهات إنتاجية\\n- هذه خطة أولية وليست تسعيرًا أو دراسة جدوى مالية معتمدة.\\n- التكاليف والمدة النهائية تحدد بعد توضيح النطاق والمتطلبات.\\n- لا تعتبر أي خدمة خارجية متصلة حتى يتم إعدادها واختبارها فعليًا.\\n\\n'+'إعداد: AZ9 Digital | نصنع الممكن';
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
 const blob=new Blob(['\\ufeff'+content],{type:'text/plain;charset=utf-8'});
 const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='AZ9-project-brief.txt';document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
 document.getElementById('studioStatus').textContent='تم تجهيز ملف الموجز للحفظ.';
});
