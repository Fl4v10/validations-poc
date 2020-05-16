export default interface Person {
	name: string;
	age: number;
}

export interface IValidationBase {
	isValid: boolean;
	message: string;
}

export interface ValidationBase<T> extends IValidationBase {
	isValid: boolean;
	message: string;
}

export class NameValidation implements ValidationBase<Person> {
	isValid: boolean;
	message: string;

	constructor(person: Person) {
		this.message = "Nome inválido";

		if (!person.name || person.name.length < 3) {
			this.isValid = false;
		} else {
			this.isValid = true;
		}
	}
}

export class MinAgeValidation implements ValidationBase<Person> {
	isValid: boolean;
	message: string;

	constructor(person: Person) {
		this.message = "Underage";

		if (person.age < 18) {
			this.isValid = false;
		} else {
			this.isValid = true;
		}
	}
}


export const runValidations = () => {
	const person: Person = {
		name: "Flávio",
		age: 12,
	};

	const validations: IValidationBase[] = [
		new NameValidation(person),
		new MinAgeValidation(person)
	];

	console.log(JSON.stringify(fieldsInvalid(validations).map((m) => m.message)));
};

const fieldsInvalid = (validateList: IValidationBase[]) => {
	return validateList.filter((f) => !f.isValid);
};
