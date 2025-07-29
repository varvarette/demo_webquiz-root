/*// Check if the user has already submitted the quiz
if (localStorage.getItem('quiz-submitted')) {
  alert('You have already submitted the quiz. Thank you!');
  document.getElementById('submit-btn').disabled = true;
}*/

fetch('http://localhost:5000/api/questions')
  .then(res => res.json())
  .then(data => {
    const form = document.getElementById('quiz-form');
    data.forEach((q, idx) => {
      const div = document.createElement('div');
      div.className = 'question';
      
      // Create the question paragraph
      const questionText = document.createElement('p');
      questionText.innerText = q.question; // <-- handles \n correctly
      div.appendChild(questionText);

      // Create answer choices
      q.choices.forEach(c => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${idx}`;
        input.value = c;

        label.appendChild(input);
        label.appendChild(document.createTextNode(` ${c}`));

        div.appendChild(label);
        div.appendChild(document.createElement('br'));  
      });
      
        form.appendChild(div);
    });
  });

document.getElementById('submit-btn').addEventListener('click', () => {
  const answers = {};
  document.querySelectorAll('.question').forEach((div, idx) => {
    const choice = div.querySelector('input[name="q' + idx + '"]:checked');
    answers['q' + idx] = choice ? choice.value : null;
  });

  fetch('http://localhost:5000/api/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(answers)
  }).then (res => alert("Answers submitted! Thank you."));
   /* localStorage.setItem('quiz-submitted', 'true');  // prevents resubmission
    document.getElementById('submit-btn').disabled = true;
  });*/
});
