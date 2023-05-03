export default function validation (regexp: RegExp, value: string) {
  return regexp.test(value)
}
