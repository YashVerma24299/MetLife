export default function Modal({ open, onClose, children }: any) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-9 rounded-xl shadow-lg relative min-w-[300px]">

        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800 cursor-pointer"
          onClick={onClose}
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
