let all = document.getElementById("all")
let approval = document.getElementById("approval")
let approved = document.getElementById("approved")
let sent = document.getElementById("sent")
if (window.location.href == 'http://127.0.0.1:5500/Labels.html') {
    all.style.borderBottom = "3px solid green";
}
else if (window.location.href == 'http://127.0.0.1:5500/approval.html') {
    approval.style.borderBottom = "3px solid green";
}
else if (window.location.href == 'http://127.0.0.1:5500/approved.html') {
    approved.style.borderBottom = "3px solid green";
}
else {
    sent.style.borderBottom = "3px solid green";
}