async function addMoney() {
    const response = await fetch(`/api/money/add`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        alert(`We have depostited 100 into your account!`)
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#money').addEventListener('click', addMoney);