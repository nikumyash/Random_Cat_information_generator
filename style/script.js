
const url = 'https://api.thecatapi.com/v1/breeds';

const api_key = 'live_ApgP9THRG9gZd08yVyEL4X3HfAQEWc4n5edrsPgdHW2Zvb19nMVG3TXe8eflaroS';
const catinfo = document.querySelector('.cat-info');
const catimg = document.querySelector('cat-img');
const catarea = document.querySelector('.cat-area');
const button = document.querySelector('.class-generator-button');
let stored_data =[] ; 
const randgenerator = ()=>{
    return Math.floor(Math.random()*50);
}
const populate = (cat)=>{
    catinfo.innerHTML = `<span class="cat-name">${cat.name}</span>
        <div class="property"><span class="property-name">Description</span><span class="property-desc">${cat.description}</span></div>
        <div class="property"><span class="property-name">Origin</span><span class="property-desc">${cat.orgin}</span></div>
        <div class="property"><span class="property-name">Life Span</span><span class="property-desc">${cat.life_span}</span></div>`
};
button.addEventListener('click',(event)=>{
    const res = fetch(url,{
        'x-api-key':{api_key}
    })
        .then((obj)=>obj.json())
        .then(cats=>{
            catarea.style.display = "grid";
            stored_data =cats
            let cat  = cats[randgenerator()]
            populate(cat);
        });     
});






