function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const baseUrl = "http://localhost:8081/addRecord";
    let formText = document.getElementById('name').value
    
    if (Client.checkUrl(formText)){
        fetch(baseUrl, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: formText})
        })
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('polarity').innerHTML = 'Polarity: ' + res.polarity;
                document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
                document.getElementById('polarity_confidence').innerHTML = 'Polarity_Confidence: ' + res.polarity_confidence;
                document.getElementById('subjectivity_confidence').innerHTML = 'Subjectivity_Confidence: ' + res.subjectivity_confidence;
                document.getElementById('text').innerHTML = 'Data: ' + res.text;
            })
    } else {
        document.getElementById('err').innerHTML = 'Not valid Url formate. Please try again!';
    }
    
}

export { handleSubmit }
