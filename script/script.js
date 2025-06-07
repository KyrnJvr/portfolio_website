window.onload = function(){
    loadPage('home'); // load home page by default
}

let currentPage = 'home';
let previousPage = '';


function loadPage(page){
    const content = document.getElementById('content');
    const spinner = document.getElementById('spinner');
    

    spinner.classList.remove('fade-out');

    if (page !== currentPage){
        previousPage = currentPage;
        currentPage = page;
    }


    fetch(`pages/${page}.html`)
    .then((res) => {
        if(!res.ok){
            throw new Error(`Page not found`);
        }
        return res.text();
    })
    .then((html) => {
        content.innerHTML = html;
        spinner.classList.add('fade-out');
        
    })
    .catch(() => {
        content.innerHTML = `<h2>Error Loading content</h2><p>Please try again.</p>`;
        spinner.classList.add('fade-out');
    });
}