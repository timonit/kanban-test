export type DropdownItemDTO = {
  text: string;
  id: string;
  icon: string;
  handler: (id: string) => void;
}
