interface Account {
    id: number;
    idClient: number;
    idExecutive: number;
    amount: number;
}

interface Client {
    id: number;
    rut: string;
}

export class Accounts {

    constructor(public accounts: Account[] = [], public clients: Client[] = []) { }

    getAccountsGreaterThanValue(value: number): Account[] {
        return this.accounts.filter(account => account.amount > value);
    }

    getAccountsOrderByAmountAsc(): Account[] {
        return this.accounts.sort((a, b) => a.amount - b.amount);
    }

    getAccountsOrderByAmountDsc(): Account[] {
        return this.accounts.sort((a, b) => b.amount - a.amount);
    }

    getClientRutByAccounts() {
        return this.accounts.map(account => {
            const client = this.clients.find(client => client.id === account.idClient);
            return client?.rut;
        });
    }

    getClientRutByAccountsGreaterThanValue(value: number) {
        const accounts = this.getAccountsGreaterThanValue(value);
        return accounts.map(account => {
            const client = this.clients.find(client => client.id === account.idClient);
            return client?.rut;
        });
    }
}

const accountsData: Account[] = [
    { id: 1, idClient: 1, idExecutive: 1, amount: 1000 },
    { id: 2, idClient: 1, idExecutive: 2, amount: 2000 },
    { id: 3, idClient: 3, idExecutive: 3, amount: 3000 }];

const clientsData: Client[] = [
    { id: 1, rut: '1-9' },
    { id: 2, rut: '2-7' },
    { id: 3, rut: '3-5' }];
const limit = 1000;

export const accounts = new Accounts(accountsData, clientsData);
console.log(`Account greater than value: ${limit}`, accounts.getAccountsGreaterThanValue(limit));
console.log(`Account order by asc`, accounts.getAccountsOrderByAmountAsc());
console.log(`Account order by dsc`, accounts.getAccountsOrderByAmountDsc());
console.log(`Clients ruts by accounts`, accounts.getClientRutByAccounts());
console.log(`Clients ruts by accounts greater than value: ${limit}`, accounts.getClientRutByAccountsGreaterThanValue(1000));