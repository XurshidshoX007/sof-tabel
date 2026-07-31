export default function Home() {
  const data = [
    {
      sana: "31.07.2026",
      brend: "SOF",
      sotuvchi: "Test",
      summa: "1 200 000",
    },
    {
      sana: "31.07.2026",
      brend: "SOF",
      sotuvchi: "Ali",
      summa: "850 000",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-5xl rounded-xl bg-white p-6 shadow">
        <h1 className="mb-6 text-3xl font-bold">
          SOF Tabel
        </h1>

        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3">Sana</th>
              <th className="border p-3">Brend</th>
              <th className="border p-3">Sotuvchi</th>
              <th className="border p-3">Summa</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border p-3">{item.sana}</td>
                <td className="border p-3">{item.brend}</td>
                <td className="border p-3">{item.sotuvchi}</td>
                <td className="border p-3">{item.summa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
