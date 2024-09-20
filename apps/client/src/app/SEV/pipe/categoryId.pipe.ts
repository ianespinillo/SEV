import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idCategory'
})
export class idCategoryPipe implements PipeTransform {

  // El valor será el id, y args pueden ser otros parámetros opcionales si se necesitan
  transform(value: number, ...args: unknown[]): string {
    // Definimos un mapa con las ids y los nombres correspondientes
    const idNameMap: { [key: number]: string } = {
      1: 'Señal de prevencion',
      2: 'Señal de reglamentacion',
      3: '',
      // Añade más ids y nombres según necesites
    };

    // Retornamos el nombre correspondiente a la id, si no existe se devuelve un valor por defecto
    return idNameMap[value] || 'Nombre desconocido';
  }
}
