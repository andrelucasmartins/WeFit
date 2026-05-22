import { PurchaseSuccessful } from "@/components/purchase-successful";

export default async function PurchaseCompletedPage() {
  return (
    <main className="flex items-center gap-6 justify-between my-4 max-w-7xl mx-auto sm:p-4 md:p-0">
      <PurchaseSuccessful />
    </main>
  );
}
