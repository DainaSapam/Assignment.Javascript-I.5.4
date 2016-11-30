var employee = [];

employee[0] = {
	name: "Emp1", 
	age: 30,
	salary: 50000,
	address: {
		city: "Bangalore",
		state: "Karnataka",
		pincode: "560047"
	}
};

employee[1] = {
	name: "Emp2", 
	age: 26,
	salary: 35000,
	address: {
		city: "Mumbai",
		state: "Maharastra",
		pincode: "123456"
	}
};

employee[2] = {
	name: "Emp3", 
	age: 35,
	salary: 80000,
	address: {
		city: "Bangalore",
		state: "Karnataka",
		pincode: "560045"
	}
};

employee[3] = {
	name: "Emp4", 
	age: 32,
	salary: 60000,
	address: {
		city: "Kolkata",
		state: "West Bengal",
		pincode: "234567"
	}
};

employee[4] = {
	name: "Emp5", 
	age: 25,
	salary: 30000,
	address: {
		city: "Bangalore",
		state: "Karnataka",
		pincode: "560032"
	}
};

console.log("Name: "+employee[2].name);
console.log("Age: "+employee[2].age);
console.log("Salary: "+employee[2].salary);
console.log("Address: "+employee[2].address.city+","+employee[2].address.state+","+employee[2].address.pincode);