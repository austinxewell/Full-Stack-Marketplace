async function addMoney(event) {
    event.preventDefault();

    const response = await fetch(`/api/money/add`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        alert(`We have depostited 100 into your account!`);
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#addMoney').addEventListener('click', addMoney);