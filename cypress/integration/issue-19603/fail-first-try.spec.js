describe('issue-19603', () => {

    let isTrue = false
    it('fails the first time', () => {
        setTimeout(() => {
            isTrue = true
        }, 10)
        expect(isTrue).to.be.true
    });
})
