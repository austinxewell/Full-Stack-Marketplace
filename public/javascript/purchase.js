async function subtractMoney(event) {
    event.preventDefault();
    
    const response = await fetch(`/api/money/subtract`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        alert('We have subtracted 35 from your account!');
    } else {
        // alert(response.statusText);
        alert('You must be logged in in order to purchase an item. Please log in or create an account.')
    }
};

document.querySelector('#purchase').addEventListener('click', subtractMoney);