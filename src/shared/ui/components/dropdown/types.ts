import type { VNode } from 'vue';

export type DropdownItemDTO = {
  text: string;
  id: string;
  icon: VNode;
  handler: (dto: DropdownItemDTO, event: Event) => void;
}
