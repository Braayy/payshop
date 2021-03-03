type Values = { [name: string]: { value: string, valid: boolean } }
type Validators = { [name: string]: ((value: string) => boolean) | undefined }

type SubmitHandler = (event: { preventDefault: () => void, target: HTMLFormElement }) => void
type ValuesHandler = (values: Values) => void

function validate(values: Values, validators: Validators) {
  for (let name in values) {
    if (values.hasOwnProperty(name)) {
      const value = values[name];

      const validator = validators[name];

      if (validator && !validator(value.value)) {
        value.valid = false;
      }
    }
  }
}

export function useSimpleForm(handler: ValuesHandler, validators: Validators): SubmitHandler {
  return function(event) {
    event.preventDefault();

    const elements = event.target.elements;

    const values: Values = {};

    for (let i = 0; i < elements.length; i++) {
      let input = elements.item(i);

      if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
        if (input.type !== 'submit' && input.type !== 'reset') {
          let valid = true;

          if (input.required && input.value === '') {
            valid = false;
          }

          const key = input.name || input.id;

          values[key] = { value: input.value, valid };
        }
      }
    }

    validate(values, validators);

    handler(values);
  }
}
