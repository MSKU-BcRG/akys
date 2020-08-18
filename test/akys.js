const akys = artifacts.require('akys');


contract( 'akys' , async(accounts) => {

    let instance;

    //Users
    let user = accounts[0];
    let user2 = accounts[1];
    let user3 = accounts[2];


    beforeEach(async() => {
        instance = await akys.new();
    })


    describe('Set Users', () => {

        it("set CREATER & CHECKER user", async() => {
            await instance.setUser(user2, "CREATER");
            await instance.setUser(user3, "CHECKER");
            const usr = await instance.getUserAuth(user2);
            const usr2 = await instance.getUserAuth(user3);
            assert.equal(usr, "CREATER", "not equal!")
            assert.equal(usr2, "CHECKER", "not equal!")
        })

    })

    describe('All support functions', () => {

        it("Support Functions", async () => {

            //Users
            await instance.setUser(user2, "CREATER")
            await instance.setUser(user3, "CHECKER");

            //Support Functions
            await instance.createSupport("1", "aaa", "financial", "1000", "bank", { from: user2 });
            await instance.createSupport("2", "aaa", "financial", "1000", "bank", { from: user2 });
            await instance.showSupport("1");
            await instance.showSupports();
            await instance.showTotalSupportCount();
            await instance.approveSupport("1", { from: user3 });
            await instance.approveSupport("2", { from: user3 });
            await instance.showAllApprovedSupports();
            await instance.cancelSupport("1", { from: user3 });
            await instance.cancelSupport("2", { from: user3 });
            await instance.showCanceledSupports();
        })
    })

    describe('All need functions', () => {

        it("Need Functions", async () => {

            //Users
            await instance.setUser(user2, "CREATER")
            await instance.setUser(user3, "CHECKER");

            //Need Functions
            await instance.createNeed("1", "aaa", "financial", "1000", { from: user2 });
            await instance.createNeed("2", "aaa", "financial", "1000", { from: user2 });
            await instance.showNeed("1");
            await instance.showNeeds();
            await instance.showTotalNeedCount();
            await instance.approveNeed("1", { from: user3 });
            await instance.approveNeed("2", { from: user3 });
            await instance.showAllApprovedNeeds();
            await instance.cancelNeed("1", { from: user3 });
            await instance.cancelNeed("2", { from: user3 });
            await instance.showCanceledNeeds();
        })
    })
})