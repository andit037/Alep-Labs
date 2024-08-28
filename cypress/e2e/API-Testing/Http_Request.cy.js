describe('Http Request', () => {
    it('Get Request', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users',

        })
        .then((response)=>{
            expect(response.status).to.eql(200)
            expect(typeof response.body[0].id).to.eql('number')
            expect(typeof response.body[0].name).to.eql('string')
            expect(typeof response.body[0].username).to.eql('string')
            expect(typeof response.body[0].email).to.eql('string')
        })
    });

    it('Post Request', () => {
        const requestBody={
            name:"Aleph QA Test",
            username:"aleph.test",
            email:"aleph.test@mail.com"
        }
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/users',
            body: requestBody,
        })
        .then((response)=>{
            expect(response.status).to.eql(201)
            expect(response.body.name).to.eql(requestBody.name)
            expect(response.body.username).to.eql(requestBody.username)
            expect(response.body.email).to.eql(requestBody.email)
        })
    });
});