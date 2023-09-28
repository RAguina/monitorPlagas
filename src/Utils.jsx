

export function enableInputs(num) {
    for (let i = 1; i <= num; i++) {
      document.getElementById('porcentaje_afectado' + i).disabled = false;
    }
  }

  // FechaActual.js
export function obtenerFechaActual() {
  const fecha = new Date();
  const dia = String(fecha.getDate()).padStart(2, '0');
  const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript empiezan desde 0
  const ano = fecha.getFullYear();

  return `${dia}/${mes}/${ano}`;
}

export function renderTableRow(bgColor, superficie, porcentaje) {
  return (
    <tr>
      <td className={`mb-1 ${bgColor} border border-gray-200`}>
        {(superficie * porcentaje) / 100}Ha
      </td>
    </tr>
  );
}