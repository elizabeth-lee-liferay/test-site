function displayDate()
{
    document.getElementById("dateDisplay").innerHTML = Date();
}

function displayPersonalInfo()
{
    document.getElementById("personalInfoDisplay").innerHTML = person.fullName()+", "+person.age+", "+person.gender;
}

var person =
{
    firstName: "Elizabeth", 
    lastName: "Lee", 
    age: 24, 
    gender: "female",
    fullName: function()
    {
        return this.firstName + " " + this.lastName;
    }
};


