import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex items-center gap-6 justify-between my-4 max-w-7xl mx-auto sm:p-4 md:p-0">
      <Spinner className="size-20 md:size-25 text-center mt-8 mx-auto" />;
    </div>
  );
}
