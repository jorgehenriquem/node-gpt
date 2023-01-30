const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe('ChatGPT', () => {
    describe('POST /chat-gpt', () => {
        it ('should return an ok into application- 200', done => {
            chai.request('http://localhost:3000')
            .get('/')
            .end((err, res) => {
                chai.assert.isNull(err);
                res.should.have.status(200);
                done();
            });
        });
        it ('should return an ok to chatgpt - 200', done => {
            chai.request('http://localhost:3000')
            .get('/chat-gpt')
            .end((err, res) => {
                chai.assert.isNull(err);
                res.should.have.status(200);
                done();
            });
        });
    });
});