interface Car {
  id: string;
  model: string;
  year: number;
  color: string;
  status: boolean;
  buyValue: number;
  doorsQty: number;
  seatsQty: number;
}

export default function Cars() {
  return (
    <section>
      <h1 className="text-white">Carros</h1>
    </section>
  );
}
