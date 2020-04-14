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

export class OnlyAdultsCanConsumeAlcoholValidation
	implements ValidationBase<Person> {
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

export class ConsumeAlcoholValidation implements ValidationBase<Person> {
	isValid: boolean;
	message: string;

	constructor(person: Person) {
		this.message = "sdadasdasd";

		if (person.age < 18) {
			this.isValid = false;
		} else {
			this.isValid = true;
		}
	}
}

export class AlcoholValidation implements ValidationBase<Person> {
	isValid: boolean;
	message: string;

	constructor(person: Person) {
		this.message = "Idade valida zxczxc";

		if (person.age > 10) {
			this.isValid = false;
		} else {
			this.isValid = true;
		}
	}
}

export const pock = () => {
	const person: Person = {
		name: "Flávio",
		age: 12,
	};

	const validations: IValidationBase[] = [
		new OnlyAdultsCanConsumeAlcoholValidation(person),
		new ConsumeAlcoholValidation(person),
		new AlcoholValidation(person),
	];

	console.log(JSON.stringify(validateAll(validations).map((m) => m.message)));
};

const validateAll = (validateList: IValidationBase[]) => {
	return validateList.filter((f) => !f.isValid);
};
