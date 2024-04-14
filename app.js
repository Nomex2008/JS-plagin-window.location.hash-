//http://127.0.0.1:5500/index.html#2
//https://itgid.info/rules#3
//console.log(window.location.hash)
document.addEventListener("DOMContentLoaded", function (event) {
    try {
        if (window.location.hash) {
            if (!window.location.hash) return;
            console.log(window.location.hash)
            
            const hash = +window.location.hash.substring(1);
            console.log(hash);
        
            if (isNaN(hash)) {
                console.log('your hash is NaN!')
                return;
            }

            const element = document.querySelector(`#rules li:nth-child(${hash})`);
            console.log(element);

            if(element) element.classList.add('active');
        }
    }
    catch (err) {
        console.log('hash error!')
    }
})

/*

or 

try {
    if (window.location.hash) {
        if (!window.location.hash) return;
        console.log(window.location.hash)
        
        const hash = +window.location.hash.substring(1);
        console.log(hash);
    
        if (isNaN(hash)) {
            console.log('your hash is NaN!')
            return;
        }

        const element = document.querySelector(`#rules li:nth-child(${hash})`);
        console.log(element);

        if(element) element.classList.add('active');
    }
}
catch (err) {
    console.log('hash error!')
}

or 

if (window.location.hash) {
    if (!window.location.hash) return;
    
    const hash = +window.location.hash.substring(1);

    if (isNaN(hash)) {
        return;
    }

    const element = document.querySelector(`#rules li:nth-child(${hash})`);

    if(element) element.classList.add('active');
}

*/