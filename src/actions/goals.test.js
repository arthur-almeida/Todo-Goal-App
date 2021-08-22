const rewire = require("rewire")
const goals = rewire("./goals")
const addGoal = goals.__get__("addGoal")
// @ponicode
describe("addGoal", () => {
    test("0", () => {
        let callFunction = () => {
            addGoal(10.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            addGoal(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            addGoal(0.5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            addGoal(1.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            addGoal(-29.45)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            addGoal(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("goals.handleAddGoal", () => {
    test("0", () => {
        let callFunction = () => {
            goals.handleAddGoal("Elio", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            goals.handleAddGoal("Dillenberg", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            goals.handleAddGoal("elio@example.com", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            goals.handleAddGoal(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("goals.handleDeleteGoal", () => {
    test("0", () => {
        let callFunction = () => {
            goals.handleDeleteGoal({ id: 2 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            goals.handleDeleteGoal({ id: "_14" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            goals.handleDeleteGoal({ id: "fake_project_id" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            goals.handleDeleteGoal({ id: "projectId-1969970175" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            goals.handleDeleteGoal({ id: "YOUR_PROJECT_ID" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            goals.handleDeleteGoal(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
