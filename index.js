let homeStore = document.getElementById("home-score")
let guestStore = document.getElementById("guest-score")
let guestScore = 0
let homeScore = 0


function homeIncrement1() {
    homeScore += 1
    homeStore.textContent = homeScore
}

function homeIncrement2() {
    homeScore += 2
    homeStore.textContent = homeScore
}

function homeIncrement3() {
    homeScore += 3
    homeStore.textContent = homeScore
}

function guestIncrement1() {
    guestScore += 1
    guestStore.textContent = guestScore
}

function guestIncrement2() {
    guestScore += 2
    guestStore.textContent = guestScore
}

function guestIncrement3() {
    guestScore += 3
    guestStore.textContent = guestScore
}

function reset() {
    homeStore.textContent = homeScore = 0
    guestStore.textContent = guestScore = 0
}

function highlightLeader() {
    if (homeScore > guestStore){
        
    }
}