const resumeTextArea = document.getElementById("resume-text");
const checkButton = document.getElementById("check-button");
const resultsDiv = document.getElementById("results");

checkButton.addEventListener("click", () => {
    const resumeText = resumeTextArea.value;

    // Perform ATS compatibility checks here
    const results = runATSChecks(resumeText); // Replace with your actual checking logic

    resultsDiv.innerHTML = results;
});

// Example of a simple keyword checking function
function runATSChecks(resumeText) {
    const keywords = ["JavaScript", "HTML", "CSS", "problem-solving", "team player"];
    let keywordCount = 0;

    keywords.forEach(keyword => {
        if (resumeText.includes(keyword)) {
            keywordCount++;
        }
    });

    return `Your resume contains ${keywordCount} out of ${keywords.length} important keywords.`;
}
