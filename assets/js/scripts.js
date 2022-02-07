// Checkbox Challenge
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    //check if shift key was down
    // AND that they are checking (rather than unchecking)
    let inBetween = false;

    if(e.shiftKey && this.checked) {
        //loop over every checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log("starting to check inbetween");
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));