

    describe("Drink about tests", function() {
        it("should return Drink Toddy", function(){
            spyOn(window, "alert");
            gameLogic(5);            
            expect(window.alert).toHaveBeenCalledWith("Drink Toddy");
        });
        it("should return Drink Coke", function(){
            spyOn(window, "alert");
            gameLogic(15);            
            expect(window.alert).toHaveBeenCalledWith("Drink Coke");
        });
        it("should return Drink Beer", function(){
            spyOn(window, "alert");
            gameLogic(19);            
            expect(window.alert).toHaveBeenCalledWith("Drink Beer");
        });
        it("should return Drink Whiskey", function(){
            spyOn(window, "alert");
            gameLogic(55);            
            expect(window.alert).toHaveBeenCalledWith("Drink Whiskey");
        });
        it("should return warning", function(){
            spyOn(window, "alert");
            gameLogic(-5);            
            expect(window.alert).toHaveBeenCalledWith("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("should return warning if string", function(){
            spyOn(window, "alert");
            gameLogic("blah");            
            expect(window.alert).toHaveBeenCalledWith("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });