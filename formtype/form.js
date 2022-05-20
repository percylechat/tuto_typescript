"use strict";
const form = document.querySelector('.image-upload');
// here we listen for a change of input file
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // document.form[0] is dirty but works, be careful of using a better way to get the form
    console.log('filename: ', document.forms[0]['upload-file'].files[0].name); // error
    getBase64(document.forms[0]['upload-file'].files[0]);
});
// here we get the file and convert it to base64
function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        console.log("base64");
        console.log(reader.result);
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}
if (form != null) {
    const data = new FormData(form);
    for (const pair of data) {
        console.log(pair);
    }
    // OR
    for (const pair of data.entries()) {
        console.log(pair);
    }
}
