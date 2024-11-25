fetch('/data/sample-work.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('sample-work');
    data.forEach(work => {
      const workItem = document.createElement('div');
      workItem.innerHTML = `
        <h3>${work.title}</h3>
        <p>${work.description}</p>
      `;
      container.appendChild(workItem);
    });
  })
  .catch(error => console.error('Error loading sample work:', error));
