export default function Home() {
  return (
    <div className="w-full h-full font-sans text-text">
      <div className="w-3/6 mx-auto bg-secondary text-center mt-44 rounded-xl">
        <h1 className="pt-4 text-2xl font-semibold">Create a QR-CODE </h1>
        <form action="" method="post" className="flex flex-col p-6">
          <label htmlFor="input" className="p-2 text-xl">
            enter website link
          </label>
          <input type="text" className="w-4/6 mx-auto p-4 rounded-xl" />
        </form>
      </div>
    </div>
  );
}
