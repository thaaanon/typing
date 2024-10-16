const textToType = "The quick brown fox jumps over the lazy dog.";
let startTime;
let endTime;

document.getElementById("text-to-type").textContent = textToType;

document.getElementById("start-btn").addEventListener("click", () => {
    document.getElementById("user-input").value = '';
    document.getElementById("results").style.display = 'none';
    document.getElementById("user-input").focus();
    startTime = new Date().getTime();
});

document.getElementById("user-input").addEventListener("input", () => {
    const userInput = document.getElementById("user-input").value;
    if (userInput === textToType) {
        endTime = new Date().getTime();
        const timeTaken = (endTime - startTime) / 1000; // in seconds
        const wpm = Math.round((textToType.split(' ').length / timeTaken) * 60);
        
        document.getElementById("time-taken").textContent = `Time Taken: ${timeTaken} seconds`;
        document.getElementById("wpm").textContent = `Words Per Minute: ${wpm}`;
        document.getElementById("results").style.display = 'block';
    }
});
