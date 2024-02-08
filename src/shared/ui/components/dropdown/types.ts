export type DropdownItemDTO = {
  text: string;
  id: string;
  icon: string;
  handler: (dto: DropdownItemDTO, event: Event) => void;
}
