it('should calculate the monthly rate correctly', function() {
    // ...
    const values = {
        loanAmount: 10000,
        termYears: 8,
        yearlyRate: 5.8
    };
    expect(calculateMonthlyPayment(values)).toEqual('130.44')
});


it("should return a result with 2 decimal places", function() {
    // ..
    const values = {
        loanAmount: 50000,
        termYears: 2,
        yearlyRate: 7
    };
    expect(calculateMonthlyPayment(values)).toEqual('2238.63')
});

it("should handle very high interest rates", function() {
        const values = {
            loanAmount: 60000,
            termYears: 2,
            yearlyRate: 86
        };
        expect(calculateMonthlyPayment(values)).toEqual('5308.11');

    })
    /// etc