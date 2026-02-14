console.log('Hello outSide');
const sections=document.querySelectorAll('section');
for(const section of sections){
    console.log(section);
    section.style.backgroundColor='aqua';
    section.style.borderRadius='20px'
    section.style.padding='20px'
    section.style.margin='10px'
}
const ulLi=document.querySelectorAll('#addStyle');
for(const ul of ulLi){
    ul.classList.add('dom')    
}