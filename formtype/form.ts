const form  = document.querySelector('form_test')
if (form != null ) {
    const data = new FormData(form);
    
    for (const pair of data) {
        console.log(pair)
    }
    // OR
    for (const pair of data.entries()) {
        console.log(pair)
    }
    
}