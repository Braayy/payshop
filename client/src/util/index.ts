export function getInputValue(elements: HTMLFormControlsCollection, name: string): string | undefined {
  const element = elements.namedItem(name);

  return element instanceof HTMLInputElement ? element.value : undefined;
}
