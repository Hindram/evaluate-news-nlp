function checkUrl(input) {
        const regexUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        
        if(regexUrl.test(input)){
            return true;
        }else{
            return false;
        }
    }
    
export { checkUrl }

