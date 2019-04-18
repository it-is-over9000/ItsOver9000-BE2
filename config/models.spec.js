const db = require('../data/dbConfig.js');
const Users = require('./models.js');

describe('Users model', () => {

    beforeEach(async () => {
        await db('users').truncate();
    })


    it('should add a new user', async () => {
        await Users.add({ username: 'TestName', password: 'pass' });

        const users = await db('users');
        console.log(users);
        expect(users).toHaveLength(1);
    })


    it('should update the new user', async () => {
        await Users.add({ username: 'TestName', password: 'pass' });

        let id = 1;
        let body = ({ username: 'NewerName' });
        await Users.update(id, body);

        const user = await db('users').where('id', 1);
        expect(user[0]).toEqual({ id: 1, username: 'NewerName', password: 'pass' })
    })


    it('should remove a user', async () => {
        await Users.add({ username: 'TestName', password: 'pass' });
        await Users.add({ username: 'NewerName', password: 'pass' });

        let id = 2;
        await Users.remove(id);

        const users = await db('users');
        expect(users).toHaveLength(1);
        expect(users[0]).toEqual({ id: 1, username: 'TestName', password: 'pass' })
    })


    it('should get the users database', async () => {
        let users = await Users.find();

        expect(users).toEqual([]);
    })

    it('should get a specific user', async () => {
        await Users.add({ username: 'TestName', password: 'pass' });
        await Users.add({ username: 'NewerName', password: 'pass' });

        let id = 2;
        let user = await Users.findBy({ id });
        expect(user[0]).toEqual({ id: 2, username: 'NewerName', password: 'pass' })
    })
})