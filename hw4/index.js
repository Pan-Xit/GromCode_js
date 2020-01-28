const withdraw = (clients, balances, client, amount) => {
    if (!clients.includes(client)) {
        return "Wrong client name"
    }
    // let clientIndex = clients.indexOf(client);
    let clientIndex = 0;
    for (clientIndex; clientIndex < clients.length; clientIndex++) {
        if (client === clients[clientIndex]) {
            break
        }
    }
    if (amount > balances[clientIndex]) {
        return -1
    }
    balances[clientIndex] -= amount;

    return balances[clientIndex]
}
