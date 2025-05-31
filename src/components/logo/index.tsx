import { ShadcnIcon } from "../shadcn-icon";

export function Logo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <ShadcnIcon />
      <p className="font-medium text-xl">Shadcn/UI</p>
    </div>
  );
}
