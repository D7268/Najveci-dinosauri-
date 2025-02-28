document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".toggle-button");
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            let description = this.nextElementSibling;
            
            if (description.style.display === "none" || description.style.display === "") {
                description.style.display = "block";
            } else {
                description.style.display = "none";
            }
        });
    });
});
