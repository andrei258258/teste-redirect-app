
function getDevice() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/android/i.test(userAgent)) {
        return 'android';
    } else if (/iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream) {
        return 'ios';
    } else {
        // For other devices or unknown user agents, you can return a default device type
        return 'other';
    }
}

function redirect_to_device(device, web_url, ios_url){
    if (device === 'android') {
        window.location.href = web_url;
    } else if (device === 'ios') {
        window.location = ios_url;      
        clickedAt = +new Date;
        setTimeout(function() {
            if (+new Date - clickedAt < 2000) {
                window.location = web_url;
                console.log("Erro");
            }
        }, 500);     
    } else {
        window.location.href = web_url;
    }
}

// Using URLSearchParams API
function processParametersWithSearchParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const market_id = urlParams.get('market_id');
    if (!market_id) {
            window.history.go(-1);
    }
    return market_id
}


