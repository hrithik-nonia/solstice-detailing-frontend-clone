export default function Popup({ onClose }) {
  return (
    <div className="h-screen absolute">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50">
        <div className="w-lg bg-[#1f1f1f] text-white rounded-2xl p-3">
          {/* Heading */}
          <h1 className="text-lg font-bold mb-4">
            This site is trying to open Pick an app.
          </h1>

          {/* Description */}
          <p className="text-xs text-gray-200 mb-3">
            https://www.wix.com wants to open this application.
          </p>

          {/* Checkbox */}
          <label className="flex items-center gap-3 cursor-pointer px-2 mb-10">
            <input
              type="checkbox"
              className="appearance-none w-5 h-5 border-2 border-white rounded-full cursor-pointer checked:bg-white"
            />

            <span className="text-xs  font-semibold">
              Always allow www.wix.com to open links of this type in the
              associated app
            </span>
          </label>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-1 text-sm rounded-xl border border-gray-500 bg-[#3a3a3a] hover:bg-[#4a4a4a]"
            >
              Open
            </button>

            <button
              onClick={onClose}
              className="px-4 py-1 text-sm rounded-xl bg-white text-black hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
