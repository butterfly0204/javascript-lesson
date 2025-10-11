let hasCompletedCourse = true;
let givesCertificate = false;

function generateCertificate() {
    if (hasCompletedCourse && givesCertificate) {
        console.log("Generating your certificate...");
    }   
    else {
        console.log("You are not eligible for a certificate.");
    }
}

generateCertificate();  



