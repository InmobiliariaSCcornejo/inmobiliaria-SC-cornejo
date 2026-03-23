export default function PaginaInmobiliaria() {
  const numeroWhatsapp = "5493541534352";

  const propiedades = [
    {
      titulo: "Lote en Tanti",
      descripcion: "4.734 m² • Mensura aprobada • Ideal inversión",
      precio: "USD 35.000",
      mensaje: "Hola, me interesa el Lote en Tanti"
    },
    {
      titulo: "Casa en Estancia Vieja",
      descripcion: "2 habitaciones • 800m² terreno",
      precio: "Consultar",
      mensaje: "Hola, me interesa la Casa en Estancia Vieja"
    }
  ];

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>SC Cornejo Inmobiliaria</h1>
      <h2>Propiedades disponibles</h2>

      {propiedades.map((p, i) => (
        <div key={i} style={{ marginBottom: 20 }}>
          <h3>{p.titulo}</h3>
          <p>{p.descripcion}</p>
          <p><strong>{p.precio}</strong></p>

          <a
            href={`https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(p.mensaje)}`}
            target="_blank"
          >
            Consultar por WhatsApp
          </a>
        </div>
      ))}
    </div>
  );
                       }
