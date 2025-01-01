import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-management',
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.scss']
})
export class DataManagementComponent  {
  @Input() updateHistory: any[] = [];
  @Output() updateHistoryChange = new EventEmitter<any[]>();

  exportCsvFile(): void {
    let data = 'Index,Message,Date\n';

    this.updateHistory.forEach((update, index) => {
      data += `${index + 1},${update.message},${update.date}\n`;
    });

    const blob = new Blob([data], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'update_history.csv';
    
    // Aciona o download
    link.click();
  }

  importCsvFile(event: any): void {
    const file = event.target.files[0];  // Pega o arquivo selecionado

    if (file && file.type === 'text/csv') {
      const reader = new FileReader();  // Usando o FileReader para ler o arquivo

      reader.onload = (e: any) => {
        const csvData = e.target.result;
        const rows = csvData.split('\n');  // Divide o conteúdo em linhas

        // Ignora o cabeçalho do CSV
        rows.shift();

        // Processa cada linha do arquivo CSV
        const updates = rows.map((row: string) => {
          const [index, message, date] = row.split(',');  // Divide a linha em colunas

          // Retorna um objeto com os dados da atualização
          return { message, date };
        });

        // Atualiza o histórico com os dados importados
        this.updateHistory = updates;
        this.updateHistoryChange.emit(this.updateHistory);
      };

      reader.readAsText(file);  // Lê o conteúdo do arquivo como texto
    } else {
      alert('Please select a valid CSV file.');
    }
  }

}
