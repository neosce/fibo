const btn = document.querySelector('#btnFib');
const label = document.querySelector('#showFib');

btn.addEventListener('click', async () => {
    let response = await fetch('/api/v1/get_fibonacci/', {
        method: 'get'
    });
    let result = await response.json();

    label.innerHTML = result.fibonacci.join(', ');
})
