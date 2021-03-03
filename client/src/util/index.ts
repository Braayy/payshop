export function getInputValue(elements: HTMLFormControlsCollection, name: string): string | null {
  const element = elements.namedItem(name);

  if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
    return element.value;
  }

  return null;
}

export function instanceOf<T>(discriminator: string, object: any): object is T {
  return discriminator in object;
}
