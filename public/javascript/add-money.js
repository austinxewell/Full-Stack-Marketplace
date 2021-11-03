async function addMoney() {
    const response = await fetch(`/api/users/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#money').addEventListener('click', addMoney);