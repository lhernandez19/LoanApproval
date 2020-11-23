$(document).ready(function(){

    var myRules = 
    {
        salary: {
            required: true,
            min: 1,
            max: 999999,
            digits: true
        },
        creditScore: {
            required: true,
            min: 300,
            max: 850,
            digits: true
        },
        monthsAtJob: {
            required: true,
            min: 1,
            max: 600,
            digits: true
        }
    };

    var myMessages = 
    {
        salary: {
            required: "Fill this in!",
            min: "Enter a valid number",
            max: "Enter a valid number",
            digits: "Enter a valid number"
        },
        creditScore: {
            required: "Fill this in!",
            min: "Enter a valid number",
            max: "Enter a valid number",
            digits: "Enter a valid number"
        },
        monthsAtJob: {
            required: "Fill this in!",
            min: "Enter a valid number",
            max: "Enter a valid number",
            digits: "Enter a valid number"
        }
    };

    $("form").validate({
        submitHandler: loanApproval,
        rules: myRules,
        messages: myMessages
    });

    function loanApproval()
    {
        var salary = $("#salary").val();
        var creditScore = $("#creditScore").val();
        var monthsAtJob = $("#monthsAtJob").val();
        
        if ((salary <= 40000) && (creditScore >= 600) && (monthsAtJob > 12))
        {
            $("#output").text("Congratulation WCTC Bank approved your Loan")
        }
        else if ((salary >= 40000) && (creditScore >= 600) && (monthsAtJob > 12))
        {
            $("#output").text("Congratulation WCTC Bank approved your Loan")
        }
        else if ((salary >= 40000) && (monthsAtJob > 12))
        {
            $("#output").text("Congratulation WCTC Bank approved your Loan")
        }
        else if ((salary >= 40000) && (creditScore >= 600))
        {
            $("#output").text("Congratulation WCTC Bank approved your Loan")
        }
        else
        {
            $("#output").text("We are sorry, WCTC Bank denied your Loan Application")
        }

    }

});