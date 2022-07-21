describe('Get User', () => {
    it('should return the second page', () => {
        cy.fixture('url').then((url) => {
            cy.sendGetRequest(url.apiEndpoint + 'api/users?page=2').then(res=> {
                expect(res.status).to.eq(200);
                expect(res.body.page).to.eq(2);
            });
        })
    })

    it('should return 404 not found', () => {
        cy.fixture('url').then((url) => {
            cy.sendGetRequest(url.apiEndpoint + 'api/users/565675').then(res=> {
                expect(res.status).to.eq(404)
            });
        })
    })

    it('should return data of given user id', () => {
        cy.fixture('url').then((url) => {
            cy.sendGetRequest(url.apiEndpoint + 'api/users/2').then(res=> {
                expect(res.status).to.eq(200);
                expect(res.body.data).to.deep.equal({
                    "id": 2,
                    "email": "janet.weaver@reqres.in",
                    "first_name": "Janet",
                    "last_name": "Weaver",
                    "avatar": "https://reqres.in/img/faces/2-image.jpg"
                });

            });
        })
    })
})
